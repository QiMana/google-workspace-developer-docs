---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications
root: workspace
fetched_at: 2026-04-23T15:26:18.282Z
---

# REST Resource: settings.searchapplications

## Resource: SearchApplication

SearchApplication

JSON representation

```
{
  "name": string,
  "displayName": string,
  "dataSourceRestrictions": [
    {
      object (DataSourceRestriction)
    }
  ],
  "sourceConfig": [
    {
      object (SourceConfig)
    }
  ],
  "scoringConfig": {
    object (ScoringConfig)
  },
  "defaultSortOptions": {
    object (SortOptions)
  },
  "defaultFacetOptions": [
    {
      object (FacetOptions)
    }
  ],
  "returnResultThumbnailUrls": boolean,
  "operationIds": [
    string
  ],
  "enableAuditLog": boolean,
  "queryInterpretationConfig": {
    object (QueryInterpretationConfig)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the Search Application.</p><p>Format: searchapplications/{applicationId}.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name of the Search Application. The maximum length is 300 characters.</p></td></tr><tr><td><code>dataSourceRestrictions[]</code></td><td><p><code>object (<code>DataSourceRestriction</code>)</code></p><p>Retrictions applied to the configurations. The maximum number of elements is 10.</p></td></tr><tr><td><code>sourceConfig[]</code></td><td><p><code>object (<code>SourceConfig</code>)</code></p><p>Configuration for a sources specified in dataSourceRestrictions.</p></td></tr><tr><td><code>scoringConfig</code></td><td><p><code>object (<code>ScoringConfig</code>)</code></p><p>Configuration for ranking results.</p></td></tr><tr><td><code>defaultSortOptions</code></td><td><p><code>object (<code>SortOptions</code>)</code></p><p>The default options for sorting the search results</p></td></tr><tr><td><code>defaultFacetOptions[]</code></td><td><p><code>object (<code>FacetOptions</code>)</code></p><p>The default fields for returning facet results. The sources specified here also have been included in <code>dataSourceRestrictions</code> above.</p></td></tr><tr><td><code>returnResultThumbnailUrls</code></td><td><p><code>boolean</code></p><p>With each result we should return the URI for its thumbnail (when applicable)</p></td></tr><tr><td><code>operationIds[]</code></td><td><p><code>string</code></p><p>Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field.</p></td></tr><tr><td><code>enableAuditLog</code></td><td><p><code>boolean</code></p><p>Indicates whether audit logging is on/off for requests made for the search application in query APIs.</p></td></tr><tr><td><code>queryInterpretationConfig</code></td><td><p><code>object (<code>QueryInterpretationConfig</code>)</code></p><p>The default options for query interpretation</p></td></tr></tbody></table>

## DataSourceRestriction

Restriction on Datasource.

JSON representation

```
{
  "source": {
    object (Source)
  },
  "filterOptions": [
    {
      object (FilterOptions)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>Source</code>)</code></p><p>The source of restriction.</p></td></tr><tr><td><code>filterOptions[]</code></td><td><p><code>object (<code>FilterOptions</code>)</code></p><p>Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively.</p><p>The maximum number of elements is 20.</p><p>NOTE: Suggest API supports only few filters at the moment: "objecttype", "type" and "mimetype". For now, schema specific filters cannot be used to filter suggestions.</p></td></tr></tbody></table>

## Source

Defines sources for the suggest/search APIs.

JSON representation

```
{

  "name": string,
  "predefinedSource": enum (Source.PredefinedSource)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>source</code>.</p><p><code>source</code> can be only one of the following:</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Source name for content indexed by the <code>Indexing API</code>.</p></td></tr><tr><td><code>predefinedSource</code></td><td><p><code>enum (<code>Source.PredefinedSource</code>)</code></p><p>Predefined content source for Google Apps.</p></td></tr></tbody></table>

## Source.PredefinedSource

Predefined sources:

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>NONE</code></td><td></td></tr><tr><td><code>QUERY_HISTORY</code></td><td>Suggests queries issued by the user in the past. Only valid when used with the suggest API. Ignored when used in the query API.</td></tr><tr><td><code>PERSON</code></td><td>Suggests people in the organization. Only valid when used with the suggest API. Results in an error when used in the query API.</td></tr><tr><td><code>GOOGLE_DRIVE</code></td><td></td></tr><tr><td><code>GOOGLE_GMAIL</code></td><td></td></tr><tr><td><code>GOOGLE_SITES</code></td><td></td></tr><tr><td><code>GOOGLE_GROUPS</code></td><td></td></tr><tr><td><code>GOOGLE_CALENDAR</code></td><td></td></tr><tr><td><code>GOOGLE_KEEP</code></td><td></td></tr></tbody></table>

## FilterOptions

Filter options to be applied on query.

JSON representation

```
{
  "objectType": string,
  "filter": {
    object (Filter)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>objectType</code></td><td><p><code>string</code></p><p>If objectType is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters.</p></td></tr><tr><td><code>filter</code></td><td><p><code>object (<code>Filter</code>)</code></p><p>Generic filter to restrict the search, such as <code>lang:en</code>, <code>site:xyz</code>.</p></td></tr></tbody></table>

## Filter

A generic way of expressing filters in a query, which supports two approaches:

**1\. Setting a ValueFilter.** The name must match an operatorName defined in the schema for your data source.

**2\. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND.

JSON representation

```
{

  "valueFilter": {
    object (Filter.ValueFilter)
  },
  "compositeFilter": {
    object (Filter.CompositeFilter)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2"><p>Union field <code>filter</code>.</p><p><code>filter</code> can be only one of the following:</p></td></tr><tr><td><code>valueFilter</code></td><td><p><code>object (<code>Filter.ValueFilter</code>)</code></p></td></tr><tr><td><code>compositeFilter</code></td><td><p><code>object (<code>Filter.CompositeFilter</code>)</code></p></td></tr></tbody></table>

## Filter.ValueFilter

JSON representation

```
{
  "operatorName": string,
  "value": {
    object (Value)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>The <code>operatorName</code> applied to the query, such as <em>price_greater_than</em>. The filter can work against both types of filters defined in the schema for your data source:</p><ol><li><p><code>operatorName</code>, where the query filters results by the property that matches the value.</p></li><li><p><code>greaterThanOperatorName</code> or <code>lessThanOperatorName</code> in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query.</p></li></ol></td></tr><tr><td><code>value</code></td><td><p><code>object (<code>Value</code>)</code></p><p>The value to be compared with.</p></td></tr></tbody></table>

## Value

Definition of a single value with generic type.

JSON representation

```
{

  "stringValue": string,
  "integerValue": string,
  "doubleValue": number,
  "timestampValue": string,
  "booleanValue": boolean,
  "dateValue": {
    object (Date)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>value</code>. The value of the named property. <code>value</code> can be only one of the following:</td></tr><tr><td><code>stringValue</code></td><td><p><code>string</code></p></td></tr><tr><td><code>integerValue</code></td><td><p><code>string (int64 format)</code></p></td></tr><tr><td><code>doubleValue</code></td><td><p><code>number</code></p></td></tr><tr><td><code>booleanValue</code></td><td><p><code>boolean</code></p></td></tr><tr><td><code>dateValue</code></td><td><p><code>object (<code>Date</code>)</code></p></td></tr></tbody></table>

## Filter.CompositeFilter

JSON representation

```
{
  "logicOperator": enum (Filter.CompositeFilter.LogicOperator),
  "subFilters": [
    {
      object (Filter)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>logicOperator</code></td><td><p><code>enum (<code>Filter.CompositeFilter.LogicOperator</code>)</code></p><p>The logic operator of the sub filter.</p></td></tr><tr><td><code>subFilters[]</code></td><td><p><code>object (<code>Filter</code>)</code></p><p>Sub filters.</p></td></tr></tbody></table>

## Filter.CompositeFilter.LogicOperator

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>AND</code></td><td>Logical operators, which can only be applied to sub filters.</td></tr><tr><td><code>OR</code></td><td></td></tr><tr><td><code>NOT</code></td><td>NOT can only be applied on a single sub filter.</td></tr></tbody></table>

## SourceConfig

Configurations for a source while processing a `Search` or `query.suggest` request.

JSON representation

```
{
  "source": {
    object (Source)
  },
  "scoringConfig": {
    object (SourceScoringConfig)
  },
  "crowdingConfig": {
    object (SourceCrowdingConfig)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>source</code></td><td><p><code>object (<code>Source</code>)</code></p><p>The source for which this configuration is to be used.</p></td></tr><tr><td><code>scoringConfig</code></td><td><p><code>object (<code>SourceScoringConfig</code>)</code></p><p>The scoring configuration for the source.</p></td></tr><tr><td><code>crowdingConfig</code></td><td><p><code>object (<code>SourceCrowdingConfig</code>)</code></p><p>The crowding configuration for the source.</p></td></tr></tbody></table>

## SourceScoringConfig

Set the scoring configuration. This allows modifying the ranking of results for a source.

JSON representation

```
{
  "sourceImportance": enum (SourceScoringConfig.SourceImportance)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sourceImportance</code></td><td><p><code>enum (<code>SourceScoringConfig.SourceImportance</code>)</code></p><p>Importance of the source.</p></td></tr></tbody></table>

## SourceScoringConfig.SourceImportance

The importance of a source which can be used to indicate if a source should be given more priority in ranking compared to another source.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEFAULT</code></td><td></td></tr><tr><td><code>LOW</code></td><td></td></tr><tr><td><code>HIGH</code></td><td></td></tr></tbody></table>

## SourceCrowdingConfig

Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.

JSON representation

```
{
  "numResults": integer,
  "numSuggestions": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>numResults</code></td><td><p><code>integer</code></p><p>Maximum number of results allowed from a datasource in a result page as long as results from other sources are not exhausted. value specified must not be negative. A default value is used if this value is equal to 0. To disable crowding, set the value greater than 100.</p></td></tr><tr><td><code>numSuggestions</code></td><td><p><code>integer</code></p><p>Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0.</p></td></tr></tbody></table>

## ScoringConfig

Scoring configurations for a source while processing a `Search` or `query.suggest` request.

JSON representation

```
{
  "disableFreshness": boolean,
  "disablePersonalization": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>disableFreshness</code></td><td><p><code>boolean</code></p><p>Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI.</p></td></tr><tr><td><code>disablePersonalization</code></td><td><p><code>boolean</code></p><p>Whether to personalize the results. By default, personal signals will be used to boost results.</p></td></tr></tbody></table>

## SortOptions

JSON representation

```
{
  "operatorName": string,
  "sortOrder": enum (SortOptions.SortOrder)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>The name of the operator corresponding to the field to sort on. The corresponding property must be marked as <code>sortable</code>.</p></td></tr><tr><td><code>sortOrder</code></td><td><p><code>enum (<code>SortOptions.SortOrder</code>)</code></p><p>Ascending is the default sort order</p></td></tr></tbody></table>

## SortOptions.SortOrder

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ASCENDING</code></td><td></td></tr><tr><td><code>DESCENDING</code></td><td></td></tr></tbody></table>

## FacetOptions

Specifies operators to return facet results for. There will be one FacetResult for every sourceName/objectType/operatorName combination.

JSON representation

```
{
  "sourceName": string,
  "objectType": string,
  "operatorName": string,
  "numFacetBuckets": integer,

  "integerFacetingOptions": {
    object (IntegerFacetingOptions)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sourceName</code></td><td><p><code>string</code></p><p>Source name to facet on. Format: datasources/{sourceId} If empty, all data sources will be used.</p></td></tr><tr><td><code>objectType</code></td><td><p><code>string</code></p><p>If objectType is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets.</p></td></tr><tr><td><code>operatorName</code></td><td><p><code>string</code></p><p>The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions</p></td></tr><tr><td><code>numFacetBuckets</code></td><td><p><code>integer</code></p><p>Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100.</p></td></tr><tr><td colspan="2"><p>Union field <code>faceting_options</code>.</p><p><code>faceting_options</code> can be only one of the following:</p></td></tr><tr><td><code>integerFacetingOptions</code></td><td><p><code>object (<code>IntegerFacetingOptions</code>)</code></p><p>If set, describes integer faceting options for the given integer property. The corresponding integer property in the schema should be marked isFacetable. The number of buckets returned would be minimum of this and numFacetBuckets.</p></td></tr></tbody></table>

## IntegerFacetingOptions

Used to specify integer faceting options.

JSON representation

```
{
  "integerBuckets": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>integerBuckets[]</code></td><td><p><code>string (Int64Value format)</code></p><p>Buckets for given integer values should be in strictly ascending order. For example, if values supplied are (1,5,10,100), the following facet buckets will be formed {<1, [1,5), [5-10), [10-100), >=100}.</p></td></tr></tbody></table>

## QueryInterpretationConfig

Default options to interpret user query.

JSON representation

```
{
  "forceVerbatimMode": boolean,
  "forceDisableSupplementalResults": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>forceVerbatimMode</code></td><td><p><code>boolean</code></p><p>Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental results retrieval, and usage of synonyms including custom ones. If this flag is set to True, it will take precedence over the option set at query level. For the default value of False, query level flag will set the correct interpretation for verbatim mode.</p></td></tr><tr><td><code>forceDisableSupplementalResults</code></td><td><p><code>boolean</code></p><p>Set this flag to disable supplemental results retrieval, setting a flag here will not retrieve supplemental results for queries associated with a given search application. If this flag is set to True, it will take precedence over the option set at query level. For the default value of False, query level flag will set the correct interpretation for supplemental results.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a search application.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a search application.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified search application.</td></tr><tr><td><h3>list</h3></td><td>Lists all search applications.</td></tr><tr><td><h3>patch</h3></td><td>Updates a search application.</td></tr><tr><td><h3>reset</h3></td><td>Resets a search application to default settings.</td></tr><tr><td><h3>update</h3></td><td>Updates a search application.</td></tr></tbody></table>
