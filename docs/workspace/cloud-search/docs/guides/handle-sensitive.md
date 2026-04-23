---
source: https://developers.google.com/workspace/cloud-search/docs/guides/handle-sensitive
root: workspace
fetched_at: 2026-04-23T15:26:08.094Z
---

# Obfuscate sensitive configuration file information

The connector SDK includes `SensitiveDataCodec` functionality to encode and decode information in your configuration file. To obfuscate sensitive information:

1. Run your connector with the `-DsecurityLevel=OBFUSCATED` and `com.google.enterprise.cloudsearch.sdk.config.SensitiveDataCodec` parameters. This command requests the sensitive parameter, such as a `sharepoint.password`.
	```
	java -DsecurityLevel=OBFUSCATED \
	-cp google-cloudsearch-csv-connector-v1-0.0.5.jar \
	com.google.enterprise.cloudsearch.sdk.config.SensitiveDataCodec
	```
	The command outputs an obfuscated value like `obf:Pm1saUwfSUJb5sPblTjPUw==`.
2. In your configuration file, replace the sensitive string with the obfuscated value. For example:
	```
	sharepoint.password=obf:Pm1saUwfSUJb5sPblTjPUw==
	```

You can also use a key pair from your Java Keystore. For example:

```
java -DsecurityLevel=ENCRYPTED -Djavax.net.ssl.keyStore=encryptKeyStore.jks \
-Djavax.net.ssl.keyStorePassword=testtest -Djavax.net.ssl.keyStoreType=JKS \
-Dalias=testkeypair -cp google-cloudsearch-csv-connector-v1-0.0.5.jar \
com.google.enterprise.cloudsearch.sdk.config.SensitiveDataCodec
```

If you use your own keys, you must pass similar parameters when running your connector.
