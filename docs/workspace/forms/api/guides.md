---
source: https://developers.google.com/workspace/forms/api/guides
root: workspace
fetched_at: 2026-04-23T15:28:39.407Z
---

# Overview

The Google Forms API is a RESTful interface that lets you create and modify forms and quizzes, retrieve form responses and quiz grades, set up quiz answer keys with automatic feedback, and receive push notifications. The most common uses of this API include the following tasks:

- Create a form or quiz
- Publish and manage responders
- Update a form or quiz
- Retrieve responses from a form or quiz
- Read form content and metadata
- Set up and receive push notifications

The following is a list of common terms used in the Forms API:

*Form*

A Google Forms document, created and stored in Drive. Each form is represented by a [`Form`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms) resource and has a unique `formId` value, containing letters, numbers, hyphens, or underscores. You can find the form ID in a Forms URL:

`https://docs.google.com/forms/d/FORM_ID/edit`

*Quiz*

A specific type of Google Forms document that allows for grading of the form responses against an answer key. A quiz can only be created by using the [`batchUpdate()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/batchUpdate) method to update the `isQuiz` setting on an existing form to `true`.

*Grading*

A point value, answer key, and feedback for a question, applied when `isQuiz` is `true`. Represented by the [`Grading`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms#grading) resource.

*Feedback*

A response given to the end user when responding to a question on a quiz, represented by the [`Feedback`](https://developers.google.com/workspace/forms/api/reference/rest/v1/Feedback) resource.

*Item*

A single element in a form, represented by the [Item](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms#item) resource. `Item` is a repeating element which can contain a section, question group, question, text, image, or video.

*Question*

A single question on the form, represented by the [`Question`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms#question) resource.

*Question group*

A group of questions that all share the same set of possible answers (for example, a grid of ratings from 1 to 5). Represented by the [`QuestionGroupItem`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms#questiongroupitem) resource.

*Section*

A section is a way to break up a form into multiple pages and add conditional logic (such as only showing certain questions based on how the user answers). Sections correspond to the [`PageBreakItem`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms#PageBreakItem) resource.

*Answer*

The end user's answer to a question, represented by the [`Answer`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses#Answer) resource. Includes both grade information (if present), metadata, and the content of the answer.

*Response*

The end user's submission of a form, represented by the [`FormResponse`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses) resource.

*Watch*

A trigger that tracks changes to either form schema changes (such as edits to questions) or form response submissions and sends a push notification when a change occurs. Represented by the [`Watch`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.watches) resource.

## Form structure

When managing forms and quizzes, understanding how to specify different fields can be complicated, given that many of the form objects can be nested inside each other in multiple ways. To see how the visual representation of a form maps to the fields, we recommend using the UI to create a few examples of forms your application might generate. Then retrieve the corresponding JSON using the [`forms.get()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/get) method so you can compare. For example, [this example quiz](https://docs.google.com/forms/d/e/1FAIpQLSd0iBLPh4suZoGW938EU1WIxzObQv_jXto0nT2U8HH2KsI5dg/viewform) corresponds to the following JSON:

```
{
  "formId": "FORM_ID",
  "info": {
    "title": "Famous Black Women",
    "description": "Please complete this quiz based off of this week's readings for class.",
    "documentTitle": "Famous Black Women"
  },
  "settings": {
    "quizSettings": {
      "isQuiz": true
    }
  },
  "revisionId": "00000021",
  "responderUri": "https://docs.google.com/forms/d/e/1FAIpQLSd0iBLPh4suZoGW938EU1WIxzObQv_jXto0nT2U8HH2KsI5dg/viewform",
  "items": [
    {
      "itemId": "5d9f9786",
      "imageItem": {
        "image": {
          "contentUri": "DIRECT_URL",
          "properties": {
            "alignment": "LEFT"
          }
        }
      }
    },
    {
      "itemId": "72b30353",
      "title": "Which African American woman authored \"I Know Why the Caged Bird Sings\"?",
      "questionItem": {
        "question": {
          "questionId": "25405d4e",
          "required": true,
          "grading": {
            "pointValue": 2,
            "correctAnswers": {
              "answers": [
                {
                  "value": "Maya Angelou"
                }
              ]
            }
          },
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {
                "value": "Maya Angelou"
              },
              {
                "value": "bell hooks"
              },
              {
                "value": "Alice Walker"
              },
              {
                "value": "Roxane Gay"
              }
            ]
          }
        }
      }
    },
    {
      "itemId": "0a4859c8",
      "title": "Who was the first Dominican-American woman elected to state office?",
      "questionItem": {
        "question": {
          "questionId": "37fff47a",
          "grading": {
            "pointValue": 2,
            "correctAnswers": {
              "answers": [
                {
                  "value": "Grace Diaz"
                }
              ]
            }
          },
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {
                "value": "Rosa Clemente"
              },
              {
                "value": "Grace Diaz"
              },
              {
                "value": "Juana Matias"
              },
              {
                "value": "Sabrina Matos"
              }
            ]
          }
        }
      }
    }
  ],
  "publishSettings" : {
    "isPublished": true,
    "isAcceptingResponses": true
  }
}
```

## Next steps

- To learn about developing with Google Workspace APIs, including handling authentication and authorization, refer to [Get started as a Workspace developer](https://developers.google.com/workspace/guides/getstarted-overview).
- To learn how to configure and run a basic Forms API app, read the [Quickstarts overview](https://developers.google.com/workspace/forms/api/guides/quickstarts-overview).
