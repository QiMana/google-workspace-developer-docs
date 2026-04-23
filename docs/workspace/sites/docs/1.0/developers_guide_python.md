---
source: https://developers.google.com/workspace/sites/docs/1.0/developers_guide_python
root: workspace
fetched_at: 2026-04-23T15:31:41.793Z
---

# Python Guide

## Page Summary

- The Google Sites Data API allows programmatic interaction with Google Sites, enabling developers to access, publish, and modify content, as well as manage recent activity and revision history.
- This document focuses on using the Python client library with the classic Google Sites API, which relies on now-deprecated authentication methods like OAuth 1.0, AuthSub, and ClientLogin, and developers should consider using more recent APIs.
- The Python client library, after meeting requirements like Python 2.2+ and specific modules, facilitates actions such as creating and copying sites, uploading files, updating and deleting content, and managing sharing permissions through ACLs.
- Site content can be retrieved, updated, and managed through the Content Feed and specific content types such as webpages, file cabinets, and listpages are supported.
- Attachments can be uploaded, downloaded, and updated using this API, and various authentication methods are available to get the proper permissions for a given user depending on the type of application they are building.

**Important:** This document was written before 2012. The auth options described in this document (OAuth 1.0, AuthSub, and ClientLogin) have been [officially deprecated](http://googledevelopers.blogspot.com/2012/04/changes-to-deprecation-policies-and-api.html) as of April 20, 2012 and are no longer available. We encourage you to migrate to [OAuth 2.0](https://developers.google.com/identity/protocols/OAuth2) as soon as possible.

The Google Sites Data API allows client applications to access, publish, and modify content within a [Google Site](http://sites.google.com/). Your client application can also request a list of recent activity, fetch revision history, and download attachments.

In addition to providing some background on the capabilities of the Sites Data API, this guide provides examples for interacting with the API using the [Python client library](http://code.google.com/p/gdata-python-client/). For help setting up the client library, see [Getting Started with the Google Data Python Client Library](https://developers.google.com/gdata/articles/python_client_lib). If you're interested in understanding more about the underlying protocol used by the Python client library to interact with the classic Sites API, please see the [protocol guide](https://developers.google.com/workspace/sites/docs/1.0/developers_guide_protocol).

## Audience

This document is intended for developers who want to write client applications that interact with Google Sites using the [Google Data Python Client Library](http://code.google.com/p/gdata-python-client/).

## Getting started

To use the Python client library, you'll need Python 2.2+ and the modules listed on the [DependencyModules](http://code.google.com/p/gdata-python-client/wiki/DependencyModules) wiki page. After [downloading the client library](http://code.google.com/p/gdata-python-client/downloads/list), see [Getting Started with the Google Data Python Library](https://developers.google.com/gdata/articles/python_client_lib) for help installing and using the client.

### Running the sample

A full working sample is located in the `samples/sites` subdirectory of the project's Mercurial repository ([/samples/sites/sites\_example.py](http://code.google.com/p/gdata-python-client/source/browse/samples/sites/sites_example.py)).

Run the example as follows:

```
python sites_example.py
# or
python sites_example.py --site [sitename] --domain [domain or "site"] --debug [prints debug info if set]
```

If the required flags are not provided, the app will prompt you to input those values. The sample allows the user to perform a number of operations which demonstrate how to use the classic Sites API. As such, you'll need to authenticate to perform certain operations (e.g. modifying content). The program will also prompt you to authenticate via [AuthSub](https://developers.google.com/gdata/auth#authsub), [OAuth](https://developers.google.com/gdata/auth#OAuth), or [ClientLogin](https://developers.google.com/gdata/auth#ClientLogin).

To include the examples in this guide into your own code, you'll need the following `import` statements:

```
import atom.data
import gdata.sites.client
import gdata.sites.data
```

You will also need to setup a `SitesClient` object, which represents a client connection to the classic Sites API. Pass in your application's name and the webspace name of the Site (from its URL):

```
client = gdata.sites.client.SitesClient(source='yourCo-yourAppName-v1', site='yourSiteName')
```

To work with a Site that is hosted on a G Suite domain, set the domain using the `domain` parameter:

```
client = gdata.sites.client.SitesClient(source='yourCo-yourAppName-v1', site='yourSiteName', domain='example.com')
```

In the above snippets, the `source` argument is optional but is recommended for logging purposes. It should follow the format: `company-applicationname-version`

**Note**: The rest of the guide assumes you created a `SitesClient` object in the variable `client`.

## Authenticating to the classic Sites API

The Python client library can be used to work with either public or private feeds. The Sites Data API provides access to private and public feeds, depending on a Site's permissions and the operation you're trying to perform. For example, you may be able to read the content feed of a public Site but not make updates to it - something that requires an authenticated client. This can be done via [ClientLogin](#AuthClientLogin) username/password authentication, [AuthSub](#AuthAuthSub), or [OAuth](#AuthOAuth).

Please see the [Google Data APIs Authentication Overview](https://developers.google.com/gdata/auth) for more information on AuthSub, OAuth, and ClientLogin.

### AuthSub for web applications

[AuthSub Authentication for Web Applications](https://developers.google.com/accounts/docs/AuthSub) should be used by client applications which need to authenticate their users to Google or G Suite accounts. The operator does not need access to the username and password for the Google Sites user - only an AuthSub token is required.

*View instructions for incorporating AuthSub into your web application*

#### Request a single-use token

When the user first visits your application, they need to authenticate. Typically, developers print some text and a link directing the user to the AuthSub approval page to authenticate the user and request access to their documents. The Google Data Python client library provides a function, `generate_auth_sub_url()` to generate this URL. The code below sets up a link to the [AuthSubRequest](https://developers.google.com/accounts/docs/AuthSub#AuthSubRequest) page.

```
import gdata.gauth

def GetAuthSubUrl():
  next = 'http://www.example.com/myapp.py'
  scopes = ['https://sites.google.com/feeds/']
  secure = True
  session = True
  return gdata.gauth.generate_auth_sub_url(next, scopes, secure=secure, session=session)

print '<a href="%s">Login to your Google account</a>' % GetAuthSubUrl()
```

If you want to authenticate users on a G Suite hosted domain, pass in the domain name to `generate_auth_sub_url()`:

```
def GetAuthSubUrl():
  domain = 'example.com'
  next = 'http://www.example.com/myapp.py'
  scopes = ['https://sites.google.com/feeds/']
  secure = True
  session = True
  return gdata.gauth.generate_auth_sub_url(next, scopes, secure=secure, session=session, domain=domain)
```

The `generate_auth_sub_url()` method takes several parameters (corresponding to the query parameters used by the [AuthSubRequest](https://developers.google.com/accounts/docs/AuthSub#AuthSubRequest) handler):

- the **next** URL — URL that Google will redirect to after the user logs into their account and grants access; `http://www.example.com/myapp.py` in the example above
- the **scope** — `https://sites.google.com/feeds/`
- **secure**, a boolean to indicate whether the token will be used in [secure and registered mode](https://developers.google.com/accounts/docs/AuthSub#signingrequests) or not; `True` in the example above
- **session**, a second boolean to indicate whether the single-use token will later be exchanged for a session token or not; `True` in the example above

#### Upgrading to a session token

See [Using AuthSub with the Google Data API Client Libraries](https://developers.google.com/gdata/authsub#request-session-token).

#### Retrieving information about a session token

See [Using AuthSub with the Google Data API Client Libraries](https://developers.google.com/gdata/authsub#TokenInfo).

#### Revoking a session token

See [Using AuthSub with the Google Data API Client Libraries](https://developers.google.com/gdata/authsub#revoke-token).

**Tip**: Once your application has successfully acquired a long lived sessions token, store that token in your database to recall for later use. There's no need to send the user back to AuthSub on every run of your application. Use `client.auth_token = gdata.gauth.AuthSubToken(TOKEN_STR)` to set an existing token on the client.

### OAuth for web or installed/mobile applications

[OAuth](https://developers.google.com/accounts/docs/OAuth) can be used as an alternative to AuthSub, and is intended for web applications. OAuth is similar to using the [secure and registered mode](https://developers.google.com/accounts/docs/AuthSub#signingrequests) of AuthSub in that all data requests must be digitally signed and you must register your domain.

*View instructions for incorporating OAuth into your installed application*

#### Fetching a request token

See [Using OAuth with the Google Data API Client Libraries](https://developers.google.com/gdata/oauth#OAuthRequestToken).

#### Authorizing a request token

See [Using OAuth with the Google Data API Client Libraries](https://developers.google.com/gdata/oauth#OAuthAuthorizeToken).

#### Upgrading to an access token

See [Using OAuth with the Google Data API Client Libraries](https://developers.google.com/gdata/oauth#OAuthAuthorizeToken).

**Tip**: Once your application has successfully acquired an OAuth access token, store that token in your database to recall for later use. There's no need to send the user back through OAuth on every run of your application. Use `client.auth_token = gdata.oauth.OAuthToken(TOKEN_STR, TOKEN_SECRET)` to set an existing token on the client.

### ClientLogin for installed/mobile applications

[ClientLogin](https://developers.google.com/accounts/docs/AuthForInstalledApps) should be used by installed or mobile applications which need to authenticate their users to Google accounts. On first run, your application prompts the user for their username/password. On subsequent requests, an authentication token is referenced.

*View instructions for incorporating ClientLogin into your installed application*

To use [ClientLogin](https://developers.google.com/accounts/docs/AuthForInstalledApps), invoke the [`ClientLogin()`](http://gdata-python-client.googlecode.com/hg/pydocs/gdata.client.html#GDClient-ClientLogin) method of `SitesClient` object, which is inherited from [`GDClient`](http://gdata-python-client.googlecode.com/hg/pydocs/gdata.client.html#GDClient). Specify the email address and password of the user on whose behalf your client is making requests. For example:

```
client = gdata.sites.client.SitesClient(source='yourCo-yourAppName-v1')
client.ClientLogin('user@gmail.com', 'pa$$word', client.source);
```

**Tip**: Once your application has successfully authenticated the user for the first time, store the auth token in your database to recall for later use. There's no need to prompt the user for their password on every run of your application. See [Recalling an auth token](https://developers.google.com/gdata/clientlogin#RecallAuthToken) for more information.

For more information on using ClientLogin in your Python applications, see the [Using ClientLogin with the Google Data API Client Libraries](https://developers.google.com/gdata/clientlogin).

## Site Feed

The site feed can be used to list the Google Sites a user owns or has viewing permissions for. It can also be used to modify the name of an existing site. Lastly, for G Suite domains, it can also be used to create and/or copy an entire site.

### Listing sites

To list the sites a user has access to, use the client's `GetSiteFeed()` method. The method takes an optional argument, `uri`, which you may use to specify an alternate site feed URI. By default, the `GetSiteFeed()` uses the site name and domain set on the client object. See the [Getting Started](#GettingStarted) section for more information on setting these values on your client object.

Here is an example of fetching the authenticated user's list of sites:

```
feed = client.GetSiteFeed()

for entry in feed.entry:
  print '%s (%s)' % (entry.title.text, entry.site_name.text)
  if entry.summary.text:
    print 'description: ' + entry.summary.text
  if entry.FindSourceLink():
    print 'this site was copied from site: ' + entry.FindSourceLink()
  print 'acl feed: %s\n' % entry.FindAclLink()
  print 'theme: ' + entry.theme.text
```

The above snippet prints the site's title, site name, site it was copied from, and its acl feed URI.

### Creating new sites

**Note**: This feature is only available to G Suite domains.

New sites can be provisioned by calling the library's `CreateSite()` method. Similar to the [`GetSiteFeed()`](#SiteFeedGET) helper, `CreateSite()` also accepts an optional argument, `uri`, which you may use to specify an alternate site feed URI (in the case of creating the site under a different domain other than the one that's set on your `SitesClient` object).

Here is an example of creating a new site with the theme 'slate' and providing a title and (optional) description:

```
client.domain = 'example2.com'  # demonstrates creating a site under a different domain.

entry = client.CreateSite('Title For My Site', description='Site to hold precious memories', theme='slate')
print 'Site created! View it at: ' + entry.GetAlternateLink().href
```

The above request would create a new site under the G Suite domain `example2.com`. Thus, the site's URL would be https://sites.google.com/a/example2.com/title-for-my-site.

If the site is successfully created, the server will respond with a `gdata.sites.data.SiteEntry` object, populated with elements added by the server: a link to the site, a link to the site's acl feed, the site name, the title, summary, and so forth.

### Copying a site

**Note**: This feature is only available to G Suite domains.

`CreateSite()` can also be used to copy an existing site. To do this, pass in the `source_site` keyword argument. Any site that's been copied will have this link, which is accessible via `entry.FindSourceLink()`. Here is an example of duplicating the site created in the [Creating new sites](#SiteFeedPOST) section:

```
copied_site = client.CreateSite('Copy of Title For My Site', description='My Copy', source_site=entry.FindSourceLink())
print 'Site copied! View it at: ' + copied_site.GetAlternateLink().href
```

Important points:

- Only sites and site templates that the authenticated user owns can be copied.
- A site template can also be copied. A site is a template if the "Publish this site as a template" setting is checked in the Google Sites settings page.
- You can copy a site from another domain, pending you are listed as an owner on the source site.

### Updating a site's metadata

To update the title or summary of a site, you'll need a `SiteEntry` containing the site in question. This example uses the `GetEntry()` method to first fetch a `SiteEntry`, and then change its title, description and category tag:

```
uri = 'https://sites.google.com/feeds/site/example2.com/title-for-my-site'
site_entry = client.GetEntry(uri, desired_class=gdata.sites.data.SiteEntry)

site_entry.title.text = 'Better Title'
site_entry.summary.text = 'Better Description'
category_name = 'My Category'
category = atom.data.Category(
    scheme=gdata.sites.data.TAG_KIND_TERM,
    term=category_name)
site_entry.category.append(category)
updated_site_entry = client.Update(site_entry)

# To force the update, even if you do not have the latest changes to the entry:
# updated_site_entry = client.Update(site_entry, force=True)
```

### Fetching the Activity Feed

**Note**: Access to this feed requires that you are a collaborator or owner of the Site. Your client must authenticate by using an AuthSub, OAuth, or ClientLogin token. See [Authenticating to the Sites service](#Auth).

You can fetch a Site's recent activity (changes) by fetching the activity feed. The lib's `GetActivityFeed()` method provides access to this feed:

```
print "Fetching activity feed of '%s'...\n" % client.site
feed = client.GetActivityFeed()

for entry in feed.entry:
  print '%s [%s on %s]' % (entry.title.text, entry.Kind(), entry.updated.text)
```

Calling `GetActivityFeed()` returns a `gdata.sites.data.ActivityFeed` object containing a list of `gdata.sites.data.ActivityEntry`. Each activity entry contains information on a change that was made to the Site.

### Fetching Revision History

**Note**: Access to this feed requires that you are a collaborator or owner of the Site. Your client must authenticate by using an AuthSub, OAuth, or ClientLogin token. See [Authenticating to the Sites service](#Auth).

The revision feed provides information on the revision history for any content entry. The `GetRevisionFeed()` method can be used to fetch the revisions for a given content entry. The method takes an optional `uri` parameter that accepts a `gdata.sites.data.ContentEntry`, a full URI of a content entry, or a content entry id.

This example queries the content feed, and fetches the revision feed for the first content entry:

```
print "Fetching content feed of '%s'...\n" % client.site
content_feed = client.GetContentFeed()
content_entry = content_feed.entry[0]

print "Fetching revision feed of '%s'...\n" % content_entry.title.text
revision_feed = client.GetRevisionFeed(content_entry)

for entry in revision_feed.entry:
  print entry.title.text
  print ' new version on:\t%s' % entry.updated.text
  print ' view changes:\t%s' % entry.GetAlternateLink().href
  print ' current version:\t%s...\n' % str(entry.content.html)[0:100]
```

Calling `GetRevisionFeed()` returns a `gdata.sites.data.RevisionFeed` object containing a list of `gdata.sites.data.RevisionEntry`. Each revision entry contains information such as the content at that revision, the version number, and when the new version was created.

## Content feed

### Retrieving the content feed

**Note**: The content feed may or may not require authentication; depending on the Site's sharing permissions. If the Site is non-public, your client must authenticate by using an AuthSub, OAuth, or ClientLogin token. See [Authenticating to the Sites service](#Auth).

The content feed returns a Site's latest content. It can be accessed by calling the lib's `GetContentFeed()` method, which takes an optional `uri` string parameter for passing a customized query.

Here is an example of fetching the entire content feed and printing out some interesting elements:

```
print "Fetching content feed of '%s'...\n" % client.site
feed = client.GetContentFeed()

for entry in feed.entry:
  print '%s [%s]' % (entry.title.text, entry.Kind())

  # Common properties of all entry kinds.
  print ' content entry id: ' + entry.GetNodeId()
  print ' revision:\t%s' % entry.revision.text
  print ' updated:\t%s' % entry.updated.text

  if entry.page_name:
    print ' page name:\t%s' % entry.page_name.text

  if entry.content:
    print ' content\t%s...' % str(entry.content.html)[0:100]

  # Subpages/items will have a parent link.
  parent_link = entry.FindParentLink()
  if parent_link:
    print ' parent link:\t%s' % parent_link

  # The alternate link is the URL pointing to Google Sites.
  if entry.GetAlternateLink():
    print ' view in Sites:\t%s' % entry.GetAlternateLink().href

  # If this entry is a filecabinet, announcementpage, etc., it will have a feed of children.
  if entry.feed_link:
    print ' feed of items:\t%s' % entry.feed_link.href

  print
```

**Tip**: The `entry.Kind()` can be used to determine an entry's type.

The resulting `feed` object is a `gdata.sites.data.ContentFeed` containing a list of `gdata.sites.data.ContentEntry`. Each entry represents a different page/item within the user's Site and has elements specific to the kind of entry it is. See the [sample application](http://code.google.com/p/gdata-python-client/source/browse/samples/sites/sites_example.py) for a better idea of some of the properties available in each entry kind.

### Content feed query examples

You can search the content feed using some of [the standard Google Data API query parameters](https://developers.google.com/workspace/sites/docs/1.0/reference#Parameters) and those specific to the classic Sites API. For more detailed information and a full list of supported parameters, see the [Reference Guide](https://developers.google.com/workspace/sites/docs/1.0/reference#feed_Content).

**Note**: The examples in this section make use of the `gdata.sites.client.MakeContentFeedUri()` helper method for constructing the base URI of the content feed.

#### Retrieving specific entry kinds

To fetch only a particular type of entry, use the `kind` parameter. As an example, this snippet returns just `attachment` entries:

```
kind = 'webpage'

print 'Fetching only %s entries' % kind
uri = '%s?kind=%s' % (client.MakeContentFeedUri(), kind)
feed = client.GetContentFeed(uri=uri)
```

To return more than one type, separate each `kind` with a comma. For example, this snippet returns `filecabinet` and `listpage` entries:

```
kind = ','.join(['filecabinet', 'listpage'])

print 'Fetching only %s entries' % kind
uri = '%s?kind=%s' % (client.MakeContentFeedUri(), kind)
feed = client.GetContentFeed(uri=uri)
```

#### Retrieving a page by path

If you know the relative path of a page within the Google Site, you can use the `path` parameter to fetch that particular page. This example would return the page located at `http://sites.google.com/domainName/siteName/path/to/the/page`:

```
path = '/path/to/the/page'

print 'Fetching page by its path: ' + path
uri = '%s?path=%s' % (client.MakeContentFeedUri(), path)
feed = client.GetContentFeed(uri=uri)
```

#### Retrieving all entries under a parent page

If you know the content entry id of a page (e.g. "1234567890" in the example below), you can use the `parent` parameter to fetch all of its child entries (if any):

```
parent = '1234567890'

print 'Fetching all children of parent entry: ' + parent
uri = '%s?parent=%s' % (client.MakeContentFeedUri(), parent)
feed = client.GetContentFeed(uri=uri)
```

For additional parameters, see the [Reference Guide](https://developers.google.com/workspace/sites/docs/1.0/reference#Parameters).

---

### Creating Content

**Note:** Before creating content for a site, ensure that you have set your site in the client.  
`client.site = "siteName"`

New content (webpages, listpages, filecabinets, announcementpages, etc.) can be created by using `CreatePage()`. The first argument to this method should be the kind of page to create, followed by the title, and its HTML content.

For a list of supported node types, see the `kind` parameter in the [Reference Guide](https://developers.google.com/workspace/sites/docs/1.0/reference#feed_Content).

#### Creating new items / pages

This example creates a new `webpage` under the top-level, includes some XHTML for the page body, and sets the heading title to 'New WebPage Title':

```
entry = client.CreatePage('webpage', 'New WebPage Title', html='<b>HTML content</b>')
print 'Created. View it at: %s' % entry.GetAlternateLink().href
```

If the request is successful, `entry` will contain a copy of the entry created on the server, as a `gdata.sites.gdata.ContentEntry`.

To create more complex entry kind that are populated on creation (e.g. a `listpage` with column headings), you'll need to create the `gdata.sites.data.ContentEntry` manually, fill in the properties of interest, and call `client.Post()`.

#### Creating items/pages under custom URL paths

By default, the previous example would be created under the URL `http://sites.google.com/domainName/siteName/new-webpage-title` and have a page heading of 'New Webpage Title'. That is, the title is normalized to `new-webpage-title` for the URL. To customize a page's URL path, you can set the `page_name` property on the content entry. The `CreatePage()` helper provides this as an optional keyword argument.

This example creates a new `filecabinet` page with a heading of 'File Storage', but creates the page under the URL `http://sites.google.com/domainName/siteName/files` (instead of `http://sites.google.com/domainName/siteName/file-storage`) by specifying the `page_name` property.

```
entry = client.CreatePage('filecabinet', 'File Storage', html='<b>HTML content</b>', page_name='files')
print 'Created. View it at: ' + entry.GetAlternateLink().href
```

The server uses the following precedence rules for naming a page's URL path:

1. `page_name`, if present. Must satisfy `a-z, A-Z, 0-9, -, _`.
2. `title`, must not be null if page name is not present. Normalization is to trim + collapse whitespace to '-' and remove chars not matching `a-z, A-Z, 0-9, -, _`.

#### Creating subpages

To create subpages (children) under a parent page, use `CreatePage()` 's `parent` keyword argument. The `parent` can either be a `gdata.sites.gdata.ContentEntry` or a string representing the content's entry's full self id.

This example queries the content feed for `announcementpage` s and creates a new `announcement` under the first one that is found:

```
uri = '%s?kind=%s' % (client.MakeContentFeedUri(), 'announcementpage')
feed = client.GetContentFeed(uri=uri)

entry = client.CreatePage('announcement', 'Party!!', html='My place, this weekend', parent=feed.entry[0])
print 'Posted!'
```

### Uploading files

Just as in Google Sites, the API supports attachment uploads to a file cabinet page or parent page. Attachments must be uploaded to a parent page. Therefore, you must set a parent link on the `ContentEntry` you're trying to upload. See [Creating subpages](#CreatingSubpages) for more information.

The client library's `UploadAttachment()` method provides the interface for uploading attachments.

#### Uploading attachments

This example uploads a PDF file to the first `filecabinet` found in the user's content feed. The attachment is created with a title of 'New Employee Handbook' and a (optional) description, 'HR packet'.

```
uri = '%s?kind=%s' % (client.MakeContentFeedUri(),'filecabinet')
feed = client.GetContentFeed(uri=uri)

attachment = client.UploadAttachment('/path/to/file.pdf', feed.entry[0], content_type='application/pdf',
                                     title='New Employee Handbook', description='HR Packet')
print 'Uploaded. View it at: %s' % attachment.GetAlternateLink().href
```

If the upload is successful, `attachment` will contain a copy of the created attachment on the server.

#### Uploading an attachment to a folder

Filecabinets in Google Sites support folders. The `UploadAttachment()` provides an additional keyword argument, `folder_name` that you can use to upload an attachment into a `filecabinet` folder. Simply specify that folder's name:

```
import gdata.data

ms = gdata.data.MediaSource(file_path='/path/to/file.pdf', content_type='application/pdf')
attachment = client.UploadAttachment(ms, feed.entry[0], title='New Employee Handbook',
                                     description='HR Packet', folder_name='My Folder')
```

Notice that this example passes a `gdata.data.MediaSource` object to `UploadAttachment()` instead of a filepath. It also does not pass a content type. Instead, the content type is specified on the MediaSource object.

### Web attachments

Web attachments are special kinds of attachments. Essentially, they're links to other files on the web that you can add to your `filecabinet` listings. This feature is analogous to the ' *Add file by URL* ' upload method in the Google Sites UI.

**Note**: Web attachments can only be created under a `filecabinet`. They cannot be uploaded to other types of pages.

This example creates a web attachment under the first `filecabinet` found in the user's content feed. Its title and (optional) description are set to 'GoogleLogo' and 'nice colors', respectively.

```
uri = '%s?kind=%s' % (client.MakeContentFeedUri(),'filecabinet')
feed = client.GetContentFeed(uri=uri)

parent_entry = feed.entry[0]
image_url = 'http://www.google.com/images/logo.gif'
web_attachment = client.CreateWebAttachment(image_url, 'image/gif', 'GoogleLogo',
                                            parent_entry, description='nice colors')

print 'Created!'
```

The call creates a link pointing to the image at 'http://www.google.com/images/logo.gif' in the `filecabinet`.

---

### Updating Content

#### Updating a page's metadata and/or html content

The metadata (title, pageName, etc.) and page content of any entry kind can be edited by using the client's `Update()` method.

Below is an example of updating a `listpage` with the following changes:

- The title is modified to 'Updated Title'
- The page's HTML content is updated to 'Updated HTML Content'
- The first column heading of the list is changed to "Owner"

```
uri = '%s?kind=%s' % (client.MakeContentFeedUri(),'listpage')
feed = client.GetContentFeed(uri=uri)

old_entry = feed.entry[0]

# Update the listpage's title, html content, and first column's name.
old_entry.title.text = 'Updated Title'
old_entry.content.html = 'Updated HTML Content'
old_entry.data.column[0].name = 'Owner'

# You can also change the page's webspace page name on an update.
# old_entry.page_name = 'new-page-path'

updated_entry = client.Update(old_entry)
print 'List page updated!'
```

#### Replacing an attachment's content + metadata

You can replace an attachment's file content by creating a new `MediaSource` object with the new file content and calling the client's `Update()` method. The attachment's metadata (such as title and description) can also be updated, or simply just the metadata. This example demonstrates updating file content and metadata at the same time:

```
import gdata.data

# Load the replacement content in a MediaSource. Also change the attachment's title and description.
ms = gdata.data.MediaSource(file_path='/path/to/replacementContent.doc', content_type='application/msword')
existing_attachment.title.text = 'Updated Document Title'
existing_attachment.summary.text = 'version 2.0'

updated_attachment = client.Update(existing_attachment, media_source=ms)
print "Attachment '%s' changed to '%s'" % (existing_attachment.title.text, updated_attachment.title.text)
```

---

### Deleting Content

To remove a page or item from a Google Site, first retrieve the content entry, then call the client's `Delete()` method.

```
client.Delete(content_entry)
```

You can also pass the `Delete()` method the content entry's `edit` link and/or force the deletion:

```
# force=True sets the If-Match: * header instead of using the entry's ETag.
client.Delete(content_entry.GetEditLink().href, force=True)
```

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).

---

### Downloading Attachments

Each `attachment` entry contains a content `src` link which can be used to download the file contents. The Sites client contains a helper method for accessing and downloading the file from this link: `DownloadAttachment()`. It accepts a `gdata.sites.data.ContentEntry` or download URI for its first argument, and a filepath to save the attachment to as the second.

This example fetches a particular attachment entry (by querying it's `self` link) and downloads the file to the specified path:

```
uri = 'https://sites.google.com/feeds/content/site/siteName/1234567890'
attachment = client.GetEntry(uri, desired_class=gdata.sites.data.ContentEntry)

print "Downloading '%s', a %s file" % (attachment.title.text, attachment.content.type)
client.DownloadAttachment(attachment, '/path/to/save/test.pdf')

print 'Downloaded!'
```

It is up to the app developer to specify a file extension that makes sense for the attachment's content type. The content type can be found in `entry.content.type`.

In some cases you may not be able to download the file to disk (e.g. if your app is running in Google App Engine). For these situations, use `_GetFileContent()` to fetch the file content and store it in memory.

This example download's an attachment to memory.

```
try:
  file_contents = client._GetFileContent(attachment.content.src)
  # TODO: Do something with the file contents
except gdata.client.RequestError, e:
  raise e
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

The scope element represents the entity that has this access level. There are four possible types of the `gAcl:scope` element:

- **user** — an e-mail address value, e.g "user@gmail.com".
- **group** — a Google Group e-mail address, e.g "group@domain.com".
- **domain** — a G Suite domain name, e.g "domain.com".
- **default** — There is only one possible scope of type "default", which has no value (e.g `<gAcl:scope type="default">`). This particular scope controls the access that any user has by default on a public site.

**Note**: Domains cannot have a `gAcl:role` value set to "owner" access, they can only be readers or writers.

### Retrieving the ACL feed

The ACL feed can be used to control a site's sharing permissions and can be fetched using the `GetAclFeed()` method.

The following example fetches the ACL feed for the site currently set on the `SitesClient` object, and prints out the permission entries:

```
print "Fetching acl permissions of site '%s'...\n" % client.site

feed = client.GetAclFeed()
for entry in feed.entry:
  print '%s (%s) - %s' % (entry.scope.value, entry.scope.type, entry.role.value)
```

After a successful query, `feed` will be a `gdata.sites.data.AclFeed` object containing a listing of `gdata.sites.data.AclEntry`.

If you're working with entries in the [SiteFeed](#SiteFeed), each `SiteEntry` contains a link to its ACL feed. For example, this snippet fetches the first site in the user's Site feed and queries its ACL feed:

```
feed = client.GetSiteFeed()
site_entry = feed.entry[0]

print "Fetching acl permissions of site '%s'...\n" % site_entry.site_name.text
feed = client.GetAclFeed(uri=site_entry.FindAclLink())
```

### Sharing a site

**Note**: Certain sharing ACLs may only be possible if the domain is configured to allow such permissions (e.g. if sharing outside of the domain for G Suite domains is enabled, etc).

To share a Google Site using the API, create an `gdata.sites.gdata.AclEntry` with the desired `gdata.acl.data.AclScope` and `gdata.acl.data.AclRole` values. See the [ACL feed Overview](#AclFeedOverview) section for the possible [`AclScope`](#ACLScopes) and [`AclRoles`](#ACLRoles) values.

This example grants read permissions on the Site to user 'user@example.com':

```
import gdata.acl.data

scope = gdata.acl.data.AclScope(value='user@example.com', type='user')
role = gdata.acl.data.AclRole(value='reader')
acl = gdata.sites.gdata.AclEntry(scope=scope, role=role)

acl_entry = client.Post(acl, client.MakeAclFeedUri())
print "%s %s added as a %s" % (acl_entry.scope.type, acl_entry.scope.value, acl_entry.role.value)
```

### Group and Domain level sharing

Similar to [sharing a site with a single user](#AclFeedPOST), you can share a site across a Google group or G Suite domain. The necessary `scope` values are listed below.

Sharing to a group email address:

```
scope = gdata.acl.data.AclScope(value='group_name@example.com', type='group')
```

Sharing to an entire domain:

```
scope = gdata.acl.data.AclScope(value='example.com', type='domain')
```

Sharing at the domain level is only supported for G Suite domains, and only for the domain that the site is hosted at. For example http://sites.google.com/a/domain1.com/siteA can only share the entire Site with domain1.com, not domain2.com. Sites that are not hosted on a G Suite domain (e.g. http://sites.google.com/site/siteB) cannot invite domains.

### Modifying sharing permissions

To an existing sharing permission on a Site, first fetch the `AclEntry` in question, modify the permission as desired, and then call the client's `Update()` method to modify the ACL on the server.

This example modifies our previous `acl_entry` from the [Sharing a site](#AclFeedPOST) section, by updating 'user@example.com' to be a writer (collaborator):

```
acl_entry.role.value = 'writer'
updated_acl = client.Update(acl_entry)

# To force the update, even if you do not have the latest changes to the entry:
# updated_acl = client.Update(acl_entrys, force=True)
```

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).

### Removing sharing permissions

To remove a sharing permission, first retrieve the `AclEntry`, then call the client's `Delete()` method.

```
client.Delete(acl_entry)
```

You can also pass the `Delete()` method the acl entry's `edit` link and/or force the deletion:

```
# force=True sets the If-Match: * header instead of using the entry's ETag.
client.Delete(acl_entry.GetEditLink().href, force=True)
```

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).

## Special Topics

### Retrieving a feed or entry again

If you want to retrieve a feed or entry that you've retrieved before, **you can improve efficiency** by telling the server to send the list or entry only if it has changed since the last time you retrieved it.

To do this sort of conditional retrieval, pass in an ETag value to the `GetEntry()`. For example, if you had an existing `entry` object:

```
import gdata.client

try:
  entry = client.GetEntry(entry.GetSelfLink().href, desired_class=gdata.sites.data.ContentEntry, etag=entry.etag)
except gdata.client.NotModified, error:
  print 'You have the latest copy of this entry'
  print error
```

If `GetEntry()` throws the `gdata.client.NotModified` exception, the entry's ETag matches the version on the server, meaning you have the most up-to-date copy. However, if another client/user has made modifications, the new entry will be returned in `entry` and no exception will be thrown.

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).
