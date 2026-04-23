---
source: https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense
root: workspace
fetched_at: 2026-04-23T15:30:10.439Z
---

# REST Resource: customerLicense

## Page Summary

- The CustomerLicense resource provides information about a customer's license status for a specific application.
- It includes details such as the license state (ACTIVE or UNLICENSED), application ID, customer ID, and license ID.
- The Editions section within the resource, containing editionId, seatCount, and assignedSeats, is deprecated.
- You can retrieve the license status for a customer using the `get` method.

## Resource: CustomerLicense

JSON representation

```
{
  "kind": string,
  "state": string,
  "applicationId": string,
  "editions": [
    {
      object (Editions)
    }
  ],
  "id": string,
  "customerId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of API resource. This is always <code>appsmarket#customerLicense</code>.</p></td></tr><tr><td><code>state</code></td><td><p><code>string</code></p><p>The customer's license status. One of:</p><ul><li><code>ACTIVE</code>: The customer has a valid license.</li><li><code>UNLICENSED</code>: There is no license. Either this customer has never installed your application or has deleted it.</li></ul></td></tr><tr><td><code>applicationId</code></td><td><p><code>string</code></p><p>The ID of the application corresponding to this license query.</p></td></tr><tr><td><code>editions[]<br><b>(deprecated)</b></code></td><td><p><code>object (<code>Editions</code>)</code></p><p>(Deprecated)</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the customer license.</p></td></tr><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The domain name of the customer.</p></td></tr></tbody></table>

## Editions

JSON representation

```
{
  "editionId": string,
  "seatCount": integer,
  "assignedSeats": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>editionId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>(Deprecated)</p></td></tr><tr><td><code>seatCount<br><b>(deprecated)</b></code></td><td><p><code>integer</code></p><p>(Deprecated)</p></td></tr><tr><td><code>assignedSeats<br><b>(deprecated)</b></code></td><td><p><code>integer</code></p><p>(Deprecated)</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets the customer's licensing status to determine if they have access to a given app.</td></tr></tbody></table>
