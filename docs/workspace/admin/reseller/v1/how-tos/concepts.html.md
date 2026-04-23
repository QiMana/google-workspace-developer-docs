---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/concepts.html
root: workspace
fetched_at: 2026-04-23T15:24:44.758Z
---

# Reseller API overview

Google offers products to users through distribution channels such as authorized Google Workspace resellers. When working with the Reseller API, you must understand the conceptual relationships between resellers, customers, payment plans, product SKUs, and licenses.

## Reseller

A reseller buys user licenses from Google and resells them to customers. A reseller can manage customer subscriptions directly or work with a service integrator to manage customers when customizing multiple services.

Resellers can choose from the following plans:

- **annual commitment**: The reseller purchases a fixed number of licenses from Google for one year. Customers can create up to the license count, but resellers are billed for the number of licenses ordered. To increase the number of licenses, resellers can use the [`subscriptions.changeSeats`](https://developers.google.com/workspace/admin/reseller/v1/reference/subscriptions/changeSeats) method.
- **flexible**: Each time a customer creates a new user, Google charges the reseller for the license. The reseller's contract with Google describes the price, specifications, and maximum number of licenses.

Along with managing user licenses, the reseller or its service integrator partners provide customers with services such as training, promotions, advertising, pricing, deployment customizations, troubleshooting, and maintenance.

## Licenses

A license lets a user with a Google Account access Google Workspace services. When a customer assigns a license to a user, it becomes an active license. Only active licenses count toward a customer's total number of users.

## Customer

A Google customer starts with a Google Workspace account that the reseller configures. When setting up the account, the reseller supplies a primary domain name, alternate email, and a physical address. The reseller also creates a subscription for each product SKU available to the customer. The customer hosts each user account. For more information, see [Order a new customer account](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_customers#order_a_new_customer_account).

## Plans

A plan defines a reseller's billing terms with Google. These plans don't define the billing relationship between a reseller and their customers. Resellers define their own billing terms with their customers.

The Reseller API supports the Google Workspace monthly post-pay system, which has the following payment plans:

- `ANNUAL_MONTHLY_PAY`: Annual commitment with monthly payments.
- `ANNUAL_YEARLY_PAY`: Annual commitment with one yearly payment.
- `FLEXIBLE`: Non-commitment plan with monthly payments.
- `TRIAL`: Free trial plan.
	- Trial length is variable up to 30 days.
		- Daily Gmail sending limit of 500 messages per user.
- `FREE`: Free plan only for Cloud Identity Free Edition subscriptions.

For more information, see [Choose a payment plan for your customers](https://support.google.com/a/answer/1720041).

## Subscription

A subscription manages the relationship between a Google customer's payment plan, product SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage these subscriptions.

In the Reseller API, a subscription is a primary API resource. It defines settings for a payment plan, licenses, 30-day free trial, renewal, and a reseller's purchase order. A customer can have multiple subscriptions, one for each product SKU assigned to them.

Each subscription has a unique identifier, `subscriptionId`. Because a `subscriptionId` changes when the subscription changes, don't use it as a key for persistent data.

For more information, see [Manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions).

## Products and product SKUs

A product is a commercial offering of Google services and applications. A product can have customized versions of terms, pricing, and other agreement details. Each version is identified by a product SKU. The Reseller API offers subscriptions for SKUs in the Google Workspace, Google Vault, and Google Drive products. For more information, see [Products & SKUs](https://developers.google.com/workspace/admin/reseller/v1/how-tos/products).
