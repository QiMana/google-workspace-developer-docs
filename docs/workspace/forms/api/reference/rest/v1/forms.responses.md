---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses
root: workspace
fetched_at: 2026-04-23T15:28:43.706Z
---

# REST Resource: forms.responses

## Resource: FormResponse

A form response.

JSON representation

```
{
  "formId": string,
  "responseId": string,
  "createTime": string,
  "lastSubmittedTime": string,
  "respondentEmail": string,
  "answers": {
    string: {
      object (Answer)
    },
    ...
  },
  "totalScore": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Output only. The form ID.</p></td></tr><tr><td><code>responseId</code></td><td><p><code>string</code></p><p>Output only. The response ID.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp for the first time the response was submitted.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>lastSubmittedTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp for the most recent time the response was submitted. Does not track changes to grades.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>respondentEmail</code></td><td><p><code>string</code></p><p>Output only. The email address (if collected) for the respondent.</p></td></tr><tr><td><code>answers</code></td><td><p><code>map (key: string, value: object (<code>Answer</code>))</code></p><p>Output only. The actual answers to the questions, keyed by questionId.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>totalScore</code></td><td><p><code>number</code></p><p>Output only. The total number of points the respondent received for their submission Only set if the form was a quiz and the response was graded. This includes points automatically awarded via autograding adjusted by any manual corrections entered by the form owner.</p></td></tr></tbody></table>

## Answer

The submitted answer for a question.

JSON representation

```
{
  "questionId": string,
  "grade": {
    object (Grade)
  },

  "textAnswers": {
    object (TextAnswers)
  },
  "fileUploadAnswers": {
    object (FileUploadAnswers)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>questionId</code></td><td><p><code>string</code></p></td></tr><tr><td><code>grade</code></td><td><p><code>object (<code>Grade</code>)</code></p><p>Output only. The grade for the answer if the form was a quiz.</p></td></tr><tr><td colspan="2">Union field <code>value</code>. The user's answer. <code>value</code> can be only one of the following:</td></tr><tr><td><code>textAnswers</code></td><td><p><code>object (<code>TextAnswers</code>)</code></p><p>Output only. The specific answers as text.</p></td></tr><tr><td><code>fileUploadAnswers</code></td><td><p><code>object (<code>FileUploadAnswers</code>)</code></p><p>Output only. The answers to a file upload question.</p></td></tr></tbody></table>

## TextAnswers

A question's answers as text.

JSON representation

```
{
  "answers": [
    {
      object (TextAnswer)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>answers[]</code></td><td><p><code>object (<code>TextAnswer</code>)</code></p><p>Output only. Answers to a question. For multiple-value s, each answer is a separate value.</p></td></tr></tbody></table>

## TextAnswer

An answer to a question represented as text.

JSON representation

```
{
  "value": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>value</code></td><td><p><code>string</code></p><p>Output only. The answer value.</p><p>Formatting used for different kinds of question:</p><ul><li><ul><li><code>RADIO</code> or <code>DROP_DOWN</code>: A single string corresponding to the option that was selected.</li><li><code>CHECKBOX</code>: Multiple strings corresponding to each option that was selected.</li></ul></li><li>: The text that the user entered.</li><li>: A string containing the number that was selected.</li><li><ul><li>Without time or year: MM-DD e.g. "05-19"</li><li>With year: YYYY-MM-DD e.g. "1986-05-19"</li><li>With time: MM-DD HH:MM e.g. "05-19 14:51"</li><li>With year and time: YYYY-MM-DD HH:MM e.g. "1986-05-19 14:51"</li></ul></li><li>: String with time or duration in HH:MM format e.g. "14:51"</li><li>within : The answer for each row of a is represented as a separate <code>Answer</code>. Each will contain one string for <code>RADIO</code> -type choices or multiple strings for <code>CHECKBOX</code> choices.</li></ul></td></tr></tbody></table>

## FileUploadAnswers

All submitted files for a FileUpload question.

JSON representation

```
{
  "answers": [
    {
      object (FileUploadAnswer)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>answers[]</code></td><td><p><code>object (<code>FileUploadAnswer</code>)</code></p><p>Output only. All submitted files for a FileUpload question.</p></td></tr></tbody></table>

## FileUploadAnswer

Info for a single file submitted to a file upload question.

JSON representation

```
{
  "fileId": string,
  "fileName": string,
  "mimeType": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Output only. The ID of the Google Drive file.</p></td></tr><tr><td><code>fileName</code></td><td><p><code>string</code></p><p>Output only. The file name, as stored in Google Drive on upload.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>Output only. The MIME type of the file, as stored in Google Drive on upload.</p></td></tr></tbody></table>

## Grade

Grade information associated with a respondent's answer to a question.

JSON representation

```
{
  "score": number,
  "correct": boolean,
  "feedback": {
    object (Feedback)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>score</code></td><td><p><code>number</code></p><p>Output only. The numeric score awarded for the answer.</p></td></tr><tr><td><code>correct</code></td><td><p><code>boolean</code></p><p>Output only. Whether the question was answered correctly or not. A zero-point score is not enough to infer incorrectness, since a correctly answered question could be worth zero points.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Get one response from the form.</td></tr><tr><td><h3>list</h3></td><td>List a form's responses.</td></tr></tbody></table>
