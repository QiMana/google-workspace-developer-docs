---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration
root: workspace
fetched_at: 2026-04-23T15:26:31.520Z
---

# Configuration

Static factory for handling connector configurations.

The caller can use one of the available factory methods to create an instance of `ConfigValue`. If `initConfig(String[])` is not yet executed, this factory holds a references to a registered `ConfigValue` instances to initialize later. Once the `Configuration` is initialized, each new `ConfigValue` instance is initialized immediately according to the loaded configuration values. Use `Configuration.ResetConfigRule` in unit tests to reset the `Configuration` object. Configuration values read from properties file are trimmed before parsing.

For example, caller could use one of the factory methods to define `ConfigValue`.

```
ConfigValue<Boolean> booleanParam = Configuration.getBoolean("config.key1", false);
 ConfigValue<Integer> integerParam = Configuration.getInteger("config.key2", 10);
 ConfigValue<String> stringParam = Configuration.getString("required.config.key3", null);
 Parser<URL> urlParser =
     value -> {
       try {
         return new URL(value);
       } catch (MalformedURLException e) {
         throw new InvalidConfigurationException(e);
       }
     };
 ConfigValue<URL> configuredUrl =
     Configuration.getValue("required.config.key4", null, urlParser);
```

### Nested Class Summary

<table><tbody><tr><td>interface</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser">Configuration.Parser</a> <T></td><td width="100%">General purpose <code>ConfigValue</code> parser.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.ResetConfigRule">Configuration.ResetConfigRule</a></td><td width="100%"><code>TestRule</code> to reset static <code>Configuration</code> object for unit tests.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.SetupConfigRule">Configuration.SetupConfigRule</a></td><td width="100%"><code>TestRule</code> to initialize static <code>Configuration</code> object for unit tests.</td></tr></tbody></table>

### Field Summary

| public static final [Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser) <Boolean> | [BOOLEAN\_PARSER](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#BOOLEAN_PARSER) | `Configuration.Parser` for parsing string values as boolean. |
| --- | --- | --- |
| public static final [Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser) <Double> | [DOUBLE\_PARSER](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#DOUBLE_PARSER) | `Configuration.Parser` for parsing string values as double. |
| public static final [Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser) <Integer> | [INTEGER\_PARSER](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#INTEGER_PARSER) | `Configuration.Parser` for parsing string values as integer. |
| public static final [Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser) <String> | [STRING\_PARSER](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#STRING_PARSER) | `Configuration.Parser` for parsing string values. |

### Public Method Summary

| static void | [checkConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#checkConfiguration\(boolean,%20java.lang.String,%20java.lang.Object...\)) (boolean condition, String errorFormat, Object... errorArgs)  Checks for a configuration error. |
| --- | --- |
| static void | [checkConfiguration](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#checkConfiguration\(boolean,%20java.lang.String\)) (boolean condition, String errorMessage)  Checks for a configuration error. |
| static [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <Boolean> | [getBoolean](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getBoolean\(java.lang.String,%20java.lang.Boolean\)) (String configKey, Boolean defaultValue)  Get configuration values parsed as boolean for supplied configuration key. |
| static Properties | [getConfig](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getConfig\(\)) ()  Retrieves all of the configuration properties. |
| static [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <Integer> | [getInteger](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getInteger\(java.lang.String,%20java.lang.Integer\)) (String configKey, Integer defaultValue)  Get configuration values parsed as integer for supplied configuration key. |
| static <T> [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <List<T>> | [getMultiValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getMultiValue\(java.lang.String,%20java.util.List%3CT%3E,%20com.google.enterprise.cloudsearch.sdk.config.Configuration.Parser%3CT%3E\)) (String configKey, List<T> defaultValues, [Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser) <T> parser)  Allows for retrieving a parameter value that consists of a comma delimited list. |
| static <T> [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <List<T>> | [getMultiValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getMultiValue\(java.lang.String,%20java.util.List%3CT%3E,%20com.google.enterprise.cloudsearch.sdk.config.Configuration.Parser%3CT%3E,%20java.lang.String\)) (String configKey, List<T> defaultValues, [Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser) <T> parser, String delimiter)  Allows for retrieving a parameter value that consists of a delimited list. |
| static <T> [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <T> | [getOverriden](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getOverriden\(java.lang.String,%20com.google.enterprise.cloudsearch.sdk.config.ConfigValue%3CT%3E\)) (String configKey, [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <T> defaultValue)  Allows for chaining default configuration values. |
| static [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <String> | [getString](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getString\(java.lang.String,%20java.lang.String\)) (String configKey, String defaultValue)  Get configuration values parsed as string for supplied configuration key. |
| static <T> [ConfigValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/ConfigValue) <T> | [getValue](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#getValue\(java.lang.String,%20T,%20com.google.enterprise.cloudsearch.sdk.config.Configuration.Parser%3CT%3E\)) (String configKey, T defaultValue, [Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser) <T> parser)  Allows for creating custom type `ConfigValue` instances. |
| static void | [initConfig](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#initConfig\(java.lang.String[]\)) (String\[\] args)  Initializes the `Configuration` instance using the properties file specified in the command line arguments. |
| synchronized static void | [initConfig](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#initConfig\(java.util.Properties\)) (Properties config)  Initializes the `Configuration` instance using the provided `Properties`. |
| static boolean | [isInitialized](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration#isInitialized\(\)) ()  Checks whether the `Configuration` is initialized. |

### Inherited Method Summary

From class java.lang.Object

| boolean | equals(Object arg0) |
| --- | --- |
| final Class<?> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| String | toString() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| final void | wait() |

## Fields

#### public static final Parser<Boolean> BOOLEAN\_PARSER

`Configuration.Parser` for parsing string values as boolean. This parser supports only 'true' and 'false' as valid values, ignoring case.

#### public static final Parser<Double> DOUBLE\_PARSER

`Configuration.Parser` for parsing string values as double.

#### public static final Parser<Integer> INTEGER\_PARSER

`Configuration.Parser` for parsing string values as integer.

#### public static final Parser<String> STRING\_PARSER

`Configuration.Parser` for parsing string values.

## Public Methods

#### public static void checkConfiguration (boolean condition, String errorFormat, Object... errorArgs)

Checks for a configuration error.

This allows the connector to throw a `InvalidConfigurationException` instead of a `checkArgument()` method's `IllegalArgumentException`. This prevents the SDK start up code from performing retries when a quick exit is appropriate.

##### Parameters

| condition | the valid condition to test |
| --- | --- |
| errorFormat | the format string for the thrown exception message when the `condition` is not met |
| errorArgs | the arguments for the `errorFormat` |

#### public static void checkConfiguration (boolean condition, String errorMessage)

Checks for a configuration error.

This allows the connector to throw a `InvalidConfigurationException` instead of a `checkArgument()` method's `IllegalArgumentException`. This prevents the SDK start up code from performing retries when a quick exit is appropriate.

##### Parameters

| condition | the valid condition to test |
| --- | --- |
| errorMessage | the thrown exception message when the `condition` is not met |

#### public static ConfigValue<Boolean> getBoolean (String configKey, Boolean defaultValue)

Get configuration values parsed as boolean for supplied configuration key.

##### Parameters

| configKey | configuration key to read value for |
| --- | --- |
| defaultValue | default value to return if configuration key value doesn't exist. |

#### public static Properties getConfig ()

Retrieves all of the configuration properties.

Caller should check `isInitialized()` before calling.

##### Returns

- configuration properties

#### public static ConfigValue<Integer> getInteger (String configKey, Integer defaultValue)

Get configuration values parsed as integer for supplied configuration key.

##### Parameters

| configKey | configuration key to read value for |
| --- | --- |
| defaultValue | default value to return if configuration key value doesn't exist. |

#### public static ConfigValue<List<T>> getMultiValue (String configKey, List<T> defaultValues, Parser<T> parser)

Allows for retrieving a parameter value that consists of a comma delimited list.

The most common usage is for a configuration parameter that is a list of comma delimited strings. For example:

```
// list of strings
   ConfigValue<List<String>> listParam =
       Configuration.getMultiValue("config.stringList", null, Configuration.STRING_PARSER);
```

##### Parameters

| configKey | configuration file parameter key |
| --- | --- |
| defaultValues | list of default key values |
| parser | specific parser to support the list object's data type |

##### Returns

- the list type object

#### public static ConfigValue<List<T>> getMultiValue (String configKey, List<T> defaultValues, Parser<T> parser, String delimiter)

Allows for retrieving a parameter value that consists of a delimited list. For a comma-delimited list, see `getMultiValue`.

The most common usage is for a configuration parameter that is a list of delimited strings. For example:

```
// list of strings
   ConfigValue<List<String>> listParam =
       Configuration.getMultiValue(
           "config.stringList", null, Configuration.STRING_PARSER, ";");
```

##### Parameters

| configKey | configuration file parameter key |
| --- | --- |
| defaultValues | list of default key values |
| parser | specific parser to support the list object's data type |
| delimiter | the character between multiple values |

##### Returns

- the list type object

#### public static ConfigValue<T> getOverriden (String configKey, ConfigValue<T> defaultValue)

Allows for chaining default configuration values.

This is used to allow fetching a configuration value while using a previously defined configuration value as a default value. That default can also be the result of a another parameter, and so on.

For example:

```
// set configDefaultValue to the configuration file value, or 10 if not defined
   ConfigValue<Integer> configDefaultValue = Configuration.getInteger("connector.count", 10);

   // set configSpecificValue to the configuration file value or configDefaultValue
   ConfigValue<Integer> configSpecificValue =
       Configuration.getOverriden("specific.connector.count", configDefaultValue);

   // at this point configSpecificValue is set to:
   //    1) the configuration value for "specific.connector.count"; if not defined then:
   //    2) the configuration value for "connector.count"; if that is not defined then:
   //    3) 10, which is the default value for "connector.count".
```

##### Parameters

| configKey |  |
| --- | --- |
| defaultValue |  |

#### public static ConfigValue<String> getString (String configKey, String defaultValue)

Get configuration values parsed as string for supplied configuration key.

##### Parameters

| configKey | configuration key to read value for |
| --- | --- |
| defaultValue | default value to return if configuration key value doesn't exist. |

#### public static ConfigValue<T> getValue (String configKey, T defaultValue, Parser<T> parser)

Allows for creating custom type `ConfigValue` instances.

For example:

```
// custom parser for URL values
   Parser<URL> urlParser =
       value -> {
         try {
           return new URL(value);
         } catch (MalformedURLException e) {
           throw new InvalidConfigurationException(e);
         }
       };
   ConfigValue<URL> configuredUrl = Configuration.getValue("config.url", null, urlParser);
```

##### Parameters

| configKey | configuration file parameter key |
| --- | --- |
| defaultValue | default key value |
| parser | custom parser to support the data type |

##### Returns

- the custom type object

#### public static void initConfig (String\[\] args)

Initializes the `Configuration` instance using the properties file specified in the command line arguments. Properties can also be specified on the command line as "-DpropertyName=propertyValue". A property given on the command line will override the same property from the config file.

Caller should check `isInitialized()` before calling `initConfig(String[])`.

##### Parameters

| args | command line arguments |
| --- | --- |

##### Throws

| IOException |  |
| --- | --- |

#### public static synchronized void initConfig (Properties config)

Initializes the `Configuration` instance using the provided `Properties`.

Caller should check `isInitialized()` before calling `initConfig(String[])`

##### Parameters

| config | `Properties` properties to initialize |
| --- | --- |

#### public static boolean isInitialized ()

Checks whether the `Configuration` is initialized.

##### Returns

- true if configuration has been initialized. false otherwise.
