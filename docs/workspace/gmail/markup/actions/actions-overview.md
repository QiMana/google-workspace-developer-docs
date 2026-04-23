---
source: https://developers.google.com/workspace/gmail/markup/actions/actions-overview
root: workspace
fetched_at: 2026-04-23T15:29:07.325Z
---

# What Are Actions?

Actions enable users to interact with your product or service right inside Gmail.

For instance, when you send a notification that a magazine subscription is about to expire, you can present the option to renew it right from the notification.

Actions can be declared in two ways: as In-App Actions or as Go-To Actions. Multiple types of actions are currently supported.

## In-App Actions

In-App Actions are handled in-place, inside Gmail, without sending the user to any other website. Such actions include One-Click Actions.

### One-Click Action

There are many scenarios where the expected behavior from the user is to confirm a pre-defined request. For instance, when a user registers to a site, she receives an email asking her to confirm her registration. Similarly, a movie or music recommendations site could prompt a user to add items to a queue to enjoy later.

![A Confirmation Button in Gmail](https://developers.google.com/workspace/gmail/markup/images/actions-one-click-action.png)  
One-click actions in Gmail

To learn more, see the [One-Click Action Reference](../reference/one-click-action.md).

## Go-To Actions

For more complex interactions, Go-To Actions can be used to provide a direct link to the page where the action can be performed. Clicking the button redirects the user to the page specified in the action definition.

Go-To Actions should be used for actions that require multiple steps, or significant data capture that can't be performed from the inbox. For instance, an airline sending a check-in reminder can add a Go-To Action to quickly take the user to the airline website to select a seat or request an upgrade.

![A Go-To Action in Gmail](https://developers.google.com/workspace/gmail/markup/images/actions-go-to-action.png)  
Go-to actions in Gmail

To learn more, see the [Go-To Action Reference](../reference/go-to-action.md).

## Further Reading

- [Declaring Actions](./declaring-actions.md)
