---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule
root: apps-script
fetched_at: 2026-04-23T15:21:27.144Z
---

# Class DataSourceRefreshSchedule

## Page Summary

- Use DataSourceRefreshSchedule to access and modify existing refresh schedules.
- This class should only be used with data that is connected to a database.
- Methods are available to get the refresh schedule frequency, scope, time interval of the next run, and whether the schedule is enabled.
- All methods require specific authorization scopes to be used.

Access and modify an existing refresh schedule. To get all refresh schedules, see `Spreadsheet.getDataSourceRefreshSchedules()`.

**Only use this class with data that's connected to a database.**

## Detailed documentation

### getFrequency()

Gets the refresh schedule frequency, which specifies how often and when to refresh.

#### Return

`DataSourceRefreshScheduleFrequency` — The refresh schedule frequency.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getScope()

Gets the scope of this refresh schedule.

#### Return

`DataSourceRefreshScope` — The refresh scope.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getTimeIntervalOfNextRun()

Gets the time window of the next run of this refresh schedule. Only applies if this refresh schedule is enabled.

#### Return

`TimeInterval` — The time window of the next run.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### isEnabled()

Determines whether this refresh schedule is enabled.

#### Return

`Boolean` — Whether this refresh schedule is enabled.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
