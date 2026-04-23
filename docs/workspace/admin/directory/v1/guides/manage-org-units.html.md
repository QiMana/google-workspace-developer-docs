---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-org-units.html
root: workspace
fetched_at: 2026-04-23T15:23:47.756Z
---

# Directory API: Organizational Units

## Manage organizational units

A Google Workspace account's organizational tree is composed of organizational units which let you manage your users in a logical and hierarchical structure. This is similar to the functionality found at the Google Admin console's 'Organizations and users' tab. The customer's organizational unit hierarchy is limited to 35 levels of depth. For more information, see the [Admin help center](http://support.google.com/a/bin/answer.py?answer=182433).

- There is only one organization tree to a Google Workspace account. When this account is initially configured, it has an organizational unit at the account-level. This is the organization associated with the primary domain. For more information about the primary domain, see the [API limits information](https://developers.google.com/workspace/admin/directory/v1/limits#multi_domains).
- An organizational unit's pathname is unique. The organizational unit's name may not be unique within the organization hierarchy but its name is unique amongst it's sibling organizational units. And an organizational unit's name is case insensitive.
- An organizational unit inherits policies from the organizational hierarchy. Any organizational unit can block this chain of parental inheritance by overriding the inherited policy. The precedence of one policy over another is determined by the nearest organizational unit. Meaning a lower organizational unit's policies can take precedence over the policies of the higher parental units. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).
- An organizational unit can be moved up or down a hierarchical tree. And, the organization's associated users can be moved individually or in a batch when populating a new organization or moving a subset of users from one organizational unit to another.
- The data kept in organizational unit properties can be constantly changing. When making a request, properties returned for an entity are guaranteed to be consistent at the time the entity was retrieved.That is, you will not see "partial" updates. If a retrieval operation returns more than one entity, there is no consistency guarantee across entities.This is especially true when a response spans multiple pages in pagination.

## Create an organizational unit

To create an organizational unit, use the following `POST` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing).

If you are an administrator creating an organizational unit, use `my_customer`.

```
POST https://admin.googleapis.com/admin/directory/v1/customer/my_customer/orgunits
```

If you are reseller creating an organizational unit for a resold customer, use `customerId`. To retrieve the `customerId`, use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation.

```
POST https://admin.googleapis.com/admin/directory/v1/customer/customerId/orgunits
```

To understand your account's organization structure, see the [Admin help center](http://support.google.com/a/bin/answer.py?answer=182433&topic=1227584&ctx=topic). For request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/orgunits/insert).

### JSON request

The following JSON reseller example shows a sample request body that creates the sales\_support organizational unit. The `name` and `parentOrgUnitPath` are required:

```
POST https://admin.googleapis.com/admin/directory/v1/customer/C03az79cb/orgunits
```

```
{
    "name": "sales_support",
    "description": "The sales support team",
    "parentOrgUnitPath": "/corp/support",
}
```

### JSON response

A successful response returns an [HTTP 201 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the properties for the new group:

```
{
    "kind": "directory#orgUnit",
    "name": "sales_support",
    "description": "The sales support team",
    "orgUnitPath": "/corp/support/sales_support",
    "parentOrgUnitPath": "/corp/support"
  }
```

## Update an organizational unit

To update an organizational unit, use the following `PUT` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/orgunits/update):

If you are an administrator updating an organizational unit, use `my_customer`.

```
PUT https://admin.googleapis.com/admin/directory/v1/customer/my_customer/orgunits/orgUnitPath
```

If you are a reseller updating an organizational unit for a resold customer, use `customerId`. To get the `customerId`, use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation.

```
PUT https://admin.googleapis.com/admin/directory/v1/customer/customerId/orgunits/orgUnitPath
```

### JSON request

In the example below, the organizational unit description has been updated:

```
PUT https://admin.googleapis.com/admin/directory/v1/customer/my_customer/orgunits/corp/support/sales_support
```

```
{
    "description": "The BEST sales support team"
}
```

Notes for an update request:

- You only need to submit the updated information in your request. You do not need to enter all of the group's properties in the request.
- If a user was not assigned to a specific organizational unit when the user account was created, the account is in the top-level organizational unit.
- You can move an organizational unit to another part of your account's organization structure by setting the `parentOrgUnitPath` property in the request. It is important to note, that moving an organizational unit can change the services and settings for the users in the organizational unit being moved.

### JSON response

A successful response returns an [HTTP 201 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the properties for the updated organizational unit.

```
{
    "kind": "directory#orgUnit",
    "name": "sales_support",
    "description": "The BEST sales support team",
    "orgUnitPath": "/corp/support/sales_support",
    "parentOrgUnitPath": "/corp/support"
}
```

If a user was not assigned to a specific organizational unit when the user account was created, the account is in the top-level organizational unit. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](http://support.google.com/a/bin/answer.py?answer=182433&topic=1227584&ctx=topic). For more infomation about moving a user to a different organization, see [Update a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user).

## Retrieve an organizational unit

To retrieve an organizational unit, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `orgUnitPath` query string is the full path for this organizational unit. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/orgunits/get):

If you are an administrator retrieving an organizational unit, use `my_customer`.

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer/orgunits/orgUnitPath
```

If you are a reseller retrieving an organizational unit for a resold customer, use the `customerId`. To get the `customerId` use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation.

```
GET https://admin.googleapis.com/admin/directory/v1/customer/customerId/orgunits/orgUnitPath
```

### JSON response

In the example below, the 'frontline sales' organizational unit is retrieved. Note the 'frontline+sales' HTTP encoding in the request's URI:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer/orgunits/corp/sales/frontline+sales
```

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the organizational unit's settings:

```
{
    "kind": "directory#orgUnit",
    "name": "frontline sales",
    "description": "The frontline sales team",
    "orgUnitPath": "/corp/sales/frontline sales",
    "parentOrgUnitPath": "/corp/sales"
}
```

## Retrieve organizational units

To retrieve all sub-organizational units under an organizational unit, the immediate children under an organizational unit, or all sub-organizational units plus the specified organizational unit, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/orgunits/list).

If you are an account administrator retrieving all sub-organizational units, use `my_customer`. For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer
/orgunits?orgUnitPath=full org unit path&type=all or children or all_including_parent
```

If you are a reseller retrieving organizational units for a resold customer, use the `customerId`. To get the `customerId` use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/customerId
/orgunits?orgUnitPath=full org unit path&type=all or children or all_including_parent
```

The `get` query string either returns `all` sub-organizational units under the `orgUnitPath`, the immediate `children` of the `orgUnitPath`, or all sub-organizational units and the specified `orgUnitPath` for `all_including_parent`. The default is `type=children`.

### JSON response

For example, this request returns all organizational units starting at the `/corp` organizational unit:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer/orgunits?orgUnitPath=/corp&type=all
```

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the account's organizational units:

```
{
"kind": "directory#orgUnits",
    "organizationUnits": [
     {
    "kind": "directory#orgUnit",
    "name": "sales",
    "description": "The corporate sales team",
    "orgUnitPath": "/corp/sales",
    "parentOrgUnitPath": "/corp"
     },
     {
    "kind": "directory#orgUnit",
    "name": "frontline sales",
    "description": "The frontline sales team",
    "orgUnitPath": "/corp/sales/frontline sales",
    "parentOrgUnitPath": "/corp/sales"
     },
     {
    "kind": "directory#orgUnit",
    "name": "support",
    "description": "The corporate support team",
    "orgUnitPath": "/corp/support",
    "parentOrgUnitPath": "/corp"
     },
     {
    "kind": "directory#orgUnit",
    "name": "sales_support",
    "description": "The BEST support team",
    "orgUnitPath": "/corp/support/sales_support",
    "parentOrgUnitPath": "/corp/support"
     }
  ]
  }
```

## Delete an organizational unit

To delete an organizational unit, use the following `DELETE` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). To retrieve the `customerId`, use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation. For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/orgunits/delete):

If you are an account administrator deleting an organizational unit, use `my_customer`.

```
DELETE https://admin.googleapis.com/admin/directory/v1/customer/my_customer/orgunits/orgUnitPath
```

If you are a reseller deleting an organizational unit for a resold customer, use the `customerId`. To get the `customerId` use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation.

```
DELETE https://admin.googleapis.com/admin/directory/v1/customer/customerId/orgunits/orgUnitPath
```

For example, this reseller administrator's `DELETE` request deletes the 'backend\_tests' organizational unit:

```
DELETE https://admin.googleapis.com/admin/directory/v1/customer/C03az79cb/orgunits/corp/sales/backend_tests
```

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes).

You can only delete organizational units that do not have any child organizational units or any users assigned to them. You need to reassign users to other organizational units and remove any child organizational units before deleting.
