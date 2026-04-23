---
source: https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings
root: workspace
fetched_at: 2026-04-23T15:28:50.496Z
---

# Manage aliases and signatures with the Gmail API

This document explains how to configure send-as aliases and email signatures in Gmail API.

Send-as aliases represent the email addresses from which an account can send mail. Each account always has at least one alias that represents the primary email address of the account.

Send-as aliases correspond to the ["Send mail as"](https://support.google.com/mail/answer/22370) feature in the Gmail web interface.

Aliases are also used to manage signatures for an account. You must have a basic understanding of send-as aliases to change email signatures.

For information about how to [create](../reference/rest/v1/users.settings.sendAs/create.md), [list](../reference/rest/v1/users.settings.sendAs/list.md), [get](../reference/rest/v1/users.settings.sendAs/get.md), [update](../reference/rest/v1/users.settings.sendAs/update.md), or [delete](../reference/rest/v1/users.settings.sendAs/delete.md) aliases, see the [`settings.SendAs`](../reference/rest/v1/users.settings.sendAs.md) resource.

## Create and verify aliases

You must [create](../reference/rest/v1/users.settings.sendAs/create.md) aliases before you use them. In some cases, users must also verify ownership of the alias.

If Gmail requires user verification for an alias, the alias is returned with a [`VerificationStatus`](../reference/rest/v1/users.settings.sendAs.md#verificationstatus) of `pending`. A verification message is automatically sent to the target email address. The owner of the email address must complete the verification process before they can use it.

Aliases that don't require verification have a verification status of `accepted`.

Use the [`settings.sendAs.verify`](../reference/rest/v1/users.settings.sendAs/verify.md) method to resend the verification request if needed.

### SMTP settings

Aliases for external addresses should send mail through a remote SMTP mail sending agent (MSA). To configure the SMTP MSA for an alias, use the [`smtpMsa`](../reference/rest/v1/users.settings.sendAs.md#SendAs.FIELDS.smtp_msa) field to provide the connection details.

## Manage signatures

You can also configure email signatures for each alias. The following code samples show how to set the signature for the user's primary address:

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.ListSendAsResponse;
import com.google.api.services.gmail.model.SendAs;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;

/* Class to demonstrate the use of Gmail Update Signature API */
public class UpdateSignature {
  /**
   * Update the gmail signature.
   *
   * @return the updated signature id , {@code null} otherwise.
   * @throws IOException - if service account credentials file not found.
   */
  public static String updateGmailSignature() throws IOException {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(GmailScopes.GMAIL_SETTINGS_BASIC);
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(credentials);

    // Create the gmail API client
    Gmail service = new Gmail.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Gmail samples")
        .build();

    try {
      SendAs primaryAlias = null;
      ListSendAsResponse aliases = service.users().settings().sendAs().list("me").execute();
      for (SendAs alias : aliases.getSendAs()) {
        if (alias.getIsPrimary()) {
          primaryAlias = alias;
          break;
        }
      }
      // Updating a new signature
      SendAs aliasSettings = new SendAs().setSignature("Automated Signature");
      SendAs result = service.users().settings().sendAs().patch(
              "me",
              primaryAlias.getSendAsEmail(),
              aliasSettings)
          .execute();
      //Prints the updated signature
      System.out.println("Updated signature - " + result.getSignature());
      return result.getSignature();
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 403) {
        System.err.println("Unable to update signature: " + e.getDetails());
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
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def update_signature():
  """Create and update signature in gmail.
  Returns:Draft object, including updated signature.

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)

    primary_alias = None

    # pylint: disable=E1101
    aliases = service.users().settings().sendAs().list(userId="me").execute()
    for alias in aliases.get("sendAs"):
      if alias.get("isPrimary"):
        primary_alias = alias
        break

    send_as_configuration = {
        "displayName": primary_alias.get("sendAsEmail"),
        "signature": "Automated Signature",
    }

    # pylint: disable=E1101
    result = (
        service.users()
        .settings()
        .sendAs()
        .patch(
            userId="me",
            sendAsEmail=primary_alias.get("sendAsEmail"),
            body=send_as_configuration,
        )
        .execute()
    )
    print(f'Updated signature for: {result.get("displayName")}')

  except HttpError as error:
    print(f"An error occurred: {error}")
    result = None

  return result.get("signature")

if __name__ == "__main__":
  update_signature()
```
