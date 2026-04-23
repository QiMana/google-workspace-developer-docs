---
source: https://developers.google.com/workspace/gmail/api/guides/vacation_settings
root: workspace
fetched_at: 2026-04-23T15:28:52.089Z
---

# Manage vacation settings with the Gmail API

This document explains how to use the vacation responder in the Gmail API.

You can use the [`settings`](../reference/rest/v1/users.settings.md) resource to configure an automatic reply for an account.

For information on how to [get](../reference/rest/v1/users.settings/getVacation.md) or [update](../reference/rest/v1/users.settings/updateVacation.md) vacation responder settings, see the [`settings`](../reference/rest/v1/users.settings.md) resource.

## Configure automatic reply

Automatic reply requires a response subject and body in either HTML or plain text. These are set using the [`VacationSettings`](../reference/rest/v1/VacationSettings.md) object. You can enable automatic reply indefinitely or limit it to a specific period of time. You can also restrict automatic reply to known contacts or domain members.

The following code samples show how to set an automatic reply for a fixed period of time and restrict replies to users in the same domain:

### Java

```
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.VacationSettings;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;

/* Class to demonstrate the use of Gmail Enable Auto Reply API*/
public class EnableAutoReply {
  /**
   * Enables the auto reply
   *
   * @return the reply message and response metadata.
   * @throws IOException - if service account credentials file not found.
   */
  public static VacationSettings autoReply() throws IOException {
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
      // Enable auto reply by restricting domain with start time and end time
      VacationSettings vacationSettings = new VacationSettings()
          .setEnableAutoReply(true)
          .setResponseBodyHtml(
              "I am on vacation and will reply when I am back in the office. Thanks!")
          .setRestrictToDomain(true)
          .setStartTime(LocalDateTime.now()
              .toEpochSecond(ZoneOffset.from(ZonedDateTime.now())) * 1000)
          .setEndTime(LocalDateTime.now().plusDays(7)
              .toEpochSecond(ZoneOffset.from(ZonedDateTime.now())) * 1000);

      VacationSettings response = service.users().settings()
          .updateVacation("me", vacationSettings).execute();
      // Prints the auto-reply response body
      System.out.println("Enabled auto reply with message : " + response.getResponseBodyHtml());
      return response;
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 403) {
        System.err.println("Unable to enable auto reply: " + e.getDetails());
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
from datetime import datetime, timedelta

import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from numpy import long

def enable_auto_reply():
  """Enable auto reply.
  Returns:Draft object, including reply message and response meta data.

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)

    epoch = datetime.utcfromtimestamp(0)
    now = datetime.now()
    start_time = (now - epoch).total_seconds() * 1000
    end_time = (now + timedelta(days=7) - epoch).total_seconds() * 1000
    vacation_settings = {
        "enableAutoReply": True,
        "responseBodyHtml": (
            "I am on vacation and will reply when I am "
            "back in the office. Thanks!"
        ),
        "restrictToDomain": True,
        "startTime": long(start_time),
        "endTime": long(end_time),
    }

    # pylint: disable=E1101
    response = (
        service.users()
        .settings()
        .updateVacation(userId="me", body=vacation_settings)
        .execute()
    )
    print(f"Enabled AutoReply with message: {response.get('responseBodyHtml')}")

  except HttpError as error:
    print(f"An error occurred: {error}")
    response = None

  return response

if __name__ == "__main__":
  enable_auto_reply()
```

To disable automatic reply, call the [`settings.updateVacation`](../reference/rest/v1/users.settings/updateVacation.md) method and set the [`enableAutoReply`](../reference/rest/v1/VacationSettings.md#FIELDS.enable_auto_reply) field on the `VacationSettings` object to `false`. If you set an `endTime` value, automatic reply is disabled once the specified time has passed.

## Related topics

- [Send an automatic reply when you're out of office](https://support.google.com/mail/answer/25922)
