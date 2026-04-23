---
source: https://developers.google.com/workspace/classroom/best-practices/access-control-enhancements
root: workspace
fetched_at: 2026-04-23T15:25:43.859Z
---

# Developer best practices following enhancements to GWfE third party app access controls

Google has introduced app access control settings to make it easier for Google Workspace for Education administrators to [control how third-party apps access](https://workspaceupdates.googleblog.com/2023/08/third-party-app-access-enhancements-for-google-workspace-edu.html) their organizations' Google data when users sign-in using their Google Workspace for Education accounts. While there are no actions required from third-party apps developers, below are some best practices other developers have found helpful.

## Use incremental OAuth

You can use [incremental authorization](https://developers.google.com/identity/sign-in/web/incremental-auth) to initially request only the scopes required to start your app, then request additional scopes as new permissions are required. The app context then identifies the reason for the request to the user.

At sign-in, your app requests basic scopes such as the sign-in scope profile and other initial scopes your app requires for operation. Later, when the user wants to perform an action that requires additional scopes, your app requests those additional scopes and the user authorizes only the new scopes from a consent screen.

When building a Google Classroom add-on you should follow the Google Workspace Marketplace [guidance](https://developers.google.com/workspace/marketplace/configure-oauth-consent-screen#3_configure_scopes) of providing a complete list of the OAuth scopes that your app requires. This is necessary so that an administrator understands which scopes a domain user is asked to consent to.

## Ensure all apps are OAuth verified

All apps that access Google APIs must [verify](https://developers.google.com/identity/protocols/oauth2/production-readiness/brand-verification) that they accurately represent their identity and intent as specified by Google's API Services User Data Policy. If you maintain multiple apps that use Google APIs, ensure that each app has been verified. Administrators may see all OAuth client IDs associated with your verified brand. To help administrators avoid configuring incorrect OAuth client IDs, use separate Google Cloud projects for [testing and production](https://developers.google.com/identity/protocols/oauth2/production-readiness/policy-compliance#separate-projects-testing-production) and delete all OAuth client IDs that are not being used.

OAuth API verification is a process that Google Cloud Platform uses to ensure that apps that request sensitive or restricted scopes are secure and compliant. The verification process helps to protect Google Cloud users and data from unauthorized access.

Apps that request sensitive or restricted scopes must comply with the Google API Services User Data Policy. This policy requires apps to protect user data and to only use the data for the purposes that the user has authorized. Apps may also need to undergo an independent security assessment to verify that they meet Google Cloud's security requirements.

Note, the OAuth API verification process can take up to several weeks to complete. Once your app has been verified, you are able to request the sensitive or restricted scopes that you need.

Refer to the [OAuth API verification FAQs](https://support.google.com/cloud/answer/9110914) for more details.

## Handle multiple OAuth client IDs

A Google Cloud project might have multiple OAuth client IDs, which might require a domain administrator to configure your access several times.

### Ensure accuracy of OAuth client IDs

Check with your development team to understand which OAuth client IDs are being used to integrate with Google OAuth. Use two different Google Cloud projects for [testing and production](https://developers.google.com/identity/protocols/oauth2/production-readiness/policy-compliance#separate-projects-testing-production) to help administrators understand which OAuth client IDs to configure. Delete any deprecated or out-of-date client IDs from your production projects.

### CSV upload

If you have multiple client IDs, we recommend leveraging the [CSV bulk upload](https://support.google.com/a/answer/12653991#zippy=%2Cstep-enter-app-information-save-the-file) option to help administrators quickly configure all your apps.

The fields are:

| Field | Required | Notes |
| --- | --- | --- |
| App Name | No | Enter the name of the app. Changes that you make to the app name in the CSV file don't update in the Admin console. |
| Type | **Yes** | One of **web application**, **Android** or **iOS**. |
| Id | **Yes** | For web apps, enter the OAuth client ID issued to the application.      For Android and iOS apps, enter the OAuth client ID or the package or bundle ID the app uses in Google Play or the Apple App store. |
| Org Unit | **Yes** | To be filled in by the customer.      Enter a forward slash ('/') to apply the app access setting to your entire domain. To apply access settings to specific organizational units, add a row to the spreadsheet for each org unit, repeating the App name, Type and ID. (for example, '/org\_unit\_1/sub\_unit\_1'). |
| Access | **Yes** | One of **trusted**, **blocked**, or **limited**. |

## OAuth errors

Two error messages have been introduced with these new administrator controls.

- **Error 400: access\_not\_configured** - received when an OAuth connection is rejected because your app has not been configured.
- **Error 400: admin\_policy\_enforced** - received when an OAuth connection is rejected because the administrator has blocked your application.

## Users designated as under 18

Administrators may [manage access](https://support.google.com/a/answer/13288950) to unconfigured third-party apps for users designated as under 18. If a user encounters the error "Access blocked: Your institution's administrator needs to review \[app name\]," they must request access from within the error message. This lets their administrator review the third-party application. Administrators can decide whether to allow or block third-party applications.
