---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/sign-in-journey
root: workspace
fetched_at: 2026-04-23T15:25:41.506Z
---

# Sign in

Google Classroom add-ons **must** use Google single sign-on (SSO) to identify and authenticate users.

See [Google Identity's OpenID Connect Guide](https://developers.google.com/identity/protocols/oauth2/openid-connect) for more information on SSO. We also recommend referencing Google's official documentation on user sign-up and sign-in for [automatic sign in](https://developers.google.com/identity/gsi/web) and [Sign-In Branding Guidelines](https://developers.google.com/identity/branding-guidelines).

See the [frictionless sign-in page](../developer-guides/frictionless-signin.md) for implementation guidance for Google SSO in Classroom add-ons. The frictionless sign-in guide also refers to the [test plan](https://developers.google.com/static/workspace/classroom/assets/classroom_add_ons_test_plan.pdf) that can be used to ensure your add-on is following sign-in best practices.

## Sign in flow

To reduce sign-in friction for users, Google Classroom provides the `login_hint` query parameter when an iframe is opened. `login_hint` is a user's unique Google ID, and is provided *after* the user has signed into your add-on for the first time. This parameter provides context on the user that's signed into Google Classroom. See our [sign-in parameters guide page](../developer-guides/iframes.md#sign-in_related_parameters) for a more detailed discussion of these query parameters.

You must display a Google sign-in dialog if the `login_hint` query parameter of the current Google Classroom user doesn't match any signed-in user of the add-on. The button must adhere to [Google's branding guidelines](https://developers.google.com/identity/branding-guidelines). If the user is already signed in, they shouldn't be prompted to sign-in again.

![initial SSO flow](https://developers.google.com/static/workspace/classroom/add-ons/images/initial-sso-flow.png) **Figure 1.** Sign in flow when a user initially launches your add-on.
