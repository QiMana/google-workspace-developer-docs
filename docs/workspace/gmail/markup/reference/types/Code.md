---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Code
root: workspace
fetched_at: 2026-04-23T15:29:23.277Z
---

# Code

Type name: [Code](./Code.md)

Extends [CreativeWork](./CreativeWork.md)

| Name | Type | Description |
| --- | --- | --- |
| codeRepository | [URL](./URL.md) | Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). |
| programmingLanguage | [Thing](./Thing.md) | The computer programming language. |
| runtime | [Text](./Text.md) | Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3,.Net Framework 3.0). |
| sampleType | [Text](./Text.md) | Full (compile ready) solution, code snippet, inline code, scripts, template. |
| targetProduct | [SoftwareApplication](./SoftwareApplication.md) | Target Operating System / Product to which the code applies. If applies to several versions, just the product name can be used. |
