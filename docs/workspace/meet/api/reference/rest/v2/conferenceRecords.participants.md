---
source: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants
root: workspace
fetched_at: 2026-04-23T15:30:29.143Z
---

# REST Resource: conferenceRecords.participants

## Resource: Participant

User who attended or is attending a conference.

JSON representation

```
{
  "name": string,
  "earliestStartTime": string,
  "latestEndTime": string,

  "signedinUser": {
    object (SignedinUser)
  },
  "anonymousUser": {
    object (AnonymousUser)
  },
  "phoneUser": {
    object (PhoneUser)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Resource name of the participant. Format: <code>conferenceRecords/{conferenceRecord}/participants/{participant}</code></p></td></tr><tr><td><code>earliestStartTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Time when the participant first joined the meeting.</p></td></tr><tr><td><code>latestEndTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Time when the participant left the meeting for the last time. This can be null if it's an active meeting.</p></td></tr><tr><td colspan="2"><p>Union field <code>user</code>.</p><p><code>user</code> can be only one of the following:</p></td></tr><tr><td><code>signedinUser</code></td><td><p><code>object (<code>SignedinUser</code>)</code></p><p>Signed-in user.</p></td></tr><tr><td><code>anonymousUser</code></td><td><p><code>object (<code>AnonymousUser</code>)</code></p><p>Anonymous user.</p></td></tr><tr><td><code>phoneUser</code></td><td><p><code>object (<code>PhoneUser</code>)</code></p><p>User calling from their phone.</p></td></tr></tbody></table>

## SignedinUser

A signed-in user can be: a) An individual joining from a personal computer, mobile device, or through companion mode. b) A robot account used by conference room devices.

JSON representation

```
{
  "user": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>user</code></td><td><p><code>string</code></p><p>Output only. Unique ID for the user. Interoperable with Admin SDK API and People API. Format: <code>users/{user}</code></p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. For a personal device, it's the user's first name and last name. For a robot account, it's the administrator-specified device name. For example, "Altostrat Room".</p></td></tr></tbody></table>

## AnonymousUser

User who joins anonymously (meaning not signed into a Google Account).

JSON representation

```
{
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. User provided name when they join a conference anonymously.</p></td></tr></tbody></table>

## PhoneUser

User dialing in from a phone where the user's identity is unknown because they haven't signed in with a Google Account.

JSON representation

```
{
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. Partially redacted user's phone number when calling.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets a participant by participant ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the participants in a conference record.</td></tr></tbody></table>
