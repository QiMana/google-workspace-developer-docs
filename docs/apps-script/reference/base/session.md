---
source: https://developers.google.com/apps-script/reference/base/session
root: apps-script
fetched_at: 2026-04-23T15:18:47.622Z
---

# Class Session

## Page Summary

- The Session class provides access to session information like user language and script time zone.
- You can get information about the active user, the user under whose authority the script is running, or a temporary user key that doesn't reveal identity.
- The user's email address is not always available due to security policies, especially in contexts without explicit user authorization.
- Methods for getting the time zone of the script and the current user information have deprecated versions.

The Session class provides access to session information, such as the user's email address (in some circumstances) and language setting.

## Detailed documentation

### getActiveUser()

Gets information about the current user. If security policies do not allow access to the user's identity, `User.getEmail()` returns a blank string. The circumstances in which the email address is available vary: for example, the user's email address is not available in any context that allows a script to run without that user's authorization, like a simple `onOpen(e)` or `onEdit(e)` trigger, a custom function in Google Sheets, or a web app deployed to "execute as me" (that is, authorized by the developer instead of the user). However, these restrictions generally do not apply if the developer runs the script themselves or belongs to the same Google Workspace domain as the user.

```
// Log the email address of the person running the script.
const email = Session.getActiveUser().getEmail();
Logger.log(email);
```

#### Return

`User` — the current user

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/userinfo.email`

---

### getActiveUserLocale()

Gets the language setting of the current user as a string—for example, `en` for English.

```
// Log the language setting of the person running the script.
Logger.log(Session.getActiveUserLocale());
```

#### Return

`String` — a string that represents the user's language setting

---

### getEffectiveUser()

Gets information about the user under whose authority the script is running. If the script is a web app set to "execute as me" (the developer), this returns the developer's user account. If the script is running under an [installable trigger](https://developers.google.com/apps-script/understanding_triggers), this returns the account of the user who created the trigger. In most other scenarios, this returns the same account as `getActiveUser()`.

```
// Log the email address of the user under whose authority the script is
// running.
const email = Session.getEffectiveUser().getEmail();
Logger.log(email);
```

#### Return

`User` — the user under whose authority the script is running

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/userinfo.email`

---

### getScriptTimeZone()

Gets the time zone of the script. New scripts default to the owner's time zone, but the script's time zone can be changed by clicking **File > Project properties** in the script editor. Note that spreadsheets have a separate time zone, which can be changed by clicking **File > Spreadsheet settings** in Google Sheets. Spreadsheet time zones that differ from the script time zone are a frequent source of scripting bugs.

```
// Log the time zone of the script.
const timeZone = Session.getScriptTimeZone();
Logger.log(timeZone);
```

#### Return

`String` — the time zone of the script

---

### getTemporaryActiveUserKey()

Gets a temporary key that is unique to the active user but does not reveal the user identity. The temporary key rotates every 30 days and is unique to the script.

```
// Log the temporary key of the person running the script.
Logger.log(Session.getTemporaryActiveUserKey());
```

#### Return

`String` — the temporary active user key

## Deprecated methods

### getTimeZone()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the time zone of the script. New scripts default to the owner's time zone, but the script's time zone can be changed by clicking **File > Project properties** in the script editor. Note that spreadsheets have a separate time zone, which can be changed by clicking **File > Spreadsheet settings** in Google Sheets. Spreadsheet time zones that differ from the script time zone are a frequent source of scripting bugs.

```
// Log the time zone of the script.
const timeZone = Session.getTimeZone();
Logger.log(timeZone);
```

#### Return

`String` — the time zone of the script

---

### getUser()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets information about the current user.

#### Return

`User` — the currently signed in user

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/userinfo.email`
