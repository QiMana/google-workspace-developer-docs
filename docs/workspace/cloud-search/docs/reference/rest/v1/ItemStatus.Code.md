---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/ItemStatus.Code
root: workspace
fetched_at: 2026-04-23T15:26:12.148Z
---

# ItemStatus.Code

## ItemStatus.Code

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CODE_UNSPECIFIED</code></td><td>Input-only value. Used with <code>Items.list</code> to list all items in the queue, regardless of status.</td></tr><tr><td><code>ERROR</code></td><td>Error encountered by Cloud Search while processing this item. Details of the error are in <code>repositoryError.</code></td></tr><tr><td><code>MODIFIED</code></td><td>Item has been modified in the repository, and is out of date with the version previously accepted into Cloud Search.</td></tr><tr><td><code>NEW_ITEM</code></td><td>Item is known to exist in the repository, but is not yet accepted by Cloud Search. An item can be in this state when <code>Items.push</code> has been called for an item of this name that did not exist previously.</td></tr><tr><td><code>ACCEPTED</code></td><td>API has accepted the up-to-date data of this item.</td></tr></tbody></table>
