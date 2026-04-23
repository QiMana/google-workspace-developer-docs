---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/serving/SearchAuthInfo
root: workspace
fetched_at: 2026-04-23T15:27:00.743Z
---

# SearchAuthInfo

Container for auth info used to serving items. Objects of this class contain the info necessary to authenticate as a given user and perform a serving on their behalf. See https://developers.google.com/adwords/api/docs/guides/authentication#create\_a\_client\_id\_and\_client\_secret for instructions to generate the client secrets.

### Public Constructor Summary

[SearchAuthInfo](./SearchAuthInfo.md#SearchAuthInfo(java.io.File,%20java.io.File,%20java.lang.String)) (File clientSecrets, File credentialsDirectory, String userEmail)

Constructor.

### Public Method Summary

| InputStream | [getClientSecretsStream](./SearchAuthInfo.md#getClientSecretsStream()) () |
| --- | --- |
| File | [getCredentialsDirectory](./SearchAuthInfo.md#getCredentialsDirectory()) () |
| String | [getUserEmail](./SearchAuthInfo.md#getUserEmail()) () |

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

## Public Constructors

#### public SearchAuthInfo (File clientSecrets, File credentialsDirectory, String userEmail)

Constructor.

##### Parameters

| clientSecrets | \- path to the client secrets JSON file. |
| --- | --- |
| credentialsDirectory | \- path to the directory containing the StoredCredential file for the client secrets. |
| userEmail | \- e-mail of the user associated to the client secrets file. |

## Public Methods

#### public InputStream getClientSecretsStream ()

##### Throws

| FileNotFoundException |  |
| --- | --- |
