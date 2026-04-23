---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/customer/sites
root: workspace
fetched_at: 2026-04-23T15:24:36.791Z
---

# Google Sites Parameters

This document lists the parameters for various types of Google Sites activity events. You can retrieve these events by calling [CustomerUsageReports.get()](https://developers.google.com/workspace/admin/reports/v1/reference/customerUsageReports/get) with `parameters=sites:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `num_sites` | integer | The total number of non-deleted Google Sites in the customer account on the date of this report. |
| `num_sites_created` | integer | The number of Google Sites created in the customer account on the date of this report. This does not include sites that were created and deleted on the same day. |
