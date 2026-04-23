---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec.SecurityLevel
root: workspace
fetched_at: 2026-04-23T15:26:32.461Z
---

# SensitiveDataCodec.SecurityLevel

Values that specify the security level, used typically for a user parameter.

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

#### public static final SensitiveDataCodec.SecurityLevel ENCRYPTED

The value is prefixed with "pkc:" and is encrypted using the publock key crytography provided to the constructor.

#### public static final SensitiveDataCodec.SecurityLevel OBFUSCATED

The value is prefixed with "obf:" and is obfuscated, but no real security is added. AES is used to encrypt the value.

#### public static final SensitiveDataCodec.SecurityLevel PLAIN\_TEXT

The value is prefixed with "pl:" and is not encrypted.
