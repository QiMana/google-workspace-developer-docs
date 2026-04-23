---
source: https://developers.google.com/workspace/gmail/markup/reference/types/DietarySupplement
root: workspace
fetched_at: 2026-04-23T15:29:27.232Z
---

# DietarySupplement

Type name: [DietarySupplement](https://developers.google.com/workspace/gmail/markup/reference/types/DietarySupplement)

Extends [MedicalTherapy](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTherapy)

| Name | Type | Description |
| --- | --- | --- |
| activeIngredient | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An active ingredient, typically chemical compounds and/or biologic substances. |
| background | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Descriptive information establishing a historical perspective on the supplement. May include the rationale for the name, the population where the supplement first came to prominence, etc. |
| dosageForm | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'. |
| isProprietary | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | True if this item's name is a proprietary/brand name (vs. generic name). |
| legalStatus | [DrugLegalStatus](https://developers.google.com/workspace/gmail/markup/reference/types/DrugLegalStatus) | The drug or supplement's legal status, including any controlled substance schedules that apply. |
| manufacturer | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The manufacturer of the product. |
| maximumIntake | [MaximumDoseSchedule](https://developers.google.com/workspace/gmail/markup/reference/types/MaximumDoseSchedule) | Recommended intake of this supplement for a given population as defined by a specific recommending authority. |
| mechanismOfAction | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. |
| nonProprietaryName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The generic name of this drug or supplement. |
| recommendedIntake | [RecommendedDoseSchedule](https://developers.google.com/workspace/gmail/markup/reference/types/RecommendedDoseSchedule) | Recommended intake of this supplement for a given population as defined by a specific recommending authority. |
| safetyConsideration | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement. |
| targetPopulation | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. |
