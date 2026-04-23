---
source: https://developers.google.com/apps-script/reference/forms/form-response
root: apps-script
fetched_at: 2026-04-23T15:20:13.987Z
---

# Class FormResponse

## Page Summary

- A FormResponse object represents a response to a Google Form and can be used to access, submit, or generate pre-filled URLs for responses.
- You can retrieve all item responses for a form response using `getItemResponses()`, or specifically retrieve gradable item responses using `getGradableItemResponses()`.
- Individual item responses can be retrieved using `getResponseForItem(item)` or `getGradableResponseForItem(item)`.
- Methods like `getEditResponseUrl()` and `toPrefilledUrl()` allow for generating URLs to edit submitted responses or create pre-filled forms based on existing responses.
- Form responses can be programmatically submitted using the `submit()` method and updated with item grades using `withItemGrade(gradedResponse)`.

A response to the form as a whole. A `FormResponse` can be used in three ways: to access the answers submitted by a respondent (see `getItemResponses()`), to programmatically submit a response to the form (see `withItemResponse(response)` and `submit()`), and to generate a URL for the form which pre-fills fields using the provided answers. `FormResponse` s can be created or accessed from a .

```
// Open a form by ID and log the responses to each question.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const formResponses = form.getResponses();
for (let i = 0; i < formResponses.length; i++) {
  const formResponse = formResponses[i];
  const itemResponses = formResponse.getItemResponses();
  for (let j = 0; j < itemResponses.length; j++) {
    const itemResponse = itemResponses[j];
    Logger.log(
        'Response #%s to the question "%s" was "%s"',
        (i + 1).toString(),
        itemResponse.getItem().getTitle(),
        itemResponse.getResponse(),
    );
  }
}
```

## Detailed documentation

### getEditResponseUrl()

Generates a URL that can be used to edit a response that has already been submitted. If the setting is disabled, the link leads to a page that explains that editing form responses is disabled. Anyone who visits the link can edit the response, although they need an account with access to the form if the setting is enabled. If the setting is enabled, the form records the email address of the user who edited the response instead of the email address of the original respondent.

For a form response that the script has created but not yet submitted, this method returns `null`.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets the first form response.
const formResponse = form.getResponses()[0];

// Gets the edit URL for the first form response and logs it to the console.
const editUrl = formResponse.getEditResponseUrl();
console.log(editUrl);
```

#### Return

`String` — The URL to change a submitted response.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getGradableItemResponses()

Gets all item responses contained in a form response, in the same order that the items appear in the form. This method works similarly to `getItemResponses()`, but to allow for grading a missing answer, it still returns an `ItemResponse` if the corresponding `Item` can be graded (that is, has a point value), even if there isn't an actual response. However, if the `Item` isn't gradable, this method excludes that item from its returned array.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Gets the item responses contained in each form response.
for (const formResponse of formResponses) {
  const gradableItemsResponses = formResponse.getGradableItemResponses();

  // Logs the title and score for each item response to the console.
  for (const gradableItemsResponse of gradableItemsResponses) {
    console.log(\`${gradableItemsResponse.getItem().getTitle()}
       score ${gradableItemsResponse.getScore()}\`);
  }
}
```

#### Return

`ItemResponse[]` — An array of responses to every question item within the form for which the respondent could receive a score.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getGradableResponseForItem(item)

Gets the item response contained in a form response for a given item. This method works similarly to `getResponseForItem(item)`, but to allow for grading a missing answer, it still returns an `ItemResponse` if the corresponding `Item` can be graded (that is, has a point value), even if there isn't an actual response. However, if the `Item` isn't gradable, this method returns `null`.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Gets the item responses contained in a form response.
for (const formResponse of formResponses) {
  const formItemResponses = formResponse.getGradableItemResponses();

  // Logs the title and score for responses to the first item of the form.
  const itemResponse = formResponse.getGradableResponseForItem(
      formItemResponses[0].getItem(),
  );
  console.log(
      \`${itemResponse.getItem().getTitle()} score ${itemResponse.getScore()}\`,
  );
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `item` | `Item` |  |

#### Return

`ItemResponse` — The response for a given item, or `null` if none exists and the item is ungraded.

---

### getId()

Gets the ID of the form response. This method returns `null` if the form response has not been submitted.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Loops through the form responses and logs the ID for each form response to
// the console.
for (const formResponse of formResponses) {
  console.log(\`Response ID: ${formResponse.getId()}\`);
}
```

#### Return

`String|null` — The ID of the form response, or `null` if the form response has not been submitted.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getItemResponses()

Gets all item responses contained in a form response, in the same order that the items appear in the form. If the form response does not contain a response for a given `TextItem`, `DateItem`, `TimeItem`, or `ParagraphTextItem`, the `ItemResponse` returned for that item will have an empty string as the response. If the form response omits a response for any other item type, this method excludes that item from its returned array.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets the responses to the form.
const formResponses = form.getResponses();

// Iterates over the responses.
for (const formResponse of formResponses) {
  // Gets the item responses from each form response.
  const itemResponses = formResponse.getItemResponses();

  // Iterates over the item responses.
  for (const itemResponse of itemResponses) {
    // Logs the items' questions and responses to the console.
    console.log(
        \`Response to the question '${itemResponse.getItem().getTitle()}' was
      '${itemResponse.getResponse()}'\`);
  }
}
```

#### Return

`ItemResponse[]` — An array of responses to every question item within the form for which the respondent provided an answer.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getRespondentEmail()

Gets the email address of the person who submitted a response, if the setting is enabled.

For a form response that the script has created but not yet submitted, this method returns `null`.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Loops through the responses and logs each respondent's email to the console.
// To collect respondent emails, ensure that Form.setCollectEmail(collect) is
// set to true.
for (const formResponse of formResponses) {
  console.log(\`Respondent Email: ${formResponse.getRespondentEmail()}\`);
}
```

#### Return

`String` — The email address of the person who submitted this response, if available, or `null` if the script created this response but has not yet submitted it.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getResponseForItem(item)

Gets the item response contained in this form response for a given item.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets the first item on the form.
const item = form.getItems()[0];

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Loops through the responses and logs each response to the first item to the
// console.
for (const formResponse of formResponses) {
  const itemResponse = formResponse.getResponseForItem(item);
  console.log(itemResponse.getResponse());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `item` | `Item` |  |

#### Return

`ItemResponse` — The response for a given item, or `null` if none exists.

---

### getTimestamp()

Gets the timestamp for a form response submission.

For a form response that the script has created but not yet submitted, this method returns `null`.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Loops through the responses and logs the timestamp of each response to the
// console.
for (const formResponse of formResponses) {
  console.log(\`Timestamp: ${formResponse.getTimestamp()}\`);
}
```

#### Return

`Date` — The timestamp at which this response was submitted, or `null` if the script created this response but has not yet submitted it.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### submit()

Submits the response. Throws a scripting exception if the response has already been submitted.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Creates an empty response for the form.
const formResponse = form.createResponse();

// Submits an empty response.
formResponse.submit();
```

#### Return

`FormResponse` — A newly created response saved to the form's response store.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### toPrefilledUrl()

Generates a URL for the form in which the answers are pre-filled based on the answers in this form response.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets the first form response.
const formResponse = form.getResponses()[0];

// Generates and logs the URL of a pre-filled form response based on the answers
// of the first form response.
const prefilledUrl = formResponse.toPrefilledUrl();
console.log(prefilledUrl);
```

#### Return

`String` — The URL for a form with pre-filled answers.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### withItemGrade(gradedResponse)

Adds the given item response's grades to a form response. This method applies only to form responses that have already been submitted, and only affects stored grades once they are submitted. This method also only updates the item response's grades; it does not affect the actual response (since the response has already been submitted). If this method is called multiple times for the same item, only the last grade is retained. If the ItemResponse contains no grades, this method removes grades for the item.

```
// Programmatically award partial credit for a given response
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
const formResponses = form.getResponses();
const formItems = form.getItems();
for (const formResponse of formResponses) {
  for (const item of formItems) {
    const points = item.asMultipleChoiceItem().getPoints();
    const itemResponse = formResponse.getGradableResponseForItem(item);
    Logger.log('Award half credit for answers containing the word "Kennedy"');
    const answer = itemResponse.getResponse();

    if (answer?.includes('Kennedy')) {
      itemResponse.setScore(points / 2);
      formResponse.withItemGrade(itemResponse);
    }
  }
}
form.submitGrades(formResponses);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `gradedResponse` | `ItemResponse` |  |

#### Return

`FormResponse` — this `FormResponse`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### withItemResponse(response)

Adds the given item response to a form response. This method applies only to form responses that the script has created but not yet submitted; it cannot affect stored responses. If this method is called multiple times for the same item, only the last item response is retained.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Creates a response for the form.
const formResponse = form.createResponse();

// Appends a checkbox item to the form.
const item = form.addCheckboxItem();

// Sets the title of the item to 'Which items are ice cream flavors?'
item.setTitle('Which items are ice cream flavors?');

// Sets choices for the item.
item.setChoices([
  item.createChoice('Vanilla'),
  item.createChoice('Strawberry'),
  item.createChoice('Brick'),
]);

// Creates a response for the item.
const response = item.createResponse(['Vanilla', 'Strawberry']);

// Adds the item response to the form response.
formResponse.withItemResponse(response);

// Submits the form response.
formResponse.submit();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `response` | `ItemResponse` |  |

#### Return

`FormResponse` — This `FormResponse`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
