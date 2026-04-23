---
source: https://developers.google.com/workspace/gmail/markup/reference/formats/json-ld
root: workspace
fetched_at: 2026-04-23T15:29:12.290Z
---

# JSON-LD

[JSON-LD](https://json-ld.org/) is an easy-to-use JSON-based linked data format that defines the concept of `context` to specify the vocabulary for types and properties. Gmail supports [JSON-LD data embedded in HTML documents](https://json-ld.org/spec/latest/json-ld/#embedding-json-ld-in-html-documents) with the `@context` of `schema.org`, as in the following example:

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "John Doe",
  "jobTitle": "Graduate research assistant",
  "affiliation": "University of Dreams",
  "additionalName": "Johnny",
  "url": "http://www.example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Peach Drive",
    "addressLocality": "Wonderland",
    "addressRegion": "Georgia"
  }
}
</script>
```

The full specifications and requirements for the JSON-LD syntax are available on [json-ld.org](http://json-ld.org/), and you can also use our [Schema Validator](https://developers.google.com/workspace/gmail/markup/testing-your-schema#schema_validator) tool to try out JSON-LD and debug your markup.
