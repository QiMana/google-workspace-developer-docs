---
source: https://developers.google.com/workspace/cloud-search/docs/guides/filesystem-connector
root: workspace
fetched_at: 2026-04-23T15:26:08.879Z
---

# Deploy the Microsoft Windows File Systems connector

You can set up Google Cloud Search to return results from your organization's Microsoft Windows shares in addition to your Google Workspace content. You use the Cloud Search File Systems connector and configure it to access specified Windows shares. A single connector instance can support multiple Microsoft Windows shares.

## Important considerations

Before deploying the File Systems connector, review the following considerations.

### Continuous automatic updates

By default, the connector continuously monitors start paths (values from `fs.src` in the configuration file) when it starts up. When the file system reports changes to content or access controls, the connector re-crawls the file system. This re-crawl can be resource intensive. To turn off monitoring, set `fs.monitorForUpdates` to `false`. This reduces resource use but delays when the connector reflects changes. [Learn more](#configure-connector-behaviour)

### DFS access control

The DFS system applies access control on its links, and usually each DFS link has its own ACL. DFS uses *Access-based Enumeration* (ABE) to restrict the links returned to a user. Users might see only a subset of DFS links or only one link when ABE isolates home directories. When traversing a DFS system, the connector respects the DFS link ACL and the target's Share ACL; the Share ACL inherits from the DFS ACL.

### Known limitations

This section lists the known limitations of the file system connector.

- *File System*: The connector doesn't support mapped or local drives.
- *Distributed File System*: A mapped drive to a UNC DFS doesn't work correctly, and some ACLs might not be read correctly.
- The connector supports DFS namespaces and links but not regular folders in the DFS namespace.
- File links in `cloudsearch.google.com` or returned by the Query API aren't clickable in most browsers.

### System requirements

Before you deploy the File Systems connector, ensure that the host machine meets the following requirements:

<table><tbody><tr><th colspan="2">System requirements</th></tr><tr><td>Operating system</td><td><ul><li>Windows Server 2016</li><li>Windows Server 2012</li><li>Windows Server 2008 R2</li></ul></td></tr><tr><td>Software</td><td><ul><li>Java JRE 1.8 installed on the computer running the connector</li></ul></td></tr><tr><td>File system protocols</td><td><ul><li>Server Message Block (SMB) - SMB1</li><li>Server Message Block (SMB) - SMB2</li><li>Distributed File System (DFS)</li></ul><p><strong>Not supported:</strong> Local Windows file systems, NFS 2.0, NFS 3.0, or local Linux file systems.</p></td></tr></tbody></table>

## Deploy the connector

Follow these steps to deploy the File Systems connector.

### Prerequisites

Before you deploy the connector, ensure your environment has these components:

- Google Workspace information to establish connections:
	- Google Workspace private key (containing the service account ID). See [Configure access to the Cloud Search API](./project-setup.md).
		- Google Workspace data source ID. See [Add a data source to search](https://support.google.com/a/answer/7056471).
		- An identity source ID. See [Create an identity source](https://support.google.com/a/answer/9039510). If you sync with Active Directory, use [GCDS](https://support.google.com/a/answer/9156495).
	Your Google Workspace administrator can usually provide these credentials.
- Ensure the Windows account has sufficient permissions.

### Required Microsoft Windows account permissions

The Windows account running the connector must have permissions to:

- List folder content.
- Read document content.
- Read file and folder attributes.
- Read permissions (ACLs) for files and folders.
- Write basic attributes.

Membership in one of these groups usually grants sufficient permissions: Administrators, Power Users, Print Operators, or Server Operators.

### Step 1. Install the connector

Download or clone the connector repository from GitHub, and then build the connector package.

1. Get the connector repository from GitHub and build it.
	To use git on the Windows server:
	```
	> git clone https://github.com/google-cloudsearch/windows-filesystems-connector.git
	> cd windows-filesystems-connector
	> git checkout tags/v1-0.0.3
	```
	To download directly:
	1. Go to [windows-filesystems-connector](https://github.com/google-cloudsearch/windows-filesystems-connector).
		2. Click **Clone or download** > **Download zip**.
		3. Unzip the package and move to the directory.
2. Build the connector using [Apache Maven](https://maven.apache.org/install.html):
	```
	> mvn package
	```
	To skip tests, use `mvn package -DskipTests`.
3. Extract the connector zip file to your installation directory:
	```
	> cp target/google-cloudsearch-windows-filesystems-connector-v1-0.0.3.zip installation-dir
	> cd installation-dir
	> unzip google-cloudsearch-windows-filesystems-connector-v1-0.0.3.zip
	> cd google-cloudsearch-windows-filesystems-connector-v1-0.0.3
	```

### Step 2. Create the configuration file

After installing the connector, create a configuration file that contains the settings for the connector.

1. In the connector directory, create a file named `connector-config.properties`.
2. Add parameters as key-value pairs. For example:
	```
	# Required parameters
	api.serviceAccountPrivateKeyFile=/path/to/file.json
	api.sourceId=0123456789abcde
	api.identitySourceId=a1b1c1234567
	# File system access
	fs.src=\\\\host\\share;\\\\dfshost\\dfsnamespace
	# Optional parameters
	traverse.abortAfterExceptions=500
	fs.monitorForUpdates = true
	fs.preserveLastAccessTime = IF_ALLOWED
	```
	See the [Configuration parameters reference](#reference) for file-system-specific parameters. For a list of common parameters used by all Cloud Search connectors, see [Google-supplied connector parameters](../reference/connector-configuration.md).

### Step 3. Enable logging

Create a directory for logs and create a logging configuration file.

1. Create a folder named `logs` in the connector directory.
2. Create a file named `logging.properties` with this content:
	```
	handlers = java.util.logging.ConsoleHandler,java.util.logging.FileHandler
	# Default log level
	.level = WARNING
	com.google.enterprise.cloudsearch.level = INFO
	com.google.enterprise.cloudsearch.fs.level = INFO
	# uncomment line below to increase logging level to enable API trace
	#com.google.api.client.http.level = FINE
	java.util.logging.ConsoleHandler.level = INFO
	java.util.logging.FileHandler.pattern=logs/connector-fs.%g.log
	java.util.logging.FileHandler.limit=10485760
	java.util.logging.FileHandler.count=10
	java.util.logging.FileHandler.formatter=java.util.logging.SimpleFormatter
	```

### Step 4. (Optional) Configure media types

The connector attempts to detect file media types using its default mechanism which, on Windows, relies on registry entries. If a registry entry for a file extension is missing, the connector might fail to detect the media type correctly. If media types aren't detected correctly, or if you want to override the default type for an extension, follow these steps:

1. Create a file named `mime-type.properties` in the connector directory.
2. Enter extensions and types as `extension=media/type`: `properties xlsx=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet one=application/msonenote txt=text/plain pdf=application/pdf`

### Step 5. Run the File Systems connector

Launch the connector from the host machine:

```
> java -jar google-cloudsearch-windows-filesystems-connector-v1-0.0.3.jar -Djava.util.logging.config.file=logging.properties[ -Dconfig=my.config]
```

By default, the connector looks for a configuration file named `connector-config.properties` in the directory where the connector is run. If your configuration file has a different name or is in another directory, use the `-Dconfig` parameter to specify its path.

## Configuration parameters reference

The following tables list and describe the parameters used to configure the File Systems connector.

### Data source access

| Setting | Parameter |
| --- | --- |
| Data source ID | `api.sourceId=1234567890abcdef`  Required. The Cloud Search source ID. |
| Service account | `api.serviceAccountPrivateKeyFile=./PrivateKey.json`  Required. The path to the service account key file. |
| Identity source ID | `api.identitySourceId=x0987654321`  Required. The Cloud Search identity source ID set up by the Google Workspace administrator for syncing active directory identities using [GCDS](https://support.google.com/a/answer/9156495). |

### File system access

Use these parameters to specify the file system sources to crawl.

| Setting | Parameter |
| --- | --- |
| Source file systems | `fs.src=path1[,path2, ...]`  Required. Specify source file systems as one or more UNC sources that are separated by the delimiter configured by `fs.src.separator`. If you use characters not in Latin1, encode them with Java Unicode escapes. |

### Path separator character

| Setting | Parameter |
| --- | --- |
| Path separator character | `fs.src.separator=separator-character`  The default separator is ";". If your source paths contain semicolons, you can set a different delimiter, such as a comma (","), that does not conflict with characters in your paths and isn't reserved by property file syntax itself.  If the `fs.src.separator` value is an empty string, then the `fs.src` value is treated as a single path. |

### Connector behavior

Use these parameters to tune how the connector crawls file systems.

| Setting | Parameter |
| --- | --- |
| Windows domain | `fs.supportedDomain=domain`  Required to let users who are set up with [GCDS](https://support.google.com/a/answer/106368) access documents through Cloud Search. Specify as a single NetBIOS domain name of the Active Directory. |
| Include accounts in ACLS | `fs.supportedAccounts=account-1[, account-2,...]`  A comma-delimited list of accounts to include in ACLs regardless of whether they are built-in accounts.  The default value is `BUILTIN\\Administrators,Everyone,BUILTIN\\Users, BUILTIN\\Guest,NT AUTHORITY\\INTERACTIVE, NT AUTHORITY\\Authenticated Users` |
| Exclude built-in accounts from ACLs | `fs.builtinGroupPrefix=prefix`  Specify the prefix of built-in accounts. An account that starts with this prefix is considered a built-in account and will be excluded from the ACLs.  The default value is `BUILTIN\\` |
| Allow indexing of hidden files and folders | `fs.crawlHiddenFiles=boolean`  Set to `true` to crawl hidden files. The default is `false`. |
| Allow indexing of crawled folder listings and DFS Namespace enumerations | `fs.indexFolders=boolean`  When set to `true` (default), when the connector crawls a folder, the connector creates a CONTAINER\_ITEM object. When set to false, the connector creates a VIRTUAL\_CONTAINER\_ITEM object instead. |
| Enable file system change monitoring | `fs.monitorForUpdates=boolean`  When set to `true` (default), the connector automatically re-crawls upon changes to content or access controls. Setting this to `false` reduces resource usage but delays how quickly changes are reflected in search results. |
| Set the maximum size of the cache of directories | `fs.directoryCacheSize=number-of-entries`  The maximum size of the directory cache. The connector uses the cache to identify hidden folders to avoid indexing files and folders in hidden folders.  The default is 50,000 entries, which typically consume 10–15 megabytes of RAM. |

### Timestamp preservation

Use these parameters to specify how the connector handles timestamp preservation.

| Setting | Parameter |
| --- | --- |
| Preserve access time | `fs.preserveLastAccessTime=value`  When crawling files and folders, the connector can change their last access timestamp to the time of the crawl. If last access times aren't preserved, backup and archive systems might not move appropriate files and folders to secondary storage because the connector accessed them.  By default, `fs.preserveLastAccessTime` is set to `ALWAYS`, meaning the connector attempts to preserve the last access time. If the user account running the connector lacks privileges to write file attributes, the connector cannot restore the last access time. If set to `ALWAYS` and the connector cannot preserve the last access time, it rejects crawl requests for the file system so that it doesn't alter file timestamps.  Possible values include:  - `ALWAYS`: The connector attempts to preserve the last access time as it crawls files and folders. If it can't preserve the last access time, it rejects all subsequent crawl requests for the file system to prevent altering timestamps. - `IF_ALLOWED`: The connector attempts to preserve the last access time as it crawls files and folders. It continues to crawl even when some timestamps might not be preserved. - `NEVER`: The connector doesn't attempt to preserve the last access time. |
| Crawl only files that were accessed after a certain date | `fs.lastAccessedDate=YYYY-MM-DD`  Crawl content only if the last access time is after the specified date (YYYY-MM-DD, [ISO8601](http://www.w3.org/TR/NOTE-datetime) format). The default is `disabled`. For example, `2010-01-01` crawls content accessed after the start of 2010. Cannot be used with `fs.lastAccessedDays`. |
| Crawl only files that were accessed within the past number of days | `fs.lastAccessedDays=number-of-days`  Crawl content only if the last access time is within the specified number of days from the present. The default is `disabled`. Useful for expiring old content; e.g., `365` crawls content accessed in the last year. Cannot be used with `fs.lastAccessedDate`. |
| Crawl only files that were modified after a certain date | `fs.lastModifiedDate=YYYY-MM-DD`  Crawl content only if the last modified time is after the specified date (YYYY-MM-DD, [ISO8601](http://www.w3.org/TR/NOTE-datetime) format). The default is `disabled`. For example, `2010-01-01` crawls content modified after the start of 2010. Cannot be used with `fs.lastModifiedDays`. |
| Crawl only files that were modified within the past number of days | `fs.lastModifiedDays=number-of-days`  Crawl content only if the last modification time is within the specified number of days from the present. The default is `disabled`. Useful for expiring old content; e.g., `365` crawls content modified in the last year. Cannot be used with `fs.lastModifiedDate`. |

### Skip file share ACLs

You can set the connector to ignore share ACLs if it lacks permissions to read them. Content is then returned with a permissive share ACL.

| Setting | Parameter |
| --- | --- |
| Skip share ACLs | `fs.skipShareAccessControl=boolean`  Set to `true` to ignore share ACLs. The default is `false`. |
