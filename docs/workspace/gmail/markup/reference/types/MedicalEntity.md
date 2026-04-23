---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity
root: workspace
fetched_at: 2026-04-23T15:29:38.317Z
---

# MedicalEntity

Type name: [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity)

Extends [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| code | [MedicalCode](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalCode) | A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc. |
| guideline | [MedicalGuideline](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalGuideline) | A medical guideline related to this entity. |
| medicineSystem | [MedicineSystem](https://developers.google.com/workspace/gmail/markup/reference/types/MedicineSystem) | The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc. |
| recognizingAuthority | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine. |
| relevantSpecialty | [MedicalSpecialty](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalSpecialty) | If applicable, a medical specialty in which this entity is relevant. |
| study | [MedicalStudy](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalStudy) | A medical study or trial related to this entity. |
