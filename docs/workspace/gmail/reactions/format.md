---
source: https://developers.google.com/workspace/gmail/reactions/format
root: workspace
fetched_at: 2026-04-23T15:30:06.672Z
---

# Email reactions

Email reactions allow users to respond to email messages in a fun, friction-free way using emoji.

## Format

An email reaction is a regular MIME-formatted email with a special part that indicates that it's a reaction.

### Overall message format

The email must have a *body part* that has `Content-Type: text/vnd.google.email-reaction+json` that's formatted as described in the [definition](#part-definition).

A *body part* is either:

- The top-level part of the message. This means that the `Content-Type` header of the email is `text/vnd.google.email-reaction+json`.
- A sub-part of a multipart MIME part that has a `Content-Type` of `text/vnd.google.email-reaction+json` and a `Content-Disposition` that's not `attachment`.

The reaction email should also have regular `text/plain` and `text/html` parts so that email clients that don't support email reactions still show something a response. Gmail recommends putting the `text/vnd.google.email-reaction+json` part between the `text/plain` and `text/html` parts. This is because some email clients always display the last part regardless of whether they actually understand its MIME type. Likewise some email clients only display the first part.

The email should also have a `In-Reply-To` header containing the message ID of the message to which the reaction applies. This must be a single message ID.

### text/vnd.google.email-reaction+json part definition

This MIME part is in JSON format. It has two fields:

- **`version`**: An integer representing the version of the email reaction format that this part conforms to. This must be `1`.
- **`emoji`**: A string representing exactly one emoji symbol as defined by the [Unicode Technical Standard 51](https://unicode.org/reports/tr51/).

If the `Content-Transfer-Encoding` is a binary format, then JSON must use UTF-8 character encoding. Otherwise, the `Content-Transfer-Encoding` can be any standard encoding.

## Gmail's interpretation of text/vnd.google.email-reaction+json

When Gmail receives a message that looks like a reaction, it validates the reaction part and applies special display treatment to that message.

### Validation

Gmail validates all messages with a `text/vnd.google.email-reaction+json` part that it receives. If the part is malformed, it's considered *invalid* and the message is **not** treated as a reaction.

In particular:

1. Gmail parses the JSON and checks its validity. If the JSON is malformed, Gmail considers the part invalid.
2. Gmail checks the version field. The version must be exactly 1. It must be an integer; it cannot be a string. As the format evolves, other versions might be accepted. If the version is unknown or missing, Gmail considers the part invalid.
3. Gmail checks the emoji field. The contents must be exactly one of the emoji specified by version 15 or higher of the [Unicode Technical Standard 51](https://unicode.org/reports/tr51/) including any referenced extensions, like skin tone. As the emoji standard evolves, Gmail commits to supporting at least the latest version - 1. Gmail likely supports the latest version except for the window required to implement any newly released standard. If the field is missing, empty, or doesn't contain exactly one emoji, then Gmail considers the part invalid.

### Display

For messages with valid email reaction parts, Gmail displays the emoji in the emoji field near the message specified by the `In-Reply-To` header. This might also include a count of how many reactions are received with that emoji, it might show the sender of that reaction, and potentially other UI treatments. If the `In-Reply-To` header is missing or a message with the given ID cannot be found in the conversation thread, Gmail displays the reaction message as a regular email. Note that Gmail might not be able to find the message because the user deleted it, the thread got too long, or for any number of other reasons.

When displaying invalid email reaction messages, Gmail displays the `text/html` part if it exists. Otherwise, it uses the `text/plain` part. If no body part with either of those exists, Gmail displays an empty message.

### Limits

Gmail recommends that clients looking to add support for email reactions add some limits to prevent reactions overwhelming users. In particular:

- Messages from mailing lists shouldn't allow reactions.
- Messages with too many recipients shouldn't allow reactions. (Gmail uses a limit of 20 distinct recipients in the combined `To` and `CC` fields.)
- Messages where the recipient isn't in the `To` or `CC` fields shouldn't allow reactions.
- Messages that already have many reactions shouldn't allow reactions. (Gmail uses a limit of 20 reactions per user for any one message.)

These and other limits are also described under the "Unable to send emoji reactions" section of [Reply to emails with emoji reactions](https://support.google.com/mail/answer/14080429).
