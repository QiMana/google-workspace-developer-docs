---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/TransferInvalidReason
root: workspace
fetched_at: 2026-04-23T15:23:26.935Z
---

# TransferInvalidReason

Reason for the error.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TRANSFER_INVALID_REASON_UNSPECIFIED</code></td><td>Reason wasn't specified.</td></tr><tr><td><code>TRANSFER_TARGET_DELETED</code></td><td>The transfer target can't be found—most likely it was deleted.</td></tr><tr><td><code>UNLICENSED</code></td><td>The user's Google Voice license was removed.</td></tr><tr><td><code>SUSPENDED</code></td><td>The user's Google Workspace account was suspended.</td></tr><tr><td><code>NO_PHONE_NUMBER</code></td><td>The transfer target no longer has a phone number. This reason should become deprecated once we support numberless transfer.</td></tr></tbody></table>
