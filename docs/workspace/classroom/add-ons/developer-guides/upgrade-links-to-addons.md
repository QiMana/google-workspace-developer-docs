---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/upgrade-links-to-addons
root: workspace
fetched_at: 2026-04-23T15:25:40.549Z
---

# Upgrade Link attachments to Classroom add-on attachments

One way that teachers add third-party content to Classroom is by pasting a link as a [Link attachment](../../reference/rest/v1/Link.md) in the assignment creation page. To build on what teachers are already familiar with, you can now configure your add-on to let teachers upgrade a Link attachment to an [add-on attachment](../../reference/rest/v1/courses.courseWork.addOnAttachments.md#AddOnAttachment).

## Overview

If you configure your add-on with this capability, teachers are prompted to upgrade a link to an add-on attachment when they paste a Link attachment in the assignment creation page. Teachers are only prompted to do so if they already have the add-on installed.

Once the teacher agrees to upgrade the link to an add-on attachment, the Link Upgrade iframe is launched with the following query parameters:

- `courseId`
- `itemId`
- `itemType`
- `addOnToken`
- `urlToUpgrade`
- `login_hint` (only if the user has already authorized your app)

The first four query parameters mirror the query parameters launched on the [Attachment Discovery iframe](./iframes.md#attachment_discovery_iframe). The `urlToUpgrade` query parameter is new and can help you evaluate how the add-on attachment should be created. Then, you can use the other query parameters to check if the user is signed-in and call the `CreateAddOnAttachment` method of `courseWork`, `courseWorkMaterials` or `announcements` based on the `itemType` value. Within the iframe, you can display a loading screen to indicate to the teacher that the add-on attachment is being created.

Once the add-on attachment has been created, the iframe is closed and the teacher can view the attachment in the assignment as they normally would.

## Technical implementation details

This section highlights some important technical details for the feature.

### Read the urlToUpgrade query parameter

The `urlToUpgrade` query parameter is URI encoded when it's passed on the Link Upgrade iframe. You must decode the URL to obtain it in its original form. If you're using JavaScript, for example, you can use the `decodeURIComponent()` function to do so.

### Close the Link Upgrade iframe

To ensure an optimal user experience for this feature, send a `postMessage` once the add-on attachment has been successfully created. This closes the iframe. See the [iframe implementation details page](./iframes.md#closing_the_iframe) for more details.

### Configuration details

The following configurations are required to integrate this feature into your add-on:

- **URL for the Link Upgrade iframe**: This is the URL that opens in the iframe when a teacher agrees to upgrade.
- **URL patterns that Classroom should detect and attempt to upgrade**: The URL patterns can consist of a host and multiple path prefixes.
	- You can provide multiple URL patterns.
		- If you don't provide any path prefixes, any URL that matches the host can be upgraded.
		- Only URLs with an `https` scheme can be upgraded.
		- URL patterns must not contain `localhost`.
		- Path prefixes must not contain query parameters or URL fragments.
		- Path prefixes can support wildcards at this time, but hosts can't:
		- `example.com` is a valid host, and `/foo` and `/bar/*/baz` are valid path prefixes.
				- `example.*.host.com` is not a valid host.
		- A wildcard between path prefix components only matches a single component, and doesn't match multiple components separated by slashes. Consider a URL pattern with the host `example.com` and path prefix `/bar/*/baz`:
		- `https://example.com/bar/123/baz` is a valid match for the URL pattern.
				- `https://example.com/bar/123/baz/456/789` is a valid match for the URL pattern.
				- `https://example.com/bar/123/456/baz` is not a valid match for the URL pattern because the wildcard in the path prefix doesn't match `/123/456/`.

### Development process

Send the Link Upgrade iframe URL and URL patterns for your test or production add-on by emailing [classroom-link-upgrade-external@google.com](mailto:classroom-link-upgrade-external@google.com).

You can provide configurations for any Google Cloud project that represents a Classroom add-on. We recommend that you first provide configurations for an add-on with private visibility so that you can develop and test in a demo domain without affecting live users.

You will receive a response to your email when the configurations have been enabled. Note that URL patterns that use `localhost` are not supported for this feature.

Format the email to include the following:

```
Google Cloud Project number: GCP_PROJECT_NUMBER

Link Upgrade iframe URL: LINK_UPGRADE_IFRAME_URL

URL Patterns:
-   Host:HOST_1
-   Path prefixes:
  -   PATH_PREFIX_1
  -   PATH_PREFIX_2

-   Host:HOST_2
-   Path prefixes:
  -   PATH_PREFIX_3
  -   PATH_PREFIX_4

// add more hosts and path prefixes as needed
```

Replace the following:

- GCP\_PROJECT\_NUMBER: The number of the Google Cloud project that the add-on is associated with.
- LINK\_UPGRADE\_IFRAME\_URL: The URL that should open in the Link Upgrade iframe.
- HOST\_1: A host that Classroom should detect. Only the `https` scheme is supported.
- PATH\_PREFIX\_1 and PATH\_PREFIX\_2: Path prefixes associated with `HOST_1` that Classroom should detect and attempt to upgrade.
- HOST\_2: A host that Classroom should detect. Only the `https` scheme is supported.
- PATH\_PREFIX\_3 and PATH\_PREFIX\_4: Path prefixes associated with `HOST_2` that Classroom should detect and attempt to upgrade.

## Recommended user experience

The following are suggestions to consider when implementing this feature.

### Avoid extra work for teachers

We strongly recommend that you use the iframe to facilitate sign-in, if required, or display a loading indicator. For the best user experience, the teacher shouldn't be prompted for any additional information after they have agreed to upgrade the pasted link to an add-on attachment. However, if this is not possible for your add-on, you can use the Link Upgrade iframe to collect additional information that you need. The iframe can also be used to inform the teacher if upgrading the link is not possible or if an error occurred.

### Include user-friendly access error messages

If teachers paste and upgrade a link that they don't have access to, display a user-friendly error message in the iframe so teachers are aware of the issue. The iframe can also be used to provide the teacher with the appropriate permissions to access the content.
