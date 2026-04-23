---
source: https://developers.google.com/workspace/meet/add-ons/guides/sign-in-guide
root: workspace
fetched_at: 2026-04-23T15:30:12.683Z
---

# Manage sign-in methods for your add-on

This page describes the best practices developers should observe when using sign-in methods for Google Meet add-ons. It lets users create an account or sign in to a website by eliminating the long registration or authentication process.

Here are some important tips developers can use when implementing sign-in methods for Meet add-ons:

- Google [One Tap](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap) sign-in is strongly recommended. For more information, see [Understand the One Tap user experience](https://developers.google.com/identity/gsi/web/guides/features).
- Per the One Tap FAQ, apps should also [display a fallback Google sign-in button](https://developers.google.com/identity/gsi/web/guides/display-button). To know more, see [Sign in with Google button UX](https://developers.google.com/identity/gsi/web/guides/personalized-button).
- If your app must authenticate the user through other mechanisms, or re-authenticate the user during Google sign-in or One Tap to link with an existing account, do that in a dialog window. Don't display user-password sign-in forms directly in iframes.
- Always use the default rendering of the One Tap prompt for Meet add-ons.

## Related topics

- [Publish your Meet add-on](./publish.md)
