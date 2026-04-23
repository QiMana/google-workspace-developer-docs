---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Permit
root: workspace
fetched_at: 2026-04-23T15:29:45.731Z
---

# Permit

Type name: [Permit](https://developers.google.com/workspace/gmail/markup/reference/types/Permit)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| issuedBy | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The organization issuing the ticket or permit. |
| issuedThrough | [Service](https://developers.google.com/workspace/gmail/markup/reference/types/Service) | The service through with the permit was granted. |
| permitAudience | [Audience](https://developers.google.com/workspace/gmail/markup/reference/types/Audience) | The target audience for this permit. |
| validFor | [Duration](https://developers.google.com/workspace/gmail/markup/reference/types/Duration) | The time validity of the permit. |
| validFrom | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The date when the item becomes valid. |
| validIn | [AdministrativeArea](https://developers.google.com/workspace/gmail/markup/reference/types/AdministrativeArea) | The geographic area where the permit is valid. |
| validUntil | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The date when the item is no longer valid. |
