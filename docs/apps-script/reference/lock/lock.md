---
source: https://developers.google.com/apps-script/reference/lock/lock
root: apps-script
fetched_at: 2026-04-23T15:20:51.333Z
---

# Class Lock

## Page Summary

- A Lock is a mutual-exclusion lock used to ensure that only one instance of a script executes a given section of code at a time, particularly useful for callbacks and triggers to prevent collisions with shared resources.
- The `Lock` class provides methods such as `hasLock()`, `releaseLock()`, `tryLock(timeoutInMillis)`, and `waitLock(timeoutInMillis)` to manage the lock's acquisition and release.
- Using a lock, like in the provided example of generating unique ticket numbers, prevents issues where multiple users accessing shared properties simultaneously could lead to incorrect or duplicate data.

A representation of a mutual-exclusion lock.

This class lets scripts make sure that only one instance of the script executes a given section of code at a time. This is particularly useful for callbacks and triggers, where a user action might cause changes to a shared resource and you want to ensure that there aren't collisions.

The following example shows how to use a lock in a form submit handler.

```
// Generates a unique ticket number for every form submission.
function onFormSubmit(e) {
  const targetCell = e.range.offset(0, e.range.getNumColumns(), 1, 1);

  // Gets a script lock before modifying a shared resource.
  const lock = LockService.getScriptLock();
  // Waits for up to 30 seconds for other processes to finish.
  lock.waitLock(30000);

  const scriptProperties = PropertiesService.getScriptProperties();

  const ticketNumber =
      Number(scriptProperties.getProperty('lastTicketNumber')) + 1;
  scriptProperties.setProperty('lastTicketNumber', ticketNumber);

  // Releases the lock so that other processes can continue.
  lock.releaseLock();

  targetCell.setValue(ticketNumber);
}
```

Without the Lock service, if two users submit the form at approximately the same time, the ticket numbers could end up the same, since the `lastTicketNumber` property could change after it was read from the `ScriptProperties` but before the new value was written back.

## Detailed documentation

### hasLock()

Returns `true` if the lock was acquired. This method returns `false` if `tryLock(timeoutInMillis)` or `waitLock(timeoutInMillis)` were never called, timed out before the lock could be retrieved, or if `releaseLock()` was called.

```
const lock = LockService.getScriptLock();
lock.tryLock(10000);
if (!lock.hasLock()) {
  Logger.log('Could not obtain lock after 10 seconds.');
}
```

#### Return

`Boolean` — `true` if the lock was acquired, `false` otherwise.

---

### releaseLock()

Releases the lock, allowing other processes waiting on the lock to continue. The lock is automatically released when the script terminates, but for efficiency it is best to release it as soon as you no longer need exclusive access to a section of code. This method has no effect if the lock has not been acquired.

Note that if you are working with a spreadsheet, you should call SpreadsheetApp.flush() prior to releasing the lock, to commit all pending changes to the spreadsheet while you still have exclusive access to it.

```
const lock = LockService.getScriptLock();
lock.waitLock(10000);
// Do some work on a shared resource.
lock.releaseLock();
```

---

### tryLock(timeoutInMillis)

Attempts to acquire the lock, timing out after the provided number of milliseconds. This method has no effect if the lock has already been acquired.

```
const lock = LockService.getScriptLock();
const success = lock.tryLock(10000);
if (!success) {
  Logger.log('Could not obtain lock after 10 seconds.');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `timeoutInMillis` | `Integer` | How long to wait to acquire the lock, in milliseconds. |

#### Return

`Boolean` — `true` if the lock was acquired, `false` otherwise.

---

### waitLock(timeoutInMillis)

Attempts to acquire the lock, timing out with an exception after the provided number of milliseconds. This method is the same as `tryLock(timeoutInMillis)` except that it throws an exception when the lock could not be acquired instead of returning `false`.

```
const lock = LockService.getScriptLock();
try {
  lock.waitLock(10000);
} catch (e) {
  Logger.log('Could not obtain lock after 10 seconds.');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `timeoutInMillis` | `Integer` | How long to wait to acquire the lock, in milliseconds. |

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the method timed out before the lock was acquired
