---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/end-navigation
root: apps-script
fetched_at: 2026-04-23T15:18:38.106Z
---

# Enum EndNavigation

## Enum EndNavigation

An enum that specifies the action during navigation.

Available for Google Workspace add-ons that extend Google Chat.

```
const navigation = AddOnsResponseService.newNavigation()
    .setEndNavigation(AddOnsResponseService.EndNavigation.CLOSE_DIALOG);
```

To call an enum, you call its parent class, name, and property. For example, ` AddOnsResponseService.EndNavigation.CLOSE_DIALOG`.
