---
source: https://developers.google.com/workspace/gmail/api/guides/smime_certs
root: workspace
fetched_at: 2026-04-23T15:28:52.873Z
---

# Manage S/MIME certificates with the Gmail API

This document explains how to use S/MIME email certificates in the Gmail API.

The Gmail API provides programmatic access to manage S/MIME email certificates for users in a Google Workspace domain.

An administrator must [turn on hosted S/MIME for the domain](https://knowledge.workspace.google.com/admin/gmail/advanced/turn-on-hosted-s-mime-for-message-encryption) for the certificates to work.

The [S/MIME standard](https://en.wikipedia.org/wiki/S/MIME) provides a specification for public key encryption and signing of MIME data. When S/MIME certificates are configured in a user account, Gmail uses them in the following ways:

- Sign outgoing mail with the user certificate and private key.
- Decrypt incoming mail with the user private key.
- Encrypt outgoing mail with the recipient certificate and public key.
- Verify incoming mail with the sender certificate and public key.

You can generate individual S/MIME certificates and upload them using the Gmail API. Each S/MIME certificate is for a specific alias for a user email account. Aliases include the primary email address and custom "Send As" addresses. The API marks a single S/MIME certificate as the default for each alias.

For more information on aliases, see [Manage aliases and signatures with the Gmail API](./alias_and_signature_settings.md).

## Authorize API access

To authorize access to the Gmail API, use one of the following methods:

1. Use a *service account* with *domain-wide delegation of authority*. For an explanation of these terms, see [Learn about authentication and authorization](../../../guides/auth-overview.md#important_terminology). To enable this option, see [Create access credentials](../../../guides/create-credentials.md#service-account).
2. Use a standard OAuth 2.0 flow that requires end-user consent to obtain an OAuth 2.0 access token. For more information, see [Learn about authentication and authorization](../../../guides/auth-overview.md).
	To use this option, the domain administrator must select the **Enable S/MIME encryption for sending and receiving emails** checkbox in the Google Admin console. For more information, see [Turn on hosted S/MIME in your Google Admin console](https://knowledge.workspace.google.com/admin/gmail/advanced/turn-on-hosted-s-mime-for-message-encryption#step_1_turn_on_hosted_smime_in_your_google_admin_console).

## ACL scopes

The Gmail API relies on the [same ACL scopes](../auth/scopes.md) as the [Gmail sendAs](../reference/rest/v1/users.settings.sendAs.md) methods:

- `gmail.settings.basic`: This scope is required for updating the primary `SendAs` S/MIME.
- `gmail.settings.sharing`: This scope is required for updating the custom *from* S/MIME.

## Configure S/MIME keys

The [`settings.sendAs.smimeInfo`](../reference/rest/v1/users.settings.sendAs.smimeInfo.md) resource provides several methods to manage S/MIME certificates. Each certificate is associated with one send-as alias for a user.

To determine the send-as aliases for a user, use the [`settings.sendAs.list`](../reference/rest/v1/users.settings.sendAs/list.md) method on the [`settings.sendAs`](../reference/rest/v1/users.settings.sendAs.md) resource.

### Upload an S/MIME key

Use the [`settings.sendAs.smimeInfo.insert`](../reference/rest/v1/users.settings.sendAs.smimeInfo/insert.md) method on the `settings.sendAs.smimeInfo` resource to upload a new S/MIME key for an alias belonging to a user. Identify the target alias using the following path parameters:

- `userId`: The user's email address. Use the special value `me` to indicate the authenticated user.
- `sendAsEmail`: The alias for which you're uploading the key. This email address appears in the `From:` header for mail sent using this alias.

The S/MIME certificate and private key should be present in the [`pkcs12`](../reference/rest/v1/users.settings.sendAs.smimeInfo.md#SmimeInfo.FIELDS.pkcs12) field in that format; no other fields should be set in the request. The `pkcs12` field contains both the user S/MIME key and the signing certificate chain. The API performs standard validations on this field before accepting it, verifying the following:

- The subject matches the specified email address.
- Expirations are valid.
- The issuing certificate authority (CA) is in the Google trusted list.
- The certificates match Gmail's technical constraints.

If the key is encrypted, the password should be in the [`encryptedKeyPassword`](../reference/rest/v1/users.settings.sendAs.smimeInfo.md#SmimeInfo.FIELDS.encrypted_key_password) field. A successful `settings.sendAs.smimeInfo.insert` method call returns the `settings.sendAs.smimeInfo` resource `id` used to refer to the key in the future.

### List a user's S/MIME keys

Use the [`settings.sendAs.smimeInfo.list`](../reference/rest/v1/users.settings.sendAs.smimeInfo/list.md) method on the `settings.sendAs.smimeInfo` resource to return the list of S/MIME keys for the given user for the given alias. Identify the target alias using the following path parameters:

- `userId`: The user's email address. Use the special value `me` to indicate the authenticated user.
- `sendAsEmail`: The alias for which to list keys. This email address appears in the `From:` header for mail sent using this alias.

### Retrieve the S/MIME keys for an alias

Use the [`settings.sendAs.smimeInfo.get`](../reference/rest/v1/users.settings.sendAs.smimeInfo/get.md) method on the `settings.sendAs.smimeInfo` resource to return the specific S/MIME keys for a specific send-as alias for a user. Identify the target alias using the following path parameters:

- `userId`: The user's email address. Use the special value `me` to indicate the authenticated user.
- `sendAsEmail`: The alias for which you're retrieving the keys. This email address appears in the `From:` header for mail sent using this alias.

### Delete an S/MIME key

Use the [`settings.sendAs.smimeInfo.delete`](../reference/rest/v1/users.settings.sendAs.smimeInfo/delete.md) method on the `settings.sendAs.smimeInfo` resource to delete the specified S/MIME key from an alias. Identify the target alias using the following path parameters:

- `userId`: The user's email address. Use the special value `me` to indicate the authenticated user.
- `sendAsEmail`: The alias for which you're deleting the keys. This email address appears in the `From:` header for mail sent using this alias.
- `id`: The immutable ID for the `smimeInfo`.

### Set the default S/MIME key for an alias

Use the [`settings.sendAs.smimeInfo.setDefault`](../reference/rest/v1/users.settings.sendAs.smimeInfo/setDefault.md) method on the `settings.sendAs.smimeInfo` resource to mark the specified S/MIME key as the default for the specified alias. Identify the target alias using the following path parameters:

- `userId`: The user's email address. Use the special value `me` to indicate the authenticated user.
- `sendAsEmail`: The alias for which keys to set as default. This email address appears in the `From:` header for mail sent using this alias.
- `id`: The immutable ID for the `smimeInfo`.

## Code samples

The following code samples show how to use the Gmail API to manage S/MIME certificates for an organization with multiple users:

### Create an smimeInfo resource for an S/MIME certificate

This code sample shows how to read a certificate from a file, encode it to a Base64URL string, and assign it to the [`pkcs12`](../reference/rest/v1/users.settings.sendAs.smimeInfo.md#SmimeInfo.FIELDS.pkcs12) field on the `settings.sendAs.smimeInfo` resource:

### Java

```
import com.google.api.services.gmail.model.SmimeInfo;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

/* Class to demonstrate the use of Gmail Create SmimeInfo API */
public class CreateSmimeInfo {
  /**
   * Create an SmimeInfo resource for a certificate from file.
   *
   * @param filename Name of the file containing the S/MIME certificate.
   * @param password Password for the certificate file, or null if the file is not
   *                 password-protected.
   * @return An SmimeInfo object with the specified certificate.
   */
  public static SmimeInfo createSmimeInfo(String filename, String password) {
    SmimeInfo smimeInfo = null;
    InputStream in = null;

    try {
      File file = new File(filename);
      in = new FileInputStream(file);
      byte[] fileContent = new byte[(int) file.length()];
      in.read(fileContent);

      smimeInfo = new SmimeInfo();
      smimeInfo.setPkcs12(Base64.getUrlEncoder().encodeToString(fileContent));
      if (password != null && password.length() > 0) {
        smimeInfo.setEncryptedKeyPassword(password);
      }
    } catch (Exception e) {
      System.out.printf("An error occured while reading the certificate file: %s\n", e);
    } finally {
      try {
        if (in != null) {
          in.close();
        }
      } catch (IOException ioe) {
        System.out.printf("An error occured while closing the input stream: %s\n", ioe);
      }
    }
    return smimeInfo;
  }
}
```

### Python

```
import base64

def create_smime_info(cert_filename, cert_password):
  """Create an smimeInfo resource for a certificate from file.
  Args:
    cert_filename: Name of the file containing the S/MIME certificate.
    cert_password: Password for the certificate file, or None if the file is not
        password-protected.
  Returns : Smime object, including smime information
  """

  smime_info = None
  try:
    with open(cert_filename, "rb") as cert:
      smime_info = {}
      data = cert.read().encode("UTF-8")
      smime_info["pkcs12"] = base64.urlsafe_b64encode(data).decode()
      if cert_password and len(cert_password) > 0:
        smime_info["encryptedKeyPassword"] = cert_password

  except (OSError, IOError) as error:
    print(f"An error occurred while reading the certificate file: {error}")
    smime_info = None

  return smime_info

if __name__ == "__main__":
  print(create_smime_info(cert_filename="xyz", cert_password="xyz"))
```

### Upload an S/MIME certificate

To upload a certificate, call the [`settings.sendAs.smimeInfo.insert`](../reference/rest/v1/users.settings.sendAs.smimeInfo/insert.md) method and supply the `settings.sendAs.smimeInfo` resource in the body of the request:

### Java

```
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.SmimeInfo;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;

/* Class to demonstrate the use of Gmail Insert Smime Certificate API*/
public class InsertSmimeInfo {
  /**
   * Upload an S/MIME certificate for the user.
   *
   * @param userId      User's email address.
   * @param sendAsEmail The "send as" email address, or null if it should be the same as userId.
   * @param smimeInfo   The SmimeInfo object containing the user's S/MIME certificate.
   * @return An SmimeInfo object with details about the uploaded certificate, {@code null} otherwise.
   * @throws IOException - if service account credentials file not found.
   */
  public static SmimeInfo insertSmimeInfo(String userId,
                                          String sendAsEmail,
                                          SmimeInfo smimeInfo)
      throws IOException {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(GmailScopes.GMAIL_SETTINGS_SHARING);
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(
        credentials);

    // Create the gmail API client
    Gmail service = new Gmail.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Gmail samples")
        .build();

    if (sendAsEmail == null) {
      sendAsEmail = userId;
    }

    try {
      SmimeInfo results = service.users().settings().sendAs().smimeInfo()
          .insert(userId, sendAsEmail, smimeInfo)
          .execute();
      System.out.printf("Inserted certificate, id: %s\n", results.getId());
      return results;
    } catch (IOException e) {
      System.err.printf("An error occured: %s", e);
    }
    return null;
  }
}
```

### Python

```
import create_smime_info
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def insert_smime_info():
  """Upload an S/MIME certificate for the user.
  Print the inserted certificate's id
  Returns : Result object with inserted certificate id and other meta-data

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)

    user_id = "gduser1@workspacesamples.dev"
    smime_info = create_smime_info.create_smime_info(
        cert_filename="xyz", cert_password="xyz"
    )
    send_as_email = None

    if not send_as_email:
      send_as_email = user_id

    # pylint: disable=maybe-no-member
    results = (
        service.users()
        .settings()
        .sendAs()
        .smimeInfo()
        .insert(userId=user_id, sendAsEmail=send_as_email, body=smime_info)
        .execute()
    )
    print(f'Inserted certificate; id: {results["id"]}')

  except HttpError as error:
    print(f"An error occurred: {error}")
    results = None

  return results

if __name__ == "__main__":
  insert_smime_info()
```

### Manage multiple users' certificates

These code samples show how to manage certificates for multiple users in an organization in one batch call:

#### Insert certificates from a CSV file

The following is a sample CSV file that lists user IDs and the path to each user's certificate:

```
$ cat certificates.csv
user1@example.com,/path/to/user1_cert.p12,cert_password_1
user2@example.com,/path/to/user2_cert.p12,cert_password_2
user3@example.com,/path/to/user3_cert.p12,cert_password_3
```

### Java

You can use the [`CreateSmimeInfo`](./smime_certs.md#create-smimeinfo-resource) and [`InsertSmimeInfo`](./smime_certs.md#upload-smime-cert) samples to upload the certificates for the users specified in a CSV file:

```
import com.google.api.services.gmail.model.SmimeInfo;
import java.io.File;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

/* Class to demonstrate the use of Gmail Insert Certificate from CSV File */
public class InsertCertFromCsv {
  /**
   * Upload S/MIME certificates based on the contents of a CSV file.
   *
   * <p>Each row of the CSV file should contain a user ID, path to the certificate, and the
   * certificate password.
   *
   * @param csvFilename Name of the CSV file.
   */
  public static void insertCertFromCsv(String csvFilename) {
    try {
      File csvFile = new File(csvFilename);
      CSVParser parser =
          CSVParser.parse(csvFile, java.nio.charset.StandardCharsets.UTF_8, CSVFormat.DEFAULT);
      for (CSVRecord record : parser) {
        String userId = record.get(0);
        String certFilename = record.get(1);
        String certPassword = record.get(2);
        SmimeInfo smimeInfo = CreateSmimeInfo.createSmimeInfo(certFilename,
            certPassword);
        if (smimeInfo != null) {
          InsertSmimeInfo.insertSmimeInfo(userId,
              userId,
              smimeInfo);
        } else {
          System.err.printf("Unable to read certificate file for userId: %s\n", userId);
        }
      }
    } catch (Exception e) {
      System.err.printf("An error occured while reading the CSV file: %s", e);
    }
  }
}
```

### Python

You can use the [`create_smime_info`](./smime_certs.md#create-smimeinfo-resource) and [`insert_smime_info`](./smime_certs.md#upload-smime-cert) samples to upload the certificates for the users specified in a CSV file:

```
import csv

import create_smime_info
import insert_smime_info

def insert_cert_from_csv(csv_filename):
  """Upload S/MIME certificates based on the contents of a CSV file.
  Each row of the CSV file should contain a user ID, path to the certificate,
  and the certificate password.

  Args:
    csv_filename: Name of the CSV file.
  """

  try:
    with open(csv_filename, "rb") as cert:
      csv_reader = csv.reader(cert, delimiter=",")
      next(csv_reader, None)  # skip CSV file header
      for row in csv_reader:
        user_id = row[0]
        cert_filename = row[1]
        cert_password = row[2]
        smime_info = create_smime_info.create_smime_info(
            cert_filename=cert_filename, cert_password=cert_password
        )
        if smime_info:
          insert_smime_info.insert_smime_info()
        else:
          print(f"Unable to read certificate file for user_id: {user_id}")
        return smime_info

  except (OSError, IOError) as error:
    print(f"An error occured while reading the CSV file: {error}")

if __name__ == "__main__":
  insert_cert_from_csv(csv_filename="xyz")
```

#### Certificate management

This sample combines several methods from the `settings.sendAs.smimeInfo` resource to show how to manage certificates for your organization. It lists the certificates for the user. If the default certificate is expired or not set, it uploads the certificate found in the specified file. Then it sets the certificate whose expiration is furthest into the future as the default.

This function then processes a CSV file, similar to the previous [Insert certificates from a CSV file](#insert-certificates-csv) sample.

### Java

```
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.ListSmimeInfoResponse;
import com.google.api.services.gmail.model.SmimeInfo;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

/* Class to demonstrate the use of Gmail Update Smime Certificate API*/
public class UpdateSmimeCerts {
  /**
   * Update S/MIME certificates for the user.
   *
   * <p>First performs a lookup of all certificates for a user. If there are no certificates, or
   * they all expire before the specified date/time, uploads the certificate in the specified file.
   * If the default certificate is expired or there was no default set, chooses the certificate with
   * the expiration furthest into the future and sets it as default.
   *
   * @param userId       User's email address.
   * @param sendAsEmail  The "send as" email address, or None if it should be the same as user_id.
   * @param certFilename Name of the file containing the S/MIME certificate.
   * @param certPassword Password for the certificate file, or None if the file is not
   *                     password-protected.
   * @param expireTime   DateTime object against which the certificate expiration is compared. If
   *                     None, uses the current time. @ returns: The ID of the default certificate.
   * @return The ID of the default certificate, {@code null} otherwise.
   * @throws IOException - if service account credentials file not found.
   */
  public static String updateSmimeCerts(String userId,
                                        String sendAsEmail,
                                        String certFilename,
                                        String certPassword,
                                        LocalDateTime expireTime)
      throws IOException {
        /* Load pre-authorized user credentials from the environment.
           TODO(developer) - See https://developers.google.com/identity for
            guides on implementing OAuth2 for your application. */
    GoogleCredentials credentials = GoogleCredentials.getApplicationDefault()
        .createScoped(GmailScopes.GMAIL_SETTINGS_SHARING);
    HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(
        credentials);

    // Create the gmail API client
    Gmail service = new Gmail.Builder(new NetHttpTransport(),
        GsonFactory.getDefaultInstance(),
        requestInitializer)
        .setApplicationName("Gmail samples")
        .build();

    if (sendAsEmail == null) {
      sendAsEmail = userId;
    }

    ListSmimeInfoResponse listResults;
    try {
      listResults =
          service.users().settings().sendAs().smimeInfo().list(userId, sendAsEmail).execute();
    } catch (IOException e) {
      System.err.printf("An error occurred during list: %s\n", e);
      return null;
    }

    String defaultCertId = null;
    String bestCertId = null;
    LocalDateTime bestCertExpire = LocalDateTime.MIN;

    if (expireTime == null) {
      expireTime = LocalDateTime.now();
    }
    if (listResults != null && listResults.getSmimeInfo() != null) {
      for (SmimeInfo smimeInfo : listResults.getSmimeInfo()) {
        String certId = smimeInfo.getId();
        boolean isDefaultCert = smimeInfo.getIsDefault();
        if (isDefaultCert) {
          defaultCertId = certId;
        }
        LocalDateTime exp =
            LocalDateTime.ofInstant(
                Instant.ofEpochMilli(smimeInfo.getExpiration()), ZoneId.systemDefault());
        if (exp.isAfter(expireTime)) {
          if (exp.isAfter(bestCertExpire)) {
            bestCertId = certId;
            bestCertExpire = exp;
          }
        } else {
          if (isDefaultCert) {
            defaultCertId = null;
          }
        }
      }
    }
    if (defaultCertId == null) {
      String defaultId = bestCertId;
      if (defaultId == null && certFilename != null) {
        SmimeInfo smimeInfo = CreateSmimeInfo.createSmimeInfo(certFilename,
            certPassword);
        SmimeInfo insertResults = InsertSmimeInfo.insertSmimeInfo(userId,
            sendAsEmail,
            smimeInfo);
        if (insertResults != null) {
          defaultId = insertResults.getId();
        }
      }

      if (defaultId != null) {
        try {
          service.users().settings().sendAs().smimeInfo().setDefault(userId, sendAsEmail, defaultId)
              .execute();
          return defaultId;
        } catch (IOException e) {
          System.err.printf("An error occured during setDefault: %s", e);
        }
      }
    } else {
      return defaultCertId;
    }

    return null;
  }
}
```

### Python

```
from datetime import datetime

import create_smime_info
import google.auth
import insert_smime_info
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def update_smime_cert(
    user_id, send_as_email, cert_filename, cert_password, expire_dt
):
  """Update S/MIME certificates for the user.

  First performs a lookup of all certificates for a user.  If there are no
  certificates, or they all expire before the specified date/time, uploads the
  certificate in the specified file.  If the default certificate is expired or
  there was no default set, chooses the certificate with the expiration furthest
  into the future and sets it as default.

  Args:
    user_id: User's email address.
    send_as_email: The "send as" email address, or None if it should be the same
        as user_id.
    cert_filename: Name of the file containing the S/MIME certificate.
    cert_password: Password for the certificate file, or None if the file is not
        password-protected.
    expire_dt: DateTime object against which the certificate expiration is
      compared.  If None, uses the current time.

  Returns:
    The ID of the default certificate.

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  if not send_as_email:
    send_as_email = user_id

  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)

    # pylint: disable=maybe-no-member
    results = (
        service.users()
        .settings()
        .sendAs()
        .smimeInfo()
        .list(userId=user_id, sendAsEmail=send_as_email)
        .execute()
    )

  except HttpError as error:
    print(f"An error occurred during list: {error}")
    return None

  default_cert_id = None
  best_cert_id = (None, datetime.datetime.fromtimestamp(0))

  if not expire_dt:
    expire_dt = datetime.datetime.now()
  if results and "smimeInfo" in results:
    for smime_info in results["smimeInfo"]:
      cert_id = smime_info["id"]
      is_default_cert = smime_info["isDefault"]
      if is_default_cert:
        default_cert_id = cert_id
      exp = datetime.datetime.fromtimestamp(smime_info["expiration"] / 1000)
      if exp > expire_dt:
        if exp > best_cert_id[1]:
          best_cert_id = (cert_id, exp)
      else:
        if is_default_cert:
          default_cert_id = None

  if not default_cert_id:
    default_id = best_cert_id[0]
    if not default_id and cert_filename:
      create_smime_info.create_smime_info(
          cert_filename=cert_filename, cert_password=cert_password
      )
      results = insert_smime_info.insert_smime_info()
      if results:
        default_id = results["id"]

    if default_id:
      try:
        # pylint: disable=maybe-no-member
        service.users().settings().sendAs().smimeInfo().setDefault(
            userId=user_id, sendAsEmail=send_as_email, id=default_id
        ).execute()
        return default_id
      except HttpError as error:
        print(f"An error occurred during setDefault: {error}")
  else:
    return default_cert_id

  return None

if __name__ == "__main__":
  update_smime_cert(
      user_id="xyz",
      send_as_email=None,
      cert_filename="xyz",
      cert_password="xyz",
      expire_dt=None,
  )
```

## Related topics

- [Manage aliases and signatures with the Gmail API](./alias_and_signature_settings.md)
- [Choose Gmail API scopes](../auth/scopes.md)
- [Turn on hosted S/MIME for message encryption](https://knowledge.workspace.google.com/admin/gmail/advanced/turn-on-hosted-s-mime-for-message-encryption)
