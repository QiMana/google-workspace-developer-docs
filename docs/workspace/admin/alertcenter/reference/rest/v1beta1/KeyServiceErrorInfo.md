---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/KeyServiceErrorInfo
root: workspace
fetched_at: 2026-04-23T15:23:25.137Z
---

# KeyServiceErrorInfo

Info on the key service error.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>KEY_SERVICE_ERROR_INFO_UNSPECIFIED</code></td><td>Error info not specified.</td></tr><tr><td><code>MALFORMED_JSON</code></td><td>The response has malformed JSON.</td></tr><tr><td><code>MISSING_KEY</code></td><td>The response did not contain the wrapped/unwrapped key.</td></tr><tr><td><code>MISSING_SIGNATURE</code></td><td>SMIME sign only: The sign response did not contain the signature.</td></tr><tr><td><code>MISSING_ALGORITHM_NAME</code></td><td>SMIME only: The sign response does not include the algorithm name.</td></tr><tr><td><code>UNSUPPORTED_ALGORITHM</code></td><td>SMIME only: the algorithm name in the response is not supported by the client.</td></tr><tr><td><code>FETCH_REQUEST_ERROR</code></td><td>Fetch request on the client has failed.</td></tr></tbody></table>
