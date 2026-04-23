---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ItemList
root: workspace
fetched_at: 2026-04-23T15:29:35.359Z
---

# ItemList

Type name: [ItemList](./ItemList.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| itemListElement | [ListItem](./ListItem.md), [Text](./Text.md) or [Thing](./Thing.md) | For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.      Text values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.      Note: The order of elements in your mark-up is not sufficient for indicating the order or elements. Use ListItem with a 'position' property in such cases. |
| itemListOrder | [ItemListOrderType](./ItemListOrderType.md) or [Text](./Text.md) | Type of ordering (e.g. Ascending, Descending, Unordered). |
| numberOfItems | [Number](./Number.md) | The number of items in an ItemList. Note that some descriptions might not full describe all items in a list (e.g. multi-page pagination). |
