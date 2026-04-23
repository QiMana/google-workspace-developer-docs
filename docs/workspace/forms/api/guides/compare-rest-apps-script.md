---
source: https://developers.google.com/workspace/forms/api/guides/compare-rest-apps-script
root: workspace
fetched_at: 2026-04-23T15:28:39.659Z
---

# Compare REST API with Forms Service

There is some overlap in what you can do with the Google Forms API and the [Forms Service on Apps Script](../../../../apps-script/reference/forms.md). This guide covers similarities and differences to help you decide which is best for your project.

## Supported Forms features

Both the REST API and the Forms Service on Apps Script support Forms features that the other does not. The exact list of supported features changes over time. You can explore the rest of the documentation to find out whether a particular feature is supported.

The REST API does not support the following:

- Submitting form responses
- Including detailed form or response data in the body of pub/sub notifications

The Forms Service on Apps Script does not support the following:

- Subscribing to form events with Cloud Pub/Sub
- Setting correct answers for question types that are not multiple choice

### Request a new REST API feature

The REST API is newer than the Forms Service on Apps Script and new features are added regularly. [File a feature request](https://issuetracker.google.com/issues?q=componentid:978479%20status:open) if you would like to see a certain feature prioritized.

## Event-based behavior

Both [{apps\_script\_name\_short} triggers](../../../../apps-script/guides/triggers.md) and the [`forms.watches` resource in the REST API](./push-notifications.md) provide a way to take action when a form changes.

Prefer the REST API’s `forms.watches` for:

- Maximum [reliability](./push-notifications.md#reliability)
- Interoperability with Cloud Pub/Sub
- Notifications when forms are edited

Prefer Apps Script triggers for:

- Form or response data included with each notification
- Time-based triggers

## Quotas

Apps Script and the Forms API have different service limits.

- Learn more about [Apps Script quotas](../../../../apps-script/guides/services/quotas.md)
- Learn more about [Forms API usage limits](../limits.md)

## Languages and environments

If you prefer to develop in JavaScript, Apps Script can save you time by automating the setup of a Google Cloud console project and an OAuth consent flow. Apps Script also provides a browser-based code editor and runs your code on Google servers.

On the other hand, the REST API provides client libraries in many languages besides JavaScript, freeing you to develop in the language of your choice and not be subject to [limits on runtime or simultaneous executions](../../../../apps-script/guides/services/quotas.md#current_limitations).

### Use the REST API from Apps Script

If you prefer the Apps Script development environment but want to use Forms REST API features, you can do so using `UrlFetchApp`. For more information, see [Set up an Apps Script project](./apps-script-setup.md).

The Forms REST API is not yet available as an [Apps Script advanced service](../../../../apps-script/guides/services/advanced.md). [File a feature request](https://issuetracker.google.com/issues?q=componentid:978479%20status:open) if you would like it to be supported.

## Next steps

- [Explore an overview of Apps Script](../../../../apps-script/overview.md)
- [Try out the Apps Script web app](./apps-script-example.md)
