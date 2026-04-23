---
source: https://developers.google.com/workspace/gmail/api/guides/forwarding_settings
root: workspace
fetched_at: 2026-04-23T15:28:51.419Z
---

# Manage email forwarding

This document explains how to configure email forwarding in Gmail API.

You can use the [`settings`](../reference/rest/v1/users.settings.md) resource to configure forwarding for an account. For an email address to be used as a forwarding email address, it must fulfill one of the following criteria:

- The email address is verified. For more information, see [Create and verify forwarding addresses](#create-verify).
- The email address belongs to the same domain as the sender.
- The email address belongs to a subdomain within the same domain of the sender.
- The email address belongs to a domain alias configured as part of the same Google Workspace account.

If the forwarding email address doesn't adhere to one of these rules, setting up forwarding using the API fails.

For information on how to [create](../reference/rest/v1/users.settings.forwardingAddresses/create.md), [list](../reference/rest/v1/users.settings.forwardingAddresses/list.md), [get](../reference/rest/v1/users.settings.forwardingAddresses/get.md), or [delete](../reference/rest/v1/users.settings.forwardingAddresses/delete.md) forwarding addresses, see the methods on the [`settings.forwardingAddresses`](../reference/rest/v1/users.settings.forwardingAddresses.md) resource.

For information on how to [get](../reference/rest/v1/users.settings/getAutoForwarding.md) or [update](../reference/rest/v1/users.settings/updateAutoForwarding.md) the auto-forwarding settings, see the methods on the [`settings`](../reference/rest/v1/users.settings.md) resource.

## Create and verify forwarding addresses

You must [create](../reference/rest/v1/users.settings.forwardingAddresses/create.md) forwarding addresses before you use them. In some cases, users must also verify ownership of the address.

If Gmail requires user verification for a forwarding address, the address is returned with a [`VerificationStatus`](../reference/rest/v1/users.settings.forwardingAddresses.md#verificationstatus) of `pending`. A verification message is automatically sent to the target email address. The owner of the email address must complete the verification process before it can be used.

Forwarding addresses that don't require verification have a verification status of `accepted`.

## Enable automatic forwarding

You can choose to forward all of your new messages to another email address.

To do so, call the [`updateAutoForwarding`](../reference/rest/v1/users.settings/updateAutoForwarding.md) method to enable auto-forwarding for an account. The call requires a registered and verified forwarding address and an action to take on forwarded messages. These are set using the [`AutoForwarding`](../reference/rest/v1/AutoForwarding.md) object.

The [`disposition`](../reference/rest/v1/AutoForwarding.md#FIELDS.disposition) field is used to set the message state after the message is forwarded. The default value is `dispositionUnspecified`, but you can't set this field to `dispositionUnspecified`.

The following code samples show how to enable auto-forwarding and then move forwarded messages to the trash:

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.AutoForwarding;
import com.google.api.services.gmail.model.ForwardingAddress;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;

/* Class to demonstrate the use of Gmail Enable Forwarding API */
public class EnableForwarding {
  /**
   * Enable the auto-forwarding for an account.
   *
   * @param forwardingEmail - Email address of the recipient whose email will be forwarded.
   * @return forwarding id and metadata, {@code null} otherwise.
   * @throws IOException - if service account credentials file not found.
   */
  public static AutoForwarding enableAutoForwarding(String forwardingEmail) throws IOException {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(GmailScopes.GMAIL_SETTINGS_SHARING);
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(credentials);

    // Create the gmail API client
    Gmail service = new Gmail.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Gmail samples")
        .build();

    try {
      // Enable auto-forwarding and move forwarded messages to the trash
      ForwardingAddress address = new ForwardingAddress()
          .setForwardingEmail(forwardingEmail);
      ForwardingAddress createAddressResult = service.users().settings().forwardingAddresses()
          .create("me", address).execute();
      if (createAddressResult.getVerificationStatus().equals("accepted")) {
        AutoForwarding autoForwarding = new AutoForwarding()
            .setEnabled(true)
            .setEmailAddress(address.getForwardingEmail())
            .setDisposition("trash");
        autoForwarding =
            service.users().settings().updateAutoForwarding("me", autoForwarding).execute();
        System.out.println(autoForwarding.toPrettyString());
        return autoForwarding;
      }
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 403) {
        System.err.println("Unable to enable forwarding: " + e.getDetails());
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

def enable_forwarding():
  """Enable email forwarding.
  Returns:Draft object, including forwarding id and result meta data.

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)

    address = {"forwardingEmail": "gduser1@workspacesamples.dev"}

    # pylint: disable=E1101
    result = (
        service.users()
        .settings()
        .forwardingAddresses()
        .create(userId="me", body=address)
        .execute()
    )
    if result.get("verificationStatus") == "accepted":
      body = {
          "emailAddress": result.get("forwardingEmail"),
          "enabled": True,
          "disposition": "trash",
      }
      # pylint: disable=E1101
      result = (
          service.users()
          .settings()
          .updateAutoForwarding(userId="me", body=body)
          .execute()
      )
      print(f"Forwarding is enabled : {result}")

  except HttpError as error:
    print(f"An error occurred: {error}")
    result = None

  return result

if __name__ == "__main__":
  enable_forwarding()
```

To disable auto-forwarding, call the `updateAutoForwarding` method and set the [`enabled`](../reference/rest/v1/AutoForwarding.md#FIELDS.enabled) field on the `AutoForwarding` object to `false`.

## Forward specific messages

Automatic forwarding sends all received Gmail messages to the target account. To forward specific messages, set up a [filter](./filter_settings.md) to create rules that forward messages in response to message attributes or content.

To forward messages to multiple accounts, create a filter for every forwarding email address.
