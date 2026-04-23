---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/retrieve-update-customers
root: workspace
fetched_at: 2026-04-23T15:24:45.157Z
---

# Retrieve & update a customer's account information

To retrieve and update a customer's information using the Reseller API, you can look up a customer in one of two ways:

- Customer's unique identifier—for example, `C0123456`.
- Customer's domain name—for example, `example.com`.

## Retrieve a customer's account information

To retrieve a customer's account information, use the following `GET` request and include the authorization token:

```
GET https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID
```

Replace `CUSTOMER_ID` with the customer's unique identifier or domain name.

### Response returns

When you retrieve a customer's account information, you might receive one of the following responses:

- **Returns the full customer settings**: The customer is one of your existing customers. Using the Reseller API, you can manage this customer's account and subscription settings.
- **Returns minimal customer account information**: If the response only returns `customerId`, `customerDomain`, and `customerType`, Google or another reseller manages the customer. You can't create another email-verified customer for them. To manage this customer, follow these steps:
	1. [Retrieve all transferable subscriptions for the customer](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions) to understand transferability and the minimum number of user seats.
		2. [Transfer the subscription](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions).
- **Returns `Multiple teams exist on this domain`**: This domain has one or more team customers associated with it. To add another team to this domain, follow these steps:
	1. [Order a customer account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions).
		2. To create a domain-verified customer, ask the customer to [purchase a direct subscription and verify their domain](https://support.google.com/a/answer/9122284), then [transfer the subscription](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions).
- **Returns an HTTP `404` error**: The customer is new to Google and doesn't have an account. To manage this customer, follow these steps:
	1. Confirm your records don't have old customer data with a mismatch between the primary domain name and the unique Google customer identifier. When a deleted account is reinstated, it's treated as a new account with a new `customerId`.
		2. [Order a new customer account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers).
		3. [Create a subscription](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions) for the new customer account.

## Update a customer's settings

Using the Reseller API, you can't update the `customerType`, but you can verify a `team` customer's domain to become a `domain` customer.

To update a customer's settings, use the following `PUT` request and include the unique identifier for your customer:

```
PUT https://reseller.googleapis.com/apps/reseller/v1/customers/CUSTOMER_ID
```

The JSON request body updates the following customer settings:

```
{
  "customerId": "C0CUSTOMER_ID123456",
  "customerDomain": "DOMAIN_NAME",
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

A successful JSON response returns an HTTP `200` status code and the updated customer settings:

```
{
  "kind": "reseller#customer",
  "customerId": "CUSTOMER_ID",
  "customerDomain": "DOMAIN_NAME",
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
