---
source: https://developers.google.com/workspace/meet/add-ons/guides/best-practices
root: workspace
fetched_at: 2026-04-23T15:30:11.607Z
---

# Best practices

Improve your users' overall experience by following these guides for Google Meet add-on design.

## Authorization best practices

You're encouraged to use the following best practices for any Google Meet add-ons that require authentication or authorization.

### Use Google Sign-in

Many users of Google Workspace add-ons will already have signed in to Google before joining the meeting. Therefore, having [Google One Tap](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap) available as an option can save your users several clicks when going through the sign-in flow. For more information, see [Manage sign-in methods for your add-on](./sign-in-guide.md).

### Open third-party sign-in page in a new window

In addition to Google sign-in, your application may offer additional sign-in mechanisms. If so, use a dialog window instead of opening a sign-in page in a new tab. This way, the user is still able to see and return to the Meet call, and will go through fewer overall clicks.

### Properly request scopes for Google APIs

If your Meet add-on calls Google APIs, then you must [provide a complete list of OAuth scopes](../../../marketplace/enable-configure-sdk.md#oauth_scopes) required by your add-on. This is done on the Google Workspace Marketplace App Configuration page. After adding these scopes, your users are shown a prompt when they install your Meet add-on that tells users what kind of data they're allowing your app to access.

Before publishing your add-on, you must also set up the [OAuth consent screen](../../../guides/configure-oauth-consent.md). This requires adding *exactly* the same authorization scopes from your Google Workspace Marketplace App Configuration. Configuring the OAuth consent screen also requires setting the branding information, privacy policy, and terms of service that are displayed when scopes are requested. To publish publicly, all this information must be [submitted for verification](https://support.google.com/cloud/answer/13463073?visit_id=638573549902097341-260657355&rd=1).

When writing code to call the Google Workspace APIs, following the [JavaScript Quickstart](../../../drive/api/quickstart/js.md#authorize_credentials_for_a_web_application) is the easiest way to get started. This approach adheres to best practices for using Google Sign-In and dialog windows. Note that [initializing the token client](https://developers.google.com/identity/oauth2/web/guides/use-token-model#initialize_a_token_client) in JavaScript requires separately requesting the scopes that the application actually uses at runtime. For the best user experience, these requested scopes should match the ones in the Google Workspace Marketplace App Configuration page. This redundancy provides a fallback to handle the case in which a [user has revoked scopes](https://support.google.com/accounts/answer/13533235).

## Maintenance best practices

The following best practices are for writing maintainable web applications, but they're particularly important when writing any Meet add-ons.

### Use the latest version of the Google Meet add-ons SDK

The Meet add-ons SDK is updated regularly. The SDK adheres to [semantic versioning](https://semver.org/). To find the latest version:

- **When using gstatic**: The latest SDK version is contained within the gstatic URL found in [the instructions for using the SDK](./quickstart.md).
- **When using npm**: Run `npm update @googleworkspace/meet-add-ons` from within the directory containing the [`package.json`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) for the website that hosts your Meet add-on.

### Create a staging Google Cloud project

Once your Google Meet add-on is [published on the Google Workspace Marketplace](./concepts.md#publish), any new deployments of your Google Meet add-on are instantly available to Meet users. Users will see these updates as soon as they empty their caches or the cache expires. Therefore, we recommend not pushing changes to your production site until the changes are thoroughly tested.

To avoid deploying straight to production, we recommend [creating a separate Google Cloud project](../../../guides/create-project.md) that is published privately to your organization. This Cloud project will host both the staging and development environments for your Meet add-on. Access for this Cloud project should be limited to a smaller team that's directly working on development of your add-on.

To create these alternate environments for your add-on, you first need to host alternate environments of your web application that contains your add-on, on a domain that you own. Then, you can create alternate environments for your Meet add-on by adding additional [deployments](./deploy-add-on.md#create-deployment) to your staging Google Cloud project. These new deployments should have manifests which point to the alternate environments of your web application. Then, we recommend that you install each add-on environment as follows:

- **Staging**: [Publish the staging version privately](../../../marketplace/how-to-publish.md#audience) so that anyone in your organization can assist with testing.
- **Development**: Click **Install** under the **Actions** column to install the Meet add-on development version to just your account.

### Write tests

Before deploying your Meet add-on to a development environment, we recommend writing unit tests. Your unit tests should include:

- Mocking out the Meet add-ons SDK, and then verifying that the Meet add-on calls the SDK functions as expected.
- Unit testing all non-SDK related functionality of your add-on with your preferred web testing framework.

## User experience best practices

The following best practices help make a Meet add-on more intuitive and refined.

### Manage all starting state in the side panel

We strongly encourage setting up your add-on based on user actions taken in the [side panel](./overview.md#side-panel). This is done by [setting the activity starting state](./collaborate-in-the-add-on.md) in JavaScript. All data that goes into the [`ActivityStartingState`](../reference/websdk/addon_sdk.activitystartingstate.md.md) should be set by the initiator of the add-on (typically the meeting host) within the side panel. You can think of the first view of the side panel as a form that controls the set up of your add-on.

### Close the side panel when not in use

After starting the activity by calling the [`startActivity()`](../reference/websdk/addon_sdk.meetaddonclient.startactivity.md.md) method, you should only keep the [side panel](./overview.md#side-panel) open if it's an essential part of the user experience for your Google Meet add-on. You can close the side panel once the [main stage](./overview.md#main-stage) is open by calling the [`unloadSidePanel()`](../reference/websdk/addon_sdk.meetmainstageclient.unloadsidepanel.md.md) method.

### Promote your Meet add-on through screen sharing

Meet add-ons offer a richer experience than screen sharing. However, many users are accustomed to using Meet's screen sharing feature. If a user shares a tab displaying the website that hosts your Meet add-on, Meet can be configured to display a banner to all call participants prompting them to install or use the corresponding Meet add-on. For more information, see [promoting your add-on through screen sharing](./promote.md#screen_sharing).

## Logo design guidelines

Follow these guidelines when designing your Meet-specific logo to make it look its best now and in the future:

Do use PNG file format, sized to 256px x 256px.

Do use transparency.

Do verify your dark-mode logo looks good in dark mode by using the [developer tools for Meet add-ons](./devtools.md#setDarkMode).

Do verify your logo (and [other graphic assets](../../../marketplace/create-listing.md#graphic_assets)) look good in high contrast mode by using a contrast checker such as [Contrast Checker](http://webaim.org/resources/contrastchecker) by Web Accessibility In Mind (WebAIM).

Do adhere to the graphics [requirements for specific app integrations](../../../marketplace/about-app-review.md).

Don't include padding in your image. Extend the image to the boundaries of your file instead.

## Related topics

- [Troubleshoot and fix Meet add-on errors](./troubleshoot.md)
