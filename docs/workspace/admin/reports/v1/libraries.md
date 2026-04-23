---
source: https://developers.google.com/workspace/admin/reports/v1/libraries
root: workspace
fetched_at: 2026-04-23T15:24:38.193Z
---

# Install client libraries

The Reports API is built on HTTP and JSON, so any standard HTTP client can send requests to it and parse the responses.

However, the Google APIs client libraries provide better language integration, improved security, and support for making calls that require user authorization. The client libraries are available in a number of programming languages; by using them you can avoid the need to manually set up HTTP requests and parse the responses.

### Go

Get the latest [Admin SDK API client library for Go](https://github.com/google/google-api-go-client). Read the client library's [developer's guide](https://github.com/google/google-api-go-client).

### Java

This page contains information about getting started with the Admin SDK API by using the Google API Client Library for Java. For more information, see the following documentation:

- Browse the [Javadoc reference for the Admin SDK API](https://googleapis.dev/java/google-api-services-admin/latest/).
- Read the [Developer's Guide for the Google API Client Library for Java](https://github.com/googleapis/google-api-java-client/).

## Add the client library to your project

Select your build environment (Maven or Gradle) from the following tabs:

Add the following to your `pom.xml` file:

<iframe src="https://developers.google.com/frame/workspace/admin/reports/v1/libraries_b424916cec4855c7567770860dff30f6a2132c94e8ed464de2b184cf8c32dd8b.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe>

See [all versions available on the Maven Central Repository](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.google.apis%22%20AND%20a%3A%22google-api-services-admin%22).

Add the following to your `build.gradle` file:

<iframe src="https://developers.google.com/frame/workspace/admin/reports/v1/libraries_9a7246b102486930e78c4dfaafd061852abfbd9b2977dd0891681f9d7e596ec6.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe>

See [all versions available on the Maven Central Repository](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.google.apis%22%20AND%20a%3A%22google-api-services-admin%22).

### JavaScript

Read the client library's [developer's guide](https://developers.google.com/api-client-library/javascript/start/start-js).

### .NET

This page contains information about getting started with the Admin SDK API by using the Google API Client Library for.NET. For more information, see the following documentation:

- Browse the [.NET reference documentation for the Admin SDK API](https://googleapis.dev/dotnet/Google.Apis/latest/api/Google.Apis.html).
- Read the [Developer's guide for the Google API Client Library for.NET](https://developers.google.com/api-client-library/dotnet/get_started).

## Downloading the library

Install the NuGet package: [Google.Apis](https://www.nuget.org/packages/Google.Apis).

### Node.js

Get the latest [Admin SDK API client library for Node.js](https://github.com/google/google-api-nodejs-client/). Read the client library's [developer's guide](https://github.com/google/google-api-nodejs-client/).

### Obj-C

Get the latest [Admin SDK API client library for Objective-C](https://github.com/google/google-api-objectivec-client-for-rest). Read the client library's [developer's guide](https://github.com/google/google-api-objectivec-client-for-rest/wiki).

### PHP

Get the latest [Admin SDK API client library for PHP](https://github.com/google/google-api-php-client). Read the client library's [developer's guide](https://developers.google.com/api-client-library/php).

### Python

This page contains information about getting started with the Admin SDK API by using the Google API Client Library for Python (v1/v2). For more information, see the following documentation:

- Browse the [PyDoc reference for the Admin SDK API](https://googleapis.github.io/google-api-python-client/docs/dyn/admin_reports_v1.html).
- Read the [Developer's guide for the Google API Client Library for Python (v1/v2)](https://developers.google.com/api-client-library/python).

## System requirements

- Operating systems:
	- Linux
		- macOS X
		- Windows
- [The v1 client library requires Python 2.7 or higher. The v2 client library requires 3.7 or higher.](http://python.org/download/)

## Install the client library

You can either use a package manager or manually download and install the Python client library:

### Managed install

Use pip or setuptools to manage your installation. You might need to run `sudo` first.

- [pip](http://pypi.python.org/pypi/pip) (preferred):
	```
	pip install --upgrade google-api-python-client
	```
- [Setuptools](http://pypi.python.org/pypi/setuptools):
	```
	easy_install --upgrade google-api-python-client
	```

### Manual install

1. [Download the latest client library for Python](https://pypi.python.org/pypi/google-api-python-client/).
2. Unpack the code.
3. Install:
	```
	python setup.py install
	```

### App Engine

Because the Python client libraries aren't installed in the [App Engine Python runtime environment](https://cloud.google.com/appengine/docs/python/), you must [copy them into your application](https://cloud.google.com/appengine/docs/python/tools/libraries27#vendoring) just like third-party libraries.

### Ruby

This page contains information about getting started with the Admin SDK API by using the Google API Client Library for Ruby. For more information, see the following documentation:

- Read the [Get started guide for the Google API Client Library for Ruby](https://developers.google.com/api-client-library/ruby/start/get_started).

## Install the google-api-client gem

Depending on your system, you might need to prepend these commands with `sudo`.

If you haven't installed the Google API Client Library for Ruby before, install by using `RubyGems`:

```
gem install google-api-client
```

If you already have the gem installed, update to the latest version:

```
gem update -y google-api-client
```

## Get started with the Google API Client Library for Ruby

To learn how to make your first request, see the [Get started guide](https://developers.google.com/api-client-library/ruby/start/get_started).
