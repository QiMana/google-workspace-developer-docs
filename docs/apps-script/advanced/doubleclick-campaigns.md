---
source: https://developers.google.com/apps-script/advanced/doubleclick-campaigns
root: apps-script
fetched_at: 2026-04-23T15:18:02.951Z
---

# DoubleClick Campaigns Service

## Page Summary

- The DoubleClick Campaigns service in Apps Script allows programmatic access to DoubleClick Campaign Manager and DoubleClick Digital Marketing Reporting through the DCM/DFA Reporting and Trafficking API.
- This is an advanced service that requires explicit enablement before use.
- The service uses the same objects, methods, and parameters as the public DCM/DFA Reporting and Trafficking API.
- Sample code is provided for tasks like listing user profiles, listing active campaigns, and creating new advertisers and campaigns.

DoubleClick Campaign Manager and DoubleClick Digital Marketing Reporting from Apps Script.

The DoubleClick Campaigns service lets you use the [DCM/DFA Reporting and Trafficking API](https://developers.google.com/doubleclick-advertisers/reporting) in Google Apps Script. This API provides programmatic access to DoubleClick Campaign Manager (DCM) and DoubleClick Digital Marketing (DDM) Reporting.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/doubleclick-advertisers/rest/v4) for the DCM/DFA Reporting and Trafficking API. Like all advanced services in Apps Script, the DoubleClick Campaigns service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [DCM/DFA Reporting and Trafficking support guide](https://developers.google.com/doubleclick-advertisers/get-support).

## Sample code

The following sample code uses [version 4](https://developers.google.com/doubleclick-advertisers/rest/v4) of the API.

### Get a list of user profiles

This sample logs all of the user profiles available in the account.

```
/**
 * Logs all of the user profiles available in the account.
 */
function listUserProfiles() {
  // Retrieve the list of available user profiles
  try {
    const profiles = DoubleClickCampaigns.UserProfiles.list();

    if (profiles.items) {
      // Print out the user ID and name of each
      for (let i = 0; i < profiles.items.length; i++) {
        const profile = profiles.items[i];
        console.log(
          'Found profile with ID %s and name "%s".',
          profile.profileId,
          profile.userName,
        );
      }
    }
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log("Failed with error: %s", e.error);
  }
}
```

### Get a list of active campaigns

This sample logs names and ID's of all active campaigns. Note the use of paging tokens to retrieve the whole list.

```
/**
 * Logs names and ID's of all active campaigns.
 * Note the use of paging tokens to retrieve the whole list.
 */
function listActiveCampaigns() {
  const profileId = "1234567"; // Replace with your profile ID.
  const fields = "nextPageToken,campaigns(id,name)";
  let result;
  let pageToken;
  try {
    do {
      result = DoubleClickCampaigns.Campaigns.list(profileId, {
        archived: false,
        fields: fields,
        pageToken: pageToken,
      });
      if (result.campaigns) {
        for (let i = 0; i < result.campaigns.length; i++) {
          const campaign = result.campaigns[i];
          console.log(
            'Found campaign with ID %s and name "%s".',
            campaign.id,
            campaign.name,
          );
        }
      }
      pageToken = result.nextPageToken;
    } while (pageToken);
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log("Failed with error: %s", e.error);
  }
}
```

### Create a new advertiser and campaign

This sample creates a new advertiser, and creates a new campaign with that advertiser. The campaign is set to last for one month.

```
/**
 * Creates a new advertiser, and creates a new campaign with that advertiser.
 * The campaign is set to last for one month.
 */
function createAdvertiserAndCampaign() {
  const profileId = "1234567"; // Replace with your profile ID.

  const advertiser = {
    name: "Example Advertiser",
    status: "APPROVED",
  };

  try {
    const advertiserId = DoubleClickCampaigns.Advertisers.insert(
      advertiser,
      profileId,
    ).id;

    const landingPage = {
      advertiserId: advertiserId,
      archived: false,
      name: "Example landing page",
      url: "https://www.google.com",
    };
    const landingPageId = DoubleClickCampaigns.AdvertiserLandingPages.insert(
      landingPage,
      profileId,
    ).id;

    const campaignStart = new Date();
    // End campaign after 1 month.
    const campaignEnd = new Date();
    campaignEnd.setMonth(campaignEnd.getMonth() + 1);

    const campaign = {
      advertiserId: advertiserId,
      defaultLandingPageId: landingPageId,
      name: "Example campaign",
      startDate: Utilities.formatDate(campaignStart, "GMT", "yyyy-MM-dd"),
      endDate: Utilities.formatDate(campaignEnd, "GMT", "yyyy-MM-dd"),
    };
    DoubleClickCampaigns.Campaigns.insert(campaign, profileId);
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log("Failed with error: %s", e.error);
  }
}
```
