---
source: https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.script.type/meet
root: workspace
fetched_at: 2026-04-23T15:23:05.190Z
---

# Package google.apps.script.type.meet

## MeetAddOnManifest

Meet add-on manifest.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>homepageTrigger</code></td><td><p>If present, this overrides the configuration from <code>addOns.common.homepageTrigger</code>.</p></td></tr><tr><td><code>web</code></td><td><p><code>Web</code></p><p>Details for addons that enhance the Meet web client.</p></td></tr><tr><td><code>supportsCollaboration</code></td><td><p><code>bool</code></p><p>Whether the addon supports collaboration or inviting others into the addon experience.</p></td></tr><tr><td><code>termsUri</code></td><td><p><code>string</code></p><p>A link to the terms of service for the add-on, if any should be shown.</p></td></tr></tbody></table>

## Web

Details for addons that enhance the Meet web client.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sidePanelUri<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>The URI for the side panel iframe.</p></td></tr><tr><td><code>sidePanelUrl</code></td><td><p><code>string</code></p><p>The URL for the side panel iframe.</p></td></tr><tr><td><code>mainStageUri<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>The URI for the "main stage" iframe.</p></td></tr><tr><td><code>supportsScreenSharing</code></td><td><p><code>bool</code></p><p>Whether the addon supports screen sharing the main stage.</p></td></tr><tr><td><code>supportsCollaboration<br><b>(deprecated)</b></code></td><td><p><code>bool</code></p><p>Whether the addon supports collaboration or inviting others into the addon experience. This field is deprecated now, please use the top level field in MeetAddOnManifest.</p></td></tr><tr><td><code>supportsPopOut</code></td><td><p><code>bool</code></p><p>Whether the addon supports popping out to a browser PiP experience.</p></td></tr><tr><td><code>hostOrigins[]<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Deprecated, legacy name. Origins that should be added to the frame-src property of the iframe containing the third party site. Use addOnOrigins instead.</p></td></tr><tr><td><code>addOnOrigins[]</code></td><td><p><code>string</code></p><p>Origins that should be added to the frame-src property of the iframe containing the third party site.</p></td></tr><tr><td><code>openState</code></td><td><p><code>State</code></p><p>The initial state when the addon is opened.</p></td></tr><tr><td><code>supportsCollaborationHostControls</code></td><td><p><code>bool</code></p><p>Whether the collaboration add-on supports host controls.</p></td></tr><tr><td><code>displayFlow<br><b>(deprecated)</b></code></td><td><p><code>DisplayFlow</code></p><p>The display flow the add-on will follow when launched.</p></td></tr></tbody></table>

## DisplayFlow

Enum for specifying the display flow the add-on will follow when launched

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DISPLAY_FLOW_UNSPECIFIED</code></td><td>Display flow has not been specified.</td></tr><tr><td><code>FOCUS</code></td><td>Add-on should launch in the "focus" display flow.</td></tr><tr><td><code>AUGMENT</code></td><td>Add-on should launch in the "augment" display flow.</td></tr></tbody></table>

## State

Enum for specifying initial addon opening state.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Initial state has not been specified with the addon.</td></tr><tr><td><code>SIDE_PANEL_ONLY</code></td><td>The addon opens with only the side panel active.</td></tr><tr><td><code>MAIN_STAGE_ONLY</code></td><td>The addon opens with only the main stage active.</td></tr><tr><td><code>SIDE_PANEL_AND_MAIN_STAGE</code></td><td>The addon opens with both the side panel and the main stage active.</td></tr></tbody></table>
