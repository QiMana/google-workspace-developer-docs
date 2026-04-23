---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalCondition
root: workspace
fetched_at: 2026-04-23T15:29:38.369Z
---

# MedicalCondition

Type name: [MedicalCondition](./MedicalCondition.md)

Extends [MedicalEntity](./MedicalEntity.md)

| Name | Type | Description |
| --- | --- | --- |
| associatedAnatomy | [AnatomicalStructure](./AnatomicalStructure.md), [AnatomicalSystem](./AnatomicalSystem.md) or [SuperficialAnatomy](./SuperficialAnatomy.md) | The anatomy of the underlying organ system or structures associated with this entity. |
| cause | [MedicalCause](./MedicalCause.md) | An underlying cause. More specifically, one of the causative agent(s) that are most directly responsible for the pathophysiologic process that eventually results in the occurrence. |
| differentialDiagnosis | [DDxElement](./DDxElement.md) | One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient. |
| epidemiology | [Text](./Text.md) | The characteristics of associated patients, such as age, gender, race etc. |
| expectedPrognosis | [Text](./Text.md) | The likely outcome in either the short term or long term of the medical condition. |
| naturalProgression | [Text](./Text.md) | The expected progression of the condition if it is not treated and allowed to progress naturally. |
| pathophysiology | [Text](./Text.md) | Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition. |
| possibleComplication | [Text](./Text.md) | A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc. |
| possibleTreatment | [MedicalTherapy](./MedicalTherapy.md) | A possible treatment to address this condition, sign or symptom. |
| primaryPrevention | [MedicalTherapy](./MedicalTherapy.md) | A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination. |
| riskFactor | [MedicalRiskFactor](./MedicalRiskFactor.md) | A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age, coexisting condition. |
| secondaryPrevention | [MedicalTherapy](./MedicalTherapy.md) | A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition. |
| signOrSymptom | [MedicalSignOrSymptom](./MedicalSignOrSymptom.md) | A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition. |
| stage | [MedicalConditionStage](./MedicalConditionStage.md) | The stage of the condition, if applicable. |
| subtype | [Text](./Text.md) | A more specific type of the condition, where applicable, for example 'Type 1 Diabetes', 'Type 2 Diabetes', or 'Gestational Diabetes' for Diabetes. |
| typicalTest | [MedicalTest](./MedicalTest.md) | A medical test typically performed given this condition. |
