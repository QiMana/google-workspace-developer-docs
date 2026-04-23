---
source: https://developers.google.com/workspace/drive/api/terms
root: workspace
fetched_at: 2026-04-23T15:28:06.670Z
---

# Google Drive API Terms of Service

By using this API, you consent to be bound by these terms in addition to the [Google APIs Terms of Service ("API ToS")](https://developers.google.com/terms).

## Google Drive API Policies

### Customer implementation

The Drive API is ***not*** allowed for certain use cases without Google’s express prior written consent, including the following:

- Backup of user or app content from a developer’s app or project to Drive.
- Cryptocurrency mining.
- Broad video distribution or dissemination of copyrighted content without authorization.
- Using Drive as a replacement for a large-scale content delivery network (CDN) is not allowed.
- File cloning tools that enable sharding of user storage and/or circumvention of Drive storage limits.

### Use of restricted scopes

The use of restricted scopes is allowed for certain situations, such as:

1. Platform-specific and web apps that provide local sync or automatic backup of users’ Drive files.
2. Productivity and educational applications whose user interface might involve interaction with Drive files (or their metadata or permissions). Productivity applications include task management, note taking, workgroup communications, and classroom collaboration applications.
3. Reporting and security applications that provide user or customer insight into how files are shared or accessed.

For more information, see [When to use a restricted scope](./guides/api-specific-auth.md#restricted).

If you’re using restricted scopes, the restricted scope verification process and a security assessment are required. For more information on Drive scopes and their sensitivity levels, see [Google Drive scopes](./guides/api-specific-auth.md#scopes). Additionally, review the [OAuth API verification FAQs](https://support.google.com/cloud/answer/9110914) to determine when your app should go through verification and what type of verification is required.

When possible, we recommend using non-sensitive scopes as it grants per-file access scope and narrows access to specific functionality needed by an app.
