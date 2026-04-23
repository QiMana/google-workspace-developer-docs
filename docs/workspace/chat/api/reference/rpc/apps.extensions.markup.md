---
source: https://developers.google.com/workspace/chat/api/reference/rpc/apps.extensions.markup
root: workspace
fetched_at: 2026-04-23T15:25:10.953Z
---

# Package apps.extensions.markup

## Index

- `ChatClientDataSourceMarkup` (message)
- `ChatClientDataSourceMarkup.SpaceDataSource` (message)
- `HostAppDataSourceMarkup` (message)

## ChatClientDataSourceMarkup

For a `` `SelectionInput` `` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>source</code>. The Google Chat data source. <code>source</code> can be only one of the following:</td></tr><tr><td><code>space_data_source</code></td><td><p><code>SpaceDataSource</code></p><p>Google Chat spaces that the user is a member of.</p></td></tr></tbody></table>

## SpaceDataSource

A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>default_to_current_space</code></td><td><p><code>bool</code></p><p>If set to <code>true</code>, the multiselect menu selects the current Google Chat space as an item by default.</p></td></tr></tbody></table>

## HostAppDataSourceMarkup

For a `` `SelectionInput` `` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu.

![](https://www.gstatic.com/images/branding/productlogos/chat_2023q4/v1/192px.svg) Available for Google Chat apps and unavailable for Google Workspace add-ons.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>data_source</code>. The Google Workspace application that populates items for a multiselect menu. <code>data_source</code> can be only one of the following:</td></tr><tr><td><code>chat_data_source</code></td><td><p><code>ChatClientDataSourceMarkup</code></p><p>A data source from Google Chat.</p></td></tr></tbody></table>
