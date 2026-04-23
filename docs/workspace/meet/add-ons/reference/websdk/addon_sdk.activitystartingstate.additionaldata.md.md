---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate.additionaldata.md
root: workspace
fetched_at: 2026-04-23T15:30:13.051Z
---

# Property signature ActivityStartingState.additionalData

Data internal to the add-on that it can use to initialize itself. Useful for communicating application-specific state to users joining the activity that cannot be stored in the URLs. The length of this string must be less than 4,096 characters.

## Signature

```
additionalData?: string;
```

## Details

| Type | `string` |
| --- | --- |
| Optional | Yes |
| Readonly | No |
