---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/activities
root: workspace
fetched_at: 2026-04-23T15:23:59.799Z
---

# REST Resource: activities

The Reports API retrieves account activities for these applications. The maximum time period for all audit activity reports is 180 days.

Access transparency

The access transparency report returns information about how Google's support teams have accessed your account's user data. It uses the basic report endpoint request and provides specific parameters such as the home office of the actor and the justification for access.

Admin console

The administrator activity report returns information on the Admin console activities of all of your account's administrators. Each report uses the basic report endpoint request and provides report-specific parameters such as an administrator's name or a specific Admin console event. For more information, see the [Developer's Guide](../../../v1/guides/manage-audit-admin.md).

Chrome

The Chrome activity report returns information about the ChromeOS activity of all of your account's users. Each report uses the basic endpoint request and provides report-specific parameters such as logins, adding or removing users, or unsafe browsing events.

Context-aware access

The context-aware access activity report returns information about denials of application access to your account's users. It uses the basic report endpoint request and provides specific parameters such as device ID and the application to which access was denied.

Currents

The Currents activity report returns information about the Currents activity of all of your account's users. Each report uses the basic endpoint request and provides report-specific parameters such as a specific post or event type.

Data Studio

The Data Studio activity report returns information about the Data Studio activity of all of your account's users. Each report uses the basic endpoint request and provides report-specific parameters such as ACL changes and report creation or deletion.

Devices

The Devices activity report returns information about the activity of all of your account's managed devices. Each report uses the basic endpoint request and provides report-specific parameters such as application and OS updates and suspicious activities. For more information, see the [Developer's Guide](../../../v1/guides/manage-audit-mobile.md).

Enterprise Groups

The enterprise groups activity report returns information about administrator and moderation activities related to all of your account's groups. Each report uses the basic endpoint request and provides report-specific parameters such member adds and deletions, security settings, and member ban/unban operations.

Google Calendar

The Calendar activity report returns information about how your account's users manage and modify their Google Calendar events. Each report uses the basic endpoint request with report-specific parameters such as a specific calendar or event type.

Google Chat

The Chat activity report returns information about how your account's users use and manage Spaces. Each report uses the basic endpoint request with report-specific parameters such as uploads or message operations.

Google Classroom

The Classroom activity report returns information about how your account's users use and manage their Google Classroom resources. Each report uses the basic endpoint request with report-specific parameters such as the event type and ID of the resource affected.

Google Cloud

The Google Cloud activity report returns information about various activity events related to the Cloud OS Login API.

Google Drive

The Drive activity report returns information about how your account's users manage, modify, and share their Google Drive documents. Each report uses the basic report endpoint request with report-specific parameters such as an administrator's name or a specific Google Drive change.For more information, see the [Developer's Guide](../../../v1/guides/manage-audit-drive.md).

Google Groups

The groups activity report returns information about how your account's users manage and modify their groups. Each report uses the basic endpoint request with report-specific parameters such as a specific group or event type.

Google Keep

The Keep activity report returns information about how your account's users manage and modify their notes. Each report uses the basic endpoint request with report-specific parameters such as attachment upload information or note operations.

Google Meet

The Meet activity report returns information about various aspects of call events. Each report uses the basic endpoint request with report-specific parameters such as abuse report data or livestream watch data.

Jamboard

The Jamboard activity report returns information about changes to Jamboard device settings. Each report uses the basic endpoint request with report-specific parameters such as licensing or device pairing settings.

Login

The login activity report returns information about the login activity of all of your account's users. Each report uses the basic endpoint request with report-specific parameters such as the suspicious login flag. For more information, see the [Developer's Guide](../../../v1/guides/manage-audit-login.md).

OAuth Tokens

The OAuth token activity report returns information about third party websites and applications your users have granted access for. Each report uses the basic report endpoint request with report-specific parameters such as the third party domain or authorization scopes granted. For more information, see the [Developer's Guide](../../../v1/guides/manage-audit-tokens.md).

Rules

The Rules activity report returns information about how the rules (that have been set up in Admin console) are performing. Each report uses the basic endpoint request with report-specific parameters such as a specific rule name, resource ID or resource owner email.

SAML

The SAML activity report returns information about the results of SAML login attempted. Each report uses the basic endpoint request with report-specific parameters such as the failure type and SAML application name.

User Accounts

The user accounts activity report returns information about changes to various user security settings. Each report uses the basic endpoint request and returns the result of the operation.

## Resource

There is no persistent data associated with this resource.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>list</h3></td><td>Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application.</td></tr><tr><td><h3>watch</h3></td><td>Start receiving notifications for account activities.</td></tr></tbody></table>
