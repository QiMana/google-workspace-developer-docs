---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Code
root: workspace
fetched_at: 2026-04-23T15:29:23.277Z
---

# Code

Type name: [Code](https://developers.google.com/workspace/gmail/markup/reference/types/Code)

Extends [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork)

| Name | Type | Description |
| --- | --- | --- |
| codeRepository | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). |
| programmingLanguage | [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | The computer programming language. |
| runtime | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3,.Net Framework 3.0). |
| sampleType | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Full (compile ready) solution, code snippet, inline code, scripts, template. |
| targetProduct | [SoftwareApplication](https://developers.google.com/workspace/gmail/markup/reference/types/SoftwareApplication) | Target Operating System / Product to which the code applies. If applies to several versions, just the product name can be used. |
