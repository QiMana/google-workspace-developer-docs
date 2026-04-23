---
source: https://developers.google.com/apps-script/reference/utilities/utilities.html
root: apps-script
fetched_at: 2026-04-23T15:22:09.072Z
---

# Class Utilities

## Page Summary

- The Utilities service in Apps Script provides various helper functions for common tasks like encoding, decoding, date formatting, and data manipulation.
- It offers methods for base-64 encoding and decoding for both standard and web-safe formats with optional character set specification.
- The service includes functions for computing message digests and HMAC/RSA signatures using various algorithms.
- Utilities provides methods for formatting and parsing dates and strings, generating UUIDs, and creating or manipulating Blob objects for binary data.
- Features for compressing and decompressing data using gzip and handling zip archives are also available.

This service provides utilities for string encoding/decoding, date formatting, JSON manipulation, and other miscellaneous tasks.

## Detailed documentation

### base64Decode(encoded)

Decodes a base-64 encoded string into a UTF-8 byte array.

```
// This is the base64 encoded form of "Google グループ"
const base64data = 'R29vZ2xlIOOCsOODq+ODvOODlw==';

// This logs:
//     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
//      -29, -125, -85, -29, -125, -68, -29, -125, -105]
const decoded = Utilities.base64Decode(base64data);
Logger.log(decoded);

// If you want a String instead of a byte array:
// This logs the original "Google グループ"
Logger.log(Utilities.newBlob(decoded).getDataAsString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `encoded` | `String` | An array of bytes of data to decode. |

#### Return

`Byte[]` — The raw data represented by the base-64 encoded argument as a byte array.

---

### base64Decode(encoded, charset)

Decodes a base-64 encoded string into a byte array in a specific character set.

```
// This is the base64 encoded form of "Google グループ"
const base64data = 'R29vZ2xlIOOCsOODq+ODvOODlw==';

const decoded = Utilities.base64Decode(base64data, Utilities.Charset.UTF_8);

// This logs:
//     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
//      -29, -125, -85, -29, -125, -68, -29, -125, -105]
Logger.log(decoded);

// If you want a String instead of a byte array:
// This logs the original "Google グループ"
Logger.log(Utilities.newBlob(decoded).getDataAsString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `encoded` | `String` | The string of data to decode. |
| `charset` | `Charset` | A `Charset` specifying the charset of the input. |

#### Return

`Byte[]` — The raw data represented by the base-64 encoded argument as a byte array.

---

### base64DecodeWebSafe(encoded)

Decodes a base-64 web-safe encoded string into a UTF-8 byte array.

```
// This is the base64 web-safe encoded form of "Google グループ"
const base64data = 'R29vZ2xlIOOCsOODq-ODvOODlw==';

const decoded = Utilities.base64DecodeWebSafe(base64data);

// This logs:
//     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
//      -29, -125, -85, -29, -125, -68, -29, -125, -105]
Logger.log(decoded);

// If you want a String instead of a byte array:
// This logs the original "Google グループ"
Logger.log(Utilities.newBlob(decoded).getDataAsString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `encoded` | `String` | An array of bytes of web-safe data to decode. |

#### Return

`Byte[]` — The raw data represented by the base-64 web-safe encoded argument as a byte array.

---

### base64DecodeWebSafe(encoded, charset)

Decodes a base-64 web-safe encoded string into a byte array in a specific character set.

```
// This is the base64 web-safe encoded form of "Google グループ"
const base64data = 'R29vZ2xlIOOCsOODq-ODvOODlw==';

const decoded = Utilities.base64DecodeWebSafe(
    base64data,
    Utilities.Charset.UTF_8,
);

// This logs:
//     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
//      -29, -125, -85, -29, -125, -68, -29, -125, -105]
Logger.log(decoded);

// If you want a String instead of a byte array:
// This logs the original "Google グループ"
Logger.log(Utilities.newBlob(decoded).getDataAsString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `encoded` | `String` | The string of web-safe data to decode. |
| `charset` | `Charset` | A `Charset` specifying the charset of the input. |

#### Return

`Byte[]` — The raw data represented by the base-64 web-safe encoded argument as a byte array.

---

### base64Encode(data)

Generates a base-64 encoded string from the given byte array. Base 64 is a common encoding accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in internet protocols such as email, HTTP, or in XML documents.

```
// Instantiates a blob here for clarity
const blob = Utilities.newBlob('A string here');

// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
const encoded = Utilities.base64Encode(blob.getBytes());
Logger.log(encoded);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `Byte[]` | A byte\[\] of data to encode. |

#### Return

`String` — The base-64 encoded representation of the passed in data.

---

### base64Encode(data)

Generates a base-64 encoded string from the given string. Base 64 is a common encoding accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in internet protocols such as email, HTTP, or in XML documents.

```
// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
const encoded = Utilities.base64Encode('A string here');
Logger.log(encoded);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `String` | The string to encode. |

#### Return

`String` — The base-64 encoded representation of the input string.

---

### base64Encode(data, charset)

Generates a base-64 encoded string from the given string in a specific character set. A Charset is a way of encoding characters such that they can be encoded. These are typically done in a binary format, which can generally be incompatible with certain data transmission protocols. To make the data compatible, they are generally encoded into base 64, which is a common encoding accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in internet protocols such as email, HTTP, or in XML documents.

```
// "Google Groups" in Katakana (Japanese)
const input = 'Google グループ';

// Writes "R29vZ2xlIOOCsOODq+ODvOODlw==" to the log
const encoded = Utilities.base64Encode(input, Utilities.Charset.UTF_8);
Logger.log(encoded);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `String` | The string of data to encode. |
| `charset` | `Charset` | A `Charset` specifying the charset of the input. |

#### Return

`String` — The base-64 encoded representation of the input string with the given `Charset`.

---

### base64EncodeWebSafe(data)

Generates a base-64 web-safe encoded string from the given byte array. Base 64 is a common encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is commonly used in internet protocols such as email, HTTP, or in XML documents.

```
// Instantiates a blob here for clarity
const blob = Utilities.newBlob('A string here');

// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
const encoded = Utilities.base64EncodeWebSafe(blob.getBytes());
Logger.log(encoded);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `Byte[]` | An array of bytes of data to encode. |

#### Return

`String` — The base-64 web-safe encoded representation of the passed in data.

---

### base64EncodeWebSafe(data)

Generates a base-64 web-safe encoded string from the given string. Base 64 is a common encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is commonly used in internet protocols such as email, HTTP, or in XML documents.

```
// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
const encoded = Utilities.base64EncodeWebSafe('A string here');
Logger.log(encoded);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `String` | The string to encode. |

#### Return

`String` — The base-64 web-safe encoded representation of the input string.

---

### base64EncodeWebSafe(data, charset)

Generates a base-64 web-safe encoded string from the given string in a specific character set. A Charset is a way of encoding characters such that they can be encoded. These are typically done in a binary format, which can generally be incompatible with certain data transmission protocols. To make the data compatible, they are generally encoded into base 64, which is a common encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is commonly used in internet protocols such as email, HTTP, or in XML documents.

```
// "Google Groups" in Katakana (Japanese)
const input = 'Google グループ';

// Writes "R29vZ2xlIOOCsOODq-ODvOODlw==" to the log
const encoded = Utilities.base64EncodeWebSafe(input, Utilities.Charset.UTF_8);
Logger.log(encoded);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `String` | The string of data to encode. |
| `charset` | `Charset` | A `Charset` specifying the charset of the input. |

#### Return

`String` — The base-64 web-safe encoded representation of the input string with the given `Charset`.

---

### computeDigest(algorithm, value)

Compute a digest using the specified algorithm on the specified `Byte[]` value.

```
const input = Utilities.base64Decode(
    'aW5wdXQgdG8gaGFzaA0K');  // == base64encode("input to hash")
const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, input);
Logger.log(digest);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `algorithm` | `DigestAlgorithm` | A `DigestAlgorithm` to use. |
| `value` | `Byte[]` | An input string value to compute a digest for. |

#### Return

`Byte[]` — A byte\[\] representing the output digest.

---

### computeDigest(algorithm, value)

Compute a digest using the specified algorithm on the specified `String` value.

```
const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.MD5,
    'input to hash',
);
Logger.log(digest);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `algorithm` | `DigestAlgorithm` | A `DigestAlgorithm` to use. |
| `value` | `String` | An input string value to compute a digest for. |

#### Return

`Byte[]` — A byte\[\] representing the output digest.

---

### computeDigest(algorithm, value, charset)

Compute a digest using the specified algorithm on the specified `String` value with the given character set.

```
const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.MD5,
    'input to hash',
    Utilities.Charset.US_ASCII,
);
Logger.log(digest);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `algorithm` | `DigestAlgorithm` | A `DigestAlgorithm` to use. |
| `value` | `String` | An input string value to compute a digest for. |
| `charset` | `Charset` | A `Charset` representing the input character set. |

#### Return

`Byte[]` — A byte\[\] representing the output digest.

---

### computeHmacSha256Signature(value, key)

Signs the provided value using HMAC-SHA256 with the given key.

```
// This writes an array of bytes to the log.
const input = Utilities.base64Decode(
    'aW5wdXQgdG8gaGFzaA0K');                 // == base64encode("input to hash")
const key = Utilities.base64Decode('a2V5');  // == base64encode("key")
const signature = Utilities.computeHmacSha256Signature(input, key);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `Byte[]` | The input value to generate a hash for. |
| `key` | `Byte[]` | A key to use to generate the hash with. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeHmacSha256Signature(value, key)

Signs the provided value using HMAC-SHA256 with the given key.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeHmacSha256Signature(
    'this is my input',
    'my key - use a stronger one',
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A key to use to generate the hash with. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeHmacSha256Signature(value, key, charset)

Signs the provided value using HMAC-SHA256 with the given key and character set.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeHmacSha256Signature(
    'this is my input',
    'my key - use a stronger one',
    Utilities.Charset.US_ASCII,
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A key to use to generate the hash with. |
| `charset` | `Charset` | A `Charset` representing the input character set. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeHmacSignature(algorithm, value, key)

Compute a message authentication code using the specified algorithm on the specified key and value.

```
// This writes an array of bytes to the log.
const input = Utilities.base64Decode(
    'aW5wdXQgdG8gaGFzaA0K');                 // == base64encode("input to hash")
const key = Utilities.base64Decode('a2V5');  // == base64encode("key")
const signature = Utilities.computeHmacSignature(
    Utilities.MacAlgorithm.HMAC_MD5,
    input,
    key,
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `algorithm` | `MacAlgorithm` | A `MacAlgorithm` algorithm to use to hash the input value. |
| `value` | `Byte[]` | The input value to generate a hash for. |
| `key` | `Byte[]` | A key to use to generate the hash with. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeHmacSignature(algorithm, value, key)

Compute a message authentication code using the specified algorithm on the specified key and value.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeHmacSignature(
    Utilities.MacAlgorithm.HMAC_MD5,
    'input to hash',
    'key',
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `algorithm` | `MacAlgorithm` | A `MacAlgorithm` algorithm to use to hash the input value. |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A key to use to generate the hash with. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeHmacSignature(algorithm, value, key, charset)

Compute a message authentication code using the specified algorithm on the specified key and value.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeHmacSignature(
    Utilities.MacAlgorithm.HMAC_MD5,
    'input to hash',
    'key',
    Utilities.Charset.US_ASCII,
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `algorithm` | `MacAlgorithm` | A `MacAlgorithm` algorithm to use to hash the input value. |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A key to use to generate the hash with. |
| `charset` | `Charset` | A `Charset` representing the input character set. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeRsaSha1Signature(value, key)

Signs the provided value using RSA-SHA1 with the given key.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeRsaSha1Signature(
    'this is my input',
    PropertiesService.getScriptProperties().getProperty('YOUR_PRIVATE_KEY'),
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A PEM formatted key to use to generate the signature. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeRsaSha1Signature(value, key, charset)

Signs the provided value using RSA-SHA1 with the given key and charset.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeRsaSha1Signature(
    'this is my input',
    PropertiesService.getScriptProperties().getProperty('YOUR_PRIVATE_KEY'),
    Utilities.Charset.US_ASCII,
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A PEM formatted key to use to generate the signature. |
| `charset` | `Charset` | A `Charset` representing the input character set. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeRsaSha256Signature(value, key)

Signs the provided value using RSA-SHA256 with the given key.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeRsaSha256Signature(
    'this is my input',
    PropertiesService.getScriptProperties().getProperty('YOUR_PRIVATE_KEY'),
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A PEM formatted key to use to generate the signature. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeRsaSha256Signature(value, key, charset)

Signs the provided value using RSA-SHA256 with the given key.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeRsaSha256Signature(
    'this is my input',
    PropertiesService.getScriptProperties().getProperty('YOUR_PRIVATE_KEY'),
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A PEM formatted key to use to generate the signature. |
| `charset` | `Charset` | A `Charset` representing the input character set. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeRsaSignature(algorithm, value, key)

Signs the provided value using the specified RSA algorithm with the given key.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeRsaSignature(
    Utilities.RsaAlgorithm.RSA_SHA_256,
    'this is my input',
    PropertiesService.getScriptProperties().getProperty('YOUR_PRIVATE_KEY'),
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `algorithm` | `RsaAlgorithm` | A `RsaAlgorithm` algorithm to use to hash the input value. |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A PEM formatted key to use to generate the signature. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### computeRsaSignature(algorithm, value, key, charset)

Signs the provided value using the specified RSA algorithm with the given key and charset.

```
// This writes an array of bytes to the log.
const signature = Utilities.computeRsaSignature(
    Utilities.RsaAlgorithm.RSA_SHA_256,
    'this is my input',
    PropertiesService.getScriptProperties().getProperty('YOUR_PRIVATE_KEY'),
    Utilities.Charset.US_ASCII,
);
Logger.log(signature);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `algorithm` | `RsaAlgorithm` | A `RsaAlgorithm` algorithm to use to hash the input value. |
| `value` | `String` | The input value to generate a hash for. |
| `key` | `String` | A PEM formatted key to use to generate the signature. |
| `charset` | `Charset` | A `Charset` representing the input character set. |

#### Return

`Byte[]` — A byte\[\] representing the output signature.

---

### formatDate(date, timeZone, format)

Formats date according to specification described in Java SE SimpleDateFormat class. Please visit the specification at [http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)

```
// This formats the date as Greenwich Mean Time in the format
// year-month-dateThour-minute-second.
const formattedDate = Utilities.formatDate(
    new Date(),
    'GMT',
    'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'',
);
Logger.log(formattedDate);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | A `Date` to format as a String. |
| `timeZone` | `String` | The output timezone of the result. |
| `format` | `String` | A format per the `SimpleDateFormat` specification. |

#### Return

`String` — The input date as a formatted string.

---

### formatString(template, args)

Performs `sprintf` -like string formatting using '%'-style format strings.

```
// " 123.456000"
Utilities.formatString('%11.6f', 123.456);

// "   abc"
Utilities.formatString('%6s', 'abc');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `template` | `String` | The format string that controls what gets returned. |
| `args` | `Object...` | Objects to use to fill in the '%' placeholders in the template. |

#### Return

`String` — The formatted string.

---

### getUuid()

Get a UUID as a string (equivalent to using the [`java.util.UUID.randomUUID()`](https://docs.oracle.com/javase/7/docs/api/java/util/UUID.html) method). This identifier is not guaranteed to be unique across all time and space. As such, do not use in situations where guaranteed uniqueness is required.

```
// This assigns a UUID as a temporary ID for a data object you are creating in
// your script.
const myDataObject = {
  tempId: Utilities.getUuid(),
};
```

#### Return

`String` — A string representation of the UUID.

---

### gzip(blob)

`gzip` -compresses the provided `Blob` data and returns it in a new `Blob` object.

```
const textBlob = Utilities.newBlob(
    'Some text to compress using gzip compression',
);

// Create the compressed blob.
const gzipBlob = Utilities.gzip(textBlob);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | A `Blob` object to compress using `gzip`. |

#### Return

`Blob` — A new `Blob` containing the compressed data.

---

### gzip(blob, name)

`gzip` -compresses the provided `Blob` data and returns it in a new `Blob` object. This version of the method allows a filename to be specified.

```
const textBlob = Utilities.newBlob(
    'Some text to compress using gzip compression',
);

// Create the compressed blob.
const gzipBlob = Utilities.gzip(textBlob, 'text.gz');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | A `Blob` object to compress using `gzip`. |
| `name` | `String` | The name of the `gzip` file to be created. |

#### Return

`Blob` — A new `Blob` containing the compressed data.

---

### newBlob(data)

Create a new Blob object from a byte array. Blobs are used in many Apps Script APIs that take binary data as input.

```
// Creates a blob object from a byte array.
const data = [71, 79, 79, 71, 76, 69];
const blob = Utilities.newBlob(data);

// Logs the blob data as a string to the console.
console.log(blob.getDataAsString());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `Byte[]` | The bytes for the blob. |

#### Return

`Blob` — The newly created Blob.

---

### newBlob(data, contentType)

Create a new Blob object from a byte array and content type. Blobs are used in many Apps Script APIs that take binary data as input.

```
// Declares a byte array.
const data = [71, 79, 79, 71, 76, 69];

// Declares the content type of the blob.
const contentType = 'application/json';

// Creates a blob object from the byte array and content type.
const blob = Utilities.newBlob(data, contentType);

// Logs the blob data as a string to the console.
console.log(blob.getDataAsString());

// Logs the content type of the blob to the console.
console.log(blob.getContentType());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `Byte[]` | The bytes for the blob. |
| `contentType` | `String` | The content type of the blob - can be `null`. |

#### Return

`Blob` — The newly created Blob.

---

### newBlob(data, contentType, name)

Create a new Blob object from a byte array, content type, and name. Blobs are used in many Apps Script APIs that take binary data as input.

```
// Declares a byte array.
const data = [71, 79, 79, 71, 76, 69];

// Declares the content type of the blob.
const contentType = 'application/json';

// Declares the name of the blob.
const name = 'Example blob';

// Creates a blob object from the byte array, content type, and name.
const blob = Utilities.newBlob(data, contentType, name);

// Logs the blob data as a string to the console.
console.log('Blob data:', blob.getDataAsString());

// Logs the content type of the blob to the console.
console.log('Blob content type:', blob.getContentType());

// Logs the name of the blob to the console.
console.log('Blob name:', blob.getName());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `Byte[]` | The bytes for the blob. |
| `contentType` | `String` | \- The content type of the blob - can be `null`. |
| `name` | `String` | The name of the blob - can be `null`. |

#### Return

`Blob` — The newly created Blob.

---

### newBlob(data)

Create a new Blob object from a string. Blobs are used in many Apps Script APIs that take binary data as input.

```
// Declares a string for the blob.
const data = 'GOOGLE';

// Creates a blob object from a string.
const blob = Utilities.newBlob(data);

// Logs the blob data in byte array to the console.
console.log('Blob Data:', blob.getBytes());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `String` | The string for the blob, assumed UTF-8. |

#### Return

`Blob` — The newly created Blob.

---

### newBlob(data, contentType)

Create a new Blob object from a string and content type. Blobs are used in many Apps Script APIs that take binary data as input.

```
// Declares a string for the blob.
const data = 'GOOGLE';

// Declares the content type of blob.
const contentType = 'application/json';

// Creates a blob object from the string and content type.
const blob = Utilities.newBlob(data, contentType);

// Logs the blob data in byte array to the console.
console.log('Blob data:', blob.getBytes());

// Logs the content type of the blob to the console.
console.log(blob.getContentType());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `String` | The string for the blob, assumed UTF-8. |
| `contentType` | `String` | The content type of the blob - can be `null`. |

#### Return

`Blob` — The newly created Blob.

---

### newBlob(data, contentType, name)

Create a new Blob object from a string, content type, and name. Blobs are used in many Apps Script APIs that take binary data as input.

```
// Declares a string for the blob.
const data = 'GOOGLE';

// Declares the content type of the blob.
const contentType = 'application/json';

// Declares the name of the blob.
const name = 'Example blob';

// Create a blob object from the string, content type, and name.
const blob = Utilities.newBlob(data, contentType, name);

// Logs the blob data in byte array to the console.
console.log('Blob data:', blob.getBytes());

// Logs the content type of the blob to the console.
console.log('Blob content type:', blob.getContentType());

// Logs the name of the blob to the console.
console.log('Blob name:', blob.getName());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `String` | The string for the blob, assumed UTF-8. |
| `contentType` | `String` | The content type of the blob - can be `null`. |
| `name` | `String` | The name of the blob - can be `null`. |

#### Return

`Blob` — The newly created Blob.

---

### parseCsv(csv)

Returns a tabular 2D array representation of a CSV string.

```
// This creates a two-dimensional array of the format [[a, b, c], [d, e, f]]
const csvString = 'a,b,c\nd,e,f';
const data = Utilities.parseCsv(csvString);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `csv` | `String` | A string containing a single or multiline data in comma-separated value (CSV) format. |

#### Return

`String[][]` — A two-dimensional array containing the values in the CSV string.

---

### parseCsv(csv, delimiter)

Returns a tabular 2D array representation of a CSV string using a custom delimiter.

```
// This creates a two-dimensional array of the format [[a, b, c], [d, e, f]]
const csvString = 'a\tb\tc\nd\te\tf';
const data = Utilities.parseCsv(csvString, '\t');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `csv` | `String` | A string containing a single or multiline data in comma-separated value (CSV) format. |
| `delimiter` | `Char` | Between values. |

#### Return

`String[][]` — A two-dimensional array containing the values in the CSV string.

---

### parseDate(date, timeZone, format)

Parses the provided string date according to the specification described in the Java Standard Edition `SimpleDateFormat` class. For more information, see the Java [`SimpleDateFormat` class](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

```
// This set of parameters parses the given string as a date in Greenwich Mean
// Time, formatted as year-month-dateThour-minute-second.
const date = Utilities.parseDate(
    '1970-01-01 00:00:00',
    'GMT',
    'yyyy-MM-dd\' \'HH:mm:ss',
);
Logger.log(date);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `String` | A string value to parse as a date. |
| `timeZone` | `String` | The output time zone. |
| `format` | `String` | The date format per the `SimpleDateFormat` specification. |

#### Return

`Date` — The input string as a date.

---

### sleep(milliseconds)

Sleeps for specified number of milliseconds. Immediately puts the script to sleep for the specified number of milliseconds. The maximum allowed value is 300000 (or 5 minutes).

```
// Creates a blob object from a string.
const data = 'GOOGLE';
const blob = Utilities.newBlob(data);

// Puts the script to sleep for 10,000 milliseconds (10 seconds).
Utilities.sleep(10000);

// Logs the blob data in byte array to the console.
console.log(blob.getBytes());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `milliseconds` | `Integer` | The number of milliseconds to sleep. |

---

### ungzip(blob)

Uncompresses a `Blob` object and returns a `Blob` containing the uncompressed data.

```
const textBlob = Utilities.newBlob(
    'Some text to compress using gzip compression',
);

// Create the compressed blob.
const gzipBlob = Utilities.gzip(textBlob, 'text.gz');

// Uncompress the data.
const uncompressedBlob = Utilities.ungzip(gzipBlob);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | The `Blob` of compressed data. |

#### Return

`Blob` — A `Blob` representing the decompressed data.

---

### unzip(blob)

Takes a Blob representing a zip file and returns its component files.

```
const googleFavIconUrl = 'https://www.google.com/favicon.ico';
const googleLogoUrl = 'https://www.google.com/images/srpr/logo3w.png';

// Fetch the Google favicon.ico file and get the Blob data
const faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
const logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();

// zip now references a blob containing an archive of both faviconBlob and
// logoBlob
const zip = Utilities.zip([faviconBlob, logoBlob], 'google_images.zip');

// This now unzips the blobs
const files = Utilities.unzip(zip);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blob` | `BlobSource` | The zip file blob. |

#### Return

`Blob[]` — A Blob\[\] representing the component blobs, each named with the full path inside the zip.

---

### zip(blobs)

Creates a new Blob object that is a zip file containing the data from the Blobs passed in.

```
const googleFavIconUrl = 'https://www.google.com/favicon.ico';
const googleLogoUrl = 'https://www.google.com/images/srpr/logo3w.png';

// Fetch the Google favicon.ico file and get the Blob data
const faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
const logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();

// zip now references a blob containing an archive of both faviconBlob and
// logoBlob
const zip = Utilities.zip([faviconBlob, logoBlob]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blobs` | `BlobSource[]` | A array of blobs to zip up. |

#### Return

`Blob` — A new blob containing the inputs as an archive.

---

### zip(blobs, name)

Creates a new Blob object that is a zip file containing the data from the Blobs passed in. This version of the method allows a filename to be specified.

```
const googleFavIconUrl = 'https://www.google.com/favicon.ico';
const googleLogoUrl = 'https://www.google.com/images/srpr/logo3w.png';

// Fetch the Google favicon.ico file and get the Blob data
const faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
const logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();

// zip now references a blob containing an archive of both faviconBlob and
// logoBlob
const zip = Utilities.zip([faviconBlob, logoBlob], 'google_images.zip');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `blobs` | `BlobSource[]` | A array of blobs to zip up. |
| `name` | `String` | The name of the zip file to be created. |

#### Return

`Blob` — A new blob containing the inputs as an archive.

## Deprecated methods

### jsonParse(jsonString)

**Deprecated.** As of November 2013, replaced by `JSON.parse()`

Return an object corresponding to the JSON string passed in.

```
// Returns the object { name: "John Smith", company: "Virginia Company"}
const obj = Utilities.jsonParse(
    '{"name":"John Smith","company":"Virginia Company"}',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `jsonString` | `String` | A String representation of a JavaScript object to deserialize. |

#### Return

`Object` — A JavaScript object representation of the input.

---

### jsonStringify(obj)

**Deprecated.** As of November 2013, replaced by `JSON.stringify()`

Return a JSON string of the object passed in.

```
// Logs: {"name":"John Smith","company":"Virginia Company"}
const person = {
  name: 'John Smith',
  company: 'Virginia Company',
};
const json = Utilities.jsonStringify(person);
Logger.log(json);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `obj` | `Object` | The JavaScript object to serialize to JSON. |

#### Return

`String` — A JSON serialized JavaScript object.
