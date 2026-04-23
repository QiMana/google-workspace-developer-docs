---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2/domains/getComplianceStatus
root: workspace
fetched_at: 2026-04-23T15:30:03.072Z
---

# Method: domains.getComplianceStatus

Retrieves the compliance status for a given domain. Returns PERMISSION\_DENIED if you don't have permission to access compliance status for the domain.

### HTTP request

`GET https://gmailpostmastertools.googleapis.com/v2/{name=domains/*/complianceStatus}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the domain's compliance status to retrieve. Format: <code>domains/{domainId}/complianceStatus</code>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Compliance status for a domain.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "name": string,
  "complianceData": {
    object (DomainComplianceData)
  },
  "subdomainComplianceData": {
    object (DomainComplianceData)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. The resource name of the domain's compliance status. Format: <code>domains/{domainId}/complianceStatus</code>.</p></td></tr><tr><td><code>complianceData</code></td><td><p><code>object (<code>DomainComplianceData</code>)</code></p><p>Compliance data for the registrable domain part of the domain in <code>name</code>. For example, if <code>name</code> is <code>domains/example.com/complianceStatus</code>, this field contains compliance data for <code>example.com</code>.</p></td></tr><tr><td><code>subdomainComplianceData</code></td><td><p><code>object (<code>DomainComplianceData</code>)</code></p><p>Compliance data calculated specifically for the subdomain in <code>name</code>. This field is only populated if the domain in <code>name</code> is a subdomain that differs from its registrable domain (e.g., <code>sub.example.com</code>), and if compliance data is available for that specific subdomain.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/postmaster`
- `           https://www.googleapis.com/auth/postmaster.traffic.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## DomainComplianceData

Compliance data for a given domain.

JSON representation

```
{
  "domainId": string,
  "rowData": [
    {
      object (ComplianceRowData)
    }
  ],
  "oneClickUnsubscribeVerdict": {
    object (OneClickUnsubscribeVerdict)
  },
  "honorUnsubscribeVerdict": {
    object (HonorUnsubscribeVerdict)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domainId</code></td><td><p><code>string</code></p><p>Domain that this data is for.</p></td></tr><tr><td><code>rowData[]</code></td><td><p><code>object (<code>ComplianceRowData</code>)</code></p><p>Data for each of the rows of the table. Each message contains all the data that backs a single row.</p></td></tr><tr><td><code>oneClickUnsubscribeVerdict</code></td><td><p><code>object (<code>OneClickUnsubscribeVerdict</code>)</code></p><p>One-click unsubscribe compliance verdict.</p></td></tr><tr><td><code>honorUnsubscribeVerdict</code></td><td><p><code>object (<code>HonorUnsubscribeVerdict</code>)</code></p><p>Unsubscribe honoring compliance verdict.</p></td></tr></tbody></table>

## ComplianceRowData

Data for a single row of the compliance status table.

JSON representation

```
{
  "requirement": enum (ComplianceRequirement),
  "status": {
    object (ComplianceStatus)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requirement</code></td><td><p><code>enum (<code>ComplianceRequirement</code>)</code></p><p>The compliance requirement.</p></td></tr><tr><td><code>status</code></td><td><p><code>object (<code>ComplianceStatus</code>)</code></p><p>The compliance status for the requirement.</p></td></tr></tbody></table>

## ComplianceRequirement

The compliance requirement.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COMPLIANCE_REQUIREMENT_UNSPECIFIED</code></td><td>Unspecified.</td></tr><tr><td><code>SPF</code></td><td>Whether the sender has properly configured SPF.</td></tr><tr><td><code>DKIM</code></td><td>Whether the sender has properly configured DKIM.</td></tr><tr><td><code>SPF_AND_DKIM</code></td><td>Whether the sender has properly configured both SPF and DKIM.</td></tr><tr><td><code>DMARC_POLICY</code></td><td>Whether the sender has configured DMARC policy.</td></tr><tr><td><code>DMARC_ALIGNMENT</code></td><td>Whether the From: header is aligned with DKIM or SPF</td></tr><tr><td><code>MESSAGE_FORMATTING</code></td><td>Whether messages are correctly formatted according to RFC 5322.</td></tr><tr><td><code>DNS_RECORDS</code></td><td>Whether the domain has forward and reverse DNS records.</td></tr><tr><td><code>ENCRYPTION</code></td><td>Whether messages has TLS encryption.</td></tr><tr><td><code>USER_REPORTED_SPAM_RATE</code></td><td>Whether the sender is below a threshold for user-reported spam rate.</td></tr><tr><td><code>ONE_CLICK_UNSUBSCRIBE</code></td><td>Whether the sender sufficiently supports one-click unsubscribe. Note that the user-facing requirement is "one-click unsubscribe", but we require satisfaction of multiple "unsubscribe support" rules.</td></tr><tr><td><code>HONOR_UNSUBSCRIBE</code></td><td>Whether the sender honors user-initiated unsubscribe requests.</td></tr></tbody></table>

## ComplianceStatus

The status of a sender compliance requirement.

JSON representation

```
{
  "status": enum (State)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>status</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Output only. The compliance status.</p></td></tr></tbody></table>

## State

The status types for a particular sender compliance requirement.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Unspecified.</td></tr><tr><td><code>COMPLIANT</code></td><td>The compliance requirement is met, and the sender is deemed compliant.</td></tr><tr><td><code>NEEDS_WORK</code></td><td>The compliance requirement is unmet, and the sender needs to do work to achieve compliance.</td></tr></tbody></table>

## OneClickUnsubscribeVerdict

Compliance verdict for whether a sender meets the one-click unsubscribe compliance requirement.

JSON representation

```
{
  "status": {
    object (ComplianceStatus)
  },
  "reason": enum (Reason)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>status</code></td><td><p><code>object (<code>ComplianceStatus</code>)</code></p><p>The compliance status.</p></td></tr><tr><td><code>reason</code></td><td><p><code>enum (<code>Reason</code>)</code></p><p>The specific reason for the compliance verdict. Must be empty if the status is compliant.</p></td></tr></tbody></table>

## Reason

The specific reason a one-click unsubscribe verdict has a "non-compliant" status.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>REASON_UNSPECIFIED</code></td><td>Unspecified.</td></tr><tr><td><code>NO_UNSUB_GENERAL</code></td><td>Sender does not support one-click unsubscribe for the majority of their messages.</td></tr><tr><td><code>NO_UNSUB_SPAM_REPORTS</code></td><td>Sender does not support one-click unsubscribe for most messages that are manually reported as spam.</td></tr><tr><td><code>NO_UNSUB_PROMO_SPAM_REPORTS</code></td><td>Sender does not support one-click unsubscribe for most promotional messages that are manually reported as spam. This classification of messages is a subset of those encompassed by <code>NO_UNSUB_SPAM_REPORTS</code>.</td></tr></tbody></table>

## HonorUnsubscribeVerdict

Compliance verdict for whether a sender meets the unsubscribe honoring compliance requirement.

JSON representation

```
{
  "status": {
    object (ComplianceStatus)
  },
  "reason": enum (Reason)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>status</code></td><td><p><code>object (<code>ComplianceStatus</code>)</code></p><p>The compliance status.</p></td></tr><tr><td><code>reason</code></td><td><p><code>enum (<code>Reason</code>)</code></p><p>The specific reason for the compliance verdict. Must be empty if the status is compliant.</p></td></tr></tbody></table>

## Reason

The specific reason an unsubscribe honoring verdict has a "non-compliant" status.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>REASON_UNSPECIFIED</code></td><td>Unspecified.</td></tr><tr><td><code>NOT_HONORING</code></td><td>The sender does not honor unsubscribe requests.</td></tr><tr><td><code>NOT_HONORING_TOO_FEW_CAMPAIGNS</code></td><td>The sender does not honor unsubscribe requests and consider to increase the number of relevant campaigns.</td></tr><tr><td><code>NOT_HONORING_TOO_MANY_CAMPAIGNS</code></td><td>The sender does not honor unsubscribe requests and consider to reduce the number of relevant campaigns.</td></tr></tbody></table>
