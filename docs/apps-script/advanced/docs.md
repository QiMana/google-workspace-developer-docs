---
source: https://developers.google.com/apps-script/advanced/docs
root: apps-script
fetched_at: 2026-04-23T15:18:03.500Z
---

# Advanced Docs Service

## Page Summary

- The advanced Docs service in Apps Script allows you to use the Google Docs API to read, edit, and format Google Docs content.
- This advanced service provides additional features beyond the built-in Apps Script Docs service but is an advanced service that requires enabling before use.
- Sample code is provided for common tasks such as creating a document, finding and replacing text, inserting and styling text, and reading content from a document.
- A best practice when using the advanced Docs service is to combine multiple update requests into a single `batchUpdate` call for efficiency.

Script to read, edit, and format content in Google Docs with additional features.

The advanced Docs service lets you use the [Google Docs API](https://developers.google.com/docs/api) in Google Apps Script. Much like Apps Script's [built-in Docs service](https://developers.google.com/apps-script/reference/document), this API lets scripts read, edit, and format content in Google Docs. In most cases the built-in service is easier to use, but this advanced service provides a few extra features.

This is an advanced service that you must [enable before use](https://developers.google.com/apps-script/guides/services/advanced). Follow the [quickstart](https://developers.google.com/docs/api/quickstart/apps-script) for step-by-step instructions on how to get started.

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/docs/api/reference/rest) for the Docs API. Like all advanced services in Apps Script, the advanced Docs service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the [Docs API support guide](https://developers.google.com/docs/api/support).

## Sample code

The following sample code uses [version 1](https://developers.google.com/docs/api/reference/rest) of the API.

### Create document

This sample creates a new document.

```
/**
 * Create a new document.
 * @see https://developers.google.com/docs/api/reference/rest/v1/documents/create
 * @return {string} documentId
 */
function createDocument() {
  // Create document with title
  const document = Docs.Documents.create({ title: "My New Document" });
  console.log(\`Created document with ID: ${document.documentId}\`);
  return document.documentId;
}
```

## Find and replace text

This sample finds and replaces pairs of text across all tabs in a document. This can be useful when replacing placeholders in a copy of a template document with values from a database.

```
/**
 * Performs "replace all".
 * @param {string} documentId The document to perform the replace text operations on.
 * @param {Object} findTextToReplacementMap A map from the "find text" to the "replace text".
 * @return {Object} replies
 * @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate
 */
function findAndReplace(documentId, findTextToReplacementMap) {
  const requests = [];
  for (const findText in findTextToReplacementMap) {
    const replaceText = findTextToReplacementMap[findText];

    // Replace all text across all tabs.
    const replaceAllTextRequest = {
      replaceAllText: {
        containsText: {
          text: findText,
          matchCase: true,
        },
        replaceText: replaceText,
      },
    };

    // Replace all text across specific tabs.
    const _replaceAllTextWithTabsCriteria = {
      replaceAllText: {
        ...replaceAllTextRequest.replaceAllText,
        tabsCriteria: {
          tabIds: [TAB_ID_1, TAB_ID_2, TAB_ID_3],
        },
      },
    };
    requests.push(replaceAllTextRequest);
  }
  const response = Docs.Documents.batchUpdate(
    { requests: requests },
    documentId,
  );
  const replies = response.replies;
  for (const [index] of replies.entries()) {
    const numReplacements =
      replies[index].replaceAllText.occurrencesChanged || 0;
    console.log(
      "Request %s performed %s replacements.",
      index,
      numReplacements,
    );
  }
  return replies;
}
```

## Insert and style text

This sample inserts new text at the start of the first tab in the document and styles it with a specific font and size. Note that when possible you should batch together multiple operations into a single `batchUpdate` call for efficiency.

```
/**
 * Insert text at the beginning of the first tab in the document and then style
 * the inserted text.
 * @param {string} documentId The document the text is inserted into.
 * @param {string} text The text to insert into the document.
 * @return {Object} replies
 * @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate
 */
function insertAndStyleText(documentId, text) {
  const requests = [
    {
      insertText: {
        location: {
          index: 1,
          // A tab can be specified using its ID. When omitted, the request is
          // applied to the first tab.
          // tabId: TAB_ID
        },
        text: text,
      },
    },
    {
      updateTextStyle: {
        range: {
          startIndex: 1,
          endIndex: text.length + 1,
        },
        textStyle: {
          fontSize: {
            magnitude: 12,
            unit: "PT",
          },
          weightedFontFamily: {
            fontFamily: "Calibri",
          },
        },
        fields: "weightedFontFamily, fontSize",
      },
    },
  ];
  const response = Docs.Documents.batchUpdate(
    { requests: requests },
    documentId,
  );
  return response.replies;
}
```

## Read first paragraph

This sample logs the text of the first paragraph of the first tab in the document. Because of the structured nature of paragraphs in the Docs API, this involves combining the text of multiple sub-elements.

```
/**
 * Read the first paragraph of the first tab in a document.
 * @param {string} documentId The ID of the document to read.
 * @return {Object} paragraphText
 * @see https://developers.google.com/docs/api/reference/rest/v1/documents/get
 */
function readFirstParagraph(documentId) {
  // Get the document using document ID
  const document = Docs.Documents.get(documentId, {
    includeTabsContent: true,
  });
  const firstTab = document.tabs[0];
  const bodyElements = firstTab.documentTab.body.content;
  for (let i = 0; i < bodyElements.length; i++) {
    const structuralElement = bodyElements[i];
    // Print the first paragraph text present in document
    if (structuralElement.paragraph) {
      const paragraphElements = structuralElement.paragraph.elements;
      let paragraphText = "";

      for (let j = 0; j < paragraphElements.length; j++) {
        const paragraphElement = paragraphElements[j];
        if (paragraphElement.textRun !== null) {
          paragraphText += paragraphElement.textRun.content;
        }
      }
      console.log(paragraphText);
      return paragraphText;
    }
  }
}
```

## Best Practices

### Batch Updates

When using the advanced Docs service, combine multiple requests in an array rather than calling `batchUpdate` in a loop.

Don't — Call `batchUpdate` in a loop.

```
var textToReplace = ['foo', 'bar'];
for (var i = 0; i < textToReplace.length; i++) {
  Docs.Documents.batchUpdate({
    requests: [{
      replaceAllText: ...
    }]
  }, docId);
}
```

Do — Call `batchUpdate` with an array of updates.

```
var requests = [];
var textToReplace = ['foo', 'bar'];
for (var i = 0; i < textToReplace.length; i++) {
  requests.push({ replaceAllText: ... });
}

Docs.Documents.batchUpdate({
  requests: requests
}, docId);
```
