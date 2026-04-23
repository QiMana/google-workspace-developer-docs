---
source: https://developers.google.com/workspace/cse/reference/status
root: workspace
fetched_at: 2026-04-23T15:27:04.603Z
---

# Method: status

## Page Summary

- This endpoint (`GET /status`) checks the operational status and configuration of a Key Access Control List Service (KACLS).
- It provides essential information about the KACLS instance, such as its name, vendor, version, server type, and supported operations.
- The response confirms whether the KACLS is active and details the functionalities it offers.
- Internal self-checks within the KACLS, including KMS accessibility and logging system health, might also be conducted as part of the status check.

Checks the status of a Key Access Control List Service (KACLS) to assess whether it's active and properly configured.

Internal self-checks, like checking KMS accessibility or logging system health, can also be performed.

### HTTP request

`GET https://KACLS_URL/status`

Replace `KACLS_URL` with the Key Access Control List Service (KACLS) URL.

### Path parameters

None.

### Request body

None.

### Response body

The response body contains data with the following structure:

JSON representation

```
{
  "name": string,
  "vendor_id": string,
  "version": string,
  "server_type": string,
  "operations_supported": string array
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string (UTF-8)</code></p><p>An optional instance name.</p></td></tr><tr><td><code>operations_supported</code></td><td><p><code>string array</code></p><p>List of operations supported by the service. The name of the operation is defined by its URL path.</p></td></tr><tr><td><code>server_type</code></td><td><p><code>string (UTF-8)</code></p><p>Must be <code>KACLS</code>.</p></td></tr><tr><td><code>vendor_id</code></td><td><p><code>string (UTF-8)</code></p><p>The KACLS vendor name.</p></td></tr><tr><td><code>version</code></td><td><p><code>string (UTF-8)</code></p><p>The software version.</p></td></tr></tbody></table>

### Example

This example provides a sample response for the `status` method.

#### Response

```
{
  "server_type": "KACLS",
  "vendor_id": "Test",
  "version": "demo",
  "name": "K8 reference",
  "operations_supported": [
    "wrap", "unwrap", "privilegedunwrap",
    "privatekeydecrypt", "privatekeysign", "privilegedprivatekeydecrypt"
  ]
}
```
