---
source: https://developers.google.com/workspace/gmail/markup/reference/formats/microdata
root: workspace
fetched_at: 2026-04-23T15:29:12.384Z
---

# Microdata

[Microdata](https://html.spec.whatwg.org/multipage/microdata.html#microdata) is a specification to embed machine-readable data in HTML documents. Microdata consists of name-value pairs (known as `items`) defined according to a vocabulary. A collection of commonly used markup vocabularies are provided by [schema.org](https://schema.org/).

The basic syntax includes the `itemscope` attribute to define an item and the `itemprop` attribute to describe one of the item's properties. Types are specified using the `itemtype` attribute and can assume values defined in the vocabulary of choice. For instance, `schema.org` defines types such as `http://schema.org/Person` or `http://schema.org/PostalAddress`.

The following example (from [Wikipedia](http://en.wikipedia.org/wiki/Microdata_\(HTML\)#Example)) shows how to use microdata to describe a person:

```
<section itemscope itemtype="http://schema.org/Person">
  Hello, my name is
  <span itemprop="name">John Doe</span>,
  I am a
  <span itemprop="jobTitle">Graduate research assistant</span>
  at the
  <span itemprop="affiliation">University of Dreams</span>
  My friends call me
  <span itemprop="additionalName">Johnny</span>
  You can visit my homepage at
  <a href="http://www.example.com.com" itemprop="url">www.example.com</a>
  <section itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
    I live at
    <span itemprop="streetAddress">1234 Peach Drive</span>
    <span itemprop="addressLocality">Warner Robins</span>
    <span itemprop="addressRegion">Georgia</span>.
  </section>
</section>
```

Check the [Schema Validator](https://developers.google.com/workspace/gmail/markup/testing-your-schema#schema_validator) tool to debug your markup and validate it against the supported schema.
