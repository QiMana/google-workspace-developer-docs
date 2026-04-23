---
source: https://developers.google.com/workspace/cloud-search/docs/tutorials/end-to-end
root: workspace
fetched_at: 2026-04-23T15:27:02.182Z
---

# Google Cloud Search getting started tutorial

This tutorial shows how to deploy a simple Cloud Search solution and uses GitHub as the repository of data to be indexed. Specifically, this tutorial consists of two sample applications:

- A content connector, created with the [Cloud Search Connector SDK](https://developers.google.com/workspace/cloud-search/docs/reference/sdk), used to index data found in GitHub repositories. Data indexed includes issues, pull requests, and the head content of the default branch (`master`).
- A web app that uses the [search widget](https://developers.google.com/workspace/cloud-search/docs/guides/search-widget) to provide a customized search interface.

## Prerequisites

This tutorial requires the following prerequisites:

- Administrator access to a Google Workspace or Cloud Identity domain with Cloud Search for Third Party Data Indexing enabled. If you're unable to view settings in the Admin control panel, either contact your domain administrator or [sign-up for Cloud Search](https://cloud.google.com/products/search/).
- A [GitHub](https://github.com/) user account.
- Java and JavaScript familarity.
- [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or newer.
- [Maven](http://maven.apache.org/install.html).
- [Node.js](https://nodejs.org/) 8.11 or newer.

## Create the tutorial project

To start, you must create an Google Cloud Platform project. This project forms the basis for creating, enabling, and using all Google Cloud Platform (GCP) services, including managing APIs, enabling billing, adding and removing collaborators, and managing permissions.

1. Open the [Google Cloud console](https://console.cloud.google.com/).
2. At the top of the page, click to the right of "Google Cloud Console." A dialog listing current projects appears.
3. Click **NEW PROJECT**. The New Project screen appears.
4. In the **Project Name** field, enter a project name, such as "SearchTutorial."
5. (optional) Click **Edit** to edit the Project ID. The project ID can't be changed after the project is created, so choose an ID that meets your needs for the lifetime of the project.
6. To browse locations for the project, click **BROWSE**.
7. Click on a location for your project and click **Select**.
8. Click **CREATE**. The console navigates to the Dashboard page. The project is created within a few minutes.

For further information on creating and managing projects, refer to [Creating and Managing Projects](https://support.google.com/cloud#topic=6158848).

## Enable the API

You need to enable the Google Cloud Search API and create a service account to obtain credentials.

1. In the left navigation, click **APIs & Services**.
2. To ensure you are on the newly created project, click the icon to the right of the Google Cloud console banner and select your newly-created project.
3. Click **ENABLE APIS AND SERVICES**. The "Welcome to API Library" page appears.
4. Type "Cloud Search API" in the search field and press **return**. A list of APIs is returned.
5. CLick **Cloud Search API**. The "Cloud Search API" page appears.
6. Click **ENABLE**. The Overview page appears.

For further information on enabling and disabling APIs, refer to [Manage APIs in the Google Cloud console](https://support.google.com/cloud/answer/6326510)

## Clone the tutorial repository

To clone the sample repository, run the following command:

```
git clone https://github.com/googleworkspace/cloud-search-samples.git
```

[Next](https://developers.google.com/workspace/cloud-search/docs/tutorials/end-to-end/setup-connector)
