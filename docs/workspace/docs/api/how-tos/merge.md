---
source: https://developers.google.com/workspace/docs/api/how-tos/merge
root: workspace
fetched_at: 2026-04-23T15:27:07.019Z
---

# Merge text into a document

One useful application of the Google Docs API is to merge information from one or more data sources into a document.

This page outlines how you can take data from an external source and insert it into an existing template document.

A *template* is a special type of document containing the same fixed text for all documents created from the template, along with designated placeholders where other dynamic text can be placed. For example, a contract template might have fixed content, along with spots for the receiver's name, address, and other details. Your app can then merge customer-specific data into the template to create finished documents.

There are several reasons why this approach is useful:

- It's easy for designers to fine-tune a document's design using the Google Docs editor. This is much easier than tuning parameters in your app to set the rendered layout.
- Separating content from presentation is a well-known design principle with many benefits.

![Conceptual diagram of a merge.](https://developers.google.com/static/workspace/docs/api/images/doc-merge.svg)

## A basic recipe

Here's an example of how you can use the Docs API to merge data into a document:

1. Create your document using placeholder content to help you with the design and format. Any text formatting you want to replace is preserved.
2. For each element you'll be inserting, replace the placeholder content with a tag. Be sure to use strings that are unlikely to occur normally. For example, `{{account-holder-name}}` might be a good tag.
3. In your code, use the Google Drive API to make a copy of the document.
4. In your code, use the Docs API's [`batchUpdate()`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) method with the document name and include a [`ReplaceAllTextRequest`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#replacealltextrequest).

Document IDs reference a document and they can be derived from the URL

```
https://docs.google.com/document/d/DOCUMENT_ID/edit
```

## Example

Consider the following example, which replaces 2 fields across all tabs of a template with real values to generate a finished document.

![](https://developers.google.com/static/workspace/docs/api/images/MergeTextDrawing.jpg)

To perform this merge, you can use the code below.

### Java

```
String customerName = "Alice";
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
String date = formatter.format(LocalDate.now());

List requests = new ArrayList<>();
// One option for replacing all text is to specify all tab IDs.
requests.add(new Request()
        .setReplaceAllText(new ReplaceAllTextRequest()
                .setContainsText(new SubstringMatchCriteria()
                        .setText("{{customer-name}}")
                        .setMatchCase(true))
                .setReplaceText(customerName)
                .setTabsCriteria(new TabsCriteria()
                        .addTabIds(TAB_ID_1)
                        .addTabIds(TAB_ID_2)
                        .addTabIds(TAB_ID_3))));
// Another option is to omit TabsCriteria if you are replacing across all tabs.
requests.add(new Request()
        .setReplaceAllText(new ReplaceAllTextRequest()
                .setContainsText(new SubstringMatchCriteria()
                        .setText("{{date}}")
                        .setMatchCase(true))
                .setReplaceText(date)));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest();
service.documents().batchUpdate(DOCUMENT_ID, body.setRequests(requests)).execute();
```

### Node.js

```
let customerName = 'Alice';
let date = yyyymmdd()
let requests = [
  // One option for replacing all text is to specify all tab IDs.
  {
    replaceAllText: {
      containsText: {
        text: '{{customer-name}}',
        matchCase: true,
      },
      replaceText: customerName,
      tabsCriteria: {
        tabIds: [TAB_ID_1, TAB_ID_2, TAB_ID_3],
      },
    },
  },
  // Another option is to omit TabsCriteria if you are replacing across all tabs.
  {
    replaceAllText: {
      containsText: {
        text: '{{date}}',
        matchCase: true,
      },
      replaceText: date,
    },
  },
];

google.options({auth: auth});
google
    .discoverAPI(
        'https://docs.googleapis.com/$discovery/rest?version=v1&key={YOUR_API_KEY}')
    .then(function(docs) {
      docs.documents.batchUpdate(
          {
            documentId: '1yBx6HSnu_gbV2sk1nChJOFo_g3AizBhr-PpkyKAwcTg',
            resource: {
              requests,
            },
          },
          (err, {data}) => {
            if (err) return console.log('The API returned an error: ' + err);
            console.log(data);
          });
    });
```

### Python

```
customer_name = 'Alice'
date = datetime.datetime.now().strftime("%y/%m/%d")

requests = [
        # One option for replacing all text is to specify all tab IDs.
        {
        'replaceAllText': {
            'containsText': {
                'text': '{{customer-name}}',
                'matchCase':  'true'
            },
            'replaceText': customer_name,
            'tabsCriteria': {
                'tabIds': [TAB_ID_1, TAB_ID_2, TAB_ID_3],
            },
        }},
        # Another option is to omit TabsCriteria if you are replacing across all tabs.
        {
        'replaceAllText': {
            'containsText': {
                'text': '{{date}}',
                'matchCase':  'true'
            },
            'replaceText': str(date),
        }
    }
]

result = service.documents().batchUpdate(
    documentId=DOCUMENT_ID, body={'requests': requests}).execute()
```

## Manage templates

For template documents the application defines and owns, create the template using a dedicated account representing the application. [Service accounts](https://developers.google.com/identity/protocols/application-default-credentials) are a good choice and avoid complications with Google Workspace policies that restrict sharing.

When you create instances of documents from templates, always use end-user credentials. This gives users full control over the resulting document and prevents scaling issues related to per-user limits in Drive.

To create a template using a service account, perform the following steps with the application credentials:

1. Create a document using [documents.create](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/create) in the Docs API.
2. Update the permissions to allow the document recipients to read it using [permissions.create](https://developers.google.com/workspace/drive/api/v3/reference/permissions/create) in the Drive API.
3. Update the permissions to allow template authors to write to it using [permissions.create](https://developers.google.com/workspace/drive/api/v3/reference/permissions/create) in the Drive API.
4. Edit the template as required.

To create an instance of the document, perform the following steps with the user credentials:

1. Create a copy of the template using [files.copy](https://developers.google.com/workspace/drive/v3/reference/files/copy) in the Drive API.
2. Replace values using [documents.batchUpdate](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) in the Docs API.
