---
source: https://developers.google.com/workspace/meet/add-ons/guides/add-on-security
root: workspace
fetched_at: 2026-04-23T15:30:11.009Z
---

# Add-on security

This page details the security requirements third-party add-ons have to fulfill.

## Origin restrictions

An origin is a URL with a scheme (protocol), host (domain), and port. Two URLs have the same origin when they share the same scheme, host, and port. Sub-origins are permitted. For more information, see [RFC 6454](https://www.ietf.org/rfc/rfc6454.txt).

These resources share the same origin as they have the same scheme, host, and port components:

- `https://www.example.com`
- `https://www.example.com:443`
- `https://www.example.com/sidePanel.html`

The following constraints are enforced when working with origins:

1. All [origins](https://developers.google.com/workspace/meet/add-ons/guides/overview#origin) used in the operation of your add-on must use `https` as the protocol.
2. The `addOnOrigins` field in the [add-on manifest](https://developers.google.com/workspace/meet/add-ons/guides/deploy-add-on#create-deployment) must be populated with the origins that your add-on is using.
	The entries in the `addOnOrigins` field must be a list of [CSP host source](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#host-source) compatible values. For example `https://*.addon.example.com` or `https://main-stage-addon.example.com:443`. [Resource paths](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#path_to_resource) are not allowed.
	This list is used to:
	- Set the [`frame-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src) value of the iframes containing your application.
		- Validate the URLs that your add-on is using. The origin used in the following locales must be part of the origins listed in the `addOnOrigins` field in the manifest:
		- The `sidePanelUri` field in the add-on manifest. For more information, see [Deploy a Meet add-on](https://developers.google.com/workspace/meet/add-ons/guides/deploy-add-on#create-deployment).
				- The `sidePanelUrl` and `mainStageUrl` properties in the [`AddonScreenshareInfo`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.addonscreenshareinfo) object. For more information, see [Promote an add-on to users through screen sharing](https://developers.google.com/workspace/meet/add-ons/guides/promote#screen_sharing).
				- The `sidePanelUrl` and `mainStageUrl` properties in the [`ActivityStartingState`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.activitystartingstate). For more information on activity starting state, see [Collaborate using a Meet add-on](https://developers.google.com/workspace/meet/add-ons/guides/collaborate-in-the-add-on).
		- Validate the origin of the site that's calling the [`exposeToMeetWhenScreensharing()`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/screenshare_api.meetaddonscreenshare.exposetomeetwhenscreensharing) method.
3. If your application uses URL navigation inside the iframe, all origins that are being navigated to must be listed in the `addOnOrigins` field. Note that wildcard subdomains are permitted. For example, `https://*.example.com`. However, we strongly advise against using wildcard subdomains with a domain you don't own, such as `web.app` which is owned by Firebase.
