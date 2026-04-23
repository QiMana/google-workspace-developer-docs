---
source: https://developers.google.com/apps-script/reference/html/html-output-meta-tag
root: apps-script
fetched_at: 2026-04-23T15:20:38.959Z
---

# Class HtmlOutputMetaTag

## Page Summary

- HtmlOutputMetaTag represents a meta tag added to a page using HtmlOutput.addMetaTag().
- The getContent() method retrieves the content of the meta tag.
- The getName() method retrieves the name of the HtmlOutputMetaTag.

An object that represents a meta tag added to the page by calling .

```
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.addMetaTag('viewport', 'width=device-width, initial-scale=1');

const tags = output.getMetaTags();
Logger.log(
    '<meta name="%s" content="%s"/>',
    tags[0].getName(),
    tags[0].getContent(),
);
```

## Detailed documentation

### getContent()

Gets the content of this meta tag.

#### Return

`String` — the content of this meta tag.

---

### getName()

Gets the name of this `HtmlOutputMetaTag`.

#### Return

`String` — the name of this meta tag.
