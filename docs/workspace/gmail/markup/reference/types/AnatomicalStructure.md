---
source: https://developers.google.com/workspace/gmail/markup/reference/types/AnatomicalStructure
root: workspace
fetched_at: 2026-04-23T15:29:17.410Z
---

# AnatomicalStructure

Type name: [AnatomicalStructure](./AnatomicalStructure.md)

Extends [MedicalEntity](./MedicalEntity.md)

| Name | Type | Description |
| --- | --- | --- |
| associatedPathophysiology | [Text](./Text.md) | If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. |
| bodyLocation | [Text](./Text.md) | Location in the body of the anatomical structure. |
| connectedTo | [AnatomicalStructure](./AnatomicalStructure.md) | Other anatomical structures to which this structure is connected. |
| diagram | [ImageObject](./ImageObject.md) | An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures. |
| function | [Text](./Text.md) | Function of the anatomical structure. |
| partOfSystem | [AnatomicalSystem](./AnatomicalSystem.md) | The anatomical or organ system that this structure is part of. |
| relatedCondition | [MedicalCondition](./MedicalCondition.md) | A medical condition associated with this anatomy. |
| relatedTherapy | [MedicalTherapy](./MedicalTherapy.md) | A medical therapy related to this anatomy. |
| subStructure | [AnatomicalStructure](./AnatomicalStructure.md) | Component (sub-)structure(s) that comprise this anatomical structure. |
