---
source: https://developers.google.com/workspace/meet/add-ons/guides/get-meeting-info
root: workspace
fetched_at: 2026-04-23T15:30:12.550Z
---

# Get meeting info

This page describes how to retrieve information regarding your meeting.

## Get meeting info

To get details about a meeting, use the [`getMeetingInfo()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.getmeetinginfo) method on the [`MeetAddonClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient) object.

The method returns an instance of the [`MeetingInfo`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetinginfo) object which contains details about the meeting in which the add-on is running. This includes the [`meetingId`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetinginfo.meetingid) property for the ongoing meeting, which you can use to retrieve meeting information using the [Google Meet REST API](https://developers.google.com/workspace/meet/api/guides/overview). The meeting ID is a globally unique identifier for the meeting space. Additionally, the `MeetingInfo` object includes the [`meetingCode`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetinginfo.meetingcode) of the ongoing meeting.
