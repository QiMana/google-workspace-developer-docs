---
source: https://developers.google.com/workspace/guides/build-with-llms
root: workspace
fetched_at: 2026-04-23T15:30:06.171Z
---

# Use Large Language Models (LLMs) to develop on Google Workspace

This page provides an overview of best practices and recommended tools for working with Large Language Models (LLMs) to develop solutions for Google Workspace.

When developing on Google Workspace, LLMs can help you in the following ways:

- Generate or troubleshoot code for calling Google Workspace APIs.
- Build a solution based on the latest Google Workspace developer documentation.
- Access Google Workspace resources from the command line or your integrated development environment (IDE).

## Use a Model Context Protocol (MCP) for Google Workspace development

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

## Use AI code assistants

We recommend the following AI code assist tools to incorporate into your workflow for Google Workspace development:

- [Google AI Studio](https://ai.google.dev/aistudio): Generate code for your Google Workspace solutions, including code for [Apps Script](https://developers.google.com/apps-script) projects.
- [Gemini Code Assist](https://developers.google.com/gemini-code-assist/docs/overview): Get AI-powered assistance in your IDE from the Gemini 2.5 model.

## Related topics

- [Explore Google Workspace developer tools](https://developers.google.com/workspace/guides/developer-tools)
- [Build with AI for Google Workspace](https://developers.google.com/workspace/guides/ai-overview)
- [Extend the Google Workspace UI](https://developers.google.com/workspace/extend)
- [Gemini for Google Cloud overview](https://cloud.google.com/gemini/docs/overview)
- [Read documents while coding with Gemini Code Assist](https://developers.google.com/workspace/docs/api/how-tos/read-docs-gemini-tool)
