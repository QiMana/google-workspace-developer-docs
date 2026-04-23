---
source: https://developers.google.com/workspace/preview
root: workspace
fetched_at: 2026-04-23T15:31:13.560Z
---

# Google Workspace Developer Preview Program

## Page Summary

- The Google Workspace Developer Preview Program allows developers to test upcoming features, provide feedback, and ensure their integrations are ready for public launch.
- Joining the program requires agreeing to the Program Terms, submitting an application form with Google Workspace and Google Cloud project details, and ensuring your email can be added to a Google Group.
- Features in the Developer Preview Program typically remain for 3-6 months, and members receive email notifications about new additions and the latest available preview features, which can be tested via developer preview client libraries.
- Members can provide feedback and report issues through the Google Issue Tracker, or get help with their program account via email, so long as they are using the right template.
- Participants in the program are bound by the Developer Preview Program Terms, which include not sharing Pre-GA features with customers and understanding that Pre-GA APIs are provided "as is".

The Google Workspace Developer Preview Program is a program for developers to test unreleased features in the Google Workspace Platform. Developers can ask questions plus file bugs and feature requests, and Google can continue to make improvements before features are released to everyone. Another benefit of using the program is having your integration ready for public use on launch day.

## How to join the program

1. Read through the [Program Terms](#dpp-terms) before applying. We will ask you if you agree with the terms in the application form.
2. Fill in the requested information and submit the [application form](https://docs.google.com/forms/d/e/1FAIpQLSd7BiMXXHDlUDkF7G0TSY5zfJbQwFNH3m6K_ZYFi3vCHLFbng/viewform?resourcekey=0-1uHeVg8junj3PPTLNcn7WQ). You need to provide us with your Google Workspace account and Google Cloud project information.
3. When we verify your Google Workspace account information, we will add you to a Google Group for the program and you should receive a notification. Make sure that your email account accepts getting added to Google Groups. See ([Manage your global settings](https://support.google.com/groups/answer/9792489)). If your email address cannot be added to the Google Group, you won't be able to access the dedicated client library, and you won't get access to some of the features.
4. After verifying your Google Workspace account, we will register your Google Cloud project. When it is done, you will receive a final confirmation to your registered email address. The whole process should be done within a couple of days.

[Apply to join the Developer Preview Program](https://docs.google.com/forms/d/e/1FAIpQLSd7BiMXXHDlUDkF7G0TSY5zfJbQwFNH3m6K_ZYFi3vCHLFbng/viewform?resourcekey=0-1uHeVg8junj3PPTLNcn7WQ)

## Features in Developer Preview

Features in Developer Preview usually stay in the program for 3-6 months, but there are exceptions where a feature stays only for a short time. If you are a member, you get an announcement email when a new feature is added to the program. To learn about preview features that are now generally available, see the [Google Workspace developer release notes](./release-notes.md).

### Latest features

|  | MCP SERVERS |  |  |
| --- | --- | --- | --- |
|  | Gmail MCP server | [Documentation](./gmail/api/guides/configure-mcp-server.md) |
|  | Calendar MCP server | [Documentation](./calendar/api/guides/configure-mcp-server.md) |
|  | Drive MCP server | [Documentation](./drive/api/guides/configure-mcp-server.md) |
|  | People MCP server | [Documentation](https://developers.google.com/people/v1/configure-mcp-server) |
|  | Chat MCP server | [Documentation](./chat/api/guides/configure-mcp-server.md) |
|  | ADD-ONS |  |  |
|  | Build Pub/Sub Chat apps as Google Workspace add-ons | [Documentation](./add-ons/chat/quickstart-pubsub.md) |
|  | Build Chat apps that extend Workspace add-ons with Apps Script's AddOnsResponseService | [Documentation](../apps-script/reference/add-ons-response-service.md) |
|  | Build Dialogflow CX Chat apps as Google Workspace add-ons | [Documentation](./add-ons/chat/quickstart-dialogflow-cx.md) |
|  | Build Dialogflow ES Chat apps as Google Workspace add-ons | [Documentation](./add-ons/chat/quickstart-dialogflow-es.md) |
|  | Material button style in add-on UI | [Documentation](../apps-script/reference/card-service/text-button.md#settextbuttonstyletextbuttonstyle) |
|  | Collapsible text paragraph in add-on UI | [Documentation](../apps-script/reference/card-service/text-paragraph.md#setmaxlinesmaxlines) |
|  | Custom collapsible control in add-on UI | [Documentation](../apps-script/reference/card-service/card-section.md#setcollapsecontrolcollapsecontrol) |
|  | Overflow menu in add-on UI | [Documentation](../apps-script/reference/card-service/overflow-menu.md) |
|  | Chips in add-on UI | [Documentation](../apps-script/reference/card-service/chip-list.md) |
|  | CHAT API |  |  |
|  | Create and update cards on users' messages. Update or remove cards on all messages. | [Documentation](./chat/create-update-interactive-cards.md) |
|  | Include a carousel widget in cards | [Documentation](./chat/design-components-card-dialog.md#add-carousels) |
|  | Include message actions in the message context menu | [Documentation](./chat/commands.md#respond-message-action) |
|  | CLASSROOM |  |  |
|  | User capabilities | [Documentation](./classroom/reference/rest/v1/userProfiles/checkUserCapability.md) |
|  | DOCS |  |  |
|  | Tabs UI in Docs | [Documentation](./docs/api/how-tos/tabs.md) |
|  | DRIVE API |  |  |
|  | Subscribe to events in Google Drive | [Documentation](./events/guides/events-drive.md) |
|  | MEET API |  |  |
|  | Manage space members using the following Google Meet REST API methods:  - [`spaces.members.create`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.iyr7edttcr8h) - [`spaces.members.delete`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.6oo6w2d6euqg) - [`spaces.members.get`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.xgiwbrabpevn) - [`spaces.members.list`](https://docs.google.com/document/d/1wOffkXVUK38-baNzRLZW85Mt11Q6YhdNS55hTigXh_w/edit?pli=1#heading=h.7eebh571khfm) | [Documentation](./meet/api/guides/meeting-spaces-configuration.md#space-members) |
|  | MEET MEDIA API |  |  |
|  | Google Meet Media API | [Documentation](./meet/media-api/guides/overview.md) |

## For Members

As a member, you can submit feedback on the features you've tested, or ask questions.

### Submit feedback

We use [Google Issue Tracker](https://developers.google.com/issue-tracker) to receive and answer feature related feedback from you. Choose an appropriate template for each feature from the list in the [latest features](#latest-features). If you submit feedback without using the dedicated template, it might not be responded to in a timely manner. Make sure to omit any Personally Identifiable Information, as your feedback is viewable to the Public.

### Questions and Requests

When you want to register more email addresses or Google Cloud projects to the program, submit a request using one of the forms.

- [Request to add or remove email addresses](https://docs.google.com/forms/d/e/1FAIpQLScXoXMKj6pzgLNXzwuA2n4kWfFXgebXO8pJy6aZzH9C4hmw5w/viewform)
- [Request to add or remove your Google Cloud project](https://docs.google.com/forms/d/e/1FAIpQLSebRuwRJzPYpIGAg2HcEhX7uVDjbCvABb2hNsrrTWj9PaPPKw/viewform)
- Check the [FAQ section](#faq) for questions. If it doesn't solve your problem, reach out to the program team by [email](mailto:workspace-dpp-mod@google.com).

### FAQ

**Q: Why do I have to provide a Google Cloud project number?**  
A: We provide you access to the program API features through your Google Cloud project(s). If you are not familiar with using Google Cloud projects to develop Google Workspace platform features, you can learn more about it from [this page](./guides/get-started.md).

**Q: How long does it take before I can start using the features in the program?**  
A: You should receive an email within a couple of days after your application submission. If you don't hear from us within a week and there's no messages in your spam box, reach out to the program team by [email](mailto:workspace-dpp-mod@google.com).

**Q: Can I register my service account in the program?**  
A: We cannot add service accounts to the program. You can use domain-wide delegation with the service account. If you include a service account to the application, we will remove it and will only register your Google Workspace account.

**Q: Can I apply for access to one feature such as Google Chat?**  
A: No, the program provides access to all the features available in the program. There is no requirement to use every feature though, test the ones you like!

**Q: I have a Google Workspace for Education account and I was denied access to the program in the past. Has it changed?**  
A: Yes! When we started the program, it was not open for Google Workspace for Education accounts. However, we were able to clear all the legal concerns and any Google Workspace for Education account holders can now join the program.

**Q: Can I share my integration with my customers before the feature in the program becomes generally available?**  
A: No. See the [program term (iv)](#dpp-terms-iv) for more details.

**Q: I submitted feedback but it is not responded to. Why?**  
A: Note that this is a scaled program and our team responds to submitted issues on a best-effort basis. Double check if you are using the [correct template](#latest-features). If you still don't hear from us over a week, reach out to the program team by [email](mailto:workspace-dpp-mod@google.com).

## Developer Preview Program Terms

(i) I consent to be contacted by Google regarding all current and future features in the program, including in regards to marketing and research opportunities.

(ii) I understand that program features may not be included in public applications prior to the General Availability (GA) announcement.

(iii) By enrolling in the Google Workspace Developer Preview Program, or using Google Workspace APIs, other developer services, and associated software (collectively, "APIs"), I agree to the [Google APIs Terms of Service](https://developers.google.com/terms).

(iv) I understand that, for purposes of testing, I may not grant end users access, outside my domain or company, to developer applications that have been built using APIs prior to their GA announcement ("Pre-GA APIs") unless Google specifically states that I can request such permission and such permission has been granted to my Workspace account for that feature. Where permission is granted from publication of Pre-GA APIs, (a) there is no guarantee that such Pre-GA APIs will become GA, (b) such Pre-GA APIs may impact the performance level of developer's applications, and (c) I fully assume the risks associated with sections (a) and (b) of this paragraph.

(v) There may be cases where I can test certain Google features as an end user. I understand that in any such case, the Pre-General Availability Offerings Terms from Section 6 of the [Google Workspace Service Specific Terms](https://workspace.google.com/terms/service-terms/index.html) apply to my use of those Pre-GA Offerings.

(vi) I understand that Google may use any data submitted, stored, sent, or received via any Pre-GA APIs to provide, test, analyze, develop, and improve those APIs in accordance with applicable laws.

(vii) I understand that if I am using the Pre-GA APIs on behalf of a government or regulatory entity (excluding educational institutions), I may only use test or experimental data with Pre-GA APIs and am prohibited from using any "live" or production data in connection with Pre-GA APIs.

(viii) I understand that PRE-GA APIs ARE PROVIDED "AS IS" WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES OR REPRESENTATIONS OF ANY KIND.

(ix) I understand that I should check this application from time to time as I am bound by all updates including updates to the incorporated TOS herein.

## Get Informed

Become an Innovator to stay up to date on the latest news and updates for the Google Workspace platform.
