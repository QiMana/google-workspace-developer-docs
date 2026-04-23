---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint
root: workspace
fetched_at: 2026-04-23T15:29:23.970Z
---

# ContactPoint

Type name: [ContactPoint](https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint)

Extends [StructuredValue](https://developers.google.com/workspace/gmail/markup/reference/types/StructuredValue)

| Name | Type | Description |
| --- | --- | --- |
| areaServed | [AdministrativeArea](https://developers.google.com/workspace/gmail/markup/reference/types/AdministrativeArea) | The location served by this contact point (e.g., a phone number intended for Europeans vs. North Americans or only within the United States). |
| availableLanguage | [Language](https://developers.google.com/workspace/gmail/markup/reference/types/Language) | A language someone may use with the item. |
| contactOption | [ContactPointOption](https://developers.google.com/workspace/gmail/markup/reference/types/ContactPointOption) | An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers). |
| contactType | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point. |
| email | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| faxNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The fax number. |
| hoursAvailable | [OpeningHoursSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/OpeningHoursSpecification) | The hours during which this contact point is available. |
| productSupported | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones"). |
| telephone | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The telephone number. |
