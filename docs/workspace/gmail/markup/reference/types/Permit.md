---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Permit
root: workspace
fetched_at: 2026-04-23T15:29:45.731Z
---

# Permit

Type name: [Permit](./Permit.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| issuedBy | [Organization](./Organization.md) | The organization issuing the ticket or permit. |
| issuedThrough | [Service](./Service.md) | The service through with the permit was granted. |
| permitAudience | [Audience](./Audience.md) | The target audience for this permit. |
| validFor | [Duration](./Duration.md) | The time validity of the permit. |
| validFrom | [DateTime](./DateTime.md) | The date when the item becomes valid. |
| validIn | [AdministrativeArea](./AdministrativeArea.md) | The geographic area where the permit is valid. |
| validUntil | [Date](./Date.md) | The date when the item is no longer valid. |
