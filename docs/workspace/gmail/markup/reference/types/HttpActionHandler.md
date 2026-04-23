---
source: https://developers.google.com/workspace/gmail/markup/reference/types/HttpActionHandler
root: workspace
fetched_at: 2026-04-23T15:29:33.362Z
---

# HttpActionHandler

Type name: [HttpActionHandler](https://developers.google.com/workspace/gmail/markup/reference/types/HttpActionHandler)

Extends [ActionHandler](https://developers.google.com/workspace/gmail/markup/reference/types/ActionHandler)

| Name | Type | Description |
| --- | --- | --- |
| encoding | or [MediaObject](https://developers.google.com/workspace/gmail/markup/reference/types/MediaObject) | How to encode the action into the http request when the method is POST. |
| method | [HttpRequestMethod](https://developers.google.com/workspace/gmail/markup/reference/types/HttpRequestMethod) | Whether to use HTTP GET or POST. GET is the default. |
| url | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Target url to fetch in order to complete the action. |
