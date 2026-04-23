---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalDevice
root: workspace
fetched_at: 2026-04-23T15:29:38.420Z
---

# MedicalDevice

Type name: [MedicalDevice](./MedicalDevice.md)

Extends [MedicalEntity](./MedicalEntity.md)

| Name | Type | Description |
| --- | --- | --- |
| adverseOutcome | [MedicalEntity](./MedicalEntity.md) | A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead. |
| contraindication | [MedicalContraindication](./MedicalContraindication.md) | A contraindication for this therapy. |
| indication | [MedicalIndication](./MedicalIndication.md) | A factor that indicates use of this therapy for treatment and/or prevention of a condition, symptom, etc. For therapies such as drugs, indications can include both officially-approved indications as well as off-label uses. These can be distinguished by using the ApprovedIndication subtype of MedicalIndication. |
| postOp | [Text](./Text.md) | A description of the postoperative procedures, care, and/or followups for this device. |
| preOp | [Text](./Text.md) | A description of the workup, testing, and other preparations required before implanting this device. |
| procedure | [Text](./Text.md) | A description of the procedure involved in setting up, using, and/or installing the device. |
| purpose | [MedicalDevicePurpose](./MedicalDevicePurpose.md) or [Thing](./Thing.md) | A goal towards an action is taken. Can be concrete or abstract. |
| seriousAdverseOutcome | [MedicalEntity](./MedicalEntity.md) | A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition. |
