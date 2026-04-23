---
source: https://developers.google.com/workspace/forms/api/guides/setup-grading
root: workspace
fetched_at: 2026-04-23T15:28:44.555Z
---

# Set up quiz grading options

Administering quizzes is one of the key features of Google Forms. This guide shows you how to create a quiz and add grading options with the Forms API.

## Make a basic quiz

The first stage of making a quiz is a two-step process: you create a form, then update the form's settings to define it as a quiz. See [Create a form or quiz](https://developers.google.com/workspace/forms/api/guides/create-form-quiz#convert_a_form_to_a_quiz) for setup instructions.

## Add questions

After you've created the quiz, add the questions (see the [`Question object`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms#question) for a list of question types). You can include [grading options](#grading-options) when you first add the questions, or update them later. Sample JSON code for a new question item that includes grading options looks like this:

```
"item": {
    "title": "Which of these singers was not a member of Destiny's Child?",
    "questionItem": {
        "question": {
            "required": true,
            "grading": {
                "pointValue": 2,
                "correctAnswers": {
                    "answers": [{"value": "Rihanna"}]
                },
                "whenRight": {"text": "You got it!"},
                "whenWrong": {"text": "Sorry, that's wrong"}
            },
            "choiceQuestion": {
                "type": "RADIO",
                "options": [
                    {"value": "Kelly Rowland"},
                    {"value": "Beyoncé"},
                    {"value": "Rihanna"},
                    {"value": "Michelle Williams"}
                ]
            }
        }
    }
}
```

See [Update a form or quiz](https://developers.google.com/workspace/forms/api/guides/update-form-quiz#add_an_item) to learn how to add a question item to a form.

## Add grading options

Adding grading options to quiz questions helps automate the grading process. Each question can have an assigned point value and give the user feedback about their answer.

For the following question types, adding a `correctAnswers` field enables them to be automatically graded when the quiz is submitted. You can provide specific feedback for correct and incorrect answers using the `whenRight` and `whenWrong` fields.

- Checkbox
- Radio
- Dropdown

Short answer questions can also be auto-graded by adding a `correctAnswers` field, but you can only provide `generalFeedback`, not `whenRight` or `whenWrong` feedback. For other types of questions, grading is not automatic and you can only provide `generalFeedback`.

**Note:** Except for questions where the answer is via a file upload, the user's answer is captured and evaluated as text (see the [`TextAnswer`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses#textanswer) object for specifics about how different types of answers are formatted). To be correct, the answer must match the answer key exactly.
