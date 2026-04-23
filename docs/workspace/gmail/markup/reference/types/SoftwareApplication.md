---
source: https://developers.google.com/workspace/gmail/markup/reference/types/SoftwareApplication
root: workspace
fetched_at: 2026-04-23T15:29:52.695Z
---

# SoftwareApplication

Type name: [SoftwareApplication](./SoftwareApplication.md)

Extends [CreativeWork](./CreativeWork.md)

| Name | Type | Description |
| --- | --- | --- |
| applicationCategory | [Text](./Text.md) or [URL](./URL.md) | Type of software application, e.g. "Game, Multimedia". |
| applicationSubCategory | [Text](./Text.md) or [URL](./URL.md) | Subcategory of the application, e.g. "Arcade Game". |
| applicationSuite | [Text](./Text.md) | The name of the application suite to which the application belongs (e.g. Excel belongs to Office). |
| countriesNotSupported | [Text](./Text.md) | Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| countriesSupported | [Text](./Text.md) | Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| device | [Text](./Text.md) | Device required to run the application. Used in cases where a specific make/model is required to run the application. |
| downloadUrl | [URL](./URL.md) | If the file can be downloaded, URL to download the binary. |
| featureList | [Text](./Text.md) or [URL](./URL.md) | Features or modules provided by this application (and possibly required by other applications). |
| fileFormat | [Text](./Text.md) | MIME format of the binary (e.g. application/zip). |
| fileSize | [Integer](./Integer.md) | Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed. |
| installUrl | [URL](./URL.md) | URL at which the app may be installed, if different from the URL of the item. |
| memoryRequirements | [Text](./Text.md) or [URL](./URL.md) | Minimum memory requirements. |
| operatingSystem | [Text](./Text.md) | Operating systems supported (Windows 7, OSX 10.6, Android 1.6). |
| permissions | [Text](./Text.md) | Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi). |
| processorRequirements | [Text](./Text.md) | Processor architecture required to run the application (e.g. IA64). |
| releaseNotes | [Text](./Text.md) or [URL](./URL.md) | Description of what changed in this version. |
| requirements | [Text](./Text.md) or [URL](./URL.md) | Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or.NET runtime). |
| screenshot | [ImageObject](./ImageObject.md) or [URL](./URL.md) | A link to a screenshot image of the app. |
| softwareAddOn | [SoftwareApplication](./SoftwareApplication.md) | Additional content for a software application. |
| softwareHelp | [CreativeWork](./CreativeWork.md) | Software application help. |
| softwareVersion | [Text](./Text.md) | Version of the software instance. |
| storageRequirements | [Text](./Text.md) or [URL](./URL.md) | Storage requirements (free space required). |
