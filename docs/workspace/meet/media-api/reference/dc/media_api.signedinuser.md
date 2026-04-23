---
source: https://developers.google.com/workspace/meet/media-api/reference/dc/media_api.signedinuser
root: workspace
fetched_at: 2026-04-23T15:30:54.076Z
---

# Interface SignedInUser

Signed in user type, always has a unique id and display name.

## Signature

```
declare interface SignedInUser
```

## Property signatures

| Name | Description |
| --- | --- |
| [`displayName`](./media_api.signedinuser.displayname.md.md) | For a personal device, it's the user's first name and last name. For a robot account, it's the administrator-specified device name. For example, "Altostrat Room". |
| [`user`](./media_api.signedinuser.user.md.md) | Unique ID for the user. Interoperable with [`Admin SDK API`](../../../../admin/directory/reference/rest/v1/users.md) and [People API](https://developers.google.com/people/api/rest/v1/people). Format: `users/{user}` |
