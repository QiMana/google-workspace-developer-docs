---
source: https://developers.google.com/workspace/guides/developer-tools
root: workspace
fetched_at: 2026-04-23T15:30:06.231Z
---

# Google Workspace Developer Tools

The Google Workspace developer tools provide several components to enhance your development experience, including an IDE extension, Gemini CLI extensions, and a Model Context Protocol (MCP) server.

## Use the Google Workspace IDE extension

The Google Workspace IDE extension provides intelligent OAuth2 scope linting, autocomplete, and inline documentation directly in your IDE and works with [Antigravity](https://antigravity.google/), [Firebase Studio](https://firebase.studio/), [Visual Studio Code](https://code.visualstudio.com/) and other IDEs.

To install the Google Workspace IDE extension, you can download it from the [Open VSX Registry](https://open-vsx.org/extension/google-workspace/google-workspace-developer-tools), or use the following instructions:

### User interface

1. In your IDE, open the **Extensions** view.
2. Search for **Google Workspace Developer Tools**.
3. Click **Install**.

### CLI

Install from the command line with the corresponding IDE:

```
code --install-extension google-workspace.google-workspace-developer-tools
```

## Add the Gemini CLI extension for Google Workspace development

[Gemini CLI](https://geminicli.com/) lets you query and edit large codebases, generate apps from images or PDFs, and automate complex workflows—all from your terminal.

Install the following extension to enhance your Google Workspace development workflow and automatically include the [Google Workspace Developer MCP](#mcp) server:

```
gemini extensions install \
  "https://github.com/googleworkspace/developer-tools"
```

Apps Script developers can install the [CLASP](https://developers.google.com/apps-script/guides/clasp) extension:

```
gemini extensions install \
  "https://github.com/google/clasp"
```

## Use Model Context Protocol (MCP) servers for Google Workspace development

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is a standardized open protocol that provides context to LLMs and AI agents so that they can return better quality information in multi-turn conversations.

Google Workspace has an MCP server that provides tools for an LLM to access and search developer documentation. You can use this server when you're building or using AI agents to do any of the following

- Retrieve up-to-date information about Google Workspace APIs and services.
- Fetch official Google Workspace documentation and snippets.

To use the server, add this server to your MCP client configuration:

- For [Gemini Code Assist](https://codeassist.google/), add the following to your `settings.json` file:
	```
	{
	 "mcpServers": {
	   "workspace-developer": {
	     "httpUrl": "https://workspace-developer.goog/mcp",
	     "trust": true
	   },
	 }
	}
	```
- For [Gemini CLI](https://geminicli.com/extensions/), run the following command from your terminal to add this server as an extension:
	```
	gemini extensions install https://github.com/googleworkspace/developer-tools
	```

To improve the output from the server, add rules that instruct the LLM to use the server when working with Google Workspace APIs. For example, when using the server as a Gemini CLI extension, add the following rule to the [`GEMINI.md`](https://geminicli.com/docs/get-started/configuration/#example-context-file-content-eg-geminimd) file:

```
Always use the \`workspace-developer\` tools when using Google Workspace APIs.
```

## Related topics

- [Learn how to use Large Language Models (LLMs) to develop on Google Workspace](https://developers.google.com/workspace/guides/build-with-llms)
- [Explore other Google Workspace resources](https://developers.google.com/resources)
