---
source: https://developers.google.com/workspace/sites/code
root: workspace
fetched_at: 2026-04-23T15:31:38.856Z
---

# Client Libraries and Sample Code

## Page Summary

- Google provides client libraries for Java and Python to simplify interaction with the Sites Data API, offering tools and abstraction for building queries and handling responses without manual HTTP request management.
- These client libraries are versatile, supporting multiple API versions (currently v1.4) and offering specific extensions for various Google services with Data APIs.
- Sample programs in Java and Python, along with a collection of tutorials, are readily available to guide developers in utilizing the API and client libraries effectively.

Google Data client libraries are available to help you write client applications that use the Sites Data API.

For each language, the client library provides tools and an abstraction layer, letting you construct queries and use response data without having to create HTTP requests or process HTTP responses by hand. Each client library provides classes that correspond to the elements and data types that the API uses. The libraries also provide extensions for specific Google services that have Data APIs.

Client libraries are not tied to a specific version of the API. Client libraries include access to all the versions of the API and let you specify a version to develop against. The API versions supported by each client library are listed in the table below.

## Client Libraries

|  | Latest   Library | API Versions Supported   by the Client Library | Reference Docs | Resources |
| --- | --- | --- | --- | --- |
| **Java** | [Download](http://code.google.com/p/gdata-java-client/downloads/list) | v1.4 | [Javadoc](https://developers.google.com/gdata/javadoc) | - [Getting Started Guide](https://developers.google.com/gdata/articles/java_client_lib) - [Using Eclipse with the Java Client Library](https://developers.google.com/gdata/articles/eclipse) - [Java Client Library Project](https://github.com/google/gdata-java-client) (GitHub) - [Java Language Developer's Guide](./docs/1.0/developers_guide_java.md) |
| **Python** | [Download](http://code.google.com/p/gdata-python-client/downloads/list) | v1.4 | [PyDoc](https://github.com/google/gdata-python-client/tree/master/pydocs) | - [Getting Started Guide](https://developers.google.com/gdata/articles/python_client_lib) - [Python Client Library Project](https://github.com/google/gdata-python-client) (GitHub) - [Python Language Developer's Guide](./docs/1.0/developers_guide_python.md) |

## Sample code

These sample programs demonstrate how to use the API and the client libraries. Use them to help you get started!

- **Java**
	- [Google Sites Import / Export Tool](https://code.google.com/archive/p/google-sites-liberation/)
		- [Command-line sample using the client library](https://github.com/google/gdata-java-client/tree/master/java/sample/sites)
- **Python**
	- [Command-line sample using the client library](https://github.com/google/gdata-python-client/tree/master/samples/sites)
- **Other**
	- [Google Data API Tips Blog](http://gdatatips.blogspot.com/search/label/sites)

## Tutorials

Articles to help you get up and running quickly, debug problems or use your favorite language with Google Data APIs.

- [Eclipse with the Java client library](https://developers.google.com/gdata/articles/eclipse)
- [Google Data on Rails](https://developers.google.com/gdata/articles/gdata_on_rails)
- [Creating a Google Data Gadget](https://developers.google.com/gdata/articles/gdata_gadgets)
- [Using cURL to interact with Google Data services](https://developers.google.com/gdata/articles/using_cURL)
- [Using Proxy Servers with the Google Data client libraries](https://developers.google.com/gdata/articles/proxy_setup)
- [Network Capture Tools for API debugging](https://developers.google.com/gdata/articles/wireshark)
- [Debugging Google Data clients: Exploring Traffic from Within your Program](https://developers.google.com/gdata/articles/debugging_client_libs)

[Back to top](#top_of_page)
