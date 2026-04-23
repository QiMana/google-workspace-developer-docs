---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MediaObject
root: workspace
fetched_at: 2026-04-23T15:29:37.314Z
---

# MediaObject

Type name: [MediaObject](https://developers.google.com/workspace/gmail/markup/reference/types/MediaObject)

Extends [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork)

| Name | Type | Description |
| --- | --- | --- |
| associatedArticle | [NewsArticle](https://developers.google.com/workspace/gmail/markup/reference/types/NewsArticle) | A NewsArticle associated with the Media Object. |
| bitrate | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The bitrate of the media object. |
| contentSize | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | File size in (mega/kilo) bytes. |
| contentUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Actual bytes of the media object, for example the image file or video file. |
| duration | [Duration](https://developers.google.com/workspace/gmail/markup/reference/types/Duration) | The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). |
| embedUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A URL pointing to a player for a specific video. In general, this is the information in the `src` element of an `embed` tag and should not be the same as the content of the `loc` tag. |
| encodesCreativeWork | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) | The CreativeWork encoded by this media object. |
| encodingFormat | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | mp3, mpeg4, etc. |
| expires | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | Date the content expires and is no longer useful or available. Useful for videos. |
| height | [Distance](https://developers.google.com/workspace/gmail/markup/reference/types/Distance) or [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The height of the item. |
| playerType | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Player type required—for example, Flash or Silverlight. |
| productionCompany | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The production company or studio responsible for the item e.g. series, video game, episode etc. |
| publication | [PublicationEvent](https://developers.google.com/workspace/gmail/markup/reference/types/PublicationEvent) | A publication event associated with the episode, clip or media object. |
| regionsAllowed | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166). |
| requiresSubscription | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | Indicates if use of the media require a subscription (either paid or free). Allowed values are `true` or `false` (note that an earlier version had 'yes', 'no'). |
| uploadDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | Date when this media object was uploaded to this site. |
| width | [Distance](https://developers.google.com/workspace/gmail/markup/reference/types/Distance) or [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The width of the item. |
