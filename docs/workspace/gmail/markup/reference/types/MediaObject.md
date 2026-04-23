---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MediaObject
root: workspace
fetched_at: 2026-04-23T15:29:37.314Z
---

# MediaObject

Type name: [MediaObject](./MediaObject.md)

Extends [CreativeWork](./CreativeWork.md)

| Name | Type | Description |
| --- | --- | --- |
| associatedArticle | [NewsArticle](./NewsArticle.md) | A NewsArticle associated with the Media Object. |
| bitrate | [Text](./Text.md) | The bitrate of the media object. |
| contentSize | [Text](./Text.md) | File size in (mega/kilo) bytes. |
| contentUrl | [URL](./URL.md) | Actual bytes of the media object, for example the image file or video file. |
| duration | [Duration](./Duration.md) | The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). |
| embedUrl | [URL](./URL.md) | A URL pointing to a player for a specific video. In general, this is the information in the `src` element of an `embed` tag and should not be the same as the content of the `loc` tag. |
| encodesCreativeWork | [CreativeWork](./CreativeWork.md) | The CreativeWork encoded by this media object. |
| encodingFormat | [Text](./Text.md) | mp3, mpeg4, etc. |
| expires | [Date](./Date.md) | Date the content expires and is no longer useful or available. Useful for videos. |
| height | [Distance](./Distance.md) or [QuantitativeValue](./QuantitativeValue.md) | The height of the item. |
| playerType | [Text](./Text.md) | Player type required—for example, Flash or Silverlight. |
| productionCompany | [Organization](./Organization.md) | The production company or studio responsible for the item e.g. series, video game, episode etc. |
| publication | [PublicationEvent](./PublicationEvent.md) | A publication event associated with the episode, clip or media object. |
| regionsAllowed | [Place](./Place.md) | The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166). |
| requiresSubscription | [Boolean](./Boolean.md) | Indicates if use of the media require a subscription (either paid or free). Allowed values are `true` or `false` (note that an earlier version had 'yes', 'no'). |
| uploadDate | [Date](./Date.md) | Date when this media object was uploaded to this site. |
| width | [Distance](./Distance.md) or [QuantitativeValue](./QuantitativeValue.md) | The width of the item. |
