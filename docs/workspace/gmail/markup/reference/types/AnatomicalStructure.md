---
source: https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalStructure
root: workspace
fetched_at: 2026-04-23T15:29:17.410Z
---

# AnatomicalStructure

Type name: [AnatomicalStructure](https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalStructure)

Extends [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity)

| Name | Type | Description |
| --- | --- | --- |
| associatedPathophysiology | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. |
| bodyLocation | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Location in the body of the anatomical structure. |
| connectedTo | [AnatomicalStructure](https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalStructure) | Other anatomical structures to which this structure is connected. |
| diagram | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) | An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures. |
| function | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Function of the anatomical structure. |
| partOfSystem | [AnatomicalSystem](https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalSystem) | The anatomical or organ system that this structure is part of. |
| relatedCondition | [MedicalCondition](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalCondition) | A medical condition associated with this anatomy. |
| relatedTherapy | [MedicalTherapy](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTherapy) | A medical therapy related to this anatomy. |
| subStructure | [AnatomicalStructure](https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalStructure) | Component (sub-)structure(s) that comprise this anatomical structure. |
