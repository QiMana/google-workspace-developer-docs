---
source: https://developers.google.com/workspace/admin/reseller/reference/rest
root: workspace
fetched_at: 2026-04-23T15:24:39.921Z
---

# Google Workspace Reseller API

Perform common functions that are available on the Channel Services console at scale, like placing orders and viewing customer information

## Service: reseller.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://reseller.googleapis.com/$discovery/rest?version=v1](https://reseller.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://reseller.googleapis.com`

## REST Resource: v1.customers

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /apps/reseller/v1/customers/{customerId}</code><br>Gets a customer account.</td></tr><tr><td><code>insert</code></td><td><code>POST /apps/reseller/v1/customers</code><br>Orders a new customer's account.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /apps/reseller/v1/customers/{customerId}</code><br>Updates a customer account's settings.</td></tr><tr><td><code>update</code></td><td><code>PUT /apps/reseller/v1/customers/{customerId}</code><br>Updates a customer account's settings.</td></tr></tbody></table>

## REST Resource: v1.resellernotify

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getwatchdetails</code></td><td><code>GET /apps/reseller/v1/resellernotify/getwatchdetails</code><br>Returns all the details of the watch corresponding to the reseller.</td></tr><tr><td><code>register</code></td><td><code>POST /apps/reseller/v1/resellernotify/register</code><br>Registers a Reseller for receiving notifications.</td></tr><tr><td><code>unregister</code></td><td><code>POST /apps/reseller/v1/resellernotify/unregister</code><br>Unregisters a Reseller for receiving notifications.</td></tr></tbody></table>

## REST Resource: v1.subscriptions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>activate</code></td><td><code>POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate</code><br>Activates a subscription previously suspended by the reseller.</td></tr><tr><td><code>changePlan</code></td><td><code>POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan</code><br>Updates a subscription plan.</td></tr><tr><td><code>changeRenewalSettings</code></td><td><code>POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings</code><br>Updates a user license's renewal settings.</td></tr><tr><td><code>changeSeats</code></td><td><code>POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats</code><br>Updates a subscription's user license settings.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}</code><br>Cancels, suspends, or transfers a subscription to direct.</td></tr><tr><td><code>get</code></td><td><code>GET /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}</code><br>Gets a specific subscription.</td></tr><tr><td><code>insert</code></td><td><code>POST /apps/reseller/v1/customers/{customerId}/subscriptions</code><br>Creates or transfer a subscription.</td></tr><tr><td><code>list</code></td><td><code>GET /apps/reseller/v1/subscriptions</code><br>Lists of subscriptions managed by the reseller.</td></tr><tr><td><code>startPaidService</code></td><td><code>POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService</code><br>Immediately move a 30-day free trial subscription to a paid service subscription.</td></tr><tr><td><code>suspend</code></td><td><code>POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend</code><br>Suspends an active subscription.</td></tr></tbody></table>
