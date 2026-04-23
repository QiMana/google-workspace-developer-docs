---
source: https://developers.google.com/workspace/drive/labels/guides/overview
root: workspace
fetched_at: 2026-04-23T15:28:07.859Z
---

# Drive Labels API overview

*Labels* are metadata that you define to help users organize, find, and apply policy to files in Google Drive. The Drive Labels API is a RESTful API that supports business processes by attaching metadata to your Drive files. Common uses for this API are:

- **Classify content to follow an information governance strategy** —Create a label to identify sensitive content or data that requires special handling. For example, you might create a badged label (a label with color-coded option values) titled "Sensitivity" with the values of "Top Secret," "Confidential," and "Public."
- **Apply policy to items in Drive** —Create labels to manage Drive content throughout its lifecycle and ensure it adheres to your organization’s record keeping practices. For example, use labels to manage a data loss policy (DLP) whereby files with a "Sensitivity" label set to "Top Secret" can't be downloaded to a computer.
- **Curate and find files** —Create labels to increase searchability of your company’s content by letting people in your organization find items based on labels and their fields. For example, someone in your organization could use Drive search options to find all contracts awaiting signature by a specific date.

Below is a list of common terms used in the Drive Labels API:

[*Label*](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#resource:-label)

Structured metadata placed on a Drive file. Drive users can assign labels and set label field values for files. Labels are composed of:

*Label name*

The resource name of the label. The *label ID* makes up part of the Label name. Depending on the request, the name is in the form of either: `labels/{id}` or `labels/{id}@{revisionId}`. For more information, see [Label revision](#revision) below.

*Label ID*

A globally unique identifier for the label. The ID makes up part of the label name, but unlike the name, it's consistent between revisions.

There are 2 styles of labels:

*Badged label*

A label with a [`SelectionOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#selectionoptions) field type containing *choices* that can be color-coded to indicate importance. This is done by setting [`badgeConfig`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#BadgeConfig) through the [`Properties`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#properties_1) of a [`Choice`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#choice).

Drive displays the color of the chosen option for each file so users clearly understand the status, classification, and so on, of the file. For example, the "Top Secret" option for the "Sensitivity" badged label might display in red. You can only have one badged label at a time.

*Standard label*

A label containing zero or more *field type* s. A standard label might have a label title, such as "Project Moonshot," and indicate all files related to the project. A standard label might also have several structured fields. For example, a label with the title "Contract" might contain the fields for "Company," "Due Date," "Status," and "Signatories." Each field is of a specific type (text, date, selection, or user).

| ![Badged label diagram.](https://developers.google.com/static/workspace/drive/labels/images/badged-label-api.svg)  Figure 1. Badged label | ![Standard label diagram.](https://developers.google.com/static/workspace/drive/labels/images/standard-label-api.svg)  Figure 2. Standard label |
| --- | --- |

[*Field*](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#field)

An individual typed, settable component of a label. A label can have zero or more fields associated with it.

*Field type*

The data type of the value associated with the *field*. Configurable as text, integer, date, user, or selection. If you configure the field with `ListOptions`, you can set the user and selection fields with multiple values. The type chosen impacts both the valid values applicable to Drive items and the search query options available.

[*Choice*](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#choice)

One of several options a user can choose from within a `SelectionOptions` field.

[*Label type*](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#labeltype)

All labels include a `LabelType`. There are 2 types of labels:

*Admin*

To create and edit admin-owned labels, you must be an account administrator with the [Manage Labels](https://support.google.com/a/answer/1219251#drive_and_docs) privilege.

Admins can share admin labels with any user to grant that user the ability to view and apply them to Drive items. Modifying or reading label values on Drive items requires the following permissions:

- Modifying—For a user to modify the Drive item metadata related to a given label, the user must have the appropriate permission levels:
	- Drive item: `EDITOR`
		- Label: `APPLIER`
- Reading—For a user to read or search for the Drive item metadata related to a given label, the user must have the appropriate permission levels:
	- Drive item: `READER`
		- Label: `READER`

*Shared*

Non-administrator users can create shared labels that others can apply to Drive items. Teams can create and organize their own labels for use within the team without requiring an administrator.

The currently configured label fields available to users for application to Drive files. Also known as the label schema.

Example label taxonomies:

- Sensitivity—Red, Orange, Yellow, Green
- Status—Not Started, Draft, In Review, Final
- Content type—Contract, Design Doc, Mockup
- Department—Marketing, Finance, Human Resources, Sales

[*Label lifecycle*](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#lifecycle)

Labels go through a lifecycle where they're created, published, updated, and so on. As a label makes it through the lifecycle, its *label revision* is incremented. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle).

*Label revision*

An instance of the label. Anytime a label is created, updated, published, or deprecated, the label revision increments.

*Draft revision*

The revision number of the current draft instance of the label. You can make several updates to a label, each incrementing its draft revision number, without affecting the published revision. The ability to have draft labels lets you test label updates before publishing.

*Published revision*

The revision number of the published version of a label. The published label is the instance of the label currently available to users.

## Related topics

- To learn about developing with Google Workspace APIs, including handling authentication and authorization, refer to [Get started as a Google Workspace developer](https://developers.google.com/workspace/guides/getstarted-overview).
- To learn how to configure and run a simple Labels API app, try the [Python quickstart](https://developers.google.com/workspace/drive/labels/quickstart/python).
