---
source: https://developers.google.com/workspace/chat/libraries
root: workspace
fetched_at: 2026-04-23T15:25:27.687Z
---

# Google Chat API client libraries

Client libraries optimize the developer experience for calling the Google Chat API by reducing the boilerplate code you have to write. This guide introduces the client libraries and explains how to install them.

Chat API has [gRPC](https://cloud.google.com/apis/docs/client-libraries-explained#grpc_apis) and [REST](https://cloud.google.com/apis/docs/client-libraries-explained#resthttp_apis) interfaces, and client libraries that support both. Cloud Client Libraries support gRPC and REST interfaces, Google API Client Libraries only support the REST interface, but you can use both client libraries in the same project. Optionally, if the provided client libraries don't meet your needs, you can write your own client libraries that use the gRPC or REST interface.

To learn more about the types of client libraries Google supports, see [Client libraries explained](https://cloud.google.com/apis/docs/client-libraries-explained).

## Install Cloud Client Libraries (recommended)

[Cloud Client Libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) are the latest and recommended client libraries for calling Chat API. Cloud Client Libraries support both gRPC and REST interfaces.

Chat API provides Cloud Client Libraries for the following languages. Select the language that you want to use:

### Node.js

To install the client library:

```
npm install @google-apps/chat
```

Learn more:

- [GitHub repo](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-chat)
- [Cloud Client Library reference](https://cloud.google.com/nodejs/docs/reference/chat/latest/chat/v1.chatserviceclient)
- [Quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/nodejs)

### Python

To install the client library:

```
python -m venv <your-env>
source <your-env>/bin/activate
pip install google-apps-chat
```

Learn more:

- [GitHub repo](https://github.com/googleapis/google-cloud-python/tree/main/packages/google-apps-chat)
- [Cloud Client Library reference](https://googleapis.dev/python/google-apps-chat/latest/)
- [Quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/python)

### Java

Select your build environment from the following tabs. Whichever you use, remember to update the version to the most recent release available on GitHub.

### Maven with BOM

If you're using Maven with [BOM](https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM), add this to your `pom.xml` file:

```
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>libraries-bom</artifactId>
      <version>26.42.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <dependency>
    <groupId>com.google.cloud</groupId>
    <artifactId>google-cloud-chat</artifactId>
  </dependency>
```

```
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-chat</artifactId>
  <version>0.10.0</version>
</dependency>
```

### Maven without BOM

If you're using Maven without [BOM](https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM), add this to your dependencies:

```
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-chat</artifactId>
  <version>0.9.0</version>
</dependency>
```

### Gradle

If you're using Gradle without [BOM](https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM), add this to your dependencies:

```
implementation 'com.google.cloud:google-cloud-chat:0.10.0'
```

### SBT

If you are using SBT, add this to your dependencies:

```
libraryDependencies += "com.google.cloud" % "google-cloud-chat" % "0.10.0"
```

Learn more:

- [GitHub repo](https://github.com/googleapis/google-cloud-java/tree/main/java-chat)
- [Cloud Client Library reference](https://cloud.google.com/java/docs/reference/google-cloud-chat/latest/overview)
- [Quickstart](https://developers.google.com/workspace/chat/api/guides/quickstart/java)

### Go

Import the Go packages for Google Cloud services.

```
import "cloud.google.com/go"
```

To install the package on your system:

1. Change to your project directory: `cd /my/cloud/project`.
2. Get the package you want to use:

```
go get cloud.google.com/go/chat
```

Learn more:

- [GitHub repo](https://github.com/googleapis/google-cloud-go/tree/main/chat)
- [Cloud Client Library reference](https://cloud.google.com/go/docs/reference/cloud.google.com/go/chat/latest/apiv1/chatpb)

### Ruby

To install the client library:

```
gem install google-apps-chat
```

Learn more:

- [GitHub repo](https://github.com/googleapis/google-cloud-ruby/tree/main/google-apps-chat)
- [Cloud Client Library reference](https://cloud.google.com/ruby/docs/reference/google-apps-chat/latest)

### PHP

To install the client library:

1. If necessary, install the dependency manager [Composer](https://getcomposer.org/).
2. From your command line interface, run:

```
composer require google/apps-chat
```

Learn more:

- [GitHub repo](https://github.com/googleapis/google-cloud-php/tree/main/AppsChat)
- [Cloud Client Library reference](https://cloud.google.com/php/docs/reference/apps-chat/latest)

### .NET

To install the client library:

Install the `Google.Apps.Chat.V1` package from NuGet. Add it to your project in the normal way (for example by right-clicking on the project in Visual Studio and choosing "Manage NuGet Packages..."). Make sure you enable pre-release packages (for example, in the Visual Studio NuGet user interface, check the "Include prerelease" box).

To install the NuGet package, visit [Google.Apis at NuGet.org](https://www.nuget.org/packages/Google.Apis).

Learn more:

- [GitHub repo](https://github.com/googleapis/google-cloud-dotnet/tree/main/apis/Google.Apps.Chat.V1)
- [Cloud Client Library reference](https://googleapis.dev/dotnet/Google.Apps.Chat.V1/latest/)

## Install Google API Client Libraries

An alternative to Cloud Client Libraries, [Google API Client Libraries](https://developers.google.com/api-client-library) provide programmatic access to Chat API using REST resources and methods. You might prefer to use Google API Client Libraries if you use a language that does not have a Cloud Client Library, or if you are extending a project that already uses them.

Chat API provides Google API Client Libraries for the following languages. Select the language that you want to use:

### Go

Get the latest [Google Chat API client library for Go](https://github.com/google/google-api-go-client). Read the client library's [developer's guide](https://github.com/google/google-api-go-client).

### Java

This page contains information about getting started with the Google Chat API by using the Google API Client Library for Java. For more information, see the following documentation:

- Browse the [Javadoc reference for the Google Chat API](https://googleapis.dev/java/google-api-services-chat/latest/).
- Read the [Developer's Guide for the Google API Client Library for Java](https://github.com/googleapis/google-api-java-client/).

## Add the client library to your project

Select your build environment (Maven or Gradle) from the following tabs:

Add the following to your `pom.xml` file:

<iframe src="https://developers.google.com/frame/workspace/chat/libraries_a1fe4142b76a95d81adaf31859904ddc5463d24ea1b8d1237920c8ee0e7d8faf.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe>

See [all versions available on the Maven Central Repository](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.google.apis%22%20AND%20a%3A%22google-api-services-chat%22).

Add the following to your `build.gradle` file:

<iframe src="https://developers.google.com/frame/workspace/chat/libraries_ad5ceeeb7f78dd6cc26de5d4c8a4d3ed4ec72f8c6711ac24b59cb0b444d27f80.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe>

See [all versions available on the Maven Central Repository](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.google.apis%22%20AND%20a%3A%22google-api-services-chat%22).

### JavaScript

Read the client library's [developer's guide](https://developers.google.com/api-client-library/javascript/start/start-js).

### .NET

This page contains information about getting started with the Google Chat API by using the Google API Client Library for.NET. For more information, see the following documentation:

- Browse the [.NET reference documentation for the Google Chat API](https://googleapis.dev/dotnet/Google.Apis/latest/api/Google.Apis.html).
- Read the [Developer's guide for the Google API Client Library for.NET](https://developers.google.com/api-client-library/dotnet/get_started).

## Downloading the library

Install the NuGet package: [Google.Apis](https://www.nuget.org/packages/Google.Apis).

### Node.js

Get the latest [Google Chat API client library for Node.js](https://github.com/google/google-api-nodejs-client/). Read the client library's [developer's guide](https://github.com/google/google-api-nodejs-client/).

### Obj-C

Get the latest [Google Chat API client library for Objective-C](https://github.com/google/google-api-objectivec-client-for-rest). Read the client library's [developer's guide](https://github.com/google/google-api-objectivec-client-for-rest/wiki).

### PHP

Get the latest [Google Chat API client library for PHP](https://github.com/google/google-api-php-client). Read the client library's [developer's guide](https://developers.google.com/api-client-library/php).

### Python

This page contains information about getting started with the Google Chat API by using the Google API Client Library for Python (v1/v2). For more information, see the following documentation:

- Browse the [PyDoc reference for the Google Chat API](https://googleapis.github.io/google-api-python-client/docs/dyn/chat_v1.html).
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

This page contains information about getting started with the Google Chat API by using the Google API Client Library for Ruby. For more information, see the following documentation:

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

## Apps Script and client libraries

The recommended way for most developers to call the Google Chat API is with our officially supported [Cloud Client Libraries](https://developers.google.com/workspace/chat/libraries) for your preferred language, like Python, Java, or Node.js.

If you're coding with Google Apps Script, use the [Advanced Chat service](https://developers.google.com/apps-script/advanced/chat) instead of installing a client library.

## Authentication

Calling the Chat API requires authentication. Each Chat API method requires either [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) (to perform actions or access data on behalf of a user) or [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) (to perform actions or access data as a Chat app). Some methods support both user authentication and app authentication.

To learn more about authentication in Chat, see [Authentication overview](https://developers.google.com/workspace/chat/authenticate-authorize).
