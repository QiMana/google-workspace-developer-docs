---
source: https://developers.google.com/apps-script/reference/card-service/on-close
root: apps-script
fetched_at: 2026-04-23T15:19:09.019Z
---

# Enum OnClose

## Page Summary

- OnClose is an enum used to specify what happens when a URL opened via OpenLink is closed.
- Its behavior can depend on the client platform and may take precedence over OpenAs.
- You access an OnClose enum value by calling its parent class, name, and property, such as `CardService.OnClose.RELOAD`.
- Available properties include NOTHING (default) and RELOAD, which reloads the add-on on close.

An enum that specifies what to do when a URL opened through an `OpenLink` is closed.

When a link is opened, the client either forgets about it or waits until the window is closed. The implementation depends on the client platform capabilities. `OnClose` may cause `OpenAs` to be ignored; if the client platform cannot support both selected values together, `OnClose` takes precedence.

To call an enum, you call its parent class, name, and property. For example, ` CardService.OnClose.RELOAD`.
