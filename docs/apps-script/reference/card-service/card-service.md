---
source: https://developers.google.com/apps-script/reference/card-service/card-service
root: apps-script
fetched_at: 2026-04-23T15:19:01.955Z
---

# Class CardService

## Page Summary

- CardService allows you to create generic cards for use in various Google extensibility products like Google Workspace add-ons.
- You can return single or multiple cards using the CardService.
- Cards can be built with headers, text, images, and interactive elements like menu items.
- CardService provides numerous methods for creating different card components such as buttons, sections, and input fields.

CardService provides the ability to create generic cards used across different Google extensibility products, such as [Google Workspace add-ons](../../../workspace/add-ons/how-tos/building-workspace-addons.md).

Below is a sample for an add-ons card.

```
function createCard() {
  return CardService.newCardBuilder()
      .setHeader(CardService.newCardHeader().setTitle('CardTitle'))
      .build();
}
```

Or you can return multiple Cards like so:

```
function createCards() {
  return [
    CardService.newCardBuilder().build(),
    CardService.newCardBuilder().build(),
    CardService.newCardBuilder().build(),
  ];
}
```

The following shows how you could define a card with a header, text, an image and a menu item:

```
function createWidgetDemoCard() {
  return CardService.newCardBuilder()
      .setHeader(
          CardService.newCardHeader()
              .setTitle('Widget demonstration')
              .setSubtitle('Check out these widgets')
              .setImageStyle(CardService.ImageStyle.SQUARE)
              .setImageUrl('https://www.example.com/images/headerImage.png'),
          )
      .addSection(
          CardService.newCardSection()
              .setHeader('Simple widgets')  // optional
              .addWidget(
                  CardService.newTextParagraph().setText(
                      'These widgets are display-only. ' +
                          'A text paragraph can have multiple lines and ' +
                          'formatting.',
                      ),
                  )
              .addWidget(
                  CardService.newImage().setImageUrl(
                      'https://www.example.com/images/mapsImage.png',
                      ),
                  ),
          )
      .addCardAction(
          CardService.newCardAction().setText('Gmail').setOpenLink(
              CardService.newOpenLink().setUrl('https://mail.google.com/mail'),
              ),
          )
      .build();
}
```

Sample for a Chat Apps card.

```
const cardHeader =
    CardService.newCardHeader()
        .setTitle('Sasha')
        .setSubtitle('Software Engineer')
        .setImageUrl(
            'https://developers.google.com/chat/images/quickstart-app-avatar.png',
            )
        .setImageStyle(CardService.ImageStyle.CIRCLE)
        .setImageAltText('Avatar for Sasha');

const cardSection =
    CardService.newCardSection()
        .setHeader('Contact Info')
        .setCollapsible(true)
        .setNumUncollapsibleWidgets(1)
        .addWidget(
            CardService.newDecoratedText()
                .setStartIcon(
                    CardService.newIconImage().setIcon(CardService.Icon.EMAIL))
                .setText('sasha@example.com'),
            )
        .addWidget(
            CardService.newDecoratedText()
                .setStartIcon(
                    CardService.newIconImage().setIcon(CardService.Icon.PERSON))
                .setText('<font color="#80e27e">Online</font>'),
            )
        .addWidget(
            CardService.newDecoratedText()
                .setStartIcon(
                    CardService.newIconImage().setIcon(CardService.Icon.PHONE))
                .setText('+1 (555) 555-1234'),
            )
        .addWidget(
            CardService.newButtonSet()
                .addButton(
                    CardService.newTextButton().setText('Share').setOpenLink(
                        CardService.newOpenLink().setUrl(
                            'https://example.com/share'),
                        ),
                    )
                .addButton(
                    CardService.newTextButton()
                        .setText('Edit')
                        .setOnClickAction(
                            CardService.newAction()
                                .setFunctionName('goToView')
                                .setParameters({viewType: 'EDIT'}),
                            ),
                    ),
        );

const card = CardService.newCardBuilder()
                 .setHeader(cardHeader)
                 .addSection(cardSection)
                 .build();
```

## Detailed documentation

### newAction()

Creates a new `Action`.

#### Return

`Action` — An empty Action.

---

### newActionResponseBuilder()

Creates a new `ActionResponseBuilder`.

#### Return

`ActionResponseBuilder` — An empty ActionResponse builder.

---

### newActionStatus()

Creates a new `ActionStatus`.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const actionStatus = CardService.newActionStatus()
                         .setStatusCode(CardService.Status.OK)
                         .setUserFacingMessage('Success');
```

#### Return

`ActionStatus` — An empty ActionStatus.

---

### newAttachment()

Creates a new `Attachment`.

#### Return

`Attachment` — An empty attachment.

---

### newAuthorizationAction()

Creates a new `AuthorizationAction`.

#### Return

`AuthorizationAction` — An empty AuthorizationAction.

---

### newAuthorizationException()

Creates a new `AuthorizationException`.

#### Return

`AuthorizationException` — An empty AuthorizationException.

---

### newBorderStyle()

Creates a new `BorderStyle`.

#### Return

`BorderStyle` — An empty BorderStyle.

---

### newButtonSet()

Creates a new `ButtonSet`.

#### Return

`ButtonSet` — An empty ButtonSet.

---

### newCalendarEventActionResponseBuilder()

Creates a new `CalendarEventActionResponseBuilder`.

#### Return

`CalendarEventActionResponseBuilder` — An empty `CalendarEventActionResponseBuilder`.

---

### newCardAction()

Creates a new `CardAction`.

#### Return

`CardAction` — An empty CardAction.

---

### newCardBuilder()

Creates a new Card builder.

#### Return

`CardBuilder` — An empty Card builder.

---

### newCardSection()

Creates a new `CardSection`.

#### Return

`CardSection` — An empty CardSection.

---

### newCardWithId()

Creates a new `CardWithId`. This is used to send a card in a Google Chat message. card ID is a unique identifier for a card in a message when sending multiple cards.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const cardSection = CardService.newCardSection();
cardSection.addWidget(
    CardService.newTextParagraph().setText('This is a text paragraph widget.'),
);

const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .addSection(cardSection)
                 .build();

const cardWithId =
    CardService.newCardWithId().setCardId('card_id').setCard(card);
```

#### Return

`CardWithId` — An empty `CardWithId`.

---

### newCarousel()

Creates a `Carousel`.

```
const carousel =
    CardService.newCarousel()
        .addCarouselCard(CardService.newCarouselCard().addWidget(
            CardService.newTextParagraph().setText('The first text paragraph in carousel')))
        .addCarouselCard(CardService.newCarouselCard().addWidget(
            CardService.newTextParagraph().setText('The second text paragraph in carousel')))
        .addCarouselCard(CardService.newCarouselCard().addWidget(
            CardService.newTextParagraph().setText('The third text paragraph in carousel')))
```

#### Return

`Carousel` — An empty Carousel.

---

### newCarouselCard()

Creates a new `CarouselCard`.

```
const carouselCard = CardService.newCarouselCard().addWidget(
    CardService.newTextParagraph().setText('Text paragraph in carousel'));
```

#### Return

`CarouselCard` — An empty Chip.

---

### newChatActionResponse()

Creates a new `ChatActionResponse`.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .build();
const dialog = CardService.newDialog().setBody(card);

const dialogAction = CardService.newDialogAction().setDialog(dialog);

const chatActionResponse = CardService.newChatActionResponse()
                               .setResponseType(CardService.ResponseType.DIALOG)
                               .setDialogAction(dialogAction);
```

#### Return

`ChatActionResponse` — An empty `ChatActionResponse`.

---

### newChatResponseBuilder()

Creates a new `ChatResponseBuilder`.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const cardSection = CardService.newCardSection();
cardSection.addWidget(
    CardService.newTextParagraph().setText('This is a text paragraph widget.'),
);

const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .addSection(cardSection)
                 .build();

const cardWithId =
    CardService.newCardWithId().setCardId('card_id').setCard(card);

const chatResponse =
    CardService.newChatResponseBuilder().addCardsV2(cardWithId).build();
```

#### Return

`ChatResponseBuilder` — An empty ChatResponseBuilder.

---

### newChip()

Creates a new `Chip`.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const chip = CardService.newChip()
                 .setLabel('Open Link')
                 .setOpenLink(CardService.newOpenLink().setUrl(
                     'https://www.google.com'));
```

#### Return

`Chip` — An empty Chip.

---

### newChipList()

Creates a new `ChipList`.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const chip = CardService.newChip();
// Finish building the text chip...

const chipList = CardService.newChipList()
                     .setLayout(CardService.ChipListLayout.WRAPPED)
                     .addChip(chip);
```

#### Return

`ChipList` — An empty ChipList.

---

### newCollapseControl()

Creates a new `CollapseControl`.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const collapseControl =
    CardService.newCollapseControl()
        .setHorizontalAlign(CardService.HorizontalAlignment.START)
        .setExpandButton(CardService.newTextButton().setText('Expand'))
        .setCollapseButton(CardService.newTextButton().setText('Collapse'));
```

#### Return

`CollapseControl` — An empty CollapseControl.

---

### newColumn()

Creates a new `Column`.

Available for Google Chat apps and Google Workspace add-ons.

```
const columnWidget = CardService.newTextParagraph();
const column =
    CardService.newColumn()
        .setHorizontalSizeStyle(
            CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
        .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
        .setVerticalAlignment(CardService.VerticalAlignment.CENTER)
        .addWidget(columnWidget);
```

#### Return

`Column` — An empty Column.

---

### newColumns()

Creates a new set of `Columns`.

Available for Google Chat apps and Google Workspace add-ons.

```
const firstColumn =
    CardService.newColumn()
        .setHorizontalSizeStyle(
            CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
        .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
        .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
const secondColumn =
    CardService.newColumn()
        .setHorizontalSizeStyle(
            CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
        .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
        .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
const columns = CardService.newColumns()
                    .addColumn(firstColumn)
                    .addColumn(secondColumn)
                    .setWrapStyle(CardService.WrapStyle.WRAP);
```

#### Return

`Columns` — An empty set of Columns.

---

### newComposeActionResponseBuilder()

Creates a new `ComposeActionResponseBuilder`.

#### Return

`ComposeActionResponseBuilder` — An empty ComposeActionResponse builder.

---

### newCondition()

Creates a new `Condition` used for client-side validation.

#### Return

`Condition` — An empty `Condition`.

---

### newDataSourceConfig()

Creates a new, empty `DataSourceConfig`.

#### Return

`DataSourceConfig` — An empty `DataSourceConfig`.

---

### newDatePicker()

Creates a new `DatePicker`.

#### Return

`DatePicker` — An empty DatePicker.

---

### newDateTimePicker()

Creates a new `DateTimePicker`.

#### Return

`DateTimePicker` — An empty DateTimePicker.

---

### newDecoratedText()

Creates a new `DecoratedText`.

#### Return

`DecoratedText` — An empty DecoratedText.

---

### newDialog()

Creates a new `Dialog`.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .build();

// Sets the card of the dialog.
const dialog = CardService.newDialog().setBody(card);
```

#### Return

`Dialog` — An empty `Dialog`.

---

### newDialogAction()

Creates a new `DialogAction`.

Only available for Google Chat apps. Not available for Google Workspace add-ons.

```
const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card title'))
                 .build();
const dialog = CardService.newDialog().setBody(card);

const dialogAction = CardService.newDialogAction().setDialog(dialog);
```

#### Return

`DialogAction` — An empty `DialogAction`.

---

### newDivider()

Creates a new `Divider`. The following sample builds a simple card with 2 paragraphs separated by a divider.

```
function buildCard() {
  const cardSection1TextParagraph1 =
      CardService.newTextParagraph().setText('Hello world!');

  const cardSection1Divider1 = CardService.newDivider();

  const cardSection1TextParagraph2 =
      CardService.newTextParagraph().setText('Hello world!');

  const cardSection1 = CardService.newCardSection()
                           .addWidget(cardSection1TextParagraph1)
                           .addWidget(cardSection1Divider1)
                           .addWidget(cardSection1TextParagraph2);

  const card = CardService.newCardBuilder().addSection(cardSection1).build();

  return card;
}
```

#### Return

`Divider` — A divider.

---

### newDriveDataSourceSpec()

Creates a new `DriveDataSourceSpec`.

#### Return

`DriveDataSourceSpec` — An empty `DriveDataSourceSpec`.

---

### newDriveItemsSelectedActionResponseBuilder()

Creates a new `DriveItemsSelectedActionResponseBuilder`.

#### Return

`DriveItemsSelectedActionResponseBuilder` — An empty `DriveItemsSelectedActionResponseBuilder`.

---

### newEditorFileScopeActionResponseBuilder()

Creates a new `EditorFileScopeActionResponseBuilder`.

#### Return

`EditorFileScopeActionResponseBuilder` — An empty `EditorFileScopeActionResponseBuilder`.

---

### newEventAction()

Creates a new `EventAction` used for client-side validation.

#### Return

`EventAction` — An empty `EventAction`.

---

### newExpressionData()

Creates a new `ExpressionData` used for client-side validation.

#### Return

`ExpressionData` — An empty `ExpressionData`.

---

### newExpressionDataAction()

Creates a new `ExpressionDataAction` used for client-side validation.

#### Return

`ExpressionDataAction` — An empty `ExpressionDataAction`.

---

### newExpressionDataCondition()

Creates a new `ExpressionDataCondition` used for client-side validation.

#### Return

`ExpressionDataCondition` — An empty `ExpressionDataCondition`.

---

### newGrid()

Creates a new `Grid`.

#### Return

`Grid` — An empty Grid.

---

### newGridItem()

Creates a new `GridItem`.

#### Return

`GridItem` — An empty GridItem.

---

### newHostAppDataSource()

Creates a new `HostAppDataSource`.

#### Return

`HostAppDataSource` — A `HostAppDataSource`.

---

### newIconImage()

Creates a new `IconImage`.

#### Return

`IconImage` — An empty icon image.

---

### newImage()

Creates a new `Image`.

#### Return

`Image` — An empty Image.

---

### newImageButton()

Creates a new `ImageButton`.

#### Return

`ImageButton` — An empty ImageButton.

---

### newImageComponent()

Creates a new `ImageComponent`.

#### Return

`ImageComponent` — An empty ImageComponent.

---

### newImageCropStyle()

Creates a new `ImageCropStyle`.

#### Return

`ImageCropStyle` — An empty ImageCropStyle.

---

### newKeyValue()

Creates a new `~~KeyValue~~`.

#### Return

`~~KeyValue~~` — An empty KeyValue.

---

### newLinkPreview()

Creates a new `LinkPreview`.

```
const decoratedText =
    CardService.newDecoratedText().setTopLabel('Hello').setText('Hi!');

const cardSection = CardService.newCardSection().addWidget(decoratedText);

const card = CardService.newCardBuilder().addSection(cardSection).build();

return CardService.newLinkPreview().setPreviewCard(card).setTitle(
    'Smart chip title');
```

#### Return

`LinkPreview` — An empty LinkPreview.

---

### newMaterialIcon()

Creates a new `MaterialIcon`.

Available for Google Chat apps and Google Workspace add-ons.

```
const materialIcon =
    CardService.newMaterialIcon().setName('check_box').setFill(true);

const cardSection = CardService.newCardSection();
cardSection.addWidget(
    CardService.newDecoratedText()
        .setStartIcon(CardService.newIconImage().setMaterialIcon(materialIcon))
        .setText('sasha@example.com'),
);

const card = CardService.newCardBuilder()
                 .setHeader(CardService.newCardHeader().setTitle('Card Title'))
                 .addSection(cardSection)
                 .build();
```

#### Return

`MaterialIcon` — An empty MaterialIcon.

---

### newNotification()

Creates a new `Notification`.

#### Return

`Notification` — An empty Notification.

---

### newOpenLink()

Creates a new `OpenLink`.

#### Return

`OpenLink` — An empty OpenLink.

---

### newOverflowMenu()

Creates a new `OverflowMenu`.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const overflowMenuItem = CardService.newOverflowMenuItem();
// Finish building the overflow menu item...

const overflowMenu =
    CardService.newOverflowMenu().addMenuItem(overflowMenuItem);
```

#### Return

`OverflowMenu` — An empty OverflowMenu.

---

### newOverflowMenuItem()

Creates a new `OverflowMenuItem`.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const overflowMenuItem =
    CardService.newOverflowMenuItem()
        .setStartIcon(
            CardService.newIconImage().setIconUrl(
                'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png',
                ),
            )
        .setText('Open Link')
        .setOpenLink(
            CardService.newOpenLink().setUrl('https://www.google.com'));
```

#### Return

`OverflowMenuItem` — An empty OverflowMenuItem.

---

### newPlatformDataSource()

Creates a new `PlatformDataSource`.

#### Return

`PlatformDataSource` — An empty `PlatformDataSource`.

---

### newSelectionInput()

Creates a new `SelectionInput`.

#### Return

`SelectionInput` — An empty SelectionInput.

---

### newSuggestions()

Creates a new `Suggestions`.

#### Return

`Suggestions` — An empty Suggestions.

---

### newSuggestionsResponseBuilder()

Creates a new `SuggestionsResponseBuilder`.

#### Return

`SuggestionsResponseBuilder` — An empty SuggestionsResponse builder.

---

### newSwitch()

Creates a new `Switch`.

#### Return

`Switch` — An empty Switch.

---

### newTextButton()

Creates a new `TextButton`.

#### Return

`TextButton` — An empty TextButton.

---

### newTextInput()

Creates a new `TextInput`.

#### Return

`TextInput` — An empty TextInput.

---

### newTextParagraph()

Creates a new `TextParagraph`.

#### Return

`TextParagraph` — An empty TextParagraph.

---

### newTimePicker()

Creates a new `TimePicker`.

#### Return

`TimePicker` — An empty TimePicker.

---

### newTrigger()

Creates and returns a new `Trigger` used for client-side validation.

#### Return

`Trigger` — An empty `Trigger`.

---

### newUniversalActionResponseBuilder()

Creates a new `UniversalActionResponseBuilder`.

#### Return

`UniversalActionResponseBuilder` — An empty UniversalActionResponse builder.

---

### newUpdateDraftActionResponseBuilder()

Creates a new `UpdateDraftActionResponseBuilder`.

#### Return

`UpdateDraftActionResponseBuilder` — An empty UpdateDraftActionResponseBuilder.

---

### newUpdateDraftBccRecipientsAction()

Creates a new `UpdateDraftBccRecipientsAction`;

#### Return

`UpdateDraftBccRecipientsAction` — An empty UpdateDraftBccRecipientsAction.

---

### newUpdateDraftBodyAction()

Creates a new `UpdateDraftBodyAction`.

#### Return

`UpdateDraftBodyAction` — An empty UpdateDraftBodyAction.

---

### newUpdateDraftCcRecipientsAction()

Creates a new `UpdateDraftCcRecipientsAction`.

#### Return

`UpdateDraftCcRecipientsAction` — An Empty UpdateDraftCcRecipientsAction.

---

### newUpdateDraftSubjectAction()

Creates a new `UpdateDraftSubjectAction`.

#### Return

`UpdateDraftSubjectAction` — An empty UpdateDraftSubjectAction.

---

### newUpdateDraftToRecipientsAction()

Creates a new `UpdateDraftToRecipientsAction`.

#### Return

`UpdateDraftToRecipientsAction` — An empty UpdateDraftToRecipientsAction.

---

### newUpdateVisibilityAction()

Creates a new `UpdateVisibilityAction`.

#### Return

`UpdateVisibilityAction` — An empty `UpdateVisibilityAction`.

---

### newValidation()

Creates a new `Validation`.

Available for Google Chat apps and Google Workspace add-ons.

```
const validation =
    CardService.newValidation().setCharacterLimit(5).setInputType(
        CardService.InputType.EMAIL);
```

#### Return

`Validation` — An empty validation.

---

### newWorkflowDataSource()

Creates a new `WorkflowDataSource`.

#### Return

`WorkflowDataSource` — An empty `WorkflowDataSource`.
