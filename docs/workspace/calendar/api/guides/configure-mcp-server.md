---
source: https://developers.google.com/workspace/calendar/api/guides/configure-mcp-server
root: workspace
fetched_at: 2026-04-23T15:24:48.953Z
---

# Configure the Calendar MCP server

Google Calendar offers a remote [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that allows AI agents to securely interact with Google Calendar data. By configuring the Google Calendar MCP server, you enable AI applications like Gemini CLI, Claude, or IDEs to perform actions in Google Calendar.

The Google Calendar MCP server provides a standardized way for AI agents to:

- **Read data**: List calendars, retrieve events, and check availability.
- **Take action**: Create, update, and delete events.
- **Respect security**: Inherit the same permissions and data governance controls as the user.

## Prerequisites

- A Google Cloud project. To create a project, see [Create a project](../../../guides/create-project.md).
- An MCP client, like [Gemini CLI](https://geminicli.com/).
- To run the commands on this page, set up the gcloud CLI in a local development environment by following these steps:
	1. [Install the Google Cloud CLI](https://cloud.google.com/sdk/docs/install). If you installed the gcloud CLI previously, make sure you have the latest version by running `gcloud components update`.
		2. If you're using an external identity provider (IdP), sign in to the gcloud CLI with your federated identity. For more information, see [Sign in to the gcloud CLI with your federated identity](https://docs.cloud.google.com/iam/docs/workforce-log-in-gcloud).
		3. [Initialize the gcloud CLI](https://docs.cloud.google.com/sdk/docs/initializing).

## Configure the Google Calendar MCP server

To use the Google Calendar MCP server, you must enable it in your Google Cloud project and then configure your MCP client to connect to it.

### Enable the APIs

To use the Google Calendar MCP server, you must enable the following API in your Google Cloud project:

- Google Calendar API

### CLI

```
gcloud services enable calendar-json.googleapis.com --project=PROJECT_ID
```

Replace `PROJECT_ID` with your Google Cloud project ID.

### Console

Enable the APIs in the Google Cloud console:

[Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=calendar-json.googleapis.com)

### Enable the MCP services

To enable the MCP components for Google Calendar, you must enable the following service in your Google Cloud project:

- Google Calendar MCP API

### CLI

```
gcloud services enable calendarmcp.googleapis.com --project=PROJECT_ID
```

Replace `PROJECT_ID` with your Google Cloud project ID.

### Console

Enable the MCP services in the Google Cloud console:

[Enable the MCP services](https://console.cloud.google.com/flows/enableapi?apiid=calendarmcp.googleapis.com)

### Set up the OAuth consent screen

The Google Calendar MCP server uses OAuth 2.0 for authentication and authorization. You must configure the OAuth consent screen before you can create an OAuth client ID.

1. In the Google Cloud console, go to **Google Auth Platform** **\>** **Branding**.
	[Go to Branding](https://console.cloud.google.com/auth/branding)
2. If you have already configured the **Google Auth Platform**, you can configure the following OAuth Consent Screen settings in [Branding](https://console.cloud.google.com/auth/branding), [Audience](https://console.cloud.google.com/auth/audience), and [Data Access](https://console.cloud.google.com/auth/scopes). If you see a message that says **Google Auth Platform not configured yet**, click **Get Started**:
	1. Under **App Information**, in **App name**, type `Calendar MCP Server`.
		2. In **User support email**, select your email address or an appropriate Google group.
		3. Click **Next**.
		4. Under **Audience**, select **Internal**. If you can't select **Internal**, select **External**.
		5. Click **Next**.
		6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
		7. Click **Next**.
		8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
		9. Click **Continue**.
		10. Click **Create**.
		11. If you selected **External** for user type, add test users:
		1. Click **Audience**.
				2. Under **Test users**, click **Add users**.
				3. Enter your email address and any other authorized test users, then click **Save**.
3. Click **Data Access** **\>** **Add or Remove Scopes**. A panel appears with a list of scopes for each API that you've enabled in your Google Cloud project.
	1. Under **Manually add scopes**, paste the scopes for the Google Calendar MCP server:
		- `https://www.googleapis.com/auth/calendar.calendarlist.readonly`
				- `https://www.googleapis.com/auth/calendar.events.freebusy`
				- `https://www.googleapis.com/auth/calendar.events.readonly`
		2. Click **Add to Table**.
		3. Click **Update**.
		4. After selecting the scopes required by your app, on the **Data Access** page, click **Save**.

### Configure your MCP client

To add the Google Calendar remote MCP server to your MCP client, follow the instructions for your client.

### Gemini CLI

To add the Google Calendar remote MCP server to your Gemini CLI, add the server configuration to your `settings.json` file.

1. Create an OAuth 2.0 client ID and secret:
	1. In the Google Cloud console, go to **Google Auth Platform** **\>** **Clients** **\>** **Create Client**
		[Go to Create Client](https://console.cloud.google.com//auth/clients/create)
		2. Select **Desktop app** as the application type.
		3. Enter a **Name**.
		4. Click **Create** and copy your **Client ID** and **Client Secret**.
2. Open or create the configuration file `~/.gemini/settings.json`.
3. Add the `mcpServers` configuration to `settings.json`:
	```
	{
	  "mcpServers": {
	    "calendar": {
	      "httpUrl": "https://calendarmcp.googleapis.com/mcp/v1",
	      "oauth": {
	        "enabled": true,
	        "clientId": "OAUTH_CLIENT_ID",
	        "clientSecret": "OAUTH_CLIENT_SECRET",
	        "scopes": [
	          "https://www.googleapis.com/auth/calendar.calendarlist.readonly",
	          "https://www.googleapis.com/auth/calendar.events.freebusy",
	          "https://www.googleapis.com/auth/calendar.events.readonly"
	        ]
	      }
	    }
	  }
	}
	```
	Replace the following:
	- `OAUTH_CLIENT_ID`: The client ID you created.
		- `OAUTH_CLIENT_SECRET`: The client secret you created.
4. Save `settings.json`.
5. Start Gemini CLI:
	```
	gemini
	```
6. In Gemini CLI, authenticate with the MCP server by running the following command:
	```
	/mcp auth calendar
	```
	1. When prompted, press `1` to open an authentication page in your browser. If you're working over SSH, follow the instructions in the CLI.
		2. Sign in to your Google Account.
		3. Review the requested OAuth scopes and click **Allow**.
		4. A message appears confirming authentication was successful.
7. In Gemini CLI, run `/mcp list` to view your configured MCP servers and their tools.
	The response is similar to the following:
	```
	🟢 calendar - Ready (8 tools)
	  Tools:
	  - create_event
	  - delete_event
	  - get_event
	  - list_calendars
	  - list_events
	  - respond_to_event
	  - suggest_time
	  - update_event
	```

The remote MCP server is ready to use in Gemini CLI.

### Claude

To use the Google Calendar remote MCP server with Claude.ai or Claude Desktop, you must have the Claude Enterprise, Pro, Max, or Team plan.

To add the Google Calendar remote MCP server to Claude, configure a custom connector with an OAuth client ID and secret.

1. Create an OAuth 2.0 client ID and secret:
	1. In the Google Cloud console, go to **Google Auth Platform** **\>** **Clients** **\>** **Create Client**
		[Go to Create Client](https://console.cloud.google.com//apis/credentials/oauthclient)
		2. Select **Web application** as the application type.
		3. Enter a **Name**.
		4. In the **Authorized redirect URIs** section, click **\+ Add URI**, and then add `https://claude.ai/api/mcp/auth_callback` in the **URIs** field.
		5. Click **Create** and copy your **Client ID** and **Client Secret**.
2. Configure the MCP server in Claude:
	1. In Claude.ai or Claude Desktop, go to **Settings** (or **Admin settings**) > **Connectors**.
		2. Click **Add custom connector**.
		3. Enter the connection details for the Google Calendar product:
		- **Server name**: `Google Calendar`.
				- **Remote MCP server URL**: `https://calendarmcp.googleapis.com/mcp/v1`
		4. In **Advanced settings**, enter your **OAuth client ID** and **OAuth client secret**.
		5. Click **Add**.

### Others

Many AI applications have ways to connect to a remote MCP server. You typically need to enter details about the server, like its name, endpoints, transport protocol, and authentication method. For the Google Calendar remote MCP server, enter the following:

- **Server name**: `calendar`
- **Server URL**: `https://calendarmcp.googleapis.com/mcp/v1`
- **Transport**: HTTP
- **Authentication**: The Google Calendar remote MCP server uses OAuth 2.0. For details, see [Learn about authentication and authorization](../../../guides/auth-overview.md).

For more details on connecting different types of clients, see [Configure MCP in an AI application](https://docs.cloud.google.com/mcp/configure-mcp-ai-application).

## Test the Google Calendar MCP server

After you configure the MCP client, you can verify the connection by running some test prompts.

Try asking your MCP client the following questions:

- **"When is my next meeting with Ariel?"**
	The client checks your schedule using `calendar.list_events` and details your next meeting with Ariel.

If the tools execute successfully and you receive relevant responses, your Google Calendar MCP server is correctly configured.

## Troubleshooting

If you encounter issues connecting to the MCP server, you can check for errors in the OAuth logs. Ask your administrator to check the **OAuth log events** in the [security investigation tool](https://support.google.com/a/answer/7575955).

## Tool reference

The following tools are available for the Google Calendar MCP server:

- `create_event`
- `delete_event`
- `get_event`
- `list_calendars`
- `list_events`
- `respond_to_event`
- `suggest_time`
- `update_event`

## Important security consideration: Indirect prompt injection

When you expose a language model to untrusted data, there is a risk of an [indirect prompt injection attack](https://en.wikipedia.org/wiki/Prompt_injection). Because MCP clients like Gemini CLI have access to powerful tools and APIs through the Google Calendar MCP server, they can read, modify, and delete data in your Google Account.

To mitigate these risks, follow these best practices:

- **Only use trusted tools.** Never connect Google Calendar MCP server to untrusted or unverified applications.
- **Be cautious with untrusted inputs.** Avoid asking your MCP client to process events or other resources from unverified sources. These inputs may contain hidden instructions that can hijack your session, allowing an attacker to modify, steal, or delete your data.
- **Review all actions.** Always carefully review the actions taken by your AI client on your behalf to ensure they are correct and align with your intentions.

## Related section

- [Configure the Gmail MCP server](../../../gmail/api/guides/configure-mcp-server.md)
- [Configure the Drive MCP server](../../../drive/api/guides/configure-mcp-server.md)
- [Configure the People API MCP server](https://developers.google.com/people/v1/configure-mcp-server)
