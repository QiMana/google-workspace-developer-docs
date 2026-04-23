---
source: https://developers.google.com/workspace/admin/alertcenter/guides
root: workspace
fetched_at: 2026-04-23T15:23:19.196Z
---

# Overview

The Alert Center API lets you manage *alerts* affecting your domain. An alert is a warning of a potential security issue that Google has detected. Alerts include the following information:

- Source that the alert originated from.
- Name of the alert.
- Time this alert happened.
- Specific data associated with this alert.

Domain administrators can see and manage alerts manually from the [Google Admin console](https://support.google.com/a/topic/2413312). The Alert Center API lets apps you build retrieve alert data and alert feedback. The API can also create new alert feedback for existing alerts.

For example, a monitoring app could use the Alert Center API to retrieve the most recent alerts for a domain, prioritize them, and then notify members of your organization. After your team responds to the alert, the app could then attach feedback to the alert based on their findings.

## Use Alert Center API

Before using the Alert Center API you need to set up [a new Google Cloud project and enable Alert Center API](./quickstart/java.md). Your project must use a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) when accessing the API.

Once your app has a Google Cloud project that meets the prerequisites and is properly [authorized](./guides/auth.md), it can make Alert Center API REST requests. Making API requests is easier when using the available [client libraries](./guides/libraries.md).

The following example shows how to list available alerts using the API:

### Java

```
// First, authorize the API and create a client to make requests with.
URL serviceAccountUrl = AuthUtils.class.getResource("/client_secret.json");
GoogleCredentials credentials =  ServiceAccountCredentials
    .fromStream(serviceAccountUrl.openStream())
    .createDelegated("admin@xxxx.com")
    .createScoped(Collections.singleton("https://www.googleapis.com/auth/apps.alerts"));
ApacheHttpTransport transport = new ApacheHttpTransport();
HttpCredentialsAdapter adapter = new HttpCredentialsAdapter(credentials);
AlertCenter alertCenter = new AlertCenter.Builder(transport, new JacksonFactory(), adapter)
    .setApplicationName("Alert Center client")
    .build();

// List alerts in pages, printing each alert discovered.
String pageToken = null;
do {
  ListAlertsResponse listResponse = service.alerts().list().setPageToken(pageToken)
      .setPageSize(20).execute();
  if (listResponse.getAlerts() != null) {
    for (Alert alert : listResponse.getAlerts()) {
      System.out.println(alert);
    }
  }
  pageToken = listResponse.getNextPageToken();
} while (pageToken != null);
```
