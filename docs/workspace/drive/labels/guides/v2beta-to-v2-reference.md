---
source: https://developers.google.com/workspace/drive/labels/guides/v2beta-to-v2-reference
root: workspace
fetched_at: 2026-04-23T15:28:08.420Z
---

# Labels API v2beta & v2 comparison reference

The latest version of the Drive Labels API is v2. Use the current version unless you need functionality only available in v2beta. For a complete list of version differences, see the comparison charts below.

## Method differences between v2beta & v2

This table shows v2beta methods that are available in v2.

| v2beta Methods | v2 Methods |
| --- | --- |
| `labels.create` | `labels.create` |
| `labels.delete` | `labels.delete` |
| `labels.delta` | `labels.delta` |
| `labels.disable` | `labels.disable` |
| `labels.enable` | `labels.enable` |
| `labels.get` | `labels.get` |
| `labels.list` | `labels.list` |
| `labels.publish` | `labels.publish` |
| `labels.updateLabelCopyMode` | `labels.updateLabelCopyMode` |
| `labels.updatePermissions` | `labels.updatePermissions` |
| `labels.locks.list` | `labels.locks.list` |
| `labels.permissions.batchDelete` | `labels.permissions.batchDelete` |
| `labels.permissions.batchUpdate` | `labels.permissions.batchUpdate` |
| `labels.permissions.create` | `labels.permissions.create` |
| `labels.permissions.delete` | `labels.permissions.delete` |
| `labels.permissions.list` | `labels.permissions.list` |
| `labels.revisions.updatePermissions` | `labels.revisions.updatePermissions` |
| `labels.revisions.locks.list` | `labels.revisions.locks.list` |
| `labels.revisions.permissions.batchDelete` | `labels.revisions.permissions.batchDelete` |
| `labels.revisions.permissions.batchUpdate` | `labels.revisions.permissions.batchUpdate` |
| `labels.revisions.permissions.create` | `labels.revisions.permissions.create` |
| `labels.revisions.permissions.delete` | `labels.revisions.permissions.delete` |
| `labels.revisions.permissions.list` | `labels.revisions.permissions.list` |
| `limits.getLabel` | `limits.getLabel` |
| `users.getCapabilities` | `users.getCapabilities` |
