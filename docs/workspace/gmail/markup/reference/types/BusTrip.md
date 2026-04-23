---
source: https://developers.google.com/workspace/gmail/markup/reference/types/BusTrip
root: workspace
fetched_at: 2026-04-23T15:29:21.427Z
---

# BusTrip

Type name: [BusTrip](./BusTrip.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| arrivalBusStop | [BusStation](./BusStation.md) or [BusStop](./BusStop.md) | The stop or station from which the bus arrives. |
| arrivalTime | [DateTime](./DateTime.md) | The expected arrival time. |
| busName | [Text](./Text.md) | The name of the bus (e.g. Bolt Express). |
| busNumber | [Text](./Text.md) | The unique identifier for the bus. |
| departureBusStop | [BusStation](./BusStation.md) or [BusStop](./BusStop.md) | The stop or station from which the bus departs. |
| departureTime | [DateTime](./DateTime.md) | The expected departure time. |
| provider | [Organization](./Organization.md) or [Person](./Person.md) | The organization providing the reservation. |
