---
source: https://developers.google.com/workspace/cloud-search/docs/guides/sharepoint-online-connector
root: workspace
fetched_at: 2026-04-23T15:26:11.532Z
---

# Deploy the Microsoft SharePoint Online connector

You can set up Google Cloud Search to return results from your organization's SharePoint Online content in addition to your Google Workspace content. Use the Cloud Search SharePoint Online connector and configure it to access a specific SharePoint Online data source.

## Important considerations

Before deploying the SharePoint Online connector, be aware of the following considerations.

### Honored SharePoint settings

The connector always honors the **Search Visibility** setting on SharePoint. For draft documents, the permissions on the user account the connector uses to access SharePoint Online control which draft documents it indexes and returns. If the account has only "Full Read" permissions, the connector honors the "Draft item visibility" settings.

You also configure the connector to limit results based on user account access. To apply security trimming, synchronize these external identities with Google Cloud Directory:

- Office 365 / Azure AD users.
- Office 365 / Azure AD security groups.
- SharePoint groups (with Office 365 users and groups as members).

### Search optimization

Improve the search experience by configuring the connector to return relevant results. Use HTML generation parameters in the configuration file to set field impact levels.

To set up a schema, see [Create and register a schema](https://developers.google.com/workspace/cloud-search/docs/guides/schema-guide). When setting up a schema:

- The connector normalizes SharePoint content types to valid object definition names (A-Z, a-z, 0-9). For example, "News Article" becomes "NewsArticle".
- If the connector cannot match an object definition, it uses the fallback object type (`itemMetadata.objectType`). See [Metadata configuration parameters](https://developers.google.com/workspace/cloud-search/docs/reference/connector-configuration#metadata-configuration-parameters).
- The connector maps SharePoint property names to property definitions.
- The connector overrides the media type for Microsoft Outlook `.msg` files and indexes them as `application/vnd.ms-outlook`.

### Known connector limitations

- Each connector instance indexes content from only a single site collection. To index multiple site collections, set up additional instances.
- Memory consumption increases with the number of unique users and groups in ACLs.
- Delete notifications can take more than 4 hours to propagate.

### System requirements

<table><tbody><tr><th colspan="2">System requirements</th></tr><tr><td>Operating system</td><td>Windows Server 2016, Ubuntu, Red Hat Enterprise Linux 5.0, or SUSE Enterprise Linux 10 (64-bit).</td></tr><tr><td>Authentication</td><td>Live Authentication.</td></tr><tr><td>Software</td><td>SharePoint Online environment; Java JRE 1.8.</td></tr></tbody></table>

## Deploy the connector

Follow these steps to deploy the SharePoint Online connector.

### Prerequisites

1. Create a Google Workspace private key. See [Configure access to the Cloud Search API](https://developers.google.com/workspace/cloud-search/docs/guides/project-setup).
2. Add a data source to search and record its ID. See [Add a data source to search](https://support.google.com/a/answer/7056471).
3. For ACL-based results, your administrator must create two identity sources (one for Office 365 and one for SharePoint groups) and provide the Google Workspace customer ID. See [Map user identities](https://support.google.com/a/answer/9039510).
4. Set up a user account for the connector with SharePoint Online Site Collection Administrator privileges.
5. Create Azure Active Directory application credentials with `Group.Read.All` and `User.Read.All` permissions. Note the Application ID, Tenant, and Client Secret.

### Step 1. Install the connector software

1. Clone the repository:
	```
	$ git clone https://github.com/google-cloudsearch/sharepoint-connector.git
	$ cd sharepoint-connector
	```
2. Check out your selected version (e.g., `v1-0.0.3`):
	```
	$ git checkout tags/v1-0.0.3
	```
3. Build the connector:
	```
	$ mvn package
	```
	To skip tests, use `mvn package -DskipTests`.
4. Extract the ZIP file to your installation directory.

### Step 2. Create the configuration file

Create `sharepoint-online-connector.config` in the installation directory. Add parameters as key-value pairs, as shown in the following example:

```
api.sourceId=08ef8becd116faa4546b8ca2c84b2879
api.serviceAccountPrivateKeyFile=service_account.json
sharepoint.server=https://mydomain.onmicrosoft.com
sharepoint.siteCollectionOnly=true
sharepoint.username=admin@mydomain.onmicrosoft.com
sharepoint.password=password
sharepoint.formsAuthenticationMode=LIVE
sharepoint.deploymentType=ONLINE
api.identitySourceId=08ef8becd116faa475de26d9b291fed9
api.referenceIdentitySources=defaultIdentitySource
api.referenceIdentitySource.defaultIdentitySource.id=08ef8becd116faa5d3783f8c5a80e5aa
```

See the [reference](#reference) or [Google-supplied parameters](https://developers.google.com/workspace/cloud-search/docs/reference/connector-configuration) for details.

### Step 3. Set up logging

Create a `logs` folder and a `logging.properties` file with this content:

```
handlers = java.util.logging.ConsoleHandler,java.util.logging.FileHandler
# Default log level
.level = INFO

# uncomment line below to increase logging level for SharePoint APIsa
#com.google.enterprise.cloudsearch.sharepoint.level=FINE

# uncomment line below to increase logging level to enable API trace
#com.google.api.client.http.level = FINE
java.util.logging.ConsoleHandler.level = INFO
java.util.logging.FileHandler.pattern=logs/connector-sharepoint.%g.log
java.util.logging.FileHandler.limit=10485760
java.util.logging.FileHandler.count=10
java.util.logging.FileHandler.formatter=java.util.logging.SimpleFormatter
```

### Step 4. Configure the SharePoint identity connector

To apply identity-based ACLs, create `sharepoint-online-identity-connector.config` with your `api.customerId` and other connection parametersas in the following example:

```
\`\`\`properties
### SharePoint Online identity connector configuration ###
# Required parameters for data source access
api.customerId=C05d3djk8
api.serviceAccountPrivateKeyFile=service_account.json

# Required parameters for SharePoint Online access
sharepoint.server=https://mydomain.onmicrosoft.com
sharepoint.siteCollectionOnly=true
sharepoint.username=admin@mydomain.onmicrosoft.com
sharepoint.password=pa$sw0rd
sharepoint.formsAuthenticationMode=LIVE
sharepoint.deploymentType=ONLINE

# SharePoint identity mapping parameters
api.identitySourceId=08ef8becd116faa475de26d9b291fed9
api.referenceIdentitySources=defaultIdentitySource
api.referenceIdentitySource.defaultIdentitySource.id=08ef8becd116faa5d3783f8c5a80e5aa
\`\`\`
```

### Step 5. Install the Office 365 identity connector

If you're using SharePoint Online identity-based ACLs, perform this step. If you're using public ACLs, skip this step.

1. Clone the Office 365 repository:
	```
	$ git clone https://github.com/google-cloudsearch/office-365-connector.git
	$ cd office-365-connector
	```
2. Check out and build the connector using `mvn package`.
3. Extract the ZIP file to your installation directory.

### Step 6. Configure the Office 365 identity connector

1. In the same directory as the identity connector installation, create a file named `o365-identity-connector.config` and add parameters as key-value pairs:
	```
	### Office 365 Identity connector configuration ###
	api.identitySourceId=<var>12345abcde</var>
	api.customerId=<var>abcde12345</var>
	o365.clientId=<var>a63c6eb3-29e7-486</var>
	o365.tenant=<var>185ef9ed-29e7-486</var>
	o365.clientSecret=<var>raHJN15vRLBKs</var>
	```
	For parameter descriptions, see [Office 365 identity connector](#o365-config).
2. In the same directory, create a folder named `logs`.
3. In the same directory, create a file named `logging.properties` with this content:
	```
	handlers = java.util.logging.ConsoleHandler,java.util.logging.FileHandler
	# Default log level
	.level = INFO
	# uncomment line below to increase logging level for Office 365 APIs
	#com.google.enterprise.cloudsearch.o365.level=FINE
	# uncomment line below to increase logging level to enable Google API traces
	#com.google.api.client.http.level = FINE
	java.util.logging.ConsoleHandler.level = INFO
	java.util.logging.FileHandler.pattern=logs/connector-o365.%g.log
	java.util.logging.FileHandler.limit=10485760
	java.util.logging.FileHandler.count=10
	java.util.logging.FileHandler.formatter=java.util.logging.SimpleFormatter
	```

### Step 7. Launch the connector

After you configure the connectors, run them to start synchronization and indexing. Run each command in its own terminal window.

1. Run the Office 365 identity connector to synchronize users and groups:
	```
	$ java -Djava.util.logging.config.file=logging.properties -jar google-cloudsearch-office-365-connector-v1-0.0.3.jar -Dconfig=o365-identity-connector.config
	```
2. Run the SharePoint Online identity connector to synchronize site collection groups:
	```
	$ java -Djava.util.logging.config.file=logging.properties -jar google-cloudsearch-sharepoint-connector-v1-0.0.3.jar -Dconfig=sharepoint-online-identity-connector.config
	```
3. Run the SharePoint Online connector to index content:
	```
	$ java -Djava.util.logging.config.file=logging.properties -jar google-cloudsearch-sharepoint-connector-v1-0.0.3.jar -Dconfig=sharepoint-online-connector.config
	```

## Configuration parameters reference

The following sections list configuration parameters used to configure the SharePoint Online connector.

### Data source access

| Setting | Parameter |
| --- | --- |
| Data source ID | **`api.sourceId=1234567890abcdef`**  Required. The Google Cloud Search data source ID set up by the Google Workspace administrator. |
| Path to the service account private key file | **`api.serviceAccountPrivateKeyFile=PrivateKey.json`**  Required. The path to the Google Cloud Search service account key file. |

### SharePoint Online access

| Setting | Parameter |
| --- | --- |
| Fully-qualified domain name for the SharePoint Site Collection | **`sharepoint.server=`** `http://yoursharepoint.example.com/`  Required. If the domain name is not fully-qualified, then set DNS override on the connector host. |
| Site Collection Only Mode | **`sharepoint.siteCollectionOnly=true`**  Required. For SharePoint Online, set the value `true`. |
| SharePoint username | **`sharepoint.username=username`**  Required. The username for the account used to access SharePoint Online. |
| SharePoint password | **`sharepoint.password=user_password`**  Required. The password for the account used to access SharePoint Online. |
| Authentication Mode | **`sharepoint.formsAuthenticationMode=LIVE`**  Required. For SharePoint Online, the value is always \`LIVE\`. |
| Deployment Type | **`sharepoint.deploymentType=ONLINE`**  Required. For SharePoint Online, the value is always \`ONLINE\`. |

### SharePoint Identity Mapping

| Setting | Parameter |
| --- | --- |
| Identity Source ID | **`api.identitySourceId=1234567890abcdef`**  Required. The Cloud Search identity source ID for the SharePoint groups identity source. |
| Reference Identity Sources | **`api.referenceIdentitySources=defaultIdentitySource`**  Required. For sharePoint Online, the value is always \`defaultIdentitySource\`. |
| Reference Identity Source IDs | **`api.referenceIdentitySource.defaultIdentitySource.id=112233abcd`**  Required. The Cloud Search identity source ID for Office 365 Users and Groups identity source. |

### HTML content generation

| Setting | Parameter |
| --- | --- |
| HTML template title field | **`contentTemplate.sharePointItem.title=Title`**  The SharePoint field to use as the HTML template title for generated HTML. |
| HTML content high search quality fields | **`contentTemplate.sharePointItem.quality.high=highField1[,highField2,...]`**  A comma-separated list of fields to include in the generated HTML as high-quality fields. When the search query terms match these fields, the results are ranked higher. |
| HTML content medium search quality fields | **`contentTemplate.sharePointItem.quality.medium=mediumField1[,mediumField2,...]`**  A comma-separated list of fields to include in the generated HTML as medium-quality fields. |
| HTML content low search quality fields | **`contentTemplate.sharePointItem.quality.low=lowField1[,lowField2,...]`**  A comma-separated list of fields to include in the generated HTML as low-quality fields. |
| HTML content unmapped columns | **`contentTemplate.sharepointItem.unmappedColumnsMode=*APPEND*`**  How the connector handles unmapped columns. Value is APPEND (default) or IGNORE.  - APPEND—The connector generates HTML content with all fields, including those that aren't set with a quality level (high, medium, or low). - IGNORE—The connector generates HTML content with only mapped fields. |

### Office 365 identity connector configuration

| Setting | Parameter |
| --- | --- |
| Identity Source ID | **`api.identitySourceId=1234567890abcdef`**  Required. The Office 365 identity source ID. This value should match the value of \`api.referenceIdentitySource.defaultIdentitySource.id\` in the SharePoint Online connector configuration. |
| Google Customer Id | **`api.customerId=c1b1d1e1`**  Required. Your organization's Google Workspace customer ID. |
| Office 365 Application Id | **`o365.clientId=a63c6eb3-29e7-486`**  Required. The application id from the Office 365 application setup. |
| Office 365 Tenant | **`o365.tenant=185ef9ed-29e7-486`**  Required. The tenant for your Office 365 account (your Azure Activity Directory app) |
| Office 365 client secret | **`o365.clientSecret=raHJN15vRLBKs`**  Required. Credential secret from Office 365 Application setup |
