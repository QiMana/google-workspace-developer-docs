---
source: https://developers.google.com/workspace/vault/reference/rest/v1/Query
root: workspace
fetched_at: 2026-04-23T15:32:05.200Z
---

# Query

The query definition used for search and export.

JSON representation

```
{
  "corpus": enum (CorpusType),
  "dataScope": enum (DataScope),
  "searchMethod": enum (SearchMethod),
  "method": enum (SearchMethod),
  "terms": string,
  "startTime": string,
  "endTime": string,
  "teamDriveInfo": {
    object (TeamDriveInfo)
  },
  "timeZone": string,

  "accountInfo": {
    object (AccountInfo)
  },
  "orgUnitInfo": {
    object (OrgUnitInfo)
  },
  "sharedDriveInfo": {
    object (SharedDriveInfo)
  },
  "hangoutsChatInfo": {
    object (HangoutsChatInfo)
  },
  "sitesUrlInfo": {
    object (SitesUrlInfo)
  },
  "driveDocumentInfo": {
    object (DriveDocumentInfo)
  }
  "mailOptions": {
    object (MailOptions)
  },
  "driveOptions": {
    object (DriveOptions)
  },
  "hangoutsChatOptions": {
    object (HangoutsChatOptions)
  },
  "voiceOptions": {
    object (VoiceOptions)
  },
  "calendarOptions": {
    object (CalendarOptions)
  },
  "geminiOptions": {
    object (GeminiOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>corpus</code></td><td><p><code>enum (<code>CorpusType</code>)</code></p><p>The Google Workspace service to search.</p></td></tr><tr><td><code>dataScope</code></td><td><p><code>enum (<code>DataScope</code>)</code></p><p>The data source to search.</p></td></tr><tr><td><code>searchMethod<br><b>(deprecated)</b></code></td><td><p><code>enum (<code>SearchMethod</code>)</code></p><p>The search method to use.</p></td></tr><tr><td><code>method</code></td><td><p><code>enum (<code>SearchMethod</code>)</code></p><p>The entity to search. This field replaces <strong>searchMethod</strong> to support shared drives. When <strong>searchMethod</strong> is <strong>TEAM_DRIVE</strong>, the response of this field is <strong>SHARED_DRIVE</strong>.</p></td></tr><tr><td><code>terms</code></td><td><p><code>string</code></p><p>Service-specific <a href="https://support.google.com/vault/answer/2474474">search operators</a> to filter search results.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>teamDriveInfo<br><b>(deprecated)</b></code></td><td><p><code>object (<code>TeamDriveInfo</code>)</code></p><p>Required when <strong>SearchMethod</strong> is <strong>TEAM_DRIVE</strong>.</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Time Zone</a>. For more information about how Vault uses time zones, see <a href="https://support.google.com/vault/answer/6092995#time">the Vault help center</a>.</p></td></tr><tr><td><code>accountInfo</code></td><td><p><code>object (<code>AccountInfo</code>)</code></p><p>Required when <strong>SearchMethod</strong> is <strong>ACCOUNT</strong>.</p></td></tr><tr><td><code>orgUnitInfo</code></td><td><p><code>object (<code>OrgUnitInfo</code>)</code></p><p>Required when <strong>SearchMethod</strong> is <strong>ORG_UNIT</strong>.</p></td></tr><tr><td><code>sharedDriveInfo</code></td><td><p><code>object (<code>SharedDriveInfo</code>)</code></p><p>Required when <strong>SearchMethod</strong> is <strong>SHARED_DRIVE</strong>.</p></td></tr><tr><td><code>hangoutsChatInfo</code></td><td><p><code>object (<code>HangoutsChatInfo</code>)</code></p><p>Required when <strong>SearchMethod</strong> is <strong>ROOM</strong>. (read-only)</p></td></tr><tr><td><code>sitesUrlInfo</code></td><td><p><code>object (<code>SitesUrlInfo</code>)</code></p><p>Required when <strong>SearchMethod</strong> is <strong>SITES_URL</strong>.</p></td></tr><tr><td><code>driveDocumentInfo</code></td><td><p><code>object (<code>DriveDocumentInfo</code>)</code></p><p>Required when <strong>SearchMethod</strong> is <strong>DRIVE_DOCUMENT</strong>.</p></td></tr><tr><td colspan="2">Union field <code>corpus_options_field</code>. Additional search options for specific services. <code>corpus_options_field</code> can be only one of the following:</td></tr><tr><td><code>mailOptions</code></td><td><p><code>object (<code>MailOptions</code>)</code></p><p>Set Gmail search-specific options.</p></td></tr><tr><td><code>driveOptions</code></td><td><p><code>object (<code>DriveOptions</code>)</code></p><p>Set Drive search-specific options.</p></td></tr><tr><td><code>hangoutsChatOptions</code></td><td><p><code>object (<code>HangoutsChatOptions</code>)</code></p><p>Set Chat search-specific options. (read-only)</p></td></tr><tr><td><code>voiceOptions</code></td><td><p><code>object (<code>VoiceOptions</code>)</code></p><p>Set Voice search-specific options.</p></td></tr><tr><td><code>calendarOptions</code></td><td><p><code>object (<code>CalendarOptions</code>)</code></p><p>Set Calendar search-specific options.</p></td></tr><tr><td><code>geminiOptions</code></td><td><p><code>object (<code>GeminiOptions</code>)</code></p><p>Set Gemini search-specific options.</p></td></tr></tbody></table>

## DataScope

The source of data to search.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DATA_SCOPE_UNSPECIFIED</code></td><td>No data source specified.</td></tr><tr><td><code>ALL_DATA</code></td><td>All available data.</td></tr><tr><td><code>HELD_DATA</code></td><td>Only data on hold.</td></tr><tr><td><code>UNPROCESSED_DATA</code></td><td>Only data not yet processed by Vault. (Gmail and Groups only)</td></tr></tbody></table>

## SearchMethod

The entity type for the search.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SEARCH_METHOD_UNSPECIFIED</code></td><td>A search method must be specified or else it is rejected.</td></tr><tr><td><code>ACCOUNT</code></td><td>Search the data of the accounts specified in <a href="https://developers.google.com/workspace/vault/reference/rest/v1/Query#accountinfo">AccountInfo</a>.</td></tr><tr><td><code>ORG_UNIT</code></td><td>Search the data of all accounts in the organizational unit specified in <a href="https://developers.google.com/workspace/vault/reference/rest/v1/Query#orgunitinfo">OrgUnitInfo</a>.</td></tr><tr><td><code>TEAM_DRIVE</code></td><td><p>Search the data in the Team Drive specified in <strong>teamDriveInfo</strong>.</p></td></tr><tr><td><code>ENTIRE_ORG</code></td><td>Search the data of all accounts in the organization. Supported only for Gmail. When specified, you don't need to specify <strong>AccountInfo</strong> or <strong>OrgUnitInfo</strong>.</td></tr><tr><td><code>ROOM</code></td><td>Search messages in the Chat spaces specified in <a href="https://developers.google.com/workspace/vault/reference/rest/v1/Query#hangoutschatinfo">HangoutsChatInfo</a>.</td></tr><tr><td><code>SITES_URL</code></td><td>Search for sites by the published site URLs specified in <a href="https://developers.google.com/workspace/vault/reference/rest/v1/Query#sitesurlinfo">SitesUrlInfo</a>.</td></tr><tr><td><code>SHARED_DRIVE</code></td><td>Search the files in the shared drives specified in <a href="https://developers.google.com/workspace/vault/reference/rest/v1/Query#shareddriveinfo">SharedDriveInfo</a>.</td></tr><tr><td><code>DRIVE_DOCUMENT</code></td><td>Retrieve the documents specified in DriveDocumentInfo.</td></tr></tbody></table>

## AccountInfo

The accounts to search

JSON representation

```
{
  "emails": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>emails[]</code></td><td><p><code>string</code></p><p>A set of accounts to search.</p></td></tr></tbody></table>

## OrgUnitInfo

The organizational unit to search

JSON representation

```
{
  "orgUnitId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>The name of the organizational unit to search, as provided by the <a href="https://developers.google.com/admin-sdk/directory/">Admin SDK Directory API</a>.</p></td></tr></tbody></table>

## SharedDriveInfo

JSON representation

```
{
  "sharedDriveIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sharedDriveIds[]</code></td><td><p><code>string</code></p><p>A list of shared drive IDs, as provided by the <a href="https://developers.google.com/drive">Drive API</a>.</p></td></tr></tbody></table>

## HangoutsChatInfo

The Chat spaces to search

JSON representation

```
{
  "roomId": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>roomId[]</code></td><td><p><code>string</code></p><p>A list of Chat spaces IDs, as provided by the <a href="https://developers.google.com/workspace/chat">Chat API</a>. There is a limit of exporting from 500 Chat spaces per request.</p></td></tr></tbody></table>

## SitesUrlInfo

The published site URLs of new Google Sites to search

JSON representation

```
{
  "urls": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>urls[]</code></td><td><p><code>string</code></p><p>A list of published site URLs.</p></td></tr></tbody></table>

## DriveDocumentInfo

The Drive documents to search.

JSON representation

```
{

  "documentIds": {
    object (DriveDocumentIds)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>identifier</code>. The format to retrieve the Drive documents. <code>identifier</code> can be only one of the following:</td></tr><tr><td><code>documentIds</code></td><td><p><code>object (<code>DriveDocumentIds</code>)</code></p><p>Specify Drive documents by document ID.</p></td></tr></tbody></table>

## DriveDocumentIds

Specify Drive documents by document ID.

JSON representation

```
{
  "ids": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ids[]</code></td><td><p><code>string</code></p><p>Required. A list of Drive document IDs.</p></td></tr></tbody></table>

## TeamDriveInfo

Team Drives to search

JSON representation

```
{
  "teamDriveIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>teamDriveIds[]<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>List of Team Drive IDs, as provided by the <a href="https://developers.google.com/drive">Drive API</a>.</p></td></tr></tbody></table>

## MailOptions

Additional options for Gmail search

JSON representation

```
{
  "excludeDrafts": boolean,
  "clientSideEncryptedOption": enum (ClientSideEncryptedOption)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>excludeDrafts</code></td><td><p><code>boolean</code></p><p>Set to <strong>true</strong> to exclude drafts.</p></td></tr><tr><td><code>clientSideEncryptedOption</code></td><td><p><code>enum (<code>ClientSideEncryptedOption</code>)</code></p><p>Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both.</p></td></tr></tbody></table>

## ClientSideEncryptedOption

If your organization uses [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov), the encryption status of content

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED</code></td><td>Encryption status unspecified. Results include both client-side encrypted and non-encrypted content.</td></tr><tr><td><code>CLIENT_SIDE_ENCRYPTED_OPTION_ANY</code></td><td>Include both client-side encrypted and unencrypted content in results.</td></tr><tr><td><code>CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED</code></td><td>Include client-side encrypted content only.</td></tr><tr><td><code>CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED</code></td><td>Include unencrypted content only.</td></tr></tbody></table>

## DriveOptions

Additional options for Drive search.

JSON representation

```
{
  "versionDate": string,
  "includeTeamDrives": boolean,
  "includeSharedDrives": boolean,
  "clientSideEncryptedOption": enum (ClientSideEncryptedOption),
  "sharedDrivesOption": enum (SharedDrivesOption)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>versionDate</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>includeTeamDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Set to true to include Team Drive.</p></td></tr><tr><td><code>includeSharedDrives<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>Set to <strong>true</strong> to include shared drives.</p></td></tr><tr><td><code>clientSideEncryptedOption</code></td><td><p><code>enum (<code>ClientSideEncryptedOption</code>)</code></p><p>Set whether the results include only content encrypted with <a href="https://support.google.com/a?p=cse_ov">Google Workspace Client-side encryption</a> content, only unencrypted content, or both. Defaults to both. Currently supported for Drive.</p></td></tr><tr><td><code>sharedDrivesOption</code></td><td><p><code>enum (<code>SharedDrivesOption</code>)</code></p><p>Optional. Options to include or exclude documents in shared drives. We recommend using this field over includeSharedDrives. This field overrides includeSharedDrives and includeTeamDrives when set.</p></td></tr></tbody></table>

## SharedDrivesOption

Option on the type of shared drive documents to include.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SHARED_DRIVES_OPTION_UNSPECIFIED</code></td><td>No shared drive option specified.</td></tr><tr><td><code>NOT_INCLUDED</code></td><td>If a resource is in a shared drive, it isn't included in the search.</td></tr><tr><td><code>INCLUDED_IF_ACCOUNT_IS_NOT_A_MEMBER</code></td><td>Shared drive resources are only included in instances where the account is a collaborator on a resource but they are not a member of the shared drive. This maps to the <b>"Included only if documents shared directly (not due to shared drive membership)"</b> option in the Vault UI. (Previously "includeSharedDrives" off)</td></tr><tr><td><code>INCLUDED</code></td><td>Resources in shared drives are included in the search. (Previously "includeSharedDrives" on)</td></tr></tbody></table>

## HangoutsChatOptions

Additional options for Google Chat search

JSON representation

```
{
  "includeRooms": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>includeRooms</code></td><td><p><code>boolean</code></p><p>For searches by account or organizational unit, set to <strong>true</strong> to include rooms.</p></td></tr></tbody></table>

## VoiceOptions

Additional options for Voice search

JSON representation

```
{
  "coveredData": [
    enum (VoiceCoveredData)
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>coveredData[]</code></td><td><p><code>enum (<code>VoiceCoveredData</code>)</code></p><p>Datatypes to search</p></td></tr></tbody></table>

## CalendarOptions

Additional options for Calendar search

JSON representation

```
{
  "locationQuery": [
    string
  ],
  "peopleQuery": [
    string
  ],
  "minusWords": [
    string
  ],
  "responseStatuses": [
    enum (AttendeeResponse)
  ],
  "versionDate": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>locationQuery[]</code></td><td><p><code>string</code></p><p>Matches only those events whose location contains all of the words in the given set. If the string contains quoted phrases, this method only matches those events whose location contain the exact phrase. Entries in the set are considered in "and".</p><p>Word splitting example: ["New Zealand"] vs ["New","Zealand"] "New Zealand": matched by both "New and better Zealand": only matched by the later</p></td></tr><tr><td><code>peopleQuery[]</code></td><td><p><code>string</code></p><p>Matches only those events whose attendees contain all of the words in the given set. Entries in the set are considered in "and".</p></td></tr><tr><td><code>minusWords[]</code></td><td><p><code>string</code></p><p>Matches only those events that do not contain any of the words in the given set in title, description, location, or attendees. Entries in the set are considered in "or".</p></td></tr><tr><td><code>responseStatuses[]</code></td><td><p><code>enum (<code>AttendeeResponse</code>)</code></p><p>Matches only events for which the custodian gave one of these responses. If the set is empty or contains ATTENDEE_RESPONSE_UNSPECIFIED there will be no filtering on responses.</p></td></tr><tr><td><code>versionDate</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Search the current version of the Calendar event, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

## AttendeeResponse

User response to an invitation.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ATTENDEE_RESPONSE_UNSPECIFIED</code></td><td>Attendee response unspecified. If this is set no filtering on responses will be done, all other attendee responses that are part of the query options are ignored.</td></tr><tr><td><code>ATTENDEE_RESPONSE_NEEDS_ACTION</code></td><td>The participant has been invited but has not responded yet.</td></tr><tr><td><code>ATTENDEE_RESPONSE_ACCEPTED</code></td><td>The participant plans to attend.</td></tr><tr><td><code>ATTENDEE_RESPONSE_DECLINED</code></td><td>The participant does not plan to attend.</td></tr><tr><td><code>ATTENDEE_RESPONSE_TENTATIVE</code></td><td>The participant expects to possibly attend.</td></tr></tbody></table>

## GeminiOptions

This type has no fields.

Additional options for Gemini search
