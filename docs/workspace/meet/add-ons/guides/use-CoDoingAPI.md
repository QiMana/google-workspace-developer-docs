---
source: https://developers.google.com/workspace/meet/add-ons/guides/use-CoDoingAPI
root: workspace
fetched_at: 2026-04-23T15:30:12.286Z
---

# Implement the Co-Doing API

The Co-Doing API is used to synchronize arbitrary data between meeting participants. This can be any data that your app depends on.

You must serialize the data to a `Uint8Array` for it to be transmitted. For more information, see the [JavaScript standard library reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

If you aren't sure how to serialize your data, review the code samples following.

This guide explains how to implement the Co-Doing API.

## Get started

To use the Co-Doing API, you first must [Deploy a Meet add-on](https://developers.google.com/workspace/meet/add-ons/guides/deploy-add-on). Once you've completed those steps, you can start using the Co-Doing API from within your new add-on.

To use the Co-Doing API, start by getting an [`AddonSession`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addonsession) object, which serves as the entry point for Google Meet co-activities:

### TypeScript

```
const session = await window.meet.addon.createAddonSession({
    cloudProjectNumber: "CLOUD_PROJECT_NUMBER",
});
```

Replace CLOUD\_PROJECT\_NUMBER with the project number of your Google Cloud project.

## Create a co-doing client

To get started, create a [`CoDoingClient`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingclient) object from your `AddonSession`.

To create a `CoDoingClient`, call the [`createCoDoingClient()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addonsession.createcodoingclient) method and provide a [`CoDoingDelegate`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingdelegate) object.

The `CoDoingDelegate` is how the Co-Doing API updates your app whenever it has a new state available. It's expected that, when the [`onCoDoingStateChanged()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingdelegate.oncodoingstatechanged) method is called, your app immediately applies the new state.

The following code sample shows how to use the Co-Doing API:

### TypeScript

```
interface MyState {
  someString: string;
  someNumber: number;
}

/**
 * Serialize/deserialize using JSON.stringify
 * You can use any method you want; this is included for as an example
 */
function toBytes(state: MyState): Uint8Array {
  return new TextEncoder().encode(JSON.stringify(state));
}

function fromBytes(bytes: Uint8Array): MyState {
  return JSON.parse(new TextDecoder().decode(bytes)) as MyState;
}

  const coDoingClient = await addonSession.createCoDoingClient({
    activityTitle: "ACTIVITY_TITLE",
    onCoDoingStateChanged(coDoingState: CoDoingState) {
      const newState = fromBytes(coDoingState.bytes);
      // This function should apply the new state to your ongoing CoDoing activity
    },
  });
```

Replace ACTIVITY\_TITLE with the title of your activity.

## Manage current state

When users take action in your app, it's expected that your app immediately calls the [`broadcastStateUpdate()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingclient.broadcaststateupdate) method.

The following code sample shows an implementation of the `broadcastStateUpdate()` method:

### TypeScript

```
const myState: MyState = {
  someString: "SOME_STRING",
  someNumber: 0
};

document.getElementById('some-button').onClick(() => {
  myState.someNumber = myState.someNumber + 1;
  coDoingClient.broadcastStateUpdate({ bytes: toBytes(myState) });
});
```

Replace SOME\_STRING with the app's current state.
