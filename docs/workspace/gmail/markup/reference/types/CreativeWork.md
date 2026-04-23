---
source: https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork
root: workspace
fetched_at: 2026-04-23T15:29:24.662Z
---

# CreativeWork

Type name: [CreativeWork](./CreativeWork.md)

Extends [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| about | [Thing](./Thing.md) | The subject matter of the content. |
| accessibilityAPI | [Text](./Text.md) | Indicates that the resource is compatible with the referenced accessibility API ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)). |
| accessibilityControl | [Text](./Text.md) | Identifies input methods that are sufficient to fully control the described resource ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)). |
| accessibilityFeature | [Text](./Text.md) | Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)). |
| accessibilityHazard | [Text](./Text.md) | A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)). |
| accountablePerson | [Person](./Person.md) | Specifies the Person that is legally accountable for the CreativeWork. |
| aggregateRating | [AggregateRating](./AggregateRating.md) | The overall rating, based on a collection of reviews or ratings, of the item. |
| alternativeHeadline | [Text](./Text.md) | A secondary title of the CreativeWork. |
| associatedMedia | [MediaObject](./MediaObject.md) | A media object that encodes this CreativeWork. This property is a synonym for encoding. |
| audience | [Audience](./Audience.md) | The intended audience of the item, i.e. the group for whom the item was created. |
| audio | [AudioObject](./AudioObject.md) | An embedded audio object. |
| author | [Organization](./Organization.md) or [Person](./Person.md) | The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. |
| award | [Text](./Text.md) | An award won by this person or for this creative work. |
| awards | [Text](./Text.md) | Awards won by this person or for this creative work. |
| character | [Person](./Person.md) | Fictional person connected with a creative work. |
| citation | [CreativeWork](./CreativeWork.md) or [Text](./Text.md) | A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. |
| comment | [Comment](./Comment.md) or [UserComments](./UserComments.md) | Comment on the RSVP. |
| commentCount | [Integer](./Integer.md) | The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere. |
| contentLocation | [Place](./Place.md) | The location of the content. |
| contentRating | [Text](./Text.md) | Official rating of a piece of content—for example,'MPAA PG-13'. |
| contributor | [Organization](./Organization.md) or [Person](./Person.md) | A secondary contributor to the CreativeWork. |
| copyrightHolder | [Organization](./Organization.md) or [Person](./Person.md) | The party holding the legal copyright to the CreativeWork. |
| copyrightYear | [Number](./Number.md) | The year during which the claimed copyright for the CreativeWork was first asserted. |
| creator | [Organization](./Organization.md) or [Person](./Person.md) | The person / organization that made the reservation. |
| dateCreated | [Date](./Date.md) | The date on which the CreativeWork was created. |
| dateModified | [Date](./Date.md) or [DateTime](./DateTime.md) | Time the reservation was last modified. |
| datePublished | [Date](./Date.md) | Date of first broadcast/publication. |
| discussionUrl | [URL](./URL.md) | A link to the page containing the comments of the CreativeWork. |
| editor | [Person](./Person.md) | Specifies the Person who edited the CreativeWork. |
| educationalAlignment | [AlignmentObject](./AlignmentObject.md) | An alignment to an established educational framework. |
| educationalUse | [Text](./Text.md) | The purpose of a work in the context of education; for example, 'assignment', 'group work'. |
| encoding | or [MediaObject](./MediaObject.md) | How to encode the action into the http request when the method is POST. |
| encodings | [MediaObject](./MediaObject.md) | A media object that encodes this CreativeWork. |
| exampleOfWork | [CreativeWork](./CreativeWork.md) | A creative work that this work is an example/instance/realization/derivation of. |
| genre | [Text](./Text.md) | Genre of the creative work or group. |
| hasPart | [CreativeWork](./CreativeWork.md) | Indicates a CreativeWork that is (in some sense) a part of this CreativeWork. |
| headline | [Text](./Text.md) | Headline of the article. |
| inLanguage | [Text](./Text.md) | The language of the content. please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). |
| interactionCount | [Text](./Text.md) | A count of a specific user interactions with this item—for example, `20 UserLikes`, `5 UserComments`, or `300 UserDownloads`. The user interaction type should be one of the sub types of [UserInteraction](./UserInteraction.md). |
| interactivityType | [Text](./Text.md) | The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'. |
| isBasedOnUrl | [URL](./URL.md) | A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html. |
| isFamilyFriendly | [Boolean](./Boolean.md) | Indicates whether this content is family friendly. |
| isPartOf | [CreativeWork](./CreativeWork.md) | Indicates a CreativeWork that this CreativeWork is (in some sense) part of. |
| keywords | [Text](./Text.md) | Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas. |
| learningResourceType | [Text](./Text.md) | The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. |
| license | [CreativeWork](./CreativeWork.md) or [URL](./URL.md) | A license document that applies to this content, typically indicated by URL. |
| mentions | [Thing](./Thing.md) | Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept. |
| offers | [Offer](./Offer.md) | An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, or give away tickets to an event. |
| position | [Integer](./Integer.md) or [Text](./Text.md) | The position of an item in a series or sequence of items. |
| producer | [Organization](./Organization.md) or [Person](./Person.md) | The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.). |
| provider | [Organization](./Organization.md) or [Person](./Person.md) | The organization providing the reservation. |
| publisher | [Organization](./Organization.md) | The publisher of the creative work. |
| publishingPrinciples | [URL](./URL.md) | Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork. |
| recordedAt | [Event](./Event.md) | The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event. |
| releasedEvent | [PublicationEvent](./PublicationEvent.md) | The place and time the release was issued, expressed as a PublicationEvent. |
| review | [Review](../../reference.md) | The review. |
| reviews | [Review](../../reference.md) | Review of the item. |
| sourceOrganization | [Organization](./Organization.md) | The Organization on whose behalf the creator was working. |
| text | [Text](./Text.md) | The textual content of this CreativeWork. |
| thumbnailUrl | [URL](./URL.md) | A thumbnail image relevant to the Thing. |
| timeRequired | [Duration](./Duration.md) | Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'P30M', 'P1H25M'. |
| translator | [Organization](./Organization.md) or [Person](./Person.md) | Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market. |
| typicalAgeRange | [Text](./Text.md) | The typical expected age range, e.g. '7-9', '11-'. |
| version | [Number](./Number.md) | The version of the CreativeWork embodied by a specified resource. |
| video | [VideoObject](./VideoObject.md) | An embedded video object. |
| workExample | [CreativeWork](./CreativeWork.md) | Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook. |
