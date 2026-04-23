---
source: https://developers.google.com/workspace/drive/activity/v2/guides/library-setup
root: workspace
fetched_at: 2026-04-23T15:27:15.804Z
---

# Install a client library

If you don't want to write your own code to send HTTP requests and parse the responses, then you must download a [client library](../reference/rest.md).

How to set up a client library varies by programming language. In the following section, select the language you're using for development.

If you want to use a language that isn't shown below, refer to the [client library documentation](../libraries.md) to see if there's a library for your language.

### Java

Using the [Google APIs Client Library for Java](https://developers.google.com/api-client-library/java/) requires that you download the core Java client library and the Google Drive Activity API Java library.

This page contains information about getting started with the Drive Activity API by using the Google API Client Library for Java. For more information, see the following documentation:

- Browse the [Javadoc reference for the Drive Activity API](https://googleapis.dev/java/google-api-services-driveactivity/latest/).
- Read the [Developer's Guide for the Google API Client Library for Java](https://github.com/googleapis/google-api-java-client/).
- Interact with this API in your browser using the [APIs Explorer for the Drive Activity API](https://developers.google.com/apis-explorer/#p/driveactivity/v2/).

## Add the client library to your project

Select your build environment (Maven or Gradle) from the following tabs:

Add the following to your `pom.xml` file:

<iframe src="https://developers.google.com/frame/workspace/drive/activity/v2/guides/library-setup_9ccc9876d023fc72f61bbcb320878b758a60e5e86e77e48ce77cd3b1a1bd30d3.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe>

See [all versions available on the Maven Central Repository](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.google.apis%22%20AND%20a%3A%22google-api-services-driveactivity%22).

Add the following to your `build.gradle` file:

<iframe src="https://developers.google.com/frame/workspace/drive/activity/v2/guides/library-setup_c6de955b3e172c6e9ed93e643f8dca5e98d2ec95b44a126f6c72fc87ea484321.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe>

See [all versions available on the Maven Central Repository](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.google.apis%22%20AND%20a%3A%22google-api-services-driveactivity%22).

### Python

Using the [Google APIs Client Library for Python](https://github.com/google/google-api-python-client) requires that you download and install the Python source.

This page contains information about getting started with the Drive Activity API by using the Google API Client Library for Python (v1/v2). For more information, see the following documentation:

- Browse the [PyDoc reference for the Drive Activity API](https://googleapis.github.io/google-api-python-client/docs/dyn/driveactivity_v2.html).
- Read the [Developer's guide for the Google API Client Library for Python (v1/v2)](https://developers.google.com/api-client-library/python).
- Interact with this API in your browser using the [APIs Explorer for the Drive Activity API](https://developers.google.com/apis-explorer/#p/driveactivity/v2/).

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

To do that, run the following commands:

```
$ hg clone https://google-api-python-client.googlecode.com/hg/ google-api-python-client
$ cd google-api-python-client
$ sudo python setup.py install
```

You can now import the classes you need using the following statements:

```
from apiclient.discovery import build
from apiclient.oauth import OAuthCredentials

import httplib2
import oauth2 as oauth
```

### PHP

Using the [Google APIs Client Library for PHP](https://github.com/google/google-api-php-client) requires that you download and install the PHP source.

To do that, run the following commands:

```
$ svn checkout http://google-api-php-client.googlecode.com/svn/trunk/ google-api-php-client-read-only
$ cd google-api-php-read-only
$ # Copy the src directory to your working directory.
```

You can now import the classes you need using the following statements:

```
require_once "../src/apiClient.php";
```

### .NET

Using the [Google APIs Client Library for.NET](http://www.nuget.org/packages/Google.Apis/) requires that you download the core.NET client library and the Google Drive Activity API.NET library. Download the files and add them as references to your project:

- [Core client library](http://www.nuget.org/packages/Google.Apis/)
- [Google Drive Activity API library](https://developers.google.com/api-client-library/dotnet/apis)

You can now import the classes you need using the following statements:

```
using Google.Apis.Authentication;
using Google.Apis.Authentication.OAuth2;
```
