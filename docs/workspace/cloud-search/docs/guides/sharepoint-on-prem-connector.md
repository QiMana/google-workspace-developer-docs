---
source: https://developers.google.com/workspace/cloud-search/docs/guides/sharepoint-on-prem-connector
root: workspace
fetched_at: 2026-04-23T15:26:10.296Z
---

# Deploy the Microsoft SharePoint On-premises connector

You can set up Google Cloud Search to return results from your organization's SharePoint on-premises content in addition to your Google Workspace content. Use the Cloud Search SharePoint On-premises connector and configure it to access a specific SharePoint data source.

## Important considerations

Before deploying the SharePoint On-premises connector, be aware of the following considerations.

### Honored SharePoint settings

The connector always honors the **Search Visibility** setting on SharePoint. For draft documents, permissions on the user account the connector uses to access SharePoint control which documents it indexes and returns. If the account has "Full Read" permissions, the connector honors the "Draft item visibility" settings.

You can also limit results based on user account access using Google and external principals to define ACLs. To apply security trimming, synchronize these external identities with Google Cloud Directory:

- Active Directory users and groups.
- SharePoint local groups (with Active Directory users and groups as members).

To synchronize AD users and groups, use [Google Cloud Directory Sync](https://support.google.com/a/answer/106368) and enable identity mapped groups. For SharePoint local groups, use the SharePoint identity connector.

The connector also performs Active Directory lookups to fetch information for synchronizing principals, such as mapping SIDs to sAMAccountNames.

### Search optimization

Improve the search experience by configuring the connector to return relevant results. Use HTML generation parameters in the configuration file to set field impact levels.

To set up a schema, see [Create and register a schema](./schema-guide.md). When setting up a schema:

- The connector normalizes SharePoint content types to valid object definition names (A-Z, a-z, 0-9). For example, "News Article" becomes "NewsArticle".
- If the connector cannot match an object definition, it uses the fallback object type (`itemMetadata.objectType`). See [Metadata configuration parameters](../reference/connector-configuration.md#metadata-configuration-parameters).
- The connector normalizes property names by decoding hex characters and removing "ows\_" prefixes.

### Microsoft Outlook message handling

The connector overrides the media type for Microsoft Outlook `.msg` files and indexes them as `application/vnd.ms-outlook`.

### Multi-tenant configurations

For multi-tenant deployments, configure site collection mode:

- Give the connector account **site collection administrator** permissions.
- Set `sharepoint.server` to the site collection URL (e.g., `http://sharepoint.example.com/sites/collection`).
- Set `sharepoint.siteCollectionOnly` to `true`.

Configure one connector instance per site collection.

### Known limitations

- Detection time for changes increases with the number of monitored databases.
- Memory use increases with the number of unique users and groups in ACLs.
- The connector only supports identities from one Active Directory domain.
- Delete notifications can take more than four hours to propagate.

### System requirements

<table><tbody><tr><th colspan="2">System requirements</th></tr><tr><td>Operating system</td><td>Windows Server 2016, Ubuntu, Red Hat Enterprise Linux 5.0, or SUSE Enterprise Linux 10 (64-bit).</td></tr><tr><td>Software</td><td>SharePoint Server 2013 or 2016; Java JRE 1.8.</td></tr><tr><td>Authentication</td><td>NTLM, Kerberos, HTTP Basic, or ADFS.</td></tr></tbody></table>

## Deploy the connector

Follow these steps to deploy the SharePoint On-premises connector.

### Prerequisites

1. Create a Google Workspace private key. See [Configure access to the Cloud Search API](./project-setup.md).
2. Add a data source to search and record its ID. See [Add a data source to search](https://support.google.com/a/answer/7056471).
3. For ACL-based results, your administrator must create two identity sources (one for Active Directory and one for SharePoint local groups) and provide the Google Workspace customer ID. See [Map user identities](https://support.google.com/a/answer/9039510).
4. Set up a user account for the connector with **Full Read** permissions.
5. Ensure the SharePoint web application has a root site collection.
6. If site collections are write-locked, run the [`PrepareWriteLockedSites.ps1`](https://raw.githubusercontent.com/google-cloudsearch/sharepoint-connector/master/tools/on-premises/PrepareWriteLockedSites.ps1) script.

### Step 1. Install the connector software

1. Clone the repository:
	```
	$ git clone https://github.com/google-cloudsearch/sharepoint-connector.git
	$ cd sharepoint-connector
	```
2. Check out the selected version (e.g., `v1-0.0.5`):
	```
	$ git checkout tags/v1-0.0.5
	```
3. Build the connector:
	```
	$ mvn package
	```
	To skip tests, use `mvn package -DskipTests`.
4. Extract the ZIP file to your installation directory.

### Step 2. Create the configuration file

Create `connector-config.properties` in the installation directory. Add parameters as key-value pairs:

```
api.sourceId=08ef8becd116faa4546b8ca2c84b2879
api.serviceAccountPrivateKeyFile=service_account.json
api.identitySourceId=08ef8becd116faa475de26d9b291fed9
sharepoint.server=http://sp-2016:32967/sites/collection
sharepoint.siteCollectionOnly=true
sharepoint.username=contoso\\admin
sharepoint.password=password
adLookup.host=dc.contoso.com
adLookup.username=contoso\\admin
adLookup.password=password
```

See the [reference](#reference) or [Google-supplied parameters](../reference/connector-configuration.md) for details.

### Step 3. Add SharePoint as a trusted host (HTTPS)

If using HTTPS, export the SharePoint certificate and import it into the connector's keystore:

```
$ keytool -importcert -keystore cacerts.jks -storepass changeit -file sharepoint.crt -alias sharepoint
```

### Step 4. Set up logging

Create a `logs` folder and a `logging.properties` file with this content: `properties handlers = java.util.logging.ConsoleHandler,java.util.logging.FileHandler .level = INFO java.util.logging.ConsoleHandler.level = INFO java.util.logging.FileHandler.pattern=logs/connector-sharepoint.%g.log`

### Step 5. Configure the identity connector

To apply identity-based ACLs, create `sharepoint-onprem-identity-connector.config` with your `api.customerId` and other connection parameters.

### Step 6. Launch the connector

1. Run GCDS to synchronize Active Directory users and groups.
2. Run the SharePoint identity connector to synchronize site collection groups.
3. Run the SharePoint On-premises connector to index content.

## Configuration parameters reference

The following sections list configuration parameters used to configure the SharePoint On-premises connector.

### Data source access

| Setting | Parameter |
| --- | --- |
| Data source ID | `api.sourceId=ID` |
| Service account | `api.serviceAccountPrivateKeyFile=path` |

### SharePoint on-premises access

| Setting | Parameter |
| --- | --- |
| Server URL | `sharepoint.server=URL` |
| Credentials | `sharepoint.username` and `sharepoint.password` |

### HTML content generation

| Setting | Parameter |
| --- | --- |
| Title field | `contentTemplate.sharePointItem.title=Title` |
| Quality fields | `contentTemplate.sharePointItem.quality.high`, `medium`, or `low` |
