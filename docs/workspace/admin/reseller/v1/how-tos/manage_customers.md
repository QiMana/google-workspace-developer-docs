---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers
root: workspace
fetched_at: 2026-04-23T15:24:44.868Z
---

# Order a new customer account

Before you create a new customer account, note the following:

- Country code restrictions might apply. To confirm that a customer's country is approved for resale, check the [Partner Sales Console](https://channelservices.cloud.google.com/).
- If the account is created by upgrading from a consumer Gmail account to a business email with a domain name, ensure the account has additional Google Workspace settings unlocked. For more information, see [Create business emails for your team](https://support.google.com/work/mail/faq/6233331#6241806) and [Create a business email alias](https://support.google.com/work/mail/faq/6233331#6243069).

## Create a customer account

1. To create a customer account, use the following `POST` request and include the authorization token:
	```
	POST https://reseller.googleapis.com/apps/reseller/v1/customers
	```
2. Within the new customer's account, [create a user](../../../directory/v1/guides/manage-users.md#create_user). If the response returns an HTTP `409 Conflict` status code, the `customerId` already exists. Before registering the customer account, you must [transfer the customer's subscriptions](./manage_subscriptions.md#transfer_a_subscription).
3. If applicable, [change the customer's default language](#change_a_customers_default_language).
4. Promote the [user to the super administrator role](../../../directory/v1/guides/manage-users.md#make_admin). When creating the administrator account, you can either generate a temporary random password or prompt the customer to provide a password.
5. Notify the customer that they must sign in to the Google Admin console and sign the Google Workspace using Reseller agreement to activate their account. Resellers are prohibited from signing the Terms of Service on the customer's behalf.

### Types of customers

You can create two kinds of customers on Google Workspace:

- **Domain-verified customers**: These customers need Gmail and full administrator access. When you create this type of customer, set `customerType` to `domain`.
- **Email-verified customers**: These customers don't own or manage their domain. When you create this type of customer, set `customerType` to `team`. These customers can purchase the [Google Workspace Essentials and Google Workspace Enterprise Essentials](https://support.google.com/channelservices/answer/9398241?ref_topic=9755957) editions of Google Workspace.

The following JSON request body is an example of a domain-verified customer:

```
{
  "customerDomain": "DOMAIN_NAME",
  "customerType": "domain",
  "postalAddress": {
    "contactName": "NAME",
    "organizationName": "ORGANIZATION_NAME",
    "postalCode": "POSTAL_CODE",
    "countryCode": "COUNTRY_CODE"
  },
  "alternateEmail": "EMAIL_ADDRESS"
}
```

Replace the following:

- `DOMAIN_NAME`: The customer's domain—for example, `example.com`.
- `NAME`: The customer's name—for example, `Alex Cruz`.
- `ORGANIZATION_NAME`: The customer's organization name—for example, `Example Organization`.
- `POSTAL_CODE`: The customer's ZIP or postal code—for example, `94043`.
- `COUNTRY_CODE`: The customer's 2-character [ISO country code](https://countrycode.org/).
- `EMAIL_ADDRESS`: The customer's email address—for example, `cruz@example.com`.

A successful response returns an HTTP `200` status code and the new customer's information:

```
{
  "kind": "reseller#customer",
  "customerId": "CUSTOMER_ID",
  "customerDomain": "DOMAIN_NAME",
  "customerType": "domain",
  "postalAddress": {
    "kind": "customers#address",
    "contactName": "NAME",
    "organizationName": "ORGANIZATION_NAME",
    "postalCode": "POSTAL_CODE",
    "countryCode": "COUNTRY_CODE",
  },
  "alternateEmail": "EMAIL_ADDRESS"
}
```

The following JSON request body is an example of an email-verified customer:

```
{
  "customerDomain": "DOMAIN_NAME",
  "customerType": "team",
  "primaryAdmin": {
    "primaryEmail": "EMAIL_ADDRESS"
  },
  "postalAddress": {
    "contactName": "NAME",
    "organizationName": "ORGANIZATION_NAME",
    "postalCode": "POSTAL_CODE",
    "countryCode": "COUNTRY_CODE"
  },
 "alternateEmail": "EMAIL_ADDRESS"
}
```

A successful response returns an HTTP `200` status code and the new customer's information:

```
{
  "kind": "reseller#customer",
  "customerId": "CUSTOMER_ID",
  "customerDomain": "DOMAIN_NAME,
  "customerType": "team",
  "primaryAdmin": {
    "primaryEmail": "EMAIL_ADDRESS"
  },
  "postalAddress": {
    "kind": "customers#address",
    "contactName": "NAME",
    "organizationName": "ORGANIZATION_NAME",
    "postalCode": "POSTAL_CODE",
    "countryCode": "COUNTRY_CODE",
  },
  "alternateEmail": "EMAIL_ADDRESS"
}
```

## Change a customer's default language

A customer's default language only applies to new users. Existing users retain their language after you update the default language. Therefore, set the customer default language before you create any users.

A new customer has a default language of English. To change the default language, use the [`PATCH`](../../../directory/reference/rest/v1/customers/patch.md) or [`UPDATE`](../../../directory/reference/rest/v1/customers/update.md) methods from the Directory API [Customers](../../../directory/reference/rest/v1/customers.md) endpoint.

Use the Directory API to update the default `language` value for a customer:

```
PATCH https://reseller.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID
```

Include the following JSON request body:

```
{
  "language":"LANGUAGE_CODE"
}
```

Replace the following:

- `CUSTOMER_ID`: A unique identifier for the customer—for example, `C0123456`.
- `LANGUAGE_CODE`: An accepted [language code](../../../directory/v1/languages.md) —for example, `es` for Spanish.

A successful JSON response returns an HTTP `200` status code and the updated customer resource:

```
{
  "alternateEmail": "EMAIL_ADDRESS",
  "customerCreationTime": "2022-12-12T23:04:10.620Z",
  "customerDomain": "DOMAIN_NAME",
  "id": "CUSTOMER_ID",
  "kind": "admin#directory#customer",
  "language": "LANGUAGE_CODE",
  "postalAddress": {
    "contactName": "NAME",
    "countryCode": "COUNTRY_CODE",
    "organizationName": "ORGANIZATION_NAME",
    "postalCode": "POSTAL_CODE"
  }
}
```

## Next steps

- [Reseller API common errors](../support/reseller_api_common_errors.md)
- [Directory API common errors](../support/directory_api_common_errors.md)
