---
source: https://developers.google.com/workspace/drive/labels/guides/label-lifecycle
root: workspace
fetched_at: 2026-04-23T15:28:07.890Z
---

# Label lifecycle

Labels, fields, and choices go through specific states throughout their lives. Additionally, labels might have different revisions. The following diagram shows the label lifecycle, including revisioning:

![Labels lifecycle diagram.](https://developers.google.com/static/workspace/drive/labels/images/lifecycle-of-a-label.svg)

Figure 3. Lifecycle of a label

1. **Create a label (`create()`)** —The label is created and stored in a database as `revision_id=1`. The label has the state of `UNPUBLISHED_DRAFT`. In this state:
	- Users can't view the label
		- Users can't apply the label to Drive items.
2. **(optional) Update a label, field, or choice (`delta()`)** — Every update, even before it's published, is stored in a database, and the label's revision is incremented.
3. **Publish a label (`publish()`)** —The label has the state of `PUBLISHED` and users can apply the label. Publishing the label increments its revision.
4. **(optional) Update a label, field, or choice (`delta()`)** — The label, field, or choice is updated and stored in a database as a draft label. The label has the state of `PUBLISHED` with `hasUnpublishedChanges=true` meaning there are draft changes, but they aren't available to users. Each update increments the label's revision.
5. **(optional) Publish a label (`publish()`)** —If available, the most-current draft is published. The label has the state of `PUBLISHED` and users can apply the label. Publishing the label increments its version.
6. **Disable a label (`disable()`)** —The label has the state of `DISABLED` though users can apply the label through the API. However, a disabled label isn't shown in a UI unless configured to be shown. Deprecating the label increments its revision.
7. **Enable a label (`enable()`)** —The label is returned to a `PUBLISHED` state and users can apply the label. Publishing the label increments its revision.
8. **Delete a label (`delete()`)** —The label has a state of `DELETED` and can't be applied. Deleted labels are eventually purged.

It's important to emphasize that every update to a label increments the label's revision. And, if the label has already been published, publishing it again after *n* updates means that its published revision number is revision + *n* + 1 number of successive updates.
