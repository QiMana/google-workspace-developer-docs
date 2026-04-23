---
source: https://developers.google.com/workspace/admin/directory/reference/rest
root: workspace
fetched_at: 2026-04-23T15:23:32.461Z
---

# Admin SDK: Directory API

The **Admin SDK Directory API** lets administrators of enterprise domains view and manage their organization's users, groups, devices, and related resources. The [Cloud Identity APIs](https://cloud.google.com/identity/docs/concepts) offer additional ways of managing some of the same resources.

## Service: admin.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://admin.googleapis.com/$discovery/rest?version=directory\_v1](https://admin.googleapis.com/$discovery/rest?version=directory_v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://admin.googleapis.com`

## REST Resource: asps

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/users/{userKey}/asps/{codeId}</code><br>Deletes an ASP issued by a user.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/users/{userKey}/asps/{codeId}</code><br>Gets information about an ASP issued by a user.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/users/{userKey}/asps</code><br>Lists the ASPs issued by a user.</td></tr></tbody></table>

## REST Resource: chromeosdevices

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>action <br><b>(deprecated)</b></code></td><td><code>POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action</code><br>Use <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus">BatchChangeChromeOsDeviceStatus</a> instead.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}</code><br>Retrieves a Chrome OS device's properties.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/devices/chromeos</code><br>Retrieves a paginated list of Chrome OS devices within an account.</td></tr><tr><td><code>moveDevicesToOu</code></td><td><code>POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu</code><br>Moves or inserts multiple Chrome OS devices to an organizational unit.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}</code><br>Updates a device's updatable properties, such as <code>annotatedUser</code>, <code>annotatedLocation</code>, <code>notes</code>, <code>orgUnitPath</code>, or <code>annotatedAssetId</code>.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}</code><br>Updates a device's updatable properties, such as <code>annotatedUser</code>, <code>annotatedLocation</code>, <code>notes</code>, <code>orgUnitPath</code>, or <code>annotatedAssetId</code>.</td></tr></tbody></table>

## REST Resource: customer.devices.chromeos

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchChangeStatus</code></td><td><code>POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus</code><br>Changes the status of a batch of ChromeOS devices.</td></tr><tr><td><code>countChromeOsDevices</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/devices/chromeos:countChromeOsDevices</code><br>Counts ChromeOS devices matching the request.</td></tr><tr><td><code>issueCommand</code></td><td><code>POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand</code><br>Issues a command for the device to execute.</td></tr></tbody></table>

## REST Resource: customer.devices.chromeos.commands

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}</code><br>Gets command data a specific command issued to the device.</td></tr></tbody></table>

## REST Resource: customers

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customers/{customerKey}</code><br>Retrieves a customer.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/customers/{customerKey}</code><br>Patches a customer.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/customers/{customerKey}</code><br>Updates a customer.</td></tr></tbody></table>

## REST Resource: domainAliases

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}</code><br>Deletes a domain Alias of the customer.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}</code><br>Retrieves a domain alias of the customer.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customer}/domainaliases</code><br>Inserts a domain alias of the customer.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customer}/domainaliases</code><br>Lists the domain aliases of the customer.</td></tr></tbody></table>

## REST Resource: domains

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customer}/domains/{domainName}</code><br>Deletes a domain of the customer.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customer}/domains/{domainName}</code><br>Retrieves a domain of the customer.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customer}/domains</code><br>Inserts a domain of the customer.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customer}/domains</code><br>Lists the domains of the customer.</td></tr></tbody></table>

## REST Resource: groups

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/groups/{groupKey}</code><br>Deletes a group.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/groups/{groupKey}</code><br>Retrieves a group's properties.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/groups</code><br>Creates a group.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/groups</code><br>Retrieves all groups of a domain or of a user given a userKey (paginated).</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/groups/{groupKey}</code><br>Updates a group's properties.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/groups/{groupKey}</code><br>Updates a group's properties.</td></tr></tbody></table>

## REST Resource: groups.aliases

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/groups/{groupKey}/aliases/{alias}</code><br>Removes an alias.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/groups/{groupKey}/aliases</code><br>Adds an alias for the group.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/groups/{groupKey}/aliases</code><br>Lists all aliases for a group.</td></tr></tbody></table>

## REST Resource: members

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/groups/{groupKey}/members/{memberKey}</code><br>Removes a member from a group.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/groups/{groupKey}/members/{memberKey}</code><br>Retrieves a group member's properties.</td></tr><tr><td><code>hasMember</code></td><td><code>GET /admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}</code><br>Checks whether the given user is a member of the group.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/groups/{groupKey}/members</code><br>Adds a user to the specified group.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/groups/{groupKey}/members</code><br>Retrieves a paginated list of all members in a group.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/groups/{groupKey}/members/{memberKey}</code><br>Updates the membership properties of a user in the specified group.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/groups/{groupKey}/members/{memberKey}</code><br>Updates the membership of a user in the specified group.</td></tr></tbody></table>

## REST Resource: mobiledevices

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>action</code></td><td><code>POST /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action</code><br>Takes an action that affects a mobile device.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}</code><br>Removes a mobile device.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}</code><br>Retrieves a mobile device's properties.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/devices/mobile</code><br>Retrieves a paginated list of all user-owned mobile devices for an account.</td></tr></tbody></table>

## REST Resource: orgunits

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}</code><br>Removes an organizational unit.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}</code><br>Retrieves an organizational unit.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customerId}/orgunits</code><br>Adds an organizational unit.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/orgunits</code><br>Retrieves a list of all organizational units for an account.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}</code><br>Updates an organizational unit.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath=**}</code><br>Updates an organizational unit.</td></tr></tbody></table>

## REST Resource: privileges

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customer}/roles/ALL/privileges</code><br>Retrieves a paginated list of all privileges for a customer.</td></tr></tbody></table>

## REST Resource: resources.buildings

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}</code><br>Deletes a building.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}</code><br>Retrieves a building.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customer}/resources/buildings</code><br>Inserts a building.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customer}/resources/buildings</code><br>Retrieves a list of buildings for an account.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}</code><br>Patches a building.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}</code><br>Updates a building.</td></tr></tbody></table>

## REST Resource: resources.calendars

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}</code><br>Deletes a calendar resource.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}</code><br>Retrieves a calendar resource.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customer}/resources/calendars</code><br>Inserts a calendar resource.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customer}/resources/calendars</code><br>Retrieves a list of calendar resources for an account.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}</code><br>Patches a calendar resource.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}</code><br>Updates a calendar resource.</td></tr></tbody></table>

## REST Resource: resources.features

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customer}/resources/features/{featureKey}</code><br>Deletes a feature.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customer}/resources/features/{featureKey}</code><br>Retrieves a feature.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customer}/resources/features</code><br>Inserts a feature.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customer}/resources/features</code><br>Retrieves a list of features for an account.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/customer/{customer}/resources/features/{featureKey}</code><br>Patches a feature.</td></tr><tr><td><code>rename</code></td><td><code>POST /admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename</code><br>Renames a feature.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/customer/{customer}/resources/features/{featureKey}</code><br>Updates a feature.</td></tr></tbody></table>

## REST Resource: roleAssignments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}</code><br>Deletes a role assignment.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}</code><br>Retrieves a role assignment.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customer}/roleassignments</code><br>Creates a role assignment.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customer}/roleassignments</code><br>Retrieves a paginated list of all roleAssignments.</td></tr></tbody></table>

## REST Resource: roles

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customer}/roles/{roleId}</code><br>Deletes a role.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customer}/roles/{roleId}</code><br>Retrieves a role.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customer}/roles</code><br>Creates a role.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customer}/roles</code><br>Retrieves a paginated list of all the roles in a domain.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/customer/{customer}/roles/{roleId}</code><br>Patches a role.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/customer/{customer}/roles/{roleId}</code><br>Updates a role.</td></tr></tbody></table>

## REST Resource: schemas

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}</code><br>Deletes a schema.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}</code><br>Retrieves a schema.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/customer/{customerId}/schemas</code><br>Creates a schema.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/customer/{customerId}/schemas</code><br>Retrieves all schemas for a customer.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}</code><br>Patches a schema.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}</code><br>Updates a schema.</td></tr></tbody></table>

## REST Resource: tokens

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/users/{userKey}/tokens/{clientId}</code><br>Deletes all access tokens issued by a user for an application.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/users/{userKey}/tokens/{clientId}</code><br>Gets information about an access token issued by a user.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/users/{userKey}/tokens</code><br>Returns the set of tokens specified user has issued to 3rd party applications.</td></tr></tbody></table>

## REST Resource: twoStepVerification

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>turnOff</code></td><td><code>POST /admin/directory/v1/users/{userKey}/twoStepVerification/turnOff</code><br>Turns off 2-Step Verification for user.</td></tr></tbody></table>

## REST Resource: users

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/users/{userKey}</code><br>Deletes a user.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/users/{userKey}</code><br>Retrieves a user.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/users</code><br>Creates a user.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/users</code><br>Retrieves a paginated list of either deleted users or all users in a domain.</td></tr><tr><td><code>makeAdmin</code></td><td><code>POST /admin/directory/v1/users/{userKey}/makeAdmin</code><br>Makes a user a super administrator.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/users/{userKey}</code><br>Updates a user using patch semantics.</td></tr><tr><td><code>signOut</code></td><td><code>POST /admin/directory/v1/users/{userKey}/signOut</code><br>Signs a user out of all web and device sessions and reset their sign-in cookies.</td></tr><tr><td><code>undelete</code></td><td><code>POST /admin/directory/v1/users/{userKey}/undelete</code><br>Undeletes a deleted user.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/users/{userKey}</code><br>Updates a user.</td></tr><tr><td><code>watch</code></td><td><code>POST /admin/directory/v1/users/watch</code><br>Watches for changes in users list.</td></tr></tbody></table>

## REST Resource: users.aliases

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/users/{userKey}/aliases/{alias}</code><br>Removes an alias.</td></tr><tr><td><code>insert</code></td><td><code>POST /admin/directory/v1/users/{userKey}/aliases</code><br>Adds an alias.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/users/{userKey}/aliases</code><br>Lists all aliases for a user.</td></tr><tr><td><code>watch</code></td><td><code>POST /admin/directory/v1/users/{userKey}/aliases/watch</code><br>Watches for changes in users list.</td></tr></tbody></table>

## REST Resource: users.photos

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>delete</code></td><td><code>DELETE /admin/directory/v1/users/{userKey}/photos/thumbnail</code><br>Removes the user's photo.</td></tr><tr><td><code>get</code></td><td><code>GET /admin/directory/v1/users/{userKey}/photos/thumbnail</code><br>Retrieves the user's photo.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /admin/directory/v1/users/{userKey}/photos/thumbnail</code><br>Adds a photo for the user.</td></tr><tr><td><code>update</code></td><td><code>PUT /admin/directory/v1/users/{userKey}/photos/thumbnail</code><br>Adds a photo for the user.</td></tr></tbody></table>

## REST Resource: verificationCodes

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>generate</code></td><td><code>POST /admin/directory/v1/users/{userKey}/verificationCodes/generate</code><br>Generates new backup verification codes for the user.</td></tr><tr><td><code>invalidate</code></td><td><code>POST /admin/directory/v1/users/{userKey}/verificationCodes/invalidate</code><br>Invalidates the current backup verification codes for the user.</td></tr><tr><td><code>list</code></td><td><code>GET /admin/directory/v1/users/{userKey}/verificationCodes</code><br>Returns the current set of valid backup verification codes for the specified user.</td></tr></tbody></table>
