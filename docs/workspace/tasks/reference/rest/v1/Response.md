---
source: https://developers.google.com/workspace/tasks/reference/rest/v1/Response
root: workspace
fetched_at: 2026-04-23T15:32:01.219Z
---

# Response

A response to a single Request.

JSON representation

```
{
  "requestId": string,
  "continued": boolean,
  "extensions": [
    {
      "@type": string,
      field1: ...,
      ...
    }
  ],

  "error": {
    object (Status)
  },
  "response": {
    "@type": string,
    field1: ...,
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requestId</code></td><td><p><code>string</code></p><p>The requestId of the Request this message is in response to.</p></td></tr><tr><td><code>continued</code></td><td><p><code>boolean</code></p><p>If true, this Response is followed by additional responses that are in the same response stream as this Response.</p></td></tr><tr><td><code>extensions[]</code></td><td><p><code>object</code></p><p>Application specific response metadata.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr><tr><td colspan="2">Union field <code>result</code>. The response result, which can be either an <code>error</code> or a valid <code>response</code>. <code>result</code> can be only one of the following:</td></tr><tr><td><code>error</code></td><td><p><code>object (<code>Status</code>)</code></p><p>The error result if there was an error processing the request.</p></td></tr><tr><td><code>response</code></td><td><p><code>object</code></p><p>The response payload if the call was a success.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr></tbody></table>
