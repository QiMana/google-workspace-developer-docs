---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Person
root: workspace
fetched_at: 2026-04-23T15:29:45.453Z
---

# Person

Type name: [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person)

Extends [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| additionalName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An additional name for a Person, can be used for a middle name. |
| address | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Physical address of the item. |
| affiliation | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | An organization that this person is affiliated with. For example, a school/university, a club, or a team. |
| alumniOf | [EducationalOrganization](https://developers.google.com/workspace/gmail/markup/reference/types/EducationalOrganization) | An educational organizations that the person is an alumni of. |
| award | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An award won by this person or for this creative work. |
| awards | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Awards won by this person or for this creative work. |
| birthDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | Date of birth. |
| birthPlace | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The place where the person was born. |
| brand | [Brand](https://developers.google.com/workspace/gmail/markup/reference/types/Brand) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. |
| children | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A child of the person. |
| colleague | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A colleague of the person. |
| colleagues | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A colleague of the person. |
| contactPoint | [ContactPoint](https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint) | A contact point for a person or organization. |
| contactPoints | [ContactPoint](https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint) | A contact point for a person or organization. |
| deathDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | Date of death. |
| deathPlace | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The place where the person died. |
| duns | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Dun & Bradstreet DUNS number for identifying an organization or business person. |
| email | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| familyName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property. |
| faxNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The fax number. |
| follows | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The most generic uni-directional social relation. |
| gender | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Gender of the person. |
| givenName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property. |
| globalLocationNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. |
| hasPOS | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | Points-of-Sales operated by the organization or person. |
| height | [Distance](https://developers.google.com/workspace/gmail/markup/reference/types/Distance) or [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The height of the item. |
| homeLocation | [ContactPoint](https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint) or [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | A contact location for a person's residence. |
| honorificPrefix | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| honorificSuffix | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW. |
| interactionCount | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A count of a specific user interactions with this item—for example, `20 UserLikes`, `5 UserComments`, or `300 UserDownloads`. The user interaction type should be one of the sub types of [UserInteraction](https://developers.google.com/workspace/gmail/markup/reference/types/UserInteraction). |
| isicV4 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. |
| jobTitle | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The job title of the person (for example, Financial Manager). |
| knows | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The most generic bi-directional social/work relation. |
| makesOffer | [Offer](https://developers.google.com/workspace/gmail/markup/reference/types/Offer) | A pointer to products or services offered by the organization or person. |
| memberOf | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| naics | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The North American Industry Classification System (NAICS) code for a particular organization or business person. |
| nationality | [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | Nationality of the person. |
| netWorth | [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) | The total financial value of the organization or person as calculated by subtracting assets from liabilities. |
| owns | [OwnershipInfo](https://developers.google.com/workspace/gmail/markup/reference/types/OwnershipInfo) or [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | Products owned by the organization or person. |
| parent | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A parent of this person. |
| parents | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A parents of the person. |
| performerIn | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | Event that this person is a performer or participant in. |
| relatedTo | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The most generic familial relation. |
| seeks | [Demand](https://developers.google.com/workspace/gmail/markup/reference/types/Demand) | A pointer to products or services sought by the organization or person (demand). |
| sibling | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A sibling of the person. |
| siblings | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A sibling of the person. |
| spouse | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The person's spouse. |
| taxID | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. |
| telephone | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The telephone number. |
| vatID | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Value-added Tax ID of the organization or person. |
| weight | [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The weight of the product or person. |
| workLocation | [ContactPoint](https://developers.google.com/workspace/gmail/markup/reference/types/ContactPoint) or [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | A contact location for a person's place of work. |
| worksFor | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | Organizations that the person works for. |
