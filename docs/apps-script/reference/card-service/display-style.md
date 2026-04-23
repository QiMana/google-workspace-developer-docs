---
source: https://developers.google.com/apps-script/reference/card-service/display-style
root: apps-script
fetched_at: 2026-04-23T15:19:04.199Z
---

# Enum DisplayStyle

An enum that defines the display style of card.

`DisplayStyle.REPLACE` means that the card is shown by replacing the view of top card in the card stack.

`DisplayStyle.PEEK` mean that the header of the card appears at the bottom of the sidebar, partially covering the current top card of the stack. Clicking the header pops the card into the card stack. If the card has no header, a generated header is used instead.

`DisplayStyle` only works for card returned from contextual trigger function.

To call an enum, you call its parent class, name, and property. For example, ` CardService.DisplayStyle.PEEK`.
