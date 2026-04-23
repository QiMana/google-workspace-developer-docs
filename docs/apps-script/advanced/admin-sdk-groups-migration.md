---
source: https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration
root: apps-script
fetched_at: 2026-04-23T15:18:00.016Z
---

# Admin SDK Groups Migration Service

## Page Summary

- The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.
- This is an advanced service that requires enabling before use.
- Detailed reference documentation for the Admin SDK Groups Migration API is available.
- Sample code is provided to demonstrate migrating emails from Gmail to a Google Group.

Script to migrate emails to Google Groups discussion archives.

The Admin SDK Groups Migration service lets you use the Admin SDK's [Groups Migration API](https://developers.google.com/admin-sdk/groups-migration) in Google Apps Script. This API gives administrators of Google Workspace domains (including resellers) the ability to migrate emails from public folders and distribution lists to Google Groups discussion archives.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/admin-sdk/groups-migration/v1/reference) for the Admin SDK Groups Migration API. Like all advanced services in Apps Script, the Admin SDK Groups Migration service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the [Admin SDK Groups Migration support guide](https://developers.google.com/admin-sdk/groups-migration/support).

## Sample code

The following sample code uses [version 1](https://developers.google.com/admin-sdk/groups-migration/v1/reference) of the API.

### Migrate emails from Gmail to a Google Group

This sample gets three RFC 822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain.

```
/**
 * Gets three RFC822 formatted messages from the each of the latest three
 * threads in the user's Gmail inbox, creates a blob from the email content
 * (including attachments), and inserts it in a Google Group in the domain.
 */
function migrateMessages() {
  // TODO (developer) - Replace groupId value with yours
  const groupId = "exampleGroup@example.com";
  const messagesToMigrate = getRecentMessagesContent();
  for (const messageContent of messagesToMigrate) {
    const contentBlob = Utilities.newBlob(messageContent, "message/rfc822");
    AdminGroupsMigration.Archive.insert(groupId, contentBlob);
  }
}

/**
 * Gets a list of recent messages' content from the user's Gmail account.
 * By default, fetches 3 messages from the latest 3 threads.
 *
 * @return {Array} the messages' content.
 */
function getRecentMessagesContent() {
  const NUM_THREADS = 3;
  const NUM_MESSAGES = 3;
  const threads = GmailApp.getInboxThreads(0, NUM_THREADS);
  const messages = GmailApp.getMessagesForThreads(threads);
  const messagesContent = [];
  for (let i = 0; i < messages.length; i++) {
    for (let j = 0; j < NUM_MESSAGES; j++) {
      const message = messages[i][j];
      if (message) {
        messagesContent.push(message.getRawContent());
      }
    }
  }
  return messagesContent;
}
```
