---
source: https://developers.google.com/apps-script/reference/base/logger
root: apps-script
fetched_at: 2026-04-23T15:18:45.984Z
---

# Class Logger

## Page Summary

- The Logger class is used to write to the Execution log and Google Cloud Logging, especially for structured logging and JSON payloads.
- Use the clear() method to clear the log and getLog() to retrieve all messages in the current log.
- The log() method can write various data types to the log, including strings, JavaScript objects, or objects with a message property.
- The log() method also supports writing formatted strings to the log using placeholders and values.

This class allows the developer to write to the Execution log and to [Google Cloud Logging](https://cloud.google.com/logging) if the script is associated with a [standard Cloud Project](https://developers.google.com/apps-script/guides/cloud-platform-projects#standard). This class is preferred for structured logging and `jsonPayload` support in Cloud Logging. For time-based logging, use `console`.

## Detailed documentation

### clear()

Clears the log.

---

### getLog()

Returns a complete list of messages in the current log. This method can be used to save or email the entire log output generated during script execution.

```
// Generate a log, then email it to the person who ran the script.
const files = DriveApp.getFiles();
while (files.hasNext()) {
  Logger.log(files.next().getName());
}
const recipient = Session.getActiveUser().getEmail();
const subject = 'A list of files in your Google Drive';
const body = Logger.getLog();
MailApp.sendEmail(recipient, subject, body);
```

#### Return

`String` — the log from the logging console

---

### log(data)

Writes the data to the log. The data can be a string, a JavaScript object, or an object with a `message` property.

```
Logger.log("my log message");
// Info   my logmessage
Logger.log({ key: "value" });
// Info   {key=value}
Logger.log({ message: "my log message", data: { key: "value" } })
// Info   my logmessage
```

When passing an object, if the object contains a `message` property, that property is used as the log message. Otherwise, the `toString()` method is called to convert the object to a string. All other properties which are JSON serializable are included as part of the `jsonPayload` in the [`LogEntry`](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry), similar to the example below:

```
{
  "insertId": "w5eib...",
  "jsonPayload": {
    "message": "my log message",
    "serviceContext": {
      "service": "AKfyc..."
    },
    "data": {
      "key": "value"
    }
  },
  "resource": {
    "type": "app_script_function",
    "labels": {
      "invocation_type": "editor",
      "function_name": "unknown",
      "project_id": "1234567890"
    }
  },
  "timestamp": "2024-11-15T23:28:19.448591Z",
  "severity": "INFO",
  "labels": {
    "script.googleapis.com/user_key": "AOX2d...",
    "script.googleapis.com/process_id": "EAEA1...",
    "script.googleapis.com/project_key": "MQXvl...",
    "script.googleapis.com/deployment_id": "AKfyc..."
  },
  "logName": "projects/[PROJECT_ID]/logs/script.googleapis.com%2Fconsole_logs",
  "receiveTimestamp": "2024-11-15T23:28:20.363790313Z"
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `data` | `Object` | the object to log |

#### Return

`Logger` — the Logger, for chaining.

---

### log(format, values)

Writes a formatted string to the logging console, using the format and values provided. The string can include multiple `%s` placeholders, which are replaced with corresponding values from the list of arguments, converted to strings.

```
// Log the number of Google Groups you belong to.
const groups = GroupsApp.getGroups();
Logger.log('You are a member of %s Google Groups.', groups.length);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `format` | `String` | a format string that contains as many instances of `%s` as the number of `values` arguments |
| `values` | `Object...` | a variable number of values to insert into the format string |

#### Return

`Logger` — the Logger, for chaining
