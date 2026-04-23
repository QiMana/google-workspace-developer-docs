---
source: https://developers.google.com/workspace/cloud-search/docs/guides/apache-nutch-connector
root: workspace
fetched_at: 2026-04-23T15:26:07.684Z
---

# Deploy an Apache Nutch Indexer Plugin

You can set up Google Cloud Search to serve web content to your users by deploying the Cloud Search indexer plugin for [Apache Nutch](http://nutch.apache.org/), an open source web crawler.

When you start the web crawl, Apache Nutch crawls the web and uses the indexer plugin to upload original binary (or text) versions of document content to the Google Cloud Search API. The Cloud Search API indexes the content and serves the results to your users.

## Important considerations

Before you deploy the indexer plugin, be aware of the following considerations.

### System requirements

<table><tbody><tr><th colspan="2">System requirements</th></tr><tr><td>Operating system</td><td>Linux only:<ul><li>Ubuntu</li><li>Red Hat Enterprise Linux 5.0</li><li>SUSE Enterprise Linux 10 (64 bit)</li></ul></td></tr><tr><td>Software</td><td><ul><li>Apache Nutch version 1.15. The indexer plugin software includes this version of Nutch.</li><li>Java JRE 1.8 installed on the computer that will run the indexer plugin</li></ul></td></tr><tr><td>Apache Tika document types</td><td><a href="https://tika.apache.org/1.18/formats.html">Apache Tika 1.18 supported document formats</a></td></tr></tbody></table>

## Deploy the indexer plugin

These steps describe how to install the indexer plugin and configure its components to crawl URLs and return results to Cloud Search.

### Prerequisites

Before you deploy the indexer plugin, gather the information required to connect Cloud Search and the data source:

- Google Workspace private key (which contains the service account ID). For information on obtaining a private key, go to [Configure access to the Cloud Search API](./project-setup.md).
- Google Workspace data source ID. For information on obtaining a data source ID, go to [Add a data source to search](https://support.google.com/a/answer/7056471).

### Step 1: Build and install the plugin software and Apache Nutch

1. Clone the indexer plugin repository from GitHub.
	```
	$ git clone https://github.com/google-cloudsearch/apache-nutch-indexer-plugin.git
	$ cd apache-nutch-indexer-plugin
	```
2. Check out the version of the indexer plugin you want:
	```
	$ git checkout tags/v1-0.0.5
	```
3. Build the indexer plugin.
	```
	$ mvn package
	```
	To skip tests when building the plugin, use `mvn package -DskipTests`.
4. Download [Apache Nutch 1.15](http://archive.apache.org/dist/nutch/1.15/) and follow the [Apache Nutch installation instructions](https://wiki.apache.org/nutch/NutchTutorial).
5. Extract `target/google-cloudsearch-apache-nutch-indexer-plugin-v1.0.0.5.zip` to a folder. Copy the `plugins/indexer-google-cloudsearch` folder to the Apache Nutch `plugins` folder (`apache-nutch-1.15/plugins`).

### Step 2: Configure the indexer plugin

To configure the plugin, create a file named `plugin-configuration.properties`. The configuration file must specify the following parameters to access the Cloud Search data source.

| Setting | Parameter |
| --- | --- |
| Data source ID | **`api.sourceId = 1234567890abcdef`**   Required. The Cloud Search source ID that the Google Workspace administrator set up for the indexer plugin. |
| Service account | **`api.serviceAccountPrivateKeyFile = ./PrivateKey.json`**   Required. The Cloud Search service account key file that the Google Workspace administrator created for indexer plugin accessibility. |

The following example shows a sample configuration file:

```
# data source access
api.sourceId=1234567890abcdef
api.serviceAccountPrivateKeyFile=./PrivateKey.json
```

The configuration file can also contain parameters that control plugin behavior, such as how the plugin pushes data into the Cloud Search API, and how it populates metadata and structured data. For descriptions of these parameters, see [Google-supplied connector parameters](../reference/connector-configuration.md).

### Step 3: Configure Apache Nutch

1. Open `conf/nutch-site.xml` and add the following parameters:
	| Setting | Parameter |
	| --- | --- |
	| Plugin includes | **`plugin.includes = text`**  Required. List of plugins to use. This must include at least:  - index-basic - index-more - indexer-google-cloudsearch `conf/nutch-default.xml` provides a default value, but you must manually add `indexer-google-cloudsearch` to it. |
	| Metatags names | **`metatags.names = text`**  Optional. Comma-separated list of tags that map to properties in the corresponding data source schema. To learn more, see [Nutch-parse metatags](https://wiki.apache.org/nutch/IndexMetatags). |
	The following example shows the required modification to `nutch-site.xml`:
	```
	<property>
	  <name>plugin.includes</name>
	  <value>protocol-(http|httpclient)|urlfilter-regex|index-(basic|more|metadata)|query-(basic|site|url|lang)|indexer-google-cloudsearch|nutch-extensionpoints|parse-(text|html|msexcel|msword|mspowerpoint|pdf|metatags)|summary-basic|scoring-opic|urlnormalizer-(pass|regex|basic)|parse-(html|tika|metatags)|index-(basic|anchor|more|metadata)</value>
	</property>
	```
2. Open `conf/index-writers.xml` and add the following section:
	```
	<writer id="indexer_google_cloud_search_1" class="org.apache.nutch.indexwriter.gcs.GoogleCloudSearchIndexWriter">
	  <parameters>
	    <param name="gcs.config.file" value="path/to/sdk-configuration.properties"/>
	  </parameters>
	  <mapping>
	    <copy />
	    <rename />
	    <remove />
	  </mapping>
	</writer>
	```
	The `<writer>` section contains the following parameters:
	| Setting | Parameter |
	| --- | --- |
	| Path to Cloud Search configuration file | **`gcs.config.file = path`**  Required. The full (absolute) path to the Cloud Search configuration file. |
	| Upload format | **`gcs.uploadFormat = text`**  Optional. The format the plugin uses to push document content to the Cloud Search API. Valid values are:  - `raw`: pushes original, unconverted content. - `text`: pushes extracted textual content. The default is `raw`. |

### Step 4: Configure web crawl

Before you start a web crawl, configure it to only include information that your organization wants to make available. For more information, see the [Nutch tutorial](https://wiki.apache.org/nutch/NutchTutorial).

1. Set up start URLs.
	Start URLs control where the web crawler begins crawling your content. The crawler must be able to reach all content you want to include by following the links.
	To set up start URLs:
	1. Change to the Nutch installation directory:
		```
		$ cd ~/nutch/apache-nutch-X.Y/
		```
		2. Create a directory for URLs:
		```
		$ mkdir urls
		```
		3. Create a file named `seed.txt` and list one URL per line.
2. Set up follow and do-not-follow rules.
	Follow URL rules control which URLs the crawler indexes. Do-not-follow rules exclude URLs from being crawled.
	To set up these rules:
	1. Change to the Nutch installation directory.
		2. Edit `conf/regex-urlfilter.txt`:
		```
		$ nano conf/regex-urlfilter.txt
		```
		3. Enter regular expressions with a "+" or "-" prefix:
		```
		# skip file extensions
		-\.(gif|GIF|jpg|JPG|png|PNG|ico)
		# skip protocols (file: ftp: and mailto:)
		-^(file|ftp|mailto):
		# allow urls starting with https://support.google.com/gsa/
		+^https://support.google.com/gsa/
		# accept anything else
		#+.
		```
3. Edit the crawl script.
	If the `gcs.uploadFormat` parameter is missing or set to "raw," you must add `-addBinaryContent -base64` arguments to the `nutch index` command. These arguments tell the Nutch Indexer module to include binary content in Base64.
	1. Open the `crawl` script in `apache-nutch-1.15/bin`.
		2. Add the options as shown in this example:
		```
		if $INDEXFLAG; then
		    echo "Indexing $SEGMENT to index"
		    __bin_nutch index $JAVA_PROPERTIES "$CRAWL_PATH"/crawldb -addBinaryContent -base64 -linkdb "$CRAWL_PATH"/linkdb "$CRAWL_PATH"/segments/$SEGMENT
		    echo "Cleaning up index if possible"
		    __bin_nutch clean $JAVA_PROPERTIES "$CRAWL_PATH"/crawldb
		else
		    echo "Skipping indexing ..."
		```

### Step 5: Start a web crawl and content upload

After you set up the indexer plugin, you can run it in local mode. Use scripts from `./bin` to execute a crawling job.

The following example assumes components are in the local directory. Run Nutch from the `apache-nutch-1.15` directory:

```
$ bin/crawl -i -s urls/ crawl-test/ 5
```

Crawl logs are available in the terminal or the `logs/` directory. To direct logging output, edit `conf/log4j.properties`.
