---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalStudy
root: workspace
fetched_at: 2026-04-23T15:29:40.009Z
---

# MedicalStudy

Type name: [MedicalStudy](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalStudy)

Extends [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity)

| Name | Type | Description |
| --- | --- | --- |
| outcome | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Expected or actual outcomes of the study. |
| population | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Any characteristics of the population used in the study, e.g. 'males under 65'. |
| sponsor | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | Sponsor of the study. |
| status | [MedicalStudyStatus](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalStudyStatus) | The status of the study (enumerated). |
| studyLocation | [AdministrativeArea](https://developers.google.com/workspace/gmail/markup/reference/types/AdministrativeArea) | The location in which the study is taking/took place. |
| studySubject | [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity) | A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study. |
