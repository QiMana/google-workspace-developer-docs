---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/third-party-cookies
root: workspace
fetched_at: 2026-04-23T15:25:40.781Z
---

# Prepare for the third-party cookie deprecation

This guide helps you understand the impact and necessary changes to your add-on introduced by [Chrome ending support for third-party cookies](https://privacysandbox.com/intl/en_us/open-web/#how-works-on-web-hero).

## Overview

On **January 4, 2024**, Chrome introduced [Tracking Protection](https://blog.google/products/chrome/privacy-sandbox-tracking-protection/), which restricts website access to third-party (3P) cookies by default, to 1% of users. In **early 2025**, Chrome expects to [phase out 3P cookies completely](https://privacysandbox.com/intl/en_us/open-web/#the-privacy-sandbox-timeline).

At least two user journeys are impacted in Classroom add-ons:

1. The Google single sign-on (SSO) flow
2. Launching users into new tabs

### Google SSO

During the Google SSO flow, users are navigated to a dialog to sign into their Google Account and consent to data sharing.

![Visualization of the three different cookie contexts during SSO from within an
iframe](https://developers.google.com/workspace/classroom/add-ons/images/cookie-contexts.png)

**Figure 1.** Visualization of the three different cookie contexts during SSO from within an iframe: (1) the top level Classroom app, (2) the 3P embedded iframe (DavidPuzzle on localhost in this case), and (3) the top level OAuth dialog.

In a typical add-on implementation, a session cookie is set at the completion of this sign-in process. The add-on iframe, which is in an *embedded context*, is reloaded, now with the session cookie, allowing the user to access their authenticated session. However, when 3P cookies are disabled, sites in an embedded context like add-on iframes can't access cookies from their respective *top level* contexts. For Classroom add-ons, the user is unable to access their authenticated session and becomes stuck in a sign-in loop.

For implementations that set the session cookie in the embedded iframe context, this issue can be mitigated by the [CHIPS API](https://developers.google.com/privacy-sandbox/3pcd/chips), which allows embedded sites to set and access partitioned cookies (cookies keyed on both the embedder and embedded domain). However, implementations that set the session cookie in the top level context of the sign-in dialog are unable to access the unpartitioned cookie in the iframe, preventing sign-in.

### New tabs

For similar reasons, if a user has a cookie-based authenticated session in an add-on iframe, and the iframe launches the user into a new top level tab for an activity, the top level tab is unable to access the partitioned session cookie from iframe. This prevents iframe session state from persisting to the new tab activity and might force the user to sign in again in the new tab, for example. The [CHIPS API](https://developers.google.com/privacy-sandbox/3pcd/chips) is not able to resolve this issue, by design; the partitioned iframe cookies are inaccessible in a top level context.

## Developer actions

There are a few actions you should consider to ensure your add-on continues to function as intended as Chrome phases out 3P cookies.

1. **Audit** [3P cookie usage](https://developers.google.com/privacy-sandbox/blog/cookie-countdown-2023oct#audit) in your add-on's critical user journeys. More specifically, [test with 3P cookies disabled](https://developer.chrome.com/blog/cookie-countdown-2023oct/#test) to evaluate the impact for your specific implementation.
2. **Explore Storage Access API**. For all add-on implementations, we recommend that you explore the [Storage Access](https://developers.google.com/privacy-sandbox/3pcd/storage-access-api) API (SAA). SAA enables iframes to access their cookies outside the iframe context. SAA is available in Chrome today, and is supported by the Classroom app.
3. **Opt-in to FedCM**. In addition, if you use [GIS](https://developers.google.com/identity/gsi/web/guides/overview), the Sign in with Google library, the official guidance from the Identity team is to [opt-in to FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration). This does not replace 3P cookie capabilities but it will eventually be required in GIS as part of the 3P cookie deprecation. FedCM is available in Chrome today and supported in Classroom, but behavior and features are still [under development](https://github.com/fedidcg/FedCM) and open to feedback.
4. **Migrate to GIS**. If you use the deprecated [GSIv2 library](https://developers.google.com/identity/sign-in/web/sign-in), also known as the Google Sign-In library, it is strongly recommended that you [migrate to GIS](https://developers.google.com/identity/gsi/web/guides/migration), as support for GSIv2 going forward is unclear.
5. **Apply for a deprecation trial delay**. Chrome is offering a [deprecation trial](https://developers.google.com/privacy-sandbox/blog/third-party-cookie-deprecation-trial) to allow non-advertising use cases to delay the effects of the 3P cookie deprecation. If accepted, you'll be given a token that you can use in your add-on to keep 3P cookies enabled for your origin through 2024, while migrating to a long term solution like SAA. After [applying](https://developers.google.com/privacy-sandbox/blog/third-party-cookie-deprecation-trial#apply_for_the_deprecation_trials), you'll be asked to provide a bug ID or link for a breakage report. Our team has already filed this for Classroom add-ons and you can provide [this bug](https://issuetracker.google.com/issues/273552829).
