---
source: https://developers.google.com/workspace/gmail/markup/reference/types/LocalBusiness
root: workspace
fetched_at: 2026-04-23T15:29:36.203Z
---

# LocalBusiness

Type name: [LocalBusiness](https://developers.google.com/workspace/gmail/markup/reference/types/LocalBusiness)

Extends [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place)

| Name | Type | Description |
| --- | --- | --- |
| branchOf | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The larger organization that this local business is a branch of, if any. |
| currenciesAccepted | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency accepted (in [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217)). |
| openingHours | [Duration](https://developers.google.com/workspace/gmail/markup/reference/types/Duration) | The opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.   \- Days are specified using the following two-letter combinations: `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`.   \- Times are specified using 24:00 time. For example, 3pm is specified as `15:00`.   \- Here is an example: `<time itemprop="openingHours" datetime="Tu,Th 16:00-20:00">Tuesdays and Thursdays 4-8pm</time>`.   \- If a business is open 7 days a week, then it can be specified as `<time itemprop="openingHours" datetime="Mo-Su">Monday through Sunday, all day</time>`. |
| paymentAccepted | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Cash, credit card, etc. |
| priceRange | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The price range of the business, for example `$$$`. |
