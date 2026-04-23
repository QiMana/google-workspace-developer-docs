---
source: https://developers.google.com/workspace/admin/directory/v1/guides/search-devices
root: workspace
fetched_at: 2026-04-23T15:23:49.601Z
---

# Search for devices

You can search for devices matching certain attributes with the [`mobiledevices.list`](../../reference/rest/v1/mobiledevices/list.md) method of the Directory API. This method accepts the `query` parameter which is a search query combining one or more search clauses. Each search clause is made up of three parts:

Field

Device attribute that is searched. For example, `serial`.

Operator

Test that is performed on the data to provide a match. For example, the `:` operator tests if a text attribute *matches* a value.

Value

The content of the attribute that is tested. For example, `serialNumber`.

Multiple clauses are separated by whitespace and are implicitly joined by an `AND` operator.

## Examples

All queries use the [`mobiledevices.list`](../../reference/rest/v1/mobiledevices/list.md) method, which has an HTTP request similar to the following (line breaks included for readability):

```
GET https://admin.googleapis.com/admin/directory/v1/customer/customerId/devices/mobile
?query=query parameters
```

The `query` parameters must be URL encoded. For example, the query `query=brand:goo*` is URL encoded as `query=brand%3goo*`. All examples on this page show unencoded `query` parameters. Client libraries handle this URL encoding automatically.

Search for devices matching an serial number prefix

```
serial:525*
```

Search for devices with email starting with fred

```
email:fred* email:contact*
```
