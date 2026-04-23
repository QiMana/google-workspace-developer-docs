---
source: https://developers.google.com/workspace/gmail/markup/reference/types/HttpActionHandler
root: workspace
fetched_at: 2026-04-23T15:29:33.362Z
---

# HttpActionHandler

Type name: [HttpActionHandler](./HttpActionHandler.md)

Extends [ActionHandler](./ActionHandler.md)

| Name | Type | Description |
| --- | --- | --- |
| encoding | or [MediaObject](./MediaObject.md) | How to encode the action into the http request when the method is POST. |
| method | [HttpRequestMethod](./HttpRequestMethod.md) | Whether to use HTTP GET or POST. GET is the default. |
| url | [URL](./URL.md) | Target url to fetch in order to complete the action. |
