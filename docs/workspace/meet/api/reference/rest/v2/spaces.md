---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/spaces
root: workspace
fetched_at: 2026-04-23T15:30:33.584Z
---

# REST Resource: spaces

## Resource: Space

Virtual place where conferences are held. Only one active conference can be held in one space at any given time.

JSON representation

```
{
  "name": string,
  "meetingUri": string,
  "meetingCode": string,
  "config": {
    object (SpaceConfig)
  },
  "activeConference": {
    object (ActiveConference)
  },
  "phoneAccess": [
    {
      object (PhoneAccess)
    }
  ],
  "gatewaySipAccess": [
    {
      object (GatewaySipAccess)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Immutable. Resource name of the space.</p><p>Format: <code>spaces/{space}</code>.</p><p><code>{space}</code> is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, <code>jQCFfuBOdN5z</code>.</p><p>For more information, see <a href="https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space">How Meet identifies a meeting space</a>.</p></td></tr><tr><td><code>meetingUri</code></td><td><p><code>string</code></p><p>Output only. URI used to join meetings consisting of <code>https://meet.google.com/</code> followed by the <code>meetingCode</code>. For example, <code>https://meet.google.com/abc-mnop-xyz</code>.</p></td></tr><tr><td><code>meetingCode</code></td><td><p><code>string</code></p><p>Output only. Type friendly unique string used to join the meeting.</p><p>Format: <code>[a-z]+-[a-z]+-[a-z]+</code>. For example, <code>abc-mnop-xyz</code>.</p><p>The maximum length is 128 characters.</p><p>Can only be used as an alias of the space name to get the space.</p></td></tr><tr><td><code>config</code></td><td><p><code>object (<code>SpaceConfig</code>)</code></p><p>Configuration pertaining to the meeting space.</p></td></tr><tr><td><code>activeConference</code></td><td><p><code>object (<code>ActiveConference</code>)</code></p><p>Active conference, if it exists.</p></td></tr><tr><td><code>phoneAccess[]</code></td><td><p><code>object (<code>PhoneAccess</code>)</code></p><p>Output only. All regional phone access methods for this meeting space. Can be empty.</p></td></tr><tr><td><code>gatewaySipAccess[]</code></td><td><p><code>object (<code>GatewaySipAccess</code>)</code></p><p>Output only. The SIP-based access methods that can be used to join the conference. Can be empty.</p></td></tr></tbody></table>

## SpaceConfig

The configuration pertaining to a meeting space.

JSON representation

```
{
  "accessType": enum (AccessType),
  "entryPointAccess": enum (EntryPointAccess),
  "moderation": enum (Moderation),
  "moderationRestrictions": {
    object (ModerationRestrictions)
  },
  "attendanceReportGenerationType": enum (AttendanceReportGenerationType),
  "artifactConfig": {
    object (ArtifactConfig)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>accessType</code></td><td><p><code>enum (<code>AccessType</code>)</code></p><p>Access type of the meeting space that determines who can join without knocking. Default: The user's default access settings. Controlled by the user's admin for enterprise users or RESTRICTED.</p></td></tr><tr><td><code>entryPointAccess</code></td><td><p><code>enum (<code>EntryPointAccess</code>)</code></p><p>Defines the entry points that can be used to join meetings hosted in this meeting space. Default: EntryPointAccess.ALL</p></td></tr><tr><td><code>moderation</code></td><td><p><code>enum (<code>Moderation</code>)</code></p><p>The pre-configured moderation mode for the Meeting. Default: Controlled by the user's policies.</p></td></tr><tr><td><code>moderationRestrictions</code></td><td><p><code>object (<code>ModerationRestrictions</code>)</code></p><p>When moderation.ON, these restrictions go into effect for the meeting. When moderation.OFF, will be reset to default ModerationRestrictions.</p></td></tr><tr><td><code>attendanceReportGenerationType</code></td><td><p><code>enum (<code>AttendanceReportGenerationType</code>)</code></p><p>Whether attendance report is enabled for the meeting space.</p></td></tr><tr><td><code>artifactConfig</code></td><td><p><code>object (<code>ArtifactConfig</code>)</code></p><p>Configuration pertaining to the auto-generated artifacts that the meeting supports.</p></td></tr></tbody></table>

## AccessType

Possible access types for a meeting space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ACCESS_TYPE_UNSPECIFIED</code></td><td>Default value specified by the user's organization. Note: This is never returned, as the configured access type is returned instead.</td></tr><tr><td><code>OPEN</code></td><td>Anyone with the join information (for example, the URL or phone access information) can join without knocking.</td></tr><tr><td><code>TRUSTED</code></td><td>Members of the host's organization, invited external users, and dial-in users can join without knocking. Everyone else must knock.</td></tr><tr><td><code>RESTRICTED</code></td><td>Only invitees can join without knocking. Everyone else must knock.</td></tr></tbody></table>

## EntryPointAccess

Entry points that can be used to join a meeting. Example: `meet.google.com`, the Meet Embed SDK Web, or a mobile application.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ENTRY_POINT_ACCESS_UNSPECIFIED</code></td><td>Unused.</td></tr><tr><td><code>ALL</code></td><td>All entry points are allowed.</td></tr><tr><td><code>CREATOR_APP_ONLY</code></td><td>Only entry points owned by the Google Cloud project that created the space can be used to join meetings in this space. Apps can use the Meet Embed SDK Web or mobile Meet SDKs to create owned entry points.</td></tr></tbody></table>

## Moderation

The moderation mode for a meeting. When the moderation mode is on, the meeting owner has more control over the meeting with features such as co-host management (see message Member) and feature restrictions (see message ModerationRestrictions).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>MODERATION_UNSPECIFIED</code></td><td>Moderation type is not specified. This is used to indicate the user hasn't specified any value as the user does not intend to update the state. Users are not allowed to set the value as unspecified.</td></tr><tr><td><code>OFF</code></td><td>Moderation is off.</td></tr><tr><td><code>ON</code></td><td>Moderation is on.</td></tr></tbody></table>

## ModerationRestrictions

Defines restrictions for features when the meeting is moderated.

JSON representation

```
{
  "chatRestriction": enum (RestrictionType),
  "reactionRestriction": enum (RestrictionType),
  "presentRestriction": enum (RestrictionType),
  "defaultJoinAsViewerType": enum (DefaultJoinAsViewerType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>chatRestriction</code></td><td><p><code>enum (<code>RestrictionType</code>)</code></p><p>Defines who has permission to send chat messages in the meeting space.</p></td></tr><tr><td><code>reactionRestriction</code></td><td><p><code>enum (<code>RestrictionType</code>)</code></p><p>Defines who has permission to send reactions in the meeting space.</p></td></tr><tr><td><code>presentRestriction</code></td><td><p><code>enum (<code>RestrictionType</code>)</code></p><p>Defines who has permission to share their screen in the meeting space.</p></td></tr><tr><td><code>defaultJoinAsViewerType</code></td><td><p><code>enum (<code>DefaultJoinAsViewerType</code>)</code></p><p>Defines whether to restrict the default role assigned to users as viewer.</p></td></tr></tbody></table>

## RestrictionType

Determines who has permission to use a particular feature.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RESTRICTION_TYPE_UNSPECIFIED</code></td><td>Default value specified by user policy. This should never be returned.</td></tr><tr><td><code>HOSTS_ONLY</code></td><td>Meeting owner and co-host have the permission.</td></tr><tr><td><code>NO_RESTRICTION</code></td><td>All Participants have permissions.</td></tr></tbody></table>

## DefaultJoinAsViewerType

By default users will join as contributors. Hosts can restrict users to join as viewers. Note: If an explicit role is set for a users in the Member resource, the user will join as that role.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEFAULT_JOIN_AS_VIEWER_TYPE_UNSPECIFIED</code></td><td>Default value specified by user policy. This should never be returned.</td></tr><tr><td><code>ON</code></td><td>Users will by default join as viewers.</td></tr><tr><td><code>OFF</code></td><td>Users will by default join as contributors.</td></tr></tbody></table>

## AttendanceReportGenerationType

Possible states of whether attendance report is enabled for the meeting space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ATTENDANCE_REPORT_GENERATION_TYPE_UNSPECIFIED</code></td><td>Default value specified by user policy. This should never be returned.</td></tr><tr><td><code>GENERATE_REPORT</code></td><td>Attendance report will be generated and sent to drive/email.</td></tr><tr><td><code>DO_NOT_GENERATE</code></td><td>Attendance report will not be generated.</td></tr></tbody></table>

## ArtifactConfig

Configuration related to meeting artifacts potentially generated by this meeting space.

JSON representation

```
{
  "recordingConfig": {
    object (RecordingConfig)
  },
  "transcriptionConfig": {
    object (TranscriptionConfig)
  },
  "smartNotesConfig": {
    object (SmartNotesConfig)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>recordingConfig</code></td><td><p><code>object (<code>RecordingConfig</code>)</code></p><p>Configuration for recording.</p></td></tr><tr><td><code>transcriptionConfig</code></td><td><p><code>object (<code>TranscriptionConfig</code>)</code></p><p>Configuration for auto-transcript.</p></td></tr><tr><td><code>smartNotesConfig</code></td><td><p><code>object (<code>SmartNotesConfig</code>)</code></p><p>Configuration for auto-smart-notes.</p></td></tr></tbody></table>

## RecordingConfig

JSON representation

```
{
  "autoRecordingGeneration": enum (AutoGenerationType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>autoRecordingGeneration</code></td><td><p><code>enum (<code>AutoGenerationType</code>)</code></p><p>Defines whether a meeting space is automatically recorded when someone with the privilege to record joins the meeting.</p></td></tr></tbody></table>

## AutoGenerationType

Determines whether an artifact can be automatically generated in the meeting space.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>AUTO_GENERATION_TYPE_UNSPECIFIED</code></td><td>Default value specified by user policy. This should never be returned.</td></tr><tr><td><code>ON</code></td><td>The artifact is generated automatically.</td></tr><tr><td><code>OFF</code></td><td>The artifact is not generated automatically.</td></tr></tbody></table>

## TranscriptionConfig

JSON representation

```
{
  "autoTranscriptionGeneration": enum (AutoGenerationType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>autoTranscriptionGeneration</code></td><td><p><code>enum (<code>AutoGenerationType</code>)</code></p><p>Defines whether the content of a meeting is automatically transcribed when someone with the privilege to transcribe joins the meeting.</p></td></tr></tbody></table>

## SmartNotesConfig

Configuration related to smart notes in a meeting space. For more information about smart notes, see ["Take notes for me" in Google Meet](https://support.google.com/meet/answer/14754931).

JSON representation

```
{
  "autoSmartNotesGeneration": enum (AutoGenerationType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>autoSmartNotesGeneration</code></td><td><p><code>enum (<code>AutoGenerationType</code>)</code></p><p>Defines whether to automatically generate a summary and recap of the meeting for all invitees in the organization when someone with the privilege to enable smart notes joins the meeting.</p></td></tr></tbody></table>

## ActiveConference

Active conference.

JSON representation

```
{
  "conferenceRecord": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>conferenceRecord</code></td><td><p><code>string</code></p><p>Output only. Reference to 'ConferenceRecord' resource. Format: <code>conferenceRecords/{conferenceRecord}</code> where <code>{conferenceRecord}</code> is a unique ID for each instance of a call within a space.</p></td></tr></tbody></table>

## PhoneAccess

Phone access contains information required to dial into a conference using a regional phone number and a PIN that is specific to that phone number.

JSON representation

```
{
  "phoneNumber": string,
  "pin": string,
  "regionCode": string,
  "languageCode": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>phoneNumber</code></td><td><p><code>string</code></p><p>The phone number to dial for this meeting space in E.164 format. Full phone number with a leading '+' character.</p></td></tr><tr><td><code>pin</code></td><td><p><code>string</code></p><p>The PIN that users must enter after dialing the given number. The PIN consists of only decimal digits and the length may vary.</p></td></tr><tr><td><code>regionCode</code></td><td><p><code>string</code></p><p>The CLDR/ISO 3166 region code for the country associated with this phone access. To be parsed by the i18n RegionCode utility. Example: "SE" for Sweden.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The BCP 47/LDML language code for the language associated with this phone access. To be parsed by the i18n LanguageCode utility. Examples: "es-419" for Latin American Spanish, "fr-CA" for Canadian French.</p></td></tr></tbody></table>

## GatewaySipAccess

Details how to join the conference through a SIP gateway.

JSON representation

```
{
  "uri": string,
  "sipAccessCode": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p><p>The Session Initiation Protocol (SIP) URI the conference can be reached through.</p><p>The string is in one of these formats:</p><ul><li>"sip:<a href="mailto:USER_ID@GATEWAY_ADDRESS">USER_ID@GATEWAY_ADDRESS</a> "</li><li>"sips:<a href="mailto:USER_ID@GATEWAY_ADDRESS">USER_ID@GATEWAY_ADDRESS</a> "</li></ul><p>where USER_ID is the 13-digit universal pin (with the future option to support using a Meet meeting code as well), and GATEWAY_ADDRESS is a valid address to be resolved using a DNS SRV lookup, or a dotted quad.</p></td></tr><tr><td><code>sipAccessCode</code></td><td><p><code>string</code></p><p>The permanent numeric code for manual entry on specially configured devices.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a space.</td></tr><tr><td><h3>endActiveConference</h3></td><td>Ends an active conference (if there's one).</td></tr><tr><td><h3>get</h3></td><td>Gets details about a meeting space.</td></tr><tr><td><h3>patch</h3></td><td>Updates details about a meeting space.</td></tr></tbody></table>
