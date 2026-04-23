---
source: https://developers.google.com/workspace/sites/changelog
root: workspace
fetched_at: 2026-04-23T15:31:40.589Z
---

# Release Notes

## Page Summary

- This page provides a log of changes to the Google Sites Data API, including new features, bug fixes, and version updates.
- API developers should regularly check this changelog for announcements that may require modifications to existing applications.
- Recent updates include the addition of "invite" scope to the ACL feed, and support for adding/modifying Site categories.
- Past updates introduced features like programmatic site creation, site copying, user site listings, and the implementation of batch requests.
- Changes are also announced via an Atom feed and the classic Sites API developer forum, in addition to this document.

Google periodically updates the classic Sites API in order to deliver new features and to repair defects discovered in previous versions. In most cases, these changes will be transparent to API developers. However, occasionally we need to make changes that require developers to modify their existing applications.

This page documents any changes made to the Sites Data API that may effect your application. We recommend that API developers periodically check this list for any new announcements. Changes will also be announced via this page's [Atom feed](https://developers.google.com/static/workspace/sites/changelog.xml) and the [classic Sites API developer forum](http://www.google.com/support/forum/p/apps-apis/label?lid=37f05bf84de81f5b&).

## Release 2011-06 (June 14, 2011)

This release adds the “invite” scope to the ACL feed for v1.4 and above.

Features added in this release:

- [Invite scope for the ACL Feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#AclFeed).

## Release 2011-05 (May 31, 2011)

This release adds the “invite” scope to the ACL feed for v1.4 and above.

Features added in this release:

- [Invite scope for the ACL Feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#AclFeed).

## Release 2011-03 (March 14, 2011)

This release adds support for modifying and adding categories to a Site through the API.

Features added in this release:

- [Sites Categories](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeedCategories).

## Release 2010-02 (March 10, 2010)

This release marks version 1.2 of the API, as it introduces several new features and bug fixes.

Features added in this release:

- [Web address mappings](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#WebAddressMappings).
- User-defined [page templates](https://developers.google.com/google-apps/sites) are now returned by the API using the `/-/template` category query. You can also [create pages from templates](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#PageTemplates) or save an existing page as a template. Resolves [issue 1762](http://code.google.com/p/gdata-issues/issues/detail?id=1762)
- The path parameter now supports root-level queries (e.g. `?path=/`).

Bug fixes:

- Fixed [issue 1903](http://code.google.com/p/gdata-issues/issues/detail?id=1903) where content feed was returning higher than normal 500s.

## Release 2010-01 (January 21, 2010)

This release marks version 1.1 of the API, as it introduces several new feeds/features.

Features added in this release:

- [Programmatic site creation](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeedPOST) is now supported using the new [site feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeed). Sites can also be created using a template. This resolves [Issue 1502](http://code.google.com/p/gdata-issues/issues/detail?id=1502)
- [Programmatic site copy](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeedCopySite) is now supported using the new [site feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeed).
- [Listing a user’s sites](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeedGET) is now supported using the new [site feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeed).
- Listing and [sharing a site](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#AclFeedPOST) is now possible using the new [acl feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#AclFeed) for sharing permissions.
- A new query parameter [`include-all-sites`](https://developers.google.com/google-apps/sites/docs/1.0/reference#feed_ListSites) for retrieving the user’s implicit list of sites he/she has access to.
- The content feed now supports pagination by default. You can page through results by using the feed’s `next` link. This resolves [Issue 1674](http://code.google.com/p/gdata-issues/issues/detail?id=1674)
- We’ve added a [Python Developer’s Guide](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_python)!

## Release 2009-03 (November 9, 2009)

This release introduces new features in addition to several bug fixes.

Features added in this release:

- [Batch requests](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#BatchProcessing) now supported on content feed. For example, you can create a number pages in a single request.
- Full-text queries implemented using the Google Data `q` parameter. See the [Reference Guide](https://developers.google.com/google-apps/sites/docs/1.0/reference#Parameters)
- `author` parameter now supported for the revision and activity feeds. See the [Reference Guide](https://developers.google.com/google-apps/sites/docs/1.0/reference#Parameters)
- Average latency lowered by 83%.

Additional changes/fixes in this release:

- Fixed issue where moving/renaming a parent content entry deleted all of its children. (e.g. renmaing a filecabinet removed its attachments) [Issue 1592](http://code.google.com/p/gdata-issues/issues/detail?id=1592)

## Release 2009-02 (October 7, 2009)

This release introduces new features in addition to several bug fixes.

Features added in this release:

- ETag support. See the [Protocol Guide](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#ContentFeedConditionalGET).

Additional changes/fixes in this release:

- Fixed issue where attachments at top-level of Site were causing 500s when querying the content feed.

## Release 2009-01 (September 24, 2009)

This initial release introduces version 1.0 of the Google Sites Data API. See the [announcement blog post](http://googledataapis.blogspot.com/2009/09/new-data-api-for-google-sites.html).

[Back to top](#top_of_page)

Google periodically updates the classic Sites API in order to deliver new features and to repair defects discovered in previous versions. In most cases, these changes will be transparent to API developers. However, occasionally we need to make changes that require developers to modify their existing applications.

This page documents any changes made to the Sites Data API that may effect your application. We recommend that API developers periodically check this list for any new announcements. Changes will also be announced via this page's [Atom feed](https://developers.google.com/static/workspace/sites/changelog.xml) and the [classic Sites API developer forum](http://www.google.com/support/forum/p/apps-apis/label?lid=37f05bf84de81f5b).

## Release 2011-06 (June 14, 2011)

This release adds the “invite” scope to the ACL feed for v1.4 and above.

Features added in this release:

- [Invite scope for the ACL Feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#AclFeed).

## Release 2011-05 (May 31, 2011)

This release adds the “invite” scope to the ACL feed for v1.4 and above.

Features added in this release:

- [Invite scope for the ACL Feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#AclFeed).

## Release 2011-03 (March 14, 2011)

This release adds support for modifying and adding categories to a Site through the API.

Features added in this release:

- [Sites Categories](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeedCategories).

## Release 2010-02 (March 10, 2010)

This release marks version 1.2 of the API, as it introduces several new features and bug fixes.

Features added in this release:

- [Web address mappings](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#WebAddressMappings).
- User-defined [page templates](https://developers.google.com/google-apps/sites) are now returned by the API using the `/-/template` category query. You can also [create pages from templates](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#PageTemplates) or save an existing page as a template. Resolves [issue 1762](http://code.google.com/p/gdata-issues/issues/detail?id=1762)
- The path parameter now supports root-level queries (e.g. `?path=/`).

Bug fixes:

- Fixed [issue 1903](http://code.google.com/p/gdata-issues/issues/detail?id=1903) where content feed was returning higher than normal 500s.

## Release 2010-01 (January 21, 2010)

This release marks version 1.1 of the API, as it introduces several new feeds/features.

Features added in this release:

- [Programmatic site creation](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeedPOST) is now supported using the new [site feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeed). Sites can also be created using a template. This resolves [Issue 1502](http://code.google.com/p/gdata-issues/issues/detail?id=1502)
- [Programmatic site copy](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeedCopySite) is now supported using the new [site feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeed).
- [Listing a user’s sites](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeedGET) is now supported using the new [site feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#SitesFeed).
- Listing and [sharing a site](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#AclFeedPOST) is now possible using the new [acl feed](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#AclFeed) for sharing permissions.
- A new query parameter [`include-all-sites`](https://developers.google.com/google-apps/sites/docs/1.0/reference#feed_ListSites) for retrieving the user’s implicit list of sites they have access to.
- The content feed now supports pagination by default. You can page through results by using the feed’s `next` link. This resolves [Issue 1674](http://code.google.com/p/gdata-issues/issues/detail?id=1674)
- We’ve added a [Python Developer’s Guide](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_python)!

## Release 2009-03 (November 9, 2009)

This release introduces new features in addition to several bug fixes.

Features added in this release:

- [Batch requests](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#BatchProcessing) now supported on content feed. For example, you can create a number pages in a single request.
- Full-text queries implemented using the Google Data `q` parameter. See the [Reference Guide](https://developers.google.com/google-apps/sites/docs/1.0/reference#Parameters)
- `author` parameter now supported for the revision and activity feeds. See the [Reference Guide](https://developers.google.com/google-apps/sites/docs/1.0/reference#Parameters)
- Average latency lowered by 83%.

Additional changes/fixes in this release:

- Fixed issue where moving/renaming a parent content entry deleted all of its children. (e.g. renmaing a filecabinet removed its attachments) [Issue 1592](http://code.google.com/p/gdata-issues/issues/detail?id=1592)

## Release 2009-02 (October 7, 2009)

This release introduces new features in addition to several bug fixes.

Features added in this release:

- ETag support. See the [Protocol Guide](https://developers.google.com/google-apps/sites/docs/1.0/developers_guide_protocol#ContentFeedConditionalGET).

Additional changes/fixes in this release:

- Fixed issue where attachments at top-level of Site were causing 500s when querying the content feed.

## Release 2009-01 (September 24, 2009)

This initial release introduces version 1.0 of the Google Sites Data API. See the [announcement blog post](http://googledataapis.blogspot.com/2009/09/new-data-api-for-google-sites.html).

[Back to top](#top_of_page)
