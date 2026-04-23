---
source: https://developers.google.com/workspace/cloud-search/docs/guides/csv-connector
root: workspace
fetched_at: 2026-04-23T15:26:07.972Z
---

# Deploy a CSV Connector

This guide is for Google Cloud Search CSV (comma-separated values) connector administrators responsible for downloading, configuring, running, and monitoring the connector.

This guide includes instructions for these key tasks:

- Download the Cloud Search CSV connector software.
- Configure the connector for a specific CSV data source.
- Deploy and run the connector.

To understand the concepts in this document, be familiar with Google Workspace, CSV files, and Access Control Lists (ACLs).

## Overview of the Cloud Search CSV connector

The Cloud Search CSV connector works with any comma-separated values (CSV) text file. A CSV file stores tabular data, where each line is a data record.

The connector extracts rows from a CSV file and indexes them into Cloud Search using the Indexing API. Once indexed, rows are searchable through Cloud Search clients or the Query API. The connector also supports ACLs to control user access to content.

You can install the connector on Linux or Windows. Before deployment, ensure you have the following components:

- Java JRE 1.8 installed on the computer running the connector.
- Google Workspace information to establish connections:
	- [Google Workspace private key](./project-setup.md) (containing the service account ID).
		- [Google Workspace data source ID](https://support.google.com/a/answer/7056471).

Typically, the Google Workspace administrator for the domain supplies these credentials.

## Deployment steps

Follow these steps to deploy the Cloud Search CSV connector:

### 1\. Install the SDK

Install the SDK into your local Maven repository.

1. Clone the SDK repository from GitHub.
	```
	$ git clone https://github.com/google-cloudsearch/connector-sdk.git
	$ cd connector-sdk/csv
	```
2. Check out your selected version:
	```
	$ git checkout tags/v1-0.0.3
	```
3. Build the connector:
	```
	$ mvn package
	```
4. Extract and install the connector:
	```
	$ cp target/google-cloudsearch-csv-connector-v1-0.0.3.zip installation-dir
	$ cd installation-dir
	$ unzip google-cloudsearch-csv-connector-v1-0.0.3.zip
	$ cd google-cloudsearch-csv-connector-v1-0.0.3
	```

### 2\. Specify the CSV connector configuration

You control the connector's behavior through parameters in its configuration file. Configurable parameters include:

- Data source access.
- CSV file location and definitions.
- Unique ID columns.
- Traversal and ACL options.

To create a configuration file:

1. Open a text editor and name the file `connector-config.properties`.
2. Add configuration parameters as `key=value` pairs, with each pair on a new line. For an example of a configuration file, see [Example configuration file](#example-config).

Keep the configuration file in the same directory as the connector to simplify tracking. To ensure the connector recognizes your file, specify its path on the command line. Otherwise, the connector defaults to `connector-config.properties` in your local directory. See [Run the connector](#Run).

### 3\. Configure access to the Cloud Search data source

The configuration file must specify parameters to access the Cloud Search data source. You need the Data source ID, service account ID, and the path to the service account's private key file.

| Setting | Parameter |
| --- | --- |
| Data source ID | **`api.sourceId=1234567890abcdef`**  Required. The Cloud Search source ID set up by the Google Workspace administrator. |
| Path to service account private key | **`api.serviceAccountPrivateKeyFile=./PrivateKey.json`**  Required. The service account key file for connector accessibility. |
| Identity source ID | **`api.identitySourceId=x0987654321`**  Required if using external users and groups. The identity source ID set up by the Google Workspace administrator. |

### 4\. Configure CSV file parameters

Identify the file's path, format, and encoding.

| Setting | Parameter |
| --- | --- |
| Path to CSV file | **`csv.filePath=./movie_content.csv`**  Required. The path to the file for indexing. |
| File format | **`csv.format=DEFAULT`**  The format of the file. Possible values are from the Apache Commons CSV [CSVFormat](https://commons.apache.org/proper/commons-csv/apidocs/org/apache/commons/csv/CSVFormat.html) class.  Format values include: `DEFAULT`, `EXCEL`, `INFORMIX_UNLOAD`, `INFORMIX_UNLOAD_CSV`, `MYSQL`, `RFC4180`, `ORACLE`, `POSTGRESQL_CSV`, `POSTGRESQL_TEXT`, and `TDF`. If unspecified, Cloud Search uses `DEFAULT`. |
| File format modifier | **`csv.format.withMethod=value`**  A modification to how Cloud Search handles the file. Possible methods are from the Apache Commons CSV [CSVFormat](https://commons.apache.org/proper/commons-csv/apidocs/org/apache/commons/csv/CSVFormat.html) class and include those that take a single character, string, or boolean value.  For example, to specify a semicolon as a delimiter, use `csv.format.withDelimiter=;`. To ignore empty lines, use `csv.format.withIgnoreEmptyLines=true`. |
| File encoding type | **`csv.fileEncoding=UTF-8`**  The Java character set to use. Defaults to the platform character set. |

### 5\. Specify column names to index and unique key columns

Provide column information in the configuration file.

| Setting | Parameter |
| --- | --- |
| Columns to index | **`csv.csvColumns=movieId,movieTitle,description,actors,releaseDate,year,userratings...`**  The column names to be indexed from the CSV file. By default, the first row of the CSV is used as the header. If `csv.csvColumns` is specified, it takes precedence. To avoid indexing the first row as data when `csv.csvColumns` is set and the first row contains headers, also set `csv.skipHeaderRecord=true`. |
| Unique key columns | **`csv.uniqueKeyColumns=movieId`**  Columns used to generate a unique ID. Defaults to the record's hashcode. |

### 6\. Specify columns for clickable search result URLs

Enable clickable URLs for search results.

| Setting | Parameter |
| --- | --- |
| Search result URL format | **`url.format=https://mymoviesite.com/movies/{0}`**  Required. The format used to construct the view URL. |
| URL parameters | **`url.columns=movieId`**  Required. The CSV column names whose values will be used to generate the record's view URL. |
| Search results URL parameters to escape | **`url.columnsToEscape=movieId`**  Optional. The CSV column names whose values will be URL escaped to generate valid view URL. |

### 7\. Specify metadata, column formats, and search quality

You can add parameters to the configuration file that specify:

- [Metadata Configuration Parameters](#specify-metadata-info)
- [Column formats](#column-formats)
- [Search quality](#search-quality)

#### Metadata configuration parameters

These parameters describe columns for populating item metadata.

| **Setting** | **Parameter** |
| --- | --- |
| Title | **`itemMetadata.title.field=movieTitle`**   **`itemMetadata.title.defaultValue=Gone with the Wind`**  The metadata attribute for the document title. Default is an empty string. |
| URL | **`itemMetadata.sourceRepositoryUrl.field=url`**   **`itemMetadata.sourceRepositoryUrl.defaultValue=https://www.imdb.com/title/tt0031381/`**   The metadata attribute for the document URL in search results. |
| Created timestamp | **`itemMetadata.createTime.field=releaseDate`**   **`itemMetadata.createTime.defaultValue=1940-01-17`**  The metadata attribute for the document creation timestamp. |
| Last modified time | **`itemMetadata.updateTime.field=releaseDate`**   **`itemMetadata.updateTime.defaultValue=1940-01-17`**  The metadata attribute for the document's last modification timestamp. |
| Document language | **`itemMetadata.contentLanguage.field=languageCode`**   **`itemMetadata.contentLanguage.defaultValue=en-US`**  The content language for documents being indexed. |
| Schema object type | **`itemMetadata.objectType.field=type`**   **`itemMetadata.objectType.defaultValue=movie`**  The object type used by the connector, as defined in the [schema](./schema-guide.md). The connector won't index any structured data if this property is not specified. |

##### Datetime formats

This parameter specifies additional datetime formats for parsing string values into date or date-time fields.

| **Setting** | **Parameter** |
| --- | --- |
| Additional datetime formats | **`structuredData.dateTimePatterns=MM/dd/uuuu HH:mm:ssXXX`**   A **semicolon** -separated list of additional `java.time.format.DateTimeFormatter` patterns. The patterns are used when parsing string values for any date or date-time fields in the metadata or schema. The default value is an empty list, but RFC 3339 and RFC 1123 formats are always supported. |

#### Column formats

These parameters specify how to parse columns in the CSV file.

| Setting | Parameter |
| --- | --- |
| Skip header | **`csv.skipHeaderRecord=true`**  Ignore the first line. Default is false. |
| Multi-value columns | **`csv.multiValueColumns=genre,actors`**  Column names with multiple values. |
| Delimiter for multi-value columns | **`csv.multiValue.genre=;`**  Delimiter for multi-value columns. Default delimiter is a comma. |

#### Search quality

The connector uses a content template to format records. The title field has the highest priority. You can assign priority levels (high, medium, low) to other fields.

| Setting | Parameter |
| --- | --- |
| Content title | **`contentTemplate.csv.title=movieTitle`**  The content title is the highest search quality field. |
| High search quality for content fields | **`contentTemplate.csv.quality.high=actors`**  Content fields given a high search quality value. Default is an empty string. |
| Low search quality for content fields | **`contentTemplate.csv.quality.low=genre`**  Content fields given a low search quality value. Default is an empty string. |
| Medium search quality for content fields | **`contentTemplate.csv.quality.medium=description`**  Content fields given a medium search quality value. Default is an empty string. |
| Unspecified content fields | **`contentTemplate.csv.unmappedColumnsMode=IGNORE`**  How the connector handles unspecified content fields. Valid values are:  - *APPEND* —append unspecified content fields to the template - *IGNORE* —ignore unspecified content fields  The default value is *APPEND.* |

### 8\. Schedule data traversal

Traversal is the process of discovering content. The connector traverses CSV rows and indexes them using the Indexing API. The CSV connector only performs full traversals.

| Setting | Parameter |
| --- | --- |
| Traversal interval | `**schedule.traversalIntervalSecs**=7200`  Interval between full traversals in seconds. Default is 86400 (one day). |
| Traversal at startup | `**schedule.performTraversalOnStart**=false`  The connector performs a traversal at connector startup, rather than waiting for the first interval to expire. Default is `true.` |

### 9\. Specify ACL options

The connector uses ACLs to control access. If your repository provides ACLs, upload them. Otherwise, configure default ACLs. Set `defaultAcl.mode` to a value other than `none`.

| Setting | Parameter |
| --- | --- |
| ACL mode | `**defaultAcl.mode**=fallback`  Required. The connector supports only fallback mode. |
| Default ACL Name | **defaultAcl.name** = VIRTUAL\_CONTAINER\_FOR\_CONNECTOR\_1  Optional. Overrides the virtual container name used by the connector for default ACLs. The default value is `DEFAULT_ACL_VIRTUAL_CONTAINER`. Consider overriding this if multiple connectors are indexing content in the same data source. |
| Default public ACL | `**defaultAcl.public**=true`  Sets the entire repository to public domain access. Default is false. |
| Common ACL group readers | `**defaultAcl.readers.groups**=**google:group1, group2**` |
| Common ACL readers | `**defaultAcl.readers.users**=user1, user2, **google:**user3` |
| Common ACL denied group readers | `**defaultAcl.denied.groups**=group3` |
| Common Acl denied readers | `**defaultAcl.denied.users**=user4, user5` |
| Entire domain access | To specify that every indexed record be publicly accessible by every user in the domain, set both of the following options with values: - `**defaultAcl.mode**=fallback` - `**defaultAcl.public**=true` |
| Common defined ACL | To define a common ACL for each record, set the following parameters: - `**defaultAcl.mode**=fallback` - `**defaultAcl.public**=false` - `**defaultAcl.readers.groups**=**google:group1, group2**` - `**defaultAcl.readers.users**=user1, user2, **google:**user3` - `**defaultAcl.denied.groups**=group3` - `**defaultAcl.denied.users**=user4, user5`  Users and groups are assumed to be local domain-defined unless prefixed with " `google:`".  The default user or group is an empty string. Only supply user and group options if `defaultAcl.public` is `false`. Use a comma-delimited list for multiple groups and users.  If `defaultAcl.mode` is `none`, records are unsearchable without individual ACLs. |

## Schema definition

To support structured data queries, [set up a schema](./schema-guide.md#search_structured_data) for your data source.

For example, consider a CSV file with the following information about movies:

1. movieId
2. movieTitle
3. description
4. year
5. releaseDate
6. actors (multiple values separated by comma (,))
7. genre (multiple values)
8. ratings

Based on this structure, you can define the following schema for your data source:

```
{
  "objectDefinitions": [
    {
      "name": "movie",
      "propertyDefinitions": [
        {
          "name": "actors",
          "isReturnable": true,
          "isRepeatable": true,
          "isFacetable": true,
          "textPropertyOptions": {
            "operatorOptions": {
              "operatorName": "actor"
            }
          }
        },
        {
          "name": "releaseDate",
          "isReturnable": true,
          "isRepeatable": false,
          "isFacetable": false,
          "datePropertyOptions": {
            "operatorOptions": {
              "operatorName": "released",
              "lessThanOperatorName": "releasedbefore",
              "greaterThanOperatorName": "releasedafter"
            }
          }
        },
        {
          "name": "movieTitle",
          "isReturnable": true,
          "isRepeatable": false,
          "isFacetable": false,
          "textPropertyOptions": {
            "retrievalImportance": {
              "importance": "HIGHEST"
            },
            "operatorOptions": {
              "operatorName": "title"
            }
          }
        },
        {
          "name": "genre",
          "isReturnable": true,
          "isRepeatable": true,
          "isFacetable": true,
          "enumPropertyOptions": {
            "operatorOptions": {
              "operatorName": "genre"
            },
            "possibleValues": [
              {
                "stringValue": "Action"
              },
              {
                "stringValue": "Documentary"
              },
              {
                "stringValue": "Drama"
              },
              {
                "stringValue": "Crime"
              },
              {
                "stringValue": "Sci-fi"
              }
            ]
          }
        },
        {
          "name": "userRating",
          "isReturnable": true,
          "isRepeatable": false,
          "isFacetable": true,
          "integerPropertyOptions": {
            "orderedRanking": "ASCENDING",
            "maximumValue": "10",
            "operatorOptions": {
              "operatorName": "score",
              "lessThanOperatorName": "scorebelow",
              "greaterThanOperatorName": "scoreabove"
            }
          }
        }
      ]
    }
  ]
}
```

## Example configuration file

The following example configuration file shows the parameter `key=value` pairs that define an example connector's behavior.

```
# data source access
api.sourceId=1234567890abcd
api.serviceAccountPrivateKeyFile=./PrivateKey.json

# CSV data structure
csv.filePath=./movie_content.csv
csv.csvColumns=movieId,movieTitle,description,releaseYear,genre,actors,ratings,releaseDate
csv.skipHeaderRecord=true
url.format=https://mymoviesite.com/movies/{0}
url.columns=movieId
csv.datetimeFormat.releaseDate=yyyy-mm-dd
csv.multiValueColumns=genre,actors
csv.multiValue.genre=;
contentTemplate.csv.title=movieTitle

# metadata structured data and content
itemMetadata.title.field=movieTitle
itemMetadata.createTime.field=releaseDate
itemMetadata.contentLanguage.defaultValue=en-US
itemMetadata.objectType.defaultValue=movie
contentTemplate.csv.quality.medium=description
contentTemplate.csv.unmappedColumnsMode=IGNORE

#ACLs
defaultAcl.mode=fallback
defaultAcl.public=true
```

## Run the connector

To run the connector from the command line:

```
$ java -jar google-cloudsearch-csv-connector-v1-0.0.3.jar -Dconfig=my.config
```

By default, connector logs are available on standard output. You can log to files by specifying `logging.properties`.
