---
source: https://developers.google.com/workspace/vault/guides
root: workspace
fetched_at: 2026-04-23T15:32:01.939Z
---

# Google Vault API Overview

With the Vault API, you can manage eDiscovery projects. You can perform the following tasks:

- Create matters and set who has access to them.
- Place data on hold.
- Create and edit saved search queries.
- Start and monitor exports.

To set retention rules or audit Google Vault activity, use the Vault app. For details, see [the Vault Help Center](https://support.google.com/vault#topic=2739742).

The following list describes common terms used in the Vault API.

*[Matter](https://developers.google.com/workspace/vault/reference/rest/v1/matters)*

A container for eDiscovery activity related to a specific case or investigation. A matter includes saved search queries, a list of accounts with data on hold, data exports, and a list of the accounts that can access the matter. A matter is represented by a [Matter resource](https://developers.google.com/workspace/vault/reference/rest/v1/matters#resource:-matter).

*[Hold](https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds)*

A policy that prevents Google Workspace services from deleting data. Holds are typically used to preserve data for legal or investigation purposes. Holds override [retention rules](https://support.google.com/vault/answer/2990828). A hold is represented by a [Hold resource](https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds#resource:-hold).

*[Saved search query](https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries)*

A query that you save in a matter. You can re-run a saved query to get data that changed since the last the query was run. You can also copy saved queries and reuse them in other matters. A saved query is represented by a [Saved query resource](https://developers.google.com/workspace/vault/reference/rest/v1/matters.savedQueries#resource:-savedquery).

*[Export](https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports)*

A downloadable set of Google Workspace data that match your search query. An export is represented by an [Export resource](https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports).

## Next steps

- To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. For example, to download an export, an account needs the **Manage Exports** privilege and the matter shared with them.
- To learn about developing with Google Workspace APIs, including handling authentication and authorization, see [Get started as a Workspace developer](https://developers.google.com/workspace/guides/getstarted-overview).
- To learn how to configure and run a small Vault app, try a quickstart in [Python](https://developers.google.com/workspace/vault/quickstart/python) or [Java](https://developers.google.com/workspace/vault/quickstart/java).
