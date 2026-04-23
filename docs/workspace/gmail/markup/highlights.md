---
source: https://developers.google.com/workspace/gmail/markup/highlights
root: workspace
fetched_at: 2026-04-23T15:29:08.451Z
---

# What Are Highlights?

An important feature of Gmail is **Highlights**. As the name implies, they surface key information and actions from an email and display them as easy-to-see chips in an email message.

For example, when a user receives a confirmation for a flight reservation, a chip may appear above the email message with a summary of the trip and a link to check in. When they receive a receipt for an order, another chip may show an image of the purchase and even the expected delivery date.

As a sender, you can elevate information and actions using Highlights. You declare them using structured data markup. Supported types include:

- [Bus reservation](https://developers.google.com/workspace/gmail/markup/highlights#bus_car_rental_train_or_flight_reservation)
- [Car rental reservation](https://developers.google.com/workspace/gmail/markup/highlights#bus_car_rental_train_or_flight_reservation)
- [Train reservation](https://developers.google.com/workspace/gmail/markup/highlights#bus_car_rental_train_or_flight_reservation)
- [Flight reservation](https://developers.google.com/workspace/gmail/markup/highlights#bus_car_rental_train_or_flight_reservation)
- [Order](https://developers.google.com/workspace/gmail/markup/highlights#order)
- [Parcel delivery](https://developers.google.com/workspace/gmail/markup/highlights#parcel_delivery)
- [Hotel reservation](https://developers.google.com/workspace/gmail/markup/highlights#hotel_reservation)
- [Invoice](https://developers.google.com/workspace/gmail/markup/highlights#invoice)
- [Restaurant reservation](https://developers.google.com/workspace/gmail/markup/highlights#restaurant_reservation)
- [Ticketed event reservation](https://developers.google.com/workspace/gmail/markup/highlights#ticketed_event_reservation)

The following sections introduce and show examples of some of these types.

## Bus, Car Rental, Train, or Flight reservation

Use bus, car rental, train, or flight reservation markup in emails that confirm bookings. Highlights for transportation reservations show departure and arrival information, alongside a beautiful image of the destination city. When available, real-time status appears, enhancing the Highlight with up-to date information and a real-time status badge.

Flight reservation Highlights also support Actions, including Check In action.

To learn more, see the [reservations markup reference](https://developers.google.com/workspace/gmail/markup/reference#reservations).

## Order

Use order markup in emails that include a receipt for purchases (digital or physical goods). The user will see chips above the email message with information about cost, estimated delivery, and an image of the purchased item.

Order Highlights also support Actions, including View Order action.

To learn more, see the [order markup reference](https://developers.google.com/workspace/gmail/markup/reference/order).

## Parcel delivery

Use parcel delivery markup in emails that include shipment notifications for orders. The user will see chips above the email message with same information as order, as well as a real-time status badge showing the up-to-date status.

Parcel delivery Highlights also support Actions including Track Package action.

To learn more, see the [parcel delivery markup reference](https://developers.google.com/workspace/gmail/markup/reference/parcel-delivery).

## Hotel reservation

Use hotel reservation markup in emails that confirm hotel bookings. Highlights for hotel reservations show details of the booking and an image that you specify.

To learn more, see the [Hotel reservation markup reference](https://developers.google.com/workspace/gmail/markup/reference/hotel-reservation).

## Restaurant reservation

Use restaurant reservation markup in emails that confirm restaurant bookings. Highlights for restaurant reservations show details of the booking and an image that you specify.

To learn more, see the [Restaurant reservation markup reference](https://developers.google.com/workspace/gmail/markup/reference/restaurant-reservation).

## Ticketed event reservation

Use ticketed event reservation markup in emails that confirm event bookings. Highlights for ticketed event reservations show selected details of the booking and an image that you specify.

Ticketed event Highlights also support Actions, including the View Tickets action.

To learn more, see the [Ticketed event markup reference](https://developers.google.com/workspace/gmail/markup/reference/event-reservation).
