---
source: https://developers.google.com/workspace/gmail/markup/reference/types/PropertyValueSpecification
root: workspace
fetched_at: 2026-04-23T15:29:47.598Z
---

# PropertyValueSpecification

Type name: [PropertyValueSpecification](./PropertyValueSpecification.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| defaultValue | [Text](./Text.md) or [Thing](./Thing.md) | The default value of the input. For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values. |
| maxValue | [Number](./Number.md) | The upper value of some characteristic or property. |
| minValue | [Number](./Number.md) | The lower value of some characteristic or property. |
| multipleValues | [Boolean](./Boolean.md) | Whether multiple values are allowed for the property. Default is false. |
| readonlyValue | [Boolean](./Boolean.md) | Whether or not a property is mutable. Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form. |
| stepValue | [Number](./Number.md) | The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification. |
| valueMaxLength | [Number](./Number.md) | Specifies the allowed range for number of characters in a literal value. |
| valueMinLength | [Number](./Number.md) | Specifies the minimum allowed range for number of characters in a literal value. |
| valueName | [Text](./Text.md) | Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name. |
| valuePattern | [Text](./Text.md) | Specifies a regular expression for testing literal values according to the HTML spec. |
| valueRequired | [Boolean](./Boolean.md) | Whether the property must be filled in to complete the action. Default is false. |
