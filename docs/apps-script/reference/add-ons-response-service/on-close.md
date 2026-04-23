---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/on-close
root: apps-script
fetched_at: 2026-04-23T15:18:40.026Z
---

# Enum OnClose

An enum that specifies what to do when a URL opened through an `OpenLink` is closed.

When a link is opened, the client either forgets about it or waits until the window is closed. The implementation depends on the client platform capabilities. `OnClose` may cause `OpenAs` to be ignored; if the client platform cannot support both selected values together, `OnClose` takes precedence.

To call an enum, you call its parent class, name, and property. For example, ` AddOnsResponseService.OnClose.RELOAD`.
