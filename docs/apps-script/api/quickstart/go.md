---
source: https://developers.google.com/apps-script/api/quickstart/go
root: apps-script
fetched_at: 2026-04-23T15:18:09.875Z
---

# Go quickstart

## Page Summary

- This quickstart guides you through creating a Go command-line application that interacts with the Google Apps Script API.
- The guide covers setting up your development environment, configuring the OAuth consent screen and credentials, and preparing your workspace with necessary Go modules.
- You will set up a sample Go file with provided code that handles authentication and interacts with the Apps Script API to create and update a script project.
- Running the sample involves building and executing the Go file, which will guide you through the authorization process the first time it's run.

Create a Go command-line application that makes requests to the Google Apps Script API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

This quickstart uses Google Workspace's recommended API client libraries to handle some details of the authentication and authorization flow.

## Objectives

- Set up your environment.
- Set up the sample.
- Run the sample.

## Prerequisites

- Latest version of [Go](https://golang.org/).
- Latest version of [Git](https://git-scm.com/).
- [A Google Cloud project](https://developers.google.com/workspace/guides/create-project).
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

1. Create a working directory:
	```
	mkdir quickstart
	```
2. Change to the working directory:
	```
	cd quickstart
	```
3. Initialize the new module:
	```
	go mod init quickstart
	```
4. Get the Google Apps Script API Go client library and OAuth2.0 package:
	```
	go get google.golang.org/api/script/v1
	go get golang.org/x/oauth2/google
	```

## Set up the sample

1. In your working directory, create a file named `quickstart.go`.
2. In the file, paste the following code:
	```
	package main
	import (
	    "context"
	    "encoding/json"
	    "fmt"
	    "log"
	    "net/http"
	    "os"
	    "golang.org/x/oauth2"
	    "golang.org/x/oauth2/google"
	    "google.golang.org/api/option"
	    "google.golang.org/api/script/v1"
	)
	// Retrieve a token, saves the token, then returns the generated client.
	func getClient(config *oauth2.Config) *http.Client {
	    // The file token.json stores the user's access and refresh tokens, and is
	    // created automatically when the authorization flow completes for the first
	    // time.
	    tokFile := "token.json"
	    tok, err := tokenFromFile(tokFile)
	    if err != nil {
	        tok = getTokenFromWeb(config)
	        saveToken(tokFile, tok)
	    }
	    return config.Client(context.Background(), tok)
	}
	// Request a token from the web, then returns the retrieved token.
	func getTokenFromWeb(config *oauth2.Config) *oauth2.Token {
	    authURL := config.AuthCodeURL("state-token", oauth2.AccessTypeOffline)
	    fmt.Printf("Go to the following link in your browser then type the "+
	        "authorization code: \n%v\n", authURL)
	    var authCode string
	    if _, err := fmt.Scan(&authCode); err != nil {
	        log.Fatalf("Unable to read authorization code: %v", err)
	    }
	    tok, err := config.Exchange(context.TODO(), authCode)
	    if err != nil {
	        log.Fatalf("Unable to retrieve token from web: %v", err)
	    }
	    return tok
	}
	// Retrieves a token from a local file.
	func tokenFromFile(file string) (*oauth2.Token, error) {
	    f, err := os.Open(file)
	    if err != nil {
	        return nil, err
	    }
	    defer f.Close()
	    tok := &oauth2.Token{}
	    err = json.NewDecoder(f).Decode(tok)
	    return tok, err
	}
	// Saves a token to a file path.
	func saveToken(path string, token *oauth2.Token) {
	    fmt.Printf("Saving credential file to: %s\n", path)
	    f, err := os.OpenFile(path, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0600)
	    if err != nil {
	        log.Fatalf("Unable to cache oauth token: %v", err)
	    }
	    defer f.Close()
	    json.NewEncoder(f).Encode(token)
	}
	func main() {
	    ctx := context.Background()
	    b, err := os.ReadFile("credentials.json")
	    if err != nil {
	        log.Fatalf("Unable to read client secret file: %v", err)
	    }
	    // If modifying these scopes, delete your previously saved token.json.
	    config, err := google.ConfigFromJSON(b, "https://www.googleapis.com/auth/script.projects")
	    if err != nil {
	        log.Fatalf("Unable to parse client secret file to config: %v", err)
	    }
	    client := getClient(config)
	    srv, err := script.NewService(ctx, option.WithHTTPClient(client))
	    if err != nil {
	        log.Fatalf("Unable to retrieve Script client: %v", err)
	    }
	    req := script.CreateProjectRequest{Title: "My Script"}
	    createRes, err := srv.Projects.Create(&req).Do()
	    if err != nil {
	        // The API encountered a problem.
	        log.Fatalf("The API returned an error: %v", err)
	    }
	    content := &script.Content{
	        ScriptId: createRes.ScriptId,
	        Files: []*script.File{{
	            Name:   "hello",
	            Type:   "SERVER_JS",
	            Source: "function helloWorld() {\n  console.log('Hello, world!');}",
	        }, {
	            Name: "appsscript",
	            Type: "JSON",
	            Source: "{\"timeZone\":\"America/New_York\",\"exceptionLogging\":" +
	                "\"CLOUD\"}",
	        }},
	    }
	    updateContentRes, err := srv.Projects.UpdateContent(createRes.ScriptId,
	        content).Do()
	    if err != nil {
	        // The API encountered a problem.
	        log.Fatalf("The API returned an error: %v", err)
	    }
	    log.Printf("https://script.google.com/d/%v/edit", updateContentRes.ScriptId)
	}
	```

## Run the sample

1. In your working directory, build and run the sample:
	```
	go run quickstart.go
	```
2. The first time you run the sample, it prompts you to authorize access:
	1. If you're not already signed in to your Google Account, sign in when prompted. If you're signed in to multiple accounts, select one account to use for authorization.
		2. Click **Accept**.
	Your Go application runs and calls the Google Apps Script API.
	Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

## Next steps

- [Try the Google Workspace APIs in the APIs explorer](https://developers.google.com/workspace/explore)
