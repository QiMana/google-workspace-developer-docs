---
source: https://developers.google.com/apps-script/reference/lock
root: apps-script
fetched_at: 2026-04-23T15:20:51.172Z
---

# Lock Service

## Page Summary

- The Lock service in Apps Script prevents concurrent access to sections of code, useful for managing shared resources and preventing collisions.
- The LockService class provides methods to get different types of locks: document, script, and user.
- The Lock class represents a mutual-exclusion lock and includes methods to check if a lock is acquired, release a lock, and attempt to acquire a lock with or without timing out.

This service allows scripts to prevent concurrent access to sections of code. This can be useful when you have multiple users or processes modifying a shared resource and want to prevent collisions.
