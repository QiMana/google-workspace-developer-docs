---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ActionHandler
root: workspace
fetched_at: 2026-04-23T15:29:13.996Z
---

# ActionHandler

Type name: [ActionHandler](./ActionHandler.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| actionType | [URL](./URL.md) | Type of action that the handler accepts. This is to allow user agents to automatically discover potential action handlers for various actions. |
| optionalProperty | [Property](./Property.md) | Property that can be specified on the Action that the handler supports. |
| requiredProperty | [Property](./Property.md) | Property that must be provided on the action for it to be handled by the handler. |
