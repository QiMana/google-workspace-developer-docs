---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalGuideline
root: workspace
fetched_at: 2026-04-23T15:29:37.884Z
---

# MedicalGuideline

Type name: [MedicalGuideline](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalGuideline)

Extends [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity)

| Name | Type | Description |
| --- | --- | --- |
| evidenceLevel | [MedicalEvidenceLevel](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEvidenceLevel) | Strength of evidence of the data used to formulate the guideline (enumerated). |
| evidenceOrigin | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc. |
| guidelineDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | Date on which this guideline's recommendation was made. |
| guidelineSubject | [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity) | The medical conditions, treatments, etc. that are the subject of the guideline. |
