---
source: https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalSystem
root: workspace
fetched_at: 2026-04-23T15:29:17.127Z
---

# AnatomicalSystem

Type name: [AnatomicalSystem](./AnatomicalSystem.md)

Extends [MedicalEntity](./MedicalEntity.md)

| Name | Type | Description |
| --- | --- | --- |
| associatedPathophysiology | [Text](./Text.md) | If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. |
| comprisedOf | [AnatomicalStructure](./AnatomicalStructure.md) or [AnatomicalSystem](./AnatomicalSystem.md) | The underlying anatomical structures, such as organs, that comprise the anatomical system. |
| relatedCondition | [MedicalCondition](./MedicalCondition.md) | A medical condition associated with this anatomy. |
| relatedStructure | [AnatomicalStructure](./AnatomicalStructure.md) | Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system. |
| relatedTherapy | [MedicalTherapy](./MedicalTherapy.md) | A medical therapy related to this anatomy. |
