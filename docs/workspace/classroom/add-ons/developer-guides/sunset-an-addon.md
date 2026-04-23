---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/sunset-an-addon
root: workspace
fetched_at: 2026-04-23T15:25:40.311Z
---

# Turn off or shut down a Classroom add-on

This page explains how to turn off or shut down a Google Classroom add-on. Your choices of action depend on whether you want to reactivate the add-on in the future.

## Limitations

Note the following considerations before changing your add-on's status:

- Google *doesn't remove* already created add-on attachments in Classroom, even after you perform one of the actions described in this guide. If you no longer intend for users to access your content through add-on attachments, ensure that users are not presented with unrecoverable errors.
- Disabling the Google Workspace Marketplace SDK in a Google Cloud project has no effect on the listing or app behavior. Doing so only prevents you from changing the configuration.
- You cannot temporarily block users that have installed your add-on from using it.

## Actions

The following are the actions you can take that affect the availability of a Classroom add-on. These are performed in either the Google Workspace Marketplace SDK or the add-on's Google Cloud project itself. Each addresses a particular use case.

### Unlist

Choose this option if you want to reduce new installations of an add-on by making its Google Workspace Marketplace listing undiscoverable.

**Unlist** an add-on by checking the `Unlisted` box in the App Visibility section of the Marketplace SDK [App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk) page.

#### Effect

- Your add-on listing no longer appears in the Google Workspace Marketplace. It also doesn't appear in search results or the "Works with Classroom" filter.
- The add-on continues to function normally for all installed users.

#### Considerations

- Users can still install your add-on by visiting the App URL directly. The App URL is shown on the Marketplace SDK [Store Listing](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish) page.
- You can restore the listing visibility at any time by unchecking the `Unlisted` box.

### Unpublish

Choose this option if you want to prevent all new installations of an add-on. Unlike [unlisting](#unlist), an unpublished add-on can't be installed by visiting the Google Workspace Marketplace listing URL directly. You can republish the add-on to allow new installations at some time in the future.

To unpublish, click the **UNPUBLISH** button in the Marketplace SDK [Store Listing](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish) page.

#### Effect

- All app listings associated with this Google Cloud project are immediately removed from Google Workspace Marketplace.

#### Considerations

- Users that have already installed the add-on can still use it normally.
- If you have multiple integrations checked in the Marketplace SDK, consider disabling only the Classroom integration instead.
- To allow new installations, republish the app. It must be rereviewed by the Marketplace team before it is available to users again. Users that had previously installed the add-on regain access to it after the app has been reapproved.

### Turn off the Classroom integration

Similar to [unpublishing](#unpublish), this action prevents all new installations of a Classroom add-on with the possibility to republish in the future. If your application is bundled with other Marketplace integrations, choose this option to only affect your Classroom add-on.

To turn off only the Classroom integration, clear the **Classroom integration box** in the Marketplace SDK [App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk) page.

#### Effect

- The add-on no longer appears in the Classroom UI when creating a new assignment, material, or announcement.
- The add-on listing is removed from Google Workspace Marketplace.

#### Considerations

- To allow new installations, recheck the Classroom integration box and click **Publish** again in the Marketplace SDK [Store Listing](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish) page. It must be re-reviewed by the Marketplace team before it is available to users again. Users that had previously installed the add-on regain access to it after the app has been reapproved.

### Delete the add-on

Choose this option to immediately and permanently remove an add-on. The add-on no longer appears for any users in Google Workspace Marketplace or Google Classroom.

To permanently delete an add-on, **[shut down](https://support.google.com/googleapi/answer/6251787)** the Google Cloud project.

#### Effect

- The app listing is immediately removed from Google Workspace Marketplace.
- The add-on is forcibly uninstalled for all Google Workspace users.

#### Considerations

- If the project is later [restored](https://support.google.com/googleapi/answer/6251787) and the app republished and approved, the add-on is not restored to users that had previously installed it. Users must reinstall the add-on through Google Workspace Marketplace.
