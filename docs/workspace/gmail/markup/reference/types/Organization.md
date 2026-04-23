---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Organization
root: workspace
fetched_at: 2026-04-23T15:29:43.732Z
---

# Organization

Type name: [Organization](./Organization.md)

Extends [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| address | [PostalAddress](./PostalAddress.md) | Physical address of the item. |
| aggregateRating | [AggregateRating](./AggregateRating.md) | The overall rating, based on a collection of reviews or ratings, of the item. |
| brand | [Brand](./Brand.md) or [Organization](./Organization.md) | The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. |
| contactPoint | [ContactPoint](./ContactPoint.md) | A contact point for a person or organization. |
| contactPoints | [ContactPoint](./ContactPoint.md) | A contact point for a person or organization. |
| department | [Organization](./Organization.md) | A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe. |
| dissolutionDate | [Date](./Date.md) | The date that this organization was dissolved. |
| duns | [Text](./Text.md) | The Dun & Bradstreet DUNS number for identifying an organization or business person. |
| email | [Text](./Text.md) | Email address. |
| employee | [Person](./Person.md) | Someone working for this organization. |
| employees | [Person](./Person.md) | People working for this organization. |
| event | [Event](./Event.md) | The event information. |
| events | [Event](./Event.md) | Upcoming or past events associated with this place or organization. |
| faxNumber | [Text](./Text.md) | The fax number. |
| founder | [Person](./Person.md) | A person who founded this organization. |
| founders | [Person](./Person.md) | A person who founded this organization. |
| foundingDate | [Date](./Date.md) | The date that this organization was founded. |
| foundingLocation | [Place](./Place.md) | The place where the Organization was founded. |
| globalLocationNumber | [Text](./Text.md) | The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. |
| hasPOS | [Place](./Place.md) | Points-of-Sales operated by the organization or person. |
| interactionCount | [Text](./Text.md) | A count of a specific user interactions with this item—for example, `20 UserLikes`, `5 UserComments`, or `300 UserDownloads`. The user interaction type should be one of the sub types of [UserInteraction](./UserInteraction.md). |
| isicV4 | [Text](./Text.md) | The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. |
| legalName | [Text](./Text.md) | The official name of the organization, e.g. the registered company name. |
| location | [Place](./Place.md) or [PostalAddress](./PostalAddress.md) | The location of the event, organization or action. |
| logo | [ImageObject](./ImageObject.md) or [URL](./URL.md) | An associated logo. |
| makesOffer | [Offer](./Offer.md) | A pointer to products or services offered by the organization or person. |
| member | [Organization](./Organization.md) or [Person](./Person.md) | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| memberOf | [Organization](./Organization.md) or [ProgramMembership](./ProgramMembership.md) | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| members | [Organization](./Organization.md) or [Person](./Person.md) | A member of this organization. |
| naics | [Text](./Text.md) | The North American Industry Classification System (NAICS) code for a particular organization or business person. |
| owns | [OwnershipInfo](./OwnershipInfo.md) or [Product](./Product.md) | Products owned by the organization or person. |
| review | [Review](../../reference.md) | The review. |
| reviews | [Review](../../reference.md) | Review of the item. |
| seeks | [Demand](./Demand.md) | A pointer to products or services sought by the organization or person (demand). |
| subOrganization | [Organization](./Organization.md) | A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property. |
| taxID | [Text](./Text.md) | The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. |
| telephone | [Text](./Text.md) | The telephone number. |
| vatID | [Text](./Text.md) | The Value-added Tax ID of the organization or person. |
