---
source: https://developers.google.com/workspace/meet/live-streaming/ecdn-on-premises-api
root: workspace
fetched_at: 2026-04-23T15:30:32.580Z
---

# Work with the Meet eCDN On-Premises API

This page explains how to use the Google Meet Enterprise Content Delivery Network (eCDN) On-Premises API for Google Meet Live Streaming.

The API solution described here allows customers to use the full feature set of the Meet eCDN without exposing private IP information to Google. You can define a new on-premises web service in your own network that passes an ID instead of the private IP address information.

## Meet eCDN overview

eCDN is built into Meet and starts automatically during livestreams after a Google Workspace administrator sets it up. With Meet eCDN turned on, livestream viewers within a local network can share live-streamed media with other peers in the network through peer-to-peer (P2P) sharing. Most devices receive the live-streamed media from nearby peers and don't need to fetch it from Google's servers. This lowers the total bandwidth used by viewers. For more information on setting up and using Meet eCDN, see [Hosting large live streams](https://support.google.com/a/answer/14763379).

eCDN requires viewers of Meet Live Streaming to be ordered into peering groups. A peering group is a collection of nodes that are permitted to share media with each other. Devices in a peering group are either allowed to peer or are blocked from peering. Allowed devices can only connect to other devices in the same peering group. For more information on peering groups, see [Before you begin hosting large live streams](https://support.google.com/a/answer/14763452).

## When to use the API

eCDN can form peering groups using several different peering policies: `random`, `subnet`, or `custom rules`. The latter shares a table of private network ranges with Google's eCDN tracker server to map private IP addresses of each peer node to a peering group. The `custom rules` policy is the preferred solution and is suitable in most production environments.

However, the `custom rules` policy requires you to share large portions of your private network structure with Google. Additionally, individual users expose their locally detected private IP addresses to Google while using eCDN. For some organizations, their security guidelines may not allow sharing of private IP information.

## Develop with the Meet eCDN On-Premises API

The Meet eCDN On-Premises API provides a web server specification that you can implement and host locally in your organization's network. You can build a custom web service that's compatible with the API to perform all tasks dependent on private IP information so the information isn't shared with Google.

The API encompasses the two critical steps for matching private IP addresses that are typically handled by the eCDN tracker server: [map private IP addresses to a peering group](#map-to-peering-group) and [Session Description Protocol (SDP) offer-answer data exchange](#sdp-data-exchange) during WebRTC signaling.

Once the web service is complete, you must [configure the Admin console](#configure-admin-console) to use an `On-premises service` peering policy and include the URL of your custom web service.

### Requirements

If you need any of these requirements turned on for your organization, ask your Google Workspace administrator:

- Any web server using HTTPS can implement this API.
- Use HTTPS to prevent mixed content failures.
- Accept and return JSON data. Use any content encoding that's supported by your browser.
- Serve endpoints under a `/v*n*` route where `*n*` is the selected API version. For example, `/v1/get-peering-group`.
- Meet Live Streaming viewers can learn about your web service's URL through the Google Admin console. The URL can be set globally, per organizational unit, or per group. Make sure that viewers can connect to their assigned instance of the service. For more information, see [Configure the Admin console](#configure-admin-console).
- Your service should return a response within two seconds. Otherwise, the eCDN client shuts down and the viewer continues to watch the live event as a regular, non-eCDN, user denying them any bandwidth savings.
- Your service must set the following Cross-Origin Resource Sharing (CORS) headers:
	- `Access-Control-Allow-Origin: meet.google.com`
		- `Access-Control-Allow-Headers: GET, POST, OPTIONS`
		- `Access-Control-Allow-Credentials: true`

### Map private IP addresses to a peering group

The eCDN client makes a call every time it tries reconnecting to the eCDN tracker server. After a device detects a private IP address, the address must be mapped to the proper peering group. You must send the private IP address to a server on your network and manually resolve it to a peering group using the `get-peering-group()` method. A peering group ID is returned in the response. When communicating with Google, the resulting peering group ID is passed instead of private IP addresses.

![How private IP addresses are mapped to a peering group.](https://developers.google.com/static/workspace/meet/live-streaming/map-ip-addresses_2880.png)

Figure 1. Mapping private IP addresses to a peering group.

The following code sample shows how to call the `get-peering-group()` method along with the potential error response and the expected response body:

```
POST /v1/get-peering-group
Content-Type: application/json

Request body:
{
  "availableIPs": []{
    "format": "ipv4"|"ipv6",
    "address": "DETECTED_ADDRESS"
  }
}

Error response:
{
  "result": null,
  "error": "ERROR_MESSAGE"
}

Response body:
{
  "allowed": boolean,
  "result": string,
  "error": null
}
```

The following table shows the expected response formats:

| HTTP status | Error | Allowed | Result | Client reaction |
| --- | --- | --- | --- | --- |
| 200 | null | true | Non-empty string | Client is sorted into the specified peering group and proceeds to connect to the eCDN tracker server. |
| 200 | null | false | Non-empty string | Client is marked as blocked by the specified peering group, will be visible in [the Meet Quality Tool (MQT)](https://support.google.com/a/answer/9204857), and ends the eCDN session. |
| 200 | null |  | Empty string | Client ends the eCDN session. |
| 200 | Non-empty string |  |  | Client ends the eCDN session. |
| 302 (Found) |  |  |  | Client follows the redirect to the new URL specified in the response body's `Location` header. |
| Any other status code |  |  |  | Client ends the eCDN session. |

#### Legacy response format

The `allowed` field was not part of earlier versions' response format. Instead, special reserved values for `result` would determine whether a viewer's IP address would be blocked from peering:

```
Legacy response body:
{
  "result": string,
  "error": null,
}
```

The following table shows the expected response formats if the `allowed` field is not set in the response message:

| HTTP status | Error | Result | Client reaction |
| --- | --- | --- | --- |
| 200 | null | Non-empty string | Client should be sorted into a peering group and proceeds to connect to the eCDN tracker server. |
| 200 | null | `NOT_FOUND` | Client ends the eCDN session. |
| 200 | null | `BLOCKED` | Client ends the eCDN session. |
| 200 | Non-empty string |  | Client ends the eCDN session. |
| 302 (Found) |  |  | Client follows the redirect to the new URL specified in the response body's `Location` header. |
| Any other status code |  |  | Client ends the eCDN session. |

### SDP offer-answer data exchange

To initiate a WebRTC connection, devices must exchange their SDP offers and answers, including Interactive Connectivity Establishment (ICE) candidates, that contain private IP information. They do so as part of the WebRTC signaling process.

Clients must encrypt their ICE candidates inside their network through the Meet eCDN On-Premises API, using the `encrypt-sdp()` method. The method uses a key that's never exposed to Google. The encrypted SDP offer is then sent to the peer using the eCDN tracker server. The client peer then decrypts the received information inside their network using the `decrypt-sdp()` method. Google then forwards the offers and answers between the connected peers.

Once the connection is established using the Meet eCDN On-Premises API, the eCDN operates as normal. Peers route media through the usual peering network and media traffic doesn't pass through or use the API.

![How the SDP offer and answer data is encrypted and decrypted.](https://developers.google.com/static/workspace/meet/live-streaming/encrypt-decrypt-sdp_2880.png)

Figure 2. Encrypting and decrypting the SDP offer and answer data.

The following code sample shows how to call the `encrypt-sdp()` method along with the potential error response and the expected response body:

```
POST /v1/encrypt-sdp
Content-Type: application/json

Request body:
{
  "data": "SDP_DATA"
},

Error response:
{
  "result": null,
  "error": "ERROR_MESSAGE"
}

Response body:
{
  "result": "ENCRYPTED_DATA_STRING",
  "error": null
}
```

The following code sample shows how to call the `decrypt-sdp()` method along with the potential error response and the expected response body:

```
POST /v1/decrypt-sdp
Content-Type: application/json

Request body:
{
  "data": "ENCRYPTED_DATA_STRING"
},

Error response:
{
  "result": null,
  "error": "ERROR_MESSAGE"
}

Response body:
{
  "result": "SDP_DATA",
  "error": null
}
```

The following table shows the expected response formats:

| HTTP status | Error | Peering group ID | Client reaction |
| --- | --- | --- | --- |
| 200 | null | Non-empty string | Client expects properly encoded or decoded SDP data to be used. |
| 200 | Any non-empty string | null | Client ends the eCDN session. |
| 302 (Found) |  |  | Client follows the redirect to the new URL specified in the response body's `Location` header. |
| Any other status code | Any value | Any value | Client ends the eCDN session. |

### Configure the Admin console

To use the Meet eCDN On-Premises API, you must configure the eCDN in the [Admin console](https://admin.google.com/) to include the URL of your custom web service.

To set the eCDN, create a peering policy using `On-premises service` to manually match IP information to peering groups. You can also include a port number if you're not using the default 443. The URL should match the following format: `WEB_SERVICE.example.com:8080`, where `WEB_SERVICE` is your web service name.

For more information on setting a peering policy, see [Configure network grouping](https://support.google.com/a/answer/14762021).

## Related topics

- To learn how to use Meet eCDN, follow the steps in [Hosting large live streams](https://support.google.com/a/answer/14763379).
- To learn how to set up eCDN, see [Before you begin hosting large live streams](https://support.google.com/a/answer/14763452).
- To learn how to set up your network, see [Prepare your network for Meet meetings & live streams](https://support.google.com/a/answer/1279090).
- To sign in to the Google Admin console as an administrator, see [Sign in to your Admin console](https://support.google.com/a/answer/182076).
