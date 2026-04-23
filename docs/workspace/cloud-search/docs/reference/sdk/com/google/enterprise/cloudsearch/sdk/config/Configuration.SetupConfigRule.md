---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.SetupConfigRule
root: workspace
fetched_at: 2026-04-23T15:26:31.196Z
---

# Configuration.SetupConfigRule

`TestRule` to initialize static object for unit tests.

For example:

```
@Rule public ResetConfigRule resetConfig = new ResetConfigRule(); 
@Rule public SetupConfigRule setupConfig = SetupConfigRule.uninitialized(); 

@Test public void testSomething() {
    Properties configProperties = new Properties();
    configProperties.put("config.key1", "value1");
    setupConfig.initConfig(configProperties);
    // do test code using initialized configuration
    ...
  }
```

### Public Method Summary

| Statement | [apply](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.SetupConfigRule#apply\(org.junit.runners.model.Statement,%20org.junit.runner.Description\)) (Statement base, Description description) |
| --- | --- |
| void | [initConfig](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.SetupConfigRule#initConfig\(java.util.Properties\)) (Properties properties) |
| static [Configuration.SetupConfigRule](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.SetupConfigRule) | [uninitialized](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.SetupConfigRule#uninitialized\(\)) ()  Factory method to get an instance of `Configuration.SetupConfigRule`. |

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

From interface org.junit.rules.TestRule

| abstract Statement | apply(Statement arg0, Description arg1) |
| --- | --- |

## Public Methods

#### public Statement apply (Statement base, Description description)

##### Parameters

| base |  |
| --- | --- |
| description |  |

#### public void initConfig (Properties properties)

##### Parameters

| properties |  |
| --- | --- |

#### public static Configuration.SetupConfigRule uninitialized ()

Factory method to get an instance of `Configuration.SetupConfigRule`.
