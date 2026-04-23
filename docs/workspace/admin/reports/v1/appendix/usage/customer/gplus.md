---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/customer/gplus
root: workspace
fetched_at: 2026-04-23T15:24:36.475Z
---

# Currents Parameters

This document lists the parameters for various types of Currents activity events. You can retrieve these events by calling [CustomerUsageReports.get()](../../../../reference/rest/v1/customerUsageReports/get.md) with `parameters=gplus:PARAMETER`.

.

| Name | Type | Description |
| --- | --- | --- |
| num\_1day\_active\_users | integer | The number of users who have used Currents on the date of this report. This includes users who viewed any Currents activity. |
| num\_30day\_active\_users | integer | The number of users who have used Currents in the past 30 days from the date of this report. This includes users who viewed any Currents activity. |
| num\_7day\_active\_cfm\_devices | integer | The number of 7 day active Chromebox for Meetings devices. |
| num\_7day\_active\_users | integer | The number of users who have used Currents in the past 7 days from the date of this report. This includes users who viewed any Currents activity. |
| num\_collections | integer | The number of collections owned by any domain member. |
| num\_collections\_organization\_private | integer | The number of organization-private collections owned by any domain member. These collections are visible to a limited group of people within the organization. |
| num\_collections\_organization\_wide | integer | The number of private collections owned by any domain member. These collections are visible to the whole organization, but not to anyone outside the organization. |
| num\_collections\_public | integer | The number of public collections owned by any domain member. These collections are visible to everyone, including people outside the organization. |
| num\_communities | integer | The number of communities owned by any domain member. |
| num\_communities\_organization\_private | integer | The number of organization-private communities owned by any domain member. These communities are open to a limited group of people within the organization. |
| num\_communities\_organization\_wide | integer | The number of organization-wide communities owned by any domain. These communities are open to anyone in the organization to join, but not to anyone outside the organization. |
| num\_communities\_private | integer | The number of private communities owned by any domain member. These communities are open to a limited group of people, which may include people outside the organization. |
| num\_communities\_public | integer | The number of public communities owned by any domain member. These communities are open to anyone to join, including people outside the organization. |
| num\_new\_users | integer | The number of users who signed up for Currents on the date of this report. |
| num\_plusones | integer | The number of likes on the date of this report. |
| num\_replies | integer | The number of comments created on the date of this report. |
| num\_reshares | integer | The number of posts reshared on the date of this report. |
| num\_shares | integer | The number of posts, including reshares, created on the date of this report. |
| num\_stream\_items\_read | integer | The number of posts read on the date of this report. |
| num\_video\_calls | integer | The number of video calls made by users in a day. |
| num\_video\_calls\_android | integer | The number of video calls made by users on an Android mobile platform in a day. |
| num\_video\_calls\_cfm | integer | The number of video calls made by users on a Chromebox in a day and with at least one participant on a Chromebox platform. |
| num\_video\_calls\_ios | integer | The number of video calls made by users on an iOS platform in a day. |
| num\_video\_calls\_web | integer | The number of video calls made by users from a web platform in a day. |
| num\_video\_conferences | integer | The number of video conferences held in a day. |
| num\_video\_conferences\_android | integer | The number of video conferences held in a day and with at least one participant on an Android mobile platform. |
| num\_video\_conferences\_cfm | integer | The number of video conferences held in a day and with at least one participant on a Chromebox platform. |
| num\_video\_conferences\_ios | integer | The number of video conferences held in a day and with at least one participant on an iOS mobile platform. |
| num\_video\_conferences\_mobile | integer | The number of video conferences held with at least one participant on a mobile platform in a day. |
| num\_video\_conferences\_web | integer | The number of video conferences held in a day and with at least one participant on a web platform. |
| total\_video\_call\_minutes | integer | The number of minutes users spent in video calls in a day. |
| total\_video\_call\_minutes\_android | integer | The number of minutes users spent in video calls on an Android platform in a day. |
| total\_video\_call\_minutes\_cfm | integer | The number of minutes users spent in video calls on a Chromebox in a day and with at least one participant on a Chromebox platform. |
| total\_video\_call\_minutes\_ios | integer | The number of minutes users spent in video calls on an iOS mobile platform in a day. |
| total\_video\_call\_minutes\_web | integer | The number of minutes users spent in video calls on a web platform in a day. |
