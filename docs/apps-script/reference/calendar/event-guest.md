---
source: https://developers.google.com/apps-script/reference/calendar/event-guest
root: apps-script
fetched_at: 2026-04-23T15:18:54.738Z
---

# Class EventGuest

## Page Summary

- EventGuest represents a guest of an event.
- The EventGuest object provides methods to retrieve information about a guest, including the number of additional guests, email address, guest status, and name.
- The `getStatus()` method is deprecated and should not be used in new scripts; `getGuestStatus()` should be used instead.

Represents a guest of an event.

## Detailed documentation

### getAdditionalGuests()

Gets the number of additional people that this guest has said are attending.

#### Return

`Integer` — the number of additional people this guest has said are attending

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getEmail()

Gets the email address of the guest.

#### Return

`String` — the guest's email address

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getGuestStatus()

Gets the status of the guest for the event.

#### Return

`GuestStatus` — the status of this guest

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

---

### getName()

Gets the name of the guest. If the name of the guest is not available, this method returns the guest's email address.

#### Return

`String` — the guest's name, or the guest's email address if the name is not available

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`

## Deprecated methods

### getStatus()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the status of the guest for the event.

#### Return

`String` — the status of this guest

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.google.com/calendar/feeds`
