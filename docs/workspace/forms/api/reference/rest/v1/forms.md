---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms
root: workspace
fetched_at: 2026-04-23T15:28:43.325Z
---

# REST Resource: forms

## Resource: Form

A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](../../../../../drive/api/guides/about-sdk.md).

JSON representation

```
{
  "formId": string,
  "info": {
    object (Info)
  },
  "settings": {
    object (FormSettings)
  },
  "items": [
    {
      object (Item)
    }
  ],
  "revisionId": string,
  "responderUri": string,
  "linkedSheetId": string,
  "publishSettings": {
    object (PublishSettings)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Output only. The form ID.</p></td></tr><tr><td><code>info</code></td><td><p><code>object (<code>Info</code>)</code></p><p>Required. The title and description of the form.</p></td></tr><tr><td><code>settings</code></td><td><p><code>object (<code>FormSettings</code>)</code></p><p>The form's settings. This must be updated with <code>UpdateSettingsRequest</code>; it is ignored during <code>forms.create</code> and <code>UpdateFormInfoRequest</code>.</p></td></tr><tr><td><code>items[]</code></td><td><p><code>object (<code>Item</code>)</code></p><p>Required. A list of the form's items, which can include section headers, questions, embedded media, etc.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>Output only. The revision ID of the form. Used in the <code>WriteControl</code> in update requests to identify the revision on which the changes are based.</p><p>The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the form <em>content</em> has not changed. Conversely, a changed ID (for the same form and user) usually means the form <em>content</em> has been updated; however, a changed ID can also be due to internal factors such as ID format changes.</p><p>Form content excludes form metadata, including:</p><ul><li>sharing settings (who has access to the form)</li><li><code>publishSettings</code> (if the form supports publishing and if it is published)</li></ul></td></tr><tr><td><code>responderUri</code></td><td><p><code>string</code></p><p>Output only. The form URI to share with responders. This opens a page that allows the user to submit responses but not edit the questions. For forms that have <code>publishSettings</code> value set, this is the published form URI.</p></td></tr><tr><td><code>linkedSheetId</code></td><td><p><code>string</code></p><p>Output only. The ID of the linked Google Sheet which is accumulating responses from this Form (if such a Sheet exists).</p></td></tr><tr><td><code>publishSettings</code></td><td><p><code>object (<code>PublishSettings</code>)</code></p><p>Output only. The publishing settings for a form. This field isn't set for legacy forms because they don't have the <code>publishSettings</code> field. All newly created forms support publish settings.</p><p>Forms with <code>publishSettings</code> value set can call <code>forms.setPublishSettings</code> API to publish or unpublish the form.</p></td></tr></tbody></table>

## Info

The general information for a form.

JSON representation

```
{
  "title": string,
  "documentTitle": string,
  "description": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>Required. The title of the form which is visible to responders.</p></td></tr><tr><td><code>documentTitle</code></td><td><p><code>string</code></p><p>Output only. The title of the document which is visible in Drive. If <code>Info.title</code> is empty, <code>documentTitle</code> may appear in its place in the Google Forms UI and be visible to responders. <code>documentTitle</code> can be set on create, but cannot be modified by a batchUpdate request. Please use the <a href="https://developers.google.com/drive/api/v3/reference/files/update">Google Drive API</a> if you need to programmatically update <code>documentTitle</code>.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the form.</p></td></tr></tbody></table>

## FormSettings

A form's settings.

JSON representation

```
{
  "quizSettings": {
    object (QuizSettings)
  },
  "emailCollectionType": enum (EmailCollectionType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>quizSettings</code></td><td><p><code>object (<code>QuizSettings</code>)</code></p><p>Settings related to quiz forms and grading.</p></td></tr><tr><td><code>emailCollectionType</code></td><td><p><code>enum (<code>EmailCollectionType</code>)</code></p><p>Optional. The setting that determines whether the form collects email addresses from respondents.</p></td></tr></tbody></table>

## QuizSettings

Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.

JSON representation

```
{
  "isQuiz": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>isQuiz</code></td><td><p><code>boolean</code></p><p>Whether this form is a quiz or not. When true, responses are graded based on question <code>Grading</code>. Upon setting to false, all question <code>Grading</code> is deleted.</p></td></tr></tbody></table>

## EmailCollectionType

Optional. The setting that determines whether the form collects email addresses from respondents and how the email addresses are collected. If the form collects email addresses, the values are populated in the `formResponse.respondentEmail` field.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>EMAIL_COLLECTION_TYPE_UNSPECIFIED</code></td><td>Unspecified. This value is unused.</td></tr><tr><td><code>DO_NOT_COLLECT</code></td><td>The form doesn't collect email addresses. Default value if the form owner uses a Google account.</td></tr><tr><td><code>VERIFIED</code></td><td>The form collects email addresses automatically based on the account of the signed-in user. Default value if the form owner uses a Google Workspace account.</td></tr><tr><td><code>RESPONDER_INPUT</code></td><td>The form collects email addresses using a field that the respondent completes on the form.</td></tr></tbody></table>

## Item

A single item of the form. `kind` defines which kind of item it is.

JSON representation

```
{
  "itemId": string,
  "title": string,
  "description": string,

  "questionItem": {
    object (QuestionItem)
  },
  "questionGroupItem": {
    object (QuestionGroupItem)
  },
  "pageBreakItem": {
    object (PageBreakItem)
  },
  "textItem": {
    object (TextItem)
  },
  "imageItem": {
    object (ImageItem)
  },
  "videoItem": {
    object (VideoItem)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>The item ID.</p><p>On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the item.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the item.</p></td></tr><tr><td colspan="2">Union field <code>kind</code>. Required. The kind of item this is. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>questionItem</code></td><td><p><code>object (<code>QuestionItem</code>)</code></p><p>Poses a question to the user.</p></td></tr><tr><td><code>questionGroupItem</code></td><td><p><code>object (<code>QuestionGroupItem</code>)</code></p><p>Poses one or more questions to the user with a single major prompt.</p></td></tr><tr><td><code>pageBreakItem</code></td><td><p><code>object (<code>PageBreakItem</code>)</code></p><p>Starts a new page with a title.</p></td></tr><tr><td><code>textItem</code></td><td><p><code>object (<code>TextItem</code>)</code></p><p>Displays a title and description on the page.</p></td></tr><tr><td><code>imageItem</code></td><td><p><code>object (<code>ImageItem</code>)</code></p><p>Displays an image on the page.</p></td></tr><tr><td><code>videoItem</code></td><td><p><code>object (<code>VideoItem</code>)</code></p><p>Displays a video on the page.</p></td></tr></tbody></table>

## QuestionItem

A form item containing a single question.

JSON representation

```
{
  "question": {
    object (Question)
  },
  "image": {
    object (Image)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>question</code></td><td><p><code>object (<code>Question</code>)</code></p><p>Required. The displayed question.</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p>The image displayed within the question.</p></td></tr></tbody></table>

## Question

Any question. The specific type of question is known by its `kind`.

JSON representation

```
{
  "questionId": string,
  "required": boolean,
  "grading": {
    object (Grading)
  },

  "choiceQuestion": {
    object (ChoiceQuestion)
  },
  "textQuestion": {
    object (TextQuestion)
  },
  "scaleQuestion": {
    object (ScaleQuestion)
  },
  "dateQuestion": {
    object (DateQuestion)
  },
  "timeQuestion": {
    object (TimeQuestion)
  },
  "fileUploadQuestion": {
    object (FileUploadQuestion)
  },
  "rowQuestion": {
    object (RowQuestion)
  },
  "ratingQuestion": {
    object (RatingQuestion)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>questionId</code></td><td><p><code>string</code></p><p>Read only. The question ID.</p><p>On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.</p></td></tr><tr><td><code>required</code></td><td><p><code>boolean</code></p><p>Whether the question must be answered in order for a respondent to submit their response.</p></td></tr><tr><td><code>grading</code></td><td><p><code>object (<code>Grading</code>)</code></p><p>Grading setup for the question.</p></td></tr><tr><td colspan="2">Union field <code>kind</code>. Required. The type of question offered to a respondent. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>choiceQuestion</code></td><td><p><code>object (<code>ChoiceQuestion</code>)</code></p><p>A respondent can choose from a pre-defined set of options.</p></td></tr><tr><td><code>textQuestion</code></td><td><p><code>object (<code>TextQuestion</code>)</code></p><p>A respondent can enter a free text response.</p></td></tr><tr><td><code>scaleQuestion</code></td><td><p><code>object (<code>ScaleQuestion</code>)</code></p><p>A respondent can choose a number from a range.</p></td></tr><tr><td><code>dateQuestion</code></td><td><p><code>object (<code>DateQuestion</code>)</code></p><p>A respondent can enter a date.</p></td></tr><tr><td><code>timeQuestion</code></td><td><p><code>object (<code>TimeQuestion</code>)</code></p><p>A respondent can enter a time.</p></td></tr><tr><td><code>fileUploadQuestion</code></td><td><p><code>object (<code>FileUploadQuestion</code>)</code></p><p>A respondent can upload one or more files.</p></td></tr><tr><td><code>rowQuestion</code></td><td><p><code>object (<code>RowQuestion</code>)</code></p><p>A row of a <code>QuestionGroupItem</code>.</p></td></tr><tr><td><code>ratingQuestion</code></td><td><p><code>object (<code>RatingQuestion</code>)</code></p><p>A respondent can choose a rating from a pre-defined set of icons.</p></td></tr></tbody></table>

## ChoiceQuestion

A radio/checkbox/dropdown question.

JSON representation

```
{
  "type": enum (ChoiceType),
  "options": [
    {
      object (Option)
    }
  ],
  "shuffle": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>type</code></td><td><p><code>enum (<code>ChoiceType</code>)</code></p><p>Required. The type of choice question.</p></td></tr><tr><td><code>options[]</code></td><td><p><code>object (<code>Option</code>)</code></p><p>Required. List of options that a respondent must choose from.</p></td></tr><tr><td><code>shuffle</code></td><td><p><code>boolean</code></p><p>Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent's screen, or to address bias in a survey that might be introduced by always putting the same options first or last.</p></td></tr></tbody></table>

## ChoiceType

The type of choice.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CHOICE_TYPE_UNSPECIFIED</code></td><td>Default value. Unused.</td></tr><tr><td><code>RADIO</code></td><td>Radio buttons: All choices are shown to the user, who can only pick one of them.</td></tr><tr><td><code>CHECKBOX</code></td><td>Checkboxes: All choices are shown to the user, who can pick any number of them.</td></tr><tr><td><code>DROP_DOWN</code></td><td>Drop-down menu: The choices are only shown to the user on demand, otherwise only the current choice is shown. Only one option can be chosen.</td></tr></tbody></table>

## Option

An option for a Choice question.

JSON representation

```
{
  "value": string,
  "image": {
    object (Image)
  },
  "isOther": boolean,

  "goToAction": enum (GoToAction),
  "goToSectionId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string</code></p><p>Required. The choice as presented to the user.</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p>Display image as an option.</p></td></tr><tr><td><code>isOther</code></td><td><p><code>boolean</code></p><p>Whether the option is "other". Currently only applies to <code>RADIO</code> and <code>CHECKBOX</code> choice types, but is not allowed in a <code>QuestionGroupItem</code>.</p></td></tr><tr><td colspan="2">Union field <code>go_to_section</code>. Which section to go to if this option is selected. Currently only applies to <code>RADIO</code> and <code>SELECT</code> choice type, but is not allowed in a <code>QuestionGroupItem</code>. <code>go_to_section</code> can be only one of the following:</td></tr><tr><td><code>goToAction</code></td><td><p><code>enum (<code>GoToAction</code>)</code></p><p>Section navigation type.</p></td></tr><tr><td><code>goToSectionId</code></td><td><p><code>string</code></p><p>Item ID of section header to go to.</p></td></tr></tbody></table>

## GoToAction

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>GO_TO_ACTION_UNSPECIFIED</code></td><td>Default value. Unused.</td></tr><tr><td><code>NEXT_SECTION</code></td><td>Go to the next section.</td></tr><tr><td><code>RESTART_FORM</code></td><td>Go back to the beginning of the form.</td></tr><tr><td><code>SUBMIT_FORM</code></td><td>Submit form immediately.</td></tr></tbody></table>

## Image

Data representing an image.

JSON representation

```
{
  "contentUri": string,
  "altText": string,
  "properties": {
    object (MediaProperties)
  },

  "sourceUri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contentUri</code></td><td><p><code>string</code></p><p>Output only. A URI from which you can download the image; this is valid only for a limited time.</p></td></tr><tr><td><code>altText</code></td><td><p><code>string</code></p><p>A description of the image that is shown on hover and read by screenreaders.</p></td></tr><tr><td><code>properties</code></td><td><p><code>object (<code>MediaProperties</code>)</code></p><p>Properties of an image.</p></td></tr><tr><td colspan="2">Union field <code>image_source</code>. The kind of image source. Exactly one image source field must be set when creating new images. <code>image_source</code> can be only one of the following:</td></tr><tr><td><code>sourceUri</code></td><td><p><code>string</code></p><p>Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched.</p></td></tr></tbody></table>

## MediaProperties

Properties of the media.

JSON representation

```
{
  "alignment": enum (Alignment),
  "width": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>alignment</code></td><td><p><code>enum (<code>Alignment</code>)</code></p><p>Position of the media.</p></td></tr><tr><td><code>width</code></td><td><p><code>integer</code></p><p>The width of the media in pixels. When the media is displayed, it is scaled to the smaller of this value or the width of the displayed form. The original aspect ratio of the media is preserved. If a width is not specified when the media is added to the form, it is set to the width of the media source. Width must be between 0 and 740, inclusive. Setting width to 0 or unspecified is only permitted when updating the media source.</p></td></tr></tbody></table>

## Alignment

Alignment on the page.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ALIGNMENT_UNSPECIFIED</code></td><td>Default value. Unused.</td></tr><tr><td><code>LEFT</code></td><td>Left align.</td></tr><tr><td><code>RIGHT</code></td><td>Right align.</td></tr><tr><td><code>CENTER</code></td><td>Center.</td></tr></tbody></table>

## TextQuestion

A text-based question.

JSON representation

```
{
  "paragraph": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>paragraph</code></td><td><p><code>boolean</code></p><p>Whether the question is a paragraph question or not. If not, the question is a short text question.</p></td></tr></tbody></table>

## ScaleQuestion

A scale question. The user has a range of numeric values to choose from.

JSON representation

```
{
  "low": integer,
  "high": integer,
  "lowLabel": string,
  "highLabel": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>low</code></td><td><p><code>integer</code></p><p>Required. The lowest possible value for the scale.</p></td></tr><tr><td><code>high</code></td><td><p><code>integer</code></p><p>Required. The highest possible value for the scale.</p></td></tr><tr><td><code>lowLabel</code></td><td><p><code>string</code></p><p>The label to display describing the lowest point on the scale.</p></td></tr><tr><td><code>highLabel</code></td><td><p><code>string</code></p><p>The label to display describing the highest point on the scale.</p></td></tr></tbody></table>

## DateQuestion

A date question. Date questions default to just month + day.

JSON representation

```
{
  "includeTime": boolean,
  "includeYear": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>includeTime</code></td><td><p><code>boolean</code></p><p>Whether to include the time as part of the question.</p></td></tr><tr><td><code>includeYear</code></td><td><p><code>boolean</code></p><p>Whether to include the year as part of the question.</p></td></tr></tbody></table>

## TimeQuestion

A time question.

JSON representation

```
{
  "duration": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>duration</code></td><td><p><code>boolean</code></p><p><code>true</code> if the question is about an elapsed time. Otherwise it is about a time of day.</p></td></tr></tbody></table>

## FileUploadQuestion

A file upload question. The API currently does not support creating file upload questions.

JSON representation

```
{
  "folderId": string,
  "types": [
    enum (FileType)
  ],
  "maxFiles": integer,
  "maxFileSize": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>folderId</code></td><td><p><code>string</code></p><p>Required. The ID of the Drive folder where uploaded files are stored.</p></td></tr><tr><td><code>types[]</code></td><td><p><code>enum (<code>FileType</code>)</code></p><p>File types accepted by this question.</p></td></tr><tr><td><code>maxFiles</code></td><td><p><code>integer</code></p><p>Maximum number of files that can be uploaded for this question in a single response.</p></td></tr><tr><td><code>maxFileSize</code></td><td><p><code>string (int64 format)</code></p><p>Maximum number of bytes allowed for any single file uploaded to this question.</p></td></tr></tbody></table>

## FileType

File types that can be uploaded to a file upload question.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>FILE_TYPE_UNSPECIFIED</code></td><td>Default value. Unused.</td></tr><tr><td><code>ANY</code></td><td>No restrictions on type.</td></tr><tr><td><code>DOCUMENT</code></td><td>A Google Docs document.</td></tr><tr><td><code>PRESENTATION</code></td><td>A Google Slides presentation.</td></tr><tr><td><code>SPREADSHEET</code></td><td>A Google Sheets spreadsheet.</td></tr><tr><td><code>DRAWING</code></td><td>A drawing.</td></tr><tr><td><code>PDF</code></td><td>A PDF.</td></tr><tr><td><code>IMAGE</code></td><td>An image.</td></tr><tr><td><code>VIDEO</code></td><td>A video.</td></tr><tr><td><code>AUDIO</code></td><td>An audio file.</td></tr></tbody></table>

## RowQuestion

Configuration for a question that is part of a question group.

JSON representation

```
{
  "title": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>Required. The title for the single row in the <code>QuestionGroupItem</code>.</p></td></tr></tbody></table>

## RatingQuestion

A rating question. The user has a range of icons to choose from.

JSON representation

```
{
  "ratingScaleLevel": integer,
  "iconType": enum (RatingIconType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ratingScaleLevel</code></td><td><p><code>integer</code></p><p>Required. The rating scale level of the rating question.</p></td></tr><tr><td><code>iconType</code></td><td><p><code>enum (<code>RatingIconType</code>)</code></p><p>Required. The icon type to use for the rating.</p></td></tr></tbody></table>

## RatingIconType

The type of icon to use for the rating.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RATING_ICON_TYPE_UNSPECIFIED</code></td><td>Default value. Unused.</td></tr><tr><td><code>STAR</code></td><td>A star icon.</td></tr><tr><td><code>HEART</code></td><td>A heart icon.</td></tr><tr><td><code>THUMB_UP</code></td><td>A thumbs down icon.</td></tr></tbody></table>

## Grading

Grading for a single question

JSON representation

```
{
  "pointValue": integer,
  "correctAnswers": {
    object (CorrectAnswers)
  },
  "whenRight": {
    object (Feedback)
  },
  "whenWrong": {
    object (Feedback)
  },
  "generalFeedback": {
    object (Feedback)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>pointValue</code></td><td><p><code>integer</code></p><p>Required. The maximum number of points a respondent can automatically get for a correct answer. This must not be negative.</p></td></tr><tr><td><code>correctAnswers</code></td><td><p><code>object (<code>CorrectAnswers</code>)</code></p><p>Required. The answer key for the question. Responses are automatically graded based on this field.</p></td></tr><tr><td><code>whenRight</code></td><td><p><code>object (<code>Feedback</code>)</code></p><p>The feedback displayed for correct responses. This feedback can only be set for multiple choice questions that have correct answers provided.</p></td></tr><tr><td><code>whenWrong</code></td><td><p><code>object (<code>Feedback</code>)</code></p><p>The feedback displayed for incorrect responses. This feedback can only be set for multiple choice questions that have correct answers provided.</p></td></tr></tbody></table>

## CorrectAnswers

The answer key for a question.

JSON representation

```
{
  "answers": [
    {
      object (CorrectAnswer)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>answers[]</code></td><td><p><code>object (<code>CorrectAnswer</code>)</code></p><p>A list of correct answers. A quiz response can be automatically graded based on these answers. For single-valued questions, a response is marked correct if it matches any value in this list (in other words, multiple correct answers are possible). For multiple-valued (<code>CHECKBOX</code>) questions, a response is marked correct if it contains exactly the values in this list.</p></td></tr></tbody></table>

## CorrectAnswer

A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer` s may be needed to represent a single correct response option.

JSON representation

```
{
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string</code></p><p>Required. The correct answer value. See the documentation for <code>TextAnswer.value</code> for details on how various value types are formatted.</p></td></tr></tbody></table>

## QuestionGroupItem

Defines a question that comprises multiple questions grouped together.

JSON representation

```
{
  "questions": [
    {
      object (Question)
    }
  ],
  "image": {
    object (Image)
  },

  "grid": {
    object (Grid)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>questions[]</code></td><td><p><code>object (<code>Question</code>)</code></p><p>Required. A list of questions that belong in this question group. A question must only belong to one group. The <code>kind</code> of the group may affect what types of questions are allowed.</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p>The image displayed within the question group above the specific questions.</p></td></tr><tr><td colspan="2">Union field <code>kind</code>. Required. The type of question group, which determines what types of questions are allowed and how they are displayed. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>grid</code></td><td><p><code>object (<code>Grid</code>)</code></p><p>The question group is a grid with rows of multiple choice questions that share the same options. When <code>grid</code> is set, all questions in the group must be of kind <code>row</code>.</p></td></tr></tbody></table>

## Grid

A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.

JSON representation

```
{
  "columns": {
    object (ChoiceQuestion)
  },
  "shuffleQuestions": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>columns</code></td><td><p><code>object (<code>ChoiceQuestion</code>)</code></p><p>Required. The choices shared by each question in the grid. In other words, the values of the columns. Only <code>CHECK_BOX</code> and <code>RADIO</code> choices are allowed.</p></td></tr><tr><td><code>shuffleQuestions</code></td><td><p><code>boolean</code></p><p>If <code>true</code>, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent.</p></td></tr></tbody></table>

## PageBreakItem

This type has no fields.

A page break. The title and description of this item are shown at the top of the new page.

## TextItem

This type has no fields.

A text item.

## ImageItem

An item containing an image.

JSON representation

```
{
  "image": {
    object (Image)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>image</code></td><td><p><code>object (<code>Image</code>)</code></p><p>Required. The image displayed in the item.</p></td></tr></tbody></table>

## VideoItem

An item containing a video.

JSON representation

```
{
  "video": {
    object (Video)
  },
  "caption": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>video</code></td><td><p><code>object (<code>Video</code>)</code></p><p>Required. The video displayed in the item.</p></td></tr><tr><td><code>caption</code></td><td><p><code>string</code></p><p>The text displayed below the video.</p></td></tr></tbody></table>

## Video

Data representing a video.

JSON representation

```
{
  "youtubeUri": string,
  "properties": {
    object (MediaProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>youtubeUri</code></td><td><p><code>string</code></p><p>Required. A YouTube URI.</p></td></tr><tr><td><code>properties</code></td><td><p><code>object (<code>MediaProperties</code>)</code></p><p>Properties of a video.</p></td></tr></tbody></table>

## PublishSettings

The publishing settings of a form.

JSON representation

```
{
  "publishState": {
    object (PublishState)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>publishState</code></td><td><p><code>object (<code>PublishState</code>)</code></p><p>Optional. The publishing state of a form.</p><p>When updating <code>publishState</code>, both <code>isPublished</code> and <code>isAcceptingResponses</code> must be set. However, setting <code>isAcceptingResponses</code> to <code>true</code> and <code>isPublished</code> to <code>false</code> isn't supported and returns an error.</p></td></tr></tbody></table>

## PublishState

The publishing state of a form.

JSON representation

```
{
  "isPublished": boolean,
  "isAcceptingResponses": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>isPublished</code></td><td><p><code>boolean</code></p><p>Required. Whether the form is published and visible to others.</p></td></tr><tr><td><code>isAcceptingResponses</code></td><td><p><code>boolean</code></p><p>Required. Whether the form accepts responses. If <code>isPublished</code> is set to <code>false</code>, this field is forced to <code>false</code>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>batchUpdate</h3></td><td>Change the form with a batch of updates.</td></tr><tr><td><h3>create</h3></td><td>Create a new form using the title given in the provided form message in the request.</td></tr><tr><td><h3>get</h3></td><td>Get a form.</td></tr><tr><td><h3>setPublishSettings</h3></td><td>Updates the publish settings of a form.</td></tr></tbody></table>
