---
source: https://developers.google.com/workspace/gmail/ampemail/authenticating-requests
root: workspace
fetched_at: 2026-04-23T15:28:48.230Z
---

# Authenticating requests in AMP for Email

Dynamic personalized email content often requires authenticating the user. However, to protect user data all HTTP requests made from inside AMP emails within Gmail are proxied and stripped of cookies.

To authenticate requests made from AMP emails, you may use [access tokens](#access_tokens).

## Access tokens

You can use access tokens to authenticate the user. Access tokens are supplied and checked by the email sender. The sender uses the tokens to ensure that only those with access to the AMP email can make the requests contained within that email. Access tokens must be cryptographically secure and time- and scope-limited. They are included within the URL of the request.

This example demonstrates using `<amp-list>` to display authenticated data:

```
<amp-list src="https://example.com/endpoint?token=REPLACE_WITH_YOUR_ACCESS_TOKEN"
  height="300">
  <template type="amp-mustache">
    ...
  </template>
</amp-list>
```

Similarly when using `<amp-form>`, place your access token in the `action-xhr` URL.

```
<form action-xhr="https://example.com/endpoint?token=REPLACE_WITH_YOUR_ACCESS_TOKEN" method="post">
  <input type="text" name="data">
  <input type="submit" value="Send">
</form>
```

### Example

The following example considers a hypothetical note-taking service that lets logged-in users to add notes to their account and view them later. The service wants to send an email to a user, `jane@example.com`, that includes a list of notes they previously took. The list of the current user's notes is available at the endpoint `https://example.com/personal-notes` in JSON format.

Before sending the email, the service generates a cryptographically secure limited-use access token for `jane@example.com: A3a4roX9x`. The access token is included in the field name `exampletoken` inside the URL query:

```
<amp-list src="https://example.com/personal-notes?exampletoken=A3a4roX9x" height="300">
  <template type="amp-mustache">
    <p>{{note}}</p>
  </template>
</amp-list>
```

The endpoint `https://example.com/personal-notes` is responsible for validating the `exampletoken` parameter and finding the user associated with the token.

For more information, see [Limited use access tokens](https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens).
