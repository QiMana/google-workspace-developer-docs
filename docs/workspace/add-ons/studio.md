---
source: https://developers.google.com/workspace/add-ons/studio
root: workspace
fetched_at: 2026-04-23T15:23:17.900Z
---

# Extend Google Workspace Studio

These guides explain how to extend the functionality of Google Workspace Studio by building custom steps that flows can run.

To get started, follow our quickstart guide, [Build a calculator step with Apps Script](https://developers.google.com/workspace/add-ons/studio/quickstart-calculator).

[Try the quickstart](https://developers.google.com/workspace/add-ons/studio/quickstart-calculator)

Flows let Google Workspace users automate tasks across services by combining a series of steps without writing any code. By extending flows, you let users add your app's functions as steps.

For example, users can triage and assign incoming customer questions with a flow that does the following:

1. Starts when you receive an email from a customer.
2. Prompts Gemini to triage the email.
3. Create a task for me to follow up with the sales or support team.

![Configuring a flow](https://developers.google.com/static/workspace/add-ons/studio/images/workflow-example.png)

**Figure 1:** A user configures a flow that triages customer questions with Gemini.

## Workspace Studio concepts

The following terms and concepts define the key components of Workspace Studio:

*Flows*

Users build flows in Workspace Studio to automate tasks in Google Workspace and beyond. Flows have deep system integration, contextual awareness, and can optionally use AI.

*Step*

A single step in a flow's automated process. Essentially, it's a single task in a sequence of tasks that follow a starting event. Each step runs synchronously, meaning it completes its operation before the next step in the sequence begins. Users set the order of steps, allowing them to customize the logical flow of tasks. Steps can have but don't require inputs and outputs. Example steps include, "send an email", "post in a Chat space, and "ask Gemini". Steps can include tasks outside of Google Workspace, like creating a CRM lead.

*Input variable*

Input variables are received by steps. Input variables are set by the user on a step's configuration card while the user sets up the step. For example, collect an email address, a datetime, or a Gemini prompt.

*Output variable*

Output variables are returned by steps, and can be sent to another step. For example, you use an output variable to pass an email address to another step that uses it to specify the recipient of an email.

*Dynamic Variable*

A variable whose data can only be determined when the user configures the flow. For example, Google Forms have varying questions and answers. The number of questions and answers (and their content) can't be determined until a specific Form starts a flow. Dynamic variables account for this case.

*Custom Resource*

A custom data structure that you can define to group multiple variables together. For example, to create a CRM lead, pass a custom resource containing an email address, street address, and name.

*Card*

Building block for user interfaces in add-ons. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Cards have special features for building flows:

- `IncludeVariables`: A property that enables dynamic variable inclusion.
- `Type`: Defines the type of data that input variables expect.

*Activity Log*

Describes what happens when an flow runs. By default, activity logs include the name of the starter or step statically defined in the manifest. You can further provide customized activity logs.

## See what you can make

Flows are built on the add-ons platform in Google Workspace. If you already have an existing add-on, you can extend its functionality to include Flows by updating its manifest to contain a flow-specific section.

If you're starting from scratch, follow our quickstart guide, [Build a calculator step with Apps Script](https://developers.google.com/workspace/add-ons/studio/quickstart-calculator).

[Try a quickstart](https://developers.google.com/workspace/add-ons/studio/quickstart-calculator)

Then read these guides to continue customizing your flow step:

- [Build a step](https://developers.google.com/workspace/add-ons/studio/build-a-step)
- [Input variables](https://developers.google.com/workspace/add-ons/studio/input-variables)
- [Validate an input variable](https://developers.google.com/workspace/add-ons/studio/validate-inputs)
- [Output variables](https://developers.google.com/workspace/add-ons/studio/output-variables)
- [Define a custom resource](https://developers.google.com/workspace/add-ons/studio/custom-resources)
- [Dynamic variables](https://developers.google.com/workspace/add-ons/studio/dynamic-variables)
- [Build a configuration card](https://developers.google.com/workspace/add-ons/studio/configuration-cards)
- [Log activity and errors](https://developers.google.com/workspace/add-ons/studio/activity-logs)
- [Workspace Studio event objects](https://developers.google.com/workspace/add-ons/studio/event-objects)
