---
source: https://developers.google.com/workspace/meet/release-notes
root: workspace
fetched_at: 2026-04-23T15:31:12.047Z
---

# Google Meet REST API release notes

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/meet-release-notes.xml`.

This page contains release notes for features and updates to the Meet REST API. We recommend that Meet REST API developers periodically check this list for any new announcements.

## April 16, 2026

Announcement

**Meet API**

**Generally Available**: The [`phoneAccess`](https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces#Space.FIELDS.phone_access) and [`gatewaySipAccess`](https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces#Space.FIELDS.gateway_sip_access) fields on the [`spaces`](https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces) resource can now be used to identify and join a meeting space.

For details, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview#identify-meeting-space).

## April 02, 2026

Announcement

**Meet API**

**Generally Available**: The [`get`](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes/get) and [`list`](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes/list) methods on the [`smartNotes`](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes) resource can now retrieve smart notes files in a conference record. For details, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts#smart-notes).

Additionally, subscriptions are now generally available for the following `smartNotes` events:

- `google.workspace.meet.smartNote.v2.started`
- `google.workspace.meet.smartNote.v2.ended`
- `google.workspace.meet.smartNote.v2.fileGenerated`

For details, see [Subscribe to Google Meet events](https://developers.google.com/workspace/events/guides/events-meet) and [Respond to events from Google Meet](https://developers.google.com/workspace/meet/api/guides/events-overview).

## December 17, 2025

Feature

**Meet API**

**Developer Preview**: Subscriptions are now available for the following `smartNotes` events:

- `google.workspace.meet.smartNote.v2.started`
- `google.workspace.meet.smartNote.v2.ended`
- `google.workspace.meet.smartNote.v2.fileGenerated`

For details, see [Subscribe to Google Meet events](https://developers.google.com/workspace/events/guides/events-meet) in the Google Workspace Events API documentation.

For information on how to receive Google Meet events from Google Cloud Pub/Sub, see [Respond to events from Google Meet](https://developers.google.com/workspace/meet/api/guides/events-overview).

## December 15, 2025

Feature

**Meet API**

**Developer Preview**: Available as part of the [Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features.

You can now retrieve smart notes files in a conference record using the `get` and `list` methods on the `smartNotes` resource.

For details, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts#smart-notes).

## November 20, 2025

Feature

**Meet API**

**Developer Preview**: Available as part of the [Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features.

You can now identify and join a meeting space using the `phoneAccess` and `gatewaySipAccess` fields on the `spaces` resource.

For details, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview#identify-meeting-space).

## November 12, 2025

Feature

**Meet API**

**Generally Available**: Calendar invitees can now receive `google.workspace.meet.conference.v2.started` and `google.workspace.meet.transcript.v2.fileGenerated` events.

For details, see [Subscribe to Google Meet events](https://developers.google.com/workspace/events/guides/events-meet) in the Google Workspace Events API documentation.

For information on how to receive Google Meet events from Google Cloud Pub/Sub, see [Respond to events from Google Meet](https://developers.google.com/workspace/meet/api/guides/events-overview).

## April 29, 2025

Announcement

**Meet API**

**Generally Available**: You can now programmatically configure the moderation settings and the permissions users receive when they join a meeting space. Additionally, you can also pre-configure auto-recording, auto-transcripts, and "take notes for me" in meeting spaces.

For more information, see [Configure meeting spaces and members](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration).

## March 13, 2025

Announcement

The Google Workspace Events API `v1beta` endpoint will be decommissioned for Google Chat and Google Meet events on April 30, 2025. To subscribe to Chat or Meet events, use the generally available [`v1` endpoint](https://developers.google.com/workspace/events/reference/rest/v1).

## February 24, 2025

Announcement

**Meet Media API**

**Developer Preview**: The [Google Meet Media API](https://developers.google.com/meet/media-api/guides/overview) is now available as part of the [Developer Preview Program](https://developers.google.com/workspace/preview). The Meet Media API lets you access real-time media from Google Meet conferences.

## February 07, 2025

Announcement

**Meet API**

**Developer Preview**: You can now pre-configure auto-recording, auto-transcripts, and "take notes for me" within a meeting space. For details, see [Manage auto artifacts](https://developers.google.com/meet/api/guides/beta/configuration-beta#auto-artifacts).

**Generally Available**: You can now use a new non-sensitive scope (`https://www.googleapis.com/auth/meetings.space.settings`) to set up auto-artifacts for meetings created by other apps including Google Calendar. For details, see [OAuth scopes for settings](https://developers.google.com/meet/api/guides/beta/configuration-beta#oauth-scopes).

Feature

**Meet API**

**Generally Available**: All meeting participants can now query for certain conference data including the [conference records](https://developers.google.com/meet/api/guides/conferences), the [conference artifacts](https://developers.google.com/meet/api/guides/artifacts), and the [participant records](https://developers.google.com/meet/api/guides/participants).

## January 30, 2025

Change

**Meet Add-ons SDK**

**Early Access Preview**: Meet add-ons on Android now contains a new meeting status, `MEETING_WITH_START_COACTIVITY_PERMISSION_DISABLED`, which lets you set a status when the user doesn't have permission to start a co-activity session during a meeting.

## October 07, 2024

Change

**Meet Add-ons SDK**

**Generally Available**: You can now retrieve the `meetingCode` property of an ongoing meeting. This is applicable in version 1.1.0.

## September 09, 2024

Announcement

**Meet Add-ons SDK**

**Generally Available**: The [Google Meet Add-ons SDK](https://developers.google.com/meet/add-ons/guides/overview) is now generally available.

The Meet Add-ons SDK lets you embed your app into Google Meet as a Google Workspace Add-on where users can discover, share, and collaborate, plus sync content state across devices, without leaving Meet.

For more information, see the [guides](https://developers.google.com/meet/add-ons/guides/overview) and [reference documentation](https://developers.google.com/meet/add-ons/reference/websdk/addon_sdk).

## August 08, 2024

Change

**Meet Add-ons SDK**

[Developer Preview](https://developers.google.com/workspace/preview): Add-ons can now programmatically end a collaboration by calling the [`endCollaboration`](https://developers.google.com/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.endcollaboration.md) method for the `MeetMainStageClient` or the `MeetSidePanelClient`. This is applicable in version `0.9.0` or later.

## June 13, 2024

Announcement

**Meet API**

[Developer Preview](https://developers.google.com/workspace/preview): The Meet API now lets you pre-configure a meeting space and manage the members who join a meeting.

For more information, see [Configure meeting spaces and members](https://developers.google.com/meet/api/guides/beta/configuration-beta).

Change

**Meet Add-ons SDK**

**Early Access Preview**: For Meet add-ons on Android, you can now view and reference specific error codes from add-on exception errors.

## June 03, 2024

Change

**Meet Add-ons SDK**

[Developer Preview](https://developers.google.com/workspace/preview): Google Meet Add-ons SDK supports two usability improvements that aren't backwards compatible and require developer action.

1. The introduction of an add-on loading screen. Make sure to call `createAddonSession` on both the main stage and side panel once your add-on has finished loading. This signals Meet to dismiss the loading screen.
2. The removal of the `startActivity` button in the Meet side panel. Instead, the add-on now starts the activity through a call to `startCollaboration`. Make sure to call `startCollaboration` in your add-on once the user has completed content selection and is ready to start the collaboration.

## May 29, 2024

Change

**Meet Add-ons SDK**

- Added the connection exception `addonexception.ADDON_NOT_INSTALLED`. To fix this error, display a message to the user that they must install the add-on and provide a link to the Google Workspace Marketplace page containing the add-on.

## May 09, 2024

Change

**Live Sharing SDK**

- Added the `withCoWatching` and `withCoDoing` methods to allow both first party and third party apps to include the initial state of the add-on session.
- Added a new `AddonException` of `OPERATION_UNSUPPORTED`. The exception occurs when requesting an unsupported operation on Meet.

## February 15, 2024

Announcement

**Meet API**

**Generally available**: v2 of the [Google Meet API](https://developers.google.com/meet/api/guides/overview) is now generally available. For more information, see the [v2 reference documentation](https://developers.google.com/meet/api/reference/rest/v2).

Announcement

**Generally available**: Google Meet events are now generally available using the Google Workspace Events API. To learn more, see [Subscribe to Google Meet events](https://developers.google.com/workspace/events/guides/events-meet).

## February 12, 2024

Deprecated

**Meet Add-ons SDK**

[**Developer Preview**](https://developers.google.com/workspace/preview): The `getCurrentMeetingRecordingStatus()` method has been deprecated. There isn't a replacement method to get this data.

## February 06, 2024

Change

**Meet API**

- **[Developer Preview](https://developers.google.com/workspace/preview)**: A change announced by email on December 21, 2023 to members of the developer preview program, specifying [`spaces/{spaceId}`](https://developers.google.com/meet/api/reference/rest/v2beta/spaces) changed from the previous version, has now gone into effect. Requests using meeting space resource names with the old meeting space IDs are now rejected. Note that a meeting code can also be used as an alias when calling [`spaces.get`](https://developers.google.com/meet/api/reference/rest/v2beta/spaces/get), such as `spaces/abc-mnop-xyz`. When provided with a meeting code, `spaces.get` returns the canonical resource identifier for the meeting space.

## January 04, 2024

Announcement

**Meet Add-ons SDK**

- Google Chrome and other browsers have begun phasing out third-party cookies to better protect user privacy. Chrome has restricted third-party cookies for 1% of users from January 4th, 2024. For more details on how to prepare, provide feedback, and report potential site issues, refer to the following:
	- [Prepare for third-party cookie restrictions](https://developers.google.com/privacy-sandbox/3pcd?db=cloud-cx)
		- [The next step toward phasing out third-party cookies in Chrome](https://blog.google/products/chrome/privacy-sandbox-tracking-protection/?db=cloud-cx)

## December 15, 2023

Change

**Meet API**

- **[Developer Preview](https://developers.google.com/workspace/preview)**: Added the `startTime` and `endTime` fields to the [`conferenceRecords.recordings`](https://developers.google.com//meet/api/reference/rest/v2beta/conferenceRecords.recordings) resource and [`conferenceRecords.transcripts`](https://developers.google.com//meet/api/reference/rest/v2beta/conferenceRecords.transcripts) resource.

## December 07, 2023

Feature

**Meet Add-ons SDK**

- **Developer Preview**: The [Google Meet Add-ons SDK](https://developers.google.com/meet/add-ons/guides/overview) is now available as part of the [Developer Preview Program](https://developers.google.com/workspace/preview). The Meet Add-ons SDK lets you embed your app into Google Meet as an add-on where users can discover, share, and collaborate in the app without leaving Meet.

## November 02, 2023

Feature

**Meet API**

- **Developer Preview**: [Google Meet API](https://developers.google.com/meet/api/guides/overview) is now available as part of the [Developer Preview Program](https://developers.google.com/workspace/preview). Meet API lets you create and manage meetings for Google Meet and offers entry points to your users directly from your app.

## October 16, 2023

Feature

**Live Sharing SDK**

- Added a `RecordingInfo` field to the `AddonMeetingInfo` resource that indicates if the current Google Meet call is being recorded.
- Added the `verifyRecordingInfo` method to the `AddonSession.Builder` resource to specify if the Meet Add-ons SDK should make sure that the add-on application has the correct recording status. If this method is called and there's a discrepancy between the add-on and Meet in regards to the recording status, then Meet severs the add-on connection and the session is terminated.
	```
	addonClient.newSessionBuilder(appContext, new MyAddonSessionDelegate())
	      .withParticipantMetadata(new MyMetadataDelegate(), initialMetadata)
	      .withCoWatching(new MyCoWatchingHandler())
	      .withCoDoing(new MyCoDoingHandler())
	      .verifyRecordingInfo() // Newly added method
	      .begin();
	```
- Artifact released: `com.google.android.meet:meet-addons:2.0.0-alpha04`.

## August 11, 2023

Change

**Embed SDK Web**

- You no longer have to add a domain to an allowlist. Any domain can embed Meet.
- You no longer have to provide an `accessToken` when building the `MeetApp`. Previously, the `accessToken` indicated user consent of having Google Meet in an embedded website. Meet now shows its own consent dialog to the user before they can join a meeting. Consent is cached for 24 hours.
- Anonymous users can now join a meeting and are only required to enter a name to represent them during the meeting. Previously, users had to be signed in to a Google Account.
- Documentation changes:
	- The "Configure OAuth consent" and "Set up authentication & authorization" pages were removed.
		- The [Set up your Google Cloud project](https://developers.google.com/meet/embed/guides/start-developing#setup-project) section was added.

## June 07, 2023

Change

**Live Sharing SDK**

- Renamed SDK artifact and namespace:
	- Maven artifact changed to `com.google.android.meet:meet-addons`.
		- Java namespace changed to `com.google.android.meet.addons`.
- Removed deprecated `queryMeeting()` method. Use `registerMeetingStatusListener()` instead.
- Removed `liveSharingApplicationName` parameter from the session builder.
- The `cloudProjectNumber` parameter on `AddonClientFactory#getClient` is now required. This value is acquired by [registering a Meet add-on](https://developers.google.com/meet/add-ons/guides/build-add-on).
- Artifact released: `com.google.android.meet:meet-addons:2.0.0-alpha03`.

## May 23, 2023

Feature

**Live Sharing SDK**

Added `onParticipantPrivilegeChanged` callback to `AddonSessionHandler`. Artifact released: `com.google.android.livesharing:livesharing:2.0.0-alpha02`.

**Live Sharing SDK**

Renamed the following symbols:

```
+   \`LiveSharing*\` → \`Addon*\`
+   \`*Delegate\` → \`*Handler\`
+   \`CoWatchingSession\` → \`CoWatchingClient\`
+   \`CoDoingSession\` → \`CoDoingClient\`
```

## March 23, 2023

Announcement

**Live Sharing SDK**

Alpha version of a new SDK major release. While the internals of this SDK are production-ready, the API surface of this alpha is subject to additional breaking changes—such as new features—before a final 2.0.0 release is published. The following changes are part of this release:

- `Co-Doing`:
	- `CoDoingSession`: Renamed `broadcastStateUpdate()` to `setGlobalState()`.
		- `CoDoingSessionDelegate`:
		- `Eliminated onCoDoingStateQuery()`. If initial state must be set upon connecting to live sharing, call `CoDoingSession#setGlobalState()` explicitly instead.
				- Renamed `onCoDoingStateChanged()` to `onGlobalStateChanged()`.
- `Co-Watching`:
	- `CoWatchingSession`: Removed previously-deprecated `notifyPlayoutRate()` overload.
		- `CoWatchingSessionDelegate`:
		- Renamed `onCoWatchingStateQuery()` to `onStateQuery()`.
				- `onStateQuery()` now returns a `QueriedCoWatchingState`, which is a subset of `CoWatchingState`. Update the return type and either:
			- Continue building and returning a `CoWatchingState`...
						- Or, simplify the implementation by constructing a simpler `QueriedCoWatchingState` instance.
- `LiveSharingClient`:
	- Replaced the following methods with a builder pattern:
		- `connectMeeting()` / `disconnectMeeting()`
				- `beginCoDoing()` / `endCoDoing()`
				- `beginCoWatching()` / `endCoWatching()`
- Instead of calling `connectMeeting()` followed by `beginCoDoing()` (or co-watching), call `newSessionBuilder().withCoDoing().begin()`.
- `begin()` returns a new `LiveSharingSession` instance:
	- To end the session, call `endSession()`.
		- To set participant metadata after the session has started, call `setParticipantMetadata()`.
		- To access the co-doing/co-watching session, call `getCoDoing()` / `getCoWatching()`.
		- To access information about the current meeting, call `getMeetingInfo()`.
- To set up participant metadata and register a delegate, call `withParticipantMetadata()` as part of the session builder chain.
- Added `registerMeetingStatusListener()` / `unregisterMeetingStatusListener()` and deprecated \`queryMeeting().
- Artifacts released: `com.google.android.livesharing:livesharing:2.0.0-alpha01`.

## February 22, 2023

Feature

**Live Sharing SDK**

Added `LiveSharingSessionDelegate` to the API. Artifact released: `com.google.android.livesharing:livesharing:1.2.0`.

Deprecated

**Live Sharing SDK**

Marked `MeetingDisconnectHandler` as deprecated; developers should migrate to `LiveSharingSessionDelegate` instead.

## January 03, 2023

Feature

**Live Sharing SDK**

- Added `notifyLiveSharingFailureEvent` method to API for failure reporting.
- Artifact released: `com.google.android.livesharing:livesharing:1.1.0`.

Fixed

**Live Sharing SDK**

Fixed some issues.

Change

**Live Sharing SDK**

Maximum size of `co-doing` state increased from 1650 bytes to 16 KB.

## October 27, 2022

Change

**Live Sharing SDK**:

- Updated external dependencies.
- Artifact released `com.google.android.livesharing:livesharing:1.0.5`.

Fixed

**Live Sharing SDK**: Fixed potential issues in bundled Proguard configuration in previous release.

## October 03, 2022

Change

**Live Sharing SDK**:

- Improved bundled Proguard configuration.
- Updated `MAX_CODOING_BLOB_BYTES` to correctly represent the current maximum.
- Artifact released: `com.google.android.livesharing:livesharing:1.0.4`.

## September 28, 2022

Change

**Live Sharing SDK**:

- The SDK size was significantly reduced.
- Artifact released: `com.google.android.livesharing:livesharing:1.0.3`

Fixed

**Live Sharing SDK**: Fixed some issues.

## September 27, 2022

Fixed

**Live Sharing SDK**:

- Fixed some issues.
- Javadoc improvements.
- Artifact released: `com.google.android.livesharing:livesharing:1.0.2`.

## August 29, 2022

Fixed

**Live Sharing SDK**: Fixed some issues. Artifact released: `com.google.android.livesharing:livesharing:1.0.1`.

## August 24, 2022

Fixed

**Live Sharing SDK**: Fixed some issues. Artifact released: `com.google.android.livesharing:livesharing:1.0.0`.

## August 18, 2022

Fixed

**Live Sharing SDK**: Fixed some issues. Artifact released `com.google.android.livesharing:livesharing:1.0.0-eap08`.

## July 26, 2022

Change

**Live Sharing SDK**:

- Executors passed to `LiveSharingClientFactory#getClient` are now respected by the SDK.
- Updated `LiveSharingException`:
	- `MEET_VERSION_UNSUPPORTED`: Consumers can now query `LiveSharingExceptionMetadata#packageName()` to redirect the user to install an appropriate app.
		- `SDK_VERSION_UNSUPPORTED`: New error code for phasing out old SDK versions if necessary in the future.
		- `PARTICIPANT_INELIGIBLE`: New error code indicating that the current user is not eligible to participate.
- The SDK no longer requires the full `com.google.guava:guava` target as a dependency; only `com.google.guava:listenablefuture`.

Feature

**Live Sharing SDK**:

- Added API for setting participant metadata. **Note**: This functionality is not yet present. This will occur in a future release.
- Artifact released: `com.google.android.livesharing:livesharing:1.0.0-eap07`

Deprecated

**Live Sharing SDK**: The `com.google.android.apps.meetings.permission.MEET_LIVE_SHARING` permission is obsolete and removed from the manifest.

## May 25, 2022

Fixed

**Live Sharing SDK**: Addressed some race conditions.

Feature

**Live Sharing SDK**:

- Surfaced `LiveSharingMeetingInfo.Builder` to API consumers for ease-of-testing.
- Added new overload of `LiveSharingClientFactory#getClient,` permitting API consumers to provide their own executor services. Consumers can begin using this API, but the SDK does not yet respect the provided executors. This will occur in a future release.
- Added error code mechanism to `LiveSharingException`, allowing common errors to be tagged with a canonical code. Currently supports one error code: `MEET_VERSION_UNSUPPORTED`.
- Enabled `#queryMeeting()` feature.
- Artifact released `com.google.android.livesharing:livesharing:1.0.0-eap05`.

Change

**Live Sharing SDK**: Removed internal handler creation for ongoing call detector. If LSA does not provide a handler, the registered receiver will run on the UI thread.

Issue

**Live Sharing SDK**: In-call banner does not have the correct string.

## May 09, 2022

Breaking

**Live Sharing SDK**: Renames the following symbols on the API surface:

| Before | After |
| --- | --- |
| `CoDoing` | `CoDoingSession` |
| `CoWatching` | `CoWatchingSession` |
| `CoDoingController` | `CoDoingSessionDelegate` |
| `CoWatchingController` | `CoWatchingSessionDelegate` |

Feature

**Live Sharing SDK**: Artifact released `com.google.android.livesharing:livesharing:1.0.0-eap04`

## May 05, 2022

Fixed

**Live Sharing SDK**:

- Fixes `ExceptionInInitializerError` bug introduced in `1.0.0-eap02`.
- Fixes "playout rate set as zero" known issue.
- Fixes "wait for connection to resolve" known issue.

Feature

**Live Sharing SDK**: Artifact released `com.google.android.livesharing:livesharing:1.0.0-eap03`

## May 03, 2022

Fixed

**Live Sharing SDK**: Addresses issue with `io.grpc.util.SecretRoundRobinLoadBalancerProvider` instantiation for some apps.

Feature

**Live Sharing SDK**: Enables logging for `ERROR` -level logs for better debugging with partners. This will be reverted at the end of the EAP program; any details revealed in these logs are covered by NDA.

Feature

**Live Sharing SDK**: Artifacts released `com.google.android.livesharing:livesharing:1.0.0-eap02`

## April 14, 2022

Announcement

**Live Sharing SDK**: Initial release. Artifact released: `com.google.android.livesharing:livesharing:1.0.0-eap01`
