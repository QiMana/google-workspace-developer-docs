---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTest
root: workspace
fetched_at: 2026-04-23T15:29:40.367Z
---

# MedicalTest

Type name: [MedicalTest](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTest)

Extends [MedicalEntity](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalEntity)

| Name | Type | Description |
| --- | --- | --- |
| affectedBy | [Drug](https://developers.google.com/workspace/gmail/markup/reference/types/Drug) | Drugs that affect the test's results. |
| normalRange | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Range of acceptable values for a typical patient, when applicable. |
| signDetected | [MedicalSign](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalSign) | A sign detected by the test. |
| usedToDiagnose | [MedicalCondition](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalCondition) | A condition the test is used to diagnose. |
| usesDevice | [MedicalDevice](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalDevice) | Device used to perform the test. |
