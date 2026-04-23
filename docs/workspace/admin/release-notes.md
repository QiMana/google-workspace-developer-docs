---
source: https://developers.google.com/workspace/admin/release-notes
root: workspace
fetched_at: 2026-04-23T15:24:00.147Z
---

# Google Admin console release notes

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/admin-sdk-release-notes.xml`.

This page contains release notes for features and updates to the Admin console. We recommend that Admin console developers periodically check this list for any new announcements.

## December 30, 2025

Change

**License Manager API**: The SKU name "Gemini Education" has been renamed to "Google AI Pro for Education." For details, see the [Google Product and SKU IDs](./licensing/v1/how-tos/products.md) documentation and [announcement](https://workspaceupdates.googleblog.com/2025/09/google-ai-pro-for-education.html).

## September 16, 2025

Feature

**Reports API**: You can now get Google Drive activity events when applications prefetch the content of a Drive item. For details, see [the `prefetch_item_content` event](./reports/v1/appendix/activity/drive.md#prefetch_item_content).

## August 20, 2025

Feature

**Reports API**: You can now retrieve activity events for Gmail. These events provide insights into how users in your organization are using Gmail. To retrieve these events, use the `activities.list` method with `applicationName=gmail`. For details, see the [reference documentation](./reports/v1/appendix/activity/gmail.md).

## July 01, 2025

Feature

**Reports API**: You can now retrieve activity events for Gemini in Workspace Apps. These events provide insights into how users in your organization are using Gemini. To retrieve these events, use the `activities.list` method with `applicationName=gemini_in_workspace_apps`. For details, see the [reference documentation](./reports/v1/appendix/activity/gemini-in-workspace-apps.md).

## March 17, 2025

Change

**Reports API**: User Logs Events now have logs for additional challenge types, such as `Passkey`, `Device Prompt`, `SAML` and more.

[Learn more about Login Audit Activity Events](./reports/v1/appendix/activity/login.md). You can get these events using the [`activities.list`](./reports/reference/rest/v1/activities/list.md) method.

## February 14, 2025

Change

**Reports API**: Google Chat now supports the [`customerUsageReports.get()`](./reports/reference/rest/v1/customerUsageReports/get.md) and [`userUsageReports.get()`](./reports/reference/rest/v1/userUsageReport/get.md) methods. Forty eight new metrics have been added to [`customerUsageReports`](./reports/v1/appendix/usage/customer/chat.md) and four new metrics have been added to [`userUsageReports`](./reports/v1/appendix/usage/user/chat.md).

Change

**Reports API**: A new event type `conversation_read` has been added to Google Chat along with four new event parameters to [`activities.list`](./reports/reference/rest/v1/activities/list.md), and [`activities.watch`](./reports/reference/rest/v1/activities/watch.md):

- `conversation_ownership`
- `conversation_type`
- `message_type`
- `attachment_status`

The full list of events and parameters supported in Chat audit activities can be found on the [Chat Audit Activity Events](./reports/v1/appendix/activity/chat.md) page.

## January 29, 2024

Change

**Reports API**: The event returned in the [`activities.watch`](./reports/reference/rest/v1/activities/watch.md) method payload is now filtered to the event name set in the filter. Before this change, multiple events were returned in the payload even if the customer filtered to a specific event.

## December 27, 2023

Feature

**Directory API**

**(Generally available)**: You can now change the device status of ChromeOS devices in batch. For more information, refer to [Deprovisioning or disabling Chrome devices](./directory/v1/guides/manage-chrome-devices.md#take_action_chrome_device).

Deprecated

**Directory API**: The [`action`](./directory/reference/rest/v1/chromeosdevices/action.md) method of the `chromeosdevices` resource is deprecated. Instead, use the [`batchChangeStatus`](./directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus.md) method in the `customer.devices.chromeos` resource.

## September 06, 2022

Change

**Reseller API**: The maximum queries per day (QPD) of 10,000 no longer applies.

## May 14, 2020

Feature

**Reports API**: A new parameter `member_type` has been added to the Enterprise Groups activity report. Valid member types include user, group, service account, and other.

## July 30, 2019

Deprecated

**Reports API**: The customer usage reports for App Maker and Apps Script are deprecated and will eventually be removed from the API.

## October 22, 2018

Change

**Reports API**: The `community_name` parameter for the [Google+ communities report](./reports/v1/appendix/usage/entity/gplus-communities.md) is now available only for communities inside your organization.

## October 05, 2018

Announcement

**Alert Center API**: V1beta1 is now available.

## August 01, 2018

Change

**Reports API**: The availability of past data for the [Entities Usage Report](./reports/v1/guides/manage-usage-entities.md) has been changed to 30 days.

## June 04, 2018

Fixed

**Reports API**: Fixed an issue where some [Entities Usage Parameters](./reports/v1/guides/manage-usage-entities.md) were under-reported for some [Google+ communities](./reports/v1/appendix/usage/entity/gplus-communities.md). This has been corrected as of May 25, 2018.

## December 11, 2017

Feature

**Reports API**: We have created the [Entities Usage Report](./reports/v1/guides/manage-usage-entities.md) to generate reports on entities used by your account's users. The API currently supports reporting for [Google+ communities](./reports/v1/appendix/usage/entity/gplus-communities.md).

## July 11, 2017

Feature

**Reports API**: Nine new parameters have been added to the [Google+ customer usage report](./reports/v1/appendix/usage/customer/gplus.md). The new parameters are:

- `num_communities`
- `num_communities_public`
- `num_communities_private`
- `num_communuties_organization_wide`
- `num_communities_organization_private`
- `num_collections`
- `num_collections_public`
- `num_collections_organization_wide`
- `num_collections_organization_private`

In addition, the [Google+ user usage report](./reports/v1/appendix/usage/user/gplus.md) was created with seven metrics:

- `num_shares`
- `num_plusones`
- `num_plusones_received`
- `num_replies`
- `num_replies_received`
- `num_reshares`
- `num_reshares_received`

## May 11, 2017

Feature

**Reports API**: We have added the [App Maker](https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/customers-appmaker) and [Apps Script](https://developers.google.com/admin-sdk/reports/v1/reference/usage-ref-appendix-a/customers-appsscript) customer usage reports to the `customerUsageReports.get` method. These new reports allow you to view information about App Maker and Apps Script usage in your domains.

## April 05, 2017

Change

**Reports API**: Google Docs customer and usage reports are being replaced by Google Drive customer and usage metrics. See details in [Update your Drive and Docs Metrics](./reports/v1/updated-drive-metrics.md).

## March 14, 2017

Feature

**Reports API**: Six new parameters have been added to the [Google+ customer usage report](./reports/v1/appendix/usage/customer/gplus.md). The new parameters are:

- `num_new_users`
- `num_shares`
- `num_reshares`
- `num_plusones`
- `num_replies`
- `num_stream_items_read`

## February 02, 2015

Feature

**Reports API**: We have added the [Mobile Device](./reports/v1/appendix/usage/customer/device-management.md) customer usage report to the [`customerUsageReports.get` method](./reports/reference/rest/v1/customerUsageReports/get.md). This new report allows you to view information about mobile device usage in your domains.

## December 11, 2014

Feature

**Reports API**: We have added the [Google Calendar](./reports/v1/appendix/activity/calendar.md) audit report to the [`activities.list` method](./reports/reference/rest/v1/activities/list.md). This new report allows you to view information about changes to calendars and calendar events for users in your domain.

## November 20, 2014

Feature

**Reports API**: We have added the [Google Sites](./reports/v1/appendix/usage/customer/sites.md) customer usage report to the [`customerUsageReports.get` method](./reports/reference/rest/v1/customerUsageReports/get.md). This new report allows you to view information about Google Sites usage in your domains.

## November 12, 2014

Feature

**Reports API**: We have added the [OAuth Token Audit](https://developers.google.com/admin-sdk/reports/v1/guides/manage-audit-token) reporting application to the [`activities.list` method](./reports/reference/rest/v1/activities/list.md). This new report allows you to view information about third party websites and applications that users in your domains have granted access to.

## November 03, 2014

Change

**Reseller API**: New `billingMethod` field.

Change

**Reseller API**: New `transferToDirect` `deletionType`.

## October 29, 2014

Feature

**Reports API**: Added the following parameters to the [Gmail customer usage report](./reports/v1/appendix/usage/customer/gmail.md):

- `num_inbound_delivered_emails`
- `num_inbound_rerouted_emails`
- `num_inbound_rejected_emails`
- `num_inbound_spam_emails`
- `num_inbound_non_spam_emails`
- `num_inbound_encrypted_emails`
- `num_inbound_unencrypted_emails`
- `num_outbound_delivered_emails`
- `num_outbound_rerouted_emails`
- `num_outbound_rejected_emails`
- `num_outbound_encrypted_emails`
- `num_outbound_unencrypted_emails`

## October 27, 2014

Feature

**Reports API**: We have added the [ChromeOS Devices customer usage report](./reports/v1/appendix/usage/customer/cros.md) to the [`customerUsageReports.get` method](./reports/reference/rest/v1/customerUsageReports/get.md). This new report allows you to view information about ChromeOS device usage in your domains.

## September 02, 2014

Change

**Reports API**: The maximum time limit for usage reports has been increased from 180 days to 450 days. Because this change will take time to populate in our data, the full 450 day history will be available on May 30, 2015 with an earliest available record date of March 6, 2014.

## August 15, 2014

Feature

**Reports API**: A new [`view` event](./reports/v1/appendix/activity/drive.md#view_docs) has been added to the [Drive activity report](./reports/v1/guides/manage-audit-drive.md).

## August 11, 2014

Feature

**Directory API**: The following fields have been added to the [`Mobiledevices` resource](./directory/reference/rest/v1/mobiledevices.md):

- `serialNumber`
- `imei`
- `meid`
- `wifiMacAddress`
- `networkOperator`
- `defaultLanguage`
- `managedAccountIsOnOwnerProfile`
- `deviceCompromisedStatus`
- `buildNumber`
- `kernelVersion`
- `basebandVersion`

Feature

**Directory API**: The [`Chromeosdevices` resource](./directory/reference/rest/v1/chromeosdevices.md) has the following fields:

- `recentUsers`
- Device's `ethernetMacAddress`

## August 04, 2014

Deprecated

**Reseller API**: Deprecated `readonly` scope.

Change

**Reseller API**: new `licensedNumberOfSeats` field in the `Subscriptions` resource.

## June 25, 2014

Feature

**Reports API**: The [Drive activity report](./reports/v1/guides/manage-audit-drive.md) is now available. This new report provides insight about Drive activity and how your account's users manage, modify, and share their Google Drive documents. This report is available only for G Suite Business customers and replaces the Google Docs activity report. The Google Docs activity report is now deprecated and will cease functioning on January 31, 2015.

## June 05, 2014

Change

**Reports API**: Both [customer](./reports/v1/appendix/usage/customer/gmail.md) and [user](./reports/v1/appendix/usage/user/gmail.md) Gmail reports now include default values. For example, if a user sends no email, the `num_emails_sent` parameter is returned as 0. Previously, if there was no data for a field, that field was omitted from the report.

## May 27, 2014

Feature

**Reports API**: Includes usage statistics from suspended users in [Customers Usage reports](./reports/v1/guides/manage-usage-customers.md).

## April 23, 2014

Change

**Reports API**: A change has been made to how parameters with no data are returned by the API. Previously, if there was no data for a parameter, it would be absent from the report. For example, the Gmail user usage report would not include the `num_emails_sent` field in the response if a user didn't send any emails on the report date. The API now returns these parameters with a default of 0 for integers and false for boolean values.

## April 15, 2014

Feature

**Reports API**: A new `num_users_2sv_not_enrolled_but_enforced` parameter has been added to the [customer accounts usage report](./reports/v1/appendix/usage/customer/accounts.md). This new parameter indicates the number of domain users that have 2-step verification enforced but have not enrolled.

## March 27, 2014

Fixed

**Reports API**: Fixed an issue that caused filters to use case-sensitive comparisons. All filters are now case-insensitive.

Feature

**Reports API**: Added two new `login_failure_type` values to the [Login Audit events](./reports/v1/appendix/activity/login.md): `login_failure_account_disabled` and `login_failure_unknown`.

## March 05, 2014

Fixed

**Reports API**: Fixed an issue that caused filters to be ignored on queries for single users and always return a single record. After the fix, queries for single users that also include filters will return no result if the user does not match the filter criteria.

## February 28, 2014

Fixed

**Reports API**: Fixed an issue that caused certain statistics on numbers of active users to include one extra day. Some domains might notice a decrease in the number of reported active users for reports after February 24, 2014. The affected fields are:

- Accounts
	- `num_1day_logins`
		- `num_7day_logins`
		- `num_30day_logins`
- Google Calendar
	- `num_1day_active_users`
		- `num_7day_active_users`
- Google Docs
	- `num_1day_active_users`
		- `num_7day_active_users`
		- `num_30day_active_users`
- Gmail
	- `num_1day_active_users`
		- `num_7day_active_users`
		- `num_30day_active_users`
- Google+
	- `num_1day_active_users`
		- `num_7day_active_users`

Feature

**Reports API**: Added the following fields to the [Customer Account Usage](./reports/v1/appendix/usage/customer/accounts.md) and [Users Account Usage](./reports/v1/appendix/usage/user/accounts.md) reports:

- Customer Accounts
	- `num_authorized_apps`
		- `authorized_apps`
		- `drive_used_quota_in_mb`
		- `gmail_used_quota_in_mb`
		- `gplus_photos_used_quota_in_mb`
		- `total_quota_in_mb`
		- `used_quota_in_mb`
		- `apps_total_licenses`
		- `apps_used_licenses`
		- `vault_total_licenses`
		- `coordinate_total_licenses`
- User Accounts
	- `num_authorized_apps`
		- `drive_used_quota_in_mb`
		- `gmail_used_quota_in_mb`
		- `gplus_photos_used_quota_in_mb`
		- `total_quota_in_mb`
		- `used_quota_in_mb`
		- `used_quota_in_percentage`

## February 24, 2014

Change

**Directory API**: The [`users.update` method](./directory/reference/rest/v1/users/update.md) behavior has been slightly changed to accommodate delegated administrator access to the Directory API. Only fields the authenticated user has access to can be specified in the request and only fields that have been updated are included in the response.

## February 10, 2014

Feature

**Reports API**: Suspended users are now included in the statistics for Google Docs reports. Some domains might notice an increase in the number of reported documents. The following parameters have been added to the User's usage report:

- [Accounts](./reports/v1/appendix/usage/user/accounts.md): `used_quota_in_percentage`
- [Docs](./reports/v1/appendix/usage/user/docs.md)
	- `num_docs_externally_visible`
		- `num_docs_internally_visible`
- [Gmail](./reports/v1/appendix/usage/user/gmail.md): `num_emails_exchanged`

## January 27, 2014

Feature

**Directory API**: Supports [push notifications](./directory/v1/guides/push.md) for changes to users and aliases. You no longer need to poll resources to detect changes. You can create a notification channel using the [`users.watch`](./directory/reference/rest/v1/users/watch.md) and [`users.aliases.watch`](https://developers.google.com/admin-sdk/directory/v1/reference/users/aliases/watch) methods. You can stop receiving notifications with the [`channels.stop`](./directory/reference/rest/v1/channels/stop.md) method.

Feature

**Reports API**: Added [push notifications](./reports/v1/guides/push.md) for changes to the [`Activities` resource](./reports/reference/rest/v1/activities.md). This is exposed in the API as two new methods, [`activities.watch`](./reports/reference/rest/v1/activities/watch.md) and [`channels.stop`](./reports/reference/rest/v1/channels/stop.md), to start and stop receiving notifications.

Feature

**Directory API**: Structured search queries for users are available by using the [`users.list` method](./directory/reference/rest/v1/users/list.md).

## December 03, 2013

Feature

**Reports API**: Added support for resellers to retrieve usage reports and audit information for a specific customer. This is exposed in the API as a new `customerId` parameter for the [`activities.list`](./reports/reference/rest/v1/activities/list.md), [`customerUsageReports.get`](./reports/reference/rest/v1/customerUsageReports/get.md), and [`userUsageReport.get`](./reports/reference/rest/v1/userUsageReport/get.md) methods.

## September 02, 2013

Feature

**Reseller API**: The customer resource's `resourceUiUrl` URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console.

Feature

**Reseller API**: When retrieving all transferable subscriptions for a customer, the response contains a subscription's `transferInfo` property with the `tranferabilityExpirationTime` and `minimumTransferSeats` attributes.\`

Feature

**Reseller API**: To retrieve all of a customer's subscriptions, use the customer's `customerId` parameter. For more information, see [Retrieve & update a subscription](https://developers.google.com/admin-sdk/reseller/v1/how-tos/manage_subscriptions/admin-sdk/reseller/v1/how-tos/manage_subscriptions).

Feature

**Reseller API**: The API can retrieve the full account settings of one of your resold customers or the `customerId` and `customerName` of a standalone Google customer or a customer managed by another reseller.

Feature

**Reseller API**: To retrieve all transferable subscriptions for a customer, use the customer's `customerId` and the `customerAuthToken`. For more information, see [Retrieve all transferable subscriptions for a customer](./reseller/v1/how-tos/manage_subscriptions.md#retrieve_all_transferable_subscriptions_for_a_customer).

## July 01, 2013

Feature

**Reseller API**: A subscription's optional status property can be `ACTIVE`, `CANCELLED`, `PENDING`, or `SUSPENDED`. For more information, see the [`subscriptions` resource](./reseller/reference/rest/v1/subscriptions.md).

Change

**Reseller API**: A Vault subscription is no longer limited to accounts created after August 1.

Change

**Reseller API**: The maximum queries per day (QPD) has been increased to 10,000. For more information, see [Usage limits](./reseller/v1/limits.md).

Change

**Reseller API**: The `customerId` parameter is either the primary domain name or the unique identifier of a customer. We recommend using the unique identifier or the customer value.

## April 02, 2013

Breaking

**Directory API**: The differences between the Directory API and the deprecated Provisioning API (v2):

- Account's domain name
	- The Directory API user's `primaryEmail` property holds the account's primary domain name.
		- The Provisioning API request URL's `domain` property holds the account's primary domain name.
- Administrator
	- The Directory API `isAdmin` property has a boolean `true`, `false` value. The `isAdmin` property can only be edited in the `Make a user an administrator` operation. If edited in the `Create a user account` or `Update a user account` operations, the edit is ignored.
		- The Provisioning API `isAdmin` property has a boolean `true`, `false` value. The property can be edited when the user is created or updated.
- A `customerId` unique identifier
	- The Directory API returns a `customerId` unique identifier property when a user is retrieved for an account with a single or multiple organizational units.
		- The Provisioning API returns a `customerId` for accounts with an organizational unit hierarchy.
- Deleted user list
	- The Directory API returns a list of users deleted from the account or a subdomain within the span of the last 20 days.
		- The Provisioning API doesn't support this feature.
- Disk space
	- Not applicable in this version of the Directory API.
		- The Provisioning API `apps:quota` that sets the user's disk space quota is no longer available. Setting a customer quota, different than 25600MB, has no effect.
- Devices
	- The Directory API's Google Chrome devices and mobile devices support the management of retrieving, adding, updating, and deleting your account's various devices.
		- The Provisioning API doesn't support these features.
- Email aliases outside of an account
	- The Directory API users and groups support listing non-editable alias email addresses that are outside of the account. These are functioning email addresses used by a user or a group on a regular basis.
		- The Provisioning API doesn't support this feature.
- Group alias
	- The Directory API creates, lists, and deletes a group's aliases.
		- The Provisioning API supports managing groups but doesn't include group aliases.
- Hash function
	- The Directory API `hashFunction` property holds the hash format of the `password` property. The values can be set to either SHA-1, MD5, or CRYPT hash formats.
		- The Provisioning API `hashFunctionName` attribute is a part of the `password` tag. The values can be either SHA-1, MD5, or CRYPT hash formats.
- Organizational units
	- The Directory API uses the `orgUnitPath` property when setting a new user.
		- The Provisioning API has two steps for creating a user in an organizational unit. First the user account is created and then the user is assigned to an organizational unit.
- Suspend a user
	- The Directory API suspends a user's account either when creating or updating the user's account using the `suspended` property. The reason for the suspension is also retained by the API in the `suspensionReason` property.
		- The Provisioning API uses the operation that suspends a user's account.
- Undelete a user
	- The Directory API undeletes a previously deleted user account within 20 days of the deletion.
		- The Provisioning API restores a suspended user account to an active state within the suspension period.
- User aliases
	- The Directory API supports user alias for a single or multiple domain account. A user alias is an alternate email address that uses the same mailbox used by the user's primary email address. A user's alias can be associated with a different account domain than that domain used by the user's primary email address. The account can have single or multiple domains. The Directory API doesn't use the concept of a 'nickname' for a single domain.
		- The Provisioning API manages a single domain account's nicknames, and, in the case of an account with multiple domains, the Provisioning API supports user aliases.
- User list's search, sorting, and list order
	- The Directory API can search for users by primary email address, given name, or family name. In addition, the Directory API can return lists of a domain's users sorted by the user's primary email address, given name, or family name. And, you have the option to list these results in ascending or descending order.
		- The Provisioning API doesn't support these features.
