---
source: https://developers.google.com/apps-script/reference/document
root: apps-script
fetched_at: 2026-04-23T15:19:32.416Z
---

# Document Service

## Page Summary

- The Google Apps Script Document service allows programmatic creation, access, and modification of Google Docs files.
- `DocumentApp` is the main class for creating and opening documents, while the `Document` class manages the document as a whole.
- The service provides numerous classes to represent document elements, such as `Body`, `Paragraph`, `Table`, and `Text`, each with methods for manipulation.
- Attributes like font size, color, and alignment can be controlled using the `Attribute` enumeration.
- The `Element` class serves as a base for all document components, offering general methods for accessing properties and navigating the document structure.

This service allows scripts to create, access, and modify Google Docs files.

```
// Open a document by ID.
var doc = DocumentApp.openById('DOCUMENT_ID');

// Create and open a document.
doc = DocumentApp.create('Document Name');
```
