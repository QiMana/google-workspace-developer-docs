---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/frictionless-signin
root: workspace
fetched_at: 2026-04-23T15:25:40.580Z
---

# Frictionless sign-in

Since the sign-in experience is the first interaction a user may have with your add-on, it's important that they're able to complete the flow as seamlessly as possible. Read the sections below to familiarize yourself with the various sign-in APIs, sign-in related query parameter, how to handle pop-up blockers, and a test plan that you can use during development to ensure you're following best practices.

## SSO implementation details

[Google's OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) is compatible with many OAuth 2.0 stacks. We **strongly** recommend implementing server-side authorization as it's the highest security option and supports using the [iframe query parameters](#sign-in_query_parameters).

Refer to the technical guidance provided in the [Google Identity website](https://developers.google.com/identity/gsi/web) when implementing Google sign-in. Be sure to follow the Google [sign-in branding guidelines](https://developers.google.com/identity/branding-guidelines). Sketch, SVG, and EPS files are provided for download.

## Sign-in tests

Use the add-ons [test plan](https://developers.google.com/static/workspace/classroom/assets/classroom_add_ons_test_plan.pdf) to check that your add-on is meeting the required standards and able to handle known edge cases before you submit your add-on for review. These tests closely mirror the Classroom add-on [requirements checklist](../requirements.md), and give you step-by-step instructions on how to check if your add-on meets those requirements. These are the same tests against which your application is tested during publication.

## Sign-in query parameters

Google Classroom provides the `login_hint` query parameter to help facilitate repeated sign-in. See the [sign-in related parameters section](./iframes.md#sign-in_related_parameters) of the iframe query parameters page for additional information. Sample code can be found in the [handle repeat visits walkthrough](../walkthroughs/repeat-login.md) of our developer walkthroughs.

## Manage pop-up blockers

Signing in to the add-on is facilitated by the sign-in dialog window. This window displays the account selector screen and allows the user to grant OAuth permissions. An end user's pop-up blocker could prevent them from completing the sign-in flow.

![An example of an account selector screen](https://developers.google.com/static/workspace/classroom/add-ons/images/account_selector.png)

**Figure 1.** An example of an **account selector screen**.

To resolve this problem, provide the end user with a button to click to bypass the pop-up blocker. This interaction allows the sign-in dialog to be displayed so the end user can continue with the sign-in flow. Ensure that the button you provide follows the [sign-in branding guidelines](https://developers.google.com/identity/branding-guidelines).

Follow the [sign-in walkthrough](../walkthroughs/sign-in.md) in our developer walkthroughs to implement a Google branded sign-in button that can be clicked to trigger the sign-in dialog.

## Multi-login

A browser with multiple accounts signed-in at the same time may disrupt the add-on user flow. End users can either sign out of all Google Accounts in their current browser *or* open Classroom in an incognito Chrome window before signing in with the correct account and retrying the operation.

If an incorrect user is signed-in to the add-on due to the multi-login issue, your calls to the Classroom add-ons API may fail with an [`InvalidAddOnToken`](../../troubleshooting/common-errors.md#invalidaddontoken) error. If you receive such an error, you should instruct the user to either sign out of all other accounts in the browser or open Classroom in an incognito Chrome window instead.
