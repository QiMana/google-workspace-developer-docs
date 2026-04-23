---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/link
root: apps-script
fetched_at: 2026-04-23T15:18:39.887Z
---

# Class Link

The link object from a third-party resource which gets converted it to a smart chip in the host application.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const link =
    AddOnsResponseService.newLink()
        .setUrl("www.clickme.com");
```

## Detailed documentation

### setTitle(title)

Sets the title of the link.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The displayed title of this link object. |

#### Return

`Link` — This link object, for chaining.

---

### setUrl(url)

Sets the URL of the link.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The destination URL of the link object. |

#### Return

`Link` — This link object, for chaining.
