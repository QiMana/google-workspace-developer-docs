---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Place
root: workspace
fetched_at: 2026-04-23T15:29:46.106Z
---

# Place

Type name: [Place](./Place.md)

Extends [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| address | [PostalAddress](./PostalAddress.md) | Physical address of the item. |
| aggregateRating | [AggregateRating](./AggregateRating.md) | The overall rating, based on a collection of reviews or ratings, of the item. |
| containedIn | [Place](./Place.md) | The basic containment relation between places. |
| event | [Event](./Event.md) | The event information. |
| events | [Event](./Event.md) | Upcoming or past events associated with this place or organization. |
| faxNumber | [Text](./Text.md) | The fax number. |
| geo | [GeoCoordinates](./GeoCoordinates.md) or [GeoShape](./GeoShape.md) | The geo coordinates of the place. |
| globalLocationNumber | [Text](./Text.md) | The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. |
| hasMap | [Map](./Map.md) or [URL](./URL.md) | A URL to a map of the place. |
| interactionCount | [Text](./Text.md) | A count of a specific user interactions with this item—for example, `20 UserLikes`, `5 UserComments`, or `300 UserDownloads`. The user interaction type should be one of the sub types of [UserInteraction](./UserInteraction.md). |
| isicV4 | [Text](./Text.md) | The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. |
| logo | [ImageObject](./ImageObject.md) or [URL](./URL.md) | An associated logo. |
| map | [URL](./URL.md) | A URL to a map of the place. |
| maps | [URL](./URL.md) | A URL to a map of the place. |
| openingHoursSpecification | [OpeningHoursSpecification](./OpeningHoursSpecification.md) | The opening hours of a certain place. |
| photo | [ImageObject](./ImageObject.md) or [Photograph](./Photograph.md) | A photograph of this place. |
| photos | [ImageObject](./ImageObject.md) or [Photograph](./Photograph.md) | Photographs of this place. |
| review | [Review](../../reference.md) | The review. |
| reviews | [Review](../../reference.md) | Review of the item. |
| telephone | [Text](./Text.md) | The telephone number. |
