---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Organization
root: workspace
fetched_at: 2026-04-23T15:29:43.732Z
---

# Organization

Type name: [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization)

Extends [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| address | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Physical address of the item. |
| aggregateRating | [AggregateRating](https://developers.google.com/workspace/gmail/markup/reference/types/AggregateRating) | The overall rating, based on a collection of reviews or ratings, of the item. |
| brand | [Brand](https://developers.google.com/workspace/gmail/markup/reference/types/Brand) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. |
| contactPoint | [ContactPoint](https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint) | A contact point for a person or organization. |
| contactPoints | [ContactPoint](https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint) | A contact point for a person or organization. |
| department | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe. |
| dissolutionDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The date that this organization was dissolved. |
| duns | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Dun & Bradstreet DUNS number for identifying an organization or business person. |
| email | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| employee | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Someone working for this organization. |
| employees | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | People working for this organization. |
| event | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | The event information. |
| events | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | Upcoming or past events associated with this place or organization. |
| faxNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The fax number. |
| founder | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A person who founded this organization. |
| founders | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A person who founded this organization. |
| foundingDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The date that this organization was founded. |
| foundingLocation | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The place where the Organization was founded. |
| globalLocationNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. |
| hasPOS | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | Points-of-Sales operated by the organization or person. |
| interactionCount | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A count of a specific user interactions with this item—for example, `20 UserLikes`, `5 UserComments`, or `300 UserDownloads`. The user interaction type should be one of the sub types of [UserInteraction](https://developers.google.com/workspace/gmail/markup/reference/types/UserInteraction). |
| isicV4 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. |
| legalName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The official name of the organization, e.g. the registered company name. |
| location | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) or [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | The location of the event, organization or action. |
| logo | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | An associated logo. |
| makesOffer | [Offer](https://developers.google.com/workspace/gmail/markup/reference/types/Offer) | A pointer to products or services offered by the organization or person. |
| member | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| memberOf | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| members | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A member of this organization. |
| naics | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The North American Industry Classification System (NAICS) code for a particular organization or business person. |
| owns | [OwnershipInfo](https://developers.google.com/workspace/gmail/markup/reference/types/OwnershipInfo) or [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | Products owned by the organization or person. |
| review | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | The review. |
| reviews | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | Review of the item. |
| seeks | [Demand](https://developers.google.com/workspace/gmail/markup/reference/types/Demand) | A pointer to products or services sought by the organization or person (demand). |
| subOrganization | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property. |
| taxID | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. |
| telephone | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The telephone number. |
| vatID | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Value-added Tax ID of the organization or person. |
