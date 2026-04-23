---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service
root: apps-script
fetched_at: 2026-04-23T15:18:35.562Z
---

# Class AddOnsResponseService

`AddOnsResponseService` provides the ability to create responses for Google Workspace add-ons.

Sample usage:

```
function myFunction() {
  return AddOnsResponseService.newChatDataActionBuilder();
}
```

The following example shows how a Chat app responds with a dialog:

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const actionResponse = AddOnsResponseService.newActionResponseBuilder()
    .setNavigation(AddOnsResponseService.newNavigation().pushCard(card))
    .build();
```

The following example shows how a Chat app responds with a link preview card:

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Unfurl Card!"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("url"))
      .addWidget(CardService.newButtonSet()
        .addButton(CardService.newTextButton()
          .setText("Open URL!")
          .setOpenLink(CardService.newOpenLink().setUrl("https://www.google.com")))))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setUpdateInlinePreviewAction(AddOnsResponseService.newUpdateInlinePreviewAction()
    .addCardWithId(cardWithId)).build();
```

## Detailed documentation

### newAccessoryWidget()

Creates a new `AccessoryWidget`.

```
const widget = CardService.newButtonSet()
    .addButton(CardService.newImageButton()
      .setIcon(CardService.Icon.PHONE)
      .setOnClickAction(CardService.newAction()
        .setFunctionName("phone")))
    .addButton(CardService.newTextButton()
      .setText("Robot")
      .setIconUrl("https://developers.google.com/chat/images/quickstart-app-avatar.png")
      .setOnClickAction(CardService.newAction()
        .setFunctionName("robot")));

const accessoryWidget = AddOnsResponseService.newAccessoryWidget()
    .addWidget(widget);
```

#### Return

`AccessoryWidget` — An empty AccessoryWidget.

---

### newAction()

Creates a new `Action`.

#### Return

`Action` — An empty Action.

---

### newActionResponseBuilder()

Creates a `ActionResponseBuilder`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const actionResponse = AddOnsResponseService.newActionResponseBuilder()
    .setNavigation(AddOnsResponseService.newNavigation().pushCard(card))
    .build();
```

#### Return

`ActionResponseBuilder` — An empty ActionResponse builder.

---

### newAddonComposeUiActionResponseBuilder()

Creates a `AddonComposeUiActionResponseBuilder`.

#### Return

`AddonComposeUiActionResponseBuilder` — An empty AddonComposeUiActionResponseBuilder.

---

### newAttachment()

Creates a `Attachment`.

#### Return

`Attachment` — An empty attachment.

---

### newCalendarEventActionResponseBuilder()

Creates a `CalendarEventActionResponseBuilder`.

#### Return

`CalendarEventActionResponseBuilder` — An empty `CalendarEventActionResponseBuilder`.

---

### newChatDataActionBuilder()

Creates a `ChatDataActionsResponseBuilder`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setCreateChatMessageAction(AddOnsResponseService.newCreateMessageAction()
    .setMessage(message))
    .build();
```

#### Return

`ChatDataActionsResponseBuilder` — An empty ChatDataActionsResponseBuilder.

---

### newChatMessage()

Creates a `ChatMessage`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);
```

#### Return

`ChatMessage` — An empty ChatMessage.

---

### newComposeActionResponseBuilder()

Creates a `ComposeActionResponseBuilder`.

#### Return

`ComposeActionResponseBuilder` — An empty ComposeActionResponse builder.

---

### newCreateMessageAction()

Creates a `CreateMessageAction`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setCreateChatMessageAction(AddOnsResponseService.newCreateMessageAction()
    .setMessage(message))
    .build();
```

#### Return

`CreateMessageAction` — An empty CreateMessageAction.

---

### newDriveItemsSelectedActionResponseBuilder()

Creates a `DriveItemsSelectedActionResponseBuilder`.

#### Return

`DriveItemsSelectedActionResponseBuilder` — An empty `DriveItemsSelectedActionResponseBuilder`.

---

### newEditorFileScopeActionResponseBuilder()

Creates a `EditorFileScopeActionResponseBuilder`.

#### Return

`EditorFileScopeActionResponseBuilder` — An empty `EditorFileScopeActionResponseBuilder`.

---

### newLinkPreview()

Creates a `LinkPreview`.

#### Return

`LinkPreview` — An empty LinkPreview.

---

### newNavigation()

Creates a `Navigation`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title'))
    .addSection(cardSection)
    .build();

const navigation = AddOnsResponseService.newNavigation()
    .pushCard(card);
```

#### Return

`Navigation` — An empty Navigation.

---

### newNotification()

Creates a `Notification`.

```
const notification = AddOnsResponseService.newNotification().setText("You closed a dialog!");

const navigation = AddOnsResponseService.newNavigation()
    .setEndNavigation(AddOnsResponseService.EndNavigation.CLOSE_DIALOG);
```

#### Return

`Notification` — An empty Notification.

---

### newOpenLink()

Creates a `OpenLink`.

#### Return

`OpenLink` — An empty OpenLink.

---

### newRenderActionBuilder()

Creates a new `RenderActionBuilder`.

#### Return

`RenderActionBuilder` — An empty RenderActionBuilder.

---

### newUniversalActionResponseBuilder()

Creates a `UniversalActionResponseBuilder`.

#### Return

`UniversalActionResponseBuilder` — An empty UniversalActionResponse builder.

---

### newUpdateDraftActionResponseBuilder()

Creates a `UpdateDraftActionResponseBuilder`.

#### Return

`UpdateDraftActionResponseBuilder` — An empty UpdateDraftActionResponseBuilder.

---

### newUpdateDraftBccRecipientsAction()

Creates a `UpdateDraftBccRecipientsAction`;

#### Return

`UpdateDraftBccRecipientsAction` — An empty UpdateDraftBccRecipientsAction.

---

### newUpdateDraftBodyAction()

Creates a `UpdateDraftBodyAction`.

#### Return

`UpdateDraftBodyAction` — An empty UpdateDraftBodyAction.

---

### newUpdateDraftCcRecipientsAction()

Creates a `UpdateDraftCcRecipientsAction`.

#### Return

`UpdateDraftCcRecipientsAction` — An Empty UpdateDraftCcRecipientsAction.

---

### newUpdateDraftSubjectAction()

Creates a `UpdateDraftSubjectAction`.

#### Return

`UpdateDraftSubjectAction` — An empty UpdateDraftSubjectAction.

---

### newUpdateDraftToRecipientsAction()

Creates a `UpdateDraftToRecipientsAction`.

#### Return

`UpdateDraftToRecipientsAction` — An empty UpdateDraftToRecipientsAction.

---

### newUpdateInlinePreviewAction()

Creates a `UpdateInlinePreviewAction`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Unfurl Card!"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("url"))
      .addWidget(CardService.newButtonSet()
        .addButton(CardService.newTextButton()
          .setText("Open URL!")
          .setOpenLink(CardService.newOpenLink().setUrl("https://www.google.com")))))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setUpdateInlinePreviewAction(AddOnsResponseService.newUpdateInlinePreviewAction()
    .addCardWithId(cardWithId)).build();
```

#### Return

`UpdateInlinePreviewAction` — An empty UpdateInlinePreviewAction.

---

### newUpdateMessageAction()

Creates a `UpdateMessageAction`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("Card Title"))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
    .build();

const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);

const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);

const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
    .setUpdateChatMessageAction(AddOnsResponseService.newUpdateMessageAction()
    .setMessage(message))
    .build();
```

#### Return

`UpdateMessageAction` — An empty UpdateMessageAction.
