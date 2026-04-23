---
source: https://developers.google.com/apps-script/reference/html/sandbox-mode
root: apps-script
fetched_at: 2026-04-23T15:20:39.371Z
---

# Enum SandboxMode

## Page Summary

- `SandboxMode` is an enum in Apps Script's `HtmlService` used to define how client-side scripts execute in a security sandbox.
- The `NATIVE` and `EMULATED` sandbox modes were deprecated and are now sunset, with only `IFRAME` mode currently supported.
- Client-side code in HTML service runs in a security sandbox to protect users from malicious code, imposing restrictions on script execution.
- The `IFRAME` mode has fewer restrictions and runs faster than previous modes but may not be compatible with older browsers.
- You can check the actual sandbox mode on the client-side by inspecting `google.script.sandbox.mode`.

An enum representing the sandbox modes that can be used for client-side `HtmlService` scripts. These values can be accessed from `HtmlService.SandboxMode`, and set by calling `HtmlOutput.setSandboxMode(mode)`.

To call an enum, you call its parent class, name, and property. For example, ` HtmlService.SandboxMode.IFRAME`.

The `NATIVE` and `EMULATED` modes were [deprecated on October 13, 2015](https://workspace.google.com/blog/product-announcements/google-apps-script-update-htmlservice) and both are now sunset. Only `IFRAME` mode is now supported.

To protect users from being served malicious HTML or JavaScript, client-side code served from HTML service executes in a security sandbox that imposes restrictions on the code. The method `HtmlOutput.setSandboxMode(mode)` previously allowed script authors to choose between different versions of the sandbox, but now has no effect. For more information, see the [guide to restrictions in HTML service](../../guides/html/restrictions.md).

The `IFRAME` mode imposes many fewer restrictions than the other sandbox modes and runs fastest, but does not work at all in certain older browsers, including Internet Explorer 9. The sandbox mode can also be read in a client-side script by inspecting `google.script.sandbox.mode`. Note that this property returns the actual mode on the client, which may differ from the mode requested on the server if the requested mode is not supported in the user's browser.

```
<!-- Read the sandbox mode (in a client-side script). -->
<script>
  alert(google.script.sandbox.mode);
</script>
```
