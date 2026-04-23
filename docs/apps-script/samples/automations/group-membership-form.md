---
source: https://developers.google.com/apps-script/samples/automations/group-membership-form
root: apps-script
fetched_at: 2026-04-23T15:22:24.777Z
---

# Share resources with new hires

## Page Summary

- This solution automates sharing resources with new employees by using a Google Form to add them to a Google Group.
- The script runs as the form submitter (if they have permission to add users to a group) or as the Google Workspace Administrator.
- The script checks if the user is already in the group and either adds them and sends a welcome email or confirms their existing membership via email.
- Setting up the script involves making a copy of a spreadsheet, authorizing the script, and ensuring the Admin SDK API service is enabled.
- Running the script involves submitting the live form and checking the spreadsheet for the user's status and their email for a confirmation.

**Coding level**: Beginner  
**Duration**: 20 minutes  
**Project type**: Automation with an [event-driven trigger](https://developers.google.com/apps-script/guides/triggers/installable#event-driven_triggers)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

**Important**: You must be a Google Workspace Administrator to use this solution.

Share resources with incoming employees in one step. This solution uses a form in Google Forms to add new employees to a group in Google Groups. By sharing resources with that group's address, you can give new hires access to the resources they need.

If you have permission to add users to a group, you can use this solution to distribute the responsibility to other members of your team. When they submit the form, the event-driven trigger runs the script as you and adds the new person's email to the group.

Optionally, you can turn on notifications to [get an email every time someone submits the form](https://support.google.com/a/users/answer/9308874).

![Demo of adding a user to a Google Group from Google Forms](https://developers.google.com/static/apps-script/samples/images/group-membership.gif)

![](https://developers.google.com/static/apps-script/samples/images/group-membership.gif)

### How it works

When someone submits a form with a user's email and the group the user should be added to, the script checks whether or not the person already belongs to that group. If they do, the user receives an email confirming that they're already in the group. Otherwise, the script adds the user to the group and sends them a welcome email.

### Apps Script services

This solution uses the following services:

- [Script service](https://developers.google.com/apps-script/reference/script): Creates the trigger that runs the script each time someone submits a form.
- [Groups service](https://developers.google.com/apps-script/reference/groups): Checks whether the email submitted on the form is already a member of the group.
- [Admin SDK Directory advanced service](https://developers.google.com/apps-script/advanced/admin-sdk-directory): Adds the email submitted on the form to the group.
- [Mail service](https://developers.google.com/apps-script/reference/mail): Sends an email to the email address submitted on the form to either confirm their group membership or welcome them to the group.
- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet): Adds the user's status to the form responses spreadsheet. The status is either **Already in group** or **Newly added**.
- [URL Fetch service](https://developers.google.com/apps-script/reference/url-fetch): Fetches a Google Docs document as an HTML string. The document contains the content of the email that the script sends.

## Prerequisites

- A [Google Workspace account](https://workspace.google.com/features/)
- You must be a Google Workspace Administrator

## Set up the script

1. Click the following button to copy the **Share resources with new hires** spreadsheet. The Apps Script project for this solution is attached to the spreadsheet.
	[Make a copy](https://docs.google.com/spreadsheets/d/1IK9nIanIOxInnvUtaY9lsXHAqokkA9xqcC43VRxQ-fo/copy?usp=sharing)
2. Click **Extensions** \> **Apps Script**.
3. Under **Services**, make sure the **AdminDirectory** service is listed. If it is, skip to step 6. If it's not, continue to the next step.
4. Next to **Services**, click Add a service .
5. In the dialog, select **Admin SDK API** and click **Add**.
6. In the function drop-down, select **installTrigger**.
7. Click **Run**.
8. When prompted, authorize the script. <<../\_snippets/oauth.md>>

**Important**: If you run this function more than once, it generates multiple triggers and will send duplicate emails. To delete extra triggers, take the following steps:

1. Click **Triggers** ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/alarm/default/24px.svg).
2. Next to the trigger, click More ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/more_vert/default/24px.svg) \> **Delete trigger**.

## Run the script

1. Return to the spreadsheet and click **Tools** \> **Manage form** \> **Go to live form**.
2. Fill out the form with your email address and a group that you have permission to manage the membership for and click **Submit**.
3. Return to the spreadsheet and view the form entry. The status column shows whether your email address was added to or already a member of the group.
4. Check your email for either a welcome email or confirmation of your group membership.

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Event-driven triggers](https://developers.google.com/apps-script/guides/triggers/installable#event-driven_triggers)
- [Extend Sheets](https://developers.google.com/apps-script/guides/sheets)
