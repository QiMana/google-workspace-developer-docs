---
source: https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense
root: workspace
fetched_at: 2026-04-23T15:30:10.650Z
---

# REST Resource: userLicense

## Page Summary

- The UserLicense resource represents a user's license status for a specific application within a Google Workspace domain.
- It provides information about the user's license status, including whether it's active, unlicensed, or expired.
- The resource includes details such as the user's email, domain, application ID, and license ID.
- You can retrieve a user's license information using the `get` method of the UserLicense API.

## Resource: UserLicense

JSON representation

```
{
  "kind": string,
  "enabled": boolean,
  "state": string,
  "editionId": string,
  "customerId": string,
  "applicationId": string,
  "id": string,
  "userId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of API resource. This is always <code>appsmarket#userLicense</code>.</p></td></tr><tr><td><code>enabled</code></td><td><p><code>boolean</code></p><p>The domain administrator has activated the application for this domain.</p></td></tr><tr><td><code>state</code></td><td><p><code>string</code></p><p>The user's licensing status. One of:</p><ul><li><code>ACTIVE</code>: The user has a valid license and should be permitted to use the application.</li><li><code>UNLICENSED</code>: The administrator of this user's domain never assigned a seat for the application to this user.</li><li><code>EXPIRED</code>: The administrator assigned a seat to this user, but the license is expired.</li></ul></td></tr><tr><td><code>editionId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>(Deprecated)</p></td></tr><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The domain name of the user.</p></td></tr><tr><td><code>applicationId</code></td><td><p><code>string</code></p><p>The ID of the application corresponding to the license query.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the user license.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The email address of the user.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Gets the user's licensing status to determine if they have permission to use a given app.</td></tr></tbody></table>
