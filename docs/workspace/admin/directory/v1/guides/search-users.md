---
source: https://developers.google.com/workspace/admin/directory/v1/guides/search-users
root: workspace
fetched_at: 2026-04-23T15:23:50.657Z
---

# Search for users

You can search for users matching certain attributes with the [`users.list()`](https://developers.google.com/workspace/admin/directory/v1/reference/users/list) method of the Directory API. This method accepts the `query` parameter, which is a search query combining one or more search clauses. Each search clause consists of three parts:

Field

User attribute that is searched. For example, `givenName`.

Operator

Test that is performed on the data to provide a match. For example, the `:` operator tests if a text attribute *contains* a value.

Value

The content of the attribute that is tested. For example, `Jane`.

To search multiple fields in a query, add each search clause separated by a space. The operation is an implicit `AND`.

## Fields

| Field | Value Type | Operators | Description |
| --- | --- | --- | --- |
| None specified | string |  | Compare against the value in `givenName`, `familyName`, or `email`. |
| `name` | string | `=, :` | The concatenated value of `givenName` and `familyName`. |
| `email` | string | `=`, `:`, `:{PREFIX}*` | The user's email addresses, including aliases. |
| `givenName` | string | `=`, `:`, `:{PREFIX}*` | A user's given or first name. |
| `familyName` | string | `=`, `:`, `:{PREFIX}*` | A user's family or last name. |
| `isAdmin` | boolean | `=` | Whether a user has super administrator privileges. |
| `isDelegatedAdmin` | boolean | `=` | Whether a user has delegated administrator privileges. |
| `isSuspended` | boolean | `=` | Whether a user's account is suspended. |
| `isArchived` | boolean | `=` | Whether a user's account is archived. |
| `im` | string | `=, :` | IM network ID. |
| `externalId` | string | `=, :` | External ID value. |
| `manager` | string | `=` | The email address of a user's manager either directly or up the management chain. |
| `managerId` | string | `=` | The ID of a user's manager either directly or up the management chain. |
| `directManager` | string | `=` | The email address of a user's direct manager. |
| `directManagerId` | string | `=` | The ID of a user's direct manager. |
| `address` | string | `:` | Matches all address fields. |
| `addressPoBox` | string | `=, :` | A post office box. |
| `addressExtended` | string | `=, :` | An extended address, such as one including a sub-region. |
| `addressStreet` | string | `=, :` | A street address. |
| `addressLocality` | string | `=, :` | A town or city of the address. |
| `addressRegion` | string | `=, :` | An abbreviated province or state. |
| `addressPostalCode` | string | `=, :` | A ZIP or postal code. |
| `addressCountry` | string | `=, :` | A country. |
| `orgName` | string | `=, :` | An organization name. |
| `orgTitle` | string | `=, :` | A user's title within the organization. |
| `orgDepartment` | string | `=, :` | A department within the organization. |
| `orgDescription` | string | `=, :` | An organization's description. |
| `orgCostCenter` | string | `=, :` | The cost center of an organization. |
| `phone` | string | `=` | A user's phone number. |
| `orgUnitPath` | string | `=` | The full path of an org unit. This matches all org unit chains under the target. For example, `'orgUnitPath=/'` returns all users in the organization. This field can only be used when `viewType=admin_view`. |
| `isEnrolledIn2Sv` | boolean | `=` | Whether a user is enrolled in 2-Step Verification. |
| `isEnforcedIn2Sv` | boolean | `=` | Whether 2-Step Verification is enforced for the user. |
| `isGuest` | boolean | `=` | Whether the user is a guest user. If not specified, the response will contain both guest and non-guest users. |
| `schemaName.fieldName` | ? | ? | A [custom user attribute](https://developers.google.com/workspace/admin/directory/v1/guides/manage-schemas), referenced by its schema and field name. The field must have its [`indexed`](https://developers.google.com/workspace/admin/directory/v1/reference/schemas#fields.indexed) property set to `true`. |

## Value Types

| Value Type | Equivalent Schema [fieldType](https://developers.google.com/workspace/admin/directory/v1/reference/schemas#fields.fieldType) | Notes |
| --- | --- | --- |
| string | `STRING`, `EMAIL`, `PHONE` | Surround with single quotes `'` if the query contains whitespace. Escape single quotes in queries with `\'`, for example `'Valentine\'s Day'`. |
| boolean | `BOOL` | Must have a value of `true` or `false`. Only supports the `=` operator. |
| number | `INT64`, `DOUBLE` | Must use a period as a decimal separator and no thousands separator, for example `150430.25`. |
| date | `DATE` | Specified in YYYY-MM-DD format, for example `2001-02-15`. |

## Operators

| Operator | Supported Value Types | Notes |
| --- | --- | --- |
| `=` | string, boolean, number, date | The field and the value match exactly. For example, `givenName=Jane` matches all users with the `givenName` attribute `"Jane"`, but not `"Jane Ann"`. Supported on most string fields ([see above](#fields)). |
| `:` | string | The field contains the whole words within the value, in order. For example, a query with `givenName:Jane` matches users with `givenName` values of `"Jane"` and `"Jane Ann"`, but not `"Janet"`. A multi-word query for `'givenName:Mary Ann'` would match values of `"Mary Ann Evans"` and `"Sarah Mary Ann"` but not `"Ann Mary"`. Supported on most string fields ([see above](#fields)). |
| `:{PREFIX}*` | string | The field starts with the value. For example, a query with `givenName:Jane*` matches users with `givenName` values of `"Jane"`, `"Jane Ann"`, and `"Janet"` but not `"Sarah Jane"`. Only supported on a limited set of string fields ([see above](#fields)). Not supported on custom attributes. |
| `:[{MIN},{MAX}]` | number, date | The field is within a range. To match, the field's value must be greater than or equal to `{MIN}` and less than `{MAX}`. Custom number attributes must specify a [`numericIndexingSpec`](https://developers.google.com/workspace/admin/directory/v1/reference/schemas#fields.numericIndexingSpec) in order to support this operator. |
| `>` | number, date | The field is greater than the value. Custom number attributes must specify a [`numericIndexingSpec`](https://developers.google.com/workspace/admin/directory/v1/reference/schemas#fields.numericIndexingSpec) in order to support this operator. |
| `>=` | number, date | The field is greater than or equal to the value. Custom number attributes must specify a [`numericIndexingSpec`](https://developers.google.com/workspace/admin/directory/v1/reference/schemas#fields.numericIndexingSpec) in order to support this operator. |
| `<` | number, date | The field is less than the value. Custom number attributes must specify a [`numericIndexingSpec`](https://developers.google.com/workspace/admin/directory/v1/reference/schemas#fields.numericIndexingSpec) in order to support this operator. |
| `<=` | number, date | The field is less than or equal to the value. Custom number attributes must specify a [`numericIndexingSpec`](https://developers.google.com/workspace/admin/directory/v1/reference/schemas#fields.numericIndexingSpec) in order to support this operator. |

## Examples

All queries use the [`users.list`](https://developers.google.com/workspace/admin/directory/v1/reference/users/list) method, which has an HTTP request similar to the following (line breaks included for readability):

```
GET https://admin.googleapis.com/admin/directory/v1/users?domain=DOMAIN_NAME&query=QUERY_PARAMETERS
```

**Search for a user by name**

The `name` query field tests on the concatenated value of `givenName` and `familyName`. A query for `name='Jane'` returns no results for a user with `givenName='Jane'` and `familyName='Smith'`.

```
name='Jane Smith'
```

**Search for users with a `givenName` OR `familyName` that contains a value**

```
name:'Jane'
```

**Search for users matching an email prefix**

```
email:admin*
```

**Search for all super administrators**

```
isAdmin=true
```

**Search for users with `orgTitles` containing "Manager"**

```
orgTitle:Manager
```

**Search for users with a common manager in their reporting chain**

```
manager='janesmith@example.com'
```

**Search for users with the same direct manager**

```
directManager='bobjones@example.com'
```

**Search for users in a given country**

```
addressCountry='Sweden'
```

**Search for users in a specific organization**

```
orgName='Human Resources'
```

**Search for managers in a specific organization**

```
orgName=Engineering orgTitle:Manager
```

**Search custom user attributes**

**Search for all employees that work on a specific project**

```
EmploymentData.projects:'GeneGnomes'
```

**Search for all employees in a specific location**

```
EmploymentData.location='Atlanta'
```

**Search for all employees above job level 7**

```
EmploymentData.jobLevel>=7
```

**Search for all employees with job levels that are >= 5 and < 8**

```
EmploymentData.jobLevel:[5,8]
```

**Search for all employees who are enrolled in 2-Step Verification**

```
isEnrolledIn2Sv=true
```

**Search for all employees who have 2-Step Verification enforced**

```
isEnforcedIn2Sv=true
```
