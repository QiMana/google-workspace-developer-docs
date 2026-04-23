---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalStudy
root: workspace
fetched_at: 2026-04-23T15:29:40.009Z
---

# MedicalStudy

Type name: [MedicalStudy](./MedicalStudy.md)

Extends [MedicalEntity](./MedicalEntity.md)

| Name | Type | Description |
| --- | --- | --- |
| outcome | [Text](./Text.md) | Expected or actual outcomes of the study. |
| population | [Text](./Text.md) | Any characteristics of the population used in the study, e.g. 'males under 65'. |
| sponsor | [Organization](./Organization.md) | Sponsor of the study. |
| status | [MedicalStudyStatus](./MedicalStudyStatus.md) | The status of the study (enumerated). |
| studyLocation | [AdministrativeArea](./AdministrativeArea.md) | The location in which the study is taking/took place. |
| studySubject | [MedicalEntity](./MedicalEntity.md) | A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study. |
