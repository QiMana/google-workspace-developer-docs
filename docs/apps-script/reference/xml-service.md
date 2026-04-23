---
source: https://developers.google.com/apps-script/reference/xml-service
root: apps-script
fetched_at: 2026-04-23T15:22:11.308Z
---

# XML Service

## Page Summary

- The XML Service allows scripts to parse, navigate, and programmatically create XML documents.
- It provides classes like Document, Element, and Attribute for working with XML structure.
- The service includes methods for parsing XML strings, creating new XML elements and documents, and formatting XML output.
- You can navigate through XML elements using methods like getRootElement(), getChild(), and getChildren().
- The service supports retrieving and setting text content and attributes of XML nodes.

This service allows scripts to parse, navigate, and programmatically create XML documents.

```
// Log the title and labels for the first page of blog posts on
// Google's The Keyword blog.
function parseXml() {
  let url = 'https://blog.google/rss/';
  let xml = UrlFetchApp.fetch(url).getContentText();
  let document = XmlService.parse(xml);
  let root = document.getRootElement();

  let channel = root.getChild('channel');
  let items = channel.getChildren('item');
  items.forEach(item => {
    let title = item.getChild('title').getText();
    let categories = item.getChildren('category');
    let labels = categories.map(category => category.getText());
    console.log('%s (%s)', title, labels.join(', '));
  });
}

// Create and log an XML representation of first 10 threads in your Gmail inbox.
function createXml() {
  let root = XmlService.createElement('threads');
  let threads = GmailApp.getInboxThreads()
  threads = threads.slice(0,10); // Just the first 10
  threads.forEach(thread => {
    let child = XmlService.createElement('thread')
        .setAttribute('messageCount', thread.getMessageCount())
        .setAttribute('isUnread', thread.isUnread())
        .setText(thread.getFirstMessageSubject());
    root.addContent(child);
  });
  let document = XmlService.createDocument(root);
  let xml = XmlService.getPrettyFormat().format(document);
  console.log(xml);
}
```
