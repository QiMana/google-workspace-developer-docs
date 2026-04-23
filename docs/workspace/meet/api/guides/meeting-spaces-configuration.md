---
source: https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration
root: workspace
fetched_at: 2026-04-23T15:30:26.421Z
---

# Configure meeting spaces and members

A [meeting space](./overview.md#meeting-space) represents a virtual place or a persistent object (such as a meeting room) where conferences are held. A meeting space also helps users meet and find shared resources.

When you create a meeting space using the [`spaces.create`](../reference/rest/v2/spaces/create.md) method, it returns an instance of a [`spaces`](../reference/rest/v2/spaces.md) resource. The resource includes the [`SpaceConfig`](../reference/rest/v2/spaces.md#spaceconfig) object that's the configuration for the meeting space. It also contains the [`ActiveConference`](../reference/rest/v2/spaces.md#activeconference) object that's a link to the current [`conferenceRecords`](../reference/rest/v2/conferenceRecords.md) resource within the meeting space. For more information on managing a meeting space, see [Create and manage meeting spaces](./meeting-spaces.md).

The following sections detail how to configure a meeting space using these objects and methods.

## Set moderation and meeting access

You can set how users join a meeting, the moderation modes, the feature restrictions, and the permissions users receive when they join a meeting, through the [`SpaceConfig`](../reference/rest/v2/spaces.md#spaceconfig) object.

### Access meeting spaces

To determine who can join a meeting space without knocking, set the [`accessType`](../reference/rest/v2/spaces.md#SpaceConfig.FIELDS.access_type) field using the [`AccessType`](../reference/rest/v2/spaces.md#accesstype) object. You can choose from multiple settings on whether to automatically allow attendees to join. The field defaults to the user's default access settings.

To define the entry points that can be used to join meetings hosted in a meeting space, set the [`entryPointAccess`](../reference/rest/v2/spaces.md#SpaceConfig.FIELDS.entry_point_access) field using the [`EntryPointAccess`](../reference/rest/v2/spaces.md#entrypointaccess) object. Set to `ALL` to allow all entry points or `CREATOR_APP_ONLY` to scope the entry points to only those owned by the Google Cloud project that created the meeting space.

### Moderate meeting spaces

To moderate a meeting, you can set the [`moderation`](../reference/rest/v2/spaces.md#SpaceConfig.FIELDS.moderation) field using the [`Moderation`](../reference/rest/v2/spaces.md#moderation) object. When the `moderation` mode is `on`, the meeting organizer has control over the meeting with features such as co-host management (see [`spaces.members`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.n9342pnht73k)) and feature restrictions using the [`moderationRestrictions`](../reference/rest/v2/spaces.md#SpaceConfig.FIELDS.moderation_restrictions) field. For more information on members, see [Manage space members](#space-members).

To define feature restrictions when the meeting is moderated (`moderation` is `on`), set the `moderationRestrictions` field using the [`ModerationRestrictions`](../reference/rest/v2/spaces.md#moderationrestrictions) object. The restrictions define who has permission within the meeting space to send chat messages or reactions, or to share their screen.

To set the feature restrictions on the `moderationRestrictions` field, use the [`RestrictionType`](../reference/rest/v2/spaces.md#restrictiontype) to apply the `chatRestriction`, `reactionRestriction`, `presentRestriction`. Set to `HOSTS_ONLY` to apply the permissions to both the meeting organizer and co-host, or `NO_RESTRICTION` to apply to all participants.

To restrict the default role assigned to users as viewer, set the boolean [`defaultJoinAsViewerType`](../reference/rest/v2/spaces.md#ModerationRestrictions.FIELDS.default_join_as_viewer_type) field using the [`DefaultJoinAsViewerType`](../reference/rest/v2/spaces.md#defaultjoinasviewertype). If `defaultJoinAsViewerType` is `on`, users join as viewers. If `off`, users join as contributors. Default is `off`. If an explicit role is set for a user in `spaces.members`, the user joins as that role.

### Generate attendance report

To create an attendance report for the meeting space, set the [`attendanceReportGenerationType`](../reference/rest/v2/spaces.md#SpaceConfig.FIELDS.attendance_report_generation_type) field using the [`AttendanceReportGenerationType`](../reference/rest/v2/spaces.md#attendancereportgenerationtype) object. If a report is requested, Google Meet saves the attendance report to the meeting organizer's Google Drive and an email is also sent.

## Manage auto artifacts

Meeting organizers, but not co-hosts, can pre-configure auto-recording, auto-transcripts, and smart notes within the meeting space. When these settings are enabled, the meeting space is recorded, transcripts are generated, and meeting notes are captured and organized into Google Docs automatically. Each feature is independent and is set per meeting space. Recording captions are only available in English.

You can pre-configure the auto artifacts either when you [create a meeting space](./meeting-spaces.md#create-meeting-space) or once the meeting space is created. Both methods require the `meetings.space.settings` OAuth scope. For more information, see [OAuth scopes for settings](#oauth-scopes).

You can also set up auto artifacts for meetings created from Google Calendar.

To set auto artifacts, use the [`ArtifactConfig`](../reference/rest/v2/spaces.md#artifactconfig) object, within the [`SpaceConfig`](../reference/rest/v2/spaces.md#spaceconfig) object. `ArtifactConfig` is made up of the `recordingConfig`, `transcriptionConfig`, and `smartNotesConfig` fields.

Each field is mapped to a similar object such as [`RecordingConfig`](../reference/rest/v2/spaces.md#recordingconfig), [`TranscriptionConfig`](../reference/rest/v2/spaces.md#transcriptionconfig), and [`SmartNotesConfig`](../reference/rest/v2/spaces.md#smartnotesconfig). To set each object, use the [`AutoGenerationType`](../reference/rest/v2/spaces.md#autogenerationtype) to toggle the config object `on` or `off`.

To retrieve the artifacts created during a conference, see [Work with artifacts](./artifacts.md).

### Difference between transcripts and smart notes

While both meeting transcripts and smart notes (also known as "take notes for me") capture information from your meeting, these features serve different purposes and produce different artifacts.

The following table shows how they differ:

| Feature | Transcripts | Smart notes |
| --- | --- | --- |
| **Overview** | A verbatim, word-for-word record. | A concise summary of key points generated by Gemini. |
| **Detail level** | 100% detail. Everything said is written down. | High-level. Focuses on decisions and action items. |
| **Use case** | Legal compliance, checking exact quotes, and user accessibility. | Allows late participants to catch up instantly; automates minute-taking and project tracking. |
| **Real-time usage** | Used for captions. The file is generated after the call. | You can view the summary building in the side panel during the call. |
| **Output** | A long Google Docs document with speaker name and timestamps. | A concise Google Docs document of meeting notes with sections and bullet points. |
| **Citation** | Contains the full text that can be linked to. | Includes citations (timestamps) that link back to the specific moment in the transcript for context, if both transcripts and smart notes are enabled. For more information, see [When both features are enabled](#both-enabled). |

#### When both features are enabled

While each feature can be used separately, both transcripts and smart notes can also be used at the same time to create better post-meeting artifacts.

When both are enabled, you'll see citations in your generated smart notes document. These citations are located throughout the details section and link to specific timestamps in the meeting transcript. By clicking on these citations, you can jump directly to the relevant section in the transcript to gain a deeper understanding of the discussion.

During the meeting, participants see indicators that both features are active. They must remain active for the duration of the meeting to generate clickable citations. Even though the files are interlinked, the system still generates two distinct documents in the host's Google Drive. Both files are also automatically attached to the Google Calendar event.

### OAuth scopes for settings

Setting or accessing meetings settings requires the following OAuth scopes:

| Use case | Scope code |
| --- | --- |
| Set auto artifact generation for spaces created by other apps. | `https://www.googleapis.com/auth/meetings.space.settings` |
| Get or list artifacts from conferences created by other apps. | `https://www.googleapis.com/auth/meetings.space.readonly` |
| Get or list other pre-meeting settings of a meeting space created by a third-party app. | `https://www.googleapis.com/auth/meetings.space.created`   `https://www.googleapis.com/auth/meetings.space.readonly` |
| Read and edit the settings for all meeting spaces a user can access through any other app, such as Calendar. | `https://www.googleapis.com/auth/meetings.space.settings` |

For more information on OAuth scopes, see [Meet REST API scopes](./authenticate-authorize.md#meet-api-scopes).

## Manage space members

A space member is a user who's configured to have a role in the meeting space. These users can join the meeting space without requesting permission to connect (also known as "knocking").

While meeting organizers can automatically enter the meeting space, you can also configure additional members to join the meeting without knocking. Additionally, members can be configured to have a [`Role`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?tab=t.0#heading=h.x2vdhj4vc9nq) in the meeting, such as `COHOST` which gives them the same abilities to manage the meeting as the meeting organizer. For more information about accessing a meeting space without knocking, see [`AccessType`](../reference/rest/v2/spaces.md#accesstype).

The [`spaces.members`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.n9342pnht73k) resource includes the `name`, `user`, and `role` fields.

Note that a member is different from a [participant](./participants.md). A participant is a person joined to a call or that uses [Companion mode](https://support.google.com/meet/answer/11295507), watching as a viewer, or a room device connected to a call. There's one [`conferenceRecords.participants`](../reference/rest/v2/conferenceRecords.participants.md) resource for each person.

You can manage space members using the following methods:

- [`spaces.members.create`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.iyr7edttcr8h)
- [`spaces.members.delete`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.6oo6w2d6euqg)
- [`spaces.members.get`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.xgiwbrabpevn)
- [`spaces.members.list`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.7eebh571khfm)

Each method takes a path parameter with the create and list methods using the `parent` field to denote the meeting space, and the delete and get methods using the `name` field to filter the results based on the meeting space and the member name. All methods, except delete, return an instance of the `spaces.members` resource.

All methods, except delete, support the `fields` parameter in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters). When the `fields` parameter is omitted, the API response defaults to `"name,email,role,user"`.

The `fields` parameter relies on a [FieldMask](https://protobuf.dev/reference/protobuf/google.protobuf/#field-mask) for response filtering. A FieldMask is a way for API callers to list fields a request should return. It's a comma-delimited list of fields to specify only certain fields in an object are used while leaving the other fields unchanged. Using a FieldMask allows the API to avoid unnecessary work and improves performance. A field mask is used for create, get, and list methods. For more information on field masks, see Google Sheets API's [Use field masks](../../../sheets/api/guides/field-masks.md).
