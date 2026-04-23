---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity
root: workspace
fetched_at: 2026-04-23T15:29:38.317Z
---

# MedicalEntity

Type name: [MedicalEntity](./MedicalEntity.md)

Extends [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| code | [MedicalCode](./MedicalCode.md) | A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc. |
| guideline | [MedicalGuideline](./MedicalGuideline.md) | A medical guideline related to this entity. |
| medicineSystem | [MedicineSystem](./MedicineSystem.md) | The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc. |
| recognizingAuthority | [Organization](./Organization.md) | If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine. |
| relevantSpecialty | [MedicalSpecialty](./MedicalSpecialty.md) | If applicable, a medical specialty in which this entity is relevant. |
| study | [MedicalStudy](./MedicalStudy.md) | A medical study or trial related to this entity. |
