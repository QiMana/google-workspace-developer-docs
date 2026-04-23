---
source: https://developers.google.com/workspace/gmail/markup/reference/types/SoftwareApplication
root: workspace
fetched_at: 2026-04-23T15:29:52.695Z
---

# SoftwareApplication

Type name: [SoftwareApplication](https://developers.google.com/workspace/gmail/markup/reference/types/SoftwareApplication)

Extends [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork)

| Name | Type | Description |
| --- | --- | --- |
| applicationCategory | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Type of software application, e.g. "Game, Multimedia". |
| applicationSubCategory | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Subcategory of the application, e.g. "Arcade Game". |
| applicationSuite | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the application suite to which the application belongs (e.g. Excel belongs to Office). |
| countriesNotSupported | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| countriesSupported | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| device | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Device required to run the application. Used in cases where a specific make/model is required to run the application. |
| downloadUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | If the file can be downloaded, URL to download the binary. |
| featureList | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Features or modules provided by this application (and possibly required by other applications). |
| fileFormat | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | MIME format of the binary (e.g. application/zip). |
| fileSize | [Integer](https://developers.google.com/workspace/gmail/markup/reference/types/Integer) | Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed. |
| installUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL at which the app may be installed, if different from the URL of the item. |
| memoryRequirements | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Minimum memory requirements. |
| operatingSystem | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Operating systems supported (Windows 7, OSX 10.6, Android 1.6). |
| permissions | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi). |
| processorRequirements | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Processor architecture required to run the application (e.g. IA64). |
| releaseNotes | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Description of what changed in this version. |
| requirements | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or.NET runtime). |
| screenshot | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | A link to a screenshot image of the app. |
| softwareAddOn | [SoftwareApplication](https://developers.google.com/workspace/gmail/markup/reference/types/SoftwareApplication) | Additional content for a software application. |
| softwareHelp | [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork) | Software application help. |
| softwareVersion | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Version of the software instance. |
| storageRequirements | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Storage requirements (free space required). |
