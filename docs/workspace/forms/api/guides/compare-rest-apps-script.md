---
source: https://developers.google.com/workspace/forms/api/guides/compare-rest-apps-script
root: workspace
fetched_at: 2026-04-23T15:28:39.659Z
---

# Compare REST API with Forms Service

There is some overlap in what you can do with the Google Forms API and the [Forms Service on Apps Script](https://developers.google.com/apps-script/reference/forms). This guide covers similarities and differences to help you decide which is best for your project.

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

Both [{apps\_script\_name\_short} triggers](https://developers.google.com/apps-script/guides/triggers) and the [`forms.watches` resource in the REST API](https://developers.google.com/workspace/forms/api/guides/push-notifications) provide a way to take action when a form changes.

Prefer the REST API’s `forms.watches` for:

- Maximum [reliability](https://developers.google.com/workspace/forms/api/guides/push-notifications#reliability)
- Interoperability with Cloud Pub/Sub
- Notifications when forms are edited

Prefer Apps Script triggers for:

- Form or response data included with each notification
- Time-based triggers

## Quotas

Apps Script and the Forms API have different service limits.

- Learn more about [Apps Script quotas](https://developers.google.com/apps-script/guides/services/quotas)
- Learn more about [Forms API usage limits](https://developers.google.com/workspace/forms/api/limits)

## Languages and environments

If you prefer to develop in JavaScript, Apps Script can save you time by automating the setup of a Google Cloud console project and an OAuth consent flow. Apps Script also provides a browser-based code editor and runs your code on Google servers.

On the other hand, the REST API provides client libraries in many languages besides JavaScript, freeing you to develop in the language of your choice and not be subject to [limits on runtime or simultaneous executions](https://developers.google.com/apps-script/guides/services/quotas#current_limitations).

### Use the REST API from Apps Script

If you prefer the Apps Script development environment but want to use Forms REST API features, you can do so using `UrlFetchApp`. For more information, see [Set up an Apps Script project](https://developers.google.com/workspace/forms/api/guides/apps-script-setup).

The Forms REST API is not yet available as an [Apps Script advanced service](https://developers.google.com/apps-script/guides/services/advanced). [File a feature request](https://issuetracker.google.com/issues?q=componentid:978479%20status:open) if you would like it to be supported.

## Next steps

- [Explore an overview of Apps Script](https://developers.google.com/apps-script/overview)
- [Try out the Apps Script web app](https://developers.google.com/workspace/forms/api/guides/apps-script-example)
