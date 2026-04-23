---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership
root: workspace
fetched_at: 2026-04-23T15:29:47.264Z
---

# ProgramMembership

Type name: [ProgramMembership](./ProgramMembership.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| hostingOrganization | [Organization](./Organization.md) | The organization (airline, travelers' club, etc.) the membership is made with. |
| member | [Organization](./Organization.md) or [Person](./Person.md) | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| members | [Organization](./Organization.md) or [Person](./Person.md) | A member of this organization. |
| membershipNumber | [Text](./Text.md) | A unique identifier for the membership. |
| programName | [Text](./Text.md) | The program providing the membership. |
