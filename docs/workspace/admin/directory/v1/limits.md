---
source: https://developers.google.com/workspace/admin/directory/v1/limits
root: workspace
fetched_at: 2026-04-23T15:23:53.106Z
---

# Directory API: Limits and Quotas

Limits and quotas protect the Google infrastructure from an automated process that uses the Directory API in an inappropriate way. Excessive requests from an API might result from a harmless typo, or may result from an inefficiently designed system that makes needless API calls. Regardless of the cause, blocking traffic from a specific source once it reaches a certain level is necessary for the overall health of the Google Workspace system. It ensures that one developer's actions cannot negatively impact the larger community.

In the unlikely event that your API request fails, the API returns an HTTP status code and reason for the error. Additionally, the body of the response contains a detailed description of what caused the error.

The following list shows the possible error codes, reasons, corresponding descriptions, and recommended action for errors caused by hitting quota limits.

| Code | Reason | Description | Recommended Action |
| --- | --- | --- | --- |
| 403 | userRateLimitExceeded | Indicates that the user rate limit has been exceeded. The default value set in the Google Cloud console is 2,400 queries per minute per user per Google Cloud project. | Increase the per user limits from the [Admin SDK API Quotas page](https://console.cloud.google.com/apis/api/admin.googleapis.com/quotas) of your Google Cloud project, or slow down the rate at which you are sending the requests using [exponential backoff](#backoff). |
| 403 | quotaExceeded | Indicates that the limit of concurrent requests for a certain operation has been reached. | Retry using [exponential back-off](#backoff). You need to slow down the rate at which you are sending the requests. |
| 429 | rateLimitExceeded | Indicates that the limit of concurrent requests for a certain operation has been reached. | Retry using [exponential back-off](#backoff). You must slow down the rate at which you are sending the requests. This limit is per Google Workspace account, not per API client or per user. This limit can't be increased. |

## Implementing Exponential Backoff

[Exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) is the process of a client periodically retrying a failed request over an increasing amount of time. It is a standard error handling strategy for network applications. Using exponential backoff increases the efficiency of bandwidth usage, reduces the number of requests required to get a successful response, and maximizes the throughput of requests in concurrent environments.

The flow for implementing simple exponential backoff is as follows.

1. Make a request to the API
2. Receive an error response that has a retry-able error code
3. Wait 1s + `random_number_milliseconds` seconds
4. Retry request
5. Receive an error response that has a retry-able error code
6. Wait 2s + `random_number_milliseconds` seconds
7. Retry request
8. Receive an error response that has a retry-able error code
9. Wait 4s + `random_number_milliseconds` seconds
10. Retry request
11. Receive an error response that has a retry-able error code
12. Wait 8s + `random_number_milliseconds` seconds
13. Retry request
14. Receive an error response that has a retry-able error code
15. Wait 16s + `random_number_milliseconds` seconds
16. Retry request
17. If you still get an error, stop and log the error.

In the above flow, `random_number_milliseconds` is a random number of milliseconds less than or equal to 1000. This is necessary to avoid certain lock errors in some concurrent implementations. `random_number_milliseconds` must be redefined after each wait.

**Note**: the wait is always (2 ^ n) + `random_number_milliseconds`, where n is a monotonically increasing integer initially defined as 0. n is incremented by 1 for each iteration (each request).

The algorithm is set to terminate when n is 5. This ceiling is in place only to stop clients from retrying infinitely, and results in a total delay of around 32 seconds before a request is deemed "an unrecoverable error". Your API client can implement a higher number of attempts if needed.

## API Limits and Quotas

| API Limit Categories | Limits |
| --- | --- |
| Creating users | You cannot create more than 10 users per domain per second using the Directory API. |
| Group added as member to another group | May have a delay up to 10 minutes before the child group's members appear as members of the parent group. This limit could change depending on the system's capacity. |
| Mobile devices | Using the Directory API, you can perform up to:  - 20 action requests per second. - 20 delete requests per second. - 10 get requests per second. - 10 list requests per second. |
| Renaming users | Can take up to 10 minutes to propagate across all services. Before renaming a user, it is recommended to log out the user from all browser sessions and services. For more details, see [Update users](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user). |
| Creating/updating Organizational Units | - You cannot create/update more than 1 organizational unit per customer per second using the Directory API. - The customer's organizational unit hierarchy is limited to 35 levels of depth. - The total number of organizational units per customer must not exceed 40,000. |
| API Quota Categories | Quotas |
| Chrome devices `annotatedLocation`, max characters | The maximum number of characters for a device's location information is 200. |
| Chrome devices `notes`, max characters | The maximum number of characters for a device's notes information is 500. |
| Chrome devices, `user` maximum characters | The maximum number of characters for a device user's name is 100. |
| Domain aliases, maximum | The maximum number of domain aliases is 20. |
| Groups, description | The maximum number of characters in a description is 4,096. |
| Groups, per account | With a G Suite Legacy Free Edition account, the number of groups is limited to 10. Other editions have no limit to the number of groups. |
| Groups, members per group | With a G Suite Legacy Free Edition account, a group can contain up to 100 members. Other editions have no limit to the number of members a group can have. For group membership limits per user, see [Understand Groups policies and limits](https://support.google.com/a/answer/6099642) |
| maxResults query string | The API returns: - Chrome and mobile devices – A default and a maximum of 100 entries per page. - Groups and group members – A default and maximum of 200 entries per page. - Users – A default of 100 entries and a maximum of 500 entries per page. The user alias and organizational unit resources do not use response pagination. All user primary emails are returned in alphabetical order and the response order is case insensitive. |
| Multiple domain, maximum number of domains allowed in an account | 600 (1 primary domain + 599 additional domains) |
| Organizational Unit, maximum number of users moved at one time | 20 users can be moved at one time. And the user's primary email addresses must already exist in the account. |
| User aliases | The total number of aliases allowed for every user account is 30. |
| User aliases, using a deleted alias | A deleted user alias can be used again immediately. |

| Other Types of Limits | Limitations and Guidelines |
| --- | --- |
| Billing and creating users | For users on a flexible plan for Google Workspace, creating users using this API will have monetary impact, and will result in charges to your customer billing account. For instance, if you are on a flexible plan for Google Workspace, creating 10 users will result in charges for 10 Google Workspace licenses being posted to your account, prorated from the time the creation is done. If you are on an annual plan, you would already have committed to paying for a certain number of licenses upfront, and you can only create as many users as per your commitment. For more information about billing plans and your billing account, see the [administration help center](https://support.google.com/a/answer/1247360). |
| First and Last Names | First and last names have a maximum of 40 characters. They support Unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). |
| Groups, deleting | Deleting a group does not delete the group member's user accounts. |
| Groups and group members, email address change | In this version of the API, a group's email address can be changed before the Google Workspace service is enabled. Use the [Google Admin console](https://support.google.com/a/answer/9007750) to change a group member's email address. Once changed, the API automatically reflects the email address changes. |
| Groups, settings | Groups access settings, sharing options, monitoring, and discussion archive is managed using the Google Admin console. For more information about groups settings, see the [administration help center](https://support.google.com/a/answer/33329). |
| Groups, sending messages | To deter spam and email abuse, Google limits the number of messages you can send at once to external recipients. If you send a message to a group, each external member is counted as one recipient. For more information, see [Email sending limits](https://support.google.com/a/answer/166852) and [Prevent mail to Gmail users from being blocked or sent to spam](https://support.google.com/mail/answer/81126) . |
| Groups, sending NDR messages | You cannot send or forward non-delivery receipts (NDRs), also called "bounce messages", to a group. |
| Groups created by users, limitations | For user-created group limits, see the [administration help center](https://support.google.com/a/answer/6099642) |
| Organizational Unit, turning services on/off | Use the Google Admin console to manage [turning services on and off](https://support.google.com/a/answer/182442) for an organizational unit. |
| Passwords | Can contain any combination of characters. A minimum of 8 characters is required. The maximum length is 100 characters. |
| Photos | In this version of the API, a photo is the user's latest Google profile photo. |
| User names | User names can contain letters (a-z), numbers (0-9), dashes (-), underscores (\_), and Google Workspace recognizes dots or periods (.). This is not the same as Gmail. A user name may not contain an equal sign (=), brackets (<,>), or more than one period (.) in a row. For more information, see the [administration help center](https://support.google.com/a/answer/9193374). |
| User names, renaming | Google Hangouts discards all remembered chat invitations after renaming. The user must request permission to chat with friends again. The old user name is retained as an email alias to ensure continuous mail delivery in the case of email forwarding settings and will not be available as a new user name. For important details on the impact of renaming users, see the [administration help center](https://support.google.com/a/answer/2622985). Use the [Delete a user's alias](https://developers.google.com/workspace/admin/directory/v1/guides/manage-user-aliases#delete_user_alias) operation to remove the email alias after renaming. |
| Users in multiple domains | A Google Workspace account can include any of your domains. In a multiple domain account, users in one domain can share services with users in other account domains. Multiple domain components are: - Primary domain -- Your account's primary domain is the domain of the administrator who accepted the Google Workspace Terms of Service agreement. This domain is at the account-level in the top-level organizational unit. When signing up for a Google Workspace account, we recommend using your business domain for the primary domain, and reserve your other domains for specialized uses such as pilots and testing. 	- All super administrators can manage the full account. 		- The API cannot change or move the Google Workspace account's primary domain. However, the API can [rename](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user) a user's account, changing its email address from one domain to another. 		- For Google Workspace accounts, you have 21 days to verify your ownership of the primary domain. For additional domains, you must verify your domain ownership before using the domain for a user's primary email address. In these cases, the 21 day grace period does not apply. 		- In this version of the API, the primary domain's settings apply to all domains associated with the account except for the [user access to the Google Workspace services](https://support.google.com/a/answer/182442). - Additional account domains -- After establishing your primary domain and setting up your account, your can add your additional domains to the account. For additional domains, [verify your ownership](https://support.google.com/a/answer/60216) when setting up this domain and before using the domain for a user's primary email address. - User's home domain -- The domain used in a user's primary email address is the user's home domain. This domain can be any domain in the account, including the primary domain. For the latest multiple domain limitations, see [multiple domain limitations](https://support.google.com/a/answer/182081). This includes information for domain aliases, account merging, etc. |
| Warnings, group members | GROUP\_CANNOT\_CONTAIN\_CYCLE – The API does not allow a cycle in group memberships. For example, if group1 is a member of group2, group2 cannot be a member of group1. |
