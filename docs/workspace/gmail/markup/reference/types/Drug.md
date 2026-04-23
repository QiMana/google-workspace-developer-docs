---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Drug
root: workspace
fetched_at: 2026-04-23T15:29:27.356Z
---

# Drug

Type name: [Drug](https://developers.google.com/workspace/gmail/markup/reference/types/Drug)

Extends [MedicalTherapy](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTherapy)

| Name | Type | Description |
| --- | --- | --- |
| activeIngredient | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An active ingredient, typically chemical compounds and/or biologic substances. |
| administrationRoute | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A route by which this drug may be administered, e.g. 'oral'. |
| alcoholWarning | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug. |
| availableStrength | [DrugStrength](https://developers.google.com/workspace/gmail/markup/reference/types/DrugStrength) | An available dosage strength for the drug. |
| breastfeedingWarning | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers. |
| clincalPharmacology | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). |
| clinicalPharmacology | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). |
| cost | [DrugCost](https://developers.google.com/workspace/gmail/markup/reference/types/DrugCost) | Cost per unit of the drug, as reported by the source being tagged. |
| dosageForm | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'. |
| doseSchedule | [DoseSchedule](https://developers.google.com/workspace/gmail/markup/reference/types/DoseSchedule) | A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. |
| drugClass | [DrugClass](https://developers.google.com/workspace/gmail/markup/reference/types/DrugClass) | The class of drug this belongs to (e.g., statins). |
| foodWarning | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug. |
| interactingDrug | [Drug](https://developers.google.com/workspace/gmail/markup/reference/types/Drug) | Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications. |
| isAvailableGenerically | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | True if the drug is available in a generic form (regardless of name). |
| isProprietary | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | True if this item's name is a proprietary/brand name (vs. generic name). |
| labelDetails | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Link to the drug's label details. |
| legalStatus | [DrugLegalStatus](https://developers.google.com/workspace/gmail/markup/reference/types/DrugLegalStatus) | The drug or supplement's legal status, including any controlled substance schedules that apply. |
| manufacturer | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The manufacturer of the product. |
| mechanismOfAction | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. |
| nonProprietaryName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The generic name of this drug or supplement. |
| overdosage | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response. |
| pregnancyCategory | [DrugPregnancyCategory](https://developers.google.com/workspace/gmail/markup/reference/types/DrugPregnancyCategory) | Pregnancy category of this drug. |
| pregnancyWarning | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy. |
| prescribingInfo | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Link to prescribing information for the drug. |
| prescriptionStatus | [DrugPrescriptionStatus](https://developers.google.com/workspace/gmail/markup/reference/types/DrugPrescriptionStatus) | Indicates whether this drug is available by prescription or over-the-counter. |
| relatedDrug | [Drug](https://developers.google.com/workspace/gmail/markup/reference/types/Drug) | Any other drug related to this one, for example commonly-prescribed alternatives. |
| warning | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Any FDA or other warnings about the drug (text or URL). |
