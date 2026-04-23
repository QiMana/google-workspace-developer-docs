---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/update-draft-action-response
root: apps-script
fetched_at: 2026-04-23T15:18:43.062Z
---

# Class UpdateDraftActionResponse

Represents an action that updates the email draft that the user is currently editing.

```
// An UpdateDraftActionResponse that inserts a list of To recipients into an
// email draft
let updateDraftActionResponse =
    AddOnsResponseService.newUpdateDraftActionResponseBuilder()
        .setUpdateToRecipientsAction(
            AddOnsResponseService.newUpdateToRecipientsAction().addUpdateToRecipients([
              'joe@example.com',
              'wen@example.com',
            ]),
            )
        .build();

// An UpdateDraftActionResponse that inserts a list of Cc recipients into an
// email draft
updateDraftActionResponse =
    AddOnsResponseService.newUpdateDraftActionResponseBuilder()
        .setUpdateCcRecipientsAction(
            AddOnsResponseService.newUpdateCcRecipientsAction().addUpdateCcRecipients([
              'joe@example.com',
              'wen@example.com',
            ]),
            )
        .build()

        // An UpdateDraftActionResponse that inserts a list of Bcc recipients
        // into an email draft
        .setUpdateCcRecipientsAction(
            AddOnsResponseService.newUpdateBccRecipientsAction().addUpdateBccRecipients([
              'joe@example.com',
              'wen@example.com',
            ]),
        );

// An UpdateDraftActionResponse that inserts a subject line into an email draft
updateDraftActionResponse =
    AddOnsResponseService.newUpdateDraftActionResponseBuilder()
        .setUpdateDraftSubjectAction(
            AddOnsResponseService.newUpdateDraftSubjectAction().addUpdateSubject(
                'example subject',
                ),
            )
        .build();

// An UpdateDraftActionResponse that inserts non-editable content (a link in
// this case) into an email draft.
updateDraftActionResponse =
    AddOnsResponseService.newUpdateDraftActionResponseBuilder()
        .setUpdateDraftBodyAction(
            AddOnsResponseService.newUpdateDraftBodyAction()
                .addUpdateContent(
                    '<a href="https://www.google.com">Google</a>',
                    CardService.ContentType.IMMUTABLE_HTML,
                    )
                .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
            )
        .build();

// An UpdateDraftActionResponse that inserts a link into an email draft. The
// added content can be edited further.
updateDraftActionResponse =
    AddOnsResponseService.newUpdateDraftActionResponseBuilder()
        .setUpdateDraftBodyAction(
            AddOnsResponseService.newUpdateDraftBodyAction()
                .addUpdateContent(
                    '<a href="https://www.google.com">Google</a>',
                    CardService.ContentType.MUTABLE_HTML,
                    )
                .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
            )
        .build();

// An UpdateDraftActionResponse that inserts multiple values of different types.
// The example action response inserts two lines next to each other in the email
// draft, at the cursor position. Each line contains the content added by
// {@link UpdateDraftActionResponseBuilder#addUpdateContent}.
updateDraftActionResponse =
    AddOnsResponseService.newUpdateDraftActionResponseBuilder()
        .setUpdateDraftBodyAction(
            AddOnsResponseService.newUpdateDraftBodyAction()
                .addUpdateContent(
                    '<a href="https://www.google.com">Google</a>',
                    CardService.ContentType.MUTABLE_HTML,
                    )
                .addUpdateContent(
                    'Above is a google link.', CardService.ContentType.PLAIN_TEXT)
                .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
            )
        .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
