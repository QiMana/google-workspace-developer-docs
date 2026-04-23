---
source: https://developers.google.com/apps-script/reference/cache
root: apps-script
fetched_at: 2026-04-23T15:18:53.510Z
---

# Cache Service

## Page Summary

- The Cache service allows a script to temporarily store results that take time to fetch or compute.
- Public caches are for data not dependent on a specific user, while private caches are for user-specific information.
- The Cache class represents a particular cache instance, and the CacheService class provides access to different caches.
- The Cache class provides methods for getting, putting, and removing data from the cache, including setting expiration times and handling multiple key/value pairs.
- The CacheService class provides methods to retrieve specific cache instances scoped to the document, script, or current user.

This service allows a script to temporarily cache results that take time to fetch/compute. Public caches are for things that are not dependent on which user is accessing your script. Private caches are for things which are user-specific, like settings or recent activity.
