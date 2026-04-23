---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/signed-in-user
root: workspace
fetched_at: 2026-04-23T15:30:38.300Z
---

# meet::SignedInUser

## meet::SignedInUser

`#include <participants_resource.h>`

Signed in user type. Always has a unique ID and display name.

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>display_name</code></td><td><div><code>std::string</code></div><p>Display name of the user.</p></td></tr><tr><td><code>user</code></td><td><div><code>std::string</code></div><p>Unique ID for the user.</p></td></tr></tbody></table>

## Public attributes

### display\_name

```
std::string meet::SignedInUser::display_name
```

Display name of the user.

- For a personal device, it's the user's first name and last name.
- For a robot account, it's the administrator-specified device name. For example, "Altostrat Room".

### user

```
std::string meet::SignedInUser::user
```

Unique ID for the user.

**Format:** `users/{user}`

Interoperable with the [Admin SDK API](../../../../../../admin/directory/reference/rest/v1/users.md) and the [People API](https://developers.google.com/people/api/rest/v1/people/get).
