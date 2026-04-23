---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/Schema
root: workspace
fetched_at: 2026-04-23T15:26:13.061Z
---

# Schema

The schema definition for a data source.

JSON representation

```
{
  "objectDefinitions": [
    {
      object (ObjectDefinition)
    }
  ],
  "operationIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectDefinitions[]</code></td><td><p><code>object (<code>ObjectDefinition</code>)</code></p><p>The list of top-level objects for the data source. The maximum number of elements is 10.</p></td></tr><tr><td><code>operationIds[]</code></td><td><p><code>string</code></p><p>IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content.</p></td></tr></tbody></table>

## ObjectDefinition

The definition for an object within a data source.

JSON representation

```
{
  "name": string,
  "options": {
    object (ObjectOptions)
  },
  "propertyDefinitions": [
    {
      object (PropertyDefinition)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name for the object, which then defines its type. Item indexing requests should set the <code>objectType</code> field equal to this value. For example, if <em>name</em> is <em>Document</em>, then indexing requests for items of type Document should set <code>objectType</code> equal to <em>Document</em>. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.</p></td></tr><tr><td><code>options</code></td><td><p><code>object (<code>ObjectOptions</code>)</code></p><p>The optional object-specific options.</p></td></tr><tr><td><code>propertyDefinitions[]</code></td><td><p><code>object (<code>PropertyDefinition</code>)</code></p><p>The property definitions for the object. The maximum number of elements is 1000.</p></td></tr></tbody></table>

## ObjectOptions

The options for an object.

JSON representation

```
{
  "freshnessOptions": {
    object (ObjectOptions.FreshnessOptions)
  },
  "displayOptions": {
    object (ObjectDisplayOptions)
  },
  "suggestionFilteringOperators": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>freshnessOptions</code></td><td><p><code>object (<code>ObjectOptions.FreshnessOptions</code>)</code></p><p>The freshness options for an object.</p></td></tr><tr><td><code>displayOptions</code></td><td><p><code>object (<code>ObjectDisplayOptions</code>)</code></p><p>The options that determine how the object is displayed in the Cloud Search results page.</p></td></tr><tr><td><code>suggestionFilteringOperators[]</code></td><td><p><code>string</code></p><p>Operators that can be used to filter suggestions. For <code>query.suggest</code> API, only operators mentioned here will be honored in the <code>FilterOptions</code>. Only TEXT and ENUM operators are supported.</p><p>NOTE: "objecttype", "type" and "mimetype" are already supported. This property is to configure schema specific operators.</p><p>Even though this is an array, only one operator can be specified. This is an array for future extensibility.</p><p>Operators mapping to multiple properties within the same object are not supported. If the operator spans across different object types, this option has to be set once for each object definition.</p></td></tr></tbody></table>

## ObjectOptions.FreshnessOptions

Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.

JSON representation

```
{
  "freshnessProperty": string,
  "freshnessDuration": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>freshnessProperty</code></td><td><p><code>string</code></p><p>This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the <code>property definitions</code> and it must be a <code>timestamp type</code> or <code>date type</code>. Otherwise, the Indexing API uses <code>updateTime</code> as the freshness indicator. The maximum length is 256 characters.</p><p>When a property is used to calculate freshness, the value defaults to 2 years from the current time.</p></td></tr><tr><td><code>freshnessDuration</code></td><td><p><code>string (<code>Duration</code> format)</code></p><p>The duration after which an object should be considered stale. The default value is 180 days (in seconds).</p><p>A duration in seconds with up to nine fractional digits, ending with ' <code>s</code> '. Example: <code>"3.5s"</code>.</p></td></tr></tbody></table>

## ObjectDisplayOptions

The display options for an object.

JSON representation

```
{
  "objectDisplayLabel": string,
  "metalines": [
    {
      object (ObjectDisplayOptions.Metaline)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectDisplayLabel</code></td><td><p><code>string</code></p><p>The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters.</p></td></tr><tr><td><code>metalines[]</code></td><td><p><code>object (<code>ObjectDisplayOptions.Metaline</code>)</code></p><p>Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set <code>isReturnable</code> to true. The maximum number of metalines is 3.</p></td></tr></tbody></table>

## ObjectDisplayOptions.Metaline

A metaline is a list of properties that are displayed along with the search result to provide context.

JSON representation

```
{
  "properties": [
    {
      object (ObjectDisplayOptions.DisplayedProperty)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>properties[]</code></td><td><p><code>object (<code>ObjectDisplayOptions.DisplayedProperty</code>)</code></p><p>The list of displayed properties for the metaline. The maximum number of properties is 5.</p></td></tr></tbody></table>

## ObjectDisplayOptions.DisplayedProperty

A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the `display label` for that property if one is specified. If a display label is not specified, only the values is shown.

JSON representation

```
{
  "propertyName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>propertyName</code></td><td><p><code>string</code></p><p>The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema.</p></td></tr></tbody></table>

## PropertyDefinition

The definition of a property within an object.

JSON representation

```
{
  "name": string,
  "isReturnable": boolean,
  "isRepeatable": boolean,
  "isSortable": boolean,
  "isFacetable": boolean,
  "isSuggestable": boolean,
  "isWildcardSearchable": boolean,
  "displayOptions": {
    object (PropertyDisplayOptions)
  },

  "integerPropertyOptions": {
    object (IntegerPropertyOptions)
  },
  "doublePropertyOptions": {
    object (DoublePropertyOptions)
  },
  "timestampPropertyOptions": {
    object (TimestampPropertyOptions)
  },
  "booleanPropertyOptions": {
    object (BooleanPropertyOptions)
  },
  "objectPropertyOptions": {
    object (ObjectPropertyOptions)
  },
  "enumPropertyOptions": {
    object (EnumPropertyOptions)
  },
  "datePropertyOptions": {
    object (DatePropertyOptions)
  },
  "textPropertyOptions": {
    object (TextPropertyOptions)
  },
  "htmlPropertyOptions": {
    object (HtmlPropertyOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the property. Item indexing requests sent to the Indexing API should set the <code>property name</code> equal to this value. For example, if name is <em>subject_line</em>, then indexing requests for document items with subject fields should set the <code>name</code> for that field equal to <em>subject_line</em>. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.</p></td></tr><tr><td><code>isReturnable</code></td><td><p><code>boolean</code></p><p>Indicates that the property identifies data that should be returned in search results via the query API. If set to <em>true</em>, indicates that query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to <em>true</em> here only if the field is needed for search results. Cannot be true for properties whose type is an object.</p></td></tr><tr><td><code>isRepeatable</code></td><td><p><code>boolean</code></p><p>Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected.</p></td></tr><tr><td><code>isSortable</code></td><td><p><code>boolean</code></p><p>Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, date, double, integer, and timestamp properties.</p></td></tr><tr><td><code>isFacetable</code></td><td><p><code>boolean</code></p><p>Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, enum, integer, and text properties.</p></td></tr><tr><td><code>isSuggestable</code></td><td><p><code>boolean</code></p><p>Indicates that the property can be used for generating query suggestions.</p></td></tr><tr><td><code>displayOptions</code></td><td><p><code>object (<code>PropertyDisplayOptions</code>)</code></p><p>The options that determine how the property is displayed in the Cloud Search results page if it's specified to be displayed in the object's <code>display options</code>.</p></td></tr><tr><td colspan="2">Union field <code>property_options</code>. The type-specific options that determine how the property is indexed and used. In the case where the options should be the default options for a type, this field must still be set to one of the types. If this field is not set, schema updates are rejected. <code>property_options</code> can be only one of the following:</td></tr><tr><td><code>integerPropertyOptions</code></td><td><p><code>object (<code>IntegerPropertyOptions</code>)</code></p></td></tr><tr><td><code>doublePropertyOptions</code></td><td><p><code>object (<code>DoublePropertyOptions</code>)</code></p></td></tr><tr><td><code>booleanPropertyOptions</code></td><td><p><code>object (<code>BooleanPropertyOptions</code>)</code></p></td></tr><tr><td><code>objectPropertyOptions</code></td><td><p><code>object (<code>ObjectPropertyOptions</code>)</code></p></td></tr><tr><td><code>enumPropertyOptions</code></td><td><p><code>object (<code>EnumPropertyOptions</code>)</code></p></td></tr><tr><td><code>datePropertyOptions</code></td><td><p><code>object (<code>DatePropertyOptions</code>)</code></p></td></tr><tr><td><code>textPropertyOptions</code></td><td><p><code>object (<code>TextPropertyOptions</code>)</code></p></td></tr><tr><td><code>htmlPropertyOptions</code></td><td><p><code>object (<code>HtmlPropertyOptions</code>)</code></p></td></tr></tbody></table>

## IntegerPropertyOptions

The options for integer properties.

JSON representation

```
{
  "orderedRanking": enum (IntegerPropertyOptions.OrderedRanking),
  "minimumValue": string,
  "maximumValue": string,
  "operatorOptions": {
    object (IntegerPropertyOptions.IntegerOperatorOptions)
  },

  "integerFacetingOptions": {
    object (IntegerFacetingOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>orderedRanking</code></td><td><p><code>enum (<code>IntegerPropertyOptions.OrderedRanking</code>)</code></p><p>Used to specify the ordered ranking for the integer. Can only be used if <code>isRepeatable</code> is false.</p></td></tr><tr><td><code>minimumValue</code></td><td><p><code>string (Int64Value format)</code></p><p>The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the <code>ordered ranking</code>. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value.</p></td></tr><tr><td><code>maximumValue</code></td><td><p><code>string (Int64Value format)</code></p><p>The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the <code>ordered ranking</code>. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value.</p></td></tr><tr><td><code>operatorOptions</code></td><td><p><code>object (<code>IntegerPropertyOptions.IntegerOperatorOptions</code>)</code></p><p>If set, describes how the integer should be used as a search operator.</p></td></tr><tr><td colspan="2"><p>Union field <code>faceting_options</code>.</p><p><code>faceting_options</code> can be only one of the following:</p></td></tr><tr><td><code>integerFacetingOptions</code></td><td><p><code>object (<code>IntegerFacetingOptions</code>)</code></p><p>If set, describes integer faceting options for the given integer property. The corresponding integer property should be marked isFacetable.</p></td></tr></tbody></table>

## IntegerPropertyOptions.OrderedRanking

Used to specify how an integer value should be ranked relative to other values. An integer with a higher ordered ranking suggests greater importance. For example, in some data sources lower priority indicates higher importance while in others a higher priority indicates higher importance.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NO_ORDER</code></td><td>There is no ranking order for the property. Results are not adjusted by this property's value.</td></tr><tr><td><code>ASCENDING</code></td><td>This property is ranked in ascending order. Lower values indicate lower ranking.</td></tr><tr><td><code>DESCENDING</code></td><td>This property is ranked in descending order. Lower values indicate higher ranking.</td></tr></tbody></table>

## IntegerPropertyOptions.IntegerOperatorOptions

Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

JSON representation

```
{
  "operatorName": string,
  "lessThanOperatorName": string,
  "greaterThanOperatorName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the integer property. For example, if operatorName is <em>priority</em> and the property's name is <em>priorityVal</em>, then queries like <em>priority:<value></em> show results only where the value of the property named <em>priorityVal</em> matches <em><value></em>. By contrast, a search that uses the same <em><value></em> without an operator returns all items where <em><value></em> matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr><tr><td><code>lessThanOperatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the integer property using the less-than operator. For example, if lessThanOperatorName is <em>prioritybelow</em> and the property's name is <em>priorityVal</em>, then queries like <em>prioritybelow:<value></em> show results only where the value of the property named <em>priorityVal</em> is less than <em><value></em>. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr><tr><td><code>greaterThanOperatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the integer property using the greater-than operator. For example, if greaterThanOperatorName is <em>priorityabove</em> and the property's name is <em>priorityVal</em>, then queries like <em>priorityabove:<value></em> show results only where the value of the property named <em>priorityVal</em> is greater than <em><value></em>. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr></tbody></table>

## DoublePropertyOptions

The options for double properties.

JSON representation

```
{
  "operatorOptions": {
    object (DoublePropertyOptions.DoubleOperatorOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorOptions</code></td><td><p><code>object (<code>DoublePropertyOptions.DoubleOperatorOptions</code>)</code></p><p>If set, describes how the double should be used as a search operator.</p></td></tr></tbody></table>

## DoublePropertyOptions.DoubleOperatorOptions

Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

JSON representation

```
{
  "operatorName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr></tbody></table>

## TimestampPropertyOptions

JSON representation

```
{
  "operatorOptions": {
    object (TimestampPropertyOptions.TimestampOperatorOptions)
  }
}
```

## TimestampPropertyOptions.TimestampOperatorOptions

JSON representation

```
{
  "operatorName": string,
  "lessThanOperatorName": string,
  "greaterThanOperatorName": string
}
```

## BooleanPropertyOptions

The options for boolean properties.

JSON representation

```
{
  "operatorOptions": {
    object (BooleanPropertyOptions.BooleanOperatorOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorOptions</code></td><td><p><code>object (<code>BooleanPropertyOptions.BooleanOperatorOptions</code>)</code></p><p>If set, describes how the boolean should be used as a search operator.</p></td></tr></tbody></table>

## BooleanPropertyOptions.BooleanOperatorOptions

Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

JSON representation

```
{
  "operatorName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is <em>closed</em> and the property's name is <em>isClosed</em>, then queries like <em>closed:<value></em> show results only where the value of the property named <em>isClosed</em> matches <em><value></em>. By contrast, a search that uses the same <em><value></em> without an operator returns all items where <em><value></em> matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr></tbody></table>

## ObjectPropertyOptions

The options for object properties.

JSON representation

```
{
  "subobjectProperties": [
    {
      object (PropertyDefinition)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>subobjectProperties[]</code></td><td><p><code>object (<code>PropertyDefinition</code>)</code></p><p>The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named <em>street</em>, <em>city</em>, and <em>state</em>. The maximum number of elements is 1000.</p></td></tr></tbody></table>

## EnumPropertyOptions

The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.

JSON representation

```
{
  "possibleValues": [
    {
      object (EnumPropertyOptions.EnumValuePair)
    }
  ],
  "orderedRanking": enum (EnumPropertyOptions.OrderedRanking),
  "operatorOptions": {
    object (EnumPropertyOptions.EnumOperatorOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>possibleValues[]</code></td><td><p><code>object (<code>EnumPropertyOptions.EnumValuePair</code>)</code></p><p>The list of possible values for the enumeration property. All EnumValuePairs must provide a string value. If you specify an integer value for one EnumValuePair, then all possible EnumValuePairs must provide an integer value. Both the string value and integer value must be unique over all possible values. Once set, possible values cannot be removed or modified. If you supply an ordered ranking and think you might insert additional enum values in the future, leave gaps in the initial integer values to allow adding a value in between previously registered values. The maximum number of elements is 100.</p></td></tr><tr><td><code>orderedRanking</code></td><td><p><code>enum (<code>EnumPropertyOptions.OrderedRanking</code>)</code></p><p>Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if <code>isRepeatable</code> is false.</p></td></tr><tr><td><code>operatorOptions</code></td><td><p><code>object (<code>EnumPropertyOptions.EnumOperatorOptions</code>)</code></p><p>If set, describes how the enum should be used as a search operator.</p></td></tr></tbody></table>

## EnumPropertyOptions.EnumValuePair

The enumeration value pair defines two things: a required string value and an optional integer value. The string value defines the necessary query term required to retrieve that item, such as *p0* for a priority item. The integer value determines the ranking of that string value relative to other enumerated values for the same property. For example, you might associate *p0* with *0* and define another enum pair such as *p1* and *1*. You must use the integer value in combination with `ordered ranking` to set the ranking of a given value relative to other enumerated values for the same property name. Here, a ranking order of DESCENDING for *priority* properties results in a ranking boost for items indexed with a value of *p0* compared to items indexed with a value of *p1*. Without a specified ranking order, the integer value has no effect on item ranking.

JSON representation

```
{
  "stringValue": string,
  "integerValue": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stringValue</code></td><td><p><code>string</code></p><p>The string value of the EnumValuePair. The maximum length is 32 characters.</p></td></tr><tr><td><code>integerValue</code></td><td><p><code>integer</code></p><p>The integer value of the EnumValuePair which must be non-negative. Optional.</p></td></tr></tbody></table>

## EnumPropertyOptions.OrderedRanking

Used to specify the ranking direction for an `EnumValuePair` integer relative to other EnumValuePair integer values. For some properties, lower integer values indicate higher importance, while in others a higher integer indicates higher importance.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NO_ORDER</code></td><td>There is no ranking order for the property. Results aren't adjusted by this property's value.</td></tr><tr><td><code>ASCENDING</code></td><td>This property is ranked in ascending order. Lower values indicate lower ranking.</td></tr><tr><td><code>DESCENDING</code></td><td>This property is ranked in descending order. Lower values indicate higher ranking.</td></tr></tbody></table>

## EnumPropertyOptions.EnumOperatorOptions

Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.

JSON representation

```
{
  "operatorName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is <em>priority</em> and the property's name is <em>priorityVal</em>, then queries like <em>priority:<value></em> show results only where the value of the property named <em>priorityVal</em> matches <em><value></em>. By contrast, a search that uses the same <em><value></em> without an operator returns all items where <em><value></em> matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr></tbody></table>

## DatePropertyOptions

The options for date properties.

JSON representation

```
{
  "operatorOptions": {
    object (DatePropertyOptions.DateOperatorOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorOptions</code></td><td><p><code>object (<code>DatePropertyOptions.DateOperatorOptions</code>)</code></p><p>If set, describes how the date should be used as a search operator.</p></td></tr></tbody></table>

## DatePropertyOptions.DateOperatorOptions

Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

JSON representation

```
{
  "operatorName": string,
  "lessThanOperatorName": string,
  "greaterThanOperatorName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>Indicates the actual string required in the query in order to isolate the date property. For example, suppose an issue tracking schema object has a property named <em>closeDate</em> that specifies an operator with an operatorName of <em>closedon</em>. For searches on that data, queries like <em>closedon:<value></em> show results only where the value of the <em>closeDate</em> property matches <em><value></em>. By contrast, a search that uses the same <em><value></em> without an operator returns all items where <em><value></em> matches the value of any String properties or text within the content field for the indexed datasource. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr><tr><td><code>lessThanOperatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the date property using the less-than operator. For example, if lessThanOperatorName is <em>closedbefore</em> and the property's name is <em>closeDate</em>, then queries like <em>closedbefore:<value></em> show results only where the value of the property named <em>closeDate</em> is earlier than <em><value></em>. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr><tr><td><code>greaterThanOperatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the date property using the greater-than operator. For example, if greaterThanOperatorName is <em>closedafter</em> and the property's name is <em>closeDate</em>, then queries like <em>closedafter:<value></em> show results only where the value of the property named <em>closeDate</em> is later than <em><value></em>. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr></tbody></table>

## TextPropertyOptions

The options for text properties.

JSON representation

```
{
  "retrievalImportance": {
    object (RetrievalImportance)
  },
  "operatorOptions": {
    object (TextPropertyOptions.TextOperatorOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>retrievalImportance</code></td><td><p><code>object (<code>RetrievalImportance</code>)</code></p><p>Indicates the search quality importance of the tokens within the field when used for retrieval.</p></td></tr><tr><td><code>operatorOptions</code></td><td><p><code>object (<code>TextPropertyOptions.TextOperatorOptions</code>)</code></p><p>If set, describes how the property should be used as a search operator.</p></td></tr></tbody></table>

## RetrievalImportance

JSON representation

```
{
  "importance": enum (RetrievalImportance.Importance)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>importance</code></td><td><p><code>enum (<code>RetrievalImportance.Importance</code>)</code></p><p>Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed.</p></td></tr></tbody></table>

## RetrievalImportance.Importance

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEFAULT</code></td><td>Treat the match like a body text match.</td></tr><tr><td><code>HIGHEST</code></td><td>Treat the match like a match against title of the item.</td></tr><tr><td><code>HIGH</code></td><td>Treat the match with higher importance than body text.</td></tr><tr><td><code>LOW</code></td><td>Treat the match with lower importance than body text.</td></tr><tr><td><code>NONE</code></td><td>Do not match against this field during retrieval. The property can still be used for operator matching, faceting, and suggest if desired.</td></tr></tbody></table>

## TextPropertyOptions.TextOperatorOptions

Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

JSON representation

```
{
  "operatorName": string,
  "exactMatchWithOperator": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is <em>subject</em> and the property's name is <em>subjectLine</em>, then queries like <em>subject:<value></em> show results only where the value of the property named <em>subjectLine</em> matches <em><value></em>. By contrast, a search that uses the same <em><value></em> without an operator returns all items where <em><value></em> matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr><tr><td><code>exactMatchWithOperator</code></td><td><p><code>boolean</code></p><p>If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is "genre" and the value is "science-fiction" the query restrictions "genre:science" and "genre:fiction" doesn't match the item; "genre:science-fiction" does. Text value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is "science-fiction" the queries "genre:science" and "genre:fiction" matches the item.</p></td></tr></tbody></table>

## HtmlPropertyOptions

The options for html properties.

JSON representation

```
{
  "retrievalImportance": {
    object (RetrievalImportance)
  },
  "operatorOptions": {
    object (HtmlPropertyOptions.HtmlOperatorOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>retrievalImportance</code></td><td><p><code>object (<code>RetrievalImportance</code>)</code></p><p>Indicates the search quality importance of the tokens within the field when used for retrieval. Can only be set to DEFAULT or NONE.</p></td></tr><tr><td><code>operatorOptions</code></td><td><p><code>object (<code>HtmlPropertyOptions.HtmlOperatorOptions</code>)</code></p><p>If set, describes how the property should be used as a search operator.</p></td></tr></tbody></table>

## HtmlPropertyOptions.HtmlOperatorOptions

Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

JSON representation

```
{
  "operatorName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is <em>subject</em> and the property's name is <em>subjectLine</em>, then queries like <em>subject:<value></em> show results only where the value of the property named <em>subjectLine</em> matches <em><value></em>. By contrast, a search that uses the same <em><value></em> without an operator return all items where <em><value></em> matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.</p></td></tr></tbody></table>

## PropertyDisplayOptions

The display options for a property.

JSON representation

```
{
  "displayLabel": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayLabel</code></td><td><p><code>string</code></p><p>The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is '1', the value by itself may not be useful context for the user. If the display name given was 'priority', then the user sees 'priority: 1' in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters.</p></td></tr></tbody></table>
