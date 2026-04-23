---
source: https://developers.google.com/workspace/gmail/markup/reference/types/DietarySupplement
root: workspace
fetched_at: 2026-04-23T15:29:27.232Z
---

# DietarySupplement

Type name: [DietarySupplement](./DietarySupplement.md)

Extends [MedicalTherapy](./MedicalTherapy.md)

| Name | Type | Description |
| --- | --- | --- |
| activeIngredient | [Text](./Text.md) | An active ingredient, typically chemical compounds and/or biologic substances. |
| background | [Text](./Text.md) | Descriptive information establishing a historical perspective on the supplement. May include the rationale for the name, the population where the supplement first came to prominence, etc. |
| dosageForm | [Text](./Text.md) | A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'. |
| isProprietary | [Boolean](./Boolean.md) | True if this item's name is a proprietary/brand name (vs. generic name). |
| legalStatus | [DrugLegalStatus](./DrugLegalStatus.md) | The drug or supplement's legal status, including any controlled substance schedules that apply. |
| manufacturer | [Organization](./Organization.md) | The manufacturer of the product. |
| maximumIntake | [MaximumDoseSchedule](./MaximumDoseSchedule.md) | Recommended intake of this supplement for a given population as defined by a specific recommending authority. |
| mechanismOfAction | [Text](./Text.md) | The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. |
| nonProprietaryName | [Text](./Text.md) | The generic name of this drug or supplement. |
| recommendedIntake | [RecommendedDoseSchedule](./RecommendedDoseSchedule.md) | Recommended intake of this supplement for a given population as defined by a specific recommending authority. |
| safetyConsideration | [Text](./Text.md) | Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement. |
| targetPopulation | [Text](./Text.md) | Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. |
