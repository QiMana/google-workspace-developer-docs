---
source: https://developers.google.com/workspace/gmail/markup/reference/types/EntryPoint
root: workspace
fetched_at: 2026-04-23T15:29:29.959Z
---

# EntryPoint

Type name: [EntryPoint](./EntryPoint.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| application | [SoftwareApplication](./SoftwareApplication.md) | An application that can complete the request. |
| contentType | [Text](./Text.md) | The supported content type(s) for an EntryPoint response. |
| encodingType | [Text](./Text.md) | The supported encoding type(s) for an EntryPoint request. |
| httpMethod | [Text](./Text.md) | An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP. |
| urlTemplate | [Text](./Text.md) | An url template (RFC 6570) that will be used to construct the target of the execution of the action. |
