---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.InheritanceType
root: workspace
fetched_at: 2026-04-23T15:26:39.593Z
---

# Acl.InheritanceType

The enum that presents the type of inheritance.

### Inherited Method Summary

From class java.lang.Enum

| final int | compareTo(E arg0) |
| --- | --- |
| int | compareTo(Object arg0) |
| final boolean | equals(Object arg0) |
| final Class<E> | getDeclaringClass() |
| final int | hashCode() |
| final String | name() |
| final int | ordinal() |
| String | toString() |
| static <T extends Enum<T>> T | valueOf(Class<T> arg0, String arg1) |

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

From interface java.lang.Comparable

| abstract int | compareTo(E extends Enum<E> arg0) |
| --- | --- |

## Enum Values

#### public static final Acl.InheritanceType BOTH\_PERMIT

Both the current (child's) and inherit from (parent's) ACLs must both allow access.

#### public static final Acl.InheritanceType CHILD\_OVERRIDE

The `Item` (child's) ACL takes precedence over the inherit from (parent's) ACL.

#### public static final Acl.InheritanceType PARENT\_OVERRIDE

The inherit from (parent's) ACL takes precedence over the `Item` (child's) ACL.
