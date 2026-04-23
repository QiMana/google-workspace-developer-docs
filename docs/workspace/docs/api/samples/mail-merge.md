---
source: https://developers.google.com/workspace/docs/api/samples/mail-merge
root: workspace
fetched_at: 2026-04-23T15:27:27.172Z
---

# Mail merge with Docs API

This guide explains how to use the Google Docs API to perform a mail merge.

## Introduction

A *mail merge* takes values from rows of a spreadsheet or another data source and inserts them into a template document. This lets you create a single primary document (the template) from which you can generate many similar documents, each customized with the data being merged. The result isn't necessarily used for mail or form letters, but can be for any purpose, such as generating a batch of customer invoices.

Mail merge has been around for as long as there have been spreadsheets and word processors, and is part of many business workflows today. The convention is to organize the data as one record per row, with the columns representing fields in the data, as shown in the following table:

|  | Name | Address | Zone |
| --- | --- | --- | --- |
| 1 | UrbanPq | 123 1st St. | West |
| 2 | Pawxana | 456 2nd St. | South |

The sample app on this page shows how you can use the Google Docs, Sheets, and Drive APIs to abstract away the details of how mail merges are performed, protecting users from implementation concerns. More information on this Python sample can be found at the sample's [GitHub repo](https://github.com/googleworkspace/python-samples/tree/main/docs/mail-merge).

## Sample application

This sample app copies your primary template and then merges variables from your designated data source into each of the copies. To try this sample app, first set up your template:

1. [Create a Docs file](../how-tos/documents.md). Choose the template you want to use.
2. Note the new file's document ID. For more information, see [Document ID](../concepts/document.md#document-id).
3. Set the `DOCS_FILE_ID` variable to the document ID.
4. Replace the contact information with template placeholder variables that the app will merge with the selected data.

Here's a [sample letter template](https://drive.google.com/open?id=1Xycxuuv7OhEQUuzbt_Mw0TPMq02MseSD1vZdBJ3nLjk) with placeholders that can be merged with real data from a source such as plain text or Sheets. Here's what that template looks like:

![](https://user-images.githubusercontent.com/1102504/54470461-6b5c7080-4765-11e9-9912-01b44c734118.png)

Next, choose either plain text or Sheets as your data source using the `SOURCE` variable. The sample defaults to plain text, meaning the sample data uses the `TEXT_SOURCE_DATA` variable. To source data from Sheets, update the `SOURCE` variable to `'sheets'` and point it to [our sample sheet](https://drive.google.com/open?id=18yqXLEMx6l__VAIN-Zo52pL18F3rXn0_-K6gZ-vwPcc) (or your own) by setting the `SHEETS_FILE_ID` variable.

Here's what the sheet looks like so you can see the format:

![](https://user-images.githubusercontent.com/1102504/54470464-731c1500-4765-11e9-9110-986519502cdf.png)

Try the app with our sample data, then adapt it to your data and use case. The command-line application works like this:

- Setup
- Fetch the data from the data source
- Loop through each row of data
	- Create a copy of the template
		- Merge the copy with the data
		- Output link to newly-merged document

All newly merged letters also show up in the user's My Drive. An example of a merged letter looks something like this:

![](https://user-images.githubusercontent.com/1102504/54470465-731c1500-4765-11e9-8a0a-93a3bb445d6e.png)

### Source code

### Python

```
import time

import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# Fill-in IDs of your Docs template & any Sheets data source
DOCS_FILE_ID = "195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE"
SHEETS_FILE_ID = "11pPEzi1vCMNbdpqaQx4N43rKmxvZlgEHE9GqpYoEsWw"

# authorization constants

SCOPES = (  # iterable or space-delimited string
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/documents",
    "https://www.googleapis.com/auth/spreadsheets.readonly",
)

# application constants
SOURCES = ("text", "sheets")
SOURCE = "text"  # Choose one of the data SOURCES
COLUMNS = ["to_name", "to_title", "to_company", "to_address"]
TEXT_SOURCE_DATA = (
    (
        "Ms. Lara Brown",
        "Googler",
        "Google NYC",
        "111 8th Ave\nNew York, NY  10011-5201",
    ),
    (
        "Mr. Jeff Erson",
        "Googler",
        "Google NYC",
        "76 9th Ave\nNew York, NY  10011-4962",
    ),
)

# fill-in your data to merge into document template variables
merge = {
    # sender data
    "my_name": "Ayme A. Coder",
    "my_address": "1600 Amphitheatre Pkwy\nMountain View, CA  94043-1351",
    "my_email": "http://google.com",
    "my_phone": "+1-650-253-0000",
    # - - - - - - - - - - - - - - - - - - - - - - - - - -
    # recipient data (supplied by 'text' or 'sheets' data source)
    "to_name": None,
    "to_title": None,
    "to_company": None,
    "to_address": None,
    # - - - - - - - - - - - - - - - - - - - - - - - - - -
    "date": time.strftime("%Y %B %d"),
    # - - - - - - - - - - - - - - - - - - - - - - - - - -
    "body": (
        "Google, headquartered in Mountain View, unveiled the new "
        "Android phone at the Consumer Electronics Show. CEO Sundar "
        "Pichai said in his keynote that users love their new phones."
    ),
}

creds, _ = google.auth.default()
# pylint: disable=maybe-no-member

# service endpoints to Google APIs

DRIVE = build("drive", "v2", credentials=creds)
DOCS = build("docs", "v1", credentials=creds)
SHEETS = build("sheets", "v4", credentials=creds)

def get_data(source):
  """Gets mail merge data from chosen data source."""
  try:
    if source not in {"sheets", "text"}:
      raise ValueError(
          f"ERROR: unsupported source {source}; choose from {SOURCES}"
      )
    return SAFE_DISPATCH[source]()
  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

def _get_text_data():
  """(private) Returns plain text data; can alter to read from CSV file."""
  return TEXT_SOURCE_DATA

def _get_sheets_data(service=SHEETS):
  """(private) Returns data from Google Sheets source. It gets all rows of
  'Sheet1' (the default Sheet in a new spreadsheet), but drops the first
  (header) row. Use any desired data range (in standard A1 notation).
  """
  return (
      service.spreadsheets()
      .values()
      .get(spreadsheetId=SHEETS_FILE_ID, range="Sheet1")
      .execute()
      .get("values")[1:]
  )
  # skip header row

# data source dispatch table [better alternative vs. eval()]
SAFE_DISPATCH = {k: globals().get(f"_get_{k}_data") for k in SOURCES}

def _copy_template(tmpl_id, source, service):
  """(private) Copies letter template document using Drive API then
  returns file ID of (new) copy.
  """
  try:
    body = {"name": f"Merged form letter ({source})"}
    return (
        service.files()
        .copy(body=body, fileId=tmpl_id, fields="id")
        .execute()
        .get("id")
    )
  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

def merge_template(tmpl_id, source, service):
  """Copies template document and merges data into newly-minted copy then
  returns its file ID.
  """
  try:
    # copy template and set context data struct for merging template values
    copy_id = _copy_template(tmpl_id, source, service)
    context = merge.iteritems() if hasattr({}, "iteritems") else merge.items()

    # "search & replace" API requests for mail merge substitutions
    reqs = [
        {
            "replaceAllText": {
                "containsText": {
                    "text": "{{%s}}" % key.upper(),  # {{VARS}} are uppercase
                    "matchCase": True,
                },
                "replaceText": value,
            }
        }
        for key, value in context
    ]

    # send requests to Docs API to do actual merge
    DOCS.documents().batchUpdate(
        body={"requests": reqs}, documentId=copy_id, fields=""
    ).execute()
    return copy_id
  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  # get row data, then loop through & process each form letter
  data = get_data(SOURCE)  # get data from data source
  for i, row in enumerate(data):
    merge.update(dict(zip(COLUMNS, row)))
    print(
        "Merged letter %d: docs.google.com/document/d/%s/edit"
        % (i + 1, merge_template(DOCS_FILE_ID, SOURCE, DRIVE))
    )
```

For more information, see the `README` file and the full application source code at the sample app's [GitHub repo](https://github.com/googleworkspace/python-samples/tree/main/docs/mail-merge).

## Related topics

- [Send personalized emails with mail merge](https://support.google.com/mail/answer/12921167)
- [Create a mail merge with Gmail & Google Sheets](../../../../apps-script/samples/automations/mail-merge.md)
