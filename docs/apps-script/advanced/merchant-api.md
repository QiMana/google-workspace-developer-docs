---
source: https://developers.google.com/apps-script/advanced/merchant-api
root: apps-script
fetched_at: 2026-04-23T15:18:07.766Z
---

# Merchant API Service

## Page Summary

- The Merchant API service allows you to utilize the Merchant API in Apps Script for uploading products and managing Merchant Center accounts.
- To use the Merchant API service in Apps Script, you need to link your project to a standard Google Cloud project, enable the Apps Script Advanced service, and register your Cloud project with your Merchant Center account.
- The Apps Script Advanced service for the Merchant API can be enabled either by modifying the `appsscript.json` manifest file or by adding the service through the Apps Script editor for existing projects or additional sub-APIs.
- Code examples are provided for common tasks such as listing products, filtering disapproved products, retrieving reports, and listing data sources using the Merchant API service in Apps Script.

upload products and manage Merchant Center accounts.

The Merchant API service lets you use [Merchant API](https://developers.google.com/merchant/api) in Google Apps Script, to upload products and manage Merchant Center accounts.

For detailed information about Merchant API, see the [reference documentation](https://developers.google.com/merchant/api/reference/rest). Like all advanced services in Apps Script, the Merchant API service uses the same objects, methods, and parameters as the public API.

Merchant API is a collection of sub-APIs - groups of related services and resources. Here's the list of [sub-APIs](https://developers.google.com/merchant/api/design#sub-apis).

To use the Merchant API service in Apps Script, follow these steps:

1. Make sure that your Apps Script project is linked to a standard Google Cloud project. For information, see [Use a different standard Cloud project](https://developers.google.com/apps-script/guides/cloud-platform-projects#use_a_different_standard_project).
2. Enable the Apps Script Advanced service, as described in this document:
	- Enable `appsscript.json` for new projects.
		- Enable Apps Script for existing projects.
3. Register your standard Google Cloud project with your Merchant Center account, as described in the Merchant API [quickstart](https://developers.google.com/merchant/api/guides/quickstart) guide.

## Enable Apps Script Advanced service

You can enable the Apps Script service using either of the following two methods:

### Enable APIs in appsscript.json

The following example shows an `appsscript.json` file that enables the Products, Accounts, Reports, and Data sources sub-APIs.

1. In the Apps Script editor, select **Project Settings** .
	![Apps Script project settings showing the 'Show appsscript.json manifest file in editor' option.](https://developers.google.com/static/apps-script/images/screenshots/merchantAPI-Apps-Scripttest.png)
2. Enable the **Show "appsscript.json" manifest file in editor** option.
3. In the editor, select the `appsscript.json` file.
4. Replace the contents of your `appsscript.json` file with the following:
	```
	{
	  "dependencies": {
	    "enabledAdvancedServices": [
	      {
	        "userSymbol": "MerchantApiAccounts",
	        "version": "accounts_v1",
	        "serviceId": "merchantapi"
	      },
	      {
	        "userSymbol": "MerchantApiDataSources",
	        "version": "datasources_v1",
	        "serviceId": "merchantapi"
	      },
	      {
	        "userSymbol": "MerchantApiProducts",
	        "version": "products_v1",
	        "serviceId": "merchantapi"
	      },
	      {
	        "userSymbol": "MerchantApiReports",
	        "version": "reports_v1",
	        "serviceId": "merchantapi"
	      }
	    ]
	  },
	  "exceptionLogging": "STACKDRIVER",
	  "runtimeVersion": "V8"
	}appsscript_v1.json
	```
5. Click **Save**.
6. You can now refer to the following sub-APIs within your code as:
	a. `MerchantApiAccounts`
	b. `MerchantApiDataSources`
	c. `MerchantApiProducts`
	d. `MerchantApiReports`

### Enable Apps Script for additional sub-APIs or existing projects

To enable sub-APIs in existing projects, do the following:

1. Open your Apps Script project.
2. At the left, click **Editor < >**.
3. At the left, next to **Services**, click **Add a service +**.
4. Select the sub-API you want to enable within the version selector.
5. Append the identifier with name of your sub-API. For example, to enable the Inventories sub-API, select version `inventories_v1` and change the identifier to `MerchantApiInventories`.
	![](https://developers.google.com/static/apps-script/images/screenshots/merchantAPI-AdvancedGoogleServices.png)
6. You can now refer to Inventories sub-API within your code as `MerchantApiInventories`.

## Sample code

This section explains how to use Merchant API for selected features.

### List the products

This example demonstrates how to list the products for a given Merchant Center account.

```
/**
 * Lists all products for a given Merchant Center account.
 */
function productList() {
  // IMPORTANT:
  // Enable the Merchant API Products sub-API Advanced Service and call it
  // "MerchantApiProducts"

  // Replace this with your Merchant Center ID.
  const accountId = '<MERCHANT_CENTER_ID>';

  // Construct the parent name
  const parent = 'accounts/' + accountId;

  try {
    console.log('Sending list Products request');
    let pageToken;
    // Set the page size to 1000. This is the maximum allowed page size.
    let pageSize = 1000;

    console.log('Retrieved products below:');
    // Call the Products.list API method. Use the pageToken to iterate through
    // all pages of results.
    do {
      response = MerchantApiProducts.Accounts.Products.list(parent, {pageToken, pageSize});
      console.log(response);
      pageToken = response.nextPageToken;
    } while (pageToken); // Exits when there is no next page token.
  } catch (e) {
    console.log('ERROR!');
    console.log(e);
  }
}list_products_sample.gs
```

### Filter disapproved products

This example demonstrates how to filter disapproved products in a Merchant Center account.

```
/**
 * Demonstrates how to filter disapproved products using the Merchant API Reports service.
 */
function filterDisapprovedProducts() {
  // IMPORTANT:
  // Enable the Merchant API Reports sub-API Advanced Service and call it
  // "MerchantApiReports"
  // Enable the Merchant API Products sub-API Advanced Service and call it
  // "MerchantApiProducts"

  // Replace this with your Merchant Center ID.
  const accountId = '<INSERT_MERCHANT_CENTER_ID>';

  // Construct the parent name
  const parent = 'accounts/' + accountId;

  try {
    console.log('Sending search Report request');
    // Set pageSize to the maximum value (default: 1000)
    let pageSize = 1000;
    let pageToken;
    // The query below is an example of a query for the productView that gets product informations
    // for all disapproved products.
    let query = 'SELECT offer_id,' +
        'id,' +
        'price,' +
        'title' +
        ' FROM product_view' +
        ' WHERE aggregated_reporting_context_status = "NOT_ELIGIBLE_OR_DISAPPROVED"';

    // Call the Reports.search API method. Use the pageToken to iterate through
    // all pages of results.
    do {
      response =
          MerchantApiReports.Accounts.Reports.search({query, pageSize, pageToken}, parent);
      for (const reportRow of response.results) {
        console.log("Printing data from Product View:");
        console.log(reportRow);

        // OPTIONALLY, you can get the full product details by calling the GetProduct method.
        let productName = parent + "/products/" + reportRow.getProductView().getId();
        product = MerchantApiProducts.Accounts.Products.get(productName);
        console.log(product);
      }
      pageToken = response.nextPageToken;
    } while (pageToken);  // Exits when there is no next page token.

  } catch (e) {
    console.log('ERROR!');
    console.log('Error message:' + e.message);
  }
}
filter_disapproved_products_sample.gs
```

### Retrieve a report for a given account

This example demonstrates how to retrieve a report for a given Merchant Center account.

```
/**
 * Searches a report for a given Merchant Center account.
 */
function searchReport() {
  // IMPORTANT:
  // Enable the Merchant API Reports sub-API Advanced Service and call it
  // "MerchantApiReports"

  // Replace this with your Merchant Center ID.
  const accountId = '<MERCHANT_CENTER_ID>';

  // Construct the parent name
  const parent = 'accounts/' + accountId;

  try {
    console.log('Sending search Report request');
    // Set pageSize to the maximum value (default: 1000)
    let pageSize = 1000;
    let pageToken;
    // Uncomment the desired query from below. Documentation can be found at
    // https://developers.google.com/merchant/api/reference/rest/reports_v1beta/accounts.reports#ReportRow
    // The query below is an example of a query for the product_view.
    let query = 'SELECT offer_id,' +
        'id,' +
        'price,' +
        'gtin,' +
        'item_issues,' +
        'channel,' +
        'language_code,' +
        'feed_label,' +
        'title,' +
        'brand,' +
        'category_l1,' +
        'product_type_l1,' +
        'availability,' +
        'shipping_label,' +
        'thumbnail_link,' +
        'click_potential' +
        ' FROM product_view';

    /*
    // The query below is an example of a query for the
    price_competitiveness_product_view. let query = "SELECT offer_id,"
                 + "id,"
                 + "benchmark_price,"
                 + "report_country_code,"
                 + "price,"
                 + "title,"
                 + "brand,"
                 + "category_l1,"
                 + "product_type_l1"
                + " FROM price_competitiveness_product_view"
                + " WHERE date BETWEEN '2023-03-03' AND '2025-03-10'"; */
    /*
    // The query below is an example of a query for the
    price_insights_product_view. let query = "SELECT offer_id,"
                     + "id,"
                     + "suggested_price,"
                     + "price,"
                     + "effectiveness,"
                     + "title,"
                     + "brand,"
                     + "category_l1,"
                     + "product_type_l1,"
                     + "predicted_impressions_change_fraction,"
                     + "predicted_clicks_change_fraction,"
                     + "predicted_conversions_change_fraction"
                    + " FROM price_insights_product_view"; */

    /*
    // The query below is an example of a query for the
    product_performance_view. let query = "SELECT offer_id,"
            + "conversion_value,"
            + "marketing_method,"
            + "customer_country_code,"
            + "title,"
            + "brand,"
            + "category_l1,"
            + "product_type_l1,"
            + "custom_label0,"
            + "clicks,"
            + "impressions,"
            + "click_through_rate,"
            + "conversions,"
            + "conversion_rate"
            + " FROM product_performance_view"
            + " WHERE date BETWEEN '2023-03-03' AND '2025-03-10'"; */

    // Call the Reports.search API method. Use the pageToken to iterate through
    // all pages of results.
    do {
      response =
          MerchantApiReports.Accounts.Reports.search({query, pageSize, pageToken}, parent);
      for (const reportRow of response.results) {
        console.log(reportRow);
      }
      pageToken = response.nextPageToken;
    } while (pageToken);  // Exits when there is no next page token.

  } catch (e) {
    console.log('ERROR!');
    console.log(e);
    console.log('Error message:' + e.message);
    if (e.stack) {
      console.log('Stack trace:' + e.stack);
    }
  }
}

search_report_sample.gs
```

### List all data sources

This example demonstrates how to list all the data sources in a given Merchant Center account.

```
/**
 * Lists all data sources for a given Merchant Center account.
 */
function listDataSources() {
  // IMPORTANT:
  // Enable the Merchant API DataSources sub-API Advanced Service and call it
  // "MerchantApiDataSources"

  // Replace this with your Merchant Center ID.
  const accountId = '<MERCHANT_CENTER_ID>';

  // Construct the parent name
  const parent = 'accounts/' + accountId;
  let dataSources = [];
  let primaryDataSources = [];
  try {
    console.log('Sending list DataSources request');
    let pageToken;
    let pageSize = 10;
    // Call the DataSources.list API method. Use the pageToken to iterate through
    // all pages of results.
    do {
      response =
          MerchantApiDataSources.Accounts.DataSources.list(parent, {pageSize, pageToken});
      for (const datasource of response.dataSources) {
        dataSources.push(datasource);
        if (datasource.primaryProductDataSource) {
          primaryDataSources.push(datasource);
        }
      }
      pageToken = response.nextPageToken;
    } while (pageToken);  // Exits when there is no next page token.
    console.log('Retrieved ' + dataSources.length + ' data sources.');
    console.log(
        'There were ' + primaryDataSources.length +
        ' primary product data sources.');
  } catch (e) {
    console.log('ERROR!');
    console.log(e);
  }
}list_data_sources_sample.gs
```
