---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-refresh-schedule-frequency
root: apps-script
fetched_at: 2026-04-23T15:21:29.531Z
---

# Class DataSourceRefreshScheduleFrequency

## Page Summary

- Access a refresh schedule's frequency which specifies how often and when to refresh data connected to a database.
- Use `DataSourceRefreshSchedule.getTimeIntervalOfNextRun()` to see the next scheduled run time.
- Update the frequency using `DataSourceRefreshSchedule.setFrequency(newFrequency)`.
- Methods are available to get details like the days of the month or week, the frequency type, and the start hour of the refresh schedule.

Access a refresh schedule's frequency, which specifies how often and when to refresh.

**Only use this class with data that's connected to a database.**

To see the next time this refresh schedule is scheduled to run, use .

To update, use `DataSourceRefreshSchedule.setFrequency(newFrequency)`.

## Detailed documentation

### getDaysOfTheMonth()

Gets the days of the month as numbers (1-28) on which to refresh the data source. Only applies if frequency type is monthly.

#### Return

`Integer[]` — The days of the month on which to refresh.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getDaysOfTheWeek()

Gets the days of the week on which to refresh the data source. Only applies if the frequency type is weekly.

#### Return

`Weekday[]` — The days of the week on which to refresh.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getFrequencyType()

Gets the frequency type.

#### Return

`FrequencyType` — The frequency type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`

---

### getStartHour()

Gets the start hour (as a number 0-23) of the time interval during which the refresh schedule runs. For example, if the start hour is 13 and the time interval's duration is 4 hours, then the data source is refreshed between 1 p.m. and 5 p.m. The hour is in the timezone of the spreadsheet.

#### Return

`Integer` — The start hour.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/spreadsheets.currentonly`
- `https://www.googleapis.com/auth/spreadsheets`
