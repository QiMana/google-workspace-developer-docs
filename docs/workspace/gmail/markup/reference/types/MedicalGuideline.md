---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalGuideline
root: workspace
fetched_at: 2026-04-23T15:29:37.884Z
---

# MedicalGuideline

Type name: [MedicalGuideline](./MedicalGuideline.md)

Extends [MedicalEntity](./MedicalEntity.md)

| Name | Type | Description |
| --- | --- | --- |
| evidenceLevel | [MedicalEvidenceLevel](./MedicalEvidenceLevel.md) | Strength of evidence of the data used to formulate the guideline (enumerated). |
| evidenceOrigin | [Text](./Text.md) | Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc. |
| guidelineDate | [Date](./Date.md) | Date on which this guideline's recommendation was made. |
| guidelineSubject | [MedicalEntity](./MedicalEntity.md) | The medical conditions, treatments, etc. that are the subject of the guideline. |
