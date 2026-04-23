---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal
root: workspace
fetched_at: 2026-04-23T15:26:33.071Z
---

# IdentityPrincipal

Known Direct Subclasses

[IdentityGroup](./IdentityGroup.md), [IdentityUser](./IdentityUser.md)

Represents third-party identity such as user or group.

### Nested Class Summary

<table><tbody><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityPrincipal.Kind">IdentityPrincipal.Kind</a></td><td width="100%">Kind of <code>IdentityPrincipal</code></td></tr></tbody></table>

### Public Constructor Summary

[IdentityPrincipal](./IdentityPrincipal.md#IdentityPrincipal(java.lang.String)) (String identity)

Constructs `IdentityPrincipal` for given `identity`.

### Public Method Summary

| String | [getIdentity](./IdentityPrincipal.md#getIdentity()) ()  Gets identity for third-party principal. |
| --- | --- |
| abstract [IdentityPrincipal.Kind](./IdentityPrincipal.Kind.md) | [getKind](./IdentityPrincipal.md#getKind()) ()  Gets kind for principal. |

### Inherited Method Summary

From class java.lang.Object

| boolean | equals(Object arg0) |
| --- | --- |
| final Class<?> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| String | toString() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| final void | wait() |

## Public Constructors

#### public IdentityPrincipal (String identity)

Constructs `IdentityPrincipal` for given `identity`.

##### Parameters

| identity |  |
| --- | --- |

## Public Methods

#### public String getIdentity ()

Gets identity for third-party principal.

#### public abstract IdentityPrincipal.Kind getKind ()

Gets kind for principal.
