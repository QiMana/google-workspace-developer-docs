---
source: https://developers.google.com/workspace/sites/docs/1.0/reference
root: workspace
fetched_at: 2026-04-23T15:31:41.921Z
---

# Reference Guide

## Page Summary

- This documentation outlines the raw protocol (XML and HTTP) for the Google Sites Data API, intended for programmers building client applications that interact with Google Sites.
- The Google Sites Data API offers five types of feeds: Activity, Content, Revision, Site, and ACL, each serving different purposes in managing and accessing site data.
- The Content feed allows for retrieving current, editable site content, with additional optional parameters like `ancestor`, `include-deleted`, `kind`, and `path` to filter results.
- The Site feed is used to manage Google Sites, including listing sites, creating new ones, copying existing sites, and modifying site names, while supporting parameters such as `include-all-sites`.
- The Revision feed allows for getting historical revisions of site content.

This document provides detailed reference documentation for the raw protocol (XML and HTTP) for the Google Sites Data API.

This document doesn't contain information about the programming-language client libraries. For client-library reference information, see the links from the programming-language-specific sections of the developer's guide.

## Audience

This document is intended for programmers who want to write client applications that can interact with Google Sites.

It's a reference document; it assumes that you understand the concepts presented in the [protocol guide](https://developers.google.com/workspace/sites/docs/1.0/developers_guide_protocol), and the general ideas behind the [Google Data APIs protocol](https://developers.google.com/gdata/basics).

## Google Sites feed types

The Google Sites Data API provides the following types of feeds:

### Activity feed

The Activity feed is a feed containing descriptions of all activities within a site.

This feed's `GET` URI for a site within a particular domain is:

```
https://sites.google.com/feeds/activity/domainName/siteName/[activityEntryID]
```

domainName is either "site", or a G Suite domain.

siteName is the site name as it appears in the site's landing page URL: http://sites.google.com/a/ domainName / siteName /.

All requests to this feed must be authenticated.

Supported request types: `GET`

### Content feed

The Content feed is a feed containing the current, editable site content.

This feed's `GET` URI for a site within a particular domain is:

```
https://sites.google.com/feeds/content/domainName/siteName/[contentEntryID]
```

domainName is either "site", or a G Suite domain.

siteName is the site name as it appears in the site's landing page URL: http://sites.google.com/a/ domainName / siteName.

Requests to this feed may or may not require authentication, depending on the Site's (published) settings.

Supported request types: `GET`, `POST`, `PUT`, `DELETE`

In addition to the standard Data API query parameters, the Sites Data API allows the following optional parameters issuing `GET` request using the Content feed:

| Parameter | Description | Type | Notes |
| --- | --- | --- | --- |
| `ancestor` | Requests only entries that have the specified ancestor. | string | Provide the ID of the desired ancestor entry. For example: `0123456789`. Returns all entries that have the specified ancestor as a parent, a parent's parent, and so on. |
| `include-deleted` | Specifies whether to include deleted entries. | boolean | Possible values are `true` or `false`. Default is `false`. |
| `include-draft` | Specifies whether to include draft entries. | boolean | Possible values are `true` or `false`. Default is `false`. You need to be the owner or author of the draft to view it. |
| `kind` | Specifies the kind(s) of content entries to return. These follow the type of page within Google Sites. | comma separated list of strings | Possible values are `announcement`, `announcementspage`, `attachment`, `comment`, `filecabinet`, `listitem`, `listpage`, `webpage`, `webattachment`, `template`. |
| `parent` | Requests only entries that have the specified parent. | string | Provide the ID of the parent entry. For example: `0123456789`. |
| `path` | Requests content under a certain page hierarchy | string | The path to a subpage within a Site to fetch content for. For example: `path=/path/to/page`. |

### Revision feed

The Revision feed is a feed containing historical revisions of site content.

This feed's `GET` URI for a site within a particular domain is:

```
https://sites.google.com/feeds/revision/domainName/siteName/contentEntryID/[revisionEntryID]
```

domainName is either "site", or a G Suite domain.

siteName is the site name as it appears in the site's landing page URL: http://sites.google.com/a/ domainName / siteName.

All requests to this feed must be authenticated.

Supported request types: `GET`

### Site feed

The site feed can be used to list the Google Sites a user owns or has viewing permissions for. It can also be used to create new sites, copy a site, or modify the name of an existing site.

The feed URI for the Sites listing is:

```
https://sites.google.com/feeds/site/domainName/[siteName]
```

domainName is either "site", or a G Suite domain.

All requests to this feed must be authenticated.

Supported request types: `GET`, `POST`, `PUT`

The site feed supports the following (optional) parameters when issuing a `GET` request for listing sites:

| Parameter | Description | Type | Notes |
| --- | --- | --- | --- |
| `include-all-sites` | List all sites that can be at least viewed by the user in the G Suite domain. | boolean | This parameter is only applicable when listing sites for a G Suite domain. Possible values are `true` or `false`. Default is `false`. |
| `with-mappings` | Includes the web address mappings in a site entry. | boolean | Possible values are `true` or `false`. Default is `false`. |

### ACL feed

The ACL feed can be used to list and/or modify the sharing permissions (ACLs) of a Google Site.

The feed URI for the Sites listing is:

```
https://sites.google.com/feeds/acl/site/domainName/siteName/[aclEntryID]
```

domainName is either "site", or a G Suite domain.

All requests to this feed must be authenticated.

Supported request types: `GET`, `POST`, `PUT`, `DELETE`

## Google Sites query parameters reference

Supported query parameters from the [Google Data API](https://developers.google.com/gdata/docs/2.0/reference#Queries) protocol:

- `max-results`
- `published-max` (only content feed)
- `published-min` (only content feed)
- `start-index`
- `updated-max`
- `updated-min`
- `q` (full text-queries)

See [each feed](#Feeds) above for a list of parameters specific to that feed.
