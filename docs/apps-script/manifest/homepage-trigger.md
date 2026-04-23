---
source: https://developers.google.com/apps-script/manifest/homepage-trigger
root: apps-script
fetched_at: 2026-04-23T15:18:31.726Z
---

# HomepageTrigger manifest resource

## Page Summary

- The `HomepageTrigger` configuration defines the behavior of homepage triggers in Google Workspace add-ons.
- Homepage triggers can be set at a common level or for individual host applications, with host application settings taking precedence.
- The JSON representation of a `HomepageTrigger` includes `enabled` (boolean) and `runFunction` (string) fields.
- The `runFunction` field specifies the name of the function that runs when the trigger fires and should return an array of `Card` objects.

The resource configuration used to define [Google Workspace add-on](../../workspace/add-ons/concepts/types.md#g_suite_add-ons) [homepage triggers](../../workspace/add-ons/concepts/homepages.md#homepage_configuration).

## HomepageTrigger

The Google Workspace add-on manifest configuration for [homepage triggers](../../workspace/add-ons/concepts/homepages.md#homepage_configuration).

Homepage triggers can be defined in the [`addOns.common.homepageTrigger`](./addons.md#Common.FIELDS.homepageTrigger) resource or individual host application resources. Host application triggers, if defined and enabled, override the common homepage trigger.

See [Homepage configuration](../../workspace/add-ons/concepts/homepages.md#homepage_configuration) for details.

JSON representation

```
{
  "enabled": boolean,
  "runFunction": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>enabled</code></td><td><p><code>boolean</code></p>Whether non-contextual cards are enabled for the host application. Defaults to <code>true</code>.</td></tr><tr><td><code>runFunction</code></td><td><p><code>string</code></p>The name of the trigger function. The function must return an array of <a href="https://developers.google.com/apps-script/reference/card-service/card"><code>Card</code></a> objects for the add-on homepage.</td></tr></tbody></table>
