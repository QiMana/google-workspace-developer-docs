---
source: https://developers.google.com/apps-script/manifest/gmail-addons
root: apps-script
fetched_at: 2026-04-23T15:18:31.375Z
---

# Gmail manifest resource

## Page Summary

- The Gmail manifest defines the content and behavior of a Google Workspace add-on within Gmail and requires all components marked as **Required** if extending Gmail.
- Older Gmail add-on manifest fields are deprecated, and existing Gmail add-ons should be upgraded to Google Workspace add-ons.
- The Gmail manifest includes configurations for compose actions via `composeTrigger` and triggers that fire when messages are opened via `contextualTriggers`.
- `ContextualTriggers` currently only support an `unconditional` criteria, meaning they fire for every opened Gmail message.
- `SelectActions` define the function to run when a compose action is selected and are limited to a single action per add-on.

The resource configuration used to define [Google Workspace add-on](https://developers.google.com/workspace/add-ons/concepts/types#g_suite_add-ons) content and behavior within Gmail. Google Workspace add-on manifests must include all components marked as **Required** if they extend Gmail.

## Gmail

The Google Workspace add-on manifest configuration for Gmail extensions. See [Extending Gmail with Google Workspace add-ons](https://developers.google.com/workspace/add-ons/gmail) for details.

JSON representation

```
{
  "authorizationCheckFunction": string,
  "composeTrigger": {
    object (ComposeTrigger)
  },
  "contextualTriggers": [
    {
      object (ContextualTrigger)
    }
  ],
  "homepageTrigger": {
    object (HomepageTrigger)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authorizationCheckFunction</code></td><td><p><code>string</code></p><p><b>Deprecated.</b> The name of a Apps Script function performing third-party authorization checks.</p><p>This function is deprecated. Instead, the add-on should throw an exception from the main invocation, as shown in the <a href="https://developers.google.com/workspace/add-ons/how-tos/non-google-services#non-google_oauth_configuration_example">Non-Google OAuth configuration example</a>.</p></td></tr><tr><td><code>composeTrigger</code></td><td><p><code>object (ComposeTrigger)</code></p><b>Required for compose actions.</b> Defines the UIs available when composing an email.<p>See <a href="https://developers.google.com/workspace/add-ons/gmail/extending-compose-ui">Extending the compose UI with compose actions</a> for details.</p></td></tr><tr><td><code>contextualTriggers[]</code></td><td><p><code>object (ContextualTrigger)</code></p><b>Required.</b> A list of triggers that fire when a message opens in Gmail. Triggers execute a specific Apps Script function to update the UI.</td></tr><tr><td><code>homepageTrigger</code></td><td><p><code>object (HomepageTrigger)</code></p><p>The trigger function for the add-on <a href="https://developers.google.com/workspace/add-ons/concepts/homepages">homepage</a> in Gmail. This overrides <a href="https://developers.google.com/apps-script/manifest/addons#Common.FIELDS.homepageTrigger"><code>addOns.common.homepageTrigger</code></a>.</p></td></tr></tbody></table>

### ComposeTrigger

The configuration for a compose action. See [Extending the compose UI](https://developers.google.com/workspace/add-ons/gmail/extending-compose-ui) for details.

JSON representation

```
{
  "draftAccess": string,
  "selectActions": [
    {
      object (SelectAction)
    }
  ]
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>draftAccess</code></td><td><p><code>string</code></p><p>Defines the data access level for a compose trigger function. Valid options include:</p><ul><li><code>NONE</code> (default): The event object is mostly empty.</li><li><code>METADATA</code>: The event object includes recipient lists. This requires the <code>gmail.addons.current.message.metadata</code> <a href="https://developers.google.com/workspace/add-ons/concepts/gsuite-scopes#gmail_add-on_scopes">scope</a>.</li></ul></td></tr><tr><td><code>selectActions[]</code></td><td><p><code>object (SelectAction)</code></p><p>A list of compose actions. The list is <b>limited to a single action per add-on</b>. The compose action has an icon in the Gmail window, specified by <code>gmail.logoUrl</code>.</p></td></tr></tbody></table>

### ContextualTrigger

The configuration for a trigger that fires when a user opens a Gmail message. See [Extending the message UI](https://developers.google.com/workspace/add-ons/gmail/extending-message-ui) for details.

JSON representation

```
{
  "onTriggerFunction": string,
  "unconditional": {},
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>onTriggerFunction</code></td><td><p><code>string</code></p><b>Required for each contextual trigger.</b> The name of the Apps Script function that executes when the trigger fires.</td></tr><tr><td><code>unconditional</code></td><td><p><code>object</code></p><b>Required for each contextual trigger.</b> Specifies that the trigger activates for all opened Gmail messages. This should always be an empty object.</td></tr></tbody></table>

### SelectAction

The compose action configuration defining the function to run when selected.

JSON representation

```
{
  "runFunction": string,
  "text": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>runFunction</code></td><td><p><code>string</code></p><b>Required for compose actions.</b> The name of the Apps Script function that executes when selected. The function builds the add-on compose UI.</td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><b>Required for compose actions.</b> A short description of the action.</td></tr></tbody></table>
