---
source: https://developers.google.com/apps-script/reference/script/clock-trigger-builder
root: apps-script
fetched_at: 2026-04-23T15:20:56.458Z
---

# Class ClockTriggerBuilder

## Page Summary

- ClockTriggerBuilder is used to create clock triggers.
- You can specify when the trigger runs using methods like `after()`, `at()`, `atDate()`, `atHour()`, `everyDays()`, `everyHours()`, `everyMinutes()`, `everyWeeks()`, `onMonthDay()`, and `onWeekDay()`.
- You can refine the trigger's execution time with `nearMinute()` and `inTimezone()`.
- The `create()` method is used to finalize and schedule the trigger.

A builder for clock triggers.

## Detailed documentation

### after(durationMilliseconds)

Specifies the minimum duration (in milliseconds) after the current time that the trigger runs. The actual duration might vary, but won't be less than your specified minimum.

```
// Creates a trigger that runs 10 minutes later
ScriptApp.newTrigger('myFunction').timeBased().after(10 * 60 * 1000).create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `durationMilliseconds` | `Integer` | The minimum duration (in milliseconds) after the current time when the trigger should run. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### at(date)

Specifies when the trigger runs.

```
// Creates a trigger for December 1, 2012
const triggerDay = new Date(2012, 11, 1);
ScriptApp.newTrigger('myFunction').timeBased().at(triggerDay).create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` | A Date object representing when the trigger should run. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### atDate(year, month, day)

Specifies that the trigger fires on the given date, by default near midnight (+/- 15 minutes).

```
// Schedules for January 1st, 2013
ScriptApp.newTrigger('myFunction').timeBased().atDate(2013, 1, 1).create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `year` | `Integer` | The calendar year to schedule the trigger. |
| `month` | `Integer` | The calendar month to schedule the trigger (should be a number between 1 and 12, inclusive). |
| `day` | `Integer` | The calendar day to schedule the trigger (should be a number between 1 and 31, inclusive). |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### atHour(hour)

Specifies the hour the trigger at which the trigger runs.

```
// Runs between 5am-6am in the timezone of the script
ScriptApp.newTrigger('myFunction')
    .timeBased()
    .atHour(5)
    .everyDays(
        1)  // Frequency is required if you are using atHour() or nearMinute()
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hour` | `Integer` | The hour at which to fire. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### create()

Creates the trigger.

#### Return

`Trigger` — The newly created, scheduled trigger.

---

### everyDays(n)

Specifies to run the trigger every `n` days.

```
ScriptApp.newTrigger('myFunction').timeBased().everyDays(3).create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `n` | `Integer` | The number of days between executions. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### everyHours(n)

Specifies to run the trigger every `n` hours.

```
ScriptApp.newTrigger('myFunction').timeBased().everyHours(12).create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `n` | `Integer` | The number of hours between executions. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### everyMinutes(n)

Specifies to run the trigger every `n` minutes. `n` must be 1, 5, 10, 15 or 30.

```
ScriptApp.newTrigger('myFunction').timeBased().everyMinutes(10).create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `n` | `Integer` | The number of minutes between executions. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### everyWeeks(n)

Specifies to run the trigger every `n` weeks.

```
ScriptApp.newTrigger('myFunction')
    .timeBased()
    .everyWeeks(2)
    .onWeekDay(ScriptApp.WeekDay.FRIDAY)
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `n` | `Integer` | The number of weeks between executions. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### inTimezone(timezone)

Specifies the timezone for the specified dates/time when the trigger runs. By default, the timezone is that of the script.

The list of valid timezone strings corresponds with the valid timezone strings listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html). An invalid timezone string causes the script to throw an error.

```
// Schedule the trigger to execute at noon every day in the US/Pacific time zone
ScriptApp.newTrigger('myFunction')
    .timeBased()
    .atHour(12)
    .everyDays(1)
    .inTimezone('America/Los_Angeles')
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `timezone` | `String` | The timezone with which to treat time information in the event. |

#### Return

`ClockTriggerBuilder` — This `ClockTriggerBuilder`, for chaining.

---

### nearMinute(minute)

Specifies the minute at which the trigger runs (plus or minus 15 minutes). If `nearMinute()` is not called, a random minute value is used.

```
// Runs at approximately 5:30am in the timezone of the script
ScriptApp.newTrigger('myFunction')
    .timeBased()
    .atHour(5)
    .nearMinute(30)
    .everyDays(
        1)  // Frequency is required if you are using atHour() or nearMinute()
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minute` | `Integer` | The minute at which to fire. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### onMonthDay(day)

Specifies the date in the month that the trigger runs.

```
// Schedules for the first of every month
ScriptApp.newTrigger('myFunction').timeBased().onMonthDay(1).create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `day` | `Integer` | The day of the month the trigger should be scheduled for. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.

---

### onWeekDay(day)

Specifies the day of the week that the trigger runs.

```
ScriptApp.newTrigger('myFunction')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.FRIDAY)
    .create();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `day` | `Weekday` | The day of the week to fire. |

#### Return

`ClockTriggerBuilder` — The builder, for chaining.
