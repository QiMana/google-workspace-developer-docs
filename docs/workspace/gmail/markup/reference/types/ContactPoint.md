---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint
root: workspace
fetched_at: 2026-04-23T15:29:23.970Z
---

# ContactPoint

Type name: [ContactPoint](./ContactPoint.md)

Extends [StructuredValue](./StructuredValue.md)

| Name | Type | Description |
| --- | --- | --- |
| areaServed | [AdministrativeArea](./AdministrativeArea.md) | The location served by this contact point (e.g., a phone number intended for Europeans vs. North Americans or only within the United States). |
| availableLanguage | [Language](./Language.md) | A language someone may use with the item. |
| contactOption | [ContactPointOption](./ContactPointOption.md) | An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers). |
| contactType | [Text](./Text.md) | A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point. |
| email | [Text](./Text.md) | Email address. |
| faxNumber | [Text](./Text.md) | The fax number. |
| hoursAvailable | [OpeningHoursSpecification](./OpeningHoursSpecification.md) | The hours during which this contact point is available. |
| productSupported | [Product](./Product.md) or [Text](./Text.md) | The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones"). |
| telephone | [Text](./Text.md) | The telephone number. |
