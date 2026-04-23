---
source: https://developers.google.com/workspace/cloud-search/docs/guides/delegation
root: workspace
fetched_at: 2026-04-23T15:26:08.052Z
---

# Perform Google Workspace domain-wide delegation of authority

The Google Cloud Search Query API requires calls to be authorized by a licensed domain user. Because service accounts aren't licensed domain users, they can't call the Query API by default. To enable a service account to make Query API calls, a domain administrator can use *domain-wide delegation of authority* to grant the service account access to your domain's user data. A service account with delegated authority can impersonate any user with access to Cloud Search.

## Create the service account and credentials

If you don't have service account credentials, see [Create service account credentials](https://developers.google.com/workspace/cloud-search/docs/guides/project-setup#create_service_account_credentials).

## Delegate domain-wide authority to your service account

To access user data on a Google Workspace domain, a super administrator for the domain must grant access to your service account. For more information, see [Control Google Workspace API access with domain-wide delegation](https://support.google.com/a/answer/162106).

To delegate domain-wide authority to a service account:

1. In your domain's [Admin console](http://admin.google.com/), go to **Main menu** > **Security** > **Access and data control** > **API controls**.
2. In the **Domain wide delegation** pane, select **Manage Domain Wide Delegation**.
3. Click **Add new**.
4. In the **Client ID** field, enter the client ID for your service account.
5. In the **OAuth Scopes** field, enter a comma-separated list of the required scopes. Use `https://www.googleapis.com/auth/cloud_search.query` for search applications.
6. Click **Authorize**.

Your service account now has domain-wide access to the Cloud Search Query API and can impersonate any user in your domain within this scope. You can now instantiate an authorized Cloud Search API service object on behalf of your domain's users.

## Instantiate a Cloud Search API service object

This section shows how to instantiate and authorize a Cloud Search API service object using OAuth 2.0 and your service account credentials. These examples read information from the service account's JSON private key file.

### Java

```
import java.util.Collections;
import java.io.FileInputStream;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.services.cloudsearch.v1.CloudSearch;
import com.google.api.services.cloudsearch.v1.CloudSearchScopes;
...

/** Path to the Service Account's Private Key file */
private static final String SERVICE_ACCOUNT_FILE_PATH = "/path/to/key.json";

/**
 * Build and return a Cloud Search service object.
 *
 * @param userEmail The email of the user to impersonate.
 * @return CloudSearch service object.
 */
public static CloudSearch getCloudSearchAPIService(String userEmail)
    throws FileNotFoundException, IOException {

  FileInputStream credsFile = new FileInputStream(SERVICE_ACCOUNT_FILE_PATH);
  GoogleCredential init = GoogleCredential.fromStream(credsFile);

  HttpTransport httpTransport = init.getTransport();
  JsonFactory jsonFactory = init.getJsonFactory();

  GoogleCredential creds = new GoogleCredential.Builder()
      .setTransport(httpTransport)
      .setJsonFactory(jsonFactory)
      .setServiceAccountId(init.getServiceAccountId())
      .setServiceAccountPrivateKey(init.getServiceAccountPrivateKey())
      .setServiceAccountScopes(Collections.singleton(
          CloudSearchScopes.CLOUD_SEARCH_QUERY))
      .setServiceAccountUser(userEmail)
      .build();

  return new CloudSearch.Builder(httpTransport, jsonFactory, creds).build();
}
```

### Python

```
from google.oauth2 import service_account
from googleapiclient.discovery import build

# Path to the Service Account's Private Key file
SERVICE_ACCOUNT_FILE_PATH = "/path/to/key.json"

def create_query_api_service(user_email):
    """Build and return a Cloud Search service object.

    Args:
        user_email: The email of the user to impersonate.
    Returns:
        Cloud Search Query API service object.
    """
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE_PATH,
        scopes=['https://www.googleapis.com/auth/cloud_search.query'])

    delegated_credentials = credentials.with_subject(user_email)

    return build("cloudsearch", "v1", credentials=delegated_credentials)
```
