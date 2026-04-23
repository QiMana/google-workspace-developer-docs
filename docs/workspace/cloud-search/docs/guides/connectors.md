---
source: https://developers.google.com/workspace/cloud-search/docs/guides/connectors
root: workspace
fetched_at: 2026-04-23T15:26:07.504Z
---

# Connectors overview

By default, Google Cloud Search indexes all of your Google Workspace data. You can also create a custom program, called a *connector*, to index data stored in a third-party repository. A connector can be a separate program, a script that runs in its own process, or an add-on to your repository.

There are two types of connectors: *content connectors* and *identity connectors*. Use content connectors to traverse a repository and index data so Cloud Search can search that data.

Use identity connectors to map enterprise identities and group rosters to the Google Accounts and groups used by Cloud Search. These mappings facilitate setting ACLs and search quality hints during indexing.

## Next steps

- Google and its partners have built several connectors. For a list of prebuilt connectors, refer to the [Cloud Search connector directory](../connector-directory.md).
- For information on how to create a new content connector, refer to [Create a content connector](./content-connector.md).
- For information on how to create a new identity connector, refer to [Create an identity connector](./identity-connector.md).
