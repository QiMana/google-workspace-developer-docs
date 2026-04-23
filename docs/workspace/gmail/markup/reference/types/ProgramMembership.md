---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership
root: workspace
fetched_at: 2026-04-23T15:29:47.264Z
---

# ProgramMembership

Type name: [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| hostingOrganization | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The organization (airline, travelers' club, etc.) the membership is made with. |
| member | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| members | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | A member of this organization. |
| membershipNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A unique identifier for the membership. |
| programName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The program providing the membership. |
