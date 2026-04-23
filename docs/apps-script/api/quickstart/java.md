---
source: https://developers.google.com/apps-script/api/quickstart/java
root: apps-script
fetched_at: 2026-04-23T15:18:09.598Z
---

# Java quickstart

## Page Summary

- This quickstart guides you through creating a Java command-line application that interacts with the Google Apps Script API using simplified authentication suitable for testing.
- To follow along, you need Java 11+, Gradle 7.0+, a Google Cloud project, and a Google account with Google Drive enabled.
- The setup process involves enabling the Google Apps Script API in your Google Cloud project, configuring the OAuth consent screen, and authorizing credentials for a desktop application by downloading a `credentials.json` file.
- You will prepare your workspace by creating a project structure and build file, then set up the sample code in a Java file that includes logic to create a new script project and upload files.
- Running the sample for the first time will prompt you to authorize access, and subsequent runs will not require reauthorization as the information is stored locally.

Create a Java command-line application that makes requests to the Google Apps Script API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../workspace/guides/auth-overview.md) before [choosing the access credentials](../../../workspace/guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.

## Objectives

- Set up your environment.
- Set up the sample.
- Run the sample.

## Prerequisites

- Java 11 or greater.
- [Gradle 7.0 or greater](https://gradle.org/install/).
- [A Google Cloud project](../../../workspace/guides/create-project.md).
- A Google account with Google Drive enabled.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Apps Script API.
	[Enable the API](https://console.cloud.google.com/apis/enableflow?apiid=script.googleapis.com)

### Configure the OAuth consent screen

If you're using a new Google Cloud project to complete this quickstart, configure the OAuth consent screen. If you've already completed this step for your Cloud project, skip to the next section.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
1. Under **App Information**, in **App name**, enter a name for the app.
	2. In **User support email**, choose a support email address where users can contact you if they have questions about their consent.
	3. Click **Next**.
	4. Under **Audience**, select **Internal**.
	5. Click **Next**.
	6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
	7. Click **Next**.
	8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
	9. Click **Continue**.
	10. Click **Create**.
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../../workspace/guides/configure-oauth-consent.md) guide.

### Authorize credentials for a desktop application

To authenticate end users and access user data in your app, you need to create one or more OAuth 2.0 Client IDs. A client ID is used to identify a single app to Google's OAuth servers. If your app runs on multiple platforms, you must create a separate client ID for each platform.
1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Desktop app**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."
6. Save the downloaded JSON file as `credentials.json`, and move the file to your working directory.

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
	mainClassName = 'AppsScriptQuickstart'
	sourceCompatibility = 11
	targetCompatibility = 11
	version = '1.0'
	repositories {
	    mavenCentral()
	}
	dependencies {
	    implementation 'com.google.api-client:google-api-client:2.0.0'
	    implementation 'com.google.oauth-client:google-oauth-client-jetty:1.34.1'
	    implementation 'com.google.apis:google-api-services-script:v1-rev20220323-2.0.0'
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
	import com.google.api.services.script.Script;
	import com.google.api.services.script.model.Content;
	import com.google.api.services.script.model.CreateProjectRequest;
	import com.google.api.services.script.model.File;
	import com.google.api.services.script.model.Project;
	import java.io.FileNotFoundException;
	import java.io.IOException;
	import java.io.InputStream;
	import java.io.InputStreamReader;
	import java.security.GeneralSecurityException;
	import java.util.Arrays;
	import java.util.Collections;
	import java.util.List;
	public class AppsScriptQuickstart {
	  private static final String APPLICATION_NAME = "Apps Script API Java Quickstart";
	  private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
	  private static final String TOKENS_DIRECTORY_PATH = "tokens";
	  /**
	   * Global instance of the scopes required by this quickstart.
	   * If modifying these scopes, delete your previously saved credentials folder at /secret.
	   */
	  private static final List<String> SCOPES =
	      Collections.singletonList("https://www.googleapis.com/auth/script.projects");
	  private static final String CREDENTIALS_FILE_PATH = "/credentials.json";
	  /**
	   * Creates an authorized Credential object.
	   *
	   * @param HTTP_TRANSPORT The network HTTP Transport.
	   * @return An authorized Credential object.
	   * @throws IOException If the credentials.json file cannot be found.
	   */
	  private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT)
	      throws IOException {
	    // Load client secrets.
	    InputStream in = AppsScriptQuickstart.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
	    if (in == null) {
	      throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
	    }
	    GoogleClientSecrets clientSecrets =
	        GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
	    // Build flow and trigger user authorization request.
	    GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
	        HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
	        .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
	        .setAccessType("offline")
	        .build();
	    LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
	    return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
	  }
	  public static void main(String... args) throws IOException, GeneralSecurityException {
	    // Build a new authorized API client service.
	    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
	    Script service =
	        new Script.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
	            .setApplicationName(APPLICATION_NAME)
	            .build();
	    Script.Projects projects = service.projects();
	    // Creates a new script project.
	    Project createOp = projects.create(new CreateProjectRequest().setTitle("My Script")).execute();
	    // Uploads two files to the project.
	    File file1 = new File()
	        .setName("hello")
	        .setType("SERVER_JS")
	        .setSource("function helloWorld() {\n  console.log(\"Hello, world!\");\n}");
	    File file2 = new File()
	        .setName("appsscript")
	        .setType("JSON")
	        .setSource("{\"timeZone\":\"America/New_York\",\"exceptionLogging\":\"CLOUD\"}");
	    Content content = new Content().setFiles(Arrays.asList(file1, file2));
	    Content updatedContent = projects.updateContent(createOp.getScriptId(), content).execute();
	    // Logs the project URL.
	    System.out.printf("https://script.google.com/d/%s/edit\n", updatedContent.getScriptId());
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
	Your Java application runs and calls the Google Apps Script API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](../../../workspace/explore.md)
- [Apps Script API reference documentation](../reference/rest.md)
- [Google APIs Client for Java documentation](https://developers.google.com/api-client-library/java)
- [Google Apps Script API Javadoc documentation](https://googleapis.dev/java/google-api-services-script/latest/index.html)
