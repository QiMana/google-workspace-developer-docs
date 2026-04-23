---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ProductModel
root: workspace
fetched_at: 2026-04-23T15:29:47.159Z
---

# ProductModel

Type name: [ProductModel](./ProductModel.md)

| Name | Type | Description |
| --- | --- | --- |
| isVariantOf | [ProductModel](./ProductModel.md) | A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. |
| predecessorOf | [ProductModel](./ProductModel.md) | A pointer from a previous, often discontinued variant of the product to its newer variant. |
| successorOf | [ProductModel](./ProductModel.md) | A pointer from a newer variant of a product to its previous, often discontinued predecessor. |
