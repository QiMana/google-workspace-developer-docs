---
source: https://developers.google.com/workspace/classroom/add-ons/walkthroughs/walkthroughs-overview
root: workspace
fetched_at: 2026-04-23T15:25:43.494Z
---

# Walkthroughs

This series of walkthroughs illustrate all the moving parts of a working Classroom add-on. Each walkthrough step addresses specific concepts, implementing them in a single web application. The goal is to aid you in setting up, configuring, and launching a functional add-on.

Your add-on must interact with a **Google Cloud project**. If you're unfamiliar with Google Cloud, we recommend reading the [Getting Started guides](https://cloud.google.com/gcp/getting-started). You manage credentials, API access, and the Google Workspace Marketplace SDK in the Google Cloud console. For more information about the Marketplace SDK, visit the [Google Workspace Marketplace listing](../developer-guides/project-configuration.md#workspace_marketplace_name-listing) guide page.

This guide covers the following topics:

- Use Google Cloud to create a page to show in an iframe in Classroom.
- Add Google single sign-on (SSO) and allow users to sign in.
- Make API calls to attach your add-on to an assignment.
- Address the key add-on submission requirements and required features.

This guide assumes that you're familiar with programming and fundamental web development concepts. We strongly recommend reading the [Project configuration guide](../developer-guides/project-configuration.md) before beginning the walkthroughs. This page contains important configuration details that are not fully covered in the walkthroughs.

## Example implementations

A complete reference example is available in **Python**. Partial implementations are also available in **Java** and **Node.js**. These implementations are the sources of the example code found in subsequent pages.

### Where to download

The Python and Java examples are available in GitHub repositories:

- [Python repo](https://github.com/googleworkspace/python-classroom-addon)
- [Java repo](https://github.com/googleworkspace/java-classroom-addon)

The Node.js sample can be downloaded as a zip file:

- [Node.js archive](https://developers.google.com/static/workspace/classroom/assets/classroom-addons-nodejs.zip)

### Prerequisites

Review the following sections to prepare a new add-ons project.

#### HTTPS certificate

While you can host your app on any development environment, your Classroom add-on is only available through `https://`. Therefore, you need a server with SSL encryption to deploy your app or to test it within the add-on iframe.

It's possible to use `localhost` with an SSL certificate; consider [mkcert](https://github.com/FiloSottile/mkcert) if you need to create a certificate for local development.

#### Google Cloud project

You need to configure a Google Cloud project for use with these examples. See the [Google Cloud project creation](../developer-guides/project-configuration.md#google_cloud_platform_project_creation) guide for an overview of the necessary steps to get started. The [Set up a Google Cloud project](./create-an-add-on.md#set_up_a_gcp_project) section in the first walkthrough also steps through the specific configuration actions to take.

When finished, download your OAuth 2.0 Client ID as a JSON file; you need to add this credential file to the unzipped example directory. See [Understand the files](#understand-files) for specific locations.

#### OAuth credentials

Follow these steps to create new OAuth credentials:

- Navigate to the [Google Cloud Credentials](https://console.cloud.google.com/apis/credentials) page. Ensure that you have the correct project selected at the top of the screen.
- Click **CREATE CREDENTIALS** and choose **OAuth client ID** from the drop-down.
- On the next page:
	- Set the **Application type** to **Web application**.
		- Under **Authorized redirect URIs**, click **ADD URI**. Add the *full path* for a callback route for your application. For example, `https://my.domain.com/auth-callback` or `https://localhost:5000/callback`. You create and handle this route later in this walkthrough. You can edit or add more such routes anytime.
		- Click **CREATE**.
- You then receive a dialog with your newly created credentials. Choose the **DOWNLOAD JSON** option. Copy the downloaded JSON file into your server directory.

#### Language-specific prerequisites

View the README file in each repository for the most up-to-date list of prerequisites.

### Python

Our Python example uses the [Flask framework](https://palletsprojects.com/p/flask/). You can download the complete source code from the [provided links](#where-download).

If necessary, install [Python 3.7+](https://www.python.org/downloads/) and ensure that `pip` is available.

```
python3 -m ensurepip --upgrade
```

We also recommend that you set up and activate a new Python virtual environment.

```
python3 -m venv .classroom-addon-env
source .classroom-addon-env/bin/activate
```

There's a `requirements.txt` in each walkthrough subdirectory in the downloaded examples. You can quickly install the required libraries using `pip`. Use the following commands to install the required libraries for the first walkthrough.

```
cd flask/01-basic-app
pip install -r requirements.txt
```

### Node.js

Our Node.js example uses the [Express framework](https://expressjs.com/). You can download the complete source code from the [provided links](#where-download).

This example requires [Node.js v16.13](https://nodejs.org/) or later.

Install required node modules using `npm`.

```
npm install
```

### Java

Our Java example uses the [Spring Boot framework](https://spring.io/projects/spring-boot/). You can download the complete source code from the [provided links](#where-download).

Install [Java 11+](https://adoptopenjdk.net/) if you don't already have it installed on your machine.

Spring Boot applications can use Gradle or Maven to handle builds and manage dependencies. This example includes the Maven wrapper that ensures a successful build without requiring you to install Maven itself.

In the directory where you have the project downloaded or cloned, run the following commands to ensure you have the prerequisites to run the project.

```
java --version
./mvnw --version
```

Or on Windows:

```
java -version
mvnw.cmd --version
```

### Understand the files

The following sections describe the layout of the example directories.

#### Directory names

Each repository contains several directories whose names begin with a number, such as `/01-basic-app/`. The numbers correspond to specific walkthrough steps. Each directory contains a fully functional web app that implements the features described in a particular walkthrough. For example, the `/01-basic-app/` directory contains the final implementation for the [Create an add-on](./create-an-add-on.md) walkthrough.

#### Directory contents

Directory contents differ depending on the implementation language:

### Python

- The **directory root** contains the following files:
	- `main.py` - the Python application entry point. Specify the server configuration that you want to use in this file, then run it to start the server.
		- `requirements.txt` - the Python modules required to run the web app. These can be installed automatically using `pip install -r requirements.txt`.
		- `client_secret.json` - the client secret file downloaded from Google Cloud. Note that this is not included in the example archive; you should rename and copy your downloaded credentials file into each directory root.
- `config.py` - configuration options for the Flask server.
- The **`webapp` directory** contains the content for the web application. It includes the following:
- The `/templates/` directory with [Jinja](https://jinja.palletsprojects.com/en/3.1.x/) templates for various pages.
- The `/static/` directory with images, CSS, and ancillary JavaScript files.
- `routes.py` - the handler methods for the web application routes.
- `__init__.py` - the initializer for the `webapp` module. This initializer starts the Flask server and loads the configuration options set in `config.py`.
- Additional files as required by a particular walkthrough step.

### Node.js

Each step of the walkthrough can be found in its own `<step>` sub-folder. Each step contains:

- Static files such as JavaScript, CSS and images are found in the `./<step>/public` folder.
- Express routers are found in the `./<step>/routes` folders.
- HTML templates are found in the `./<step>/views` folders.
- The server application is `./<step>/app.js`.

### Java

The project directory includes the following:

- `src.main` directory contains the source code and configuration to run the application successfully. This directory includes the following: + `java.com.addons.spring` directory contains the `Application.java` and `Controller.java` files. The `Application.java` file is responsible for running the application server while the `Controller.java` file handles the endpoint logic. + `resources` directory contains the `templates` directory with HTML and JavaScript files. It also contains the `application.properties` file that specifies the port to run the server, the path to the keystore file, and path to the `templates` directory. This example includes the keystore file in the `resources` directory. You may store it wherever you'd prefer, but ensure that you update the `application.properties` file with the path accordingly.
	- `pom.xml` contains the information needed to build the project and define the required dependencies.
		- `.gitignore` contains file names that shouldn't be uploaded to git. Ensure that you add the path to your keystore in this `.gitignore`. In the provided example, this is `secrets/*.p12` (the purpose of the keystore is discussed in the section below). For walkthrough 2 and beyond, you should also include the path to your `client_secret.json` file to ensure that you don't include your secrets in a remote repository. For walkthrough 3 and beyond, you should add the path to the H2 database file and file datastore factory. More information on the setup of these data stores can be found in the third walkthrough on [handling repeat visits](./repeat-login.md#handle_repeat_logins).
		- `mvnw` and `mvnw.cmd` are the Maven wrapper executables for Unix and Windows, respectively. For example, running `./mvnw --version` on Unix outputs the Apache Maven version, among other information.
		- `.mvn` directory contains configuration for the Maven wrapper.

### Run the sample server

You need to launch your server in order to test it. Follow these instructions to run the example server in your language of choice:

### Python

**OAuth credentials**

Create and download your OAuth credentials as [described previously](#oauth_credentials). Place the JSON file in the root directory alongside your application's server launch file.

**Configure the server**

You have several options for running the web server. At the end of your Python file, add one of the following:

1. Unsecured `localhost`. Note that this is suitable for directly testing in a browser window only; unsecured domains can't be loaded in the Classroom add-on iframe.
	```
	if __name__ == "__main__":
	  # Disable OAuthlib's HTTPs verification.
	  os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
	  # Run the web app at http://localhost:5000.
	  app.run(debug=True)
	```
2. Secure `localhost`. You must specify a tuple of SSL key files for the `ssl_context` argument.
	```
	if __name__ == "__main__":
	  # Run the web app at https://localhost:5000.
	  app.run(host="localhost",
	          ssl_context=("localhost.pem", "localhost-key.pem"),
	          debug=True)
	```
3. [Gunicorn](https://gunicorn.org/) server. This is suitable for a production-ready server or cloud deployment. We recommend setting a `PORT` environment variable for use with this launch option.
	```
	if __name__ == "__main__":
	  # Run the web app at https://<your domain>:<server_port>.
	  # Defaults to https://<your domain>:8080.
	  server_port = os.environ.get("PORT", "8080")
	  app.run(debug=True, port=server_port, host="0.0.0.0")
	```

**Launch the server**

Run your Python application to launch the server as configured in the previous step.

```
python main.py
```

Click the URL that appears to view your web app in a browser to confirm that it's running correctly.

### Node.js

**Configure the server**

In order to run the server over HTTPS, you need to create a self-certificate that's used to run the application over HTTPS. These credentials should be saved as `sslcert/cert.pem` and `sslcert/key.pem` in the repository root folder. You may need to add these keys to your OS key chain in order for your browser to accept them.

Make sure that `*.pem` is in your `.gitignore` file because you don't want to commit the file to git.

**Launch the server**

You may run the application with the following command substituting `step01` for the correct step that you want to run as a server (for example, `step01` for 01-basic-app and `step02` for 02-sign-in).

```
npm run step01
```

*or*

```
npm run step02
```

This launches the web server at `https://localhost:5000`.

You may terminate the server with `Control + C` in your terminal.

### Java

**Configure the server**

In order to run the server over HTTPS, you need to create a self-certificate that's used to run the application over HTTPS.

Consider using [mkcert](https://github.com/FiloSottile/mkcert) for local development. Once you install `mkcert`, the following commands generate a locally stored certificate to run over HTTPS.

```
mkcert -install
mkcert -pkcs12 -p12-file <path_to_keystore> <domain_name>
```

This example includes the keystore file in the resources directory. You may store it wherever you'd prefer, but ensure that you update the `application.properties` file with the path accordingly. The domain name is the domain you run the project on (for example, `localhost`).

Make sure that `*.p12` is in your `.gitignore` file because you don't want to commit the file to git.

**Launch the server**

Launch the server by running the `main` method in the `Application.java` file. In IntelliJ, for example, you can either right-click `Application.java` > `Run 'Application'` in the `src/main/java/com/addons/spring` directory or open the `Application.java` file to click the green arrow to the left of the `main(String[] args)` method signature. Alternatively, you can run the project in a terminal window:

```
./mvnw spring-boot:run
```

or on Windows:

```
mvnw.cmd spring-boot:run
```

This launches the server at `https://localhost:5000` or at the port you specified in `application.properties`.
