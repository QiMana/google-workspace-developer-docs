---
source: https://developers.google.com/workspace/keep/api/guides/java
root: workspace
fetched_at: 2026-04-23T15:30:08.227Z
---

# Java quickstart

Create a Java command-line application that makes requests to the Google Keep API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../guides/auth-overview.md) before [choosing the access credentials](../../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.

## Objectives

- Set up your environment.
- Set up the sample.
- Run the sample.

## Prerequisites

- Java 11 or greater.
- [Gradle 7.0 or greater](https://gradle.org/install/).
- [A Google Cloud project](../../../guides/create-project.md).
- A Google account with Google Keep enabled.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Keep API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=keep.googleapis.com)

### Create a service account

A service account is a special kind of account used by an application, rather than a person. You can use a service account to access data or perform actions by the robot account, or to access data on behalf of Google Workspace or Cloud Identity users. For more information, see [Understanding service accounts](https://cloud.google.com/iam/docs/understanding-service-accounts).

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Click **Create service account**.
3. Fill in the service account details, then click **Create and continue**.
4. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).
5. Click **Continue**.
6. Optional: Enter users or groups that can manage and perform actions with this service account. For more details, refer to [Managing service account impersonation](https://cloud.google.com/iam/docs/impersonating-service-accounts).
7. Click **Done**. Make a note of the email address for the service account.

### gcloud CLI

1. Create the service account:
	```
	gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
	  --display-name="SERVICE_ACCOUNT_NAME"
	```
2. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).

#### Create credentials for a service account

You need to obtain credentials in the form of a public/private key pair. These credentials are used by your code to authorize service account actions within your app.
1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Keys** \> **Add key** \> **Create new key**.
4. Select **JSON**, then click **Create**.
	Your new public/private key pair is generated and downloaded to your machine as a new file. Save the downloaded JSON file as `credentials.json` in your working directory. This file is the only copy of this key. For information about how to store your key securely, see [Managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
5. Click **Close**.

#### Set up domain-wide delegation for a service account

To call APIs on behalf of users in a Google Workspace organization, your service account needs to be granted domain-wide delegation of authority in the Google Workspace Admin console by a super administrator account. For more information, see [Delegating domain-wide authority to a service account](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority).
1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Show advanced settings**.
4. Under "Domain-wide delegation," find your service account's "Client ID." Click Copy to copy the client ID value to your clipboard.
5. If you have super administrator access to the relevant Google Workspace account, click **View Google Workspace Admin Console**, then sign in using a super administrator user account and continue following these steps.
	If you don't have super administrator access to the relevant Google Workspace account, contact a super administrator for that account and send them your service account's Client ID and list of OAuth Scopes so they can complete the following steps in the Admin console.
1. In the Google Admin console, go to Menu \> **Security** \> **Access and data control** \> **API controls**.
	[Go to API controls](https://admin.google.com/ac/owl)
	2. Click **Manage Domain Wide Delegation**.
	3. Click **Add new**.
	4. In the "Client ID" field, paste the client ID that you previously copied.
	5. In the "OAuth Scopes" field, enter a comma-delimited list of the scopes required by your application. This is the same set of scopes you defined when configuring the OAuth consent screen.
	6. Click **Authorize**.

## Prepare the workspace

1. In your working directory, create a new project structure:
	```
	gradle init --type basic
	mkdir -p src/main/java src/main/resources
	```
2. In the `src/main/resources/` directory, copy the `credentials.json` file that you previously downloaded.
3. Open the default `build.gradle` file and replace its contents with the following code:
	```
	apply plugin: 'java'
	apply plugin: 'application'
	mainClassName = 'KeepQuickstart'
	sourceCompatibility = 1.8
	targetCompatibility = 1.8
	version = '1.0'
	sourceCompatibility = 1.8
	repositories {
	    mavenCentral()
	}
	dependencies {
	    implementation 'com.google.api-client:google-api-client:1.23.0'
	    implementation 'com.google.oauth-client:google-oauth-client-jetty:1.23.0'
	    implementation 'com.google.apis:google-api-services-keep:v1-rev20210528-1.31.0'
	}
	```

## Set up the sample

1. In the `src/main/java/` directory, create a new Java file with a name that matches the `mainClassName` value in your `build.gradle` file.
2. Include the following code in your new Java file:
	```
	import com.google.api.client.auth.oauth2.Credential;
	import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
	import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
	import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
	import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
	import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
	import com.google.api.client.http.javanet.NetHttpTransport;
	import com.google.api.client.json.JsonFactory;
	import com.google.api.client.json.gson.GsonFactory;
	import com.google.api.client.util.store.FileDataStoreFactory;
	import com.google.api.services.keep.v1.Keep;
	import com.google.api.services.keep.v1.model.Note;
	import com.google.api.services.keep.v1.model.Section;
	import com.google.api.services.keep.v1.model.TextContent;
	import java.io.FileNotFoundException;
	import java.io.IOException;
	import java.io.InputStream;
	import java.io.InputStreamReader;
	import java.security.GeneralSecurityException;
	import java.util.Collections;
	import java.util.List;
	public class KeepQuickstart {
	  private static final String APPLICATION_NAME = "Google Keep API Java Quickstart";
	  private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
	  /**
	   * Global instance of the scopes required by this quickstart. If modifying these scopes, delete
	   * your previously saved tokens/ folder.
	   */
	  private static final List<String> KEEP_SCOPES =
	      Collections.singletonList("https://www.googleapis.com/auth/keep");
	  private static final String CREDENTIALS_FILE_PATH = "/credentials.json";
	  /**
	   * Creates an authorized Credential object.
	   *
	   * @param HTTP_TRANSPORT The network HTTP Transport.
	   * @return An authorized Credential object.
	   * @throws IOException
	   */
	  private static Credential getOAuthCredentials(final NetHttpTransport HTTP_TRANSPORT)
	      throws IOException {
	    // Load client secrets.
	    InputStream in = KeepQuickstart.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
	    if (in == null) {
	      throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
	    }
	    GoogleClientSecrets clientSecrets =
	        GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
	    // Build flow and trigger user authorization request.
	    GoogleAuthorizationCodeFlow flow =
	        new GoogleAuthorizationCodeFlow.Builder(
	                HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, KEEP_SCOPES)
	            .setDataStoreFactory(new FileDataStoreFactory(new java.io.File("tokens")))
	            .setAccessType("offline")
	            .build();
	    LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
	    return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
	  }
	  public static void main(String... args) throws IOException, GeneralSecurityException {
	    // Build a new authorized API client service.
	    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
	    Keep service =
	        new Keep.Builder(HTTP_TRANSPORT, JSON_FACTORY, getOAuthCredentials(HTTP_TRANSPORT))
	            .setApplicationName(APPLICATION_NAME)
	            .build();
	    Section noteBody =
	        new Section().setText(new TextContent().setText("Finish preparations by tomorrow!"));
	    Note newNote = new Note().setTitle("Customer call next week").setBody(noteBody);
	    // Creates a new text note.
	    service.notes().create(newNote).execute();
	  }
	}
	```

## Run the sample

1. Run the sample:
	```
	gradle run
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, sign in when prompted. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Your Java application runs and calls the Google Keep API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](../../../explore.md)
- [Troubleshoot authentication and authorization issues](../troubleshoot-authentication-authorization.md)
- [Google Keep API reference documentation](../reference/rest.md)
- [Google APIs Client for Java documentation](https://developers.google.com/api-client-library/java)
- [Google Keep API Javadoc documentation](https://googleapis.dev/java/google-api-services-keep/latest/index.html)
