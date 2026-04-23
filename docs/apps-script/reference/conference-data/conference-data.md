---
source: https://developers.google.com/apps-script/reference/conference-data/conference-data
root: apps-script
fetched_at: 2026-04-23T15:19:20.926Z
---

# Class ConferenceData

## Page Summary

- ConferenceData is a container for all conference-related information.
- You can build a ConferenceData object using the `ConferenceDataService.newConferenceDataBuilder()` method.
- The `printJson()` method allows you to print the JSON representation of the ConferenceData object for debugging purposes.

Container for all conference-related information.

```
let conferenceId;
// Set the conference ID, that is, the identifier your system creates for the
// meeting.

const entryPoint = ConferenceDataService.newEntryPoint();
// Finish building the entry point ...

const conferenceParameter = ConferenceDataService.newConferenceParameter();
// Finish building the parameter ...

const conferenceData = ConferenceDataService.newConferenceDataBuilder()
                           .setConferenceId(conferenceId)
                           .addEntryPoint(entryPoint)
                           .addConferenceParameter(conferenceParameter)
                           .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
