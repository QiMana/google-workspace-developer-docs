---
source: https://developers.google.com/workspace/admin/licensing/v1/how-tos/concepts
root: workspace
fetched_at: 2026-04-23T15:23:58.944Z
---

# Concepts

Understand the conceptual relationships of customers, users, SKUs, and licenses when working with the API.

An existing Google Workspace customer can create users in the Google Admin console. By default, these users are auto-assigned a license to use Google Workspace.

After purchasing Google Workspace, the customer can also buy other licenses, for example Google Drive storage licenses. Drive storage has 8 tiers of available storage licenses, ranging from 20 GB–16 TB. The customer must first [activate](https://support.google.com/a/bin/answer.py?answer=1726914&topic=1727149&ctx=topic) a Drive storage subscription, and then can assign storage licenses for any of these tiers using the [License Manager user interface](https://support.google.com/a/bin/answer.py?answer=1727173&topic=1727149&ctx=topic). The customer can also buy Google Maps Coordinate independent of Google Workspace, and then assign Google Maps Coordinate licenses using the same user interface.

These licensable entities—Google Maps Coordinate, Drive storage 20 GB, Drive storage 50 GB... Drive storage 16 TB—are called SKUs. This API allows a domain administrator to programmatically assign licenses of SKUs to a particular user and can be used along with the License Manager user interface. You can also unassign and re-assign licenses for a particular user, much like in the user interface. The API allows the same programmatic license assignment for Google Workspace reseller administrators and their customers.

For users on a flexible plan for any of these products, assigning, unassigning, and re-assigning licenses using this API will have monetary impact and will result in charges to your customer billing account. For example, if you are on a flexible plan for Drive storage, assigning a user a 20 GB license will result in charges being posted to your account, prorated from the time the assignment is done. If you are on an annual plan, you would already have committed to paying for a certain number of licenses upfront, and you can only assign as many licenses to individual users as your commitment.
