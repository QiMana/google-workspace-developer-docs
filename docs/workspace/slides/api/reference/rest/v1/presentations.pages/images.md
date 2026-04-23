---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/images
root: workspace
fetched_at: 2026-04-23T15:31:51.223Z
---

# Images

### Image

JSON representation

```
{
  "contentUrl": string,
  "imageProperties": {
    object (ImageProperties)
  },
  "sourceUrl": string,
  "placeholder": {
    object (Placeholder)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contentUrl</code></td><td><p><code>string</code></p><p>An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.</p></td></tr><tr><td><code>imageProperties</code></td><td><p><code>object (<code>ImageProperties</code>)</code></p><p>The properties of the image.</p></td></tr><tr><td><code>sourceUrl</code></td><td><p><code>string</code></p><p>The source URL is the URL used to insert the image. The source URL can be empty.</p></td></tr><tr><td><code>placeholder</code></td><td><p><code>object (<code>Placeholder</code>)</code></p><p>Placeholders are page elements that inherit from corresponding placeholders on layouts and masters.</p><p>If set, the image is a placeholder image and any inherited properties can be resolved by looking at the parent placeholder identified by the <code>Placeholder.parent_object_id</code> field.</p></td></tr></tbody></table>
