---
source: https://developers.google.com/workspace/shared-signals/api/ssf-api
root: workspace
fetched_at: 2026-04-23T15:31:13.606Z
---

# Google Workspace Shared Signals Framework (SSF) Integration Guide Closed BETA

The [Shared Signals Framework (SSF)](https://openid.net/specs/openid-sharedsignals-framework-1_0-final.html) is a community supported initiative of the OpenID Foundation, focused on developing and maintaining a communication framework for security platforms to share security insights through standardized events and protocols. To support the SSF initiative, Google Workspace is implementing a SSF Receiver to ingest [Continuous Access Evaluation Profile (CAEP)](https://openid.net/specs/openid-caep-1_0-final.html) signals.

Our initial release, now available in Closed Beta, supports the Session Revocation event signal. Over time, our intent is to develop support for numerous CAEP signals, transmitted by a variety of security platforms.

If you are a security platform vendor interested in transmitting CAEP signals to Google Workspace, or a Google Workspace customer interested in testing the Shared Signals integration in your domain, express your interest by filling out [the SSF Tester Enrollment form](https://forms.gle/WoYTqDNqNArpuSSh6).

**Please note:** While we are in a Closed Beta development phase, we intend to gradually onboard both partners and customers. Submission of the form does not guarantee acceptance to the Closed Beta.

## CAEP Session Revocation Event

Initially, Google Workspace supports the [CAEP (Continuous Access Evaluation Protocol) Session Revocation Event](https://openid.net/specs/openid-caep-1_0-final.html#name-session-revoked). This allows other services to notify Google Workspace when a user's session has been revoked.

The following is an example of the CAEP Session Revocation event:

```
{
  "aud": "https://sharedsignals.googleapis.com",
  "events": {
    "https://schemas.openid.net/secevent/caep/event-type/session-revoked": {
      "event_timestamp": 1750212646,
      "subject": {
        "email": "user@domain.com",
        "format": "email"
      }
    }
  },
  "iat": 1750212646,
  "iss": "<issuer_id>",
  "jti": "YzBhOTBhMWEtNWVhOS00ZDkxLWFlYTgtMjE1YjliMjQ4YTVh",
  "sub_id": {
    "email": "user@domain.com",
    "format": "email"
  }
}
```

The fields in the preceding JSON example are defined as follows:

- `aud`: Audience. The value must be `https://sharedsignals.googleapis.com`.
- `events`: A map of events.
	- `https://schemas.openid.net/secevent/caep/event-type/session-revoked`: The CAEP event.
		- `event_timestamp`: Timestamp of the event.
				- `subject`: The user that the event refers to.
			- `email`: The email of the user.
						- `format`: The format of the subject, in this case, `email`.
- `iat`: Issued at. Timestamp of the event.
- `iss`: Issuer. The ID of the service that sent the event.
- `jti`: JWT ID. A unique ID for the event.
- `sub_id`: Subject ID. The user that the event refers to.
	- `email`: The email of the user.
		- `format`: The format of the subject, in this case, `email`.

## Use Cases for Session Revocation Event

Here are some use cases where a transmitter can send a Session Revocation Event to Google's receiver:

1. **Account Disablement by IDP Partners:** When an Identity Provider (IDP) disables a user account.
2. **Account Suspension by IDP Partners:** When an IDP suspends a user account.
3. **User Risk Event by IDP and EDR Partners:** When an IDP or Endpoint Detection and Response (EDR) partner detects a risk associated with the user.
4. **Credential Change by IDP:** When a user's credentials are changed in the IDP.

In all these scenarios, the event on the transmitter side can trigger a session revocation event to Google's receiver, helping to verify that the end user's sessions within Google Workspace are logged out, enhancing account security.
