---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe
root: workspace
fetched_at: 2026-04-23T15:25:40.965Z
---

# Attachment Discovery iframe

The **Attachment Discovery iframe** is the initial view shown to a teacher when opening an add-on during the creation of a Classroom task. An **attachment** is the content or activity that you intend for students to interact with.

From within a Classroom course, a teacher creates a new post (for example, an assignment, announcement, or question) and selects an add-on from the add-on drop-down list (Figure 1).

![View of an assignment creation including the possible
add-on options a teacher can
attach](https://developers.google.com/workspace/classroom/add-ons/images/teacher-attachment.png) **Figure 1.** View of an assignment creation including the possible add-on options a teacher can attach.

Once a teacher selects an add-on, Classroom creates an Attachment Discovery iframe and loads the add-on's launch URL. Any relevant [iframe query parameters](../../developer-guides/iframes.md) are passed to the launch URL (Figure 2).

![An example of an attachment discovery UI](https://developers.google.com/static/workspace/classroom/add-ons/images/teacher-discovery.png)

**Figure 2.** An example of an **attachment discovery** UI in an iframe.

Think of the Attachment Discovery view as the landing page for teachers in your add-on. Typically, the teacher uses the partner's web application within the iframe to select content to attach to their stream item. The add-on application might restrict which content is shown depending on whether the stream item is an announcement, assignment, or course material. The add-on application then makes Classroom API calls to create and attach the attachment to the assignment.

When the teacher is finished selecting and creating attachments, the add-on sends a `postMessage` payload requesting the iframe to be closed. The iframe closes and the teacher then sees the attachments, which they might then choose to preview or remove from the assignment (Figure 3). The teacher completes the creation flow by assigning the stream item to their students.

![View of an assignment creation](https://developers.google.com/static/workspace/classroom/add-ons/images/teacher-attached.png)

**Figure 3.** View of an assignment creation with three activity-type add-on attachments.

## User experience considerations

- On initial opening, the add-on must prompt the teacher to sign in.
- Google single sign-on is required for all Classroom API calls. If your product has a separate login system, you must link accounts.
- A teacher must be able to preview an attachment within the iframe before making their final selection.
- A teacher should be able to search for, or browse through, attachable content.
- The add-on may provide a variety of views such as recent content, my content, and filter by learning skills.
- The add-on must provide an ability to create a new attachable item from within the iframe.

See the Classroom add-on [requirements checklist](../../requirements.md) for more details on user experience requirements.

## Licensing status

If your add-on requires a license to your product, a clear message should be shown to explain how a teacher without a license can remedy the situation. Consider also hiding or disabling content that's not available to a teacher due to licensing restrictions.
