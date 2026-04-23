---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/create
root: workspace
fetched_at: 2026-04-23T15:31:55.570Z
---

# Method: presentations.create

Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.

### HTTP request

`POST https://slides.googleapis.com/v1/presentations`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "presentationId": string,
  "pageSize": {
    object (Size)
  },
  "slides": [
    {
      object (Page)
    }
  ],
  "title": string,
  "masters": [
    {
      object (Page)
    }
  ],
  "layouts": [
    {
      object (Page)
    }
  ],
  "locale": string,
  "revisionId": string,
  "notesMaster": {
    object (Page)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>presentationId</code></td><td><p><code>string</code></p><p>The ID of the presentation.</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>object (<code>Size</code>)</code></p><p>The size of pages in the presentation.</p></td></tr><tr><td><code>slides[]</code></td><td><p><code>object (<code>Page</code>)</code></p><p>The slides in the presentation. A slide inherits properties from a slide layout.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the presentation.</p></td></tr><tr><td><code>masters[]</code></td><td><p><code>object (<code>Page</code>)</code></p><p>The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes:</p><ul><li>Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master.</li><li>The master page properties define the common page properties inherited by its layouts.</li><li>Any other shapes on the master slide appear on all slides using that master, regardless of their layout.</li></ul></td></tr><tr><td><code>layouts[]</code></td><td><p><code>object (<code>Page</code>)</code></p><p>The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout.</p></td></tr><tr><td><code>locale</code></td><td><p><code>string</code></p><p>The locale of the presentation, as an IETF BCP 47 language tag.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation.</p><p>The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.</p></td></tr><tr><td><code>notesMaster</code></td><td><p><code>object (<code>Page</code>)</code></p><p>The notes master in the presentation. It serves three purposes:</p><ul><li>Placeholder shapes on a notes master contain the default text styles and shape properties of all placeholder shapes on <code>notes pages</code>. Specifically, a <code>SLIDE_IMAGE</code> placeholder shape contains the slide thumbnail, and a <code>BODY</code> placeholder shape contains the speaker notes.</li><li>The notes master page properties define the common page properties inherited by all <code>notes pages</code>.</li><li>Any other shapes on the notes master appear on all <code>notes pages</code>.</li></ul><p>The notes master is read-only.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/presentations`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
