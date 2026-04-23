---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds
root: workspace
fetched_at: 2026-04-23T15:32:06.335Z
---

# REST Resource: matters.holds

## Resource: Hold

A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit.

To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

JSON representation

```
{
  "holdId": string,
  "name": string,
  "updateTime": string,
  "accounts": [
    {
      object (HeldAccount)
    }
  ],
  "orgUnit": {
    object (HeldOrgUnit)
  },
  "corpus": enum (CorpusType),
  "query": {
    object (CorpusQuery)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>holdId</code></td><td><p><code>string</code></p><p>The unique immutable ID of the hold. Assigned during creation.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the hold.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The last time this hold was modified.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>accounts[]</code></td><td><p><code>object (<code>HeldAccount</code>)</code></p><p>If set, the hold applies to the specified accounts and <strong>orgUnit</strong> must be empty.</p></td></tr><tr><td><code>orgUnit</code></td><td><p><code>object (<code>HeldOrgUnit</code>)</code></p><p>If set, the hold applies to all members of the organizational unit and <strong>accounts</strong> must be empty. This property is mutable. For Groups holds, set <strong>accounts</strong>.</p></td></tr><tr><td><code>corpus</code></td><td><p><code>enum (<code>CorpusType</code>)</code></p><p>The service to be searched.</p></td></tr><tr><td><code>query</code></td><td><p><code>object (<code>CorpusQuery</code>)</code></p><p>Service-specific options. If set, <strong>CorpusQuery</strong> must match <strong>CorpusType</strong>.</p></td></tr></tbody></table>

## HeldOrgUnit

The organizational unit covered by a hold. This structure is immutable.

JSON representation

```
{
  "orgUnitId": string,
  "holdTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>The organizational unit's immutable ID as provided by the <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>.</p></td></tr><tr><td><code>holdTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>When the organizational unit was put on hold. This property is immutable.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

## CorpusQuery

Service-specific options for holds.

JSON representation

```
{

  "driveQuery": {
    object (HeldDriveQuery)
  },
  "mailQuery": {
    object (HeldMailQuery)
  },
  "groupsQuery": {
    object (HeldGroupsQuery)
  },
  "hangoutsChatQuery": {
    object (HeldHangoutsChatQuery)
  },
  "voiceQuery": {
    object (HeldVoiceQuery)
  },
  "calendarQuery": {
    object (HeldCalendarQuery)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>corpus_query</code>. If set, this must match the service type. <code>corpus_query</code> can be only one of the following:</td></tr><tr><td><code>driveQuery</code></td><td><p><code>object (<code>HeldDriveQuery</code>)</code></p><p>Service-specific options for Drive holds. If set, <strong>CorpusType</strong> must be <strong>DRIVE</strong>.</p></td></tr><tr><td><code>mailQuery</code></td><td><p><code>object (<code>HeldMailQuery</code>)</code></p><p>Service-specific options for Gmail holds. If set, <strong>CorpusType</strong> must be <strong>MAIL</strong>.</p></td></tr><tr><td><code>groupsQuery</code></td><td><p><code>object (<code>HeldGroupsQuery</code>)</code></p><p>Service-specific options for Groups holds. If set, <strong>CorpusType</strong> must be <strong>GROUPS</strong>.</p></td></tr><tr><td><code>hangoutsChatQuery</code></td><td><p><code>object (<code>HeldHangoutsChatQuery</code>)</code></p><p>Service-specific options for Chat holds. If set, <strong>CorpusType</strong> must be <strong>HANGOUTS_CHAT</strong>.</p></td></tr><tr><td><code>voiceQuery</code></td><td><p><code>object (<code>HeldVoiceQuery</code>)</code></p><p>Service-specific options for Voice holds. If set, <strong>CorpusType</strong> must be <strong>VOICE</strong>.</p></td></tr><tr><td><code>calendarQuery</code></td><td><p><code>object (<code>HeldCalendarQuery</code>)</code></p><p>Service-specific options for Calendar holds. If set, <strong>CorpusType</strong> must be <strong>CALENDAR</strong>.</p></td></tr></tbody></table>

## HeldDriveQuery

Options for Drive holds.

JSON representation

```
{
  "includeTeamDriveFiles": boolean,
  "includeSharedDriveFiles": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>includeTeamDriveFiles<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>To include files in Team Drives in the hold, set to <strong>true</strong>.</p></td></tr><tr><td><code>includeSharedDriveFiles</code></td><td><p><code>boolean</code></p><p>To include files in shared drives in the hold, set to <strong>true</strong>.</p></td></tr></tbody></table>

## HeldMailQuery

Query options for Gmail holds.

JSON representation

```
{
  "terms": string,
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>terms</code></td><td><p><code>string</code></p><p>The <a href="https://support.google.com/vault/answer/2474474">search operators</a> used to refine the messages covered by the hold.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

## HeldGroupsQuery

Query options for group holds.

JSON representation

```
{
  "terms": string,
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>terms</code></td><td><p><code>string</code></p><p>The <a href="https://support.google.com/vault/answer/2474474">search operators</a> used to refine the messages covered by the hold.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

## HeldHangoutsChatQuery

Options for Chat holds.

JSON representation

```
{
  "includeRooms": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>includeRooms</code></td><td><p><code>boolean</code></p><p>To include messages in Chat spaces the user was a member of, set to <strong>true</strong>.</p></td></tr></tbody></table>

## HeldVoiceQuery

Options for Voice holds.

JSON representation

```
{
  "coveredData": [
    enum (VoiceCoveredData)
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>coveredData[]</code></td><td><p><code>enum (<code>VoiceCoveredData</code>)</code></p><p>A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored.</p></td></tr></tbody></table>

## HeldCalendarQuery

This type has no fields.

Options for Calendar holds.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>addHeldAccounts</h3></td><td>Adds accounts to a hold.</td></tr><tr><td><h3>create</h3></td><td>Creates a hold in the specified matter.</td></tr><tr><td><h3>delete</h3></td><td>Removes the specified hold and releases the accounts or organizational unit covered by the hold.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified hold.</td></tr><tr><td><h3>list</h3></td><td>Lists the holds in a matter.</td></tr><tr><td><h3>removeHeldAccounts</h3></td><td>Removes the specified accounts from a hold.</td></tr><tr><td><h3>update</h3></td><td>Updates the scope (organizational unit or accounts) and query parameters of a hold.</td></tr></tbody></table>
