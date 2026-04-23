---
source: https://developers.google.com/apps-script/guides/html
root: apps-script
fetched_at: 2026-04-23T15:18:20.421Z
---

# HTML Service: Create and Serve HTML

## Page Summary

- The HTML service in Google Apps Script allows you to serve web pages that can interact with server-side Apps Script functions, useful for building web apps or custom user interfaces in Google Docs, Sheets, and Forms, or generating email bodies.
- To use the HTML service, you need to create HTML files within your Apps Script project where you can write standard HTML, CSS, and client-side JavaScript, along with template scriptlets.
- To serve HTML as a web app, your script needs a `doGet()` function that returns an `HtmlOutput` object, and you must save and deploy the script as a web app.
- The HTML service can also display dialogs or sidebars as user interfaces in Google Docs, Sheets, Slides, or Forms if the script is container-bound, requiring a function that passes the HTML file as an `HtmlOutput` object to the `showModalDialog()` or `showSidebar()` methods of the `Ui` object.

The [HTML service](../reference/html.md) lets you serve web pages that can interact with server-side Apps Script functions. It is particularly useful for building web apps or adding custom user interfaces in Google Docs, Google Sheets, and Forms. You can even use it to generate the body of an email.

## Create HTML files

To add an HTML file to your Apps Script project, follow these steps:

1. Open the Apps Script editor.
2. At the left, click Add a file > **HTML**.

Within the HTML file, you can write most standard HTML, CSS, and client-side JavaScript. The page is served as HTML5, although some advanced features of HTML5 are not available, as explained in [Restrictions](./html/restrictions.md).

Your file can also include template scriptlets that are processed on the server before the page is sent to the user — similar to PHP — as explained in the section on [templated HTML](./html/templates.md).

## Serve HTML as a web app

To create a web app with the HTML service, your code must include a `doGet` function that tells the script how to serve the page. The function must return an [`HtmlOutput`](../reference/html/html-output.md) object, as shown in this example.

### Code.gs

```
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}
```

### Index.html

```
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    Hello, World!
  </body>
</html>
```

Once that basic framework is in place, all you have to do is [save a version of your script](./versions.md), then [deploy your script as a web app](./web.md#deploying).

After the script is deployed as a web app, you can also [embed it in a Google Site](./web.md#embed_your_web_app_in).

## Serve HTML as a Google Docs, Sheets, Google Slides, or Forms user interface

The HTML service can display a [dialog or sidebar](./dialogs.md) in Google Docs, Sheets, Slides, or Forms if your script is [container-bound](./bound.md) to the file. In Google Forms, custom user interfaces are only visible to an editor who opens the form to modify it, not to a user who opens the form to respond.

Unlike a web app, a script that creates a user interface for a document, spreadsheet, or form does not need a `doGet` function specifically, and you don't need to save a version of your script or deploy it. Instead, the function that opens the user interface must pass your HTML file as an [`HtmlOutput`](../reference/html/html-output.md) object to the `showModalDialog` or `showSidebar` methods of the [`Ui`](../reference/base/ui.md) object for the active document, form, or spreadsheet.

These examples include a few extra features for convenience: the `onOpen` function creates a [custom menu](./menus.md) that helps you open the interface, and the button in the HTML file calls [`google.script.host.close`](./html/reference/host.md#close) to close the interface.

### Code.gs

```
// Use this code for Google Docs, Slides, Forms, or Sheets.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Dialog')
      .addItem('Open', 'openDialog')
      .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Dialog title');
}
```

### Index.html

```
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    Hello, World!
    <input type="button" value="Close"
        onclick="google.script.host.close()" />
  </body>
</html>
```

The first time you want to display this user interface, you must either run the `onOpen` function [manually in the script editor](./standalone.md) or reload the window for the Docs, Sheets, or Forms editor (which closes the script editor). After that, the custom menu appears within a few seconds every time you open the file. To see the interface, choose **Dialog > Open**.
