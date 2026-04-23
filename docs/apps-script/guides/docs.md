---
source: https://developers.google.com/apps-script/guides/docs
root: apps-script
fetched_at: 2026-04-23T15:18:21.553Z
---

# Extend Google Docs

## Page Summary

- Google Apps Script can create and modify Google Docs and customize their user interface.
- Apps Script can interact with Google Docs by either creating or modifying a document with appropriate permissions or by being bound to a document for special UI abilities.
- The `replaceText()` method in Apps Script is a simple way to replace text in a Google Doc and supports regular expressions.
- Custom menus, dialog boxes, and sidebars can be added to Google Docs using Apps Script, but the script must be bound to the document.
- Scripts for Google Docs can be published as add-ons to share them with other users.

Google Apps Script lets you programmatically create and modify Docs, as well as customize the user interface with new menus, dialog boxes, and sidebars.

## The basics

Apps Script can interact with Docs in two broad ways: any script can create or modify a document if the script's user has appropriate permissions for the document, and a script can also be [bound](./bound.md) to a document, which gives the script special abilities to alter the user interface or respond when the document is opened. To create a container-bound script from within Docs, click **Extensions** \> **Apps Script**.

In either case, you can interact with a Docs document by using Apps Script's [Document Service](../reference/document.md), as the following example demonstrates.

```
function createDoc() {
  var doc = DocumentApp.create('Sample Document');
  var documentTab = doc.getTab('t.0').asDocumentTab();
  var body = documentTab.getBody();
  var rowsData = [['Plants', 'Animals'], ['Ficus', 'Goat'], ['Basil', 'Cat'], ['Moss', 'Frog']];
  body.insertParagraph(0, doc.getName())
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  table = body.appendTable(rowsData);
  table.getRow(0).editAsText().setBold(true);
}
```

The preceding script creates a new document in the user's Google Drive, then retrieves the tab with ID `t.0` (the default first tab), inserts a paragraph that contains the same text as the document's name, styles that paragraph as a heading, and appends a table based on the values in a two-dimensional array. The script could also make these changes to an existing document by replacing the call to [`DocumentApp.create`](../reference/document/document-app.md#create(String)) with [`DocumentApp.openById`](../reference/document/document-app.md#openById(String)) or [`openByUrl`](../reference/document/document-app.md#openByUrl(String)). For scripts created inside a document (container-bound), use [`DocumentApp.getActiveDocument`](../reference/document/document-app.md#getActiveDocument()) and [`Document.getActiveTab`](../reference/document/document.md#getActiveTab()).

## Structure of a document

From Apps Script's perspective, a Docs document is structured much like an HTML document—that is, a document is composed of one or more [`Tab`](../reference/document/tab.md) objects, each of which contain elements (like a [`Paragraph`](../reference/document/paragraph.md) or [`Table`](../reference/document/table.md)) that often contain other elements. Most scripts that modify a Docs document begin with a call to [`getTab`](../reference/document/document.md#getTab(String)) and [`asDocumentTab`](../reference/document/tab.md#asDocumentTab()) followed by [`getBody`](../reference/document/document.md#getBody()), because the [`Body`](../reference/document/body.md) is a core element that contains all other elements in a tab except for the [`HeaderSection`](../reference/document/header-section.md), [`FooterSection`](../reference/document/footer-section.md), and any [`Footnotes`](../reference/document/footnote.md).

However, there are rules about which types of elements can contain other types. Furthermore, the Document Service in Apps Script can only insert certain types of elements into other elements. The following tree shows which elements can be contained by a certain type of element.

Elements shown in bold can be inserted; non-bold elements can only be manipulated in place.

- [Document](../reference/document/document.md)
		- [Tab](../reference/document/tab.md)
				- [DocumentTab](../reference/document/document-tab.md)
						- [Body](../reference/document/body.md)
								- [**ListItem**](../reference/document/list-item.md)
					- [Equation](../reference/document/equation.md)
												- [EquationFunction](../reference/document/equation-function.md)
														- [EquationFunction](../reference/document/equation-function.md)...
														- [EquationFunctionArgumentSeparator](../reference/document/equation-function-argument-separator.md)
														- [EquationSymbol](../reference/document/equation-symbol.md)
														- [Text](../reference/document/text.md)
												- [EquationSymbol](../reference/document/equation-symbol.md)
												- [Text](../reference/document/text.md)
										- [Footnote](../reference/document/footnote.md)
										- [**HorizontalRule**](../reference/document/horizontal-rule.md)
										- [InlineDrawing](../reference/document/inline-drawing.md)
										- [**InlineImage**](../reference/document/inline-image.md)
										- [**PageBreak**](../reference/document/page-break.md)
										- [**Text**](../reference/document/text.md)
								- [**Paragraph**](../reference/document/paragraph.md)
										- [Equation](../reference/document/equation.md)
												- [EquationFunction](../reference/document/equation-function.md)
														- [EquationFunction](../reference/document/equation-function.md)...
														- [EquationFunctionArgumentSeparator](../reference/document/equation-function-argument-separator.md)
														- [EquationSymbol](../reference/document/equation-symbol.md)
														- [Text](../reference/document/text.md)
												- [EquationSymbol](../reference/document/equation-symbol.md)
												- [Text](../reference/document/text.md)
										- [Footnote](../reference/document/footnote.md)
										- [**HorizontalRule**](../reference/document/horizontal-rule.md)
										- [InlineDrawing](../reference/document/inline-drawing.md)
										- [**InlineImage**](../reference/document/inline-image.md)
										- [**PageBreak**](../reference/document/page-break.md)
										- [**Text**](../reference/document/text.md)
								- [**Table**](../reference/document/table.md)
										- [**TableRow**](../reference/document/table-row.md)
												- [**TableCell**](../reference/document/table-cell.md)
														- [**Paragraph**](../reference/document/paragraph.md)...
														- [**ListItem**](../reference/document/list-item.md)...
														- [**Table**](../reference/document/table.md)...
								- [TableOfContents](../reference/document/table-of-contents.md)
										- [Paragraph](../reference/document/paragraph.md)...
										- [ListItem](../reference/document/list-item.md)...
										- [Table](../reference/document/table.md)...
						- [HeaderSection](../reference/document/header-section.md)
								- [**ListItem**](../reference/document/list-item.md)
										- [**HorizontalRule**](../reference/document/horizontal-rule.md)
										- [InlineDrawing](../reference/document/inline-drawing.md)
										- [**InlineImage**](../reference/document/inline-image.md)
										- [**Text**](../reference/document/text.md)
										- [UnsupportedElement](../reference/document/unsupported-element.md) (page number, etc.)
								- [**Paragraph**](../reference/document/paragraph.md)
										- [**HorizontalRule**](../reference/document/horizontal-rule.md)
										- [InlineDrawing](../reference/document/inline-drawing.md)
										- [**InlineImage**](../reference/document/inline-image.md)
										- [**Text**](../reference/document/text.md)
										- [UnsupportedElement](../reference/document/unsupported-element.md) (page number, etc.)
								- [**Table**](../reference/document/table.md)
										- [**TableRow**](../reference/document/table-row.md)
												- [**TableCell**](../reference/document/table-cell.md)
														- [**Paragraph**](../reference/document/paragraph.md)...
														- [**ListItem**](../reference/document/list-item.md)...
														- [**Table**](../reference/document/table.md)...
						- [FooterSection](../reference/document/footer-section.md)
								- [**ListItem**](../reference/document/list-item.md)
										- [**HorizontalRule**](../reference/document/horizontal-rule.md)
										- [InlineDrawing](../reference/document/inline-drawing.md)
										- [**InlineImage**](../reference/document/inline-image.md)
										- [**Text**](../reference/document/text.md)
										- [UnsupportedElement](../reference/document/unsupported-element.md) (page number, etc.)
								- [**Paragraph**](../reference/document/paragraph.md)
										- [**HorizontalRule**](../reference/document/horizontal-rule.md)
										- [InlineDrawing](../reference/document/inline-drawing.md)
										- [**InlineImage**](../reference/document/inline-image.md)
										- [**Text**](../reference/document/text.md)
										- [UnsupportedElement](../reference/document/unsupported-element.md) (page number, etc.)
								- [**Table**](../reference/document/table.md)
					- [**TableRow**](../reference/document/table-row.md)
												- [**TableCell**](../reference/document/table-cell.md)
														- [**Paragraph**](../reference/document/paragraph.md)...
														- [**ListItem**](../reference/document/list-item.md)...
														- [**Table**](../reference/document/table.md)...
						- [FootnoteSection](../reference/document/footnote-section.md)
								- [ListItem](../reference/document/list-item.md)
										- [**HorizontalRule**](../reference/document/horizontal-rule.md)
										- [**Text**](../reference/document/text.md)
								- [**Paragraph**](../reference/document/paragraph.md)
										- [**HorizontalRule**](../reference/document/horizontal-rule.md)
										- [**Text**](../reference/document/text.md)

## Replace text

Apps Script is often used to replace text in Docs. Suppose you have a spreadsheet full of client information and you want to generate a personalized Docs for each client. (This type of operation is often called a mail merge.)

You can replace text using the [`replaceText`](../reference/document/body.md#replaceText(String,String)) method, which supports most JavaScript [regular expression](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp) features. In the following example, the first function adds placeholder text to the document, and the second replaces that text with properties from a `client` object.

Both of these functions use the [`getActiveDocument`](../reference/document/document-app.md#getActiveDocument()) and [`getActiveTab`](../reference/document/document.md#getActiveTab()) methods, which only apply to scripts created inside a Docs document; in a stand-alone script, use [`DocumentApp.create`](../reference/document/document-app.md#create(String)), [`openById`](../reference/document/document-app.md#openById(String)), or [`openByUrl`](../reference/document/document-app.md#openByUrl(String)), combined with [`Document.getTab`](../reference/document/document.md#getTab(String)), instead.

### Add some placeholders

```
function createPlaceholders() {
  var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
  body.appendParagraph('{name}');
  body.appendParagraph('{address}');
  body.appendParagraph('{city} {state} {zip}');
}
```

### Replace the placeholders

```
function searchAndReplace() {
  var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();
  var client = {
    name: 'Joe Script-Guru',
    address: '100 Script Rd',
    city: 'Scriptville',
    state: 'GA',
    zip: 94043
  };

  body.replaceText('{name}', client.name);
  body.replaceText('{address}', client.address);
  body.replaceText('{city}', client.city);
  body.replaceText('{state}', client.state);
  body.replaceText('{zip}', client.zip);
}
```

## Custom menus and user interfaces

You can customize Docs by adding [custom menus](./menus.md), [dialog boxes, and sidebars](./dialogs.md). Keep in mind that a script can only interact with the UI of the document it is [bound](./bound.md) to.

To learn more about creating custom interfaces with HTML and CSS, see the [guide to HTML Service](./html.md#serve_html_as_a_google_docs_sheets_or_forms_user_interface). If you plan to publish your interface as an [add-on](../../workspace/add-ons/overview.md), follow the [style guide](../../workspace/add-ons/guides/editor-style.md) to ensure its appearance is consistent with the Docs editor.

## Add-ons for Docs

[Add-ons](../../workspace/add-ons/overview.md) run inside Docs and can be installed from the Docs add-on store. If you've developed a script for Docs and want to share it with the world, Apps Script lets you [publish](../../workspace/add-ons/how-tos/publish-add-on-overview.md) your script as an add-on so other users can install it from the add-on store.

To create an add-on for Docs, see the [quickstart for building Docs add-ons](../../workspace/add-ons/editors/docs/quickstart/translate.md).

## Triggers

Scripts that are [bound](./bound.md) to a Google Doc can use a [simple trigger](./triggers.md) to respond to the document's `onOpen` [event](./triggers/events.md), which occurs whenever a user who has edit access to the document opens it in Docs.

To set up the trigger, write a function called `onOpen`. For an example of this trigger, see [Custom menus in Google Workspace](./menus.md). Although the trigger is useful for adding menus, it cannot use any Apps Script services that require authorization.
