---
source: https://developers.google.com/workspace/admin/admin-settings/limits
root: workspace
fetched_at: 2026-04-23T15:23:19.250Z
---

# Usage limits and quotas

Limits and quotas protect the Google infrastructure from an automated process that uses the Admin Settings API in an inappropriate way. Excessive requests from an API might result from a harmless typo, or may result from an inefficiently designed system that makes needless API calls. Regardless of the cause, blocking traffic from a specific source once it reaches a certain level is necessary for the overall health of the Google Workspace system. It ensures that one developer's actions cannot negatively impact the larger community.

In the unlikely event that your API request fails, you'll receive an HTTP status code response. A status code of 403 has error information about incorrect input, and an HTTP status code of 503 has error information indicating which API quotas have been exceeded. These responses allow your custom application to detect these errors and take appropriate action.

If your requests need to be completed in a fixed period of time, send your requests in parallel or use multiple threads in your Java or C# application. For example, break your requests by month or another time period. In the case of threads, try starting with 10 threads, one thread per request. Note, the thread recommendation has tradeoffs and is not useful for all API situations. If the number of requests gets too high, quota errors will occur.

For all errors that are time based (maximum of N things for X seconds per thread), especially the 503 status code errors, we recommend your code catch the exception and, using an [exponential backoff](http://en.wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm, wait for a small delay before retrying the failed call. A Email Settings API example for one thread is to wait 5 seconds and retry the failed call. If the request is successful, repeat this pattern for the other threads. If the second request is not successful, your application should scale back on the frequency of the request until a call is successful. For example, increase the initial 5 second delay to 10 seconds and retry your failed call again. Also, decide on a retry limit. For example retry a request 5 to 7 times with different delay times before your application returns an error to the user.

| API Quota Categories | Quotas |
| --- | --- |
| ClientLogin authentication tokens | Valid for 24 hours. The error is '401 token expired'. |
| Generating public and private keys | With your identity provider, generate a set of public and private keys using either the DSA or RSA algorithms. The public key is in X.509 formatted certificate. For more information about SAML-based Single Sign-On signing keys, see [Generating Keys and Certificates for Google Workspace Single Sign-On Service](https://developers.google.com/google-apps/help/articles/sso-keygen). |
| Logo | An account's logo image file can be in JPEG, PNG, or GIF format. The recommended size is 143 x 59 pixels and the file should be smaller than 20Kb. When using custom logos, remember to stay within the Google [Terms of Service](https://www.google.com/apps/intl/en/terms/standard_terms.html). And refrain from using the Google logo, Gmail logo, or any other Google logos. For more information, see [Logo and landing page policies](https://support.google.com/a/answer/96474). |
| ssoWhitelist | A ssoWhitelist is a network mask IP address in Classless Inter-Domain Routing [(CIDR)](http://en.wikipedia.org/wiki/CIDR) format. |

| Other Types of Limits | Limitations and Guidelines |
| --- | --- |
| MX record verification status | The default MX record verification status is \`false\` which means either the Google system has not recently checked your MX record configuration or your MX records have not been configured to point to the Google systems. If you have updated your records and the verification status remains false, it can mean your MX record updates have not been propagated, or there is a typo in the record. For propagation, we recommend you wait the amount of time defined by the MX record's Time To Live value (TTL) and try again. |
| Country codes | If the organization name has not been customized, the default is your primary domain name. For information about organization name characters, see [Character usage](https://support.google.com/a/answer/33386). |
| `creationTime` property, numeric representation of dates and time | See the [ISO 8601](https://www.iso.org/iso/support/faqs/faqs_widely_used_standards/widely_used_standards_other/iso8601), Numeric representation of Dates and Time. |
| Language encoding tags | See the [RFC 3066 language tags](https://developers.google.com/workspace/admin/email-settings#language_tags) accepted by Google Mail. |
| Organization name | If the organization name has not been customized, the default is your primary domain name. For information about organization name characters, see [Character usage](https://support.google.com/a/answer/33386). |

## Request a per-project quota increase

Depending on your project's resource usage, you might want to request a quota adjustment. API calls by a service account are considered to be using a single account. Applying for an adjusted quota doesn't guarantee approval. Quota adjustment requests that would significantly increase the quota value can take longer to be approved.

Not all projects have the same quotas. As you increasingly use Google Cloud over time, your quota values might need to increase. If you expect a notable upcoming increase in usage, you can proactively [request quota adjustments](https://cloud.google.com/docs/quota#requesting_higher_quota) from the [Quotas page](https://console.cloud.google.com/iam-admin/quotas) in the Google Cloud console.

To learn more, see the following resources:

- [About quota adjustments](https://cloud.google.com/docs/quotas/overview#about_increase_requests)
- [View your current quota usage and limits](https://cloud.google.com/docs/quota#viewing_your_quota_console)
- [Request a higher quota limit](https://cloud.google.com/docs/quota#requesting_higher_quota)
