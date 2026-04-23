---
source: https://developers.google.com/workspace/gmail/ampemail/tips
root: workspace
fetched_at: 2026-04-23T15:28:48.828Z
---

# Tips and known limitations

Follow these tips to ensure your AMP emails render correctly and consistently across all platforms and browsers that Gmail supports.

- The summary text displayed next to the subject line when viewing emails in your inbox (preheader) is based on the `text/html` or `text/plain` part of your email and doesn't take the `text/x-amp-html` part into account.
- Gmail's search feature doesn't index the dynamic parts of the email. To help users find your emails, include the most important keywords in the `text/html` or `text/plain` part of the email.
- [Email Markup](../markup/overview.md) and [Promotions Annotations](../promotab.md) are parsed from the `text/html` part of the email and ignored in the `text/x-amp-html` part.
- `amp-form` form data sent to your endpoint is always encoded as `application/x-www-form-urlencoded`, regardless of the value of the `enctype` attribute set on the `<form>` element.
- Because dynamic emails contain up-to-date content, users might receive duplicate emails within the same thread. For example, the Google Docs commenting emails in one email thread for the same comment thread will all look identical when expanded. Gmail can prevent the display of these duplicate emails in long threads by collapsing emails with duplicate content. To ensure that emails are recognized as duplicates, add the meta tag `email.contentIds` to the AMP markup.
	```
	<head>
	  ...
	  <meta name="email.contentIds" content="id1,id2,id3">
	  ...
	</head>
	```
	The content of this meta tag should contain a comma separated list of strings identifying unique pieces of content within dynamic emails. If the content ID set of the last email in the thread is a (non-strict) superset of the content ID set of every other email in the thread, then all emails except the last one will be collapsed accordingly.
	For example, an email thread with the following content ID sets will be collapsed:
	- id1
		- id1
		- id1
	An email thread with the following content ID sets will also be collapsed:
	- id1, id2
		- id2, id3
		- id1, id2, id3
- When the email contains a form with input elements, if the inputs are changed the user might see a confirmation before navigating away from the email without submitting the form. This confirmation isn't shown in some cases, such as if the user clears the form or upon message deletion.
- `amp-mustache` templates can't contain set delimiter tags.
