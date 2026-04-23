---
source: https://developers.google.com/workspace/drive/activity/v2/quickstart/java
root: workspace
fetched_at: 2026-04-23T15:27:27.831Z
---

# Java quickstart

Create a Java command-line application that makes requests to the Google Drive Activity API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.

## Objectives

- Set up your environment.
- Set up the sample.
- Run the sample.

## Prerequisites

- Java 11 or greater.
- [Gradle 7.0 or greater](https://gradle.org/install/).
- [A Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- A Google Account.

## Set up your environment

To complete this quickstart, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Drive Activity API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=driveactivity.googleapis.com)

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](https://developers.google.com/workspace/guides/configure-oauth-consent) guide.

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
	mainClassName = 'DriveActivityQuickstart'
	sourceCompatibility = 11
	targetCompatibility = 11
	version = '1.0'
	repositories {
	    mavenCentral()
	}
	dependencies {
	    implementation 'com.google.api-client:google-api-client:2.0.0'
	    implementation 'com.google.oauth-client:google-oauth-client-jetty:1.34.1'
	    implementation 'com.google.apis:google-api-services-driveactivity:v2-rev20220926-2.0.0'
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
	import com.google.api.client.http.HttpTransport;
	import com.google.api.client.json.JsonFactory;
	import com.google.api.client.json.gson.GsonFactory;
	import com.google.api.client.util.store.FileDataStoreFactory;
	import com.google.api.services.driveactivity.v2.DriveActivityScopes;
	import com.google.api.services.driveactivity.v2.model.*;
	import java.io.FileNotFoundException;
	import java.io.IOException;
	import java.io.InputStream;
	import java.io.InputStreamReader;
	import java.util.AbstractMap;
	import java.util.Arrays;
	import java.util.Iterator;
	import java.util.List;
	import java.util.stream.Collectors;
	public class DriveActivityQuickstart {
	  /**
	   * Application name.
	   */
	  private static final String APPLICATION_NAME = "Drive Activity API Java Quickstart";
	  /**
	   * Directory to store authorization tokens for this application.
	   */
	  private static final java.io.File DATA_STORE_DIR = new java.io.File("tokens");
	  /**
	   * Global instance of the JSON factory.
	   */
	  private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
	  /**
	   * Global instance of the scopes required by this quickstart.
	   *
	   * <p>If modifying these scopes, delete your previously saved tokens/ folder.
	   */
	  private static final List<String> SCOPES =
	      Arrays.asList(DriveActivityScopes.DRIVE_ACTIVITY_READONLY);
	  private static final String CREDENTIALS_FILE_PATH = "/credentials.json";
	  /**
	   * Global instance of the {@link FileDataStoreFactory}.
	   */
	  private static FileDataStoreFactory DATA_STORE_FACTORY;
	  /**
	   * Global instance of the HTTP transport.
	   */
	  private static HttpTransport HTTP_TRANSPORT;
	  static {
	    try {
	      HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
	      DATA_STORE_FACTORY = new FileDataStoreFactory(DATA_STORE_DIR);
	    } catch (Throwable t) {
	      t.printStackTrace();
	      System.exit(1);
	    }
	  }
	  /**
	   * Creates an authorized Credential object.
	   *
	   * @return an authorized Credential object.
	   * @throws IOException
	   */
	  public static Credential authorize() throws IOException {
	    // Load client secrets.
	    InputStream in = DriveActivityQuickstart.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
	    if (in == null) {
	      throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
	    }
	    GoogleClientSecrets clientSecrets =
	        GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
	    // Build flow and trigger user authorization request.
	    GoogleAuthorizationCodeFlow flow =
	        new GoogleAuthorizationCodeFlow.Builder(
	            HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
	            .setDataStoreFactory(DATA_STORE_FACTORY)
	            .setAccessType("offline")
	            .build();
	    Credential credential =
	        new AuthorizationCodeInstalledApp(flow, new LocalServerReceiver())
	            .authorize("user");
	    System.out.println("Credentials saved to " + DATA_STORE_DIR.getAbsolutePath());
	    return credential;
	  }
	  /**
	   * Build and return an authorized Drive Activity client service.
	   *
	   * @return an authorized DriveActivity client service
	   * @throws IOException
	   */
	  public static com.google.api.services.driveactivity.v2.DriveActivity getDriveActivityService()
	      throws IOException {
	    Credential credential = authorize();
	    com.google.api.services.driveactivity.v2.DriveActivity service =
	        new com.google.api.services.driveactivity.v2.DriveActivity.Builder(
	            HTTP_TRANSPORT, JSON_FACTORY, credential)
	            .setApplicationName(APPLICATION_NAME)
	            .build();
	    return service;
	  }
	  public static void main(String[] args) throws IOException {
	    // Build a new authorized API client service.
	    com.google.api.services.driveactivity.v2.DriveActivity service = getDriveActivityService();
	    // Print the recent activity in your Google Drive.
	    QueryDriveActivityResponse result =
	        service.activity().query(new QueryDriveActivityRequest().setPageSize(10)).execute();
	    List<DriveActivity> activities = result.getActivities();
	    if (activities == null || activities.size() == 0) {
	      System.out.println("No activity.");
	    } else {
	      System.out.println("Recent activity:");
	      for (DriveActivity activity : activities) {
	        String time = getTimeInfo(activity);
	        String action = getActionInfo(activity.getPrimaryActionDetail());
	        List<String> actors =
	            activity.getActors().stream()
	                .map(DriveActivityQuickstart::getActorInfo)
	                .collect(Collectors.toList());
	        List<String> targets =
	            activity.getTargets().stream()
	                .map(DriveActivityQuickstart::getTargetInfo)
	                .collect(Collectors.toList());
	        System.out.printf(
	            "%s: %s, %s, %s\n", time, truncated(actors), action, truncated(targets));
	      }
	    }
	  }
	  /**
	   * Returns a string representation of the first elements in a list.
	   */
	  private static String truncated(List<String> array) {
	    return truncatedTo(array, 2);
	  }
	  /**
	   * Returns a string representation of the first elements in a list.
	   */
	  private static String truncatedTo(List<String> array, int limit) {
	    String contents = array.stream().limit(limit).collect(Collectors.joining(", "));
	    String more = array.size() > limit ? ", ..." : "";
	    return "[" + contents + more + "]";
	  }
	  /**
	   * Returns the name of a set property in an object, or else "unknown".
	   */
	  private static <T> String getOneOf(AbstractMap<String, T> obj) {
	    Iterator<String> iterator = obj.keySet().iterator();
	    return iterator.hasNext() ? iterator.next() : "unknown";
	  }
	  /**
	   * Returns a time associated with an activity.
	   */
	  private static String getTimeInfo(DriveActivity activity) {
	    if (activity.getTimestamp() != null) {
	      return activity.getTimestamp();
	    }
	    if (activity.getTimeRange() != null) {
	      return activity.getTimeRange().getEndTime();
	    }
	    return "unknown";
	  }
	  /**
	   * Returns the type of action.
	   */
	  private static String getActionInfo(ActionDetail actionDetail) {
	    return getOneOf(actionDetail);
	  }
	  /**
	   * Returns user information, or the type of user if not a known user.
	   */
	  private static String getUserInfo(User user) {
	    if (user.getKnownUser() != null) {
	      KnownUser knownUser = user.getKnownUser();
	      Boolean isMe = knownUser.getIsCurrentUser();
	      return (isMe != null && isMe) ? "people/me" : knownUser.getPersonName();
	    }
	    return getOneOf(user);
	  }
	  /**
	   * Returns actor information, or the type of actor if not a user.
	   */
	  private static String getActorInfo(Actor actor) {
	    if (actor.getUser() != null) {
	      return getUserInfo(actor.getUser());
	    }
	    return getOneOf(actor);
	  }
	  /**
	   * Returns the type of a target and an associated title.
	   */
	  private static String getTargetInfo(Target target) {
	    if (target.getDriveItem() != null) {
	      return "driveItem:\"" + target.getDriveItem().getTitle() + "\"";
	    }
	    if (target.getDrive() != null) {
	      return "drive:\"" + target.getDrive().getTitle() + "\"";
	    }
	    if (target.getFileComment() != null) {
	      DriveItem parent = target.getFileComment().getParent();
	      if (parent != null) {
	        return "fileComment:\"" + parent.getTitle() + "\"";
	      }
	      return "fileComment:unknown";
	    }
	    return getOneOf(target);
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
	Your Java application runs and calls the Google Drive Activity API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](https://developers.google.com/workspace/explore)
- [Troubleshoot authentication and authorization issues](https://developers.google.com/workspace/drive/activity/v2/troubleshoot-authentication-authorization)
- [Drive Activity API reference documentation](https://developers.google.com/workspace/drive/activity/v2/reference/rest)
- [Google APIs Client for Java documentation](https://developers.google.com/api-client-library/java)
- [Google Drive Activity API Javadoc documentation](https://googleapis.dev/java/google-api-services-driveactivity/latest/index.html)
