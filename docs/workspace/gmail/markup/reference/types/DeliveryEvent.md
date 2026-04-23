---
source: https://developers.google.com/workspace/gmail/markup/reference/types/DeliveryEvent
root: workspace
fetched_at: 2026-04-23T15:29:26.257Z
---

# DeliveryEvent

Type name: [DeliveryEvent](./DeliveryEvent.md)

Extends [Event](./Event.md)

| Name | Type | Description |
| --- | --- | --- |
| accessCode | [Text](./Text.md) | Password, PIN, or access code needed for delivery (e.g. from a locker). |
| availableFrom | [DateTime](./DateTime.md) | When the item is available for pickup from the store, locker, etc. |
| availableThrough | [DateTime](./DateTime.md) | After this date, the item will no longer be available for pickup. |
| hasDeliveryMethod | [DeliveryMethod](./DeliveryMethod.md) | Method used for delivery or shipping. |
