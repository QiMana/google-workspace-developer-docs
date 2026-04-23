---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/link-upgrade-iframe
root: workspace
fetched_at: 2026-04-23T15:25:41.214Z
---

# Link Upgrade iframe

The **Link Upgrade iframe** is the view that teachers see when they agree to upgrade a Link attachment to an add-on attachment. For additional details about this feature, see the guide on [upgrading links to add-on attachments](https://developers.google.com/workspace/classroom/add-ons/developer-guides/upgrade-links-to-addons).

## Link Upgrade flow

From the assignment creation page, the teacher can include a link in the Add link dialog.

![Teacher adding a Link attachment to an assignment](https://developers.google.com/static/workspace/classroom/add-ons/images/link-attachment.png)

**Figure 1.** The dialog that's displayed on the assignment creation page for a teacher to create a [Link attachment](https://developers.google.com/workspace/classroom/reference/rest/v1/Link).

If the Link matches a [URL pattern](https://developers.google.com/workspace/classroom/add-ons/developer-guides/upgrade-links-to-addons#configuration_details) that you have provided, the teacher sees a dialog that prompts them to upgrade the Link to an add-on attachment. If they agree, the Link Upgrade iframe opens with the relevant [iframe query parameters](https://developers.google.com/workspace/classroom/add-ons/developer-guides/iframes). Once the attachment has been created, the iframe closes and the teacher sees the attachment included on the assignment creation page.

See the [Recommended user experience section](https://developers.google.com/workspace/classroom/add-ons/developer-guides/upgrade-links-to-addons#recommended_user_experience) of the guide on upgrading links to add-on attachments for details on user experience considerations in this flow.
