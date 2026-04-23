---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Thing
root: workspace
fetched_at: 2026-04-23T15:29:55.881Z
---

# Thing

Type name: [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| additionalType | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally. |
| alternateName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An alias for the item. |
| description | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A short description of the item. |
| image | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | An image of the item. This can be a [URL](http://schema.org/URL) or a fully described [ImageObject](http://schema.org/ImageObject). |
| name | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The string shown to the user on the UI element tied to the action. |
| potentialAction | [Action](https://developers.google.com/workspace/gmail/markup/reference/types/Action) | Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. |
| sameAs | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website. |
| url | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Target url to fetch in order to complete the action. |
