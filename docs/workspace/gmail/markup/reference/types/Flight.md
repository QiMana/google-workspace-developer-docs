---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Flight
root: workspace
fetched_at: 2026-04-23T15:29:30.966Z
---

# Flight

Type name: [Flight](./Flight.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| aircraft | [Text](./Text.md) or [Vehicle](./Vehicle.md) | The kind of aircraft (e.g., "Boeing 747"). |
| arrivalAirport | [Airport](./Airport.md) | The airport where the flight terminates. |
| arrivalGate | [Text](./Text.md) | Identifier of the flight's arrival gate. |
| arrivalTerminal | [Text](./Text.md) | Identifier of the flight's arrival terminal. |
| arrivalTime | [DateTime](./DateTime.md) | The expected arrival time. |
| carrier | [Organization](./Organization.md) | 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights. |
| departureAirport | [Airport](./Airport.md) | The airport where the flight originates. |
| departureGate | [Text](./Text.md) | Identifier of the flight's departure gate. |
| departureTerminal | [Text](./Text.md) | Identifier of the flight's departure terminal. |
| departureTime | [DateTime](./DateTime.md) | The expected departure time. |
| estimatedFlightDuration | [Duration](./Duration.md) or [Text](./Text.md) | The estimated time the flight will take. |
| flightDistance | [Distance](./Distance.md) or [Text](./Text.md) | The distance of the flight. |
| flightNumber | [Text](./Text.md) | The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'. |
| mealService | [Text](./Text.md) | Description of the meals that will be provided or available for purchase. |
| provider | [Organization](./Organization.md) or [Person](./Person.md) | The organization providing the reservation. |
| seller | [Organization](./Organization.md) or [Person](./Person.md) | An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. |
| webCheckinTime | [DateTime](./DateTime.md) | The time when a passenger can check into the flight online. |
