---
source: https://developers.google.com/apps-script/manifest/allowlist-url
root: apps-script
fetched_at: 2026-04-23T15:18:28.020Z
---

# Allowlist URLs

## Page Summary

- Allowlists are used to pre-approve specific URLs that a script or add-on can access, which helps protect user data.
- Allowlists are optional for test deployments but required for versioned deployments.
- Allowlists are used when fetching information from external locations or opening/displaying external URLs in response to a user action.
- You must include a list of valid `https://` URL prefixes with a full domain and non-empty path in the manifest file to define an allowlist.
- You can use a single wildcard (`*`) as a leading prefix to match subdomains in your allowlist URL prefixes.

You use allowlists to designate specific URLs that are pre-approved for access by your script or add-on. Allowlists help protect user data; when you define an allowlist, script projects can't access URLs that have not been added to the allowlist.

This field is optional when you install a test deployment, but is required when you create a versioned deployment.

You use allowlists when your script or add-on performs the following actions:

- Retrieves or fetches information from an external location (such as HTTPS endpoints) using the Apps Script [`UrlFetch`](../reference/url-fetch.md) service. To allowlist URLs for fetching, include the field in your manifest file.
- Opens or displays a URL in response to a user action (Required for Google Workspace add-ons that open or display URLs that are external to Google). To allowlist URLs for opening, include the [`addOns.common.openLinkUrlPrefixes`](./addons.md#Common.FIELDS.openLinkUrlPrefixes) field in your manifest file.

### Adding prefixes to your allowlist

When you specify allowlists in your manifest file (by including either the `addOns.common.openLinkUrlPrefixes` or `urlFetchWhitelist` field), you must include a list of URL prefixes. The prefixes you add to the manifest must satisfy the following requirements:

- Each prefix must be a valid URL.
- Each prefix must use `https://`, not `http://`.
- Each prefix must have a full domain.
- Each prefix must have a non-empty path. For example, `https://www.google.com/` is valid but `https://www.google.com` is not.
- You can use [wildcards](#using_wildcards) to match URL subdomain prefixes.
- A single `*` wildcard can be used in the [`addOns.common.openLinkUrlPrefixes`](./addons.md#Common.FIELDS.openLinkUrlPrefixes) field to match all links, but this is not recommended as it can expose a user's data to risk and can prolong the [add-on review](../../workspace/marketplace/about-app-review.md) process. Only use a wildcard if your add-on functionality requires it.

When determining if a URL matches a prefix in the allowlist, the following rules apply:

- Path matching is case-sensitive.
- If the prefix is identical to the URL, it is a match.
- If the URL is the same or a child of the prefix, it is a match.

For example, the prefix `https://example.com/foo` matches the following URLs:

- `https://example.com/foo`
- `https://example.com/foo/`
- `https://example.com/foo/bar`
- `https://example.com/foo?bar`
- `https://example.com/foo#bar`

### Using wildcards

You can use a single wildcard character (`*`) to match a subdomain for both the [`urlFetchWhitelist`](../manifest.md#Manifest.FIELDS.urlFetchWhitelist) and [`addOns.common.openLinkUrlPrefixes`](./addons.md#Common.FIELDS.openLinkUrlPrefixes) fields. You can't use more than one wildcard to match multiple subdomains, and the wildcard must represent the leading prefix of the URL.

For example, the prefix `https://*.example.com/foo` matches the following URLs:

- `https://subdomain.example.com/foo`
- `https://any.number.of.subdomains.example.com/foo`

The prefix `https://*.example.com/foo` *doesn't* match the following URLs:

- `https://subdomain.example.com/bar` (suffix mismatch)
- `https://example.com/foo` (at least one subdomain must be present)

Some of the prefix rules are enforced when you try to save your manifest. For example, the following prefixes cause an error if they are present in your manifest when you attempt to save:

- `https://*.*.example.com/foo` (multiple wildcards are forbidden)
- `https://subdomain.*.example.com/foo` (wildcards must be used as a leading prefix)
