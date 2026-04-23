---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Flight
root: workspace
fetched_at: 2026-04-23T15:29:30.966Z
---

# Flight

Type name: [Flight](https://developers.google.com/workspace/gmail/markup/reference/types/Flight)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| aircraft | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Vehicle](https://developers.google.com/workspace/gmail/markup/reference/types/Vehicle) | The kind of aircraft (e.g., "Boeing 747"). |
| arrivalAirport | [Airport](https://developers.google.com/workspace/gmail/markup/reference/types/Airport) | The airport where the flight terminates. |
| arrivalGate | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifier of the flight's arrival gate. |
| arrivalTerminal | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifier of the flight's arrival terminal. |
| arrivalTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The expected arrival time. |
| carrier | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights. |
| departureAirport | [Airport](https://developers.google.com/workspace/gmail/markup/reference/types/Airport) | The airport where the flight originates. |
| departureGate | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifier of the flight's departure gate. |
| departureTerminal | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifier of the flight's departure terminal. |
| departureTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The expected departure time. |
| estimatedFlightDuration | [Duration](https://developers.google.com/workspace/gmail/markup/reference/types/Duration) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The estimated time the flight will take. |
| flightDistance | [Distance](https://developers.google.com/workspace/gmail/markup/reference/types/Distance) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The distance of the flight. |
| flightNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'. |
| mealService | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Description of the meals that will be provided or available for purchase. |
| provider | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The organization providing the reservation. |
| seller | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. |
| webCheckinTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The time when a passenger can check into the flight online. |
