---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MedicalTest
root: workspace
fetched_at: 2026-04-23T15:29:40.367Z
---

# MedicalTest

Type name: [MedicalTest](./MedicalTest.md)

Extends [MedicalEntity](./MedicalEntity.md)

| Name | Type | Description |
| --- | --- | --- |
| affectedBy | [Drug](./Drug.md) | Drugs that affect the test's results. |
| normalRange | [Text](./Text.md) | Range of acceptable values for a typical patient, when applicable. |
| signDetected | [MedicalSign](./MedicalSign.md) | A sign detected by the test. |
| usedToDiagnose | [MedicalCondition](./MedicalCondition.md) | A condition the test is used to diagnose. |
| usesDevice | [MedicalDevice](./MedicalDevice.md) | Device used to perform the test. |
