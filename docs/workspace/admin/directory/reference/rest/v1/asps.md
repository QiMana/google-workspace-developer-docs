---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/asps
root: workspace
fetched_at: 2026-04-23T15:23:33.396Z
---

# REST Resource: asps

## Resource: Asp

An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).

JSON representation

```
{
  "codeId": integer,
  "name": string,
  "creationTime": string,
  "lastTimeUsed": string,
  "userKey": string,
  "kind": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>codeId</code></td><td><p><code>integer</code></p><p>The unique ID of the ASP.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the application that the user, represented by their <code>userId</code>, entered when the ASP was created.</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (int64 format)</code></p><p>The time when the ASP was created. Expressed in <a href="https://en.wikipedia.org/wiki/Epoch_time">Unix time</a> format.</p></td></tr><tr><td><code>lastTimeUsed</code></td><td><p><code>string (int64 format)</code></p><p>The time when the ASP was last used. Expressed in <a href="https://en.wikipedia.org/wiki/Epoch_time">Unix time</a> format.</p></td></tr><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>The unique ID of the user who issued the ASP.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. This is always <code>admin#directory#asp</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the ASP.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes an ASP issued by a user.</td></tr><tr><td><h3>get</h3></td><td>Gets information about an ASP issued by a user.</td></tr><tr><td><h3>list</h3></td><td>Lists the ASPs issued by a user.</td></tr></tbody></table>
