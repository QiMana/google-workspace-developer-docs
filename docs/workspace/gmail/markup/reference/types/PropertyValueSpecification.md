---
source: https://developers.google.com/workspace/gmail/markup/reference/types/PropertyValueSpecification
root: workspace
fetched_at: 2026-04-23T15:29:47.598Z
---

# PropertyValueSpecification

Type name: [PropertyValueSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PropertyValueSpecification)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| defaultValue | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | The default value of the input. For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values. |
| maxValue | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The upper value of some characteristic or property. |
| minValue | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The lower value of some characteristic or property. |
| multipleValues | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | Whether multiple values are allowed for the property. Default is false. |
| readonlyValue | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | Whether or not a property is mutable. Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form. |
| stepValue | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification. |
| valueMaxLength | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | Specifies the allowed range for number of characters in a literal value. |
| valueMinLength | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | Specifies the minimum allowed range for number of characters in a literal value. |
| valueName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name. |
| valuePattern | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Specifies a regular expression for testing literal values according to the HTML spec. |
| valueRequired | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | Whether the property must be filled in to complete the action. Default is false. |
