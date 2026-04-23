---
source: https://developers.google.com/workspace/sites/docs/1.0/developers_guide_protocol
root: workspace
fetched_at: 2026-04-23T15:31:41.190Z
---

# Protocol Guide

## Page Summary

- The Google Sites API utilizes OAuth 2.0 for authorization, requiring applications to register in the Google API Console and obtain user consent for accessing their sites.
- Applications can perform site feed operations like listing, creating, copying, updating site metadata, and adding categories, enabling comprehensive management of Google Sites.
- The API allows retrieval of recent activities and revision history for content entries, as well as accessing the current content of a site, with the ability to filter and page through the results.
- Content creation involves using `POST` requests with specific elements like `<category>`, `<title>`, and `<content>` to define entry types and details, with options for custom URLs, subpages, and templates.
- The API also supports advanced features such as updating and deleting content, uploading file attachments, managing web attachments, conditional retrievals, and batch processing for efficient handling of multiple operations.

The classic Google Sites API allows your applications to access, publish, and modify content within a [Google Site](https://sites.google.com/). In addition, your application can request a list of recent activity, fetch revisionhistory, and upload/download attachments and files.

## Audience

This document assumes that you understand the general ideas behind the [Google Data APIs protocol](https://developers.google.com/gdata/basics).

This document is intended for programmers who want to write client applications that can interact with Google Sites. It provides a series of examples of basic data API interactions using raw XML/HTTP, with explanations. After reading this document, you can learn more about interacting with the API using our [client libraries](https://developers.google.com/workspace/sites/code) by reading the language-specific examples found on the other guides in the left-side navbar.

For a reference of the material in this guide, see the [reference guide](https://developers.google.com/workspace/sites/docs/1.0/reference).

## Authorizing requests

When your application requests non-public user data, it must include an authorization token. The token also identifies your application to Google.

## About authorization protocols

Your application must use [OAuth 2.0](https://developers.google.com/identity/protocols/OAuth2) to authorize requests. No other authorization protocols are supported. If your application uses [Sign In With Google](https://developers.google.com/identity/gsi/web), some aspects of authorization are handled for you.

## Authorizing requests with OAuth 2.0

Requests to the Google Sites Data API for non-public user data must be authorized by an authenticated user.

The details of the authorization process, or "flow," for OAuth 2.0 vary somewhat depending on what kind of application you're writing. The following general process applies to all application types:

1. When you create your application, you register it using the [Google API Console](https://console.cloud.google.com/). Google then provides information you'll need later, such as a client ID and a client secret.
2. Activate the Google Sites Data API in the Google API Console. (If the API isn't listed in the API Console, then skip this step.)
3. When your application needs access to user data, it asks Google for a particular **scope** of access.
4. Google displays a **consent screen** to the user, asking them to authorize your application to request some of their data.
5. If the user approves, then Google gives your application a short-lived **access token**.
6. Your application requests user data, attaching the access token to the request.
7. If Google determines that your request and the token are valid, it returns the requested data.

Some flows include additional steps, such as using **refresh tokens** to acquire new access tokens. For detailed information about flows for various types of applications, see Google's [OAuth 2.0 documentation](https://developers.google.com/identity/protocols/OAuth2).

Here's the OAuth 2.0 scope information for the Google Sites Data API:

```
https://sites.google.com/feeds/
```

To request access using OAuth 2.0, your application needs the scope information, as well as information that Google supplies when you register your application (such as the client ID and the client secret).

## Specifying a version

Every request that you to the Google Sites Data API should specify a version of 1.4. To specify a version number, use the `GData-Version` HTTP header:

```
GData-Version: 1.4
```

Alternatively, if you can't set HTTP headers, you can specify `v=1.4` as a query parameter in the URL. But the HTTP header is preferred where possible.

**Note**: The client libraries supply appropriate version headers automatically, so don't use the `v=1.4` query parameter when you're using a client library.

## Site Feed

The site feed can be used to list the Google Sites a user owns or has viewing permissions for and also modify the title of an existing site. For G Suite domains, it can also be used to create or copy an entire site.

### Listing sites

To list the sites a user has access to, send an authenticated `GET` request to the following URL:

```
https://sites.google.com/feeds/site/domainName
```

| Feed parameter | Description |
| --- | --- |
| `domainName` | ' `site` ' or the domain of your G Suite hosted domain (e.g. `example.com`). |

The response will contain a feed with a list of sites:

```
GET /feeds/site/domainName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

HTTP/1.1 200 OK

<feed xmlns="http://www.w3.org/2005/Atom" xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/"
    xmlns:gAcl="http://schemas.google.com/acl/2007" xmlns:sites="http://schemas.google.com/sites/2008"
    xmlns:gs="http://schemas.google.com/spreadsheets/2006" xmlns:dc="http://purl.org/dc/terms"
    xmlns:batch="http://schemas.google.com/gdata/batch" xmlns:gd="http://schemas.google.com/g/2005"
    xmlns:thr="http://purl.org/syndication/thread/1.0">
<id>https://sites.google.com/feeds/site/site</id>
<updated>2009-12-02T17:47:34.406Z</updated>
<title>Site</title>
<link rel="http://schemas.google.com/g/2005#feed" type="application/atom+xml"
    href="https://sites.google.com/feeds/site/site"/>
<link rel="http://schemas.google.com/g/2005#post" type="application/atom+xml"
    href="https://sites.google.com/feeds/feeds/site/domainName"/>
<link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName"/>
<link rel="next" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/?start-index=2"/>
<generator version="1" uri="http://sites.google.com/">Google Sites</generator>
<openSearch:startIndex>1</openSearch:startIndex>
<entry gd:etag="W/&quot;CkUAQH4_eil7I2A9WxNaFk4.&quot;">
  <id>https://sites.google.com/feeds/site/site/myTestSite</id>
  <updated>2009-12-01T01:17:21.042Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-01T01:17:21.042Z</app:edited>
  <title>myTestSite</title>
  <summary/>
  <link rel="alternate" type="text/html" href="http://sites.google.com/site/myTestSite/"/>
  <link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/myTestSite"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/myTestSite"/>
  <link rel="edit" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/myTestSite"/>
  <sites:siteName>myTestSite</sites:siteName>
  <sites:theme>default</sites:theme>
</entry>
<entry gd:etag="W/&quot;DkQGQHczfA9WxNaFk4.&quot;">
  <id>https://sites.google.com/feeds/site/domainName/myOtherTestSite</id>
  <updated>2009-12-01T02:25:21.987Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-01T02:25:21.987Z</app:edited>
  <title>myOtherTestSite</title>
  <summary>A new site to hold memories</summary>
  <category scheme="http://schemas.google.com/sites/2008#tag" term="Memories Site"/>
  <link rel="alternate" type="text/html" href="http://sites.google.com/site/myOtherTestSite"/>
  <link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/myOtherTestSite"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/myOtherTestSite"/>
  <link rel="edit" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/myOtherTestSite"/>
  <sites:siteName>myOtherTestSite</sites:siteName>
  <sites:theme>iceberg</sites:theme>
</entry>
...
</feed>
```

Sites are listed in alphabetical order.

### Creating new sites

**Note**: This feature is only available to G Suite domains.

New sites can be provisioned by making an HTTP `POST` to the site feed, for example:

```
POST /feeds/site/example.com HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:sites="http://schemas.google.com/sites/2008">
  <title>Source Site</title>
  <summary>A new site to hold memories</summary>
  <sites:theme>slate</sites:theme>
</entry>
```

The above request would create a new Google Site with the 'slate' theme under the G Suite domain `example.com`. The site's URL would be http://sites.google.com/a/example.com/source-site/.

If the site is successfully created, the server will respond with `201 Created`. The response entry will contain elements added by the server, such as a link to the site, a link to the site's ACL feed, the site name, title, and summary.

```
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gAcl="http://schemas.google.com/acl/2007"
    xmlns:sites="http://schemas.google.com/sites/2008" xmlns:gs="http://schemas.google.com/spreadsheets/2006"
    xmlns:dc="http://purl.org/dc/terms" xmlns:batch="http://schemas.google.com/gdata/batch"
    xmlns:gd="http://schemas.google.com/g/2005" xmlns:thr="http://purl.org/syndication/thread/1.0"
    gd:etag="W/&quot;DEECR38l7I2A9WxNaF0Q.&quot;">
  <id>https://sites.google.com/feeds/site/example.com/source-site</id>
  <updated>2009-12-02T23:31:06.184Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-02T23:31:06.184Z</app:edited>
  <title>New Test Site</title>
  <summary>A new site to hold memories</summary>
  <link rel="alternate" type="text/html" href="http://sites.google.com/a/example.com/source-site/"/>
  <link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/example.com/source-site"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/example.com/source-site"/>
  <link rel="edit" type="application/atom+xml" href="https://sites.google.com/feeds/site/example.com/source-site"/>
  <sites:siteName>source-site</sites:siteName>
  <sites:theme>slate</sites:theme>
</entry>
```

### Copying a site

**Note**: This feature is only available to G Suite domains.

An existing site can be duplicated in the same fashion as [creating a new site](#SitesFeedPOST). However, in the `POST` request's Atom entry, include a `<link>` with `rel='source'` pointing to the the site feed of the site to copy. Any site that has been copied will have this link. Here is an example for duplicating a site:

```
POST /feeds/site/example.com HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

<entry xmlns="http://www.w3.org/2005/Atom">
  <link rel="http://schemas.google.com/sites/2008#source" type="application/atom+xml"
      href="https://sites.google.com/feeds/site/example.com/source-site"/>
  <title>Copy of New Test Site</title>
  <summary>A newer site to hold memories</summary>
</entry>
```

The above request would copy the site at http://sites.google.com/a/example.com/source-site/.

Important points:

- Only sites and site templates that the authenticated user owns can be copied.
- A site template can also be copied. A site is a template if the "Publish this site as a template" setting is checked in the Google Sites settings page.
- You can copy a site from another domain, pending you are listed as an owner on the source site.

### Updating a site's metadata

To update the title or summary of a site, send an HTTP `PUT` to a site entry's `edit` link. For example, the following example will update the previous site's title to `New Test Site2` and its description to `Newer description`.

```
PUT /feeds/site/example.com/source-site HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gAcl="http://schemas.google.com/acl/2007"
    xmlns:sites="http://schemas.google.com/sites/2008" xmlns:gs="http://schemas.google.com/spreadsheets/2006"
    xmlns:dc="http://purl.org/dc/terms" xmlns:batch="http://schemas.google.com/gdata/batch"
    xmlns:gd="http://schemas.google.com/g/2005" xmlns:thr="http://purl.org/syndication/thread/1.0"
    gd:etag="W/&quot;DEECR38l7I2A9WxNaF0Q.&quot;">
  <id>https://sites.google.com/feeds/site/example.com/source-site</id>
  <updated>2009-12-02T23:31:06.184Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-02T23:31:06.184Z</app:edited>
  <title>New Test Site2</title>
  <summary>Newer description</summary>
  <category scheme="http://schemas.google.com/sites/2008#tag" term="Category"/>
  <link rel="alternate" type="text/html" href="http://sites.google.com/a/example.com/source-site/"/>
  <link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/example.com/source-site"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/example.com/source-site"/>
  <link rel="edit" type="application/atom+xml" href="https://sites.google.com/feeds/site/example.com/source-site"/>
  <sites:siteName>source-site</sites:siteName>
</entry>
```

### Adding Categories

**Note**: This feature is only available to G Suite domains.

G Suite for your Domain sites include category meta data that is useful for categorizing sites within your domain. To add or update category meta data, send an HTTP `PUT` to your site entry's `edit` link that includes a `category` tag. See the bold line in the following example:

```
PUT /feeds/site/example.com/source-site HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gAcl="http://schemas.google.com/acl/2007"
    xmlns:sites="http://schemas.google.com/sites/2008" xmlns:gs="http://schemas.google.com/spreadsheets/2006"
    xmlns:dc="http://purl.org/dc/terms" xmlns:batch="http://schemas.google.com/gdata/batch"
    xmlns:gd="http://schemas.google.com/g/2005" xmlns:thr="http://purl.org/syndication/thread/1.0"
    gd:etag="W/&quot;DEECR38l7I2A9WxNaF0Q.&quot;">
  <id>https://sites.google.com/feeds/site/example.com/source-site</id>
  <updated>2009-12-02T23:31:06.184Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-02T23:31:06.184Z</app:edited>
  <title>My Team website</title>
  <summary>This site contains contact information and a summary of major efforts our team owns</summary>
  <category scheme="http://schemas.google.com/sites/2008#tag" term="Team Site"/>
  <link rel="alternate" type="text/html" href="http://sites.google.com/a/example.com/my-team-site/"/>
  <link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/example.com/my-team-site"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/example.com/my-team-site"/>
  <link rel="edit" type="application/atom+xml" href="https://sites.google.com/feeds/site/example.com/my-team-site"/>
  <sites:siteName>my-team-site</sites:siteName>
</entry>
```

This example edits an existing site and adds the category "Team Site".

You can also add multiple categories by adding additional `<category>` tags. See the bold lines in the following example:

```
PUT /feeds/site/example.com/my-team-site HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gAcl="http://schemas.google.com/acl/2007"
    xmlns:sites="http://schemas.google.com/sites/2008" xmlns:gs="http://schemas.google.com/spreadsheets/2006"
    xmlns:dc="http://purl.org/dc/terms" xmlns:batch="http://schemas.google.com/gdata/batch"
    xmlns:gd="http://schemas.google.com/g/2005" xmlns:thr="http://purl.org/syndication/thread/1.0"
    gd:etag="W/&quot;DEECR38l7I2A9WxNaF0Q.&quot;">
  <id>https://sites.google.com/feeds/site/example.com/my-team-site</id>
  <updated>2009-12-02T23:31:06.184Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-02T23:31:06.184Z</app:edited>
  <title>My Team website</title>
  <summary>This site contains contact information and a summary of major efforts our team owns</summary>
  <category scheme="http://schemas.google.com/sites/2008#tag" term="Team Site/">
  <category scheme="http://schemas.google.com/sites/2008#tag" term="Legal Department/">
  <link rel="alternate" type="text/html" href="http://sites.google.com/a/example.com/my-team-site/"/>
  <link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/example.com/my-team-site"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/example.com/my-team-site"/>
  <link rel="edit" type="application/atom+xml" href="https://sites.google.com/feeds/site/example.com/my-team-site"/>
  <sites:siteName>my-team-site</sites:siteName>
</entry>
```

This example adds two categories: "Team Site" and "Legal Department"

### Web address mappings

Web address mappings enable Sites users to map their own domains to a Google Site. For example, `http://www.mydomainsite.com` can be used instead of `http://sites.google.com/a/domain.com/mysite`. Depending on where your site is hosted, you can manually modify a site's web address mappings. See our [help center](https://support.google.com/sites/answer/9068867) article for more information.

#### Fetching a site's web address mappings

To return the web address mappings for a site, fetch the site entry/feed with `with-mappings=true` parameter:

```
GET /feeds/site/domainName?with-mappings=true HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

HTTP/1.1 200 OK

<feed xmlns="http://www.w3.org/2005/Atom" xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/"
    xmlns:gAcl="http://schemas.google.com/acl/2007" xmlns:sites="http://schemas.google.com/sites/2008"
    xmlns:gs="http://schemas.google.com/spreadsheets/2006" xmlns:dc="http://purl.org/dc/terms"
    xmlns:batch="http://schemas.google.com/gdata/batch" xmlns:gd="http://schemas.google.com/g/2005"
    xmlns:thr="http://purl.org/syndication/thread/1.0">
...
<entry gd:etag="W/&quot;DkQGQHczfA9WxNaFk4.&quot;">
  <id>https://sites.google.com/feeds/site/domainName/myOtherTestSite</id>
  <updated>2009-12-01T02:25:21.987Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-01T02:25:21.987Z</app:edited>
  <title>myOtherTestSite</title>
  <summary>A new site to hold memories</summary>
  <link rel="alternate" type="text/html" href="http://sites.google.com/site/myOtherTestSite"/>
  <link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/myOtherTestSite"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/myOtherTestSite"/>
  <link rel="edit" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/myOtherTestSite"/>
  <link rel='webAddressMapping' href='http://www.mysitemapping.com'>
  <link rel='webAddressMapping' href='http://www.mysitemapping2.com'>
  <link rel='webAddressMapping' href='http://www.myothermapping.org'>
</entry>
...
</feed>
```

Existing mappings will show as `link` s with rel='webAddressMapping'. For instance, in the above example there are three `webAddressMapping` s that point to the site `http://sites.google.com/site/myOtherTestSite`.

#### Modifying web address mappings

**Note**: All GET/POST/PUT operations should specify the `with-mappings=true` parameter when working with web address mappings. If the parameter is absent, `webAddressMapping` s will not be returned in site entries (GET) or considered when updating/removing (PUT) mappings from an entry.

To add, update, or delete a mapping, simply specify, change, or remove such a link when [creating new sites](#SitesFeedPOST) or [updating a site's metadata](#SitesFeedPUT). The `with-mappings=true` parameter must be included on the site feed URI. Note: to update address mappings, you need to be a site admin, or a domain admin in the case of a G Suite hosted site.

For example, the request below updates the `http://www.mysitemapping.com` mapping to `http://www.my-new-sitemapping.com`, and removes the `http://www.mysitemapping2.com` by leaving the link out of the entry:

```
PUT /feeds/site/domainName?with-mappings=true HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

<entry gd:etag="W/&quot;DkQGQHczfA9WxNaFk4.&quot;">
  <id>https://sites.google.com/feeds/site/domainName/myOtherTestSite</id>
  <updated>2009-12-01T02:25:21.987Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-01T02:25:21.987Z</app:edited>
  <title>myOtherTestSite</title>
  <summary>A new site to hold memories</summary>
  <link rel="alternate" type="text/html" href="http://sites.google.com/site/myOtherTestSite"/>
  <link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/myOtherTestSite"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/myOtherTestSite"/>
  <link rel="edit" type="application/atom+xml" href="https://sites.google.com/feeds/site/domainName/myOtherTestSite"/>
  <link rel='webAddressMapping' href='www.my-new-sitemapping.com'>
  <!-- missing mapping2 will be deleted -->
  <link rel='webAddressMapping' href='http://www.myothermapping.org'>
</entry>
```

Note, Web address mappings can also be specified at the time of creating/copying a site.

## Activity Feed

You can fetch a Site's recent activity (changes) by fetching the activity feed. Each entry in the activity feed contains information on a change that was made to the Site.

To query the activity feed, send an HTTP `GET` to the activity feed URL:

```
https://sites.google.com/feeds/activity/domainName/siteName
```

| Feed parameter | Description |
| --- | --- |
| `domainName` | ' `site` ' or the domain of your G Suite hosted domain (e.g. `example.com`). |
| `siteName` | The webspace name of your site; found in the Site's URL (e.g. `myCoolSite`). |

Example request and response:

```
GET /feeds/activity/site/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/">
<id>https://sites.google.com/feeds/activity/site/siteName</id>
<updated>2009-09-10T05:24:23.120Z</updated>
<title>Activity</title>
<link rel="alternate" type="text/html" href="http://sites.google.com/site/siteName/system/app/pages/recentChanges"/>
<link rel="http://schemas.google.com/g/2005#feed" type="application/atom+xml"
  href="https://sites.google.com/feeds/activity/site/siteName"/>
<link rel="self" type="application/atom+xml"
  href="https://sites.google.com/feeds/activity/site/siteName"/>
<generator version="1" uri="http://sites.google.com">Google Sites</generator>
<openSearch:startIndex>1</openSearch:startIndex>
<entry xmlns:gd="http://schemas.google.com/g/2005" gd:etag="W/&quot;CU4GQ3szfSl7ImA9WxNRFUg.&quot;">
<id>https://sites.google.com/feeds/activity/site/siteName/940375996952876062</id>
<updated>2009-09-10T03:38:42.585Z</updated>
<category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/sites/2008#deletion" label="deletion"/>
<title>home</title>
<summary type="xhtml">
  <div xmlns="http://www.w3.org/1999/xhtml">User deleted <a href="http://sites.google.com/site/siteName/home">home</a>
</div>
</summary>
<link rel="http://schemas.google.com/sites/2008#revision" type="application/atom+xml"
  href="https://sites.google.com/feeds/revision/site/siteName/5409745539831916487"/>
<link rel="http://schemas.google.com/sites/2008#current" type="application/atom+xml"
  href="https://sites.google.com/feeds/content/site/siteName/5409745539831916487"/>
<link rel="self" type="application/atom+xml"
  href="https://sites.google.com/feeds/activity/site/siteName/940375996952876062"/>
<author>
  <name>User</name>
  <email>user@gmail.com</email>
</author>
</entry>
<entry xmlns:gd="http://schemas.google.com/g/2005" gd:etag="W/&quot;CU8DQn45fyl7ImA9WxNRFUg.&quot;">
  <id>https://sites.google.com/feeds/activity/site/siteName/7165439066235480082</id>
  <updated>2009-09-10T03:37:53.027Z</updated>
  <category scheme="http://schemas.google.com/g/2005#kind"
    term="http://schemas.google.com/sites/2008#edit" label="edit"/>
  <title>home</title>
  <summary type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">User2 edited <a href="http://sites.google.com/site/siteName/home">home</a>
  </div>
  </summary>
  <link rel="http://schemas.google.com/sites/2008#revision" type="application/atom+xml"
    href="https://sites.google.com/feeds/revision/site/siteName/5409745539831916487"/>
  <link rel="http://schemas.google.com/sites/2008#current" type="application/atom+xml"
    href="https://sites.google.com/feeds/content/site/siteName/5409745539831916487"/>
  <link rel="self" type="application/atom+xml"
    href="https://sites.google.com/feeds/activity/site/siteName/7165439066235480082"/>
  <author>
    <name>User</name>
    <email>user@gmail.com</email>
  </author>
</entry>
<entry xmlns:gd="http://schemas.google.com/g/2005" gd:etag="W/&quot;CU8AR3s4cSl7ImA9WxNRFUg.&quot;">
  <id>https://sites.google.com/feeds/activity/site/siteName/127448462987345884</id>
  <updated>2009-09-10T03:37:26.539Z</updated>
  <category scheme="http://schemas.google.com/g/2005#kind"
    term="http://schemas.google.com/sites/2008#creation" label="creation"/>
  <title>home</title>
  <summary type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">User3 created <a href="http://sites.google.com/site/siteName/home">home</a>
  </div>
  </summary>
  <link rel="http://schemas.google.com/sites/2008#revision" type="application/atom+xml"
    href="https://sites.google.com/feeds/revision/site/siteName/5409745539831916487"/>
  <link rel="http://schemas.google.com/sites/2008#current" type="application/atom+xml"
    href="https://sites.google.com/feeds/content/site/siteName/5409745539831916487"/>
  <link rel="self" type="application/atom+xml"
    href="https://sites.google.com/feeds/activity/site/siteName/127448462987345884"/>
  <author>
    <name>User3</name>
    <email>user3@gmail.com</email>
  </author>
</entry>
</feed>
```

**Note**: Access to this feed requires that you are a collaborator or owner of the Site. You client must send the correct `Authorization` header and reference the token obtained in [Authorizing requests](#Auth).

## Revision Feed

To fetch the revision history for any content entry, send an HTTP `GET` to the entry's revision link:

```
https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID
```

| Feed parameter | Description |
| --- | --- |
| `domainName` | ' `site` ' or the domain of your G Suite hosted domain (e.g. `example.com`). |
| `siteName` | The webspace name of your site; found in the Site's URL (e.g. `myCoolSite`). |

To find the revisions link for a given page/comment/attachment/listitem, first retrieve the entry from the content feed using its CONTENT\_ENTRY\_ID. The retrieved entry will contain an `<atom:link>` to the revision feed. For example:

```
<link rel="http://schemas.google.com/sites/2008#revision" type="application/atom+xml"
    href="https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID"/>
```

Example request and response:

```
GET /feeds/revision/domainName/siteName/CONTENT_ENTRY_ID HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/"
    xmlns:sites="http://schemas.google.com/sites/2008" xmlns:gs="http://schemas.google.com/spreadsheets/2006"
    xmlns:dc="http://purl.org/dc/terms" xmlns:batch="http://schemas.google.com/gdata/batch"
    xmlns:gd="http://schemas.google.com/g/2005" xmlns:thr="http://purl.org/syndication/thread/1.0">
<id>https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID</id>
<updated>2009-09-10T04:33:35.337Z</updated>
<title>Revisions</title>
<link rel="http://schemas.google.com/g/2005#feed" type="application/atom+xml"
    href="https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID"/>
<link rel="self" type="application/atom+xml"
    href="https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID"/>
<generator version="1" uri="http://sites.google.com">Google Sites</generator>
<openSearch:startIndex>1</openSearch:startIndex>
<entry gd:etag="W/&quot;CU4GQmA9WxNRFUg.&quot;">
  <id>https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID/2</id>
  <updated>2009-09-10T03:38:42.045Z</updated>
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
  <title>Home</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">Latest content here</div>
  </content>
  <link rel="alternate" type="text/html"
    href="http://sites.google.com/domainName/siteName/CONTENT_ENTRY_ID/system/app/pages/admin/compare?wuid=wuid%3Agx%3A4f67c7&amp;rev1=2"/>
  <link rel="self" type="application/atom+xml" href="https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID/2"/>
  <author>
    <name>User</name>
    <email>user@gmail.com</email>
  </author>
  <sites:pageName>home</sites:pageName>
  <sites:revision>2</sites:revision>
</entry>
<entry gd:etag="W/&quot;CU8DQ388eSl7ImA9WxNRFUg.&quot;">
  <id>https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID/1</id>
  <updated>2009-09-10T03:37:52.171Z</updated>
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
  <title>Home</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">Older content here</div>
  </content>
  <link rel="alternate" type="text/html"
    href="http://sites.google.com/domainName/siteName/CONTENT_ENTRY_ID/system/app/pages/admin/compare?wuid=wuid%3Agx%3A4bc7&amp;rev1=1"/>
  <link rel="self" type="application/atom+xml"
    href="https://sites.google.com/feeds/revision/domainName/siteName/CONTENT_ENTRY_ID/1"/>
  <author>
    <name>User</name>
    <email>user@gmail.com</email>
  </author>
  <sites:pageName>home</sites:pageName>
  <sites:revision>1</sites:revision>
</entry>
</feed>
```

**Note**: Access to this feed requires that you are a collaborator or owner of the Site. Your client must send the correct `Authorization` header and reference the token obtained in [Authorizing requests](#Auth).

## Content Feed

### Retrieving content

The content feed lists a Sites's current content. Send an authenticated `GET` request to the following URL:

```
https://sites.google.com/feeds/content/domainName/siteName
```

| Feed parameter | Description |
| --- | --- |
| `domainName` | ' `site` ' or the domain of your G Suite hosted domain (e.g. `example.com`). |
| `siteName` | The webspace name of your site; found in the Site's URL (e.g. `myCoolSite`). |

The result is a feed that lists the first page of content entries on the Site. Each entry in the feed will represent a different type of content entry, such as a `webpage`, `filecabinet`, `attachment`, `comment`, etc. The `<category scheme="http://schemas.google.com/g/2005#kind">` element determines the type of entry. See the [reference guide](https://developers.google.com/workspace/sites/docs/1.0/reference#Parameters) for a list of support `kind` values.

**Note**: This feed may or may not require authentication; depending on the Site's sharing permissions. If the Site is non-public, your client must send the correct `Authorization` header (as seen in the example above) and reference the token obtained in [Authorizing requests](#Auth).

```
GET /feeds/content/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

HTTP/1.1 200 OK

<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/"
  xmlns:sites="http://schemas.google.com/sites/2008" xmlns:gs="http://schemas.google.com/spreadsheets/2006"
  xmlns:dc="http://purl.org/dc/terms" xmlns:batch="http://schemas.google.com/gdata/batch"
  xmlns:gd="http://schemas.google.com/g/2005" xmlns:thr="http://purl.org/syndication/thread/1.0">
<id>https://sites.google.com/feeds/content/domainName/siteName</id>
<updated>2009-08-31T01:39:20.286Z</updated>
<title>Content</title>
<link rel="http://schemas.google.com/g/2005#feed" type="application/atom+xml"
    href="https://sites.google.com/feeds/content/domainName/siteName"/>
<link rel="http://schemas.google.com/g/2005#post" type="application/atom+xml"
    href="https://sites.google.com/feeds/content/domainName/siteName"/>
<link rel="self" type="application/atom+xml"
    href="https://sites.google.com/feeds/content/domainName/siteName"/>
<link rel="http://schemas.google.com/g/2005#batch" type="application/atom+xml"
    href="https://sites.google.com/feeds/content/domainName/siteName/batch""/>
<link rel="next" type="application/atom+xml" href="https://sites.google.com/feeds/content/domainName/siteName/?start-index=2"/>
<generator version="1" uri="http://sites.google.com">Google Sites</generator>
<openSearch:startIndex>1</openSearch:startIndex>
<entry gd:etag="W/&quot;Ck8GQXk7fil7ImA9WxNSFk0.&quot;">
  <id>https://sites.google.com/feeds/content/domainName/siteName/7322156894</id>
  <updated>2009-08-30T02:53:40.706Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-08-30T02:53:40.706Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
  <title>Subpage</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">Page html content here</div>
  </content>
  <link rel="http://schemas.google.com/sites/2008#parent" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/6492205817"/>
  <link rel="alternate" type="text"
      href="http://sites.google.com/site/siteName/subpage"/>
  <link rel="http://schemas.google.com/sites/2008#revision" type="application/atom+xml"
      href="https://sites.google.com/feeds/revision/domainName/siteName/7322156894"/>
  <link rel="self" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/7322156894"/>
  <link rel="edit" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/7322156894"/>
  <author>
    <name>User</name>
    <email>user@gmail.com</email>
  </author>
  <sites:pageName>subpage</sites:pageName>
  <sites:revision>5</sites:revision>
</entry>
<entry gd:etag="W/&quot;CkMBQH08fCl7ImA9WxNSFk0.&quot;">
  <id>https://sites.google.com/feeds/content/domainName/siteName/5930635231</id>
  <updated>2009-08-30T02:47:31.374Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-08-30T02:47:31.374Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#listitem" label="listpage"/>
  <title/>
  <link rel="http://schemas.google.com/sites/2008#parent" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/5930635231"/>
  <link rel="http://schemas.google.com/sites/2008#revision" type="application/atom+xml"
      href="https://sites.google.com/feeds/revision/domainName/siteName/5930635231"/>
  <link rel="self" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/5930635231"/>
  <link rel="edit" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/5930635231"/>
  <author>
    <name>User</name>
    <email>user@gmail.com</email>
  </author>
  <sites:revision>1</sites:revision>
  <gs:field index="A" name="Issue/Feature">Implement cool feature X</gs:field>
  <gs:field index="B" name="Priority">P2</gs:field>
  <gs:field index="C" name="Owner"/>
  <gs:field index="D" name="Resolved"/>
</entry>
<entry gd:etag="W/&quot;AkYHQ3ozcCl7ImA9WxJaE08.&quot;">
  <id>https://sites.google.com/feeds/content/domainName/siteName/1265948545471894517</id>
  <updated>2009-08-03T19:35:32.488Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-08-03T19:35:32.488Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#filecabinet" label="filecabinet"/>
  <title>files</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">Page html content here</div>
  </content>
  <link rel="alternate" type="text"
      href="https://sites.google.com/domainName/siteName/files"/>
  <link rel="http://schemas.google.com/sites/2008#revision" type="application/atom+xml"
      href="https://sites.google.com/feeds/revision/domainName/siteName/12671894517"/>
  <link rel="self" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/12671894517"/>
  <link rel="edit" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/12671894517"/>
  <author>
    <name>User</name>
    <email>user@gmail.com</email>
  </author>
  <gd:feedLink href="httpn://sites.google.com/feeds/content/domainName/siteName?parent=12671894517"/>
  <sites:pageName>files</sites:pageName>
  <sites:revision>1</sites:revision>
</entry>
...
</feed>
```

**Note**: This is only the first few results. To page through the entire content feed, follow the feed's 'next' link:

```
<link rel="next" type="application/atom+xml" href="https://sites.google.com/feeds/content/domainName/siteName/?start-index=2"/>
```

For an explanation of the common elements to Atom, see the [Google Data Protocol reference](https://developers.google.com/gdata/docs/2.0/reference#QueryResponses). Elements which hold a specific meaning to the classic Sites API are described below. Certain kind entries will have additional properties (not listed below), while others will not. For example, a `listitem` entry may have `<gs:field>` elements, while a `webpage` entry does not.

| Element | Description |
| --- | --- |
| `<content ...>` | The inner text is the HTML body of the page. For some entries (e.g. attachments), this element will contain a `src` attribute pointing to the file. |
| `<link rel="alternate" ...>` | Link to the page or item in Google Sites. |
| `<link rel="http://schemas.google.com/sites/2008#revision" ...>` | `href` attribute points to the entry's revision feed. |
| `<link rel="http://schemas.google.com/sites/2008#parent" ...>` | `href` attribute points to the entry's parent entry. |
| `<link rel="http://schemas.google.com/sites/2008#template" ...>` | `href` attribute points to the entry's template page. |
| `<category scheme="http://schemas.google.com/g/2005#kind" ...>` | `label` is the type of entry. |
| `<category term="http://schemas.google.com/g/2005#template" ...>` | `label=template` signifying the entry is a template. |
| `<gd:feedLink>` | `href` attribute points to the children of the entry's parent. |
| `<sites:pageName>` | Webspace name of the page; corresponding to the name in the page's URL. |
| `<sites:revision>` | Current revision number. |

### Content feed query examples

You can search the content feed using some of [the standard Google Data API query parameters](https://developers.google.com/gdata/docs/2.0/reference#Queries) and those specific to the classic Sites API. For more detailed information and a full list of supported parameters, see the [Reference Guide](https://developers.google.com/workspace/sites/docs/1.0/reference#Parameters).

#### Retrieving specific entry kinds

To fetch only a particular type of entry, use the `kind` parameter. This example returns just `webpage` entries:

```
GET /feeds/content/domainName/siteName?kind=webpage
```

To return more than one entry type, separate each `kind` with a ','. This example returns `filecabinet` and `listpage` entries:

```
GET /feeds/content/domainName/siteName?kind=filecabinet,listpage
```

Alternatively, you can use the standard format for a Google Data `/-/category` query instead of the `kind` parameter:

```
GET /feeds/content/domainName/siteName/-/filecabinet|listpage
```

#### Retrieving page templates

This example returns just `template` pages:

```
GET /feeds/content/domainName/siteName/-/template
```

To return all entry types and include `template` pages, use:

```
GET /feeds/content/domainName/siteName/-/template|-template
```

#### Retrieving a page by path

If you know the relative path of a page within the Google Site, you can use the `path` parameter to fetch that particular page. This example would return the page located at `http://sites.google.com/site/siteName/path/to/the/page`:

```
GET /feeds/content/domainName/siteName?path=/path/to/the/page
```

#### Retrieving all entries under a parent page

If you know the entry id of a page, you can use the `parent` parameter to fetch all of its child entries (if any):

```
GET /feeds/content/domainName/siteName?parent=CONTENT_ENTRY_ID
```

#### Including drafts or deleted entries

To include draft or deleted entries, use the `include-drafts` or `include-deleted` parameters, respectively. This example includes draft entries in the content feed:

```
GET /feeds/content/domainName/siteName?include-drafts=true
```

#### Full text search

To search across the entire content of a site, use the `q` parameter to issue a full-text search:

```
GET /feeds/content/domainName/siteName?q=Text%20I%20am%20looking%20for
```

---

## Creating Content

New content (webpages, listpages, filecabinet pages, announcement pages, etc.) can be created by sending an HTTP `POST` to the content feed:

```
https://sites.google.com/feeds/content/domainName/siteName
```

For a list of supported entry types, see the `kind` parameter in the [Reference Guide](https://developers.google.com/workspace/sites/docs/1.0/reference#Parameters).

### Creating new items / pages

This example creates a new `webpage` under the Site's top-level, includes some XHTML for the page body, and sets the heading title to 'New WebPage Title':

```
POST /feeds/content/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Length: 328
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom">
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
  <title>New Webpage Title</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">HTML body goes here</div>
  </content>
</entry>
```

If successful, the server responds with the a `201 Created` and a copy of the entry.

#### Creating items/pages under custom URL paths

By default, the previous example would be created under the URL `http://sites.google.com/domainName/siteName/new-webpage-title` and have a page heading of 'New Webpage Title'. That is, the `<atom:title>` is normalized to `new-webpage-title` for the URL. To customize a page's URL path, you can set the `<sites:pageName>` element.

This example creates a new `filecabinet` with a page heading of 'File Storage', but creates the page under the URL `http://sites.google.com/domainName/siteName/files` by specifying the `<sites:pageName>` element.

```
POST /feeds/content/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Length: 393
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:sites="http://schemas.google.com/sites/2008">
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#filecabinet" label="filecabinet"/>
  <title>File Storage</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">A list of files is below.</div>
  </content>
  <sites:pageName>files</sites:pageName>
</entry>
```

The server uses the following precedence rules for naming a page's URL path:

1. `<sites:pageName>`, if present. Must satisfy `a-z, A-Z, 0-9, -, _`.
2. `<atom:title>`, must not be null if pageName is not present. Normalization is to trim + collapse whitespace to '-' and remove chars not matching `a-z, A-Z, 0-9, -, _`.

As an example, 'Custom\_Page2' would be an accepted by the server.

#### Creating subpages

To create subpages (children) under a parent page, include a `<link rel="http://schemas.google.com/sites/2008#parent">` in your new Atom entry. Set the link's `href` attribute to the parent entry's self link.

This example creates a new `announcement` with the heading 'announcement', under a parent announcement page with entry ID `PARENT_ENTRY_ID`. XHTML content for the page body is also included:

```
POST /feeds/content/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Length: 470
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom">
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#announcement" label="announcement"/>
  <link rel="http://schemas.google.com/sites/2008#parent" type="application/atom+xml"
      href="https://sites.google.com/feeds/content/domainName/siteName/PARENT_ENTRY_ID"/>
  <title>announcement</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">This weekend. My place.</div>
  </content>
</entry>
```

### Page templates

#### Creating page templates

The process for creating a page template is the same as [creating new items/pages](#ContentFeedPOST) and [creating subpages](#CreatingSubpages).The difference is the addition of the `category` with term and label set to 'http://schemas.google.com/g/2005#template' and 'template', respectively.

This example creates a new `webpage` template.

```
POST /feeds/content/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Length: 464
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:sites="http://schemas.google.com/sites/2008">
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
  <category scheme="http://schemas.google.com/g/2005#labels" term="http://schemas.google.com/g/2005#template" label="template"/>
  <title>Webpage Template</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">This weekend. My place.</div>
  </content>
</entry>
```

#### Creating pages from a template

Similar to creating page templates, you can instantiate a new page from a template by including a `<link>` with rel='http://schemas.google.com/sites/2008#template' pointing to the self link of a page template.

This example creates a new `filecabinet` page from an existing page template which defines a filecabinet.

```
POST /feeds/content/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Length: 464
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:sites="http://schemas.google.com/sites/2008">
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#filecabinet" label="filecabinet"/>
  <title>File Cabinet Page From Template</title>
  <link rel='http://schemas.google.com/sites/2008#template' type='application/atom+xml'
    href='https://sites.google.com/feeds/content/domainName/siteName/ENTRY_ID'/>
</entry>
```

**Note**: Despite a template defining a `<category>`, including one in your entry is still required. Also note, if you include a `<content>` element, the server will reject it.

### Uploading files

Just as in Google Sites, the API allows you to upload attachments to file cabinet pages and parent pages.

To upload an attachment to a parent, send an HTTP `POST` request to the content feed URL:

```
https://sites.google.com/feeds/content/domainName/siteName
```

The `POST` body should be a MIME multipart request, to combine file contents with a `<atom:entry>` containing the attachment's metadata. The `<atom:entry>` should reference the parent entry's self link, in order to specify where the attachment will be created. See [Creating subpages](#CreatingSubpages) for more information.

#### Uploading attachments

Here is an example of uploading a PDF file to a file cabinet with id `PARENT_ENTRY_ID`. The attachment will be created with the title 'PDF File' and an (optional) description, 'HR packet'.

```
POST /feeds/content/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Length: 7221984
Content-Type: multipart/related; boundary=END_OF_PART
--END_OF_PART
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom">
  <category scheme="http://schemas.google.com/g/2005#kind"
          term="http://schemas.google.com/sites/2008#attachment" label="attachment"/>
  <link rel="http://schemas.google.com/sites/2008#parent" type="application/atom+xml"
        href="https://sites.google.com/feeds/content/domainName/siteName/PARENT_ENTRY_ID"/>
  <title>PDF File</title>
  <summary>HR packet</summary>
</entry>

--END_OF_PART
Content-Type: application/pdf

... pdf contents here ...

--END_OF_PART--
```

If the upload is successful, the server will respond with a `201 Created` and a copy of the newly created attachment entry.

#### Uploading an attachment to a folder

To upload an attachment to an existing folder in a `filecabinet`, include a category with the 'term' attribute set to the folder's name:

```
<category scheme="http://schemas.google.com/sites/2008#folder" term="FolderName">
```

### Web attachments

Web attachments are special kinds of attachments. Essentially, they're links to other files on the web that you can add to your filecabinet listings. This feature is analogous to the 'Add file by URL' upload method in the Google Sites UI.

**Note**: Web attachments can only be created under a file cabinet. They cannot be uploaded to other types of pages.

This example creates a `webattachment` under the filecabinet referenced by ID `FILECABINET_ENTRY_ID`. Its title and (optional) description are set to 'GoogleLogo' and 'nice colors', respectively.

```
POST /feeds/content/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Type: application/atom+xml
Content-Length: 531

<entry xmlns="http://www.w3.org/2005/Atom">
  <category scheme="http://schemas.google.com/g/2005#kind"
          term="http://schemas.google.com/sites/2008#webattachment" label="webattachment"/>
  <link rel="http://schemas.google.com/sites/2008#parent" type="application/atom+xml"
        href="https://sites.google.com/feeds/content/domainName/siteName/FILECABINET_ENTRY_ID"/>
  <title>GoogleLogo</title>
  <summary>nice colors</summary>
  <content type="image/gif" src="http://www.google.com/images/logo.gif"></content>
</entry>
```

The `POST` creates a link in the user's filecabinet that points to the image at 'http://www.google.com/images/logo.gif'.

---

## Updating Content

The metadata (title, pageName, etc.) and page content of any page can be edited with a single `PUT` request to the `edit` link. The request body should contain an Atom entry describing the updated page. The exception to this rule is an attachment entry, in which the entry can only be used to update the attachment's metadata. To change the content of the attached file, simply include the raw data as the body of a `PUT` request to the attachment's `edit-media` link. You can also update both the metadata and the attached file contents at once by using a MIME multipart request.

To assert your update doesn't overwrite another client's changes, include the original entry's ETag value. You can do this by providing the ETag value in an HTTP `If-Match` header, or by including the original entry's `gd:etag` attribute in the updated entry. To determine the original entry's ETag value, examine the `<entry>` element's `gd:etag` attribute. For media entries, the ETag of the media may be available in the `gd:etag` attribute of the `edit-media` link.

If you want to update the entry regardless of whether someone else has updated it since you retrieved it, then use `If-Match: *` and don't include the ETag. For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).

### Updating an item's metadata or html content

To update an entry's metadata or HTML content, send an HTTP `PUT` to the entry's `edit` link.

Following is an example of updating a `listpage` entry (represented by its ID `ENTRY_ID`) with the following changes:

- The title is modified to 'Updated Content'
- Updated HTML content
- The first column heading of the list is updated to 'Owner'
- The page's URL path is modified by the `<sites:pageName>` element

```
PUT /feeds/content/domainName/siteName/ENTRY_ID
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Length: 816
Content-Type: application/atom+xml

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:sites="http://schemas.google.com/sites/2008"
    xmlns:gs="http://schemas.google.com/spreadsheets/2006" xmlns:gd="http://schemas.google.com/g/2005"
    gd:etag="W/&quot;CEEBRn0ymA9WxJWEUw.&quot;">
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#listpage" label="listpage"/>
  <title>Updated Title</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">Updated Content</div>
  </content>
  <gs:worksheet name="listpage"/>
  <gs:header row="1"/>
  <gs:data startRow="2">
    <gs:column index="A" name="Owner"/>
    <gs:column index="B" name="Description"/>
    <gs:column index="C" name="Completed"/>
  </gs:data>
  <sites:pageName>newPagePath</sites:pageName>
</entry>
```

**Note:** The entry (as returned by the server) will contain more elements than the example above.

### Replacing an attachment's content

Below is an example of replacing the contents of an attachment, but leaving its metadata unchanged. Since the request contains new content, the attachment entry's `edit-media` link is used.

```
PUT /feeds/media/content/domainName/siteName/ATTACHMENT_ENTRY_ID
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Length: 70581
Content-Type: application/msword

... doc contents here ...
```

### Updating attachment metadata + content

Below is an example of updating both an attachment's metadata and its content at the same time. The attachments name will be updated to 'New Title' and its contents will be replaced with the contents of a.zip file. Since the request contains new file content, the attachment entry's `edit-media` link is used.

Note that including the ETag for the metadata provides an implicit `If-Match` for the media content as well, because any update to the media content causes the metadata's ETag to change.

```
PUT /feeds/media/content/domainName/siteName/ATTACHMENT_ENTRY_ID
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
Content-Type: multipart/related; boundary="END_OF_PART"
--END_OF_PART
Content-Type: application/atom+xml

<?xml version='1.0' encoding='UTF-8'?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gd="http://schemas.google.com/g/2005" gd:etag="BxAaTxRZAyp7ImBq">
  <link rel="http://schemas.google.com/sites/2008#parent" type="application/atom+xml"
        href="https://sites.google.com/feeds/content/domainName/siteName/ATTACHMENT_ENTRY_ID"/>
  <title>New Title</title>
</entry>

--END_OF_PART
Content-Type: application/zip

... zip contents here ...

--END_OF_PART
```

---

## Deleting Content

To remove an item from a Google Site, first retrieve the entry, then send a `DELETE` request to the entry's `edit` URL. This is the same URL used when [updating an item's metadata or html content](#UpdatingPageFile).

```
DELETE /feeds/content/domainName/siteName/ENTRY_ID
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
If-Match: <ETag or * here>
```

If the entry was deleted successfully, the server responds with an HTTP `200 OK`.

If you want to make sure that you don't delete a entry that has been changed by another client since you retrieved it, include an HTTP `If-Match` header that contains the original entry's ETag value. You can determine the original entry's ETag value by examining the `<entry>` element's `gd:etag` attribute.

If you want to delete the entry regardless of whether someone else has updated it since you retrieved it, then use `If-Match: *` and don't include the ETag. (In this case, you don't need to retrieve the entry before deleting it.)

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).

---

## Downloading Attachments

Once you have an attachment entry, you can download the file by sending an authenticated HTTP `GET` to the entry's `<content>` src link. An example of a PDF's content link:

```
<content type="application/pdf"
  src="http://502377765-a-google-com-s-sites.googlegroups.com/feeds/media/content/domainName/siteName/678942036"/>
```

## ACL Feed

### Overview of Sharing Permissions (ACLs)

Each ACL entry in the ACL feed represents an access role of a particular entity, either a user, a group of users, a domain, or the default access (which is a public site). Entries will only be shown for entities with explicit access - one entry will be shown for each e-mail address in the "People with Access" panel in the sharing screen of the Google Sites UI. Thus, domain admins will not be shown, even though they have implicit access to a site.

### Roles

The role element represents an access level an entity can have. There are four possible values of the `gAcl:role` element:

- **reader** — a viewer (equivalent to read-only access).
- **writer** — a collaborator (equivalent to read/write access).
- **owner** — typically the site admin (equivalent to read/write access).

### Scopes

The scope element represents the entity that has this access level. There are five possible types of the `gAcl:scope` element:

- **user** — an e-mail address value, e.g "user@gmail.com".
- **group** — a Google Group e-mail address, e.g "group@domain.com".
- **domain** — a G Suite domain name, e.g "domain.com".
- **invite** — a user that has been invited to the site, but hasn't yet been added to the ACL for the site. (Not available if gdata 1.3 or below is specified.)
- **default** — There is only one possible scope of type "default", which has no value (e.g `<gAcl:scope type="default">`). This particular scope controls the access that any user has by default on a public site.

**Note**: Domains cannot have a `gAcl:role` value set to "owner" access, they can only be readers or writers.

#### About the "invite" scope.

The API returns the invite scope when you add one or more users to the ACL who don't already have a Google account. The API returns a URL with an embedded token that you must provide to your invited users in order to allow them to accept the invitation.

This invitation method allows you to invite non-Google users without prior knowledge of what email address they want to use. As long as users click on the invitation URL with the embedded token, they can sign up for access using whatever email address they want. Additionally, multiple users can potentially use this URL to accept the invitation, so this can be useful if inviting one user or a group of users.

**Note:** The "invite" scope is only available in gdata version 1.4 and above. This will not work if you are explicitly specifying 1.3 or below.

### Retrieving the ACL feed

The ACL feed can be used to control a site's sharing permissions and is accessible via the following URI:

```
https://sites.google.com/feeds/acl/site/domainName/siteName
```

| Feed parameter | Description |
| --- | --- |
| `domainName` | ' `site` ' or the domain of your G Suite hosted domain (e.g. `example.com`). |
| `siteName` | The webspace name of your site; found in the Site's URL (e.g. `myCoolSite`). |

It's worth noting that each entry in the [site feed](#SitesFeed) contains a link to this feed:

```
<link rel="http://schemas.google.com/acl/2007#accessControlList" type="application/atom+xml"
     href="https://sites.google.com/feeds/acl/site/domainName/siteName"/>
```

To retrieve a site's sharing permissions, send and HTTP `GET` to the ACL feed URI:

```
GET /feeds/acl/site/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
```

The server will respond with a `200 OK` and a feed of ACL entries:

```
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/"
    xmlns:gAcl="http://schemas.google.com/acl/2007" xmlns:sites="http://schemas.google.com/sites/2008"
    xmlns:gs="http://schemas.google.com/spreadsheets/2006" xmlns:dc="http://purl.org/dc/terms"
    xmlns:batch="http://schemas.google.com/gdata/batch" xmlns:gd="http://schemas.google.com/g/2005"
    xmlns:thr="http://purl.org/syndication/thread/1.0">
<id>https://sites.google.com/feeds/acl/site/domainName/siteName</id>
<updated>2009-12-03T22:01:05.963Z</updated>
<category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/acl/2007#accessRule"/>
<title>Acl</title>
<link rel="http://schemas.google.com/g/2005#feed" type="application/atom+xml"
    href="https://sites.google.com/feeds/acl/site/domainName/siteName"/>
<link rel="http://schemas.google.com/g/2005#post" type="application/atom+xml"
    href="https://sites.google.com/feeds/acl/site/domainName/siteName"/>
<link rel="self" type="application/atom+xml"
    href="https://sites.google.com/feeds/acl/site/domainName/siteName"/>
<generator version="1" uri="http://sites.google.com">Google Sites</generator>
<openSearch:startIndex>1</openSearch:startIndex>
<entry>
  <id>https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserA%40gmail.com</id>
  <updated>2009-12-03T22:01:05.963Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-03T22:01:05.963Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/acl/2007#accessRule"/>
  <link rel="self" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserA%40google.com"/>
  <link rel="edit" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserA%40google.com"/>
  <gAcl:scope type="user" value="userA@google.com"/>
  <gAcl:role value="owner"/>
</entry>
<entry>
  <id>https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserB%40gmail.com</id>
  <updated>2009-12-03T22:01:05.963Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-03T22:01:05.963Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/acl/2007#accessRule"/>
  <link rel="self" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserB%40gmail.com"/>
  <link rel="edit" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserB%40gmail.com"/>
  <gAcl:scope type="user" value="userB@gmail.com"/>
  <gAcl:role value="writer"/>
</entry>
<entry>
  <id>https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserC%40gmail.com</id>
  <updated>2009-12-03T22:01:05.963Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-03T22:01:05.963Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/acl/2007#accessRule"/>
  <link rel="self" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserC%40gmail.com"/>
  <link rel="edit" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3AuserC%40gmail.com"/>
  <gAcl:scope type="user" value="userC@gmail.com"/>
  <gAcl:role value="reader"/>
</entry>
...
</feed>
```

### Sharing a site

The ACL feed accepts `GET`, `POST` and `PUT` requests. To insert a new role into the ACL feed, simply issue a `POST` request to the ACL feed of the site.

**Note**: Certain sharing ACLs may only be possible if the domain is configured to allow such permissions (e.g. if sharing outside of the domain for G Suite domains is enabled, etc).

This example adds a new collaborator (writer) to the site:

```
POST /feeds/acl/site/domainName/siteName HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gAcl='http://schemas.google.com/acl/2007'>
  <category scheme='http://schemas.google.com/g/2005#kind'
    term='http://schemas.google.com/acl/2007#accessRule'/>
  <gAcl:role value='writer'/>
  <gAcl:scope type='user' value='new_writer@example.com'/>
</entry>
```

A `201 Created` and the new entry are returned on a successful insertion:

```
<entry>
  <id>https://sites.google.com/feeds/acl/site/domainName/siteName/user%3Anew_writer%40example.com</id>
  <updated>2009-12-03T22:01:05.963Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-03T22:01:05.963Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/acl/2007#accessRule"/>
  <link rel="self" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3Anew_writer%40example.com"/>
  <link rel="edit" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3Anew_writer%40example.com"/>
  <gAcl:role value='writer'/>
  <gAcl:scope type='user' value='new_writer@example.com'/>
</entry>
```

### Inviting users via the "invite" scope

If you add users who don't have Google accounts, the API returns a URL that you must provide to the users you wish to invite. After clicking on the URL, they will be able to gain access to the site by signing in with an existing account, or creating a new one.

A successful invitation returns a `201 Created` and a new entry that includes the URL you must pass to the user:

```
<entry>
  <id>https://sites.google.com/feeds/acl/site/domainName/siteName/user%3Anew_invite%40example.com</id>
  <updated>2009-12-03T22:01:05.963Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-12-03T22:01:05.963Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/acl/2007#accessRule"/>
  <link rel="http://schemas.google.com/sites/2008#invite" type="text/html"href="domainName/siteName?invite=inviteToken"/>
  <link rel="self" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3Anew_invite%40example.com"/>
  <link rel="edit" type="application/atom+xml"
      href="https://sites.google.com/feeds/acl/site/domainName/siteName/user%3Anew_invite%40example.com"/>
  <gAcl:role value='writer'/>
  <gAcl:scope type='invite' value='new_invite%40example.com'/>
</entry>
```

### Group and Domain level sharing

Similar to [sharing a site with a single user](#AclFeedPOST), you can share a site across a Google group or G Suite domain. The necessary `scope` values are listed below.

Sharing to a group email address:

```
<gAcl:scope type="group" value="group@example.com"/>
```

Sharing to an entire domain:

```
<gAcl:scope type="domain" value="example.com"/>
```

Sharing at the domain level is only supported for G Suite domains, and only for the domain that the site is hosted at. For example http://sites.google.com/a/domain1.com/siteA can only share the entire Site with domain1.com, not domain2.com. Sites that are not hosted on a G Suite domain (e.g. http://sites.google.com/site/siteB) cannot invite domains.

### Modifying sharing permissions

To update an ACL entry, modify the entry as necessary, and issue an HTTP `PUT` request to the entry's `edit` link, which is simply a `<link>` element, whose 'rel' attribute is set to 'edit'. For the previous example, that link is:

```
<link rel='edit' type='application/atom+xml'
    href='https://sites.google.com/feeds/acl/site/domainName/siteName/user%3Anew_writer%40example.com'/>
```

The snippet below changes `new_writer@gmail.com` 's role to 'reader':

```
PUT /feeds/acl/site/domainName/siteName/user%3Anew_writer%40example.com HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gAcl='http://schemas.google.com/acl/2007'>
  <category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/acl/2007#accessRule'/>
  <gAcl:role value='reader'/>
  <gAcl:scope type='user' value='new_writer@gmail.com'/>
</entry>
```

### Removing sharing permissions

To remove permissions for this user, issue a `DELETE` request to the same `edit` link that was used for the `PUT` request:

```
DELETE /feeds/acl/site/domainName/siteName/user%3Anew_writer%40example.com HTTP/1.1
Host: sites.google.com
GData-Version: 1.4
Authorization: <your authorization header here>
```

The server will respond with `200 OK`.

## Special Topics

### Retrieving a feed or entry again

If you want to retrieve a feed or entry that you've retrieved before, **you can improve efficiency** by telling the server to send the list or entry only if it has changed since the last time you retrieved it.

To do this sort of conditional retrieval, send an HTTP `GET` request that includes an HTTP `If-None-Match` header. In the header, specify the list's or entry's ETag, which you can find in the `<feed>` element's or `<entry>` element's `gd:etag` attribute.

An example using the site feed:

```
GET /feeds/site/domainName/myOtherTestSite/
GData-Version: 1.4
If-None-Match: W/"Ck8GQXk7fil7ImA9WxNSFk0."
```

When the server receives this request, it checks to see whether the item that you requested has the same ETag as the ETag you specified. If the ETags match, then the item hasn't changed, and the server returns either an HTTP 304 `Not Modified` status code or an HTTP `412 Precodition Failed` status code. Both of those status codes indicate that the item you've already retrieved is up-to-date.

If the ETags don't match, then the item has been modified since the last time you requested it, and the server returns the item.

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).

### Batch Processing

Batch requests gives your client the ability to execute multiple operations in one request, rather than submitting each operation individually.

The server will perform as many of the requested changes as possible and return status information that you can use to evaluate the success or failure of each operation. For more details about batch processing in Google Data API, see [Batch Processing with Google Data APIs](https://developers.google.com/gdata/docs/batch)

Every operation in a batch feed has an **<id>** element, except for insert operations. This element is the same as the request URL you would normally use when updating, deleting or querying the content feed. For example, if you are updating an edit, set the **<id>** to the `edit` link for the entry in question. It is used to identify the target entry. New entries do not have **<id>** elements as they have not been created yet. You can instead define a string value in **<batch:id>**, which will be returned in the server's response and used to look up the corresponding entry.

To make a batch request, construct a batch feed and send an HTTP `POST` to the feed's batch link:

```
<link rel="http://schemas.google.com/g/2005#batch" type="application/atom+xml"
    href="https://sites.google.com/feeds/content/site/siteName/batch"/>
```

The example below shows how to query, insert, update, and delete a webpage entry:

```
POST /feeds/content/site/siteName/batch HTTP/1.1
Host: sites.google.com
Accept: */*
If-Match: *
GData-Version: 1.4
Authorization: <your authorization header here>

<feed xmlns="http://www.w3.org/2005/Atom" xmlns:sites="http://schemas.google.com/sites/2008"
      xmlns:gd="http://schemas.google.com/g/2005" xmlns:batch='http://schemas.google.com/gdata/batch'>
  <entry>
    <id>https://sites.google.com/feeds/content/site/siteName/ENTRY_ID1</id>
    <batch:operation type="query"/>
  </entry>
  <entry>
    <batch:id>1</batch:id>
    <batch:operation type='insert'/>
    <category scheme="http://schemas.google.com/g/2005#kind"
        term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
    <title>New Webpage1</title>
    <content type="xhtml">
      <div xmlns="http://www.w3.org/1999/xhtml">HTML body goes here</div>
    </content>
  </entry>
  <entry gd:etag="&quot;YDgpeyI.&quot;">
    <id>https://sites.google.com/feeds/content/site/siteName/ENTRY_ID2</id>
    <batch:operation type='update'/>
    <category scheme="http://schemas.google.com/g/2005#kind"
        term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
    <title>Updated Title for Webpage2</title>
    ...
    <batch:operaation type="update"/>
  </entry>
  <entry gd:etag="&quot;YassseyI.&quot;">
    <id>https://sites.google.com/feeds/content/site/siteName/ENTRY_ID3</id>
    <batch:operation type='delete'/>
  </entry>
</feed>
```

The returned feed will contain one result entry for each operation:

```
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/"
    xmlns:sites="http://schemas.google.com/sites/2008" xmlns:gs="http://schemas.google.com/spreadsheets/2006"
    xmlns:dc="http://purl.org/dc/terms" xmlns:batch="http://schemas.google.com/gdata/batch"
    xmlns:gd="http://schemas.google.com/g/2005" xmlns:thr="http://purl.org/syndication/thread/1.0">
<id>https://sites.google.com/feeds/content/site/siteName/ENTRY_ID1</id>
<updated>2009-11-10T22:44:08.369Z</updated>
<title>Batch Feed</title>
<entry gd:etag="&quot;YDgpsdfeyI.&quot;">
  <id>https://sites.google.com/feeds/content/site/siteName/ENTRY_ID1</id>
  <published>2009-08-31T04:42:45.251Z</published>
  <updated>2009-10-25T22:46:13.729Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-10-25T22:46:13.671Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind"
      term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
  <title>Page Title</title>
  ...
  <batch:status code="200" reason="Success"/>
  <batch:operation type="query"/>
</entry>
<entry gd:etag="&quot;YDsseyI.&quot;">
  <id>https://sites.google.com/feeds/content/site/siteName/ENTRY_ID4</id>
  <published>2009-11-10T22:44:08.531Z</published>
  <updated>2009-11-10T22:44:08.560Z</updated>
  <app:edited xmlns:app="http://www.w3.org/2007/app">2009-11-10T22:44:08.531Z</app:edited>
  <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/sites/2008#webpage" label="webpage"/>
  <title>New Webpage1</title>
  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">
    <table cellspacing="0" class="sites-layout-name-one-column sites-layout-hbox">
      <tbody>
        <tr>
          <td class="sites-layout-tile sites-tile-name-content-1">
            <div>HTML body goes here</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</content>
...
<batch:id>1</batch:id>
<batch:status code="201" reason="Created"/>
<batch:operation type="insert"/>
</entry>
<entry gd:etag="&quot;YDkpeyI.&quot;">
  <id>https://sites.google.com/feeds/content/site/siteName/ENTRY_ID2</id>
  <updated>2009-11-10T22:44:09.296Z</updated>
  <title>Updated Title for Webpage2</title>
  ...
  <sites:pageName>updated-title-for-webpage2</sites:pageName>
  <sites:revision>5</sites:revision>
  <batch:status code="200" reason="Success"/>
  <batch:operation type="update"/>
</entry>
<entry>
  <id>https://sites.google.com/feeds/content/site/siteName/ENTRY_ID3</id>
  <title>Deleted</title>
  <content>Deleted</content>
  <batch:status code="200" reason="Success"/>
  <batch:operation type="delete"/>
</entry>
</feed>
```
