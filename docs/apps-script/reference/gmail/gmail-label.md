---
source: https://developers.google.com/apps-script/reference/gmail/gmail-label
root: apps-script
fetched_at: 2026-04-23T15:20:37.529Z
---

# Class GmailLabel

## Page Summary

- A GmailLabel is a user-created label in a user's Gmail account.
- Gmail Labels have methods to add or remove themselves from individual threads or multiple threads.
- You can delete a Gmail label.
- You can retrieve the ID or name of a Gmail label.
- You can get the threads associated with a label or a range of threads, and also get the count of unread threads with that label.

A user-created label in a user's Gmail account.

## Detailed documentation

### addToThread(thread)

Adds this label to the given thread and forces the thread to refresh (`GmailThread.refresh()`).

```
// label the first thread in the inbox with the label MyLabel
const label = GmailApp.getUserLabelByName('MyLabel');
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
label.addToThread(firstThread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | The thread to be labeled. |

#### Return

`GmailLabel` — This label, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `removeFromThread(thread)`

---

### addToThreads(threads)

Adds this label to the given threads and forces the threads to refresh. You can add labels for up to 100 threads per batch.

```
// label the first three threads in the inbox with the label MyLabel
const label = GmailApp.getUserLabelByName('MyLabel');
const threads = GmailApp.getInboxThreads(0, 3);
label.addToThreads(threads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | An array of threads to be labeled. |

#### Return

`GmailLabel` — This label, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `removeFromThreads(threads)`

---

### deleteLabel()

Deletes this label.

```
const label = GmailApp.getUserLabelByName('MyLabel');
label.deleteLabel();
```

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the label can't be deleted

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `getName()`

---

### getId()

Gets the id of this label.

```
const label = GmailApp.getUserLabelByName('MyLabel');
console.log(label.getId());
```

#### Return

`String` — The id of the label.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getName()

Gets the name of this label.

```
const label = GmailApp.getUserLabelByName('MyLabel');
Logger.log(label.getName());  // logs MyLabel
```

#### Return

`String` — The name of the label.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getThreads()

Gets the threads that are marked with this label.

This calls fail when the size of all threads is too large for the system to handle. Where the thread size is unknown, and potentially very large, please use `getThreads(start, max)` and specify ranges of the threads to retrieve in each call.

```
// Log the subject lines of the threads labeled with MyLabel
const label = GmailApp.getUserLabelByName('MyLabel');
const threads = label.getThreads();
for (let i = 0; i < threads.length; i++) {
  Logger.log(threads[i].getFirstMessageSubject());
}
```

#### Return

`GmailThread[]` — An array of threads marked with this label.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getThreads(start, max)

Gets a range of threads marked with this label.

```
// log the subject lines of up to the first 30 threads with the label MyLabel
const label = GmailApp.getUserLabelByName('MyLabel');
const threads = label.getThreads(0, 30);
for (let i = 0; i < threads.length; i++) {
  Logger.log(threads[i].getFirstMessageSubject());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `start` | `Integer` | The index of the starting thread. |
| `max` | `Integer` | The maximum number of threads to return. |

#### Return

`GmailThread[]` — An array of threads marked with this label.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### getUnreadCount()

Gets the number of unread threads tagged with this label.

```
// log the number of unread threads labeled with MyLabel
const label = GmailApp.getUserLabelByName('MyLabel');
Logger.log(label.getUnreadCount());
```

#### Return

`Integer` — The number of unread labeled threads.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

---

### removeFromThread(thread)

Removes this label from the given thread and forces the thread to refresh.

```
// remove the label MyLabel from the first thread in the inbox
const label = GmailApp.getUserLabelByName('MyLabel');
const firstThread = GmailApp.getInboxThreads(0, 1)[0];
label.removeFromThread(firstThread);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `thread` | `GmailThread` | The thread be unlabeled. |

#### Return

`GmailLabel` — This label, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `addToThread(thread)`

---

### removeFromThreads(threads)

Removes this label from the given threads and forces the threads to refresh. You can remove labels for up to 100 threads per batch.

```
// remove the label MyLabel from the first three threads in the inbox
const label = GmailApp.getUserLabelByName('MyLabel');
const threads = GmailApp.getInboxThreads(0, 3);
label.removeFromThreads(threads);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `threads` | `GmailThread[]` | An array of threads to be unlabeled. |

#### Return

`GmailLabel` — This label, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes#gmailv1):

- `https://mail.google.com/`

#### See also

- `addToThreads(threads)`
