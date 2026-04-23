---
source: https://developers.google.com/apps-script/reference/url-fetch
root: apps-script
fetched_at: 2026-04-23T15:22:07.614Z
---

# URL Fetch Service

## Page Summary

- The UrlFetch service allows scripts to fetch URLs and make HTTP/HTTPS requests and receive responses.
- Requests made using this service originate from a set pool of IP ranges that can be looked up for whitelisting.
- Using this service requires the `https://www.googleapis.com/auth/script.external_request` scope.
- The `UrlFetchApp` class is used to fetch resources and communicate with other hosts over the Internet.
- The `HTTPResponse` class allows users to access specific information about HTTP responses, such as headers, content, and response codes.

This service allows scripts to access other resources on the web by fetching URLs. A script can use the UrlFetch service to issue HTTP and HTTPS requests and receive responses. The UrlFetch service uses Google's network infrastructure for efficiency and scaling purposes.

Requests made using this service originate from a set pool of IP ranges. You can [look up the full list of IP addresses](https://www.gstatic.com/ipranges/goog.json) if you need to whitelist or approve these requests.

The default user agent string of UrlFetch service requests is `Mozilla/5.0 (compatible; Google-Apps-Script; beanserver; +https://script.google.com; id: SCRIPT_ID)`.

This service requires the `https://www.googleapis.com/auth/script.external_request` scope. In most cases Apps Script automatically detects and includes scopes a script needs, but if you are [setting your scopes explicitly](../concepts/scopes.md#setting_explicit_scopes) you must manually add this scope to use `UrlFetchApp`.

#### See also

- `HTTPResponse`
- [Setting explicit scopes](../concepts/scopes.md#setting_explicit_scopes)
