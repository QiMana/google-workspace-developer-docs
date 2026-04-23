---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/open-as
root: apps-script
fetched_at: 2026-04-23T15:18:40.271Z
---

# Enum OpenAs

An enum that specifies how to open a URL.

The client can open a URL as either a full size window (if that is the frame used by the client), or an overlay (such as a pop-up). The implementation depends on the client platform capabilities, and the value selected may be ignored if the client does not support it. `FULL_SIZE` is supported by all clients.

Using `OnClose` may cause `OpenAs` to be ignored; if the client platform cannot support both selected values together, `OnClose` takes precedence.

To call an enum, you call its parent class, name, and property. For example, ` AddOnsResponseService.OpenAs.FULL_SIZE`.
