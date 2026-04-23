---
source: https://developers.google.com/workspace/cse/reference/resource-key-hash
root: workspace
fetched_at: 2026-04-23T15:27:04.509Z
---

# Resource key hash

The resource key hash is a mechanism allowing Google to verify the integrity of the wrapped encryption keys without having access to the keys.

Generating the resource key hash requires access to the unwrapped key including the DEK, the `resource_name` and the `perimeter_id` specified during the key wrapping operation.

We use the cryptographic function HMAC-SHA256 with `unwrapped_dek` as a key and the concatenation of metadata as data `("ResourceKeyDigest:", resource_name, ":", perimeter_id)`. The `resource_name` and `perimeter_id` should be UTF-8 encoded strings.

For example, when `resource_name = "my_resource"`, `perimeter_id = "my_perimeter"` and `unwrapped_dek = 0xf00d`, the resource key hash is:

```
echo -n "ResourceKeyDigest:my_resource:my_perimeter" | openssl sha256 -mac HMAC -macopt hexkey:f00d -binary
```
