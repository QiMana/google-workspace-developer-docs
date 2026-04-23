---
source: https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork
root: workspace
fetched_at: 2026-04-23T15:29:24.662Z
---

# CreativeWork

Type name: [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork)

Extends [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| about | [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | The subject matter of the content. |
| accessibilityAPI | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Indicates that the resource is compatible with the referenced accessibility API ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)). |
| accessibilityControl | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifies input methods that are sufficient to fully control the described resource ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)). |
| accessibilityFeature | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)). |
| accessibilityHazard | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)). |
| accountablePerson | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Specifies the Person that is legally accountable for the CreativeWork. |
| aggregateRating | [AggregateRating](https://developers.google.com/workspace/gmail/markup/reference/types/AggregateRating) | The overall rating, based on a collection of reviews or ratings, of the item. |
| alternativeHeadline | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A secondary title of the CreativeWork. |
| associatedMedia | [MediaObject](https://developers.google.com/workspace/gmail/markup/reference/types/MediaObject) | A media object that encodes this CreativeWork. This property is a synonym for encoding. |
| audience | [Audience](https://developers.google.com/workspace/gmail/markup/reference/types/Audience) | The intended audience of the item, i.e. the group for whom the item was created. |
| audio | [AudioObject](https://developers.google.com/workspace/gmail/markup/reference/types/AudioObject) | An embedded audio object. |
| author | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. |
| award | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An award won by this person or for this creative work. |
| awards | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Awards won by this person or for this creative work. |
| character | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Fictional person connected with a creative work. |
| citation | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. |
| comment | [Comment](https://developers.google.com/workspace/gmail/markup/reference/types/Comment) or [UserComments](https://developers.google.com/workspace/gmail/markup/reference/types/UserComments) | Comment on the RSVP. |
| commentCount | [Integer](https://developers.google.com/workspace/gmail/markup/reference/types/Integer) | The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere. |
| contentLocation | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The location of the content. |
| contentRating | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Official rating of a piece of content—for example,'MPAA PG-13'. |
| contributor | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A secondary contributor to the CreativeWork. |
| copyrightHolder | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The party holding the legal copyright to the CreativeWork. |
| copyrightYear | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The year during which the claimed copyright for the CreativeWork was first asserted. |
| creator | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The person / organization that made the reservation. |
| dateCreated | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The date on which the CreativeWork was created. |
| dateModified | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) or [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Time the reservation was last modified. |
| datePublished | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | Date of first broadcast/publication. |
| discussionUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A link to the page containing the comments of the CreativeWork. |
| editor | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Specifies the Person who edited the CreativeWork. |
| educationalAlignment | [AlignmentObject](https://developers.google.com/workspace/gmail/markup/reference/types/AlignmentObject) | An alignment to an established educational framework. |
| educationalUse | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The purpose of a work in the context of education; for example, 'assignment', 'group work'. |
| encoding | or [MediaObject](https://developers.google.com/workspace/gmail/markup/reference/types/MediaObject) | How to encode the action into the http request when the method is POST. |
| encodings | [MediaObject](https://developers.google.com/workspace/gmail/markup/reference/types/MediaObject) | A media object that encodes this CreativeWork. |
| exampleOfWork | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) | A creative work that this work is an example/instance/realization/derivation of. |
| genre | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Genre of the creative work or group. |
| hasPart | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) | Indicates a CreativeWork that is (in some sense) a part of this CreativeWork. |
| headline | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Headline of the article. |
| inLanguage | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The language of the content. please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). |
| interactionCount | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A count of a specific user interactions with this item—for example, `20 UserLikes`, `5 UserComments`, or `300 UserDownloads`. The user interaction type should be one of the sub types of [UserInteraction](https://developers.google.com/workspace/gmail/markup/reference/types/UserInteraction). |
| interactivityType | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'. |
| isBasedOnUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html. |
| isFamilyFriendly | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | Indicates whether this content is family friendly. |
| isPartOf | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) | Indicates a CreativeWork that this CreativeWork is (in some sense) part of. |
| keywords | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas. |
| learningResourceType | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. |
| license | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A license document that applies to this content, typically indicated by URL. |
| mentions | [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept. |
| offers | [Offer](https://developers.google.com/workspace/gmail/markup/reference/types/Offer) | An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, or give away tickets to an event. |
| position | [Integer](https://developers.google.com/workspace/gmail/markup/reference/types/Integer) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The position of an item in a series or sequence of items. |
| producer | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.). |
| provider | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The organization providing the reservation. |
| publisher | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The publisher of the creative work. |
| publishingPrinciples | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork. |
| recordedAt | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event. |
| releasedEvent | [PublicationEvent](https://developers.google.com/workspace/gmail/markup/reference/types/PublicationEvent) | The place and time the release was issued, expressed as a PublicationEvent. |
| review | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | The review. |
| reviews | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | Review of the item. |
| sourceOrganization | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The Organization on whose behalf the creator was working. |
| text | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The textual content of this CreativeWork. |
| thumbnailUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A thumbnail image relevant to the Thing. |
| timeRequired | [Duration](https://developers.google.com/workspace/gmail/markup/reference/types/Duration) | Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'. |
| translator | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market. |
| typicalAgeRange | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The typical expected age range, e.g. '7-9', '11-'. |
| version | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The version of the CreativeWork embodied by a specified resource. |
| video | [VideoObject](https://developers.google.com/workspace/gmail/markup/reference/types/VideoObject) | An embedded video object. |
| workExample | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) | Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook. |
