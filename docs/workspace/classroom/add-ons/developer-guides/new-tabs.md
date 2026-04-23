---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/new-tabs
root: workspace
fetched_at: 2026-04-23T15:25:40.241Z
---

# Open content in new tabs

There may be some situations in which you would prefer users interact with your product outside of an iframe. You can load attachment content in a new tab rather than in a Classroom add-on iframe as long as your add-on conforms to the following guidelines.

## Required behaviors in new tabs or windows

The Classroom add-on [requirements checklist](../requirements.md) specifies certain behaviors when opening new tabs or windows. The following table provides clarifications and implementation suggestions regarding each requirement.

| ID | Requirement | How to meet |
| --- | --- | --- |
| 3.2 | If a task is launched into a new tab or window from any of the iframe journeys, it MUST provide a user-friendly message to return to Classroom. | On the external site, include a message, banner, toast, or other notification instructing the user to return to Classroom when finished with the task. |
| 5.1 | When the `studentViewUri` is launched, the add-on SHOULD NOT pop the user out of the iframe to complete a task. | Ideally, users are able to complete all relevant journeys within the iframe. Opening new tabs can disorient users and adds to the complexity of using the add-on. Keep the user experience within the iframe to provide the least user friction. |
| 5.2 | If the add-on activity pops out of the iframe there MUST be a preview about the task in the iframe. | Don't open the external site immediately when the user clicks the attachment card. Instead, provide a basic interstitial view in the iframe showing an image or description of the task that opens in a new tab. Include instructions to help users successfully navigate and complete the activity. |
