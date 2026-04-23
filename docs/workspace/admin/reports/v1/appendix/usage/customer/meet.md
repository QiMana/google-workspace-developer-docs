---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/customer/meet
root: workspace
fetched_at: 2026-04-23T15:24:36.377Z
---

# Google Meet Parameters

This document lists the parameters for various types of Google Meet activity events. You can retrieve these events by calling [CustomerUsageReports.get()](https://developers.google.com/workspace/admin/reports/v1/reference/customerUsageReports/get) with `parameters=meet:PARAMETER`.

You can use these parameters with this reports API to get details about the duration, number of participants, and device-specific characteristics of Meet calls, and general levels of Meet user activity across your organization. These metrics reflect aggregated activity across all calls joining Meet meetings originated by users in your organization.

All Hangouts related metrics that were previously in the [Currents metrics group](https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/customers-gplus) have been migrated to Meet. For more information on migrating from the Currents versions to the Meet metrics, see the [migration guide](https://developers.google.com/workspace/admin/reports/v1/updated-meet-metrics).

## Concepts

### Meetings

For reporting purposes, a meeting is the connection of two or more concurrent calls to the same Meet meeting. this reporting metrics only count meetings directly set up and owned by users within your organization. Meetings set up and owned by other organizations are not counted, even if some of the participants are users from your organization. However, metrics about your meetings do include internal, external, and [PSTN (public switched telephone network)](https://en.wikipedia.org/wiki/Public_switched_telephone_network) participants.

The API calculates meeting duration as the sum of all the intervals with an overlap of two or more calls. The diagram below illustrates how the meeting duration is calculated.

![Meet meeting details](https://developers.google.com/static/workspace/admin/reports/v1/images/MeetMeetingDetails.png "Meet meeting details")

this report includes both meetings and calls for the day in which the meeting ends.

### Calls

A call is a connection from a client to a Meet meeting. The client can be a mobile app, a web app, or a Chrome device. Each connection counts as a separate call. For example, a single user joining from both a phone and a desktop counts as two separate calls. Or, an interrupted connection that is re-initiated by the same user counts as two separate calls. Call duration refers to the total duration of a given connection, even if there is only one client connected to the meeting at a given point during that call.

Meet reports also consider each client type independently to show usage over different devices. The following table lists the supported client types.

| Client type | Description |
| --- | --- |
| android | Any Android phone or tablet using the native Meet application. |
| chromebox | Chromebox for Meetings devices. |
| chromebase | Standalone Chromebase for Meetings devices. |
| ios | Any iOS phone or tablet using the native Meet application. |
| jamboard | Jamboard whiteboards joining a Meet meeting. |
| web | Any call using the web interface independently of the hardware, operating system, or browser. |
| unknown\_client | An unidentified client type. |

### Chrome devices

Usage of Chrome devices for meetings is divided into two client types based on form factor:

- Chromebases are simple all-in-one devices to connect to meetings.
- Chromeboxes are compact computing devices attached to a TV to connect to meetings.

### PSTN calls

Participants that connect to a meeting using dial-in or dial-out are considered to be neither internal nor external participants. Instead they are accounted for in the following metrics: `num_calls_by_pstn_in_users`, `total_call_minutes_by_pstn_in_users`, `num_meetings_with_pstn_in_users`, `num_calls_by_pstn_out_users`, `total_call_minutes_by_pstn_out_users`, and `num_meetings_with_pstn_out_users`.

### Reporting time zone

Meet reporting aggregates activity for a single day and sends this report for a single day's activity on the following calendar day. All metrics summarize only activity for the day of this report, and only count meetings finished within that day. All reports use days in the [PST time zone](https://en.wikipedia.org/wiki/Pacific_Time_Zone), which means that an organization based in Tokyo will receive daily reports that lag 16 hours behind the organization's actual work day. Therefore, meetings that that begin before midnight PST (e.g. 3:30 p.m. JST) on Tuesday, and end after midnight PST on Wednesday (e.g. 4:30 JST) are reported on the second day, once the meeting is over.

| Name | Type | Description |
| --- | --- | --- |
| `average_meeting_minutes` | integer | This indicates a customer's average duration of meetings in minutes. |
| `average_meeting_minutes_with_11_to_15_calls` | integer | This indicates a customer's average duration of meetings in minutes broken down by a maximum of 11 to 15 concurrent calls. |
| `average_meeting_minutes_with_16_to_25_calls` | integer | This indicates a customer's average duration of meetings in minutes broken down by maximum of 16 to 25 concurrent calls. |
| `average_meeting_minutes_with_26_to_50_calls` | integer | This indicates a customer's average duration of meetings in minutes broken down by maximum of 26 to 50 concurrent calls. |
| `average_meeting_minutes_with_2_calls` | integer | This indicates a customer's average duration of meetings in minutes broken down by maximum of 2 concurrent calls. |
| `average_meeting_minutes_with_3_to_5_calls` | integer | This indicates a customer's average duration of meetings in minutes broken down by maximum of 3 to 5 concurrent calls. |
| `average_meeting_minutes_with_6_to_10_calls` | integer | This indicates a customer's average duration of meetings in minutes broken down by maximum of 6 to 10 concurrent calls. |
| `lonely_meetings` | integer | The number of meetings that have less than 2 concurrent calls. These meetings are not counted in num\_meetings and related metrics. |
| `max_concurrent_usage_chromebase` | integer | The number of Chromebase devices connected to internal meetings at the same time. |
| `max_concurrent_usage_chromebox` | integer | The number of Chromebox devices connected to internal meetings at the same time. |
| `num_1day_active_users` | integer | The number of users active in the previous day. |
| `num_30day_active_users` | integer | The number of users active in the previous 30 days. |
| `num_7day_active_users` | integer | The number of users active in the previous 7 days. |
| `num_calls` | integer | The total number of calls organized by users. |
| `num_calls_android` | integer | The total number of calls on the date of this report from Android devices. |
| `num_calls_by_external_users` | integer | The total number of calls by external users to meetings on the date of this report. |
| `num_calls_by_internal_users` | integer | The total number of calls by internal users to meetings on the date of this report. |
| `num_calls_by_pstn_in_users` | integer | The total number of PSTN calls that dialed-in to meetings on the date of this report |
| `num_calls_by_pstn_out_users` | integer | The total number of PSTN calls that dialed-out from meetings on the date of this report |
| `num_calls_chromebase` | integer | The total number of calls on the date of this report by Chromebase devices. |
| `num_calls_chromebox` | integer | The total number of calls on the date of this report by Chromebox devices. |
| `num_calls_ios` | integer | The total number of calls on the date of this report by iOS devices. |
| `num_calls_jamboard` | integer | The total number of calls on the date of this report by Jamboards. |
| `num_calls_unknown_client` | integer | The total number of calls on the date of this report by unknown clients. |
| `num_calls_web` | integer | The total number of calls on the date of this report by web clients. |
| `num_meetings` | integer | The total number of Meet meetings held on the date of this report. |
| `num_meetings_android` | integer | The total number of Meet meetings held on the date of this report that include at least one call from an Android device. |
| `num_meetings_chromebase` | integer | The total number of Meet meetings held on the date of this report that include at least one call from a Chromebase device. |
| `num_meetings_chromebox` | integer | Parameter to indicate a customer's total number of Meet meetings held on the date of this report that include at least one call from a Chromebox device. |
| `num_meetings_ios` | integer | The total number of Meet meetings held on the date of this report that include at least one call from an iOS device. |
| `num_meetings_jamboard` | integer | The total number of Meet meetings held on the date of this report that include at least one call from a Jamboard. |
| `num_meetings_unknown_client` | integer | The total number of Meet meetings held on the date of this report that include at least one call from an unknown client. |
| `num_meetings_web` | integer | The total number of Meet meetings held on the date of this report that include at least one call from a web client. |
| `num_meetings_with_11_to_15_calls` | integer | This indicates a customer's number of meetings broken down by the maximum number of concurrent calls. |
| `num_meetings_with_16_to_25_calls` | integer | This indicates a customer's number of meetings broken down by the maximum number of concurrent calls. |
| `num_meetings_with_26_to_50_calls` | integer | This indicates a customer's number of meetings broken down by the maximum number of concurrent calls. |
| `num_meetings_with_2_calls` | integer | The number of meetings broken down by the maximum number of concurrent calls. |
| `num_meetings_with_3_to_5_calls` | integer | This indicates a customer's number of meetings broken down by the maximum number of concurrent calls. |
| `num_meetings_with_6_to_10_calls` | integer | This indicates a customer's number of meetings broken down by the maximum number of concurrent calls. |
| `num_meetings_with_external_users` | integer | The total number of Meet meetings that include at least one external user or caller. |
| `num_meetings_with_pstn_in_users` | integer | The total number of Meet meetings held on the date of this report that include at least one user connected through PSTN dial-in. |
| `num_meetings_with_pstn_out_users` | integer | The total number of Meet meetings held on the date of this report that include at least one user connected through PSTN dial-out. |
| `total_call_minutes` | integer | The sum of all connected calls on the date of this report. |
| `total_call_minutes_android` | integer | The total duration of calls on the date of this report by Android devices. |
| `total_call_minutes_by_external_users` | integer | The total duration of external Meet client calls in meetings on the date of this report. |
| `total_call_minutes_by_internal_users` | integer | The total duration of meeting connect calls made by organization users on the date of this report. |
| `total_call_minutes_by_pstn_in_users` | integer | The total duration of PSTN calls dialing into meetings on the date of this report. |
| `total_call_minutes_by_pstn_out_users` | integer | The total duration of PSTN calls dialing out from meetings on the date of this report. |
| `total_call_minutes_chromebase` | integer | The total duration of calls on the date of this report by Chromebase devices. |
| `total_call_minutes_chromebox` | integer | The total duration of calls on the date of this report by Chromebox devices. |
| `total_call_minutes_ios` | integer | The total duration of calls on the date of this report by iOS devices. |
| `total_call_minutes_jamboard` | integer | The total duration of calls on the date of this report by Jamboards. |
| `total_call_minutes_unknown_client` | integer | The total duration of calls on the date of this report by unknown clients. |
| `total_call_minutes_web` | integer | The total duration of calls on the date of this report by web clients. |
| `total_meeting_minutes` | integer | The total meeting duration on the date of this report. |
