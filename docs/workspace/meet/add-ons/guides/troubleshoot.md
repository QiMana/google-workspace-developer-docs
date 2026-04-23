---
source: https://developers.google.com/workspace/meet/add-ons/guides/troubleshoot
root: workspace
fetched_at: 2026-04-23T15:30:12.422Z
---

# Troubleshoot and fix Meet add-on errors

This guide provides instructions about how to resolve specific Google Meet add-ons SDK errors that you might encounter while building and testing Meet add-ons.

To get details about an error, use the [`MeetAddonError`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonerror) object. It contains an [`errorType`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonerror.errortype) property which specifies the type of error.

## Error types

The following are the error types generated when the Meet add-ons SDK throws an error, along with explanation on how to interpret them and guidance on what to do when you get them.

| Error | Error message | Action |
| --- | --- | --- |
| `ActivityIsOngoing` | Cannot perform operation while an activity is ongoing. | Make sure an activity isn't ongoing. |
| `ActivityStartingStateEmpty` | The activity starting state is empty. | An [`ActivityStartingState`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate) object was supplied, but it doesn't contain any attributes. |
| `ActivityStartingStateMissingAttributes` | The activity starting state doesn't contain any recognized attributes. | Make sure that the `ActivityStartingState` object contains at least one of the following attributes: `mainStageUrl`, `sidePanelUrl`, or `additionalData`. |
| `ActivityStartingStateUnrecognizedAttributes` | The activity starting state contains unrecognized attributes. | Make sure that the `ActivityStartingState` object has only the following attributes: `mainStageUrl`, `sidePanelUrl`, or `additionalData`. |
| `AddonSessionAlreadyCreated` | The add-on session has already been created. | Only instantiate the `AddonSession` once. |
| `AddonStartingStateMissingAttributes` | The add-on starting state doesn't contain any recognized attributes. | Make sure that the `AddonStartingState` object contains at least one of the following attributes: `sidePanelUrl`, `additionalData`. |
| `AddonStartingStateUnrecognizedAttributes` | The add-on starting state contains unrecognized attributes. | Make sure that the `AddonStartingState` object has only the following attributes: `sidePanelUrl`, `additionalData`. |
| `ArgumentNullError` | The value of the supplied object is null where a value was expected. | Make sure you're passing a value of the expected type for the argument. |
| `ArgumentTypeError` | The type of the supplied object did not match the expected type. | Make sure the type of the argument provided matches the expected type. |
| `DestinationNotReady` | The recipient frame isn't connected using the Meet add-ons SDK and cannot receive the notification. | Make sure the destination frame is connected before sending messages to it. |
| `InternalError` | An internal Meet error has occurred. | No further information is available. |
| `InvalidActivityStartingState` | `ActivityStartingState` iframe URLs don't match the origins of the URLs provided in the add-on manifest. | Make sure that the `ActivityStartingState` iframe URL origins match the origins of the URLs provided in the add-on manifest. For more information, see [Add-on security](https://developers.google.com/workspace/meet/add-ons/guides/add-on-security). |
| `InvalidAddonStartingState` | `AddonStartingState` iframe URLs don't match the origins of the URLs provided in the add-on manifest. | Make sure that the `AddonStartingState` iframe URL origins match the origins of the URLs provided in the add-on manifest. |
| `InvalidCloudProjectNumber` | Cloud project number provided by Meet doesn't match the one passed in by the Meet add-ons SDK. | Make sure that the correct Cloud project number is passed into the SDK as a string when calling the [`createAddonSession`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddon.createaddonsession) property or the [`exposeToMeetWhenScreenSharing()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.meetaddonscreenshare.exposetomeetwhenscreensharing) method. This parameter is automatically appended by Meet to any iframe URLs. Make sure your infrastructure doesn't modify URL parameters (for example, as part of a redirect) before using the passed value. |
| `MeetingPolicyPreventsStartingActivity` | A meeting policy (such as using host control settings) prevents the user from starting the activity. | Have a meeting host or administrator modify the necessary settings to allow the current user to start the activity. |
| `MissingUrlParameter` | Missing required Meet add-ons SDK URL parameter. | This parameter is automatically appended by Meet to the iframe URL. Make sure your infrastructure doesn't modify URL parameters (for example, as part of a redirect). |
| `NeedsMainStageContext` | This method can only be invoked if the add-on is running in the main stage. | Use the [`getFrameType`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddon.getframetype) property to check whether the add-on is running in the main stage before invoking this method. |
| `NeedsSidePanelContext` | This method can only be invoked if the add-on is running in the side panel. | Use the [`getFrameType`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddon.getframetype) property to check whether the add-on is running in the side panel before invoking this method. |
| `NoActivityFound` | No activity found when performing an operation. | Make sure that the activity is started before performing this operation. |
| `NotSupportedInMeetCall` | This method isn't supported in the Meet call. | Don't call this method during a Meet call. |
| `NotSupportedInStandalone` | This method isn't supported in standalone mode. | Don't call this method in standalone mode. |
| `RequiresEapEnrollment` | Requested method requires EAP enrollment. | Google Meet add-on early access enrollment is closed. |
| `SizeLimitExceededActivityStartingState` | The size of the `ActivityStartingState` URLs and/or its data exceeds the limits allowed. | Make sure that the [`ActivityStartingState`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate) URL size is less than 512 characters and the additional data size is less than 4,096 characters. |
| `SizeLimitExceededAddonStartingState` | The size of the `AddonStartingState` URLs and/or its data exceeds the limits allowed. | Make sure that the `AddonStartingState` URL size is less than 512 characters and the additional data size is less than 4,096 characters. |
| `SizeLimitExceededFrameToFrameMessage` | The size of the frame-to-frame message exceeds the limits allowed. | Make sure that the frame-to-frame message size is less than 1,000,000 characters. |
| `UserCancelled` | The user cancelled starting the activity. | The user needs to click continue to start the activity. |
| `UserNotInitiator` | The user isn't the initiator of the current activity. | Make sure that the user is the initiator of the current activity or that the activity has ended. |

## Related topics

- [Best practices](https://developers.google.com/workspace/meet/add-ons/guides/best-practices)
