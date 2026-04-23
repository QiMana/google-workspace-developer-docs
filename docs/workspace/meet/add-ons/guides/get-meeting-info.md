---
source: https://developers.google.com/workspace/meet/add-ons/guides/get-meeting-info
root: workspace
fetched_at: 2026-04-23T15:30:12.550Z
---

# Get meeting info

This page describes how to retrieve information regarding your meeting.

## Get meeting info

To get details about a meeting, use the [`getMeetingInfo()`](../reference/websdk/addon_sdk.meetaddonclient.getmeetinginfo.md.md) method on the [`MeetAddonClient`](../reference/websdk/addon_sdk.meetaddonclient.md.md) object.

The method returns an instance of the [`MeetingInfo`](../reference/websdk/addon_sdk.meetinginfo.md.md) object which contains details about the meeting in which the add-on is running. This includes the [`meetingId`](../reference/websdk/addon_sdk.meetinginfo.meetingid.md.md) property for the ongoing meeting, which you can use to retrieve meeting information using the [Google Meet REST API](../../api/guides/overview.md). The meeting ID is a globally unique identifier for the meeting space. Additionally, the `MeetingInfo` object includes the [`meetingCode`](../reference/websdk/addon_sdk.meetinginfo.meetingcode.md.md) of the ongoing meeting.
