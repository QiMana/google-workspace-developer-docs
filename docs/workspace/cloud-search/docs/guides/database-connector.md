---
source: https://developers.google.com/workspace/cloud-search/docs/guides/database-connector
root: workspace
fetched_at: 2026-04-23T15:26:08.206Z
---

# Deploy a database connector

You can set up Google Cloud Search to discover and index data from your organization's databases by using the Cloud Search database connector.

## Important considerations

You can install and run the Cloud Search database connector in almost any environment where Java apps can run, as long as the connector has access to both the internet and the database.

### System requirements

<table><tbody><tr><th colspan="2">System requirements</th></tr><tr><td>Operating system</td><td>Windows or Linux</td></tr><tr><td>SQL database</td><td>Any SQL database with a JDBC 4.0 or later compliant driver, including:<ul><li>MS SQL Server (2008, 2012, 2014, 2016)</li><li>Oracle (11g, 12c)</li><li>Google Cloud SQL</li><li>MySQL</li></ul></td></tr><tr><td>Software</td><td>JDBC driver (downloaded and installed separately)</td></tr></tbody></table>

## Deploy the connector

These steps describe how to install the connector and configure it to index your databases and return results to Cloud Search users.

### Prerequisites

Before you deploy the connector, gather this information:

- Google Workspace private key (containing the service account ID). See [Configure access to the Cloud Search API](./project-setup.md).
- Google Workspace data source ID. See [Add a data source to search](https://support.google.com/a/answer/7056471).

### Step 1. Download and build the database connector software

1. Clone the connector repository from GitHub.
	```
	$ git clone https://github.com/google-cloudsearch/database-connector.git
	$ cd database-connector
	```
2. Check out your selected version:
	```
	$ git checkout tags/v1-0.0.3
	```
3. Build the connector:
	```
	$ mvn package
	```
	To skip tests, use `mvn package -DskipTests`.
4. Extract the connector zip file to your installation directory:
	```
	$ cp target/google-cloudsearch-database-connector-v1-0.0.3.zip installation-dir
	$ cd installation-dir
	$ unzip google-cloudsearch-database-connector-v1-0.0.3.zip
	$ cd google-cloudsearch-database-connector-v1-0.0.3
	```

### Step 2. Configure the database connector

1. Create a text file named `connector-config.properties` (the default). Google recommends the `.properties` or `.config` extension. Keep it in the same directory as the connector.
2. Add parameters as key-value pairs. The file must specify data source access, database access, a full traversal SQL statement, a content field title, and column definitions.
	```
	# Data source access
	api.sourceId=1234567890abcdef
	api.identitySourceId=0987654321lmnopq
	api.serviceAccountPrivateKeyFile=./PrivateKey.json
	# Database access
	db.url=jdbc:mysql://localhost:3306/mysql_test
	db.user=root
	db.password=passw0rd
	# Full traversal SQL statement
	db.allRecordsSql=select customer_id, first_name, last_name, phone from address_book
	# Column definitions and URL format
	db.allColumns=customer_id, first_name, last_name, phone
	db.uniqueKeyColumns=customer_id
	url.columns=customer_id
	# Content field
	contentTemplate.db.title=customer_id
	# Optional: ACLs
	defaultAcl.mode=fallback
	defaultAcl.public=true
	# Optional: traversal schedule
	schedule.traversalIntervalSecs=36000
	schedule.performTraversalOnStart=true
	```
	For database-specific parameters, see the [Configuration parameters reference](#configParameters). For common parameters, see [Google-supplied connector parameters](../reference/connector-configuration.md).

### Step 3. Run the database connector

Run the connector from the command line:

```
java
   -cp "google-cloudsearch-database-connector-v1-0.0.3.jar:mysql-connector-java-5.1.41-bin.jar"
   com.google.enterprise.cloudsearch.database.DatabaseFullTraversalConnector
   [-Dconfig=mysql.config]
```

The connector reports configuration and initialization errors. Other errors, such as invalid SQL syntax, appear when the connector first attempts to access the database.

## Configuration parameters reference

This section lists parameters used in the database connector configuration file.

### Data source access parameters

| Setting | Parameter |
| --- | --- |
| Data source ID | `api.sourceId = source-ID`  Required. The Cloud Search source ID. |
| Service account | `api.serviceAccountPrivateKeyFile = path`  Required. The path to the service account key file. |

### Database access parameters

| Setting | Parameter |
| --- | --- |
| Database URL | `db.url = database-URL`  Required. The full path, e.g., `jdbc:mysql://127.0.0.1/dbname`. |
| Credentials | `db.user = username`   `db.password = password`  Required. Read access is necessary for the relevant records. |

### Traversal SQL query parameters

The connector uses SQL `SELECT` queries to traverse records.

- **Full traversal**: Reads every configured record. Required for initial indexing and periodic re-indexing.
- **Incremental traversal**: Reads only newly modified records. Requires timestamp fields in the database.

| Setting | Parameter |
| --- | --- |
| Full traversal query | `db.allRecordsSql = SELECT columns FROM table`  Required. Include all columns used for content, IDs, and ACLs. |
| Incremental traversal query | `db.incrementalUpdateSql = SELECT columns FROM table WHERE update_time > ?`  Required for incremental schedules. The "?" is a mandatory timestamp placeholder. |

### Column definition parameters

| Setting | Parameter |
| --- | --- |
| All columns | `db.allColumns = column-1, column-2, ...`  Required. Lists all columns referenced in SQL queries. |
| Unique key columns | `db.uniqueKeyColumns = column-1`  Required. Defines the unique ID for each record. |
| URL link column | `url.columns = column-1`  Required. Specifies the column used for clickable search results. |

### Content fields

| Setting | Parameter |
| --- | --- |
| Title column | `contentTemplate.db.title = column-name`  Required. Highest priority for search indexing. |
| Prioritization | `contentTemplate.db.quality.high = column-1`  Designate columns as high, medium, or low quality. |
