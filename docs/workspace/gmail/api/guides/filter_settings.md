---
source: https://developers.google.com/workspace/gmail/api/guides/filter_settings
root: workspace
fetched_at: 2026-04-23T15:28:50.994Z
---

# Manage Gmail filters

This document explains how to use filters in the Gmail API.

You can use the [`settings.filters`](../reference/rest/v1/users.settings.filters.md) resource to configure advanced filtering rules for an account. Filters can automatically add or remove [labels](./labels.md) or forward emails to [verified aliases](./forwarding_settings.md) based on the attributes or content of the incoming message.

For information on how to [create](../reference/rest/v1/users.settings.filters/create.md), [list](../reference/rest/v1/users.settings.filters/list.md), [get](../reference/rest/v1/users.settings.filters/get.md), or [delete](../reference/rest/v1/users.settings.filters/delete.md) Gmail filters, see the [`settings.filters`](../reference/rest/v1/users.settings.filters.md) resource.

## Match criteria

Filter messages by properties such as the sender, subject, date, size, and message contents. Filters only apply to specific messages and not the entire email thread. Any query using Gmail's [advanced search syntax](https://support.google.com/mail/answer/7190) can also be used in a filter. For example, common filter patterns include:

| Filter | Matches |
| --- | --- |
| `criteria.from='sender@example.com'` | Emails from `sender@example.com` |
| `criteria.size=10485760`   `criteria.sizeComparison='larger'` | Emails larger than 10 MB |
| `criteria.hasAttachment=true` | Emails with an attachment |
| `criteria.subject='[People with Pets]'` | Emails with `[People with Pets]` in the subject |
| `criteria.query='"my important project"'` | Emails containing `my important project` |
| `criteria.negatedQuery='"secret knock"'` | Emails not containing `secret knock` |

If multiple criteria are present in a filter, a message must satisfy all criteria for the filter to apply.

## Actions

Apply an [`Action`](../reference/rest/v1/users.settings.filters.md#action) to messages matching the filter criteria. With an `Action`, you can forward messages to a verified email address, or add and remove [labels](./labels.md).

Add or remove labels to change the disposition of the email. For example, some common actions include:

| Action | Effect |
| --- | --- |
| `action.removeLabelIds=['INBOX']` | Archive the email (skip the inbox) |
| `action.removeLabelIds=['UNREAD']` | Mark as read |
| `action.removeLabelIds=['SPAM']` | Never mark as spam |
| `action.removeLabelIds=['IMPORTANT']` | Never mark as important |
| `action.addLabelIds=['IMPORTANT']` | Mark as important |
| `action.addLabelIds=['TRASH']` | Delete the email |
| `action.addLabelIds=['STARRED']` | Mark as starred |
| `action.addLabelIds=['<user label id>']` | Tag the mail with a user-defined label. Only one user-defined label is allowed per filter. |

## Code samples

The following code samples show how to label and archive messages from a mailing list:

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.Filter;
import com.google.api.services.gmail.model.FilterAction;
import com.google.api.services.gmail.model.FilterCriteria;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.util.Arrays;

/* Class to demonstrate the use of Gmail Create Filter API */
public class CreateFilter {
  /**
   * Create a new filter.
   *
   * @param labelId - ID of the user label to add
   * @return the created filter id, {@code null} otherwise.
   * @throws IOException - if service account credentials file not found.
   */
  public static String createNewFilter(String labelId) throws IOException {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(GmailScopes.GMAIL_SETTINGS_BASIC,
            GmailScopes.GMAIL_LABELS);
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(credentials);

    // Create the gmail API client
    Gmail service = new Gmail.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Gmail samples")
        .build();

    try {
      // Filter the mail from sender and archive them(skip the inbox)
      Filter filter = new Filter()
          .setCriteria(new FilterCriteria()
              .setFrom("gduser2@workspacesamples.dev"))
          .setAction(new FilterAction()
              .setAddLabelIds(Arrays.asList(labelId))
              .setRemoveLabelIds(Arrays.asList("INBOX")));

      Filter result = service.users().settings().filters().create("me", filter).execute();
      // Prints the new created filter ID
      System.out.println("Created filter " + result.getId());
      return result.getId();
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 403) {
        System.err.println("Unable to create filter: " + e.getDetails());
      } else {
        throw e;
      }
    }
    return null;
  }
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def create_filter():
  """Create a filter.
  Returns: Draft object, including filter id.

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)

    label_name = "IMPORTANT"
    filter_content = {
        "criteria": {"from": "gsuder1@workspacesamples.dev"},
        "action": {
            "addLabelIds": [label_name],
            "removeLabelIds": ["INBOX"],
        },
    }

    # pylint: disable=E1101
    result = (
        service.users()
        .settings()
        .filters()
        .create(userId="me", body=filter_content)
        .execute()
    )
    print(f'Created filter with id: {result.get("id")}')

  except HttpError as error:
    print(f"An error occurred: {error}")
    result = None

  return result.get("id")

if __name__ == "__main__":
  create_filter()
```

## Related topics

- [Search and filter messages](./filtering.md)
