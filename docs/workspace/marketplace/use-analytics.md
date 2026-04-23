---
source: https://developers.google.com/workspace/marketplace/use-analytics
root: workspace
fetched_at: 2026-04-23T15:30:11.342Z
---

# Get analytics about app usage

## Page Summary

- Gain insights into app listing performance, user engagement, and installation metrics through Google Analytics and the Google Workspace Marketplace SDK.
- Opt-in to Google Analytics 4 to access detailed app listing analytics, including visitor demographics, traffic sources, and install event tracking.
- The Google Workspace Marketplace SDK provides data on domain and seat installs, offering a view of your app's reach and user base.
- Connect your app with a licensing or billing server to manage monetization and track app installations and removals using the Google Workspace Marketplace API.

You can get app listing, user, and installation metrics from Google Analytics and the Google Workspace Marketplace SDK.

## Get app listing analytics from Google Analytics

To monitor how users interact with your app listing with Google Analytics, you must opt-in to Google Analytics 4. Then you can give other users access and review app listing analytics.

### Opt in to Google Analytics 4

1. In the Google Cloud console, go to **Menu > APIs & Services > Google Workspace Marketplace SDK**.
	[Go to the Google Workspace Marketplace SDK page](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com)
2. Click the **Analytics** tab.
3. To view additional metrics, click **Opt in to Google Analytics**.

After you opt in, the opt-in button is replaced with Google Analytics tools.

### Give users access to Google Analytics data

1. In your app's Google Cloud project, opt in to get `marketer` access to the Google-owned Analytics 4 property. For instructions, see [Access and data-restriction management](https://support.google.com/analytics/answer/9305587#zippy=%2Cgoogle-analytics). Requires `editor` access to your app's Google Cloud project.
2. In the Google Cloud console, go to **Menu > APIs & Services > Google Workspace Marketplace SDK**.
	[Go to the Google Workspace Marketplace SDK page](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com)
3. Click the **Analytics** tab.
4. In the Google Analytics section, enter the users you want to have `marketer` access to your app listing data.

### Find app metrics in Google Analytics

Google Analytics includes the following information:

- How many visitors have viewed your app listing for a specific time period. A visit is only counted if the visitor clicks on your app listing to view the details.
- The geographic distribution of visitors.
- How visitors reach your app listing, for example, from a Google Search.
- The average time spent viewing your app listing.
- Install events that are created when users start and finish installing your app. These events let you determine how often an install process was aborted and how many installs were completed over time.

To find install information in Google Analytics, search using the following event information:

<table><tbody><tr><th colspan="2">Install events</th></tr><tr><td>When an install of the application is started.</td><td><code>category=workspace_MARKETPLACE</code><br><code>action=START_INSTALL</code></td></tr><tr><td>When an install of the application is completed.</td><td><code>category=workspace_MARKETPLACE</code><br><code>action=FINISH_INSTALL</code></td></tr></tbody></table>

## Get app listing analytics in the Google Workspace Marketplace SDK

To get app listing analytics directly from the Google Cloud console:

1. In the Google Cloud console, go to **Menu > APIs & Services > Google Workspace Marketplace SDK**.
	[Go to the Google Workspace Marketplace SDK page](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com)
2. Click the **Analytics** tab.

The following information is available:

| Data type | Description |
| --- | --- |
| **Domain installs** | The number of domains that have installed your app. For example, if the administrator of altostrat.com installs your app for 500 users and the administrator of examplepetstore.com installs your app for 30 users, the domain installs count is two domains. |
| **Seat installs** | The number of users that have your app installed and enabled. For example, if the administrator for altostrat.com installs your app for 500 users and the administrator for examplepetstore.com installs your app for 30 users, the seat installs count is 530 seats. |
| **Individual end user installs** | The number of users that have directly installed your app. The individual end user install count doesn't include installs made by domain administrators. For example, if the administrator for altostrat.com installs your app for 500 users and 25 individual users from examplepetstore.com install your app, the individual end user install count is 25. |
| **Daily app impressions** | The number of visits per day to your app listing in Google Workspace Marketplace. The count resets at midnight GMT-7 (America/Los Angeles). |
