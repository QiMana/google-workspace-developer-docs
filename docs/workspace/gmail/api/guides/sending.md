---
source: https://developers.google.com/workspace/gmail/api/guides/sending
root: workspace
fetched_at: 2026-04-23T15:28:53.841Z
---

# Create and send email messages

This document explains how to create and send email messages using the Gmail API.

There are two ways to send email using the Gmail API:

- You can send it directly using the [`messages.send`](../reference/rest/v1/users.messages/send.md) method.
- You can send it from a draft, using the [`drafts.send`](../reference/rest/v1/users.drafts/send.md) method. For more information on sending a draft message, see [Send drafts](./drafts.md#send-drafts).

Gmail messages are sent as base64URL encoded strings within the [`raw`](https://developers.google.com/static/workspace/gmail/api/reference/rest/v1/users.messages#Message.FIELDS.raw) field of a [`messages`](../reference/rest/v1/users.messages.md) resource. To send an email message:

1. Create the email content and encode it as a base64URL string.
2. Create a new message resource and set its `raw` property to the base64URL string you just created.
3. Call the [`messages.send`](../reference/rest/v1/users.messages/send.md) method, or, if sending a draft, call the [`drafts.send`](../reference/rest/v1/users.drafts/send.md) method, to send the message.

The details of this workflow can vary depending on your choice of client library and programming language.

## Create messages

The Gmail API requires MIME email messages compliant with [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822) and encoded as base64URL strings. Many programming languages have libraries or utilities that simplify the process of creating and encoding MIME messages.

The following code samples show how to create a MIME message using Google API client libraries for various languages:

### Java

Creating an email message can be simplified with the `MimeMessage` class in the `javax.mail.internet` package. The following code sample shows how to create the email message, including the headers:

```
import java.util.Properties;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/* Class to demonstrate the use of Gmail Create Email API  */
public class CreateEmail {

  /**
   * Create a MimeMessage using the parameters provided.
   *
   * @param toEmailAddress   email address of the receiver
   * @param fromEmailAddress email address of the sender, the mailbox account
   * @param subject          subject of the email
   * @param bodyText         body text of the email
   * @return the MimeMessage to be used to send email
   * @throws MessagingException - if a wrongly formatted address is encountered.
   */
  public static MimeMessage createEmail(String toEmailAddress,
                                        String fromEmailAddress,
                                        String subject,
                                        String bodyText)
      throws MessagingException {
    Properties props = new Properties();
    Session session = Session.getDefaultInstance(props, null);

    MimeMessage email = new MimeMessage(session);

    email.setFrom(new InternetAddress(fromEmailAddress));
    email.addRecipient(javax.mail.Message.RecipientType.TO,
        new InternetAddress(toEmailAddress));
    email.setSubject(subject);
    email.setText(bodyText);
    return email;
  }
}
```

Next, encode the `MimeMessage`, instantiate a `messages` object, and set the base64URL encoded message string as the value of the `raw` property.

```
import com.google.api.services.gmail.model.Message;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.apache.commons.codec.binary.Base64;

/* Class to demonstrate the use of Gmail Create Message API */
public class CreateMessage {

  /**
   * Create a message from an email.
   *
   * @param emailContent Email to be set to raw of message
   * @return a message containing a base64url encoded email
   * @throws IOException        - if service account credentials file not found.
   * @throws MessagingException - if a wrongly formatted address is encountered.
   */
  public static Message createMessageWithEmail(MimeMessage emailContent)
      throws MessagingException, IOException {
    ByteArrayOutputStream buffer = new ByteArrayOutputStream();
    emailContent.writeTo(buffer);
    byte[] bytes = buffer.toByteArray();
    String encodedEmail = Base64.encodeBase64URLSafeString(bytes);
    Message message = new Message();
    message.setRaw(encodedEmail);
    return message;
  }
}
```

### Python

The following code sample shows how to create a MIME message, encode it to a base64URL string, and assign it to the `raw` field of the `messages` resource:

```
import base64
from email.message import EmailMessage

import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def gmail_create_draft():
  """Create and insert a draft email.
   Print the returned draft's message and id.
   Returns: Draft object, including draft id and message meta data.

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)

    message = EmailMessage()

    message.set_content("This is automated draft mail")

    message["To"] = "gduser1@workspacesamples.dev"
    message["From"] = "gduser2@workspacesamples.dev"
    message["Subject"] = "Automated draft"

    # encoded message
    encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()

    create_message = {"message": {"raw": encoded_message}}
    # pylint: disable=E1101
    draft = (
        service.users()
        .drafts()
        .create(userId="me", body=create_message)
        .execute()
    )

    print(f'Draft id: {draft["id"]}\nDraft message: {draft["message"]}')

  except HttpError as error:
    print(f"An error occurred: {error}")
    draft = None

  return draft

if __name__ == "__main__":
  gmail_create_draft()
```

### cURL

```
curl --request POST \
  'https://gmail.googleapis.com/gmail/v1/users/me/drafts' \
  --header 'Authorization: Bearer ACCESS_TOKEN' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"message":{"raw":"MESSAGE"}}'
```

Replace the following:

- `ACCESS_TOKEN`: the access token that grants access to the API.
- `MESSAGE`: the RFC 2822 formatted MIME message, encoded as base64URL.

## Create messages with attachments

Creating a message with an attachment is like creating any other message, but the process of uploading the file as a multi-part MIME message depends on the programming language.

The following code samples show possible ways of creating a multi-part MIME message with an attachment:

### Java

The following code sample shows how to create a multi-part MIME message. The encoding and assignment steps are the same as [create messages](#create-messages).

```
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.Draft;
import com.google.api.services.gmail.model.Message;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Properties;
import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import org.apache.commons.codec.binary.Base64;

/* Class to demonstrate the use of Gmail Create Draft with attachment API */
public class CreateDraftWithAttachment {
  /**
   * Create a draft email with attachment.
   *
   * @param fromEmailAddress - Email address to appear in the from: header.
   * @param toEmailAddress   - Email address of the recipient.
   * @param file             - Path to the file to be attached.
   * @return the created draft, {@code null} otherwise.
   * @throws MessagingException - if a wrongly formatted address is encountered.
   * @throws IOException        - if service account credentials file not found.
   */
  public static Draft createDraftMessageWithAttachment(String fromEmailAddress,
                                                       String toEmailAddress,
                                                       File file)
      throws MessagingException, IOException {
        /* Load pre-authorized user credentials from the environment.
         TODO(developer) - See https://developers.google.com/identity for
          guides on implementing OAuth2 for your application.*/
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(GmailScopes.GMAIL_COMPOSE);
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(credentials);

    // Create the gmail API client
    Gmail service = new Gmail.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Gmail samples")
        .build();

    // Create the email content
    String messageSubject = "Test message";
    String bodyText = "lorem ipsum.";

    // Encode as MIME message
    Properties props = new Properties();
    Session session = Session.getDefaultInstance(props, null);
    MimeMessage email = new MimeMessage(session);
    email.setFrom(new InternetAddress(fromEmailAddress));
    email.addRecipient(javax.mail.Message.RecipientType.TO,
        new InternetAddress(toEmailAddress));
    email.setSubject(messageSubject);

    MimeBodyPart mimeBodyPart = new MimeBodyPart();
    mimeBodyPart.setContent(bodyText, "text/plain");
    Multipart multipart = new MimeMultipart();
    multipart.addBodyPart(mimeBodyPart);
    mimeBodyPart = new MimeBodyPart();
    DataSource source = new FileDataSource(file);
    mimeBodyPart.setDataHandler(new DataHandler(source));
    mimeBodyPart.setFileName(file.getName());
    multipart.addBodyPart(mimeBodyPart);
    email.setContent(multipart);

    // Encode and wrap the MIME message into a gmail message
    ByteArrayOutputStream buffer = new ByteArrayOutputStream();
    email.writeTo(buffer);
    byte[] rawMessageBytes = buffer.toByteArray();
    String encodedEmail = Base64.encodeBase64URLSafeString(rawMessageBytes);
    Message message = new Message();
    message.setRaw(encodedEmail);

    try {
      // Create the draft message
      Draft draft = new Draft();
      draft.setMessage(message);
      draft = service.users().drafts().create("me", draft).execute();
      System.out.println("Draft id: " + draft.getId());
      System.out.println(draft.toPrettyString());
      return draft;
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 403) {
        System.err.println("Unable to create draft: " + e.getDetails());
      } else {
        throw e;
      }
    }
    return null;
  }
}
```

### Python

Similar to the [create messages](#create-messages) example, this example also handles encoding the message to base64URL and assigning it to the `raw` field of the `messages` resource.

```
import base64
import mimetypes
import os
from email.message import EmailMessage
from email.mime.audio import MIMEAudio
from email.mime.base import MIMEBase
from email.mime.image import MIMEImage
from email.mime.text import MIMEText

import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def gmail_create_draft_with_attachment():
  """Create and insert a draft email with attachment.
   Print the returned draft's message and id.
  Returns: Draft object, including draft id and message meta data.

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)
    mime_message = EmailMessage()

    # headers
    mime_message["To"] = "gduser1@workspacesamples.dev"
    mime_message["From"] = "gduser2@workspacesamples.dev"
    mime_message["Subject"] = "sample with attachment"

    # text
    mime_message.set_content(
        "Hi, this is automated mail with attachment.Please do not reply."
    )

    # attachment
    attachment_filename = "photo.jpg"
    # guessing the MIME type
    type_subtype, _ = mimetypes.guess_type(attachment_filename)
    maintype, subtype = type_subtype.split("/")

    with open(attachment_filename, "rb") as fp:
      attachment_data = fp.read()
    mime_message.add_attachment(attachment_data, maintype, subtype)

    encoded_message = base64.urlsafe_b64encode(mime_message.as_bytes()).decode()

    create_draft_request_body = {"message": {"raw": encoded_message}}
    # pylint: disable=E1101
    draft = (
        service.users()
        .drafts()
        .create(userId="me", body=create_draft_request_body)
        .execute()
    )
    print(f'Draft id: {draft["id"]}\nDraft message: {draft["message"]}')
  except HttpError as error:
    print(f"An error occurred: {error}")
    draft = None
  return draft

def build_file_part(file):
  """Creates a MIME part for a file.

  Args:
    file: The path to the file to be attached.

  Returns:
    A MIME part that can be attached to a message.
  """
  content_type, encoding = mimetypes.guess_type(file)

  if content_type is None or encoding is not None:
    content_type = "application/octet-stream"
  main_type, sub_type = content_type.split("/", 1)
  if main_type == "text":
    with open(file, "rb"):
      msg = MIMEText("r", _subtype=sub_type)
  elif main_type == "image":
    with open(file, "rb"):
      msg = MIMEImage("r", _subtype=sub_type)
  elif main_type == "audio":
    with open(file, "rb"):
      msg = MIMEAudio("r", _subtype=sub_type)
  else:
    with open(file, "rb"):
      msg = MIMEBase(main_type, sub_type)
      msg.set_payload(file.read())
  filename = os.path.basename(file)
  msg.add_header("Content-Disposition", "attachment", filename=filename)
  return msg

if __name__ == "__main__":
  gmail_create_draft_with_attachment()
```

### cURL

```
curl --request POST \
  'https://gmail.googleapis.com/gmail/v1/users/me/drafts' \
  --header 'Authorization: Bearer ACCESS_TOKEN' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"message":{"raw":"MESSAGE"}}'
```

Replace the following:

- `ACCESS_TOKEN`: the access token that grants access to the API.
- `MESSAGE`: the RFC 2822 formatted MIME message containing an attachment, encoded as base64URL.

## Send messages

Once you have created a message, you can send it by supplying it in the request body of the [`messages.send`](../reference/rest/v1/users.messages/send.md) method, as shown in the following examples:

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.Message;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Properties;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.apache.commons.codec.binary.Base64;

/* Class to demonstrate the use of Gmail Send Message API */
public class SendMessage {
  /**
   * Send an email from the user's mailbox to its recipient.
   *
   * @param fromEmailAddress - Email address to appear in the from: header
   * @param toEmailAddress   - Email address of the recipient
   * @return the sent message, {@code null} otherwise.
   * @throws MessagingException - if a wrongly formatted address is encountered.
   * @throws IOException        - if service account credentials file not found.
   */
  public static Message sendEmail(String fromEmailAddress,
                                  String toEmailAddress)
      throws MessagingException, IOException {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application.*/
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(GmailScopes.GMAIL_SEND);
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(credentials);

    // Create the gmail API client
    Gmail service = new Gmail.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Gmail samples")
        .build();

    // Create the email content
    String messageSubject = "Test message";
    String bodyText = "lorem ipsum.";

    // Encode as MIME message
    Properties props = new Properties();
    Session session = Session.getDefaultInstance(props, null);
    MimeMessage email = new MimeMessage(session);
    email.setFrom(new InternetAddress(fromEmailAddress));
    email.addRecipient(javax.mail.Message.RecipientType.TO,
        new InternetAddress(toEmailAddress));
    email.setSubject(messageSubject);
    email.setText(bodyText);

    // Encode and wrap the MIME message into a gmail message
    ByteArrayOutputStream buffer = new ByteArrayOutputStream();
    email.writeTo(buffer);
    byte[] rawMessageBytes = buffer.toByteArray();
    String encodedEmail = Base64.encodeBase64URLSafeString(rawMessageBytes);
    Message message = new Message();
    message.setRaw(encodedEmail);

    try {
      // Create send message
      message = service.users().messages().send("me", message).execute();
      System.out.println("Message id: " + message.getId());
      System.out.println(message.toPrettyString());
      return message;
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 403) {
        System.err.println("Unable to send message: " + e.getDetails());
      } else {
        throw e;
      }
    }
    return null;
  }
}
```

### Python

```
import base64
from email.message import EmailMessage

import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def gmail_send_message():
  """Create and send an email message
  Print the returned  message id
  Returns: Message object, including message id

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    service = build("gmail", "v1", credentials=creds)
    message = EmailMessage()

    message.set_content("This is automated draft mail")

    message["To"] = "gduser1@workspacesamples.dev"
    message["From"] = "gduser2@workspacesamples.dev"
    message["Subject"] = "Automated draft"

    # encoded message
    encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()

    create_message = {"raw": encoded_message}
    # pylint: disable=E1101
    send_message = (
        service.users()
        .messages()
        .send(userId="me", body=create_message)
        .execute()
    )
    print(f'Message Id: {send_message["id"]}')
  except HttpError as error:
    print(f"An error occurred: {error}")
    send_message = None
  return send_message

if __name__ == "__main__":
  gmail_send_message()
```

### cURL

```
curl --request POST \
  'https://gmail.googleapis.com/gmail/v1/users/me/messages/send' \
  --header 'Authorization: Bearer ACCESS_TOKEN' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"raw":"MESSAGE"}'
```

Replace the following:

- `ACCESS_TOKEN`: the access token that grants access to the API.
- `MESSAGE`: the RFC 2822 formatted MIME message, encoded as base64URL.

If you're trying to send a reply and want the email to be grouped into a [thread](./threads.md), make sure that:

1. The `Subject` headers match
2. The `References` and `In-Reply-To` headers follow the [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#appendix-A.2) standard.

## Related topics

- [Manage threads](./threads.md)
- [Troubleshoot authentication & authorization issues](../troubleshoot-authentication-authorization.md)
