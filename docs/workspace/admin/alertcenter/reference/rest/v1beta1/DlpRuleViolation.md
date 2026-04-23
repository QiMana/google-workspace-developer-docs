---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/DlpRuleViolation
root: workspace
fetched_at: 2026-04-23T15:23:23.702Z
---

# DlpRuleViolation

Alerts that get triggered on violations of Data Loss Prevention (DLP) rules.

JSON representation

```
{
  "ruleViolationInfo": {
    object (RuleViolationInfo)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ruleViolationInfo</code></td><td><p><code>object (<code>RuleViolationInfo</code>)</code></p><p>Details about the violated DLP rule.</p><p>Admins can use the predefined detectors provided by Google Cloud DLP <a href="https://cloud.google.com/dlp/">https://cloud.google.com/dlp/</a> when setting up a DLP rule. Matched Cloud DLP detectors in this violation if any will be captured in the MatchInfo.predefined_detector.</p></td></tr></tbody></table>

## RuleViolationInfo

Common alert information about violated rules that are configured by Google Workspace administrators.

JSON representation

```
{
  "ruleInfo": {
    object (RuleInfo)
  },
  "dataSource": enum (DataSource),
  "trigger": enum (Trigger),
  "triggeringUserEmail": string,
  "recipients": [
    string
  ],
  "resourceInfo": {
    object (ResourceInfo)
  },
  "matchInfo": [
    {
      object (MatchInfo)
    }
  ],
  "triggeredActionTypes": [
    enum (ActionType)
  ],
  "triggeredActionInfo": [
    {
      object (ActionInfo)
    }
  ],
  "suppressedActionTypes": [
    enum (ActionType)
  ],
  "eventType": enum (EventType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ruleInfo</code></td><td><p><code>object (<code>RuleInfo</code>)</code></p><p>Details of the violated rule.</p></td></tr><tr><td><code>dataSource</code></td><td><p><code>enum (<code>DataSource</code>)</code></p><p>Source of the data.</p></td></tr><tr><td><code>trigger</code></td><td><p><code>enum (<code>Trigger</code>)</code></p><p>Trigger of the rule.</p></td></tr><tr><td><code>triggeringUserEmail</code></td><td><p><code>string</code></p><p>Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan.</p></td></tr><tr><td><code>recipients[]</code></td><td><p><code>string</code></p><p>Resource recipients.</p><p>For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty.</p><p>For Gmail, they are emails of the users or groups that the Gmail message was sent to.</p></td></tr><tr><td><code>resourceInfo</code></td><td><p><code>object (<code>ResourceInfo</code>)</code></p><p>Details of the resource which violated the rule.</p></td></tr><tr><td><code>matchInfo[]</code></td><td><p><code>object (<code>MatchInfo</code>)</code></p><p>List of matches that were found in the resource content.</p></td></tr><tr><td><code>triggeredActionTypes[]</code></td><td><p><code>enum (<code>ActionType</code>)</code></p><p>Actions applied as a consequence of the rule being triggered.</p></td></tr><tr><td><code>triggeredActionInfo[]</code></td><td><p><code>object (<code>ActionInfo</code>)</code></p><p>Metadata related to the triggered actions.</p></td></tr><tr><td><code>suppressedActionTypes[]</code></td><td><p><code>enum (<code>ActionType</code>)</code></p><p>Actions suppressed due to other actions with higher priority.</p></td></tr><tr><td><code>eventType</code></td><td><p><code>enum (<code>EventType</code>)</code></p><p>Event associated with this alert after applying the rule.</p></td></tr></tbody></table>

## RuleInfo

Proto that contains rule information.

JSON representation

```
{
  "resourceName": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resourceName</code></td><td><p><code>string</code></p><p>Resource name that uniquely identifies the rule.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>User provided name of the rule.</p></td></tr></tbody></table>

## ResourceInfo

Proto that contains resource information.

JSON representation

```
{
  "resourceTitle": string,
  "deviceId": string,

  "documentId": string,
  "messageId": string,
  "chatMessageId": string,
  "chatAttachmentId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resourceTitle</code></td><td><p><code>string</code></p><p>Title of the resource, for example email subject, or document title.</p></td></tr><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>Id to identify a device. For example, for Android devices, this is the "Android Device Id" and for Chrome OS devices, it's the "Device Virtual Id".</p></td></tr><tr><td colspan="2">Union field <code>resource_id</code>. Identifier of the resource. <code>resource_id</code> can be only one of the following:</td></tr><tr><td><code>documentId</code></td><td><p><code>string</code></p><p>Drive file ID.</p></td></tr><tr><td><code>chatMessageId</code></td><td><p><code>string</code></p><p>Chat message ID.</p></td></tr><tr><td><code>chatAttachmentId</code></td><td><p><code>string</code></p><p>Chat attachment ID.</p></td></tr></tbody></table>

## MatchInfo

Proto that contains match information from the condition part of the rule.

JSON representation

```
{

  "userDefinedDetector": {
    object (UserDefinedDetectorInfo)
  },
  "predefinedDetector": {
    object (PredefinedDetectorInfo)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>detector_info</code>. Matched detector information. <code>detector_info</code> can be only one of the following:</td></tr><tr><td><code>userDefinedDetector</code></td><td><p><code>object (<code>UserDefinedDetectorInfo</code>)</code></p><p>For matched detector defined by administrators.</p></td></tr><tr><td><code>predefinedDetector</code></td><td><p><code>object (<code>PredefinedDetectorInfo</code>)</code></p><p>For matched detector predefined by Google.</p></td></tr></tbody></table>

## UserDefinedDetectorInfo

Detector defined by administrators.

JSON representation

```
{
  "resourceName": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>resourceName</code></td><td><p><code>string</code></p><p>Resource name that uniquely identifies the detector.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name of the detector.</p></td></tr></tbody></table>

## PredefinedDetectorInfo

Detector provided by Google.

JSON representation

```
{
  "detectorName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>detectorName</code></td><td><p><code>string</code></p><p>Name that uniquely identifies the detector.</p></td></tr></tbody></table>

## ActionInfo

This type has no fields.
