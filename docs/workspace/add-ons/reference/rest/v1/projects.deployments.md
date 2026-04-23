---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments
root: workspace
fetched_at: 2026-04-23T15:23:02.322Z
---

# REST Resource: projects.deployments

## Page Summary

- Google Workspace Add-ons use deployments to manage and run their functionality, including a core `run` function and HTTP request options.
- Add-on deployments can be authenticated using system or user ID tokens, or no authentication at all, depending on the `authorizationHeader` setting.
- Developers can manage deployments through methods like create, delete, get, install, and uninstall to control the add-on's lifecycle.
- The `HttpOptions` field allows customization of HTTP requests made by the add-on, including setting the `authorizationHeader`.
- Developers can choose from various deployment methods to create, update, remove, and check the status of their add-ons.

## Resource: Deployment

A Google Workspace add-on deployment

JSON representation

```
{
  "name": string,
  "oauthScopes": [
    string
  ],
  "addOns": {
    object (AddOns)
  },
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The deployment resource name. Example: <code>projects/123/deployments/my_deployment</code>.</p></td></tr><tr><td><code>oauthScopes[]</code></td><td><p><code>string</code></p><p>The list of Google OAuth scopes for which to request consent from the end user before executing an add-on endpoint.</p></td></tr><tr><td><code>addOns</code></td><td><p><code>object (<code>AddOns</code>)</code></p><p>The Google Workspace add-on configuration.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>This value is computed by the server based on the version of the deployment in storage, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</p></td></tr></tbody></table>

## AddOns

A Google Workspace add-on configuration.

JSON representation

```
{
  "common": {
    object (CommonAddOnManifest)
  },
  "gmail": {
    object (GmailAddOnManifest)
  },
  "drive": {
    object (DriveAddOnManifest)
  },
  "calendar": {
    object (CalendarAddOnManifest)
  },
  "docs": {
    object (DocsAddOnManifest)
  },
  "meet": {
    object (MeetAddOnManifest)
  },
  "sheets": {
    object (SheetsAddOnManifest)
  },
  "slides": {
    object (SlidesAddOnManifest)
  },
  "httpOptions": {
    object (HttpOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>common</code></td><td><p><code>object (<code>CommonAddOnManifest</code>)</code></p><p>Configuration that is common across all Google Workspace add-ons.</p></td></tr><tr><td><code>gmail</code></td><td><p><code>object (<code>GmailAddOnManifest</code>)</code></p><p>Gmail add-on configuration.</p></td></tr><tr><td><code>drive</code></td><td><p><code>object (<code>DriveAddOnManifest</code>)</code></p><p>Drive add-on configuration.</p></td></tr><tr><td><code>calendar</code></td><td><p><code>object (<code>CalendarAddOnManifest</code>)</code></p><p>Calendar add-on configuration.</p></td></tr><tr><td><code>docs</code></td><td><p><code>object (<code>DocsAddOnManifest</code>)</code></p><p>Docs add-on configuration.</p></td></tr><tr><td><code>meet</code></td><td><p><code>object (<code>MeetAddOnManifest</code>)</code></p><p>Meet add-on configuration.</p></td></tr><tr><td><code>sheets</code></td><td><p><code>object (<code>SheetsAddOnManifest</code>)</code></p><p>Sheets add-on configuration.</p></td></tr><tr><td><code>slides</code></td><td><p><code>object (<code>SlidesAddOnManifest</code>)</code></p><p>Slides add-on configuration.</p></td></tr><tr><td><code>httpOptions</code></td><td><p><code>object (<code>HttpOptions</code>)</code></p><p>Options for sending requests to add-on HTTP endpoints</p></td></tr></tbody></table>

## CommonAddOnManifest

Add-on configuration that is shared across all add-on host applications.

JSON representation

```
{
  "name": string,
  "logoUrl": string,
  "layoutProperties": {
    object (LayoutProperties)
  },
  "addOnWidgetSet": {
    object (AddOnWidgetSet)
  },
  "useLocaleFromApp": boolean,
  "homepageTrigger": {
    object (HomepageExtensionPoint)
  },
  "universalActions": [
    {
      object (UniversalActionExtensionPoint)
    }
  ],
  "openLinkUrlPrefixes": array
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The display name of the add-on.</p></td></tr><tr><td><code>layoutProperties</code></td><td><p><code>object (<code>LayoutProperties</code>)</code></p><p>Common layout properties for the add-on cards.</p></td></tr><tr><td><code>addOnWidgetSet</code></td><td><p><code>object (<code>AddOnWidgetSet</code>)</code></p><p>The widgets used in the add-on. If this field is not specified, the default set is used.</p></td></tr><tr><td><code>useLocaleFromApp</code></td><td><p><code>boolean</code></p><p>Whether to pass locale information from host app.</p></td></tr><tr><td><code>homepageTrigger</code></td><td><p><code>object (<code>HomepageExtensionPoint</code>)</code></p><p>Defines an endpoint that will be executed in any context, in any host. Any cards generated by this function will always be available to the user, but might be eclipsed by contextual content when this add-on declares more targeted triggers.</p></td></tr><tr><td><code>universalActions[]</code></td><td><p><code>object (<code>UniversalActionExtensionPoint</code>)</code></p><p>Defines a list of extension points in the universal action menu which serves as a settings menu for the add-on. The extension point can be a link URL to open or an endpoint to execute as a form submission.</p></td></tr><tr><td><code>openLinkUrlPrefixes</code></td><td><p><code>array (<code>ListValue</code> format)</code></p><p>An OpenLink action can only use a URL with an <code>HTTPS</code>, <code>MAILTO</code> or <code>TEL</code> scheme. For <code>HTTPS</code> links, the URL must also <a href="https://developers.google.com/gmail/add-ons/concepts/manifests#whitelisting_urls">match</a> one of the prefixes specified in the allowlist. If the prefix omits the scheme, <code>HTTPS</code> is assumed. <code>HTTP</code> links are automatically rewritten to <code>HTTPS</code> links.</p></td></tr></tbody></table>

## LayoutProperties

Card layout properties shared across all add-on host applications.

JSON representation

```
{
  "primaryColor": string,
  "secondaryColor": string,
  "useNewMaterialDesign": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>primaryColor</code></td><td><p><code>string</code></p><p>The primary color of the add-on. It sets the color of the toolbar. If no primary color is set, the default value provided by the framework is used.</p></td></tr><tr><td><code>secondaryColor</code></td><td><p><code>string</code></p><p>The secondary color of the add-on. It sets the color of buttons. If the primary color is set but no secondary color is set, the secondary color is the same as the primary color. If neither primary color nor secondary color is set, the default value provided by the framework is used.</p></td></tr><tr><td><code>useNewMaterialDesign<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Enables material design for cards.</p></td></tr></tbody></table>

## AddOnWidgetSet

JSON representation

```
{
  "usedWidgets": [
    enum (WidgetType)
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>usedWidgets[]</code></td><td><p><code>enum (<code>WidgetType</code>)</code></p><p>The list of widgets used in an add-on.</p></td></tr></tbody></table>

## WidgetType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>WIDGET_TYPE_UNSPECIFIED</code></td><td>The default widget set.</td></tr><tr><td><code>DATE_PICKER</code></td><td>The date picker.</td></tr><tr><td><code>STYLED_BUTTONS</code></td><td>Styled buttons include filled buttons and deactivated buttons.</td></tr><tr><td><code>PERSISTENT_FORMS</code></td><td>Persistent forms allow persisting form values during actions.</td></tr><tr><td><code>UPDATE_SUBJECT_AND_RECIPIENTS</code></td><td>Update the subject and recipients of a draft.</td></tr><tr><td><code>GRID_WIDGET</code></td><td>The grid widget.</td></tr><tr><td><code>ADDON_COMPOSE_UI_ACTION</code></td><td>A Gmail add-on action that applies to the add-on compose UI.</td></tr></tbody></table>

## HomepageExtensionPoint

JSON representation

```
{
  "runFunction": string,
  "enabled": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr><tr><td><code>enabled</code></td><td><p><code>boolean</code></p><p>Optional. If set to <code>false</code>, deactivates the homepage view in this context.</p><p>Defaults to <code>true</code> if unset.</p><p>If an add-on's custom homepage view is disabled, a generic overview card is provided for users instead.</p></td></tr></tbody></table>

## UniversalActionExtensionPoint

Format for declaring a universal action menu item extension point.

JSON representation

```
{
  "label": string,

  "openLink": string,
  "runFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>label</code></td><td><p><code>string</code></p><p>Required. User-visible text that describes the action taken by activating this extension point, for example, "Add a new contact."</p></td></tr><tr><td colspan="2">Union field <code>action_type</code>. Required. The action type supported on a universal action menu item. It can either be a link to open or an endpoint to execute. <code>action_type</code> can be only one of the following:</td></tr><tr><td><code>openLink</code></td><td><p><code>string</code></p><p>URL to be opened by the UniversalAction.</p></td></tr><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Endpoint to be run by the UniversalAction.</p></td></tr></tbody></table>

## GmailAddOnManifest

Properties customizing the appearance and execution of a Gmail add-on.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageExtensionPoint)
  },
  "contextualTriggers": [
    {
      object (ContextualTrigger)
    }
  ],
  "universalActions": [
    {
      object (UniversalAction)
    }
  ],
  "composeTrigger": {
    object (ComposeTrigger)
  },
  "authorizationCheckFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (<code>HomepageExtensionPoint</code>)</code></p><p>Defines an endpoint that will be executed in contexts that don't match a declared contextual trigger. Any cards generated by this function will always be available to the user, but may be eclipsed by contextual content when this add-on declares more targeted triggers.</p><p>If present, this overrides the configuration from <code>addons.common.homepageTrigger</code>.</p></td></tr><tr><td><code>contextualTriggers[]</code></td><td><p><code>object (<code>ContextualTrigger</code>)</code></p><p>Defines the set of conditions that trigger the add-on.</p></td></tr><tr><td><code>universalActions[]</code></td><td><p><code>object (<code>UniversalAction</code>)</code></p><p>Defines a set of <a href="https://developers.google.com/gmail/add-ons/how-tos/universal-actions">universal actions</a> for the add-on. The user triggers universal actions from the add-on toolbar menu.</p></td></tr><tr><td><code>composeTrigger</code></td><td><p><code>object (<code>ComposeTrigger</code>)</code></p><p>Defines the compose time trigger for a compose time add-on. This is the trigger that causes an add-on to take action when the user is composing an email. All compose time add-ons must have the <code>gmail.addons.current.action.compose</code> scope even though it might not edit the draft.</p></td></tr><tr><td><code>authorizationCheckFunction</code></td><td><p><code>string</code></p><p>The name of an endpoint that verifies that the add-on has all the required third-party authorizations, by probing the third-party APIs. If the probe fails, the function should throw an exception to initiate the authorization flow. This function is called before each invocation of the add-on in order to ensure a smooth user experience.</p></td></tr></tbody></table>

## ContextualTrigger

Defines a trigger that fires when the open email meets a specific criteria. When the trigger fires, it executes a specific endpoint, usually in order to create new cards and update the UI.

JSON representation

```
{
  "onTriggerFunction": string,

  "unconditional": {
    object (UnconditionalTrigger)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>onTriggerFunction</code></td><td><p><code>string</code></p><p>Required. The name of the endpoint to call when a message matches the trigger.</p></td></tr><tr><td colspan="2">Union field <code>trigger</code>. The type of trigger determines the conditions Gmail uses to show the add-on. <code>trigger</code> can be only one of the following:</td></tr><tr><td><code>unconditional</code></td><td><p><code>object (<code>UnconditionalTrigger</code>)</code></p><p>Unconditional triggers are executed when any mail message is opened.</p></td></tr></tbody></table>

## UnconditionalTrigger

This type has no fields.

A trigger that fires when any email message is opened.

## UniversalAction

An action that is always available in the add-on toolbar menu regardless of message context.

JSON representation

```
{
  "text": string,

  "openLink": string,
  "runFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>Required. User-visible text describing the action, for example, "Add a new contact."</p></td></tr><tr><td colspan="2">Union field <code>action_type</code>. The type of the action determines the behavior of Gmail when the user invokes the action. <code>action_type</code> can be only one of the following:</td></tr><tr><td><code>openLink</code></td><td><p><code>string</code></p><p>A link that is opened by Gmail when the user triggers the action.</p></td></tr><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>An endpoint that is called when the user triggers the action. See the <a href="https://developers.google.com/gmail/add-ons/how-tos/universal-actions">universal actions guide</a> for details.</p></td></tr></tbody></table>

## ComposeTrigger

A trigger that activates when user is composing an email.

JSON representation

```
{
  "actions": [
    {
      object (MenuItemExtensionPoint)
    }
  ],
  "draftAccess": enum (DraftAccess)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>actions[]</code></td><td><p><code>object (<code>MenuItemExtensionPoint</code>)</code></p><p>Defines the set of actions for a compose time add-on. These are actions that users can trigger on a compose time add-on.</p></td></tr><tr><td><code>draftAccess</code></td><td><p><code>enum (<code>DraftAccess</code>)</code></p><p>Defines the level of data access when a compose time add-on is triggered.</p></td></tr></tbody></table>

## MenuItemExtensionPoint

Common format for declaring a menu item or button that appears within a host app.

JSON representation

```
{
  "runFunction": string,
  "label": string,
  "logoUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr><tr><td><code>label</code></td><td><p><code>string</code></p><p>Required. User-visible text that describes the action taken by activating this extension point. For example, "Insert invoice."</p></td></tr></tbody></table>

## DraftAccess

An enum that defines the level of data access the compose trigger requires.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED</code></td><td>Default value when nothing is set for draftaccess.</td></tr><tr><td><code>NONE</code></td><td>The compose trigger can't access any data of the draft when a compose add-on is triggered.</td></tr></tbody></table>

## DriveAddOnManifest

Properties customizing the appearance and execution of a Drive add-on.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageExtensionPoint)
  },
  "onItemsSelectedTrigger": {
    object (DriveExtensionPoint)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (<code>HomepageExtensionPoint</code>)</code></p><p>If present, this overrides the configuration from <code>addons.common.homepageTrigger</code>.</p></td></tr><tr><td><code>onItemsSelectedTrigger</code></td><td><p><code>object (<code>DriveExtensionPoint</code>)</code></p><p>Corresponds to behavior that executes when items are selected in the relevant Drive view, such as the My Drive Doclist.</p></td></tr></tbody></table>

## DriveExtensionPoint

Common format for declaring a Drive add-on's triggers.

JSON representation

```
{
  "runFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when the extension point is activated.</p></td></tr></tbody></table>

## CalendarAddOnManifest

Properties customizing the appearance and execution of a Calendar add-on.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageExtensionPoint)
  },
  "conferenceSolution": [
    {
      object (ConferenceSolution)
    }
  ],
  "createSettingsUrlFunction": string,
  "eventOpenTrigger": {
    object (CalendarExtensionPoint)
  },
  "eventUpdateTrigger": {
    object (CalendarExtensionPoint)
  },
  "calendarNotificationTrigger": {
    object (CalendarExtensionPoint)
  },
  "eventAttachmentTrigger": {
    object (MenuItemExtensionPoint)
  },
  "currentEventAccess": enum (EventAccess)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (<code>HomepageExtensionPoint</code>)</code></p><p>Optional. Defines an endpoint that is executed in contexts that don't match a declared contextual trigger. Any cards generated by this function will always be available to the user, but might be eclipsed by contextual content when this add-on declares more targeted triggers.</p><p>If present, this overrides the configuration from <code>addons.common.homepageTrigger</code>.</p></td></tr><tr><td><code>conferenceSolution[]</code></td><td><p><code>object (<code>ConferenceSolution</code>)</code></p><p>Optional. Defines conference solutions provided by this add-on.</p></td></tr><tr><td><code>createSettingsUrlFunction</code></td><td><p><code>string</code></p><p>An endpoint to execute that creates a URL to the add-on's settings page.</p></td></tr><tr><td><code>eventOpenTrigger</code></td><td><p><code>object (<code>CalendarExtensionPoint</code>)</code></p><p>An endpoint that triggers when an event is opened to be viewed or edited.</p></td></tr><tr><td><code>eventUpdateTrigger</code></td><td><p><code>object (<code>CalendarExtensionPoint</code>)</code></p><p>An endpoint that triggers when the open event is updated.</p></td></tr><tr><td><code>calendarNotificationTrigger</code></td><td><p><code>object (<code>CalendarExtensionPoint</code>)</code></p><p>Optional. Triggers when an event is created or updated for a calendar that the user is subscribed to. Applies only to triggers created by <a href="https://developers.google.com/workspace/add-ons/guides/alternate-runtimes"><code>HTTP
                  endpoints</code></a> using <a href="https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup#apps.extensions.markup.CalendarClientActionMarkup.CalendarSubscriptionActionMarkup"><code>CalendarSubscriptionActionMarkup</code></a>. Not applicable to <code>Apps Script add-ons</code> and <a href="https://developers.google.com/apps-script/guides/triggers/installable"><code>Apps Script installable
                  triggers</code></a>.</p></td></tr><tr><td><code>eventAttachmentTrigger</code></td><td><p><code>object (<code>MenuItemExtensionPoint</code>)</code></p><p>A configuration for a contextual trigger that fires when the user clicks on the add-on attachment provider in the Calendar dropdown menu.</p></td></tr><tr><td><code>currentEventAccess</code></td><td><p><code>enum (<code>EventAccess</code>)</code></p><p>Defines the level of data access when an event add-on is triggered.</p></td></tr></tbody></table>

## ConferenceSolution

JSON representation

```
{
  "onCreateFunction": string,
  "id": string,
  "name": string,
  "logoUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>onCreateFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to call when conference data should be created.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. IDs should be uniquely assigned across conference solutions within one add-on, otherwise the wrong conference solution might be used when the add-on is triggered. While you can change the display name of an add-on, the ID shouldn’t be changed.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The display name of the conference solution.</p></td></tr></tbody></table>

## CalendarExtensionPoint

Common format for declaring a calendar add-on's triggers.

JSON representation

```
{
  "runFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr></tbody></table>

## EventAccess

An enum that defines the level of data access event triggers require.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED</code></td><td>Default value when nothing is set for eventAccess.</td></tr><tr><td><code>READ</code></td><td>Gives event triggers access to all provided event fields including the metadata, attendees, and conference data.</td></tr><tr><td><code>WRITE</code></td><td>Gives event triggers access to the metadata of events and the ability to perform all actions, including adding attendees and setting conference data.</td></tr><tr><td><code>READ_WRITE</code></td><td>Gives event triggers access to all provided event fields including the metadata, attendees, and conference data and the ability to perform all actions.</td></tr></tbody></table>

## DocsAddOnManifest

Properties customizing the appearance and execution of a Google Docs add-on.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageExtensionPoint)
  },
  "onFileScopeGrantedTrigger": {
    object (DocsExtensionPoint)
  },
  "linkPreviewTriggers": [
    {
      object (LinkPreviewExtensionPoint)
    }
  ],
  "createActionTriggers": [
    {
      object (CreateActionExtensionPoint)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (<code>HomepageExtensionPoint</code>)</code></p><p>If present, this overrides the configuration from <code>addons.common.homepageTrigger</code>.</p></td></tr><tr><td><code>onFileScopeGrantedTrigger</code></td><td><p><code>object (<code>DocsExtensionPoint</code>)</code></p><p>Endpoint to execute when file scope authorization is granted for this document/user pair.</p></td></tr><tr><td><code>linkPreviewTriggers[]</code></td><td><p><code>object (<code>LinkPreviewExtensionPoint</code>)</code></p><p>A list of extension points for previewing links in a Google Docs document. For details, see <a href="https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips">Preview links with smart chips</a>.</p></td></tr><tr><td><code>createActionTriggers[]</code></td><td><p><code>object (<code>CreateActionExtensionPoint</code>)</code></p><p>A list of extension points for creating third-party resources from within Google Workspace applications. For more information, see <a href="https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip">Create third-party resources from the @ menu</a>.</p></td></tr></tbody></table>

## DocsExtensionPoint

Common format for declaring a Docs add-on's triggers.

JSON representation

```
{
  "runFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr></tbody></table>

## LinkPreviewExtensionPoint

The configuration for a trigger that fires when a user types or pastes a link from a third-party or non-Google service into a Google Docs, Sheets, or Slides file.

JSON representation

```
{
  "labelText": string,
  "localizedLabelText": {
    string: string,
    ...
  },
  "patterns": [
    {
      object (UriPattern)
    }
  ],
  "runFunction": string,
  "logoUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labelText</code></td><td><p><code>string</code></p><p>Required. The text for an example smart chip that prompts users to preview the link, such as <code>Example: Support case</code>. This text is static and displays before users execute the add-on.</p></td></tr><tr><td><code>localizedLabelText</code></td><td><p><code>map (key: string, value: string)</code></p><p>Optional. A map of <code>labeltext</code> to localize into other languages. Format the language in <a href="https://wikipedia.org/wiki/ISO_639_macrolanguage">ISO 639</a> and the country/region in <a href="https://wikipedia.org/wiki/ISO_3166">ISO 3166</a>, separated by a hyphen <code>-</code>. For example, <code>en-US</code>.</p><p>If a user's locale is present in the map's keys, the user sees the localized version of the <code>labeltext</code>.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>patterns[]</code></td><td><p><code>object (<code>UriPattern</code>)</code></p><p>Required. An array of URL patterns that trigger the add-on to preview links.</p></td></tr><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. Endpoint to execute when a link preview is triggered.</p></td></tr></tbody></table>

## UriPattern

The configuration for each URL pattern that triggers a link preview.

JSON representation

```
{
  "hostPattern": string,
  "pathPrefix": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hostPattern</code></td><td><p><code>string</code></p><p>Required for each URL pattern to preview. The domain of the URL pattern. The add-on previews links that contain this domain in the URL. To preview links for a specific subdomain, like <code>subdomain.example.com</code>, include the subdomain. To preview links for the entire domain, specify a wildcard character with an asterisk (<code>*</code>) as the subdomain.</p><p>For example, <code>*.example.com</code> matches <code>subdomain.example.com</code> and <code>another.subdomain.example.com</code>.</p></td></tr><tr><td><code>pathPrefix</code></td><td><p><code>string</code></p><p>Optional. The path that appends the domain of the <code>hostpattern</code>.</p><p>For example, if the URL host pattern is <code>support.example.com</code>, to match URLs for cases hosted at <code>support.example.com/cases/</code>, enter <code>cases</code>.</p><p>To match all URLs in the host pattern domain, leave <code>pathprefix</code> empty.</p></td></tr></tbody></table>

## CreateActionExtensionPoint

The configuration for a trigger that fires when a user invokes the resource creation workflow in a Google Workspace application. For more information, see [Create third-party resources from the @ menu](https://developers.google.com/workspace/add-ons/guides/create-insert-resource-smart-chip).

JSON representation

```
{
  "id": string,
  "labelText": string,
  "localizedLabelText": {
    string: string,
    ...
  },
  "runFunction": string,
  "logoUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. The unique ID to differentiate this extension point. The ID can have up to 64 characters and should be in the format of <code>[a-zA-Z0-9-]+</code>.</p></td></tr><tr><td><code>labelText</code></td><td><p><code>string</code></p><p>Required. The text that displays alongside an icon for the resource creation entry point, such as <code>Create support case</code>. This text is static and displays before users execute the add-on.</p></td></tr><tr><td><code>localizedLabelText</code></td><td><p><code>map (key: string, value: string)</code></p><p>Optional. A map of <code>labeltext</code> to localize into other languages. Format the language in <a href="https://wikipedia.org/wiki/ISO_639_macrolanguage">ISO 639</a> and the country/region in <a href="https://wikipedia.org/wiki/ISO_3166">ISO 3166</a>, separated by a hyphen <code>-</code>. For example, <code>en-US</code>.</p><p>If a user's locale is present in the map's keys, the user sees the localized version of the <code>labeltext</code>.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. Endpoint to execute when a resource creation workflow is triggered to create a link.</p></td></tr></tbody></table>

## MeetAddOnManifest

Meet add-on manifest.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageExtensionPoint)
  },
  "web": {
    object (Web)
  },
  "supportsCollaboration": boolean,
  "termsUri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (<code>HomepageExtensionPoint</code>)</code></p><p>If present, this overrides the configuration from <code>addons.common.homepageTrigger</code>.</p></td></tr><tr><td><code>web</code></td><td><p><code>object (<code>Web</code>)</code></p><p>Details for addons that enhance the Meet web client.</p></td></tr><tr><td><code>supportsCollaboration</code></td><td><p><code>boolean</code></p><p>Whether the addon supports collaboration or inviting others into the addon experience.</p></td></tr><tr><td><code>termsUri</code></td><td><p><code>string</code></p><p>A link to the terms of service for the add-on, if any should be shown.</p></td></tr></tbody></table>

## Web

Details for addons that enhance the Meet web client.

JSON representation

```
{
  "sidePanelUri": string,
  "sidePanelUrl": string,
  "mainStageUri": string,
  "supportsScreenSharing": boolean,
  "supportsCollaboration": boolean,
  "supportsPopOut": boolean,
  "hostOrigins": [
    string
  ],
  "addOnOrigins": [
    string
  ],
  "openState": enum (State),
  "supportsCollaborationHostControls": boolean,
  "logoUrl": string,
  "darkModeLogoUrl": string,
  "displayFlow": enum (DisplayFlow)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sidePanelUri<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>The URI for the side panel iframe.</p></td></tr><tr><td><code>sidePanelUrl</code></td><td><p><code>string</code></p><p>The URL for the side panel iframe.</p></td></tr><tr><td><code>mainStageUri<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>The URI for the "main stage" iframe.</p></td></tr><tr><td><code>supportsScreenSharing</code></td><td><p><code>boolean</code></p><p>Whether the addon supports screen sharing the main stage.</p></td></tr><tr><td><code>supportsCollaboration<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Whether the addon supports collaboration or inviting others into the addon experience. This field is deprecated now, please use the top level field in MeetAddOnManifest.</p></td></tr><tr><td><code>supportsPopOut</code></td><td><p><code>boolean</code></p><p>Whether the addon supports popping out to a browser PiP experience.</p></td></tr><tr><td><code>hostOrigins[]<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated, legacy name. Origins that should be added to the frame-src property of the iframe containing the third party site. Use addonorigins instead.</p></td></tr><tr><td><code>addOnOrigins[]</code></td><td><p><code>string</code></p><p>Origins that should be added to the frame-src property of the iframe containing the third party site.</p></td></tr><tr><td><code>openState</code></td><td><p><code>enum (<code>State</code>)</code></p><p>The initial state when the addon is opened.</p></td></tr><tr><td><code>supportsCollaborationHostControls</code></td><td><p><code>boolean</code></p><p>Whether the collaboration add-on supports host controls.</p></td></tr><tr><td><code>displayFlow<br><b>(deprecated)</b></code></td><td><p><code>enum (<code>DisplayFlow</code>)</code></p><p>The display flow the add-on will follow when launched.</p></td></tr></tbody></table>

## State

Enum for specifying initial addon opening state.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Initial state has not been specified with the addon.</td></tr><tr><td><code>SIDE_PANEL_ONLY</code></td><td>The addon opens with only the side panel active.</td></tr><tr><td><code>MAIN_STAGE_ONLY</code></td><td>The addon opens with only the main stage active.</td></tr><tr><td><code>SIDE_PANEL_AND_MAIN_STAGE</code></td><td>The addon opens with both the side panel and the main stage active.</td></tr></tbody></table>

## DisplayFlow

Enum for specifying the display flow the add-on will follow when launched

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DISPLAY_FLOW_UNSPECIFIED</code></td><td>Display flow has not been specified.</td></tr><tr><td><code>FOCUS</code></td><td>Add-on should launch in the "focus" display flow.</td></tr><tr><td><code>AUGMENT</code></td><td>Add-on should launch in the "augment" display flow.</td></tr></tbody></table>

## SheetsAddOnManifest

Properties customizing the appearance and execution of a Google Sheets add-on.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageExtensionPoint)
  },
  "onFileScopeGrantedTrigger": {
    object (SheetsExtensionPoint)
  },
  "linkPreviewTriggers": [
    {
      object (LinkPreviewExtensionPoint)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (<code>HomepageExtensionPoint</code>)</code></p><p>If present, this overrides the configuration from <code>addons.common.homepageTrigger</code>.</p></td></tr><tr><td><code>onFileScopeGrantedTrigger</code></td><td><p><code>object (<code>SheetsExtensionPoint</code>)</code></p><p>Endpoint to execute when file scope authorization is granted for this document/user pair.</p></td></tr><tr><td><code>linkPreviewTriggers[]</code></td><td><p><code>object (<code>LinkPreviewExtensionPoint</code>)</code></p><p>A list of extension points for previewing links in a Google Sheets document. For details, see <a href="https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips">Preview links with smart chips</a>.</p></td></tr></tbody></table>

## SheetsExtensionPoint

Common format for declaring a Sheets add-on's triggers.

JSON representation

```
{
  "runFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr></tbody></table>

## SlidesAddOnManifest

Properties customizing the appearance and execution of a Google Slides add-on.

JSON representation

```
{
  "homepageTrigger": {
    object (HomepageExtensionPoint)
  },
  "onFileScopeGrantedTrigger": {
    object (SlidesExtensionPoint)
  },
  "linkPreviewTriggers": [
    {
      object (LinkPreviewExtensionPoint)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p><code>object (<code>HomepageExtensionPoint</code>)</code></p><p>If present, this overrides the configuration from <code>addons.common.homepageTrigger</code>.</p></td></tr><tr><td><code>onFileScopeGrantedTrigger</code></td><td><p><code>object (<code>SlidesExtensionPoint</code>)</code></p><p>Endpoint to execute when file scope authorization is granted for this document/user pair.</p></td></tr><tr><td><code>linkPreviewTriggers[]</code></td><td><p><code>object (<code>LinkPreviewExtensionPoint</code>)</code></p><p>A list of extension points for previewing links in a Google Slides document. For details, see <a href="https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips">Preview links with smart chips</a>.</p></td></tr></tbody></table>

## SlidesExtensionPoint

Common format for declaring a Slides add-on's triggers.

JSON representation

```
{
  "runFunction": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><p>Required. The endpoint to execute when this extension point is activated.</p></td></tr></tbody></table>

## HttpOptions

Options for sending requests to add-on `HTTP` endpoints.

JSON representation

```
{
  "authorizationHeader": enum (HttpAuthorizationHeader),
  "granularOauthPermissionSupport": enum (GranularOauthPermissionSupport)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authorizationHeader</code></td><td><p><code>enum (<code>HttpAuthorizationHeader</code>)</code></p><p>Configuration for the token sent in the <code>HTTP</code> Authorization header.</p></td></tr><tr><td><code>granularOauthPermissionSupport</code></td><td><p><code>enum (<code>GranularOauthPermissionSupport</code>)</code></p><p>Whether the add-on has enabled Granular OAuth Consent.</p></td></tr></tbody></table>

## HttpAuthorizationHeader

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>HTTP_AUTHORIZATION_HEADER_UNSPECIFIED</code></td><td>Default value, equivalent to <code>SYSTEM_ID_TOKEN</code>.</td></tr><tr><td><code>SYSTEM_ID_TOKEN</code></td><td>Send an ID token for the project-specific Google Workspace add-on's system service account (default).</td></tr><tr><td><code>USER_ID_TOKEN</code></td><td>Send an ID token for the end user.</td></tr><tr><td><code>NONE</code></td><td>Do not send an Authentication header.</td></tr></tbody></table>

## GranularOauthPermissionSupport

Whether the add-on has enabled Granular OAuth Consent.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>GRANULAR_OAUTH_PERMISSION_SUPPORT_UNSPECIFIED</code></td><td>Default value, should not be used.</td></tr><tr><td><code>OPT_IN</code></td><td>The add-on is opted in to Granular OAuth Consent.</td></tr><tr><td><code>OPT_OUT</code></td><td>The add-on is opted out of Granular OAuth Consent.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a deployment with the specified name and configuration.</td></tr><tr><td><h3>delete</h3></td><td>Deletes the deployment with the given name.</td></tr><tr><td><h3>get</h3></td><td>Gets the deployment with the specified name.</td></tr><tr><td><h3>getInstallStatus</h3></td><td>Gets the install status of a test deployment.</td></tr><tr><td><h3>install</h3></td><td>Installs a deployment to your account for testing.</td></tr><tr><td><h3>list</h3></td><td>Lists all deployments in a particular project.</td></tr><tr><td><h3>replaceDeployment</h3></td><td>Creates or replaces a deployment with the specified name.</td></tr><tr><td><h3>uninstall</h3></td><td>Uninstalls a test deployment from the user’s account.</td></tr></tbody></table>
