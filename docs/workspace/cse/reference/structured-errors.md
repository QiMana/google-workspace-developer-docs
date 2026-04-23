---
source: https://developers.google.com/workspace/cse/reference/structured-errors
root: workspace
fetched_at: 2026-04-23T15:27:05.106Z
---

# Structured error replies

To allow better messages and logs, the Key Access Control List Service (KACLS) operation failures return a structured JSON reply in the body. The standard HTTP status codes are used.

JSON representation

```
{
  "code": int,
  "message": string,
  "details": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>code</code></td><td><p><code>int</code></p><p>Standard HTTP status code</p></td></tr><tr><td><code>message</code></td><td><p><code>string (UTF-8)</code></p><p>A human-readable error message.</p></td></tr><tr><td><code>details</code></td><td><p><code>string (UTF-8)</code></p><p>More details about the error, such as a stack trace.</p></td></tr></tbody></table>
