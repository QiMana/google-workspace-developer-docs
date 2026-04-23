---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Person
root: workspace
fetched_at: 2026-04-23T15:29:45.453Z
---

# Person

Type name: [Person](./Person.md)

Extends [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| additionalName | [Text](./Text.md) | An additional name for a Person, can be used for a middle name. |
| address | [PostalAddress](./PostalAddress.md) | Physical address of the item. |
| affiliation | [Organization](./Organization.md) | An organization that this person is affiliated with. For example, a school/university, a club, or a team. |
| alumniOf | [EducationalOrganization](./EducationalOrganization.md) | An educational organizations that the person is an alumni of. |
| award | [Text](./Text.md) | An award won by this person or for this creative work. |
| awards | [Text](./Text.md) | Awards won by this person or for this creative work. |
| birthDate | [Date](./Date.md) | Date of birth. |
| birthPlace | [Place](./Place.md) | The place where the person was born. |
| brand | [Brand](./Brand.md) or [Organization](./Organization.md) | The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. |
| children | [Person](./Person.md) | A child of the person. |
| colleague | [Person](./Person.md) | A colleague of the person. |
| colleagues | [Person](./Person.md) | A colleague of the person. |
| contactPoint | [ContactPoint](./ContactPoint.md) | A contact point for a person or organization. |
| contactPoints | [ContactPoint](./ContactPoint.md) | A contact point for a person or organization. |
| deathDate | [Date](./Date.md) | Date of death. |
| deathPlace | [Place](./Place.md) | The place where the person died. |
| duns | [Text](./Text.md) | The Dun & Bradstreet DUNS number for identifying an organization or business person. |
| email | [Text](./Text.md) | Email address. |
| familyName | [Text](./Text.md) | Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property. |
| faxNumber | [Text](./Text.md) | The fax number. |
| follows | [Person](./Person.md) | The most generic uni-directional social relation. |
| gender | [Text](./Text.md) | Gender of the person. |
| givenName | [Text](./Text.md) | Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property. |
| globalLocationNumber | [Text](./Text.md) | The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. |
| hasPOS | [Place](./Place.md) | Points-of-Sales operated by the organization or person. |
| height | [Distance](./Distance.md) or [QuantitativeValue](./QuantitativeValue.md) | The height of the item. |
| homeLocation | [ContactPoint](./ContactPoint.md) or [Place](./Place.md) | A contact location for a person's residence. |
| honorificPrefix | [Text](./Text.md) | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| honorificSuffix | [Text](./Text.md) | An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW. |
| interactionCount | [Text](./Text.md) | A count of a specific user interactions with this item—for example, `20 UserLikes`, `5 UserComments`, or `300 UserDownloads`. The user interaction type should be one of the sub types of [UserInteraction](./UserInteraction.md). |
| isicV4 | [Text](./Text.md) | The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. |
| jobTitle | [Text](./Text.md) | The job title of the person (for example, Financial Manager). |
| knows | [Person](./Person.md) | The most generic bi-directional social/work relation. |
| makesOffer | [Offer](./Offer.md) | A pointer to products or services offered by the organization or person. |
| memberOf | [Organization](./Organization.md) or [ProgramMembership](./ProgramMembership.md) | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| naics | [Text](./Text.md) | The North American Industry Classification System (NAICS) code for a particular organization or business person. |
| nationality | [Country](./Country.md) | Nationality of the person. |
| netWorth | [PriceSpecification](./PriceSpecification.md) | The total financial value of the organization or person as calculated by subtracting assets from liabilities. |
| owns | [OwnershipInfo](./OwnershipInfo.md) or [Product](./Product.md) | Products owned by the organization or person. |
| parent | [Person](./Person.md) | A parent of this person. |
| parents | [Person](./Person.md) | A parents of the person. |
| performerIn | [Event](./Event.md) | Event that this person is a performer or participant in. |
| relatedTo | [Person](./Person.md) | The most generic familial relation. |
| seeks | [Demand](./Demand.md) | A pointer to products or services sought by the organization or person (demand). |
| sibling | [Person](./Person.md) | A sibling of the person. |
| siblings | [Person](./Person.md) | A sibling of the person. |
| spouse | [Person](./Person.md) | The person's spouse. |
| taxID | [Text](./Text.md) | The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. |
| telephone | [Text](./Text.md) | The telephone number. |
| vatID | [Text](./Text.md) | The Value-added Tax ID of the organization or person. |
| weight | [QuantitativeValue](./QuantitativeValue.md) | The weight of the product or person. |
| workLocation | [ContactPoint](./ContactPoint.md) or [Place](./Place.md) | A contact location for a person's place of work. |
| worksFor | [Organization](./Organization.md) | Organizations that the person works for. |
