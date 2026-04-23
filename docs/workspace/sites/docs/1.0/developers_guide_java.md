---
source: https://developers.google.com/workspace/sites/docs/1.0/developers_guide_java
root: workspace
fetched_at: 2026-04-23T15:31:40.475Z
---

# Java Language Guide

## Page Summary

- This guide outlines how to interact with Google Sites content programmatically using the deprecated Google Sites Data API and the Java client library, focusing on accessing, publishing, and modifying site content.
- The document primarily targets developers utilizing the Google Data Java Client Library to build applications that need to integrate with Google Sites, emphasizing the setup, project initialization, and usage of the Java client library.
- The guide demonstrates a wide range of operations, including managing site feeds, copying and creating sites, updating metadata, mapping web addresses, handling activity and revision feeds, creating and modifying various content types (pages, lists, attachments), and managing access permissions.
- All authentication methods mentioned (OAuth 1.0, AuthSub, and ClientLogin) within this document are deprecated and no longer functional, and developers should migrate to OAuth 2.0 for any new projects.
- It is crucial to note that certain functionalities, like creating or copying sites, are exclusive to G Suite accounts, and specific operations, such as web address mapping or downloading attachments, are subject to access rights and sharing permissions.

**Important:** This document was written before 2012. The auth options described in this document (OAuth 1.0, AuthSub, and ClientLogin) have been [officially deprecated](http://googledevelopers.blogspot.com/2012/04/changes-to-deprecation-policies-and-api.html) as of April 20, 2012 and are no longer available. We encourage you to migrate to [OAuth 2.0](https://developers.google.com/identity/protocols/OAuth2) as soon as possible.

The Google Sites Data API allows client applications to access, publish, and modify content within a [Google Site](http://sites.google.com/). Your client application can also request a list of recent activity, fetch revision history, and download attachments.

In addition to providing some background on the capabilities of the Sites Data API, this guide provides examples for interacting with the API using the [Java client library](https://github.com/google/gdata-java-client). For help setting up the client library, see [Getting Started with the Google Data Java Client Library](https://developers.google.com/gdata/articles/java_client_lib). If you're interested in understanding more about the underlying protocol used by the Java client library to interact with the classic Sites API, please see the [protocol guide](./developers_guide_protocol.md).

## Audience

This document is intended for developers who want to write client applications that interact with Google Sites using the [Google Data Java Client Library](https://github.com/google/gdata-java-client).

## Getting started

Google Sites uses Google Accounts or G Suite accounts for authentication. If you already have an account, you are all set. Otherwise, you can [create a new account](https://www.google.com/accounts/NewAccount).

### Installing the library

For help setting up and installing the client library, see the [Getting Started with the Google Data Java Client Library](https://developers.google.com/gdata/articles/java_client_lib). If you're using Eclipse, that article also explains how to setup your project using the [Google Data APIs Eclipse plugin](https://developers.google.com/gdata/articles/eclipse). Here's what you need to get started:

1. Install Java 1.5 or higher
2. [Download the client library](https://github.com/google/gdata-java-client) (the latest version of `gdata-src.java.zip`)
3. Download the list of [dependencies](https://github.com/google/gdata-java-client)
4. Download the [samples applications](https://github.com/google/gdata-java-client) (the latest version of `gdata-samples.java.zip`)

After installing the.jars, you'll need to include the following in your project:

1. `java/lib/gdata-sites-2.0.jar` - Version 2.0 here is intended for version 1.4 of the classic Sites API.
2. `java/lib/gdata-core-1.0.jar`
3. `java/lib/gdata-client-1.0.jar`
4. `java/lib/gdata-spreadsheet-3.0.jar` (if working with list pages / list items)

Also, be sure to include the dependency jars (`gdata-media-1.0.jar`, `mail.jar`, and `google-collect....jar`).

### Running the sample application

A full working sample application is located in `/java/sample/sites` subdirectory of the `gdata-samples.java.zip` download. The source is also available at [/trunk/java/sample/sites/](https://github.com/google/gdata-java-client/blob/master/java/sample/sites/) in the SVN repository accessible from the Source tab. The `SitesDemo.java` allows the user to perform a number of operations which demonstrate how to use the classic Sites API.

Note, you will need to include `java/sample/util/lib/sample-util.jar` to run the sample.

### Starting your own project

**Tip**: See the article [Using Eclipse with Google Data APIs](https://developers.google.com/gdata/articles/eclipse) for quick setup with our Eclipse plugin.

Depending on your application's needs, you'll need several imports. We recommend starting with the following imports:

```
import com.google.gdata.client.*;
import com.google.gdata.client.sites.*;
import com.google.gdata.data.*;
import com.google.gdata.data.acl.*;
import com.google.gdata.data.media.*;
import com.google.gdata.data.sites.*;
import com.google.gdata.data.spreadsheet.*;  // If working with listpages / listitems
import com.google.gdata.util.*;
```

Next, you will also need to setup a `SitesService` object, which represents a client connection to the classic Sites API:

```
SitesService client = new SitesService("yourCo-yourAppName-v1");
```

The `applicationName` argument should follow the format: `company-applicationname-version`. This parameter is used for logging purposes.

**Note**: The rest of this guide assumes you created a `SitesService` in the variable `client`.

## Authenticating to the classic Sites API

The Java client library can be used to work with either public or private feeds. The Sites Data API provides access to private and public feeds, depending on a Sites permissions and the operation you're trying to perform. For example, you may be able to read the content feed of a public Site but not make updates to it - something that would require an authenticated client. This can be done via [ClientLogin](#AuthClientLogin) username/password authentication, [AuthSub](#AuthAuthSub), or [OAuth](https://developers.google.com/gdata/auth#OAuth).

Please see the [Google Data APIs Authentication Overview](https://developers.google.com/gdata/auth) for more information on AuthSub, OAuth, and ClientLogin.

**Tip**: The API supports SSL (HTTPS). If you're using AuthSub/OAuth, make sure to specify a scope of `http**s**://sites.google.com/feeds/` in order to request feeds over SSL. Also note that for G Suite domains, the 'Require SSL' setting in the administrative control panel is respected by the API. You can force all API requests to be over HTTPS by calling `client.useSsl();`.

### AuthSub for web applications

[AuthSub Authentication for Web Applications](https://developers.google.com/apis/accounts/docs/AuthSub) should be used by client applications which need to authenticate their users to Google accounts. The operator does not need access to the username and password for the Google Sites user - only an AuthSub token is required.

*View instructions for incorporating AuthSub into your web application*

#### Request a single-use token

When the user first visits your application, they need to authenticate. Typically, developers print some text and a link directing the user to the AuthSub approval page to authenticate the user and request access to their documents. The Google Data Java client library provides a function to generate this URL. The code below sets up a link to the [AuthSubRequest](https://developers.google.com/apis/accounts/docs/AuthSub#AuthSubRequest) page.

```
import com.google.gdata.client.*;

String nextUrl = "http://www.example.com/welcome.jsp";
String scope = "https://sites.google.com/feeds/";
boolean secure = true;
boolean session = true;
String authSubUrl = AuthSubUtil.getRequestUrl(nextUrl, scope, secure, session);
```

If you want to authenticate users on your G Suite hosted domain:

```
import com.google.gdata.client.*;

String hostedDomain = "example.com";
String nextUrl = "http://www.example.com/welcome.jsp";
String scope = "https://sites.google.com/feeds/";  // SSL is also supported
boolean secure = true;
boolean session = true;
String authSubUrl = AuthSubUtil.getRequestUrl(hostedDomain, nextUrl, scope, secure, session);
```

The `getRequestUrl()` method takes several parameters (corresponding to the query parameters used by the [AuthSubRequest](https://developers.google.com/apis/accounts/docs/AuthSub#AuthSubRequest) handler):

- the **next** URL — URL that Google will redirect to after the user logs into their account and grants access; `http://www.example.com/welcome.jsp` in the example above
- the **scope** — `https://sites.google.com/feeds/` in the example above
- a boolean to indicate whether the token will be used in **registered mode** or not; `false` in the example above
- a second boolean to indicate whether the token will later be **exchanged for a session token** or not; `true` in the example above

#### Upgrading to a session token

See [Using AuthSub with the Google Data API Client Libraries](https://developers.google.com/gdata/authsub#request-session-token).

#### Retrieving information about a session token

See [Using AuthSub with the Google Data API Client Libraries](https://developers.google.com/gdata/authsub#TokenInfo).

#### Revoking a session token

See [Using AuthSub with the Google Data API Client Libraries](https://developers.google.com/gdata/authsub#revoke-token).

### OAuth for web or installed/mobile applications

[OAuth](https://developers.google.com/apis/accounts/docs/OAuth) can be used as an alternative to AuthSub, and is intended for web applications. OAuth is similar to using the [secure and registered mode](https://developers.google.com/apis/accounts/docs/AuthSub#signingrequests) of AuthSub in that all data requests must be digitally signed and you must register your domain.

*View instructions for incorporating OAuth into your installed application*

#### Fetching a request token

See [Using OAuth with the Google Data API Client Libraries](https://developers.google.com/gdata/oauth#OAuthRequestToken).

#### Authorizing a request token

See [Using OAuth with the Google Data API Client Libraries](https://developers.google.com/gdata/oauth#OAuthAuthorizeToken).

#### Upgrading to an access token

See [Using OAuth with the Google Data API Client Libraries](https://developers.google.com/gdata/oauth#OAuthAuthorizeToken).

### ClientLogin for installed/mobile applications

[ClientLogin](https://developers.google.com/apis/accounts/docs/AuthForInstalledApps) should be used by installed or mobile applications which need to authenticate their users to Google accounts. On first run, your application prompts the user for their username/password. On subsequent requests, an authentication token is referenced.

*View instructions for incorporating ClientLogin into your installed application*

To use [ClientLogin](https://developers.google.com/apis/accounts/docs/AuthForInstalledApps), invoke the [`setUserCredentials()`](https://developers.google.com/gdata/javadoc/com/google/gdata/client/GoogleService#setUserCredentials\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String\)) method of `SitesService` object, which is inherited from [`GoogleService`](https://developers.google.com/gdata/javadoc/com/google/gdata/client/GoogleService). Specify the email address and password of the user on whose behalf your client is making requests. For example:

```
SitesService client = new SitesService("yourCo-yourAppName-v1");
client.setUserCredentials("example@gmail.com", "pa$$word");
```

**Tip**: Once your application has successfully authenticated the user for the first time, store the auth token in your database to recall for later use. There's no need to prompt the user for their password on every run of your application. See [Recalling an auth token](https://developers.google.com/gdata/clientlogin#RecallAuthToken) for more information.

For more information on using ClientLogin in your Java applications, see the [Using ClientLogin with the Google Data API Client Libraries](https://developers.google.com/gdata/clientlogin).

## Site Feed

The site feed can be used to list the Google Sites a user owns or has viewing permissions for. It can also be used to modify the name of an existing site. For G Suite domains, it can also be used to create and/or copy an entire site.

### Listing sites

To query the site feed, send an HTTP `GET` to the site feed URL:

```
https://sites.google.com/feeds/site/site/
```

In the Java client, use you can use the `SiteFeed` and `SiteEntry` classes to work with the site feed:

```
public String getSiteFeedUrl() {
  String domain = "site";  // OR if the Site is hosted on G Suite, your domain (e.g. example.com)
  return "https://sites.google.com/feeds/site/" + domain + "/";
}

public void getSiteFeed() throws IOException, ServiceException {
  SiteFeed siteFeed = client.getFeed(new URL(getSiteFeedUrl()), SiteFeed.class);
  for (SiteEntry entry : siteFeed.getEntries()){
    System.out.println("title: " + entry.getTitle().getPlainText());
    System.out.println("site name: " + entry.getSiteName().getValue());
    System.out.println("theme: " + entry.getTheme().getValue());
    System.out.println("");
  }
}
```

The above snippet prints the site's title, site name, and the site's theme. Other getters are available for accessing additional properties in the feed.

### Creating new sites

**Note**: This feature is only available to G Suite domains.

New sites can be provisioned by creating a new `SiteEntry` and calling the client's `insert()` method on the site feed.

This example creates a brand new site with the theme 'slate' (optional setting) and provides the site name (required) and description (optional):

```
public String getSiteFeedUrl() {
  String domain = "example.com";
  return "https://sites.google.com/feeds/site/" + domain + "/";
}

public SiteEntry createSite(String title, String summary, String theme, String tag)
    throws MalformedURLException, IOException, ServiceException {
  SiteEntry entry = new SiteEntry();
  entry.setTitle(new PlainTextConstruct(title));
  entry.setSummary(new PlainTextConstruct(summary));

  Theme tt = new Theme();
  tt.setValue(theme);
  entry.setTheme(tt);

  entry.getCategories().add(new Category(TagCategory.Scheme.TAG, tag, null));

  return client.insert(new URL(getSiteFeedUrl()), entry);
}

SiteEntry newSiteEntry = createSite("My Site Title", "summary for site", "slate", "tag");
```

The above request would create a new site under the G Suite domain `example.com`. Thus, the site's URL would be https://sites.google.com/a/example.com/my-site-title.

If the site is successfully created, the server will respond with a `SiteEntry` object, populated with elements added by the server: a link to the site, a link to the site's acl feed, the site name, the title, summary, and so forth.

### Copying a site

**Note**: This feature is only available to G Suite domains.

Copying a site is similar to create a new site. The difference is that you need to set a link on your new `SiteEntry` that includes the self link of the site to duplicate. Here is an example of duplicating the site created in the [Creating new sites](#SiteFeedPOST) section:

```
public SiteEntry copySite(String title, String summary, String sourceHref)
    throws MalformedURLException, IOException, ServiceException {
  SiteEntry entry = new SiteEntry();
  entry.setTitle(new PlainTextConstruct(title));
  entry.setSummary(new PlainTextConstruct(summary));
  entry.addLink(SitesLink.Rel.SOURCE, Link.Type.ATOM, sourceHref);

  return client.insert(new URL(getSiteFeedUrl()), entry);
}

String sourceHref = newSiteEntry.getLink(SitesLink.Rel.SOURCE, Link.Type.ATOM).getHref();
SiteEntry myTwin = copySite("Duplicate Site", "A copy", sourceHref);
```

Important points:

- Only sites and site templates that the authenticated user owns can be copied.
- A site template can also be copied. A site is a template if the "Publish this site as a template" setting is checked in the Google Sites settings page.
- You can copy a site from another domain, pending you are listed as an owner on the source site.

### Updating a site's metadata

To rename a site, change its theme, category tag, or summary, you'll need to first fetch `SiteEntry` containing the site in question, modify one or more properties, and then call the `SiteEntry` 's `update()` method. This example modifies the previous site's theme and renames the site:

```
myTwin.setTitle(new PlainTextConstruct("better-title"));

Theme theme = myTwin.getTheme();
theme.setValue('iceberg');
myTwin.setTheme(theme);

myTwin.getCategories().add(new Category(TagCategory.Scheme.TAG, "newTag", null));

SiteEntry updatedSiteEntry = myTwin.update();

System.out.println(updatedSiteEntry.getTitle().getPlainText();
```

### Web address mappings

Web address mappings enable Sites users to map their own domains to a Google Site. For example, `http://www.mydomainsite.com` can be used instead of `http://sites.google.com/a/domain.com/mysite`. Depending on where your site is hosted, you can manually modify a site's web address mappings. See our [help center](https://support.google.com/a/answer/7392423) article for more information.

#### Fetching a site's web address mappings

To return the web address mappings for a site, fetch the site entry/feed with `with-mappings=true` parameter:

```
SiteQuery query = new SiteQuery(new URL("https://sites.google.com/feeds/site/siteName"));
query.setWithMappings(true);

SiteFeed feed = service.getFeed(query, SiteFeed.class);
for (SiteEntry entry : feed.getEntries()) {
  System.out.println("Mappings for '" + entry.getSiteName().getValue() + "':");
  for (Link link : entry.getWebAddressMappingLinks()) {
    System.out.println("  " + link.getHref());
  }
}
```

Existing mappings will show as `link` s with rel='webAddressMapping'. For instance, in the above example there are three `webAddressMapping` s that point to the site `http://sites.google.com/site/myOtherTestSite`.

#### Modifying web address mappings

**Note**: All GET/POST/PUT operations should specify the `with-mappings=true` parameter when working with web address mappings. If the parameter is absent, `webAddressMapping` s will not be returned in site entries (GET) or considered when updating/removing (PUT) mappings from an entry.

To add, update, or delete a mapping, simply specify, change, or remove such a link when [creating new sites](#SiteFeedPOST) or [updating a site's metadata](#SiteFeedPUT). The `with-mappings=true` parameter must be included on the site feed URI. Note: to update address mappings, you need to be a site admin, or a domain admin in the case of a G Suite hosted site.

For example, the request below updates the `http://www.mysitemapping.com` mapping to `http://www.my-new-sitemapping.com`, and removes the `http://www.mysitemapping2.com` by leaving the link out of the entry:

```
SiteEntry entry = client.getEntry(new URL("https://sites.google.com/feeds/site/site/siteName?with-mappings=true"), SiteEntry.class);

// Modify mappings (remove all mappings, add some of them again, add modified mappings)
entry.removeLinks(SitesLink.Rel.WEBADDRESSMAPPING, Link.Type.HTML);
entry.addLink(SitesLink.Rel.WEBADDRESSMAPPING, Link.Type.HTML, "http://www.my-new-sitemapping.com");

// Update the entry with the mappings.
entry.update();
```

Note, Web address mappings can also be specified at the time of creating/copying a site.

## Activity Feed

You can fetch a Site's recent activity (changes) by fetching the activity feed. Each entry in the activity feed contains information on a change that was made to the Site.

To query the activity feed, send an HTTP `GET` to the activity feed URL:

```
https://sites.google.com/feeds/activity/site/siteName
```

In the Java client, use the `ActivityFeed` class to return `ActivityEntry` objects:

```
public String buildActivityFeedUrl() {
  String domain = "site";  // OR if the Site is hosted on G Suite, your domain (e.g. example.com)
  String siteName = "mySite";
  return "https://sites.google.com/feeds/activity/" + domain + "/" + siteName + "/";
}

public void getActivityFeed() throws IOException, ServiceException {
  ActivityFeed activityFeed = client.getFeed(new URL(buildActivityFeedUrl()), ActivityFeed.class);
  for (BaseActivityEntry<?> entry : activityFeed.getEntries()){
    System.out.println(entry.getSummary().getPlainText());
    System.out.println(" revisions link: " + entry.getRevisionLink().getHref());
  }
}
```

**Note**: Access to this feed requires that you are a collaborator or owner of the Site. Your client must authenticate by using an AuthSub, OAuth, or ClientLogin token. See [Authenticating to the Sites service](#Auth).

## Revision Feed

To fetch the revision history for any content entry, send an HTTP `GET` to the entry's revision link:

```
https://sites.google.com/feeds/revision/site/siteName/CONTENT_ENTRY_ID
```

This example queries the content feed, and then fetches the revision feed for the first content entry:

```
ContentFeed contentFeed = client.getFeed(new URL(buildContentFeedUrl()), ContentFeed.class);
URL revisionFeedUrl = new URL(contentFeed.getEntries().get(0).getRevisionLink().getHref()); // use first entry

public void getRevisionFeed(String revisionFeedUrl) throws IOException, ServiceException {
  RevisionFeed revisionFeed = client.getFeed(revisionFeedUrl, RevisionFeed.class);
  for (BaseContentEntry<?> entry : revisionFeed.getEntries()){
    System.out.println(entry.getTitle().getPlainText());
    System.out.println(" updated: " + entry.getUpdated().toUiString() + " by " +
        entry.getAuthors().get(0).getEmail());
    System.out.println(" revision #: " + entry.getRevision().getValue());
  }
}
```

**Note:** Access to this feed requires that you are a collaborator or owner of the Site. Your client must authenticate by using an AuthSub, OAuth, or ClientLogin token. See [Authenticating to the Sites service](#Auth).

## Content Feed

### Retrieving the content feed

The content feed lists a Site's latest content. It can be accessed by sending a HTTP `GET` to the content feed URL:

```
https://sites.google.com/feeds/content/site/siteName
```

| Feed parameter | Description |
| --- | --- |
| `site` | " `site` " or the domain of your G Suite hosted domain (e.g. `example.com`). |
| `siteName` | The webspace name of your site; found in the Site's URL (e.g. `mySite`). |

Example of fetching the content feed:

```
public String buildContentFeedUrl() {
  String domain = "site";  // OR if the Site is hosted on G Suite, your domain (e.g. example.com)
  String siteName = "mySite";
  return "https://sites.google.com/feeds/content/" + domain + "/" + siteName + "/";
}

ContentFeed contentFeed = client.getFeed(new URL(buildContentFeedUrl()), ContentFeed.class);
```

The resulting `contentFeed` is a `ContentFeed` object containing the response from the server. Each entry of `contentFeed` represents a different page or item within the user's Site. The `ContentFeed` will contain different types of objects, all inherited from `BaseContentEntry`: `ListItemEntry`, `ListPageEntry`, `AttachmentEntry`, `WebAttachmentEntry`, `FileCabinetPageEntry`, `AnnouncementsPageEntry`, `AnnouncementEntry`, `WebPageEntry`, `CommentEntry`.

Here is an example of listing the different types of entries in a `ContentFeed`. Each type of entry contains different properties, but not all are printed here.

```
public String getContentBlob(BaseContentEntry<?> entry) {
 return ((XhtmlTextConstruct) entry.getTextContent().getContent()).getXhtml().getBlob();
}

// Extracts an entry's numeric ID.
private String getEntryId(String selfLink) {
  return selfLink.substring(selfLink.lastIndexOf("/") + 1);
}

public void printContentEntries(ContentFeed contentFeed) {
  System.out.println("Listing all WebPageEntry:");
  for (WebPageEntry entry : contentFeed.getEntries(WebPageEntry.class)) {
    System.out.println(" title: " + entry.getTitle().getPlainText());
    System.out.println(" id: " + getEntryId(entry));
    if (entry.getParentLink() != null) {
      System.out.println(" parent id: " + getEntryId(entry.getParentLink().getHref()));
    }
    System.out.println(" author: " + entry.getAuthors().get(0).getEmail());
    System.out.println(" content: " + getContentBlob(entry));
  }

  System.out.println("Listing all ListPageEntry:");
  for (ListPageEntry entry : contentFeed.getEntries(ListPageEntry.class)) {
    System.out.println(" title: " + entry.getTitle().getPlainText());
    System.out.println(" id: " + getEntryId(entry));
    for (Column col : entry.getData().getColumns()) {
      System.out.print(" [" + col.getIndex() + "] " + col.getName() + "\t");
    }
  }

  for (ListItemEntry entry : contentFeed.getEntries(ListItemEntry.class)) {
    for (Field field : entry.getFields()) {
      System.out.print(" [" + field.getIndex() + "] " + field.getValue() + "\t");
    }
    System.out.println("\n");
  }

  System.out.println("Listing all FileCabinetPageEntry:");
  for (FileCabinetPageEntry entry : contentFeed.getEntries(FileCabinetPageEntry.class)) {
    System.out.println(" title: " + entry.getTitle().getPlainText());
    System.out.println(" id: " + getEntryId(entry));
    System.out.println(" content: " + getContentBlob(entry));
  }

  System.out.println("Listing all CommentEntry:");
  for (CommentEntry entry : contentFeed.getEntries(CommentEntry.class)) {
    System.out.println(" in-reply-to: " + entry.getInReplyTo().toString());
    System.out.println(" content: " + getContentBlob(entry));
  }

  System.out.println("Listing all AnnouncementsPageEntry:");
  for (AnnouncementsPageEntry entry : contentFeed.getEntries(AnnouncementsPageEntry.class)) {
    System.out.println(" title: " + entry.getTitle().getPlainText());
    System.out.println(" id: " + getEntryId(entry));
    System.out.println(" content: " + getContentBlob(entry));
  }

  System.out.println("Listing all AnnouncementEntry:");
  for (AnnouncementEntry entry : contentFeed.getEntries(AnnouncementEntry.class)) {
    System.out.println(" title: " + entry.getTitle().getPlainText());
    System.out.println(" id: " + getEntryId(entry));
    if (entry.getParentLink() != null) {
      System.out.println(" parent id: " + getEntryId(entry.getParentLink().getHref()));
    }
    System.out.println(" draft?: " + entry.isDraft());
    System.out.println(" content: " + getContentBlob(entry));
  }

  System.out.println("Listing all AttachmentEntry:");
  for (AttachmentEntry entry : contentFeed.getEntries(AttachmentEntry.class)) {
    System.out.println(" title: " + entry.getTitle().getPlainText());
    System.out.println(" id: " + getEntryId(entry));
    if (entry.getParentLink() != null) {
      System.out.println(" parent id: " + getEntryId(entry.getParentLink().getHref()));
    }
    if (entry.getSummary() != null) {
      System.out.println(" description: " + entry.getSummary().getPlainText());
    }
    System.out.println(" revision: " + entry.getRevision().getValue());
    MediaContent content = (MediaContent) entry.getContent();
    System.out.println(" src: " + content.getUri());
    System.out.println(" content type: " + content.getMimeType().getMediaType());
  }

  System.out.println("Listing all WebAttachmentEntry:");
  for (WebAttachmentEntry entry : contentFeed.getEntries(WebAttachmentEntry.class)) {
    System.out.println(" title: " + entry.getTitle().getPlainText());
    System.out.println(" id: " + getEntryId(entry));
    if (entry.getParentLink() != null) {
      System.out.println(" parent id: " + getEntryId(entry.getParentLink().getHref()));
    }
    if (entry.getSummary() != null) {
      System.out.println(" description: " + entry.getSummary().getPlainText());
    }
    System.out.println(" src: " + ((MediaContent) entry.getContent()).getUri());
  }
}
```

**Note:** This feed may or may not require authentication; depending on the Site's sharing permissions. If the Site is non-public, your client must authenticate by using an AuthSub, OAuth, or ClientLogin token. See [Authenticating to the Sites service](#Auth).

### Content feed query examples

You can search the content feed using some of [the standard Google Data API query parameters](https://developers.google.com/gdata/docs/2.0/reference#Queries) and those specific to the classic Sites API. For more detailed information and a full list of supported parameters, see the [Reference Guide](./reference.md#Parameters).

**Note**: The examples in this section make use of the `buildContentFeedUrl()` method in [Retrieving the Content Feed](#ContentFeedGET).

#### Retrieving specific entry kinds

To fetch only a particular type of entry, use the `kind` parameter. This example returns just `attachment` entries:

```
ContentQuery query = new ContentQuery(new URL(buildContentFeedUrl()));
query.setKind("webpage");
ContentFeed contentFeed = client.getFeed(query, ContentFeed.class);
for (AttachmentEntry entry : contentFeed.getEntries(AttachmentEntry.class)) {
  System.out.println(entry.getTitle().getPlainText());
}
```

To return more than one entry type, separate each `kind` with a ','. This example returns `filecabinet` and `listpage` entries:

```
URL url = new URL(buildContentFeedUrl() + "?kind=filecabinet,listpage");
ContentFeed contentFeed = client.getFeed(url, ContentFeed.class);
for (FileCabinetPageEntry entry : contentFeed.getEntries(FileCabinetPageEntry.class)) {
  System.out.println(" title: " + entry.getTitle().getPlainText());
}
for (ListPageEntry entry : contentFeed.getEntries(ListPageEntry.class)) {
  System.out.println(" title: " + entry.getTitle().getPlainText());
}
```

#### Retrieving a page by path

If you know the relative path of a page within the Google Site, you can use the `path` parameter to fetch that particular page. This example would return the page located at `http://sites.google.com/site/siteName/path/to/the/page`:

```
ContentQuery query = new ContentQuery(new URL(buildContentFeedUrl()));
query.setPath("/path/to/the/page");
ContentFeed contentFeed = client.getFeed(query, ContentFeed.class);
for (BaseContentEntry<?> entry : contentFeed.getEntries()) {
  System.out.println(" title: " + entry.getTitle().getPlainText());
}
```

#### Retrieving all entries under a parent page

If you know the content entry id of a page (e.g. "1234567890" in the example below), you can use the `parent` parameter to fetch all of its child entries (if any):

```
ContentQuery query = new ContentQuery(new URL(buildContentFeedUrl()));
query.setParent("1234567890");
ContentFeed contentFeed = client.getFeed(query, ContentFeed.class);
```

For additional parameters, see the [Reference Guide](./reference.md#Parameters).

---

### Creating Content

**Note:** Before creating content for a site, ensure that you have set your site in the client.  
`client.site = "siteName";`

New content (webpages, listpages, filecabinet pages, announcement pages, etc.) can be created by sending an HTTP `POST` to the content feed:

```
https://sites.google.com/feeds/content/site/siteName
```

For a list of support node types, see the `kind` parameter in the [Reference Guide](https://developers.google.com/workspace/sites/docs/2.0/reference#Parameters).

#### Creating new items / pages

This example creates a new `webpage` under the Site's top-level, includes some XHTML for the page body, and sets the heading title to 'New WebPage Title':

```
private void setContentBlob(BaseContentEntry<?> entry, String pageContent) {
  XmlBlob xml = new XmlBlob();
  xml.setBlob(pageContent);
  entry.setContent(new XhtmlTextConstruct(xml));
}

public WebPageEntry createWebPage(String title, String content)
    throws MalformedURLException, IOException, ServiceException {
  WebPageEntry entry = new WebPageEntry();
  entry.setTitle(new PlainTextConstruct(title));

  setContentBlob(entry, content); // Entry's HTML content

  return client.insert(new URL(buildContentFeedUrl()), entry);
}

WebPageEntry createdEntry = createWebPage("New Webpage Title", "<b>HTML content</b>");
System.out.println("Created! View at " + createdEntry.getHtmlLink().getHref());
```

If the request is successful, `createdEntry` will contain a copy of the entry created on the server.

#### Creating items/pages under custom URL paths

By default, the previous example would be created under the URL `http://sites.google.com/site/siteName/new-webpage-title` and have a page heading of 'New Webpage Title'. That is, the `<atom:title>` is normalized to `new-webpage-title` for the URL. To customize a page's URL path, you can set the `<sites:pageName>` element.

This example creates a new `filecabinet` page with a heading of 'File Storage', but creates the page under the URL `http://sites.google.com/site/siteName/files` (instead of `http://sites.google.com/site/siteName/file-storage`) by specifying the `<sites:pageName>` element.

```
public FileCabinetPageEntry createFileCabinetPage(String title, String content, String customPageName)
    throws MalformedURLException, IOException, ServiceException {
  FileCabinetPageEntry entry = new FileCabinetPageEntry();
  entry.setTitle(new PlainTextConstruct(title));

  setContentBlob(entry, content); // Entry's HTML content

  entry.setPageName(new PageName(customPageName)); // Upload to a custom page path

  return client.insert(new URL(buildContentFeedUrl()), entry);
}

FileCabinetPageEntry createdEntry = createFileCabinetPage("File Storage", "<b>HTML content</b>", "files");
System.out.println("Created! View at " + createdEntry.getHtmlLink().getHref());
```

The server uses the following precedence rules for naming a page's URL path:

1. `<sites:pageName>`, if present. Must satisfy `a-z, A-Z, 0-9, -, _`.
2. `<atom:title>`, must not be null if pageName is not present. Normalization is to trim + collapse whitespace to '-' and remove chars not matching `a-z, A-Z, 0-9, -, _`.

#### Creating subpages

To create subpages (children) under a parent page, you must set the parent link in the entry. The link's `href` attribute to the parent node's self link.

```
public AnnouncementEntry postAnnouncement(String title, String content, AnnouncementsPageEntry parentPage)
    throws MalformedURLException, IOException, ServiceException {
  AnnouncementEntry entry = new AnnouncementEntry();
  entry.setTitle(new PlainTextConstruct(title));

  setContentBlob(entry, content); // Entry's HTML content

  // Set the entry's parent link to create the announcement under that page.
  entry.addLink(SitesLink.Rel.PARENT, Link.Type.ATOM, parentPage.getSelfLink().getHref());

  return client.insert(new URL(buildContentFeedUrl()), entry);
}

ContentFeed contentFeed = client.getFeed(new URL(buildContentFeedUrl() + "?kind=announcementspage"), ContentFeed.class);

AnnouncementEntry createdEntry = postAnnouncement("Party!!", "My place, this weekend", contentFeed.getEntries().get(0));
System.out.println("New post by " + createdEntry.getAuthors().get(0).getName());
```

The example above creates a new `announcement` under the first announcements page found in the user's content feed. The announcement title is set to "Party!!" and the content to "My place, this weekend".

### Page templates

#### Creating page templates

The process for creating a page template is the same as [creating new items/pages](#ContentFeedPOST) and [creating subpages](#CreatingSubpages).The difference is the addition of the `category` with term and label set to 'http://schemas.google.com/g/2005#template' and 'template', respectively.

This example creates a new `webpage` template.

```
// The template webpage entry.
WebPageEntry entry = new WebPageEntry();

// Set title and content.
entry.setTitle(new PlainTextConstruct("Page template title"));
XmlBlob xml = new XmlBlob();
xml.setBlob("Content for page template");
entry.setContent(new XhtmlTextConstruct(xml));

// Set the template category
Category TEMPLATE_CATEGORY = new Category(TemplateCategory.Scheme.LABELS,
    TemplateCategory.Term.TEMPLATE, TemplateCategory.Label.TEMPLATE);
entry.getCategories().add(TEMPLATE_CATEGORY);

// Insert the template webpage entry.
WebPageEntry createdEntry = client.insert(new URL("https://sites.google.com/feeds/content/site/siteName"), entry);
```

#### Creating pages from a template

Similar to creating page templates, you can instantiate a new page from a template by including a `<link>` with rel='http://schemas.google.com/sites/2008#template' pointing to the self link of a page template.

This example creates a new `filecabinet` template and then instantiates a new `filecabinet` page from that template.

```
URL feedUrl = new URL("https://sites.google.com/feeds/content/site/siteName");

// 1. Create file cabinet page template
FileCabinetPageEntry inputTemplateEntry = new FileCabinetPageEntry();
inputTemplateEntry.setTitle(new PlainTextConstruct("File cabinet page template title"));
XmlBlob xml = new XmlBlob();
xml.setBlob("Content for page template");
inputTemplateEntry.setContent(new XhtmlTextConstruct(xml));

// Set the template category
Category TEMPLATE_CATEGORY = new Category(TemplateCategory.Scheme.LABELS,
    TemplateCategory.Term.TEMPLATE, TemplateCategory.Label.TEMPLATE);
inputTemplateEntry.getCategories().add(TEMPLATE_CATEGORY);

// 2. Create file cabinet page template instance
FileCabinetPageEntry templateEntry = client.insert(feedUrl, inputTemplateEntry);

// Specify link to the page template
FileCabinetPageEntry templateInstanceEntry = new FileCabinetPageEntry();
templateInstanceEntry.setTitle(new PlainTextConstruct("File cabinet template instance"));
templateInstanceEntry.addLink(new Link(SitesLink.Rel.TEMPLATE, Link.Type.ATOM, templateEntry.getSelfLink().getHref()));

FileCabinetPageEntry createdFileCabinetFromTemplate =  client.insert(feedUrl, templateInstanceEntry);
```

**Note**: Despite a template defining a `<category>`, including one in your entry is still required. Also note, if you include a `<content>` element, the server will reject it.

### Uploading files

Just as in Google Sites, the API supports attachment upload to file cabinet page or a parent page.

To upload an attachment to a parent, send an HTTP `POST` request to the content feed URL:

```
https://sites.google.com/feeds/content/site/siteName
```

All attachment types must be uploaded to a parent page. Therefore, you set a parent link on the `AttachmentEntry` or `WebAttachmentEntry` object you're trying to upload. See [Creating subpages](#CreatingSubpages) for more information.

#### Uploading attachments

This example uploads a PDF file to the first `FileCabinetPageEntry` found in the user's content feed. The attachment is created with a title of 'Getting Started' and a (optional)description, 'HR packet'.

```
MimetypesFileTypeMap mediaTypes = new MimetypesFileTypeMap();
mediaTypes.addMimeTypes("application/msword doc");
mediaTypes.addMimeTypes("application/vnd.ms-excel xls");
mediaTypes.addMimeTypes("application/pdf pdf");
mediaTypes.addMimeTypes("text/richtext rtx");
// ... See a more complete list of mime types in the SitesHelper.java

public AttachmentEntry uploadAttachment(File file, BasePageEntry<?> parentPage,
    String title, String description) throws IOException, ServiceException {
  AttachmentEntry newAttachment = new AttachmentEntry();
  newAttachment.setMediaSource(new MediaFileSource(file, mediaTypes.getContentType(file)));
  newAttachment.setTitle(new PlainTextConstruct(title));
  newAttachment.setSummary(new PlainTextConstruct(description));
  newAttachment.addLink(SitesLink.Rel.PARENT, Link.Type.ATOM, parentPage.getSelfLink().getHref());

  return client.insert(new URL(buildContentFeedUrl()), newAttachment);
}

ContentFeed contentFeed = client.getFeed(new URL(buildContentFeedUrl() + "?kind=filecabinet"), ContentFeed.class);
FileCabinetPageEntry parentPage = contentFeed.getEntries(FileCabinetPageEntry.class).get(0);

AttachmentEntry attachment = uploadAttachment(
    new File("/path/to/your/file.pdf"), parentPage, "Getting Started", "HR packet");
System.out.println("Uploaded!");
```

If the upload is successful, `attachment` will contain a copy of the created attachment entry.

#### Uploading an attachment to a folder

To upload an attachment to an existing folder in a `FileCabinetPageEntry`, include a category with the 'term' attribute set to the folder's name. For example, add this line in `uploadAttachment()`:

```
newAttachment.getCategories().add(new Category("http://schemas.google.com/sites/2008#folder", "FolderName"));
```

### Web attachments

Web attachments are special kinds of attachments. Essentially, they're links to other files on the web that you can add to your filecabinet listings. This feature is analogous to the 'Add file by URL' upload method in the Google Sites UI.

**Note**: Web attachments can only be created under a file cabinet. They cannot be uploaded to other types of pages.

This example creates a `WebAttachmentEntry` under the first `FileCabinetPageEntry` found in the user's content feed. Its title and (optional) description are set to 'GoogleLogo' and 'nice colors', respectively.

```
public WebAttachmentEntry uploadWebAttachment(String contentUrl, FileCabinetPageEntry filecabinet,
    String title, String description) throws MalformedURLException, IOException, ServiceException {
  MediaContent content = new MediaContent();
  content.setUri(contentUrl);

  WebAttachmentEntry webAttachment = new WebAttachmentEntry();
  webAttachment.setTitle(new PlainTextConstruct(title));
  webAttachment.setSummary(new PlainTextConstruct(description));
  webAttachment.setContent(content);
  webAttachment.addLink(SitesLink.Rel.PARENT, Link.Type.ATOM,
      filecabinet.getSelfLink().getHref());

  return client.insert(new URL(buildContentFeedUrl()), webAttachment);
}

ContentFeed contentFeed = client.getFeed(new URL(buildContentFeedUrl() + "?kind=filecabinet"), ContentFeed.class);
FileCabinetPageEntry parentPage = contentFeed.getEntries(FileCabinetPageEntry.class).get(0);

WebAttachmentEntry webAttachment =
    uploadWebAttachment("http://www.google.com/images/logo.gif", parentPage, "Google's Logo", "nice colors");
System.out.println("Web attachment created!");
```

The `POST` creates a link in the user's filecabinet pointing to the image at 'http://www.google.com/images/logo.gif'.

---

### Updating Content

#### Updating a page's metadata and/or html content

The metadata (title, pageName, etc.) and page content of any `BaseContentEntry` type can be edited by using the entry's `update()` method. That will send an HTTP `PUT` request to the entry's `edit` link.

Below is an example of updating a `ListPageEntry` with the following changes:

- The title is modified to 'Updated Title'
- The page's HTML content is updated to '<p>Updated HTML Content</p>'
- The first column heading of the list is changed to "Owner"

```
ContentFeed contentFeed = client.getFeed(
    new URL(buildContentFeedUrl() + "?kind=listpage"), ContentFeed.class);
ListPageEntry listPage = contentFeed.getEntries(ListPageEntry.class).get(0); // Update first list page found

// Update title
listPage.setTitle(new PlainTextConstruct("Updated Title"));

// Update HTML content
XmlBlob xml = new XmlBlob();
xml.setBlob("<p>Updated HTML Content</p>");
listPage.setContent(new XhtmlTextConstruct(xml));

// Change first column's heading
listPage.getData().getColumns().get(0).setName("Owner");

// listPage.setPageName(new PageName("new-page-path"));  // You can also change the page's URL path

ListPageEntry updatedEntry = listPage.update();

System.out.println("ListPage updated!");
```

#### Updating attachment file contents

For `AttachmentEntry`, you can also update the content by setting the entry's `MediaSource` and then using the entry's `updateMedia(boolean)` method.

This example will update the content of an existing attachment:

```
public AttachmentEntry updateFile(AttachmentEntry entry, File newFile)
    throws IOException, ServiceException {
  // See Uploading Attachments for the definition of mediaTypes.
  entry.setMediaSource(new MediaFileSource(newFile, mediaTypes.getContentType(newFile)));
  return entry.updateMedia(false);
}
```

The example sends an HTTP `PUT` request to the entry's `edit-media` link. The returned `AttachmentEntry` will contains the updated content.

#### Updating attachment metadata + content

You can update an attachment's metadata and its content in the same call by using the `updateMedia()` method. If you can either update just the file content, the metadata, or both.

This example changes the attachment's title to 'New Title', updates it's description, and replaces its file content with a new.zip file. Since the request contains new file content, the `AttachmentEntry` 's `updateMedia()` is used.

```
public AttachmentEntry updateAttachment(AttachmentEntry entry, File newFile, String newTitle, String newDescription)
    throws IOException, ServiceException  {
  // See Uploading Attachments for the definition of mediaTypes.
  entry.setMediaSource(new MediaFileSource(newFile, mediaTypes.getContentType(newFile)));
  entry.setTitle(new PlainTextConstruct(newTitle));
  entry.setSummary(new PlainTextConstruct(newDescription));

  return entry.updateMedia(true);
}

ContentFeed contentFeed = client.getFeed(
    new URL(buildContentFeedUrl() + "?kind=attachment&max-results=1"), ContentFeed.class);
AttachmentEntry attachment = contentFeed.getEntries(AttachmentEntry.class).get(0); // Update first attachment found

AttachmentEntry updatedAttachment = updateAttachment(attachment, new File("/path/to/file.zip"), "New Title", "better stuff");
```

---

### Deleting Content

To remove a page or item from a Google Site, first retrieve the content entry, then call the entry's `delete()`.

```
entry.delete();
```

You can also use the service class's `delete()` method by passing it the entry's `edit` link and ETag value:

```
client.delete(entry.getEditLink().getHref(), "*"); // Note: using "*" may overwrite another client's changes.
```

If the entry was deleted successfully, the server responds with an HTTP `200 OK`.

---

### Downloading Attachments

To download an `AttachmentEntry`, send an HTTP `GET` request to the entry's content src link.

This example downloads the first `AttachmentEntry` found in the user's content feed to the directory "/path/to/save/file/":

```
private void downloadFile(String downloadUrl, String fullFilePath) throws IOException, ServiceException {
  System.out.println("Downloading file from: " + downloadUrl);

  MediaContent mc = new MediaContent();
  mc.setUri(downloadUrl);
  MediaSource ms = service.getMedia(mc);

  InputStream inStream = null;
  FileOutputStream outStream = null;

  try {
    inStream = ms.getInputStream();
    outStream = new FileOutputStream(fullFilePath);

    int c;
    while ((c = inStream.read()) != -1) {
      outStream.write(c);
    }
  } finally {
    if (inStream != null) {
      inStream.close();
    }
    if (outStream != null) {
      outStream.flush();
      outStream.close();
    }
  }
}

public void downloadAttachment(AttachmentEntry entry, String directory) throws IOException, ServiceException {
  String url = ((OutOfLineContent) entry.getContent()).getUri();
  downloadFile(url, directory + entry.getTitle().getPlainText()); // Use entry's title for the save filename
}

ContentFeed contentFeed = client.getFeed(
    new URL(buildContentFeedUrl() + "?kind=attachment&max-results=1"), ContentFeed.class);

downloadAttachment(contentFeed.getEntries(AttachmentEntry.class).get(0), "/path/to/save/file/");
System.out.println("Downloaded.");
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

The `AclFeed` and `AclEntry` classes can be used to control a site's sharing permissions and can be fetched using the service class's `getFeed()` method.

The following example fetches the ACL feed for a given site, and prints out the permissions of each `AclEntry`:

```
public String getAclFeedUrl(String siteName) {
  String domain = "site";  // OR if the Site is hosted on G Suite, your domain (e.g. example.com)
  return "https://sites.google.com/feeds/acl/site/" + domain + "/" + siteName + "/";
}

public void getAclFeed(String siteName) throws IOException, ServiceException {
  AclFeed aclFeed = client.getFeed(new URL(getAclFeedUrl(siteName)), AclFeed.class);
  for (AclEntry entry : aclFeed.getEntries()) {
    System.out.println(entry.getScope().getValue() + " (" + entry.getScope().getType() + ") : " +
                       entry.getRole().getValue());
  }
}

getAclFeed('my-site-name');
```

If you're working with entries in the [SiteFeed](#SiteFeed), each `SiteEntry` contains a link to its ACL feed. For example, this snippet fetches the acl feed of a `SiteEntry`:

```
String aclLink = siteEntry.getLink(SitesAclFeedLink.Rel.ACCESS_CONTROL_LIST, Link.Type.ATOM).getHref();
AclFeed aclFeed = client.getFeed(new URL(aclLink), AclFeed.class);
```

### Sharing a site

**Note**: Certain sharing ACLs may only be possible if the domain is configured to allow such permissions (e.g. if sharing outside of the domain for G Suite domains is enabled, etc).

To share a Google Site using the API,, your client needs to create a new [`AclEntry`](https://developers.google.com/gdata/javadoc/com/google/gdata/data/acl/AclEntry) and `POST` it to the server.

Here's an example that adds 'user@example.com' as a `reader` on the site:

```
AclRole role = new AclRole("reader");
AclScope scope = new AclScope(AclScope.Type.USER, "user@example.com");
AclEntry aclEntry = addAclRole(role, scope, entry);

public AclEntry addAclRole(AclRole role, AclScope scope, SiteEntry siteEntry)
    throws IOException, MalformedURLException, ServiceException  {
  AclEntry aclEntry = new AclEntry();
  aclEntry.setRole(role);
  aclEntry.setScope(scope);

  Link aclLink = siteEntry.getLink(SitesAclFeedLink.Rel.ACCESS_CONTROL_LIST, Link.Type.ATOM);
  return client.insert(new URL(aclLink.getHref()), aclEntry);
}
```

See the [ACL feed Overview](#AclFeedOverview) section for the possible [`AclScope`](#ACLScopes) and [`AclRoles`](#ACLRoles) values.

### Group and Domain level sharing

Similar to [sharing a site with a single user](#AclFeedPOST), you can share a site across a Google group or G Suite domain.

Sharing to a group email address:

```
AclScope scope = new AclScope(AclScope.Type.GROUP, "group_name@example.com");
```

Sharing to an entire domain:

```
AclScope scope = new AclScope(AclScope.Type.DOMAIN, "example.com");
```

Sharing at the domain level is only supported for G Suite domains, and only for the domain that the site is hosted at. For example http://sites.google.com/a/domain1.com/siteA can only share the entire Site with domain1.com, not domain2.com. Sites that are not hosted on a G Suite domain (e.g. http://sites.google.com/site/siteB) cannot invite domains.

### Modifying sharing permissions

To an existing sharing permission on a Site, first fetch the `AclEntry` in question, modify the permission as desired, and then call the `AclEntry` 's `update()` method to modify the ACL on the server.

This example modifies our previous `aclEntry` example from the [Sharing a site](#AclFeedPOST) section, by updating 'user@example.com' to be a `writer` (collaborator):

```
aclEntry.setRole(new AclRole("writer"));
AclEntry updatedAclEntry = aclEntry.update();

// Could also use the client's update method
// client.update(new URL(aclEntry.getEditLink().getHref()), aclEntry);
```

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).

### Removing sharing permissions

To remove a sharing permission, first retrieve the `AclEntry`, then call its `delete()` method:

```
aclEntry.delete();

// Could also use the client's delete method
// client.delete(new URL(aclEntry.getEditLink().getHref()), aclEntry);
```

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).

## Special Topics

### Retrieving a feed or entry again

If you want to retrieve a feed or entry that you've retrieved before, **you can improve efficiency** by telling the server to send the list or entry only if it has changed since the last time you retrieved it.

To do this sort of conditional retrieval, both the `getFeed()` and `getEntry()` methods provide an additional argument that accept an ETag value or a `DateTime` object for the `If-Modified-Since` header. You can access an entry's etag from `entry.getEtag()`.

This example does a conditional retrieval for a content webpage entry:

```
String feedUrl = "https://sites.google.com/feeds/content/site/siteName/123456789";
WebPageEntry entry = client.getEntry(new URL(feedUrl), WebPageEntry.class, "\"GVQHSARDQyp7ImBq\"");
```

When the server receives this request, it checks to see whether the item that you requested has the same ETag as the ETag you specified. If the ETags match, then the item hasn't changed, and the server returns either a HTTP 304 `NotModifiedException` exception will be thrown.

If the ETags don't match, then the item has been modified since the last time you requested it, and the server returns the item.

For more information about ETags, see the [Google Data APIs reference guide](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).
