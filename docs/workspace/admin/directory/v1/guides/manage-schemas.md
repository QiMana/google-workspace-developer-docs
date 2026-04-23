---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-schemas
root: workspace
fetched_at: 2026-04-23T15:23:47.687Z
---

# Manage Custom User Fields

You can define custom fields for users on your domain by adding custom user schemas to the domain. You can use these fields to store information such as the projects your users work on, their physical locations, their hire date, or whatever else fits your business needs.

To get started, [create one or more schemas](../../reference/rest/v1/schemas/insert.md) to define the custom fields that make sense for your domain. You can specify a number of attributes, such as the name of the field, the type (string, boolean, integer, etc.), whether it's single- or multi-valued, and whether its values are viewable by any user in your domain or only administrators and the associated user.

Once a schema is defined, the custom fields behave just like standard fields. You can set them when [updating users on your domain](./manage-users.md#update_user), fetch them with [`users.get`](../../reference/rest/v1/users/get.md) and [`users.list`](../../reference/rest/v1/users/list.md), and also [search](./search-users.md) for custom fields.

## Set custom fields in a user profile

To update or create a schema, [create a `customSchemas` property](#create_schema) and add it to the user resource. Inside the `customSchemas` property, the custom fields are grouped by schema in standard JSON format:

```
"customSchemas": {
  "schema1": {
    "field1": "value1",
    "field2": [
      { "value": "value2a" },
      { "value": "value2b" },
      ...
    ],
    ...
  },
  "schema2": {
    "field3": "value3",
    ...
  },
  ...
}
```

Single-valued custom fields are set as simple key-value pairs, like `"field1": "value1"`. Multi-valued custom fields are set as arrays of objects, like the standard multi-value fields in the API such as `addresses` and `phones`. These value objects support the following keys:

<table><tbody><tr><th colspan="2">Keys</th></tr><tr><td><code>value</code></td><td>The value to be stored, required.</td></tr><tr><td><code>type</code></td><td>Type of the value, optional. Possible values are:<ul><li><code>custom</code></li><li><code>home</code></li><li><code>other</code></li><li><code>work</code></li></ul></td></tr><tr><td><code>customType</code></td><td>Custom type of the value, optional. Must be used when <code>type</code> is set to <code>custom</code>.</td></tr></tbody></table>

If a custom field in a schema is not specified at update time, it is left unchanged. If a schema itself is not specified in `customFields` at update time, all custom fields in that schema are left unchanged. To delete a custom field or a custom schema from a profile, you must set it to `null` explicitly:

```
"schema1": {
  "field1": null
}
```

### JSON request

The call in the example below updates a user and sets values for the `employmentData` custom schema:

```
PATCH https://admin.googleapis.com/admin/directory/v1/users/liz@example.com
```

```
{
  "customSchemas": {
    "employmentData": {
      "employeeNumber": "123456789",
      "jobFamily": "Engineering",
      "location": "Atlanta",
      "jobLevel": 8,
      "projects": [
        { "value": "GeneGnome" },
        { "value": "Panopticon", "type": "work" },
        { "value": "MegaGene", "type": "custom", "customType": "secret" }
      ]
    }
  }
}
```

## Read custom fields in a user profile

You can fetch custom fields in a user profile by setting the `projection` parameter in a [`users.get`](../../reference/rest/v1/users/get.md) or [`users.list`](../../reference/rest/v1/users/list.md) request to `custom` or `full`.

## Search custom fields in a user profile

You can search within custom fields using the `query` parameter in a [`users.list`](../../reference/rest/v1/users/list.md) request. You request the custom field with a `schemaName.fieldName` syntax. For example:

```
employmentData.projects:"GeneGnome"
```

returns all employees that work on project GeneGnome. The query

```
employmentData.location="Atlanta" employmentData.jobLevel>=7
```

returns all employees in Atlanta above job level 7. For more information, see [Search Users](./search-users.md).

## Create a custom user schema

A custom user schema can be added to all of your Google Workspace account's domains. To create a custom user schema in your domains, use the following `POST` request and include the authorization described in [Authorize requests](./authorizing.md). For the request query string properties, see the [API Reference](../../reference/rest/v1/schemas/insert.md).

```
POST https://admin.googleapis.com/admin/directory/v1/customer/<var>my_customer or customerId</var>/schemas
```

All create requests require you to submit the information needed to fulfill the request. If you are using client libraries, they convert the data objects from your chosen language into JSON data formatted objects.

### JSON request

The following sample shows a request to create a custom schema. For the full list of request and response properties, see the [API Reference](../../reference/rest/v1/schemas/insert.md).

```
{
  "schemaName": "employmentData",
  "fields": [
    {
      "fieldName": "EmployeeNumber",
      "fieldType": "STRING",
      "multiValued": "false"
    },
    {
      "fieldName": "JobFamily",
      "fieldType": "STRING",
      "multiValued": "false"
    }
  ]
}
```

A successful response returns an [HTTP 201 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes), along with the properties for the new custom schema.

### Custom schema limits

- The maximum number of custom schemas allowed in an account is 100.
- The maximum number of custom fields allowed in an account is 100.
- The maximum number of characters allowed in a `string` field for a single-valued custom field is 500. For multi-valued custom fields, the number of elements allowed depends on the size of the assigned values. For example, you can add 150 values of 100 characters each or 50 values of 500 characters each.
- The characters allowed in custom schemas and field names are alphanumeric characters, underscores (`_`), and hyphens (`-`).
- Changing the type of a field is not allowed.
- A single-valued field can be made multi-valued, but the inverse operation is not allowed.
- It is not possible to rename custom schemas or fields.

## Update a custom user schema

To update a custom schema, use the following `PUT` request and include the authorization described in [Authorize requests](./authorizing.md). The `schemaKey` can be the schema name or the unique schema `id`. For the request and response properties, see the [API Reference](../../reference/rest/v1/schemas/update.md).

```
PUT https://admin.googleapis.com/admin/directory/v1/customer/my_customer or customerId/schemas/schemaKey
```

### JSON request

In the following example, the schema `employmentData` contained a `JobFamily` field when originally created. The request is updating `employmentData` to contain only an `EmployeeNumber` field:

```
PUT https://admin.googleapis.com/admin/directory/v1/customer/my_customer/schemas/employmentData
```

```
{
  "kind": "admin#directory#schema",
  "schemaId": "dKaYmUwmSZy5lreXyh75hQ==",
  "etag": "\"St7vIdePbbDsQUvvrssynd-6JLg/PKg63GvWb7bnVSNRomd_O-Vi66w\"",
  "schemaName": "employmentData",
  "fields": [
    {
      "kind": "admin#directory#schema#fieldspec",
      "fieldId": "21_B4iQIRY-dIFGFgAX-Og==",
      "etag": "\"St7vIdePbbDsQUvvrssynd-6JLg/LZxiGaz6_N4R40OpKbDhOcy2qiE\"",
      "fieldType": "STRING",
      "fieldName": "EmployeeNumber",
      "multiValued": "false"
    }
  ]
}
```

All update requests require you to submit the information needed to fulfill the request.

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes), along with the updated schema resource.

## Retrieve a custom user schema

To retrieve a custom schema, use the following `GET` request and include the authorization described in [Authorize requests](./authorizing.md). The `schemaKey` can be the schema name or the unique schema `id`. For the request and response properties, see the [API Reference](../../reference/rest/v1/schemas/get.md).

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer or customerId/schemas/schemaKey
```

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes), along with the properties for the custom schema.

```
{
  "kind": "admin#directory#schema",
  "schemaId": "dKaYmUwmSZy5lreXyh75hQ==",
  "etag": "\"KYnPjBPqr8knK6v7rpxly9BhNeY/PKg63GvWb7bnVSNRomd_O-Vi66w\"",
  "schemaName": "employmentData",
  "fields": [
    {
      "kind": "admin#directory#schema#fieldspec",
      "fieldId": "21_B4iQIRY-dIFGFgAX-Og==",
      "etag": "\"KYnPjBPqr8knK6v7rpxly9BhNeY/LZxiGaz6_N4R40OpKbDhOcy2qiE\"",
      "fieldType": "STRING",
      "fieldName": "EmployeeNumber"
    },
    {
      "kind": "admin#directory#schema#fieldspec",
      "fieldId": "ZKy0QtoMRy2QlM-4sAsPtQ==",
      "etag": "\"KYnPjBPqr8knK6v7rpxly9BhNeY/jEULI-ZiqywQIHXgc8evEcTE4Cc\"",
      "fieldType": "STRING",
      "fieldName": "JobFamily"
    }
  ]
}
```

## Retrieve all custom user schemas

To retrieve all the custom schemas in the same account, use the following `GET` request and include the authorization described in [Authorize requests](./authorizing.md).For the request and response properties, see the [API Reference](../../reference/rest/v1/schemas/list.md).

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer or customerId/schemas
```

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes), along with the custom schemas for the account.

```
{
  "kind": "admin#directory#schemas",
  "etag": "\"KYnPjBPqr8knK6v7rpxly9BhNeY/iJ1eWn5AKuR-xTdwH_2IBlvSSKo\"",
  "schemas": [
    {
      "kind": "admin#directory#schema",
      "schemaId": "dKaYmUwmSZy5lreXyh75hQ==",
      "etag": "\"KYnPjBPqr8knK6v7rpxly9BhNeY/PKg63GvWb7bnVSNRomd_O-Vi66w\"",
      "schemaName": "employmentData",
      "fields": [
        {
          "kind": "admin#directory#schema#fieldspec",
          "fieldId": "21_B4iQIRY-dIFGFgAX-Og==",
          "etag": "\"KYnPjBPqr8knK6v7rpxly9BhNeY/LZxiGaz6_N4R40OpKbDhOcy2qiE\"",
          "fieldType": "STRING",
          "fieldName": "EmployeeNumber"
        },
        {
          "kind": "admin#directory#schema#fieldspec",
          "fieldId": "ZKy0QtoMRy2QlM-4sAsPtQ==",
          "etag": "\"KYnPjBPqr8knK6v7rpxly9BhNeY/jEULI-ZiqywQIHXgc8evEcTE4Cc\"",
          "fieldType": "STRING",
          "fieldName": "JobFamily"
        }
      ]
    }
  ]
}
```
