---
source: https://developers.google.com/workspace/add-ons/guides/access-user-locale-timezone
root: workspace
fetched_at: 2026-04-23T15:22:45.669Z
---

# Get user locale and timezone

## Page Summary

- Google Workspace add-ons can be configured to access and utilize a user's locale and timezone for customization.
- Add-on developers must set `addOns.common.useLocaleFromApp` to `true` and include the `https://www.googleapis.com/auth/script.locale` scope in the manifest file for locale and timezone access.
- Event objects provide the user's locale and timezone information through fields like `userLocale`, `timeZone.offset`, and `timeZone.id`, which add-ons can utilize in their functions.
- After adding the necessary scope, users need to re-authorize the add-on for the changes to take effect.
- Add-ons should only request necessary scopes and consider removing unused ones, especially those previously used for locale and timezone access through other APIs or services.

Google Workspace add-ons can access the locale and timezone of its user and use that information to customize its interface and behavior. Configure your add-on's [manifest](../concepts/workspace-manifests.md) to permit your add-on to access this information.

## Configure the add-on manifest

Configure your add-on to access user locale and timezone information with the following steps:

1. In your add-on's [manifest](../concepts/workspace-manifests.md) file, set the `addOns.common.useLocaleFromApp` field to `true`.
2. If it isn't present already, add the following explicit scope in the manifest's `oauthScopes` list: `https://www.googleapis.com/auth/script.locale`

If you added a scope to the add-on's `oauthScope` list, users must [re-authorize](../how-tos/starting-addons.md) the add-on the next time it is opened.

## Get locale and timezone information

[Event objects](../concepts/event-objects.md) carry user locale information when properly configured. The following fields appear in the [`commonEventObject`](../concepts/event-objects.md#common_event_object) substructure of the event object:

- `commonEventObject.userLocale` —The user's language and country/region identifier. For example, `en-US`.
- `commonEventObject.timeZone.offset` —The user's timezone offset, in milliseconds, from Coordinated Universal Time (UTC).
- `commonEventObject.timeZone.id` —The user's timezone identifier. For example, `America/New_York`.
- `commonEventObject.timeZone` —The user's timezone ID and offset.

See [Event objects](../concepts/event-objects.md) for more details.

[Event objects](../concepts/event-objects.md) are passed to [action callback functions](../concepts/actions.md#callback_functions) as the user interacts with your add-on, and to homepage and contextual trigger functions. Each callback or trigger function can read the locale and timezone information from the event object and use it as necessary. For example, a callback function that is [navigating to a new card](../how-tos/navigation.md#navigation_methods) could refer to the locale string when deciding what text to add to the card.
