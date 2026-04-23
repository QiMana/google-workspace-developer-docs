---
source: https://developers.google.com/workspace/gmail/markup/reference/types/TrainTrip
root: workspace
fetched_at: 2026-04-23T15:29:56.661Z
---

# TrainTrip

Type name: [TrainTrip](./TrainTrip.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| arrivalPlatform | [Text](./Text.md) | The platform where the train arrives. |
| arrivalStation | [TrainStation](./TrainStation.md) | The station where the train trip ends. |
| arrivalTime | [DateTime](./DateTime.md) | The expected arrival time. |
| departurePlatform | [Text](./Text.md) | The platform from which the train departs. |
| departureStation | [TrainStation](./TrainStation.md) | The station from which the train departs. |
| departureTime | [DateTime](./DateTime.md) | The expected departure time. |
| provider | [Organization](./Organization.md) or [Person](./Person.md) | The organization providing the reservation. |
| trainName | [Text](./Text.md) | The name of the train (e.g. The Orient Express). |
| trainNumber | [Text](./Text.md) | The unique identifier for the train. |
