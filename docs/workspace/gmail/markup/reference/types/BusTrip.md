---
source: https://developers.google.com/workspace/gmail/markup/reference/types/BusTrip
root: workspace
fetched_at: 2026-04-23T15:29:21.427Z
---

# BusTrip

Type name: [BusTrip](https://developers.google.com/workspace/gmail/markup/reference/types/BusTrip)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| arrivalBusStop | [BusStation](https://developers.google.com/workspace/gmail/markup/reference/types/BusStation) or [BusStop](https://developers.google.com/workspace/gmail/markup/reference/types/BusStop) | The stop or station from which the bus arrives. |
| arrivalTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The expected arrival time. |
| busName | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the bus (e.g. Bolt Express). |
| busNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The unique identifier for the bus. |
| departureBusStop | [BusStation](https://developers.google.com/workspace/gmail/markup/reference/types/BusStation) or [BusStop](https://developers.google.com/workspace/gmail/markup/reference/types/BusStop) | The stop or station from which the bus departs. |
| departureTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The expected departure time. |
| provider | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The organization providing the reservation. |
