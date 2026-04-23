---
source: https://developers.google.com/workspace/gmail/markup/reference/types/DeliveryEvent
root: workspace
fetched_at: 2026-04-23T15:29:26.257Z
---

# DeliveryEvent

Type name: [DeliveryEvent](https://developers.google.com/workspace/gmail/markup/reference/types/DeliveryEvent)

Extends [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event)

| Name | Type | Description |
| --- | --- | --- |
| accessCode | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Password, PIN, or access code needed for delivery (e.g. from a locker). |
| availableFrom | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | When the item is available for pickup from the store, locker, etc. |
| availableThrough | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | After this date, the item will no longer be available for pickup. |
| hasDeliveryMethod | [DeliveryMethod](https://developers.google.com/workspace/gmail/markup/reference/types/DeliveryMethod) | Method used for delivery or shipping. |
