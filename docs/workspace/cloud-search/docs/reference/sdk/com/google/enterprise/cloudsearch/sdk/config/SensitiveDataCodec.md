---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec
root: workspace
fetched_at: 2026-04-23T15:26:31.972Z
---

# SensitiveDataCodec

Helper object used to encode and decode sensitive data.

There are three levels of `SensitiveDataCodec.SecurityLevel`, PLAIN\_TEXT, OBFUSCATED and ENCRYPTED. To facilitate decoding a message, first use `getSecurityLevel(String encrypted_message)` to get the securityLevel. If the prefix of the encrypted\_message doesn't match a valid security level, the decoder uses PLAIN\_TEXT by default.

To decrypt the message, use `decodeData(String encrypted)`.

### Nested Class Summary

<table><tbody><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec.SecurityLevel">SensitiveDataCodec.SecurityLevel</a></td><td width="100%">Values that specify the security level, used typically for a user parameter.</td></tr></tbody></table>

### Public Constructor Summary

[SensitiveDataCodec](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec#SensitiveDataCodec\(\)) ()

### Public Method Summary

| String | [decodeData](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec#decodeData\(java.lang.String\)) (String encrypted)  Decrypts the encoded text. |
| --- | --- |
| String | [encodeData](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec#encodeData\(java.lang.String,%20com.google.enterprise.cloudsearch.sdk.config.SensitiveDataCodec.SecurityLevel\)) (String readable, [SensitiveDataCodec.SecurityLevel](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec.SecurityLevel) securityLevel)  Encodes the text based on `securityLevel`. |
| static void | [main](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/SensitiveDataCodec#main\(java.lang.String[]\)) (String\[\] args)  Encodes and decodes sensitive data. |

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

#### public SensitiveDataCodec ()

## Public Methods

#### public String decodeData (String encrypted)

Decrypts the encoded text.

##### Parameters

| encrypted | the encrypted string |
| --- | --- |

##### Returns

- the decrypted string

##### Throws

| [InvalidConfigurationException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/InvalidConfigurationException) |  |
| --- | --- |
| IOException |  |

#### public String encodeData (String readable, SensitiveDataCodec.SecurityLevel securityLevel)

Encodes the text based on `securityLevel`.

##### Parameters

| readable | original text |
| --- | --- |
| securityLevel | one of three different security levels: PLAIN\_TEXT, OBFUSCATED and ENCRYPTED using public/private key pair |

##### Returns

- encrypted text

##### Throws

| IOException |  |
| --- | --- |

#### public static void main (String\[\] args)

Encodes and decodes sensitive data.

Example usage to get encoded sensitive data value from the command line:

```
java -DsecurityLevel=ENCRYPTED \
-Djavax.net.ssl.keyStore=encryptKeyStore.jks \
-Djavax.net.ssl.keyStorePassword=testtest \
-Djavax.net.ssl.keyStoreType=JKS \
-Dalias=testkeypair \
-classpath 'cloudsearch-connector-sdk-{version}-SNAPSHOT-withlib.jar' \
com.google.enterprise.cloudsearch.sdk.config.SensitiveDataCodec
```

To enable reading the sensitive value from standard input, add a quiet parameter ("--quiet"). If the quiet parameter is present, the program outputs the encoded sensitive value without any additional text.

##### Parameters

| args |  |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |
