---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Place
root: workspace
fetched_at: 2026-04-23T15:29:46.106Z
---

# Place

Type name: [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place)

Extends [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| address | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Physical address of the item. |
| aggregateRating | [AggregateRating](https://developers.google.com/workspace/gmail/markup/reference/types/AggregateRating) | The overall rating, based on a collection of reviews or ratings, of the item. |
| containedIn | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The basic containment relation between places. |
| event | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | The event information. |
| events | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | Upcoming or past events associated with this place or organization. |
| faxNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The fax number. |
| geo | [GeoCoordinates](https://developers.google.com/workspace/gmail/markup/reference/types/GeoCoordinates) or [GeoShape](https://developers.google.com/workspace/gmail/markup/reference/types/GeoShape) | The geo coordinates of the place. |
| globalLocationNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. |
| hasMap | [Map](https://developers.google.com/workspace/gmail/markup/reference/types/Map) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A URL to a map of the place. |
| interactionCount | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A count of a specific user interactions with this item—for example, `20 UserLikes`, `5 UserComments`, or `300 UserDownloads`. The user interaction type should be one of the sub types of [UserInteraction](https://developers.google.com/workspace/gmail/markup/reference/types/UserInteraction). |
| isicV4 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. |
| logo | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | An associated logo. |
| map | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A URL to a map of the place. |
| maps | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A URL to a map of the place. |
| openingHoursSpecification | [OpeningHoursSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/OpeningHoursSpecification) | The opening hours of a certain place. |
| photo | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [Photograph](https://developers.google.com/workspace/gmail/markup/reference/types/Photograph) | A photograph of this place. |
| photos | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [Photograph](https://developers.google.com/workspace/gmail/markup/reference/types/Photograph) | Photographs of this place. |
| review | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | The review. |
| reviews | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | Review of the item. |
| telephone | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The telephone number. |
