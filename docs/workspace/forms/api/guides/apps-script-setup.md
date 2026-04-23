---
source: https://developers.google.com/workspace/forms/api/guides/apps-script-setup
root: workspace
fetched_at: 2026-04-23T15:28:42.398Z
---

# Set up an Apps Script project

Setting up an Apps Script project to call the Google Forms API directly through a REST call requires a few steps. Assuming you have already configured a Google Cloud project, do the following:

1. Create a new Apps Script project.
2. Change the associated Google Cloud project number to match the project you enabled for the Forms API.
3. Edit the Manifest file (`appsscript.json`) to add the necessary OAuth scopes.
4. Add Apps Script code to fetch an OAuth token and make a REST call using the token.

## Create and configure a new Apps Script project

1. Using the same Google Account that you used to configure your Google Cloud project, go to the [Apps Script Dashboard](https://script.google.com/), then click **New project**.
2. Once your project is open, click Project Settings.
3. Select the **Show "appsscript.json" manifest file in editor** checkbox.
4. In the **Google Cloud Platform (Google Cloud) Project** section, click **Change project** and enter the Google Cloud project number that you configured for the Forms API.

Your Apps Script project is now configured to access the Forms API. The next required step is to add the proper OAuth scopes.

## Add OAuth scopes

To generate a properly scoped OAuth token in Apps Script, you need to set the required scopes in the project's manifest file.

1. In the editor, open `appsscript.json`.
2. Add the scopes to the body of the manifest.
	```
	{
	  ...
	"oauthScopes": [
	    "https://www.googleapis.com/auth/script.external_request",
	    "https://www.googleapis.com/auth/drive",
	    "https://www.googleapis.com/auth/drive.readonly",
	    "https://www.googleapis.com/auth/forms.body",
	    "https://www.googleapis.com/auth/forms.body.readonly",
	    "https://www.googleapis.com/auth/forms.responses.readonly"
	  ],
	 ...
	 }
	```
3. Click Save project and correct any syntax errors if needed. Your project should now be able to call the Forms API using a REST call.

## Add Apps Script code to call the API

Before writing the code to call a form, you need to identify a form that you own that has responses and take note of its form ID. The form ID can be found in the URL when editing the form:

`https://docs.google.com/forms/d/<FORM_ID>/edit`

To call the API, you will use an Apps Script `UrlFetchApp` call.

1. Open **Code.gs** and add the following code:
	```
	function callFormsAPI() {
	  console.log("Calling the Forms API!");
	  const formId = "<YOUR_FORM_ID>";
	  // Get OAuth Token
	  const OAuthToken = ScriptApp.getOAuthToken();
	  console.log(\`OAuth token is: ${OAuthToken}\`);
	  const formsAPIUrl = \`https://forms.googleapis.com/v1/forms/${formId}/responses\`;
	  console.log(\`formsAPIUrl is: ${formsAPIUrl}\`);
	  const options = {
	    headers: {
	      Authorization: \`Bearer ${OAuthToken}\`,
	      Accept: "application/json",
	    },
	    method: "get",
	  };
	  const response = UrlFetchApp.fetch(formsAPIUrl, options);
	  console.log(\`Response from forms.responses was: ${response}\`);
	}
	```
2. Replace `YOUR_FORM_ID` with the value that you noted earlier.
	Example: `var formId = 'tL5ygBC8zpbTnTp76JCZdIg80hA-cnpbTnTjnsewCKJH';`
3. Click **Save project** and correct any syntax errors if needed.

## Test the code

1. Click **Run**.
2. Authorize the project as needed using the same Google Account as before.

Once it starts, you should see a response in the **Execution log** similar to this:

```
Execution started
Calling the Forms API!
OAuth token is: ya29.a0ARrdaM8IMjtlv…
formsAPIUrl is: https://forms.googleapis.com/v1beta/forms/…/responses
Response from Forms.responses was: {
"responses": [
    {
      "responseId":"...",
      "createTime": "2021-03-25T01:23:58.146Z",
      "lastSubmittedTime": "2021-03-25T01:23:58.146607Z",
      "answers": {
        "1e9b0ead": {
          "questionId": "1e9b0ead",
          "textAnswers": {
            "answers": [
              {
                "value": "Red"
              }
            ]
          }
        },
        "773ed8f3": {
          "questionId": "773ed8f3",
          "textAnswers": {
            "answers": [
              {
                "value": "Tesla"
              }
            ]
          }
        }
      }
    }
  ]
}
Execution completed
```

## Next steps

Once you've successfully called the API with Apps Script, consult the [reference documentation](https://developers.google.com/workspace/forms/api/reference/rest) and experiment with making other calls to the API.
