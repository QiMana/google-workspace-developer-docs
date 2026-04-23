---
source: https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens
root: workspace
fetched_at: 2026-04-23T15:29:08.288Z
---

# Limited Use Access Tokens

Limited-Use Access Tokens provide protection from request spoofing and [replay attacks](http://en.wikipedia.org/wiki/Replay_attack), ensuring that the action is performed by the user the message was sent to. Protection is achieved by adding a unique token parameter to the request parameters and verifying it when the action is invoked.

The token parameter should be generated as a key that can only be used for a specific action and a specific user. Before the requested action is performed, you should check that the token is valid and matches the one you generated for the user. If the token matches then the action can be performed and the token becomes invalid for future requests.

Access tokens should be sent to the user as part of the `url` property of the [HttpActionHandler](../reference/types/HttpActionHandler.md). For instance, if your application handles approval requests at `http://www.example.com/approve?requestId=123`, you should consider including an additional `accessToken` parameter to it and listen to requests sent to `http://www.example.com/approve?requestId=123&accessToken=xyz`.

The combination `requestId=123` and `accessToken=xyz` is the one that you have to generate in advance, making sure that the `accessToken` cannot be deduced from the `requestId`. Any approval request with `requestId=123` and no `accessToken` or with a `accessToken` not equal to `xyz` should be rejected. Once this request gets through, any future request with the same id and access token should be rejected too.
