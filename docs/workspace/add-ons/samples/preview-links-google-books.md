---
source: https://developers.google.com/workspace/add-ons/samples/preview-links-google-books
root: workspace
fetched_at: 2026-04-23T15:23:10.673Z
---

# Preview links from Google Books with smart chips

## Page Summary

- This Google Workspace add-on enhances Google Docs by providing previews of Google Books links, transforming them into smart chips for easy access to book information.
- The add-on leverages Apps Script services, including UrlFetch and Card Service, to connect to the Google Books API and display book details within a preview card.
- Users must set up a Google Cloud project, enable the Google Books API, configure the OAuth consent screen, and obtain an API key before implementing the add-on.
- After setting up the environment and the script, users can install a test deployment to preview Google Books links directly within their Google Docs documents.
- The provided code snippets showcase the add-on's functionality, allowing users to review and customize its behavior according to their preferences.

**Coding level**: Intermediate  
**Duration**: 30 minutes  
**Project type**: Google Workspace add-on

## Objectives

- Understand what the add-on does.
- Understand how to build an add-on using Apps Script, and understand what the Apps Script services do.
- Set up your environment.
- Set up the script.
- Run the script.

## About this Google Workspace add-on

In this sample, you create a Google Workspace add-on that previews links from [Google Books](https://books.google.com/) in a Google Docs document. When you type or paste a Google Books URL into a document, the add-on recognizes the link and triggers a link preview. To preview the link, you can convert the link into a smart chip and hold the pointer over the link to view a card that displays more information about the book.

This add-on uses Apps Script's [UrlFetch Service](https://developers.google.com/apps-script/reference/html) to connect to the [Google Books API](https://developers.google.com/books) and get information about Google Books to display in Google Docs.

### How it works

In the Google Workspace add-on's [manifest file](https://developers.google.com/apps-script/add-ons/concepts/workspace-manifests), the script configures the add-on to extend Google Docs and trigger link previews for URLs that match certain patterns from the Google Books website (`https://books.google.com`).

In the code file, the script connects to the Google Books API and uses the URL to get information about the book (which is an instance of the [`Volume` resource](https://developers.google.com/books/docs/v1/reference/volumes)). The script uses this information to generate a smart chip that displays the book's title and a preview card that displays a summary, the page count, an image of the book cover, and number of ratings.

### Apps Script services

This add-on uses the following services:

- [UrlFetch Service](https://developers.google.com/apps-script/reference/html) –Connects to the Google Books API to get information about books (which are instances of the APIs [`Volume` resource](https://developers.google.com/books/docs/v1/reference/volumes)).
- [Card Service](https://developers.google.com/apps-script/reference/card-service) –Creates the user interface of the add-on.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.
- A [Google Cloud project](https://developers.google.com/workspace/guides/create-project).

## Set up your environment

The following sections set up your environment for building the add-on.

### Open your Cloud project in the Google Cloud console

If it's not open already, open the Cloud project that you intend to use for this sample:

1. In the Google Cloud console, go to the **Select a project** page.
	[Select a Cloud project](https://console.cloud.google.com/projectselector2)
2. Select the Google Cloud project you want to use. Or, click **Create project** and follow the on-screen instructions. If you create a Google Cloud project, you might need to [turn on billing for the project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project).

### Turn on the Google Books API

This add-on connects to the Google Books API. Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.

- In your Cloud project, turn on the Books API.
	[Turn on the API](https://console.cloud.google.com/flows/enableapi?apiid=books.googleapis.com)

### Configure the OAuth consent screen

This add-on requires a Cloud project with a configured consent screen. Configuring the OAuth consent screen defines what Google displays to users and registers your app so that you can publish it later.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
1. Under **App Information**, in **App name**, enter a name for the app.
	2. In **User support email**, choose a support email address where users can contact you if they have questions about their consent.
	3. Click **Next**.
	4. Under **Audience**, select **Internal**.
	5. Click **Next**.
	6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
	7. Click **Next**.
	8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
	9. Click **Continue**.
	10. Click **Create**.
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](https://developers.google.com/workspace/guides/configure-oauth-consent) guide.

### Get an API key for the Google Books API

1. Go to the [Google API Console](https://console.cloud.google.com/). Make sure your billing-enabled project is open.
2. In the Google API Console, go to Menu \> **APIs & Services** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/apis/credentials)
3. Click **Create credentials** \> **API key**.
4. Take note of your API key for use in a later step.

## Set up the script

The following sections set up the script for building the add-on.

### Create the Apps Script project

1. Click the following button to open the **Preview links from Google Books** Apps Script project.  
	[Open the project](https://script.google.com/d/14tK6PD4C624ivRyGk-S6eYCbYJnDfA24xeP0Jhb1U8sPgAvZXeZm5gpb/edit?usp=sharing)
2. Click **Overview**.
3. On the overview page, click ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg) **Make a copy**.
4. In your copy of the Apps Script project, go to the `Code.gs` file and replace `YOUR_API_KEY` with the API key that you generated in the previous section.

In the future, if you want to use certain Google APIs or publish your app, you must associate your Cloud project with your Apps Script project. For this guide, you don't need to do so. To learn more, see the [Google Cloud projects guide](https://developers.google.com/apps-script/guides/cloud-platform-projects).

## Test the add-on

The following sections test the add-on you created.

### Install a test deployment

1. In your Apps Script project, click **Editor**.
2. Click **Deploy** \> **Test deployments**.
3. Click **Install** \> **Done**.

### Preview a link in Google Docs

1. Create a Google Docs document at [docs.new](https://docs.google.com/document/create).
2. Paste the following URL to the document, and press the tab key to convert the URL into a smart chip: `https://www.google.com/books/edition/Software_Engineering_at_Google/V3TTDwAAQBAJ`
3. Hold the pointer over the smart chip, and when prompted, authorize access to execute the add-on. The preview card displays information about the book.

The following image shows the link preview:

![A link preview of the book, Software Engineering at Google.](https://developers.google.com/static/workspace/add-ons/images/book-preview.png)

![](https://developers.google.com/static/workspace/add-ons/images/images/book-preview.png)

## Review the code

To review the Apps Script code for this add-on, click **View source code** to expand the section:

#### View source code

### appsscript.json

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/workspace.linkpreview",
    "https://www.googleapis.com/auth/script.external_request"
  ],
  "urlFetchWhitelist": ["https://www.googleapis.com/books/v1/volumes/"],
  "addOns": {
    "common": {
      "name": "Preview Books Add-on",
      "logoUrl": "https://developers.google.com/workspace/add-ons/images/library-icon.png",
      "layoutProperties": {
        "primaryColor": "#dd4b39"
      }
    },
    "docs": {
      "linkPreviewTriggers": [
        {
          "runFunction": "bookLinkPreview",
          "patterns": [
            {
              "hostPattern": "*.google.*",
              "pathPrefix": "books"
            },
            {
              "hostPattern": "*.google.*",
              "pathPrefix": "books/edition"
            }
          ],
          "labelText": "Book",
          "logoUrl": "https://developers.google.com/workspace/add-ons/images/book-icon.png",
          "localizedLabelText": {
            "es": "Libros"
          }
        }
      ]
    }
  }
}
```

### Code.gs

```
/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getBook(id) {
  const apiKey = "YOUR_API_KEY"; // Replace with your API key
  const apiEndpoint = \`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}&country=US\`;
  const response = UrlFetchApp.fetch(apiEndpoint);
  return JSON.parse(response);
}

function bookLinkPreview(event) {
  if (event.docs.matchedUrl.url) {
    const segments = event.docs.matchedUrl.url.split("/");
    const volumeID = segments[segments.length - 1];

    const bookData = getBook(volumeID);
    const bookTitle = bookData.volumeInfo.title;
    const bookDescription = bookData.volumeInfo.description;
    const bookImage = bookData.volumeInfo.imageLinks.small;
    const bookAuthors = bookData.volumeInfo.;
    const bookPageCount = bookData.volumeInfo.pageCount;

    const previewHeader = CardService.newCardHeader()
      .setSubtitle(\`By ${bookAuthors}\`)
      .setTitle(bookTitle);

    const previewPages = CardService.newDecoratedText()
      .setTopLabel("Page count")
      .setText(bookPageCount);

    const previewDescription = CardService.newDecoratedText()
      .setTopLabel("About this book")
      .setText(bookDescription)
      .setWrapText(true);

    const previewImage = CardService.newImage()
      .setAltText("Image of book cover")
      .setImageUrl(bookImage);

    const buttonBook = CardService.newTextButton()
      .setText("View book")
      .setOpenLink(CardService.newOpenLink().setUrl(event.docs.matchedUrl.url));

    const cardSectionBook = CardService.newCardSection()
      .addWidget(previewImage)
      .addWidget(previewPages)
      .addWidget(CardService.newDivider())
      .addWidget(previewDescription)
      .addWidget(buttonBook);

    return CardService.newCardBuilder()
      .setHeader(previewHeader)
      .addSection(cardSectionBook)
      .build();
  }
}
```

## Related topics

- [Preview links with smart chips](https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips)
- [Google Books API reference documentation](https://developers.google.com/books/docs/v1/reference)
