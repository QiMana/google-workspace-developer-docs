---
source: https://developers.google.com/workspace/guides/view-edit-quota-limits
root: workspace
fetched_at: 2026-04-23T15:30:07.746Z
---

# View & edit quota limits

## Page Summary

- Google Workspace uses quotas to limit the usage of shared resources within each Cloud project, encompassing resources like API calls and project creation.
- Daily quotas are refreshed at midnight Pacific Time, ensuring a consistent daily allowance.
- Users can view and manage their Google Workspace API quotas through the Google Cloud console, offering insights into usage and limits.
- Quota limits can often be adjusted directly within the Google Cloud console to accommodate varying needs, providing flexibility for resource management.
- For quotas that can't be adjusted through the console, users should contact Google Workspace developer support, ensuring comprehensive control over resource allocation.

Google Workspace uses quotas to restrict how much of a particular shared Google Workspace resource you can use per Cloud project. Each quota represents a specific countable resource, such as API calls to a particular service or the number of projects that you can create. Daily quotas reset at midnight Pacific Time (PT).

## View quota limits

To view your quota limits, complete these steps:

1. In the Google Cloud console, click **Menu** \> the **View all products** tile \> **Google Workspace** \> **Quotas**.
	[Go to Quotas](https://console.cloud.google.com/workspace-api/quotas)
2. To select an individual Google Workspace API, click **All Google Workspace APIs** and select an API.
3. The type of quotas vary depending on the Google Workspace API that you selected. To view more information about a particular quota—for example, to learn the limit for a quota—next to a quota, click Toggle the usage chart of the quota metric .

## Edit quota limits

Depending on your resource usage, you might want to adjust your project's quota limits up or down.

1. In the Google Cloud console, click **Menu** \> the **View all products** tile \> **Google Workspace** \> **Quotas**.
	[Go to Quotas](https://console.cloud.google.com/workspace-api/quotas)
2. To select an individual Google Workspace API, click **All Google Workspace APIs**, then select an API.
3. The quota limits vary depending on the type of quota selected. Next to a quota, click Toggle the usage chart of the quota metric .
4. Next to the limit value click Edit .
5. Enter a value and then click **Save**.

Some quotas cannot be updated using the Google Cloud console. If you find that you cannot change a quota from the Google Cloud console, request the increase from [Google Workspace developer support](https://support.google.com/a/answer/6103110). The Billing team does not handle quota limit increases.

## Next steps

- To learn more about quotas, see [Working with quotas](https://cloud.google.com/docs/quota).
