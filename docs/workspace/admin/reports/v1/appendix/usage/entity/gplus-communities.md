---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/entity/gplus-communities
root: workspace
fetched_at: 2026-04-23T15:24:36.660Z
---

# Currents Parameters

This document lists the parameters for various types of Currents activity events. You can retrieve these events by calling [EntityUsageReports.get()](../../../../reference/rest/v1/entityUsageReports/get.md) with `parameters=gplus_communities:PARAMETER`.

To retrieve a report on Currents communities, use `gplus_communities` as the value for `entityType`. For communities restricted to your organization, the `entityKey` can be found in the URL of the Community on Currents. For example, the URL of the Currents Help community is `https://currents.google.com/communities/115758385206378551362`. In this example, the `entityKey` is "115758385206378551362". The same value is returned in the `entityId` field of the response.

When using `all` as the `entityKey`, communities outside your organization are shown in this report if one of the owners is a member of your organization. However, the community name of these instances is empty, and you can't use the `entityId` returned in the response to generate a link to the community. You can still use the `entityId` as the `entityKey` in further requests.

.

| Name | Type | Description |
| --- | --- | --- |
| community\_name | string | The display name of community. |
| creation\_time\_usec | integer | The timestamp of when the community was created. |
| num\_30day\_active\_external\_members | integer | The number of active members in the community in the past 30 days who are not members of the domain. |
| num\_30day\_active\_internal\_members | integer | The number of active members in the community in the past 30 days who are also members of the domain. |
| num\_30day\_active\_members | integer | The number of active members in the community in the past 30 days. |
| num\_30day\_new\_members | integer | The number of new members in the community in the past 30 days. |
| num\_30day\_plusones | integer | The number of likes in the community in the past 30 days. |
| num\_30day\_replies | integer | The number of comments in the community in the past 30 days. |
| num\_30day\_shares | integer | The number of posts in the community in the past 30 days. |
| num\_7day\_active\_external\_members | integer | The number of active members in the community in the past 7 days who are not members of the domain. |
| num\_7day\_active\_internal\_members | integer | The number of active members in the community in the past 7 days who are also members of the domain. |
| num\_7day\_active\_members | integer | The number of active members in the community in the past 7 days. |
| num\_7day\_new\_members | integer | The number of new members in the community in the past 7 days. |
| num\_7day\_plusones | integer | The number of likes in the community in the past 7 days. |
| num\_7day\_replies | integer | The number of comments in the community in the past 7 days. |
| num\_7day\_shares | integer | The number of posts in the community in the past 7 days. |
| num\_90day\_new\_members | integer | The number of new members in the community in the past 90 days. |
| num\_90day\_plusones | integer | The number of likes in the community in the past 90 days. |
| num\_90day\_replies | integer | The number of comments in the community in the past 90 days. |
| num\_90day\_shares | integer | The number of posts in the community in the past 90 days. |
| num\_external\_members | integer | The number of members in the community who are not members of the domain. |
| num\_internal\_members | integer | The number of members in the community who are members of the domain. |
| num\_total\_members | integer | The total number of members in the community. |
| visibility | string | The privacy type of community. |
