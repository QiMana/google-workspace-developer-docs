---
source: https://developers.google.com/workspace/meet/overview
root: workspace
fetched_at: 2026-04-23T15:31:11.474Z
---

# Google Meet SDK and API overview

The Google Meet SDK and API empower developers to interact with Meet. You can programmatically integrate Meet into your product or use your product in Meet.

## Meet SDKs and APIs

There are several ways to implement solutions for and integrate with Google Meet:

- [Google Meet add-ons SDK for Web](https://developers.google.com/workspace/meet/add-ons/guides/overview): Embed your app into Meet as an add-on where users can discover, share, and collaborate in the app without leaving Meet. You can also synchronize content in real-time and provide shared controls for users to use from your app.
- [Google Meet REST API](https://developers.google.com/workspace/meet/api/guides/overview): Create and manage meetings within your app, and retrieve data from a conference.
- [Google Meet Media API](https://developers.google.com/workspace/meet/media-api/guides/overview) (Developer Preview): Access raw audio and video streams during a meeting in Meet.

The following diagram helps you choose the correct endpoint for the problem you're trying to solve:

![SDK and API overview](https://developers.google.com/static/workspace/meet/images/work-with-meet-sdk-api5.svg)

## What's the difference between an SDK and API?

The SDK and API are two tools that you can use when developing for Meet. Essentially, an SDK and API share similar traits and they let you increase your app's capabilities.

### SDK

A software development kit (SDK) are tools to build software on a specific platform, operating system, or programming language. An SDK often includes compilers, code libraries, debuggers, documentation, tutorials, code samples, and at least one API library to facilitate communication.

SDKs provide several benefits:

- They include everything developers need to build and run software, allowing software to be constructed in a standardized way.
- Creates faster development cycles as the SDK includes prebuilt components and libraries that allow for app development.
- Contains built-in information such as documentation and tutorials allowing developers to build, test, and deploy apps.
- Controls costs by reducing app development time and resources.

### API

An application programming interface (API) aids communication between two platforms by allowing developers to build upon the service offered in the API. The API, either within an SDK or as standalone, uses predetermined protocols to specify how data should be exchanged. APIs abstract away the complexities of connecting to services to make integrations between apps possible.

An API usually consists of the following:

- The interface: Either a Web API or Web Service API (which is an application processing interface between a web server and web browser accessed directly through a keyword) or a REST API (which is a stateless interface used to indirectly access plain data through HTTP functions like GET, PATCH, DELETE).
- Technical references and documentation: The reference specifications and guide documentation that explains how to use the API.

APIs provide several benefits:

- Integration of different software systems for stronger products.
- Increased development time as you reuse your existing codebase.
- Updates can be applied at the API level instead of redeploying all the code.
- Encourages new users to discover your products which can increase business opportunities.

### Choose between an SDK and API

SDKs and APIs make the software development process more efficient and collaborative. While an SDK often includes an API, both tools can work together.

Review the following table on when to use each tool:

|  | SDK | API |
| --- | --- | --- |
| **Description** | Toolkit to build software on a specific platform, operating system, or programming language. | Aids communication between two platforms. |
| **How it works** | Install before developing your app. | Obtain API key to make API requests. |
| **Function** | Create apps or APIs. | Expand the capabilities of your apps to connect with existing systems. |
| **Use case** | When you need platform-specific tools to write code faster. | When you want to build on capabilities written by another developer. |
| **Platform** | Language and platform specific. | Cross-platform communication. |
