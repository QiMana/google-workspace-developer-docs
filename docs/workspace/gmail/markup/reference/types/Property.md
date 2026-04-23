---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Property
root: workspace
fetched_at: 2026-04-23T15:29:47.408Z
---

# Property

Type name: [Property](./Property.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| domainIncludes | [Class](./Class.md) | Relates a property to a class that is (one of) the type(s) the property is expected to be used on. |
| inverseOf | [Property](./Property.md) | Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used. |
| rangeIncludes | [Class](./Class.md) | Relates a property to a class that constitutes (one of) the expected type(s) for values of the property. |
| supersededBy | [Property](./Property.md) | Relates a property to one that supersedes it. |
