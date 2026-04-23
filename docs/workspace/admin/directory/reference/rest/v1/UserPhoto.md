---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/UserPhoto
root: workspace
fetched_at: 2026-04-23T15:23:33.885Z
---

# UserPhoto

JSON representation

```
{
  "id": string,
  "primaryEmail": string,
  "kind": string,
  "etag": string,
  "photoData": string,
  "mimeType": string,
  "width": integer,
  "height": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID the API uses to uniquely identify the user.</p></td></tr><tr><td><code>primaryEmail</code></td><td><p><code>string</code></p><p>The user's primary email address.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. For Photo resources, this is <code>admin#directory#user#photo</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>photoData</code></td><td><p><code>string (bytes format)</code></p><p>The user photo's upload data in <a href="https://en.wikipedia.org/wiki/Base64#URL_applications">web-safe Base64</a> format in bytes. This means:</p><ul><li>The slash (/) character is replaced with the underscore (_) character.</li><li>The plus sign (+) character is replaced with the hyphen (-) character.</li><li>The equals sign (=) character is replaced with the asterisk (*).</li><li>For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing.</li><li>Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.</li></ul><p>A base64-encoded string.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>The MIME type of the photo. Allowed values are <code>JPEG</code>, <code>PNG</code>, <code>GIF</code>, <code>BMP</code>, <code>TIFF</code>, and web-safe base64 encoding.</p></td></tr><tr><td><code>width</code></td><td><p><code>integer</code></p><p>Width of the photo in pixels.</p></td></tr><tr><td><code>height</code></td><td><p><code>integer</code></p><p>Height of the photo in pixels.</p></td></tr></tbody></table>
