---
source: https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalSystem
root: workspace
fetched_at: 2026-04-23T15:29:17.127Z
---

# AnatomicalSystem

Type name: [AnatomicalSystem](https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalSystem)

Extends [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity)

| Name | Type | Description |
| --- | --- | --- |
| associatedPathophysiology | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. |
| comprisedOf | [AnatomicalStructure](https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalStructure) or [AnatomicalSystem](https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalSystem) | The underlying anatomical structures, such as organs, that comprise the anatomical system. |
| relatedCondition | [MedicalCondition](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalCondition) | A medical condition associated with this anatomy. |
| relatedStructure | [AnatomicalStructure](https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalStructure) | Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system. |
| relatedTherapy | [MedicalTherapy](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTherapy) | A medical therapy related to this anatomy. |
