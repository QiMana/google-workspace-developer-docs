---
source: https://developers.google.com/apps-script/reference/html/x-frame-options-mode
root: apps-script
fetched_at: 2026-04-23T15:20:38.820Z
---

# Enum XFrameOptionsMode

## Page Summary

- XFrameOptionsMode is an enum used for client-side HtmlService scripts to represent X-Frame-Options modes.
- These modes can be accessed via HtmlService.XFrameOptionsMode and set using HtmlOutput.setXFrameOptionsMode(mode).
- Setting XFrameOptionsMode.ALLOWALL allows any site to iframe the page, requiring the developer to implement clickjacking protection.
- The default X-Frame-Options mode used by Apps Script if none is set is DEFAULT.

An enum representing the `X-Frame-Options` modes that can be used for client-side `HtmlService` scripts. These values can be accessed from `HtmlService.XFrameOptionsMode`, and set by calling `HtmlOutput.setXFrameOptionsMode(mode)`.

To call an enum, you call its parent class, name, and property. For example, ` HtmlService.XFrameOptionsMode.ALLOWALL`.

Setting `XFrameOptionsMode.ALLOWALL` lets any site iframe the page, so the developer should implement their own protection against clickjacking.

If a script does not set an `X-Frame-Options` mode, Apps Script uses `DEFAULT` mode as the default.

```
// Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
const output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
```
