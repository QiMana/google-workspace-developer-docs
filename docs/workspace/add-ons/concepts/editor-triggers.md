---
source: https://developers.google.com/workspace/add-ons/concepts/editor-triggers
root: workspace
fetched_at: 2026-04-23T15:22:40.862Z
---

# Triggers for Editor add-ons

## Page Summary

- Apps Script triggers execute a specified function when a certain event occurs, such as opening a document or submitting a form.
- Editor add-ons can utilize both simple and installable triggers, with simple triggers using reserved function names and installable triggers offering more flexibility.
- Simple triggers have limitations, such as not running in read-only mode or exceeding 30 seconds of execution time.
- Installable triggers require authorization and can be programmatically created within add-ons to handle events like form submissions or timed executions.
- Add-on triggers face authorization challenges, requiring careful handling to ensure continued functionality after updates and to avoid user inconvenience.

[Apps Script triggers](../../../apps-script/guides/triggers.md) cause a specified script function (the *trigger function*) to execute whenever a specified event occurs. Only certain events can cause triggers to fire, and each Google Workspace application supports a different set of events.

When a trigger fires, an *event object* is created. This JSON structure contains details about the event that occurred. The information in the event object structure is organized differently based on the trigger type.

Once the event object is created, Apps Script passes it as a parameter to the trigger function. The trigger function is a callback function that you must implement yourself, to take whatever actions are appropriate to respond to the event. For example, in an Editor add-on a trigger is used to create add-on menu items when a document is opened. In this case, you implement on `onOpen(e)` trigger function to create the menu items the add-on needs, possibly using the data in the event object.

This page provides guidelines on using triggers in editor add-on projects.

## Editor add-on trigger types

You can use most of the generic trigger types available to Google Apps Script projects in Editor add-ons, including [simple triggers](../../../apps-script/guides/triggers.md) and most [installable triggers](../../../apps-script/guides/triggers/installable.md). The exact set of available trigger types depends on the application being extended.

Unlike Editor add-ons, Google Workspace add-ons can't use generic Apps Script simple or installable triggers. Instead, they use triggers designed specifically for Google Workspace add-ons. For more information, see [Google Workspace add-ons triggers](./workspace-triggers.md).

The following table shows the types of simple and installable triggers that Editor add-ons can use, and provides links to the corresponding event objects:

| Event | [Event object](../../../apps-script/guides/triggers/events.md) | [Simple triggers](#simple_triggers_in_add-ons) | [Installable triggers](#installable_triggers_in_add-ons) |
| --- | --- | --- | --- |
| **Open**   An editor file is opened. | [Docs onOpen event object](../../../apps-script/guides/triggers/events.md#open_1)   [Forms onOpen event object](../../../apps-script/guides/triggers/events.md#open_3)   [Sheets onOpen event object](../../../apps-script/guides/triggers/events.md#open)   [Slides onOpen event object](../../../apps-script/guides/triggers/events.md#open_2) | ![](https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-48dp/logo_docs_2020q4_color_1x_web_48dp.png) Docs   ![](https://fonts.gstatic.com/s/i/productlogos/forms_2020q4/v4/web-48dp/logo_forms_2020q4_color_1x_web_48dp.png) Forms\*   ![](https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v5/web-48dp/logo_sheets_2020q4_color_1x_web_48dp.png) Sheets   ![](https://fonts.gstatic.com/s/i/productlogos/slides_2020q4/v6/web-48dp/logo_slides_2020q4_color_1x_web_48dp.png) Slides    `function onOpen(e)` | ![](https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-48dp/logo_docs_2020q4_color_1x_web_48dp.png) Docs   ![](https://fonts.gstatic.com/s/i/productlogos/forms_2020q4/v4/web-48dp/logo_forms_2020q4_color_1x_web_48dp.png) Forms   ![](https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v5/web-48dp/logo_sheets_2020q4_color_1x_web_48dp.png) Sheets |
| **Install**   The add-on is installed. | [onInstall event object](../../../apps-script/guides/triggers/events.md#install) | ![](https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-48dp/logo_docs_2020q4_color_1x_web_48dp.png) Docs   ![](https://fonts.gstatic.com/s/i/productlogos/forms_2020q4/v4/web-48dp/logo_forms_2020q4_color_1x_web_48dp.png) Forms   ![](https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v5/web-48dp/logo_sheets_2020q4_color_1x_web_48dp.png) Sheets   ![](https://fonts.gstatic.com/s/i/productlogos/slides_2020q4/v6/web-48dp/logo_slides_2020q4_color_1x_web_48dp.png) Slides    `function onInstall(e)` |  |
| **Edit**   Spreadsheet cell content is changed. | [Sheets onEdit event object](../../../apps-script/guides/triggers/events.md#edit) | ![](https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v5/web-48dp/logo_sheets_2020q4_color_1x_web_48dp.png) Sheets    `function onEdit(e)` | ![](https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v5/web-48dp/logo_sheets_2020q4_color_1x_web_48dp.png) Sheets |
| **Change**   Content in a sheet is edited or formatted. | [Sheets onChange event object](../../../apps-script/guides/triggers/events.md#change) |  | ![](https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v5/web-48dp/logo_sheets_2020q4_color_1x_web_48dp.png) Sheets |
| **Form-submit**   A Google Form is submitted. | [Forms form-submit event object](../../../apps-script/guides/triggers/events.md#form-submit_4)   [Sheets form-submit event object](../../../apps-script/guides/triggers/events.md#form-submit) |  | ![](https://fonts.gstatic.com/s/i/productlogos/forms_2020q4/v4/web-48dp/logo_forms_2020q4_color_1x_web_48dp.png) Forms   ![](https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v5/web-48dp/logo_sheets_2020q4_color_1x_web_48dp.png) Sheets |
| **Time-driven (clock)**   The trigger fires at a specified time or interval. | [Time-driven event object](../../../apps-script/guides/triggers/events.md#time-driven_events) | ![](https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-48dp/logo_docs_2020q4_color_1x_web_48dp.png) Docs   ![](https://fonts.gstatic.com/s/i/productlogos/forms_2020q4/v4/web-48dp/logo_forms_2020q4_color_1x_web_48dp.png) Forms   ![](https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v5/web-48dp/logo_sheets_2020q4_color_1x_web_48dp.png) Sheets   ![](https://fonts.gstatic.com/s/i/productlogos/slides_2020q4/v6/web-48dp/logo_slides_2020q4_color_1x_web_48dp.png) Slides |

\* The open event for Google Forms doesn't occur when a user opens a form to respond, but when an editor opens the form to modify it.

## Simple triggers in add-ons

[Simple triggers](../../../apps-script/guides/triggers.md) use a set a reserved function names, can't use services that require authorization, and are automatically enabled for use. In some cases, a simple trigger event can be handled by an [installable trigger](#installable_triggers_in_add-ons) instead.

You can add a simple trigger to an add-on by implementing a function with one of the following reserved names:

- `onOpen` executes when a user opens a document, spreadsheet, or presentation. `onOpen` also can execute when a form is opened in the editor (but not when responding to the form). It only executes if the user has permission to edit the file in question, and is most often used to create [menu items](./menus.md).
- `onInstall` executes when a user installs an add-on. Usually `onInstall` is just used to call `onOpen`; this ensures that the add-on menus appear immediately after install without requiring the user to refresh the page.
- `onEdit` executes when a user changes a cell value in a spreadsheet. This trigger does not fire in response to cell moves, formatting, or other changes that don't alter cell values.

### Restrictions

Simple triggers in add-ons are subject to the same [restrictions](../../../apps-script/guides/triggers.md#restrictions) that govern simple triggers in other kinds of Apps Script projects. Take particular note of these restrictions when designing add-ons:

- Simple triggers don't run if a file is opened in read-only (view or comment) mode. This behavior prevents your add-on menus from being populated.
- In certain circumstances, Editor add-ons run their `onOpen` and `onEdit` simple triggers in a no-authorization mode. This mode presents complications as outlined in the [add-on authorization model](./editor-auth-lifecycle.md#authorization_model).
- Simple triggers cannot use [services](../../../apps-script/guides/services.md) or take other actions that require [authorization](../../../apps-script/guides/services/authorization.md), except as outlined in the [add-on authorization model](./editor-auth-lifecycle.md#authorization_model).
- Simple triggers cannot run for longer than 30 seconds. Minimize the amount of processing done in a simple trigger function.
- Simple triggers are subject to Apps Script trigger [quota limits](../../../apps-script/guides/services/quotas.md).

## Installable triggers in add-ons

Add-ons can [programmatically create and modify installable triggers](../../../apps-script/guides/triggers/installable.md#managing_triggers_programmatically) with the Apps Script [`Script`](../../../apps-script/reference/script.md) service. add-on installable triggers can't be created manually. Unlike simple triggers, installable triggers can use services that require authorization.

Installable triggers in add-ons don't send [error emails](../../../apps-script/guides/triggers/installable.md#errors_in_triggers) to the user when they encounter errors, since in most cases a user is unable to address the problem. Because of this, you should design your add-on to gracefully handle errors on behalf of the user whenever possible.

Add-ons can use the following installable triggers:

- **Open** installable triggers execute when a user opens a document, spreadsheet, or when a form is opened in the editor (but not when responding to the form).
- **Edit** installable triggers execute when a user changes a cell value in a spreadsheet. This trigger does not fire in response to formatting or other changes that don't alter cell values.
- **Change** installable triggers execute when a user makes any change in a spreadsheet, including formatting edits and modifications to the spreadsheet itself (such as adding a row).
- **Form-submit** installable triggers execute when a Google Form response is submitted.
	There are two versions of form-submit triggers: one for Sheets (where form responses are collected) and one for Google Forms. The [event object passed to a Sheets form-submit trigger function](../../../apps-script/guides/triggers/events.md#form-submit) is simpler and returns the response values in simple arrays. The [event object passed to a Forms form-submit trigger function](../../../apps-script/guides/triggers/events.md#form-submit_4) provides more information, contained in a [`FormResponse`](../../../apps-script/reference/forms/form-response.md) object.
- [**Time-driven triggers**](../../../apps-script/guides/triggers/installable.md#time-driven_triggers) (also called clock triggers) fire at a specific time or repeatedly on a regular time interval.

### Authorize installable triggers

Normally, if a developer updates an add-on to use new services that require additional authorization, users are prompted to re-authorize the add-on the next time they use it.

However, add-ons that use triggers encounter special authorization challenges. Imagine an add-on that uses a trigger to monitor form submissions: a form creator might authorize the add-on the first time they use it, then leave it to run for months or years without ever reopening the form. If the add-on developer were to update the add-on to use new services that require additional authorization, the form creator would never see the re-authorization dialog because they never reopened the form, and the add-on would stop working.

Unlike triggers in regular Apps Script projects, triggers in add-ons continue to fire even if they need re-authorization. However, the script still fails if it hits a line of code that requires authorization it does not have. To avoid this, use [`ScriptApp.getAuthorizationInfo`](../../../apps-script/reference/script/script-app.md#getAuthorizationInfo(AuthMode)) to gate access to parts of code that have changed between versions of the add-on.

The following examples show the recommended structure to use in trigger functions to avoid authorization pitfalls. The example trigger function responds to a form-submit event within a Google Sheets add-on and, if re-authorization is required, sends the user of the add-on an alert email using templated HTML.

### Code.gs

```
/**
 * Responds to a form when submitted.
 * @param {event} e The Form submit event.
 */
function respondToFormSubmit(e) {
  const addonTitle = "My Add-on Title";
  const props = PropertiesService.getDocumentProperties();
  const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);

  // Check if the actions of the trigger requires authorization that has not
  // been granted yet; if so, warn the user via email. This check is required
  // when using triggers with add-ons to maintain functional triggers.
  if (
    authInfo.getAuthorizationStatus() === ScriptApp.AuthorizationStatus.REQUIRED
  ) {
    // Re-authorization is required. In this case, the user needs to be alerted
    // that they need to re-authorize; the normal trigger action is not
    // conducted, since it requires authorization first. Send at most one
    // "Authorization Required" email per day to avoid spamming users.
    const lastAuthEmailDate = props.getProperty("lastAuthEmailDate");
    const today = new Date().toDateString();
    if (lastAuthEmailDate !== today) {
      if (MailApp.getRemainingDailyQuota() > 0) {
        const html = HtmlService.createTemplateFromFile("AuthorizationEmail");
        html.url = authInfo.getAuthorizationUrl();
        html.addonTitle = addonTitle;
        const message = html.evaluate();
        MailApp.sendEmail(
          Session.getEffectiveUser().getEmail(),
          "Authorization Required",
          message.getContent(),
          {
            name: addonTitle,
            htmlBody: message.getContent(),
          },
        );
      }
      props.setProperty("lastAuthEmailDate", today);
    }
  } else {
    // Authorization has been granted, so continue to respond to the trigger.
    // Main trigger logic here.
  }
}
```

### authorizationemail.html

```
<p>The Google Sheets add-on <i><?= addonTitle ?></i> is set to run automatically
    whenever a form is submitted. The add-on was recently updated and it needs you
    to re-authorize it to run on your behalf.</p>

<p>The add-on's automatic functions are temporarily disabled until you
    re-authorize it. To do so, open Google Sheets and run the add-on from the
    Add-ons menu. Alternatively, you can click this link to authorize it:</p>

<p><a href="<?= url ?>">Re-authorize the add-on.</a></p>

<p>This notification email will be sent to you at most once per day until the
    add-on is re-authorized.</p>
```

### Restrictions

Installable triggers in add-ons are subject to the same [restrictions](../../../apps-script/guides/triggers/installable.md#restrictions) that govern installable triggers in other kinds of Apps Script projects.

In addition to these restrictions, several restrictions apply to installable triggers in add-ons specifically:

- Each add-on can only have one trigger of each type, per user, per document. For example, in a given spreadsheet, a given user can only have one edit trigger, although the user could also have a form-submit trigger or a time-driven trigger in the same spreadsheet. A different user with access to the same spreadsheet could have their own separate set of triggers.
- Add-ons can only create triggers for the file in which the add-on is used. That is, an add-on used in Google Doc A cannot create a trigger to monitor when Google Doc B is opened.
- Time-driven triggers cannot run more frequently than once per hour.
- Add-ons don't automatically send the user an email when code run by an installable trigger throws an exception. It is up to the developer to check for and handle failure cases gracefully.
- Add-on triggers stop firing in any of the following situations:
	- If the add-on is uninstalled by the user,
		- If the add-on is disabled in a document (if it is re-enabled, the trigger becomes operational again), or
		- If the developer unpublishes the add-on or submits a broken version to the add-on store.
- Add-on trigger functions execute until they reach code that uses an unauthorized service, at which point they stop. This is true only if the add-on is published; the same trigger in a regular Apps Script project or an unpublished add-on don't execute at all if any part of the script needs authorization.
- Installable triggers are subject to Apps Script trigger [quota limits](../../../apps-script/guides/services/quotas.md).
