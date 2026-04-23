---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/VoiceMisconfiguration
root: workspace
fetched_at: 2026-04-23T15:23:27.447Z
---

# VoiceMisconfiguration

An alert triggered when Google Voice configuration becomes invalid, generally due to an external entity being modified or deleted.

JSON representation

```
{
  "entityName": string,
  "entityType": enum (EntityType),
  "voicemailMisconfiguration": {
    object (VoicemailMisconfiguration)
  },
  "transferMisconfiguration": {
    object (TransferMisconfiguration)
  },
  "membersMisconfiguration": {
    object (TransferMisconfiguration)
  },
  "fixUri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>entityName</code></td><td><p><code>string</code></p><p>Name of the entity whose configuration is now invalid.</p></td></tr><tr><td><code>entityType</code></td><td><p><code>enum (<code>EntityType</code>)</code></p><p>Type of the entity whose configuration is now invalid.</p></td></tr><tr><td><code>voicemailMisconfiguration</code></td><td><p><code>object (<code>VoicemailMisconfiguration</code>)</code></p><p>Issue(s) with sending to voicemail.</p></td></tr><tr><td><code>transferMisconfiguration</code></td><td><p><code>object (<code>TransferMisconfiguration</code>)</code></p><p>Issue(s) with transferring or forwarding to an external entity.</p></td></tr><tr><td><code>membersMisconfiguration</code></td><td><p><code>object (<code>TransferMisconfiguration</code>)</code></p><p>Issue(s) with members of a ring group.</p></td></tr><tr><td><code>fixUri</code></td><td><p><code>string</code></p><p>Link that the admin can follow to fix the issue.</p></td></tr></tbody></table>

## VoicemailMisconfiguration

Issue(s) with sending to voicemail.

JSON representation

```
{
  "errors": [
    {
      object (VoicemailRecipientError)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>errors[]</code></td><td><p><code>object (<code>VoicemailRecipientError</code>)</code></p><p>Issue(s) with voicemail recipients.</p></td></tr></tbody></table>

## VoicemailRecipientError

Issue(s) with a voicemail recipient.

JSON representation

```
{
  "invalidReason": enum (EmailInvalidReason),
  "email": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>invalidReason</code></td><td><p><code>enum (<code>EmailInvalidReason</code>)</code></p><p>Reason for the error.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>Email address of the invalid recipient. This may be unavailable if the recipient was deleted.</p></td></tr></tbody></table>

## TransferMisconfiguration

JSON representation

```
{
  "errors": [
    {
      object (TransferError)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>errors[]</code></td><td><p><code>object (<code>TransferError</code>)</code></p><p>Details for each invalid transfer or forward.</p></td></tr></tbody></table>

## TransferError

Details for an invalid transfer or forward.

JSON representation

```
{
  "entityType": enum (TransferEntityType),
  "invalidReason": enum (TransferInvalidReason),
  "id": string,
  "name": string,
  "email": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>entityType</code></td><td><p><code>enum (<code>TransferEntityType</code>)</code></p><p>Type of entity being transferred to. For ring group members, this should always be USER.</p></td></tr><tr><td><code>invalidReason</code></td><td><p><code>enum (<code>TransferInvalidReason</code>)</code></p><p>Reason for the error.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Ring group or auto attendant ID. Not set for users.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>User's full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>User's email address. This may be unavailable if the entity was deleted.</p></td></tr></tbody></table>
