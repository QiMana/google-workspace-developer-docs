---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/review-process-overview
root: workspace
fetched_at: 2026-04-23T15:25:40.501Z
---

# Review process

This guide describes the review process for Classroom add-ons. Read through carefully, as there are time-sensitive actions that you must perform.

Your add-on must be OAuth verified by the Trust & Safety team and approved by the Google Workspace Marketplace team. For general information about OAuth verification, see the [OAuth verification FAQ](https://support.google.com/cloud/answer/9110914#zippy=%2Csteps-for-apps-requesting-sensitive-scopes%2Csteps-to-prepare-for-verification). For general information about the Google Workspace Marketplace app review process see [About app review](../../../marketplace/about-app-review.md).

## Finalize add-on development

#### Review add-on requirements

Confirm that your add-on behavior meets the [requirements](../requirements.md).

#### Test your add-on

Your add-on is reviewed according to the procedures in our [add-ons test plan](https://developers.google.com/static/workspace/classroom/assets/classroom_add_ons_test_plan.pdf). Follow its testing procedures with your public add-on before submitting for publication. Failures in these tests can significantly increase the time required for your add-on to be approved.

#### Record a demo video

Create a screen recording demonstrating how your application uses each requested OAuth scope. For the purposes of developing an add-on, we recommend showing the add-on installation flow and creation of an add-on attachment.

Once recorded, upload the screen recording to YouTube as an *unlisted* video to YouTube. An unlisted video can only be reached using its link. You'll be prompted for the video link when starting the OAuth verification process. The OAuth team then views the video when reviewing your add-on application.

## Prepare for publication

#### Check your Cloud project configuration

Review each of the following configuration settings in your **Google Cloud project**.

- In your Cloud project's [Auth Audience](https://console.cloud.google.com/auth/audience) page:
	- Publishing status is **In production**.
		- User type is **External**.
- In your Cloud project's [Auth Branding](https://console.cloud.google.com/auth/branding) page:
	- All required fields are complete.
		- Ensure that your application home page doesn't link to the app itself, but rather to information about your product(s).
- In your Cloud project's [Auth Data Access](https://console.cloud.google.com/auth/scopes) page:
	- At least one of the `.../auth/userinfo.email` or `.../auth/userinfo.profile` **non-sensitive** scopes are specified.
		- *All other scopes* required by your add-on are specified. For Classroom add-ons, this should include the **sensitive** `.../auth/classroom.addons.teacher` and `.../auth/classroom.addons.student` scopes.
		- For the **Demo video** field, you must provide a link to a YouTube video that demonstrates how you use the data from the requested scopes. Provide the link to the screencast recorded earlier.
- The following [API libraries](https://console.cloud.google.com/apis/library) are **Enabled**:
	- [Google Classroom API](https://console.cloud.google.com/apis/library/classroom.googleapis.com)
		- [Google Workspace Marketplace SDK](https://console.cloud.google.com/apis/library/appsmarket-component.googleapis.com)

#### Check your Marketplace SDK settings

In your [Google Workspace Marketplace SDK App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk) page:

- **Classroom add-on** is checked under App Integration
- The landing URI for your add-on is provided in the **Attachment Setup URI**.
- All **Allowed Attachment URI Prefixes** are provided.
- The list of **OAuth Scopes** exactly matches the scopes specified in the OAuth consent screen and in your application code.
- The **Developer Email** under Developer Links is a *regularly monitored* email address. The Marketplace team uses this address to communicate with you.
- App Visibility is set to **Public** and the **Unlisted** box is checked.

Check that your project's [Google Workspace Marketplace Store Listing](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish) page complies with the [Listing considerations](./project-configuration.md#workspace_marketplace_name-listing).

#### Allow reviewer access

Allow the following Marketplace review team user accounts access to your application. Also add the two teacher users as [Draft Testers](../../../marketplace/manage-app-listing.md#draft-app-listing) for your add-on application.

- `teacher@marketplacetest.info`
- `teacher2@marketplacetest.info`
- `student@marketplacetest.info`
- `student2@marketplacetest.info`

You'll receive an email from the Marketplace team when they begin their review. If the reviewers must perform any setup steps to use these accounts with your product, reply to the email with detailed instructions.

## Complete OAuth verification

#### Submit for verification

The Trust & Safety team must check that your add-on appropriately uses the OAuth scopes that your application requests. Initiate verification from your Google Cloud project's [Auth Verification Center](https://console.cloud.google.com/auth/verification). Click **Prepare for verification**.

A confirmation dialog lists the configured values from the Auth Branding, Audience, and Data Access pages. Verify that the information is correct, then click **Confirm** to proceed.

#### Communicate with the verification team

The OAuth verification team processes your verification request. The reviewers communicate with you using the email addresses configured in your OAuth Consent screen. They will inform you of any concerns and when verification is complete.

This process typically requires 3-5 working days if you are only using [Sensitive OAuth scopes](https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification). Additional time and actions may be required if you are using any [Restricted OAuth scopes](https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification).

## Complete Google Workspace Marketplace review

#### Submit for review

Click **PUBLISH** at the bottom of your Google Cloud project's [Google Workspace Marketplace Store Listing](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish) page. The Marketplace review team tests the add-on against Google Workspace and Classroom add-on requirements.

#### Communicate with the review team

The Marketplace review team communicates directly with the Developer Email address specified in the Google Workspace Marketplace SDK [App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk) page. You are notified about any concerns with your add-on, or to inform you that it has been approved for publication. We recommend budgeting 2-3 weeks for this process.

## After publication approval

After Marketplace approval, your add-on listing is available in all Google Workspace for Education domains in the regions you selected. Unselect the **Unlisted** option in the Marketplace SDK [App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk) to make your add-on listing appear in search results and when browsing.
