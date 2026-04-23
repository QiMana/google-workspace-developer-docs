---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.errortype
root: workspace
fetched_at: 2026-04-23T15:30:15.024Z
---

# Type alias ErrorType

Possible error types for when interacting with the Meet Web add-ons SDK throws an error.

## Signature

```
type ErrorType =
  | 'ActivityIsOngoing' // Cannot perform operation while an activity is ongoing.
  | 'ActivityStartingStateEmpty' // The activity starting state is empty.
  | 'ActivityStartingStateMissingAttributes' // The activity starting state doesn't contain any recognized attributes.
  | 'ActivityStartingStateUnrecognizedAttributes' // The activity starting state contains unrecognized attributes.
  | 'AddonSessionAlreadyCreated' // The add-on session has already been created.
  | 'AddonStartingStateMissingAttributes' // The add-on starting state doesn't contain any recognized attributes.
  | 'AddonStartingStateUnrecognizedAttributes' // The add-on starting state contains unrecognized attributes.
  | 'ArgumentNullError' // The value of the supplied object is null where a value was expected.
  | 'ArgumentTypeError' // The type of the supplied object did not match the expected type.
  | 'DestinationNotReady' // The recipient frame isn't connected using the Meet add-ons SDK and cannot receive the notification.
  | 'InternalError' // An internal Meet error has occurred.
  | 'InvalidActivityStartingState' // ActivityStartingState iframe URLs don't match the origins of the URLs provided in the add-on manifest.
  | 'InvalidAddonStartingState' // AddonStartingState iframe URLs don't match the origins of the URLs provided in the add-on manifest.
  | 'InvalidCloudProjectNumber' // Cloud Project Number provided by Meet doesn't match the one passed in by the Meet add-ons SDK.
  | 'MissingUrlParameter' // Missing required Meet add-ons SDK URL parameter.
  | 'NeedsMainStageContext' // This method can only be invoked if the add-on is running in the main stage.
  | 'NeedsSidePanelContext' // This method can only be invoked if the add-on is running in the side panel.
  | 'NoActivityFound' // No activity found when performing an operation.
  | 'NotSupportedInMeetCall' // This method isn't supported in the Meet call.
  | 'NotSupportedInStandalone' // This method isn't supported in standalone mode.
  | 'RequiresEapEnrollment' // Requested method requires EAP enrollment.
  | 'SizeLimitExceededActivityStartingState' // The size of the activityStartingState URLs and/or its data exceeds the limits allowed.
  | 'SizeLimitExceededAddonStartingState' // The size of the addonStartingState URLs and/or its data exceeds the limits allowed.
  | 'SizeLimitExceededFrameToFrameMessage' // The size of the frame-to-frame message exceeds the limits allowed.
  | 'UserCancelled' // The user cancelled starting the activity.
  | 'UserNotInitiator';
```
