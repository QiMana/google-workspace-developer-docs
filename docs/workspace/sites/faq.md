---
source: https://developers.google.com/workspace/sites/faq
root: workspace
fetched_at: 2026-04-23T15:31:41.845Z
---

# Frequently Asked Questions

## Page Summary

- This page serves as an FAQ for the Google Sites Data API, and refers users to the general Google Data APIs FAQ for broader questions.
- Google provides officially supported client libraries in Java,.NET, PHP, Python, and Objective-C to facilitate interaction with the Sites Data API.
- The Sites Data API supports actions like listing sites, creating new sites (for Google Workspace users), setting sharing permissions, and copying sites.
- While the API doesn't offer direct retrieval of the sitemap page hierarchy, it can be inferred from parent links within each content entry.
- Users need to be collaborators, owners, or admins of a site to view its revision and activity feeds, and API-based deletion of existing sites is not supported.

## Main Google Data API FAQ

The questions below are specifically targeted for the Google Sites Data API. There are, however, many questions that are applicable to all of the Google Data APIs. Visit the [Google Data APIs FAQ](https://developers.google.com/gdata/faq) if you do not find the question you are looking for below.

## Getting Started

[Do you have any tips or short sample code for common issues?](#tips)  
  
[What are the available client libraries supported by Google?](#WhatAreTheAvailableClientLibrariesSupportedByGoogle)  
  
[Where can I find a Developer Guide in each language?](#WhereCanIFindDevGuide)  
  
[What is the AuthSub/OAuth scope?](#AuthScope)  
  
[What is the ClientLogin service name?](#AuthServiceName)  
  
[How do I list all my Sites?](#ListSites)  
  
[Can I create a new Google Site?](#CreateNewSite)  
  
[Can I delete an existing Google Site?](#DeleteSite)  
  
[How do I copy a site?](#CopyASite)  
  
[How do I set/modify ACLs (sharing permissions)?](#ModifyACLs)  
  
[How do I retrieve the sitemap?](#SiteMap)  
  
[Why don't I have access to the revisions/activity feed?](#AccessToCertainFeeds)  
  
[What are the filesize limits for attachments?](#AttachmentSizeLimits)  
  
[I have a feature request or bug report. Where should I post?](#IHaveAFeautreRequestOrBugReport)  

---

## Getting Started

Do you have any tips or short sample code for common issues?

You should browse the [Google Data API Tips Blog](http://gdatatips.blogspot.com/search/label/sites) for help with both our client libraries and making raw requests. The [Client Libraries and Sample Code page](https://developers.google.com/workspace/sites/code) also lists some additional resources.

What are the available client libraries supported by Google?

[Java](https://developers.google.com/apis/gdata/articles/java_client_lib), [.NET](https://developers.google.com/apis/gdata/articles/dotnet_client_lib), [PHP](https://developers.google.com/api-client-library/php), [Python](https://developers.google.com/apis/gdata/articles/python_client_lib) and [Objective-C client](https://developers.google.com/p/gdata-objectivec-client) libraries are officially supported by Google. Using these libraries, you can construct Google Data requests, send them to a service, and process server responses.

Where can I find a Developer Guide in each language?

Developer Guides for the HTTP XML Protocol and other languages can be found at [http://developers.google.com/workspace/sites/docs/developers\_guide](https://developers.google.com/workspace/sites/docs/developers_guide)

What is the AuthSub/OAuth scope?

The Sites Data API uses the following scope: `https://sites.google.com/feeds/`.

What is the ClientLogin service name?

`jotspot`

How do I list all my Sites?

The [site feed](https://developers.google.com/workspace/sites/docs/1.0/developers_guide_protocol#SitesFeedGET) can be used to list the sites a user owns and/or has access to.

Can I create a new Google Site?

Yes. Google Workspace users can use the site feed to create new sites programmatically. We hope to open this features to all users in the future.

Can I delete an existing Google Site?

At this time, the API does not support deleting an existing site. Deleting sites must be done in the Google Sites control panel.

How do I copy a site?

Google Workspace users can use the [site feed](https://developers.google.com/workspace/sites/docs/1.0/developers_guide_protocol#SitesFeedCopySite) to copy a site if you are an owner. You can also manually copy a site in the Google Sites settings page.

How do I set/modify ACLs (sharing permissions)?

The [acl feed](https://developers.google.com/workspace/sites/docs/1.0/developers_guide_protocol#AclFeed) offers this functionality.

How do I retrieve the sitemap?

Normally a sitemap refers to a sitemap.xml file used to help search engines index a website. In Google Sites, a 'sitemap' refers the tree presentation in (More Actions > Manage Site > Pages). While the API does not provide a direct method of retrieving this page hierarchy, the sitemap can be inferred from examining the parent links in each content entry. Each content entry is a leaf or node of the sitemap tree.

Why don't I have access to the revisions/activity feed?

You must be a collaborator, owner, or admin of a Site to view its revision and activity feeds.

What are the filesize limits for attachments?

Please see: [http://www.google.com/support/sites/bin/answer.py?answer=96770](http://www.google.com/support/sites/bin/answer.py?answer=96770)

I have a feature request or bug report. Where should I post?

To report a bug, post a detailed description on our issue tracker, [here](http://code.google.com/p/gdata-issues/issues/entry?template=Sites%20\(Defect%20Report\))

To report a feature request, post a detailed description [here](http://code.google.com/p/gdata-issues/issues/entry?template=Sites%20\(Enhancement%20Request\))
