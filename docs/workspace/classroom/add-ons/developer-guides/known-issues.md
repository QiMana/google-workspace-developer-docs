---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/known-issues
root: workspace
fetched_at: 2026-04-23T15:25:40.273Z
---

# Known issues

This page documents known developer concerns with the Classroom add-ons API.

## Error messages

Most errors are covered in the descriptions of specific methods in the [reference documentation](../../reference/rest.md). Some errors are [specific to add-ons](../../troubleshooting/common-errors.md).

If you're unable to troubleshoot an error on your own, reach out to your Google contacts for support.

## CourseWork API compatibility

See the [Create attachments from a third-party site](../get-started/attachments-journey.md#create-attachments) guide to creating add-on attachments through a CourseWork flow.

## Pop-up blockers

The add-on sign-in flow can be disrupted if the end user has enabled a pop-up blocker. See the [manage pop-up blockers section of the frictionless sign-in page](./frictionless-signin.md#manage_pop-up_blockers) for more information about how to implement the sign-in flow in the event that end users enable pop-up blockers.

## Multi-login

Multi-login is not supported for add-ons. See the [multi-login section of the frictionless sign-in page](./frictionless-signin.md#multi-login) for more information about multi-login issues and possible workarounds.
