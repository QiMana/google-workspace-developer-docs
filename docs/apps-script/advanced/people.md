---
source: https://developers.google.com/apps-script/advanced/people
root: apps-script
fetched_at: 2026-04-23T15:18:06.644Z
---

# Advanced People Service

## Page Summary

- The advanced People service in Apps Script utilizes the People API to manage contact and profile data.
- This is an advanced service that requires explicit enablement before use.
- The service uses the same objects, methods, and parameters as the public People API.
- Sample code is provided to demonstrate getting user connections, the user's own profile, and information for any Google Account.

data for Google users within Apps Script.

The Advanced People Service lets you use the [People API](https://developers.google.com/people) in Google Apps Script. This API lets scripts create, read, and update contact data for the logged in user and read profile data for Google users.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/people/api/rest) for the People API. Like all advanced services in Apps Script, the advanced People service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [People v1 support guide](https://developers.google.com/people/support).

## Sample code

The following sample code uses [version 1](https://developers.google.com/people/api/rest) of the API.

### Get the user's connections

To [get a list of people in the user's contacts](https://developers.google.com/people/api/rest/v1/people.connections/list), use the following code:

```
/**
 * Gets a list of people in the user's contacts.
 * @see https://developers.google.com/people/api/rest/v1/people.connections/list
 */
function getConnections() {
  try {
    // Get the list of connections/contacts of user's profile
    const people = People.People.Connections.list("people/me", {
      personFields: "names,emailAddresses",
    });
    // Print the connections/contacts
    console.log("Connections: %s", JSON.stringify(people, null, 2));
  } catch (err) {
    // TODO (developers) - Handle exception here
    console.log("Failed to get the connection with an error %s", err.message);
  }
}
```

### Get the person for the user

To [get the user's profile](https://developers.google.com/people/api/rest/v1/people/get), you need to request the `https://www.googleapis.com/auth/userinfo.profile` scope by following the [instructions to add explicit scopes](../concepts/scopes.md#setting_explicit_scopes) to your `appsscript.json` manifest file. Once the scope is added, you can use the following code:

```
/**
 * Gets the own user's profile.
 * @see https://developers.google.com/people/api/rest/v1/people/getBatchGet
 */
function getSelf() {
  try {
    // Get own user's profile using People.getBatchGet() method
    const people = People.People.getBatchGet({
      resourceNames: ["people/me"],
      personFields: "names,emailAddresses",
      // Use other query parameter here if needed
    });
    console.log("Myself: %s", JSON.stringify(people, null, 2));
  } catch (err) {
    // TODO (developer) -Handle exception
    console.log("Failed to get own profile with an error %s", err.message);
  }
}
```

### Get the person for a Google Account

To [get the person information for any Google Account](https://developers.google.com/people/api/rest/v1/people/get), use the following code:

```
/**
 * Gets the person information for any Google Account.
 * @param {string} accountId The account ID.
 * @see https://developers.google.com/people/api/rest/v1/people/get
 */
function getAccount(accountId) {
  try {
    // Get the Account details using account ID.
    const people = People.People.get(\`people/${accountId}\`, {
      personFields: "names,emailAddresses",
    });
    // Print the profile details of Account.
    console.log("Public Profile: %s", JSON.stringify(people, null, 2));
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log("Failed to get account with an error %s", err.message);
  }
}
```
