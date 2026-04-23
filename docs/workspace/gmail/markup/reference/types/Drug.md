---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Drug
root: workspace
fetched_at: 2026-04-23T15:29:27.356Z
---

# Drug

Type name: [Drug](./Drug.md)

Extends [MedicalTherapy](./MedicalTherapy.md)

| Name | Type | Description |
| --- | --- | --- |
| activeIngredient | [Text](./Text.md) | An active ingredient, typically chemical compounds and/or biologic substances. |
| administrationRoute | [Text](./Text.md) | A route by which this drug may be administered, e.g. 'oral'. |
| alcoholWarning | [Text](./Text.md) | Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug. |
| availableStrength | [DrugStrength](./DrugStrength.md) | An available dosage strength for the drug. |
| breastfeedingWarning | [Text](./Text.md) | Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers. |
| clincalPharmacology | [Text](./Text.md) | Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). |
| clinicalPharmacology | [Text](./Text.md) | Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). |
| cost | [DrugCost](./DrugCost.md) | Cost per unit of the drug, as reported by the source being tagged. |
| dosageForm | [Text](./Text.md) | A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'. |
| doseSchedule | [DoseSchedule](./DoseSchedule.md) | A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. |
| drugClass | [DrugClass](./DrugClass.md) | The class of drug this belongs to (e.g., statins). |
| foodWarning | [Text](./Text.md) | Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug. |
| interactingDrug | [Drug](./Drug.md) | Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications. |
| isAvailableGenerically | [Boolean](./Boolean.md) | True if the drug is available in a generic form (regardless of name). |
| isProprietary | [Boolean](./Boolean.md) | True if this item's name is a proprietary/brand name (vs. generic name). |
| labelDetails | [URL](./URL.md) | Link to the drug's label details. |
| legalStatus | [DrugLegalStatus](./DrugLegalStatus.md) | The drug or supplement's legal status, including any controlled substance schedules that apply. |
| manufacturer | [Organization](./Organization.md) | The manufacturer of the product. |
| mechanismOfAction | [Text](./Text.md) | The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. |
| nonProprietaryName | [Text](./Text.md) | The generic name of this drug or supplement. |
| overdosage | [Text](./Text.md) | Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response. |
| pregnancyCategory | [DrugPregnancyCategory](./DrugPregnancyCategory.md) | Pregnancy category of this drug. |
| pregnancyWarning | [Text](./Text.md) | Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy. |
| prescribingInfo | [URL](./URL.md) | Link to prescribing information for the drug. |
| prescriptionStatus | [DrugPrescriptionStatus](./DrugPrescriptionStatus.md) | Indicates whether this drug is available by prescription or over-the-counter. |
| relatedDrug | [Drug](./Drug.md) | Any other drug related to this one, for example commonly-prescribed alternatives. |
| warning | [Text](./Text.md) or [URL](./URL.md) | Any FDA or other warnings about the drug (text or URL). |
