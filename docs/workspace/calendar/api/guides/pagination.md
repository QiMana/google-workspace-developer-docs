---
source: https://developers.google.com/workspace/calendar/api/guides/pagination
root: workspace
fetched_at: 2026-04-23T15:24:48.105Z
---

# Page through lists of resources

You can control the maximum number of resources the server returns in the response to a list request by setting the `maxResults` field. Furthermore, for some collections (such as Events) there is a hard limit on the number of retrieved entries that the server will never exceed. If the total number of events exceeds this maximum, the server returns one page of results.

Remember that `maxResults` does not guarantee the number of results on one page. Incomplete results can be detected by a non-empty `nextPageToken` field in the result. In order to retrieve the next page, perform the exact same request as previously and append a `pageToken` field with the value of `nextPageToken` from the previous page. A new `nextPageToken` is provided on the following pages until all the results are retrieved.

For example, here is a query followed by the query for retrieving the next page of results in a paginated list:

```
GET /calendars/primary/events?maxResults=10&singleEvents=true

//Result contains

"nextPageToken":"CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA",
```

The subsequent query takes the value from `nextPageToken` and submits it as the value for `pageToken`:

```
GET /calendars/primary/events?maxResults=10&singleEvents=true&pageToken=CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA
```
