---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/tokens
root: workspace
fetched_at: 2026-04-23T15:23:44.274Z
---

# REST Resource: tokens

## Resource: Token

JSON template for token resource in Directory API.

JSON representation

```
{
  "clientId": string,
  "scopes": [
    string
  ],
  "userKey": string,
  "anonymous": boolean,
  "displayText": string,
  "nativeApp": boolean,
  "kind": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>clientId</code></td><td><p><code>string</code></p><p>The Client ID of the application the token is issued to.</p></td></tr><tr><td><code>scopes[]</code></td><td><p><code>string</code></p><p>A list of authorization scopes the application is granted.</p></td></tr><tr><td><code>userKey</code></td><td><p><code>string</code></p><p>The unique ID of the user that issued the token.</p></td></tr><tr><td><code>anonymous</code></td><td><p><code>boolean</code></p><p>Whether the application is registered with Google. The value is <code>true</code> if the application has an anonymous Client ID.</p></td></tr><tr><td><code>displayText</code></td><td><p><code>string</code></p><p>The displayable name of the application the token is issued to.</p></td></tr><tr><td><code>nativeApp</code></td><td><p><code>boolean</code></p><p>Whether the token is issued to an installed application. The value is <code>true</code> if the application is installed to a desktop or mobile device.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. This is always <code>admin#directory#token</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes all access tokens issued by a user for an application.</td></tr><tr><td><h3>get</h3></td><td>Gets information about an access token issued by a user.</td></tr><tr><td><h3>list</h3></td><td>Returns the set of tokens specified user has issued to 3rd party applications.</td></tr></tbody></table>
