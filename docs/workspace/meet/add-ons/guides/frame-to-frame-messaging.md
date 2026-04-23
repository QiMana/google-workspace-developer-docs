---
source: https://developers.google.com/workspace/meet/add-ons/guides/frame-to-frame-messaging
root: workspace
fetched_at: 2026-04-23T15:30:12.194Z
---

# Use frame-to-frame messaging

This page describes how to send messages on the client side from an add-on running in the [side-panel](https://developers.google.com/workspace/meet/add-ons/guides/overview#side-panel) iframe to an add-on running in the [main stage](https://developers.google.com/workspace/meet/add-ons/guides/overview#main-stage) iframe. Frame-to-frame messaging only occurs on the client side, so message delivery is near instantaneous.

To send a message:

- From the side panel to the main stage, use the [`notifyMainStage()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetsidepanelclient.notifymainstage) method.

```
await sidePanelClient.notifyMainStage("YOUR_MESSAGE");
```

- From the main stage to the side panel, use the [`notifySidePanel()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetmainstageclient.notifysidepanel) method.

```
await mainStageClient.notifySidePanel("YOUR_MESSAGE");
```

The [`payload`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.frametoframemessage.payload) length must conform to its specified size limit.

To receive the message, the add-on must subscribe to the [`frameToFrameMessage`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addoncallbacks.frametoframemessage) callback. The following code sample shows how to subscribe to a `frameToFrameMessage` callback:

```
sidePanelClient.on('frameToFrameMessage', (arg: FrameToFrameMessage) => {
    // YOUR_CODE
});
```

The ["Animation" sample add-on on GitHub](https://github.com/googleworkspace/meet/tree/3311b735550b8927c8b7ef2c6d06f768d9fe0476/addons-web-sdk/samples/animation-next-js) includes a full example of frame-to-frame messaging. After the activity starts, the side panel [notifies the main stage whenever the user changes an input](https://github.com/googleworkspace/meet/blob/3311b735550b8927c8b7ef2c6d06f768d9fe0476/addons-web-sdk/samples/animation-next-js/src/app/activitysidepanel/page.tsx#L27). The main stage also [subscribes to the `frameToFrameMessage` callback](https://github.com/googleworkspace/meet/blob/3311b735550b8927c8b7ef2c6d06f768d9fe0476/addons-web-sdk/samples/animation-next-js/src/app/mainstage/page.tsx#L43) to receive updated state.

## Notes

- Frame-to-frame messages sent by a given participant are *only* visible by that same participant. To send messages or state to other participants, learn how to [share add-on state](https://developers.google.com/workspace/meet/add-ons/guides/collaborate-in-the-add-on#collaboration).
- Message delivery is only attempted once. To receive messages, the receiving panel must be open and the app must subscribe to the callback before the message is sent.

## Related topics

- [Implement the Co-Doing API](https://developers.google.com/workspace/meet/add-ons/guides/use-CoDoingAPI)
