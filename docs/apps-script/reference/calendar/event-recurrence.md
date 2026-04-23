---
source: https://developers.google.com/apps-script/reference/calendar/event-recurrence
root: apps-script
fetched_at: 2026-04-23T15:18:54.892Z
---

# Class EventRecurrence

## Page Summary

- EventRecurrence represents the recurrence settings for an event series.
- You can add rules to specify daily, weekly, monthly, or yearly recurrences or exclusions for events.
- Specific dates can be added for event recurrences or excluded from an event series.
- The time zone for the recurrence can be set, affecting when events recur.

Represents the recurrence settings for an event series.

## Detailed documentation

### addDailyExclusion()

Adds a rule that excludes occurrences on a daily basis.

```
// Creates a rule that recurs every week after the first 30 days.
const recurrence =
    CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
```

#### Return

`RecurrenceRule` — the new RecurrenceRule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addDailyRule()

Adds a rule that causes the event to recur on a daily basis.

```
// Creates a rule that recurs every day for ten days.
const recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
```

#### Return

`RecurrenceRule` — the new RecurrenceRule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addDate(date)

Adds a rule that causes the event to recur on a specific date.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` |  |

#### Return

`EventRecurrence` — this EventRecurrence for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addDateExclusion(date)

Adds a rule that excludes an occurrence for a specific date.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `date` | `Date` |  |

#### Return

`EventRecurrence` — this EventRecurrence for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addMonthlyExclusion()

Adds a rule that excludes occurrences on a monthly basis.

By default the exclusion is applied on the same day of the month as the first event in the series, but this can be altered by calling `RecurrenceRule.onlyOnMonthDay(day)` or `RecurrenceRule.onlyOnMonthDays(days)`.

#### Return

`RecurrenceRule` — the new RecurrenceRule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addMonthlyRule()

Adds a rule that causes the event to recur on a monthly basis.

By default the event recurs on the same day of the month as the first event in the series, but this can be altered by calling `RecurrenceRule.onlyOnMonthDay(day)` or `RecurrenceRule.onlyOnMonthDays(days)`.

```
// Creates a rule that recurs every month for three months.
const recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
```

#### Return

`RecurrenceRule` — the new RecurrenceRule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addWeeklyExclusion()

Adds a rule that excludes occurrences on a weekly basis.

By default the exclusion is applied on the same day of the week as the first event in the series, but this can be altered by calling `RecurrenceRule.onlyOnWeekday(day)` or `RecurrenceRule.onlyOnWeekdays(days)`.

```
// Creates a rule that recurs every day except the first four Wednesdays.
const recurrence = CalendarApp.newRecurrence()
                       .addDailyRule()
                       .addWeeklyExclusion()
                       .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
                       .times(4);
```

#### Return

`RecurrenceRule` — the new RecurrenceRule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addWeeklyRule()

Adds a rule that causes the event to recur on a weekly basis.

By default the event recurs on the same day of the week as the first event in the series, but this can be altered by calling `RecurrenceRule.onlyOnWeekday(day)` or `RecurrenceRule.onlyOnWeekdays(days)`.

```
// Creates a rule that recurs every week for ten weeks.
const recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
```

#### Return

`RecurrenceRule` — the new RecurrenceRule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addYearlyExclusion()

Adds a rule that excludes occurrences on a yearly basis.

By default the exclusion is applied on the same day of the year as the first event in the series, but this can be altered by calling `RecurrenceRule.onlyOnYearDay(day)` or `RecurrenceRule.onlyOnYearDays(days)`.

#### Return

`RecurrenceRule` — the new RecurrenceRule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### addYearlyRule()

Adds a rule that causes the event to recur on a yearly basis.

By default the event recurs on the same day of the year as the first event in the series, but this can be altered by calling `RecurrenceRule.onlyOnYearDay(day)` or `RecurrenceRule.onlyOnYearDays(days)`.

#### Return

`RecurrenceRule` — the new RecurrenceRule

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`

---

### setTimeZone(timeZone)

Sets the time zone for this recurrence. This affects the date and time that events recur on, and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `timeZone` | `String` | the time zone, specified in "long" format (e.g., 'America/New\_York', as listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html)) |

#### Return

`EventRecurrence` — this EventRecurrence for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes) or appropriate scopes from the [related REST API](https://developers.google.com/identity/protocols/googlescopes):

- `https://www.googleapis.com/auth/calendar`
- `https://www.google.com/calendar/feeds`
