---
source: https://developers.google.com/workspace/cloud-search/docs/guides/implement-vpc-service-controls
root: workspace
fetched_at: 2026-04-23T15:26:09.616Z
---

# Enhance security with VPC Service Controls

Google Cloud Search supports VPC Service Controls to enhance data security. VPC Service Controls lets you define a service perimeter around Google Cloud resources to constrain data and mitigate exfiltration risks.

## Prerequisites

Before you begin, [install the gcloud CLI](https://docs.cloud.google.com/sdk/gcloud).

## Enable VPC Service Controls

To enable VPC Service Controls:

1. Obtain the project IDs and numbers for the Google Cloud project you want to use. See [Identifying projects](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects).
2. Use `gcloud` to create an access policy for your Google Cloud organization:
	1. [Get your organization ID](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id).
		2. [Create an access policy](https://docs.cloud.google.com/access-context-manager/docs/create-access-policy).
		3. [Get the name of your access policy](https://docs.cloud.google.com/access-context-manager/docs/manage-access-policy#gcloud).
3. Create a service perimeter with Cloud Search as a restricted service:
	```
	gcloud access-context-manager perimeters create NAME \
	    --title=TITLE \
	    --resources=PROJECTS \
	    --restricted-services=RESTRICTED-SERVICES \
	    --policy=POLICY_NAME
	```
	Where:
	- `NAME` is the perimeter name.
		- `TITLE` is the perimeter title.
		- `PROJECTS` is a comma-separated list of project numbers, each preceded by `projects/`. For example, `--resources=projects/12345,projects/67890`. This flag only supports project numbers.
		- `RESTRICTED-SERVICES` is a comma-separated list. Use `cloudsearch.googleapis.com`.
		- `POLICY_NAME` is the numeric name of your organization's access policy.
	For more information, see [Creating a service perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters).
4. (Optional) To apply IP or region-based restrictions, create access levels and add them to the perimeter:
	1. To create an access level, see [Creating a basic access level](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level). For an example, see [Limit access on a corporate network](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level#corporate-network-example).
		2. Add the access level to the perimeter. See [Adding an access level to an existing perimeter](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters#add-access-level). Propagation can take up to 30 minutes.
5. Use the Cloud Search Customer Service REST API to update customer settings with your protected project:
	1. Obtain an OAuth 2.0 access token. See [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2). Use one of these scopes:
		- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
				- `https://www.googleapis.com/auth/cloud_search.settings`
				- `https://www.googleapis.com/auth/cloud_search`
		2. Run this curl command:
		```
		curl --request PATCH \
		  'https://cloudsearch.googleapis.com/v1/settings/customer' \
		  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
		  --header 'Accept: application/json' \
		  --header 'Content-Type: application/json' \
		  --data '{ "vpc_settings": { "project": "projects/PROJECT_ID" } }' \
		  --compressed
		```
		Replace `YOUR_ACCESS_TOKEN` and `PROJECT_ID`.

A successful update returns a `200 OK` response. VPC Service Controls restrictions now apply to all Cloud Search APIs, searches at `cloudsearch.google.com`, and Admin console configurations or reports. Requests that violate access levels receive a `PERMISSION_DENIED` error.
