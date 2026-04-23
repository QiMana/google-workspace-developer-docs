---
source: https://developers.google.com/workspace/admin/email-audit/limits
root: workspace
fetched_at: 2026-04-23T15:23:55.304Z
---

# Usage limits and quotas

Limits and quotas protect the Google infrastructure from an automated process that uses the Email Audit API in an inappropriate way. Excessive requests from an API might result from a harmless typo, or might result from an inefficiently designed system that makes needless API calls. Regardless of the cause, blocking traffic from a specific source when it reaches a certain level is necessary for the overall health of the Google Workspace system. Limits help ensure that one developer's actions cannot negatively impact the larger community.

In the unlikely event that your API request fails, you'll receive an HTTP status code response. A status code of `403` has error information about incorrect input, and an HTTP status code of `503` has error information indicating which API quotas have been exceeded. These responses let your custom application detect these errors and take appropriate action.

If your requests need to be completed in a fixed period of time, send your requests in parallel or use multiple threads in your Java or C# application. An example of parallel requests is requesting small batches of emails from different users rather than adding or removing lots of emails from one user simultaneously. In the case of threads, try starting with 10 threads, one thread per user email. Note, the thread recommendation has trade-offs and isn't useful for all API situations. If the number of requests gets too high, quota errors occur. Another trade-off example is the quota for the Email Audit API for the maximum overall message upload rate. The upload rate is one API request - per second - per user, no matter how many threads are making upload requests.

For all errors that are time based (maximum of N things for N seconds per thread), especially the `503` status code errors, we recommend that your code catch the exception and, by using an [exponential backoff](https://en.wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm, wait for a small delay before retrying the failed call. An Email Audit API example for one thread is to wait 5 seconds and retry the failed call. If the request is successful, repeat this pattern for the other threads. If the second request isn't successful, your application should scale back on the frequency of the request until a call is successful. For example, increase the initial 5 second delay to 10 seconds and retry your failed call again. Also, decide on a retry limit. For example, retry a request 5 to 7 times with different delay times before your application returns an error to the user.

The following table lists the limits for the Email Audit API:

| API limit categories | Limits |
| --- | --- |
| Encrypted mailbox files, creation | The creation of encrypted mailbox files might take up to several days for the system to prepare, depending on the size. |
| Encrypted mailbox files, errors with deletion | When [Deleting an encrypted mailbox](https://developers.google.com/workspace/admin/email-audit/monitor-email#delete_an_email_monitor) and errors occur, the request is given a `MARKED_DELETE` status. These summaries and export files are automatically taken up for deletion again by Google within 24 hours (with possible remaining files). If the status of `MARKED_DELETE` is consistently returned, try an exponential back off strategy. |

The following table lists the quotas for the Email Audit API:

| API quota categories | Quotas |
| --- | --- |
| ClientLogin authentication tokens | Valid for 24 hours. The error is `401 token         expired`. |
| Date formats | Convert all dates to the Coordinated Universal TIme (UTC) format before using them with the Email Audit API For more information, see [UTC converter](https://www.timeanddate.com/worldclock/converter.html). |
| Encrypted mailbox files, `EXPIRED` summaries and export files | Google retains the encrypted mailbox files for 3 weeks. After that time, they're deleted. It's the responsibility of the domain administrator to download these mailbox files within this time period. |
| Encrypted mailbox files, format | Encrypted mailbox files are in the [mbox](https://en.wikipedia.org/wiki/Mbox) format. |
| Encrypted mailbox files, maximum creation requests | The maximum mailbox export creation requests per day is a total of 100 requests from all administrators in the domain. |
| Encrypted mailbox file status, pagination | When requesting the status of all mailbox requests, responses can return large amounts of data. The Email Audit API batches this data into pages with each page containing a maximum of 100 entries, and a URI in a `link rel='next'` tag pointing to the next page of results. When developing your client application, your code needs to manage these additional results. |
| Email monitor | The maximum number of email monitor requests per day is 1500. This limit is for the domain and includes all requests made by any administrator during the day. |
| Public key | The Email Audit API only supports one key.  The public key uses GNU Privacy Guard (GPG) software. It is in PGP format and is an ASCII-encoded RSA encryption key. Before uploading the public key, you must first convert it to a base64 encoded string. The public key file should read with the charset [US-ASCII](https://en.wikipedia.org/wiki/ASCII), ([IANA](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority) preferred charset name for ASCII). |
| Searching | The `searchQuery` and `includeDeleted` parameters are mutually exclusive. A search query isn't possible if `includeDeleted="true"`. |
