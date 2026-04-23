---
source: https://developers.google.com/workspace/cloud-search/docs/guides/norconex-http-connector
root: workspace
fetched_at: 2026-04-23T15:26:09.945Z
---

# Deploy a Norconex HTTP Collector Indexer Plugin

This guide is for administrators responsible for downloading, deploying, and maintaining the Google Cloud Search Norconex HTTP Collector indexer plugin. You should be familiar with Linux, web crawling fundamentals, XML, and [Norconex HTTP Collector](https://www.norconex.com/collectors/collector-http/).

This guide includes instructions to:

- Download the indexer plugin software.
- Configure Cloud Search.
- Configure Norconex HTTP Collector and web crawling.
- Start the web crawl and upload content.

Information about the tasks the Google Workspace administrator must perform doesn't appear in this guide. For information on those tasks, see [Manage third-party data sources](https://support.google.com/a/answer/7430822).

## Overview of the Norconex HTTP Collector indexer plugin

By default, Cloud Search can discover, index, and serve content from Google Workspace products, such as Google Docs and Gmail. You can extend this to include web content by deploying the indexer plugin for [Norconex HTTP Collector](https://www.norconex.com/collectors/collector-http/), an open source enterprise web crawler.

### Configuration properties files

To enable the plugin to crawl and upload content, you must provide specific information in two configuration files:

- `{gcs-crawl-config.xml}`: settings for Norconex HTTP Collector.
- `sdk-configuration.properties`: settings for Cloud Search.

### Web crawl and content upload

After you populate the configuration files, you can [start the web crawl](#start-crawl). Norconex HTTP Collector crawls the web and uploads original binary or text document content to the Cloud Search indexing API.

### System requirements

- **Operating system**: Linux only.
- **Norconex version**: Version 2.8.0.
- **Software**: Java JRE 1.8.

### ACL support

The indexer plugin supports Access Control Lists (ACLs) to control access to documents in the Google Workspace domain.

If you enable default ACLs in the plugin configuration (`defaultAcl.mode` set to other than `none`), the plugin applies these defaults. Otherwise, the plugin grants read permission to the entire domain. See [Google-supplied connector parameters](../reference/connector-configuration.md).

### Prerequisites

Before you deploy the indexer plugin, gather these components:

- Google Workspace private key (containing the service account ID). See [Configure access to the Cloud Search API](./project-setup.md).
- Google Workspace data source ID. See [Manage third-party data sources](https://support.google.com/a/answer/7430822).

## Deployment steps

1. [Install Norconex HTTP Collector and the plugin software](#install-norconex)
2. [Configure Cloud Search](#configure-gcs)
3. [Configure Norconex HTTP Collector](#configure-norconex)
4. [Configure web crawl](#configure-crawl)
5. [Start a web crawl and content upload](#start-crawl)

### Step 1: Install Norconex HTTP Collector and the plugin software

1. Download the Norconex committer software from the Norconex [download page](https://www.norconex.com/collectors/collector-http/download).
2. Extract the software to `~/norconex/`.
3. Clone the committer plugin:
	```
	git clone https://github.com/google-cloudsearch/norconex-committer-plugin.git
	cd norconex-committer-plugin
	```
4. Check out your selected version and build the plugin:
	```
	git checkout tags/v1-0.0.3
	mvn package
	```
	To skip tests, use `mvn package -DskipTests`.
5. Copy the JAR file to the Norconex `lib` directory:
	```
	cp target/google-cloudsearch-norconex-committer-plugin-v1-0.0.3.jar ~/norconex/norconex-collector-http-VERSION/lib
	```
6. Extract the built ZIP file:
	```
	unzip target/google-cloudsearch-norconex-committer-plugin-v1-0.0.3.zip
	cd google-cloudsearch-norconex-committer-plugin-v1-0.0.3
	```
7. Run the install script and provide the **full path** to the Norconex `lib` directory:
	```
	sh install.sh
	```
	If prompted for duplicate files, select option `1`.

### Step 2: Configure Cloud Search

Create `sdk-configuration.properties` in the Norconex directory. The file must specify these parameters:

| Setting | Parameter |
| --- | --- |
| Data source ID | **`api.sourceId = 1234567890abcdef`**   Required. The source ID from your Google Workspace administrator. |
| Service account | **`api.serviceAccountPrivateKeyFile = ./PrivateKey.json`**   Required. The service account key file. |

Example `sdk-configuration.properties`:

```
# data source access
api.sourceId=1234567890abcdef
api.serviceAccountPrivateKeyFile=./PrivateKey.json
```

You can also include parameters like `batch.*` to control how the plugin pushes data. See [Google-supplied connector parameters](../reference/connector-configuration.md).

To populate metadata, configure these optional parameters:

| **Setting** | **Parameter** |
| --- | --- |
| Title | **`itemMetadata.title.field=movieTitle`** |
| Schema object type | **`itemMetadata.objectType=movie`** |

### Step 3: Configure Norconex HTTP Collector

The plugin include a sample file, `minimum-config.xml`.

1. Change to the Norconex directory and copy the sample:
	```
	cd ~/norconex/norconex-collector-http-VERSION/
	cp examples/minimum/minimum-config.xml gcs-crawl-config.xml
	```
2. Edit `gcs-crawl-config.xml` to add or replace `<committer>` and `<tagger>` nodes:

| Setting | Parameter |
| --- | --- |
| `<committer>` node | **`<committer class="com.norconex.committer.googlecloudsearch.GoogleCloudSearchCommitter">`**   Required. Add this under the `<httpcollector>` node. |
| `<uploadFormat>` | **`<uploadFormat>raw</uploadFormat>`**   Optional. `raw` or `text`. Default is `raw`. |

Example `gcs-crawl-config.xml`:

```
<committer class="com.norconex.committer.googlecloudsearch.GoogleCloudSearchCommitter">
    <configFilePath>/full/path/to/gcs-sdk-config.properties</configFilePath>
    <uploadFormat>raw</uploadFormat>
</committer>
<importer>
  <preParseHandlers>
    <tagger class="com.norconex.committer.googlecloudsearch.BinaryContentTagger"/>
  </preParseHandlers>
</importer>
```

### Step 4: Configure web crawl

Configure the `<crawler>` nodes for your needs, including:

- Start URLs
- Maximum crawl depth
- Number of threads

See the [Norconex configuration page](https://www.norconex.com/collectors/collector-http/configuration).

### Step 5: Start a web crawl and content upload

Run the collector in local mode:

```
./collector-http[.bat|.sh] -a start -c gcs-crawl-config.xml
```

## Monitor the crawler with JEF Monitor

Norconex JEF (Job Execution Framework) Monitor provides a graphical view of progress. See [Monitor your crawler with JEF Monitor](https://www.norconex.com/monitor-your-crawlers-progress-with-jef-monitor).
