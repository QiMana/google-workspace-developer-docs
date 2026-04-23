---
source: https://developers.google.com/apps-script/reference/lock/lock-service.html
root: apps-script
fetched_at: 2026-04-23T15:20:53.444Z
---

# Class LockService

## Page Summary

- LockService is used to prevent concurrent access to sections of code, useful when multiple users or processes modify a shared resource.
- `getDocumentLock()` gets a lock that prevents any user of the current document from concurrently running a section of code.
- `getScriptLock()` gets a lock that prevents any user from concurrently running a section of code.
- `getUserLock()` gets a lock that prevents the current user from concurrently running a section of code.

Prevents concurrent access to sections of code. This can be useful when you have multiple users or processes modifying a shared resource and want to prevent collisions.

## Detailed documentation

### getDocumentLock()

Gets a lock that prevents any user of the current document from concurrently running a section of code. A code section guarded by a document lock can be executed simultaneously by script instances running in the context of different documents, but by no more than one execution for any given document. Note that the lock is not actually acquired until or is called. If this method is called outside of the context of a containing document (such as from a standalone script or webapp), `null` is returned.

#### Return

`Lock|null` — A lock scoped to the script and current document, or `null` if called from a standalone script or webapp.

---

### getScriptLock()

Gets a lock that prevents any user from concurrently running a section of code. A code section guarded by a script lock cannot be executed simultaneously regardless of the identity of the user. Note that the lock is not actually acquired until or is called.

#### Return

---

### getUserLock()

Gets a lock that prevents the current user from concurrently running a section of code. A code section guarded by a user lock can be executed simultaneously by different users, but by no more than one execution for any given user. The lock is "private" to the user. Note that the lock is not actually acquired until or is called.

#### Return

— A lock scoped to the script and current user.
