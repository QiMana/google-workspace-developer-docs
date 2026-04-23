---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ActionHandler
root: workspace
fetched_at: 2026-04-23T15:29:13.996Z
---

# ActionHandler

Type name: [ActionHandler](https://developers.google.com/workspace/gmail/markup/reference/types/ActionHandler)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| actionType | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Type of action that the handler accepts. This is to allow user agents to automatically discover potential action handlers for various actions. |
| optionalProperty | [Property](https://developers.google.com/workspace/gmail/markup/reference/types/Property) | Property that can be specified on the Action that the handler supports. |
| requiredProperty | [Property](https://developers.google.com/workspace/gmail/markup/reference/types/Property) | Property that must be provided on the action for it to be handled by the handler. |
