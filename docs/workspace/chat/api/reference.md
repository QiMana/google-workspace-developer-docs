---
source: https://developers.google.com/workspace/chat/api/reference
root: workspace
fetched_at: 2026-04-23T15:24:59.791Z
---

# Google Chat API overview

## Page Summary

- This page offers guidance on utilizing the Google Chat API and navigating its reference documentation, including gRPC and REST interfaces.
- Developers are encouraged to use the provided client libraries for Python, Java, Node.js, or the Advanced Chat service for Google Apps Script.
- Type, method, and field names may vary slightly depending on whether you are using client libraries, gRPC, or REST, with details provided on their respective conventions.
- The Google Chat API is built upon protocol buffers, specifically proto3, which may require a basic understanding for certain request and response fields.
- Stable API version v1 is currently available, with access to developer preview features obtainable through the Developer Preview Program.

This page provides an overview of how to use Google Chat API and its reference documentation.

Google Chat API has both [gRPC](./reference/rpc.md) and [REST](./reference/rest.md) interfaces, and [client libraries](../libraries.md) that support both. Optionally, if the provided client libraries don't meet your needs, you can write your own client libraries that use the gRPC or REST interface.

## Client libraries

The recommended way for most developers to call the Google Chat API is with our officially supported [Cloud Client Libraries](../libraries.md) for your preferred language, like Python, Java, or Node.js.

If you're coding with Google Apps Script, use the [Advanced Chat service](../../../apps-script/advanced/chat.md) instead of installing a client library.

## Type, method, and field names

Depending on whether you're using client libraries, gRPC, or REST, the type, method, and field names for the Google Chat API vary somewhat:

- Cloud Client Libraries are arranged by gRPC services and their methods. Google API Client Libraries are arranged as services that contain objects or classes that correspond with REST resources, which also contain corresponding methods.
- gRPC is arranged by services and their methods.
- REST is arranged by resource hierarchies and their methods.
- gRPC field names use snake case.
- REST field names use camel case, though the API service will accept either camel case or snake case.
- Client library field names use either title case, camel case or snake case, depending on which name is idiomatic for the language.

## Protocol buffers

Whether you are using client libraries, REST, or gRPC, the underlying service is defined using [protocol buffers](https://developers.google.com/protocol-buffers). In particular, the service uses [proto3](https://developers.google.com/protocol-buffers/docs/proto3).

When calling the API, some request or response fields can require a basic understanding of [protocol buffer well-known types](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf).

In addition, when calling the REST API, the [default value](https://developers.google.com/protocol-buffers/docs/proto3#default) behavior for protocol buffers may result in missing fields in a JSON response. These fields are set to the default value, so they are not included in the response.

## API versions

The following API versions are available:

- **v1**: Stable.

## Developer Preview

In the documentation, you might see API methods or fields that are only available through the Developer Preview Program. To test and preview and offer feedback on the latest preview features, join the [Developer Preview Program](../../preview.md).

## Related topics

- [Call the Google Chat API](../overview.md)
