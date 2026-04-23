---
source: https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-authentication-authorization
root: workspace
fetched_at: 2026-04-23T15:23:49.224Z
---

# Troubleshoot authentication and authorization issues

This page describes some common issues that you might encounter involving authentication and authorization.

## This app isn't verified

If the OAuth consent screen displays the warning "This app isn't verified," your app is requesting scopes that provide access to sensitive user data. If your application uses sensitive scopes, your app must go through the [verification process](https://support.google.com/cloud/answer/7454865) to remove that warning and other limitations. During the development phase, you can continue past this warning by selecting **Advanced > Go to {Project Name} (unsafe)**.

## File not found error for credentials.json

When running the code sample, you might receive a "file not found" or "no such file" error message regarding credentials.json.

This error occurs when you have not authorized the desktop application credentials. To learn how to create credentials for a desktop application, go to [Create credentials](../../../../guides/create-credentials.md#desktop-app).

After you create the credentials, make sure the downloaded JSON file is saved as `credentials.json`. Then move the file to your working directory.

## Token has been expired or revoked

When running the code sample, you might receive a "Token has been expired" or "Token has been revoked" error message.

This error occurs when an access token from the Google Authorization Server has either expired or has been revoked. For information about potential causes and fixes, see [Refresh token expiration](https://developers.google.com/identity/protocols/oauth2#expiration).

## JavaScript errors

The following are some common JavaScript errors.

### Error: origin\_mismatch

This error occurs during the authorization flow if the host and port used to serve the web page doesn't match an allowed JavaScript origin on your Google Cloud console project. Make sure you set an authorized JavaScript origin and that the URL in your browser matches the origin URL.

### idpiframe\_initialization\_failed: Failed to read the 'localStorage' property from 'Window'

This error occurs when third-party cookies and data storage aren't enabled in your browser. These options are required by the Google Sign-in library. For more information, see [3rd-party cookies and data storage](https://developers.google.com/identity/sign-in/web/troubleshooting#third-party_cookies_and_data_blocked).

### idpiframe\_initialization\_failed: Not a valid origin for the client

This error occurs when the domain registered doesn't match the domain being used to host the web page. Ensure that the origin you registered matches the URL in the browser.

## Python errors

### AttributeError: 'Module\_six\_moves\_urllib\_parse' object has no attribute 'urlparse'

This error can occur in Mac OSX where the default installation of the `six` module (a dependency of the Python library) is loaded before the one that pip installed. To fix the issue, add pip's install location to the `PYTHONPATH` system environment variable:

1. Determine pip's install location:
	```
	pip show six | grep "Location:" | cut -d " " -f2
	```
	Make a note of this location because it's needed for the next step.
2. Add the following line to your `~/.bashrc` file, replacing `INSTALL_PATH` with the location determined from the previous step:
	```
	export PYTHONPATH=$PYTHONPATH:INSTALL_PATH
	```
3. Reload your `~/.bashrc` file:
	```
	source ~/.bashrc
	```

### TypeError: sequence item 0: expected str instance, bytes found

This error is due to a bug in `httplib2`. To resolve this problem, upgrade to the latest version of `httplib2`:

```
pip install --upgrade httplib2
```

### Cannot uninstall 'six'

When running the `pip install` command, you might receive the following error:

```
Cannot uninstall 'six'. It is a distutils installed project and thus we
cannot accurately determine which files belong to it which would lead to
only a partial uninstall.
```

This error occurs on Mac OSX when pip attempts to upgrade the pre-installed `six` package. To work around this issue, add the flag `--ignore-installed six` to the `pip install` command.
