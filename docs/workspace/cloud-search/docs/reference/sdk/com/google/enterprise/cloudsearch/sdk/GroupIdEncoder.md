---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/GroupIdEncoder
root: workspace
fetched_at: 2026-04-23T15:26:27.605Z
---

# GroupIdEncoder

Helper utility to encode Group identifier in a consistent way between identity and indexing connectors. CloudIdentity API supports only subset of characters in group identifiers. This utility escapes unsupported characters using percent encoding.

### Public Constructor Summary

[GroupIdEncoder](./GroupIdEncoder.md#GroupIdEncoder()) ()

### Public Method Summary

| static String | [encodeGroupId](./GroupIdEncoder.md#encodeGroupId(java.lang.String)) (String groupId)  Encode group identifier by escaping unsupported characters. |
| --- | --- |

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

#### public GroupIdEncoder ()

## Public Methods

#### public static String encodeGroupId (String groupId)

Encode group identifier by escaping unsupported characters.

##### Parameters

| groupId | to encode |
| --- | --- |

##### Returns

- encoded group identifier
