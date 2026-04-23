---
source: https://developers.google.com/workspace/gmail/api/guides
root: workspace
fetched_at: 2026-04-23T15:28:51.200Z
---

# Gmail API overview

The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail. For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as:

- Read-only mail extraction, indexing, and backup
- Automated or programmatic message sending
- Email account migration
- Email organization including filtering and sorting of messages
- Standardization of email signatures across an organization

## Common terms

The following is a list of common terms used in this API:

*Delegator and Delegate*

A delegator is a Gmail user who grants mailbox access to another user within the same Google Workspace organization. The user receiving this access is the delegate. Delegates can read, send, and delete messages, as well as view and add contacts on behalf of the delegator's account. For more information, see [Manage delegates](./guides/delegate_settings.md).

*Draft*

An unsent message. A message contained within the draft can be replaced. Sending a draft automatically deletes the draft and creates a message with the `SENT` system label. A draft is represented by the [`drafts`](./reference/rest/v1/users.drafts.md) resource. For more information, see [Work with drafts](./guides/drafts.md).

*Filters*

Advanced rules configured for an account that evaluate incoming messages against specific matching criteria (like sender, subject, or size). When a message matches, filters automatically trigger actions such as adding or removing labels, or forwarding the email to a specified address. For more information, see [Manage filters](./guides/filter_settings.md).

*Forwarding addresses*

Specific, verified email addresses configured to receive auto-forwarded messages from a user's account. Before an address can be used in a forwarding rule or filter, it must be officially registered and verified to prove ownership. For more information, see [Manage forwarding](./guides/forwarding_settings.md).

*Label*

A mechanism for organizing messages and threads. For example, the label "taxes" might be created and applied to all messages and threads having to do with a user's taxes. For more information, see [Manage labels](./guides/labels.md).

There are two types of labels:

Internally-created labels, such as `INBOX`, `TRASH`, or `SPAM`. These labels cannot be deleted or modified. However, some system labels, such as `INBOX` can be applied to, or removed from, messages and threads.

Labels created by a user. These labels can be deleted or modified by the user or an application. A user label is represented by the [`labels`](./reference/rest/v1/users.labels.md) resource.

*Message*

An email message containing the sender, recipients, subject, and body. Once a message is created, it cannot be changed. A message is represented by the [`messages`](./reference/rest/v1/users.messages.md) resource.

*Push notifications*

A server-side notification system integrating with Google Cloud Pub/Sub. Applications can "watch" a mailbox, and the Gmail API will send automatic webhooks or alerts whenever a change occurs (like a new email arriving), eliminating the need for the app to continuously poll the server for updates. For more information, see [Push notifications](./guides/push.md).

*S/MIME certificates*

Digital certificates uploaded to specific send-as aliases that allow a user to send encrypted and digitally signed emails, ensuring message security and sender authenticity. For more information, see [Manage S/MIME certificates](./guides/smime_certs.md).

*Send-as aliases*

These represent the various email addresses from which an account is authorized to send mail. Every account has at least one alias representing the primary email address. Aliases correspond to the "Send mail as" feature in the Gmail web interface and are also the basis for configuring per-address email signatures. For more information, see [Manage aliases](./guides/alias_and_signature_settings.md).

*Thread*

A collection of related messages forming a conversation. In an email client app, a thread is formed when one or more recipients respond to a message with their own message. For more information, see [Manage threads](./guides/threads.md).

## Related topics

- To learn about developing with Google Workspace APIs, including handling authentication and authorization, refer to [Develop on Google Workspace](../../guides/get-started.md).
- To learn how to configure and run a Gmail API app, read the [Quickstarts](./quickstart/js.md).
