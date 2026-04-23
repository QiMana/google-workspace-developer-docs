---
source: https://developers.google.com/apps-script/advanced/tag-manager
root: apps-script
fetched_at: 2026-04-23T15:18:06.137Z
---

# TagManager Service

## Page Summary

- The Google Tag Manager service allows authorized users to manage various Tag Manager data including accounts, containers, environments, and more via the Tag Manager API.
- This is an advanced service that requires specific enabling before it can be used.
- The Tag Manager service in Apps Script uses the same objects, methods, and parameters as the public API.
- Sample code is provided to demonstrate how to create and manage Tag Manager components like container versions, environments, and user permissions.

Manager API data, including accounts, containers, and user permissions.

The Google Tag Manager service provides access to [Tag Manager API](https://developers.google.com/tag-manager/api/v2/devguide) data for an authorized user. This service lets Tag Manager users manage Tag Manager [accounts](https://developers.google.com/tag-manager/api/v2/reference/accounts), [containers](https://developers.google.com/tag-manager/api/v2/reference/accounts/containers), [environments](https://developers.google.com/tag-manager/api/v2/reference/accounts/containers/environments), [versions](https://developers.google.com/tag-manager/api/v2/reference/accounts/containers/versions), [workspaces](https://developers.google.com/tag-manager/api/v2/reference/accounts/containers/workspaces), [folders](https://developers.google.com/tag-manager/api/v2/reference/accounts/containers/workspaces/folders), [variables](https://developers.google.com/tag-manager/api/v2/reference/accounts/containers/workspaces/variables), [triggers](https://developers.google.com/tag-manager/api/v2/reference/accounts/containers/workspaces/triggers), [tags](https://developers.google.com/tag-manager/api/v2/reference/accounts/containers/workspaces/tags), and [user permissions](https://developers.google.com/tag-manager/api/v2/reference/accounts/permissions).

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the reference documentation for the [Tag Manager API V2](https://developers.google.com/tag-manager/api/v2/devguide).

Like all advanced services in Google Apps Script, the Tag Manager service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [Google Tag Manager help center](https://support.google.com/tagmanager/#topic=3441530&utm_medium=referral&utm_campaign=outbound_link_gtm&utm_content=help_content).

## Sample code

The following sample code demonstrates how to use a few features of the Tag Manager service.

### Creates a container version with a variable, trigger, and tag.

The following sample code uses [Tag Manager API V2](https://developers.google.com/tag-manager/api/v2/devguide) to first create a container with a name that is timestamped with the current date to improve the chances of it being unique. The sample then creates a workspace with a random value variable, and a trigger that fires for any page view. Next, the sample uses the trigger to create an arbitrary pixel tag that fires a pixel to `//example.com` with a cache buster appended to the end of the URL. Last, the sample creates a container version with these entities, logs the version and returns it for later use.

```
/**
 * Creates a container version for a particular account
 * with the input accountPath.
 * @param {string} accountPath The account path.
 * @return {string} The tag manager container version.
 */
function createContainerVersion(accountPath) {
  const date = new Date();
  // Creates a container in the account, using the current timestamp to make
  // sure the container is unique.
  try {
    const container = TagManager.Accounts.Containers.create(
      {
        name: \`appscript tagmanager container ${date.getTime()}\`,
        usageContext: ["WEB"],
      },
      accountPath,
    );
    const containerPath = container.path;
    // Creates a workspace in the container to track entity changes.
    const workspace = TagManager.Accounts.Containers.Workspaces.create(
      { name: "appscript workspace", description: "appscript workspace" },
      containerPath,
    );
    const workspacePath = workspace.path;
    // Creates a random value variable.
    const variable = TagManager.Accounts.Containers.Workspaces.Variables.create(
      { name: "apps script variable", type: "r" },
      workspacePath,
    );
    // Creates a trigger that fires on any page view.
    const trigger = TagManager.Accounts.Containers.Workspaces.Triggers.create(
      { name: "apps script trigger", type: "PAGEVIEW" },
      workspacePath,
    );
    // Creates a arbitary pixel that fires the tag on all page views.
    const tag = TagManager.Accounts.Containers.Workspaces.Tags.create(
      {
        name: "apps script tag",
        type: "img",
        liveOnly: false,
        parameter: [
          { type: "boolean", key: "useCacheBuster", value: "true" },
          {
            type: "template",
            key: "cacheBusterQueryParam",
            value: "gtmcb",
          },
          { type: "template", key: "url", value: "//example.com" },
        ],
        firingTriggerId: [trigger.triggerId],
      },
      workspacePath,
    );
    // Creates a container version with the variabe, trigger, and tag.
    const version = TagManager.Accounts.Containers.Workspaces.create_version(
      { name: "apps script version" },
      workspacePath,
    ).containerVersion;
    console.log(version);
    return version;
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log("Failed with error: %s", e.error);
  }
}
```

### Publishes a container version and quick previews the current container draft.

The following sample code uses [Tag Manager API V2](https://developers.google.com/tag-manager/api/v2/devguide) to accept a container version that may have been created in the preceding example, and retrieve the account, container, and version ids from the version. The sample utilizes these ids to publish a container version live to the world. Last, the sample creates a quick preview of a new workspace and logs the quick preview.

```
/**
 * Publishes a container version publically to the world and creates a quick
 * preview of the current container draft.
 * @param {object} version The container version.
 */
function publishVersionAndQuickPreviewDraft(version) {
  try {
    const pathParts = version.path.split("/");
    const containerPath = pathParts.slice(0, 4).join("/");
    // Publish the input container version.
    TagManager.Accounts.Containers.Versions.publish(version.path);
    const workspace = TagManager.Accounts.Containers.Workspaces.create(
      { name: "appscript workspace", description: "appscript workspace" },
      containerPath,
    );
    const workspaceId = workspace.path;
    // Quick previews the current container draft.
    const quickPreview =
      TagManager.Accounts.Containers.Workspaces.quick_preview(workspace.path);
    console.log(quickPreview);
  } catch (e) {
    // TODO (Developer) - Handle exceptions
    console.log("Failed with error: $s", e.error);
  }
}
```

### Creates and reauthorizes a user environment.

The following sample code uses [Tag Manager API V2](https://developers.google.com/tag-manager/api/v2/devguide) to accept a container version and extract the account, container, and version ids. The sample utilizes these ids to create a user environment that points to the input container version and logs the user environment. The sample concludes by logging a reauthorized user environment.

```
/**
 * Creates and reauthorizes a user environment in a container that points
 * to a container version passed in as an argument.
 * @param {object} version The container version object.
 */
function createAndReauthorizeUserEnvironment(version) {
  try {
    // Creates a container version.
    const pathParts = version.path.split("/");
    const containerPath = pathParts.slice(0, 4).join("/");
    // Creates a user environment that points to a container version.
    const environment = TagManager.Accounts.Containers.Environments.create(
      {
        name: "test_environment",
        type: "user",
        containerVersionId: version.containerVersionId,
      },
      containerPath,
    );
    console.log(\`Original user environment: ${environment}\`);
    // Reauthorizes the user environment that points to a container version.
    TagManager.Accounts.Containers.Environments.reauthorize(
      {},
      environment.path,
    );
    console.log(\`Reauthorized user environment: ${environment}\`);
  } catch (e) {
    // TODO (Developer) - Handle exceptions
    console.log("Failed with error: $s", e.error);
  }
}
```

### Logs all emails and container access permissions within an account.

The following sample code uses [Tag Manager API V2](https://developers.google.com/tag-manager/api/v2/devguide) to find a list of all permissions within a Tag Manager account. The sample then logs the user's email address, the container ID, and the types of container access permissions for each entry.

```
/**
 * Logs all emails and container access permission within an account.
 * @param {string} accountPath The account path.
 */
function logAllAccountUserPermissionsWithContainerAccess(accountPath) {
  try {
    const userPermissions =
      TagManager.Accounts.User_permissions.list(accountPath).userPermission;
    for (let i = 0; i < userPermissions.length; i++) {
      const userPermission = userPermissions[i];
      if ("emailAddress" in userPermission) {
        const containerAccesses = userPermission.containerAccess;
        for (let j = 0; j < containerAccesses.length; j++) {
          const containerAccess = containerAccesses[j];
          console.log(
            \`emailAddress:${userPermission.emailAddress} containerId:${containerAccess.containerId} containerAccess:${containerAccess.permission}\`,
          );
        }
      }
    }
  } catch (e) {
    // TODO (Developer) - Handle exceptions
    console.log("Failed with error: $s", e.error);
  }
}
```
