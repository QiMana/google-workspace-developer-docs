---
source: https://developers.google.com/workspace/gmail/api/guides/delegate_settings
root: workspace
fetched_at: 2026-04-23T15:28:50.256Z
---

# Manage delegates

This document explains how to delegate and collaborate on email using the Gmail API.

A Gmail user can grant mailbox access to one or more users in the same Google Workspace organization. The user granting access is the *delegator* and the user receiving access is the *delegate*.

Delegates can read, send, and delete email messages in your account. They can also view and add contacts. When a delegate sends a message from your account, their email address appears. For more information, see [Delegate & collaborate on email](https://support.google.com/mail/answer/138350).

Google Workspace organizations can use the [`settings.delegates`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates) resource to manage delegates within Gmail accounts in their organization. This requires a [service account](https://developers.google.com/identity/protocols/oauth2/service-account) that has been delegated with [domain-wide authority](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority).

A delegate user must be referred to by their primary email address and not an email alias. Gmail limits the number of delegates for each user in a Google Workspace organization to a maximum of 25 delegates.

The [`settings.delegates`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates) resource contains more information on how to [create](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/create), [list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/list), [get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/get), or [delete](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/delete) delegates.

The `settings.delegates` resource includes a [`VerificationStatus`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates#verificationstatus) object to indicate if ownership of an email address is verified for delegation. When creating a delegate using the [`settings.delegates.create`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates/create) method, the [`verificationStatus`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates#Delegate.FIELDS.verification_status) field is set to `accepted` without sending a verification email.
