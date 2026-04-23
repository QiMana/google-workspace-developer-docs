---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTherapy
root: workspace
fetched_at: 2026-04-23T15:29:40.415Z
---

# MedicalTherapy

Type name: [MedicalTherapy](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTherapy)

Extends [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity)

| Name | Type | Description |
| --- | --- | --- |
| adverseOutcome | [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity) | A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead. |
| contraindication | [MedicalContraindication](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalContraindication) | A contraindication for this therapy. |
| duplicateTherapy | [MedicalTherapy](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTherapy) | A therapy that duplicates or overlaps this one. |
| indication | [MedicalIndication](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalIndication) | A factor that indicates use of this therapy for treatment and/or prevention of a condition, symptom, etc. For therapies such as drugs, indications can include both officially-approved indications as well as off-label uses. These can be distinguished by using the ApprovedIndication subtype of MedicalIndication. |
| seriousAdverseOutcome | [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity) | A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition. |
