---
source: https://developers.google.com/apps-script/reference/content
root: apps-script
fetched_at: 2026-04-23T15:19:26.510Z
---

# Content Service

## Page Summary

- The Content Service allows scripts to serve text in various formats like text, XML, or JSON.
- The ContentService class is used for returning text content from a script.
- The MimeType enum defines the various mime types that can be served from a script.
- The TextOutput object represents the text content that can be served from a script.

This service allows scripts to serve text in various forms, such as text, XML, or JSON. See also the [guide to Content Service](https://developers.google.com/apps-script/content_service). If you [deploy the following script as a web app](https://developers.google.com/apps-script/execution_web_apps), you will see "Hello, world!" in the browser:

```
function doGet() {
  return ContentService.createTextOutput('Hello, world!');
}
```
