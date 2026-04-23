---
source: https://developers.google.com/workspace/meet/add-ons/guides/content-sharing-method
root: workspace
fetched_at: 2026-04-23T15:30:11.294Z
---

# Choose a content sharing method

This page describes the best practices developers should observe when sharing access to controlled content. Updates to permissions can be done either before a collaborative activity starts or while it's ongoing.

It's strongly recommended to implement a method that creates the least amount of user friction or disruption. Developers should maintain a balance between the constraints in the app's access control model and security requirements, and any user disruption.

The following are several ways to provide access to collaborative activities.

## Grant temporary access token (recommended)

A temporary (expiring) access token provides a user's access and security credentials that are valid within a specified period of time. For more info, see [Configure temporary access](https://cloud.google.com/iam/docs/configuring-temporary-access).

This approach provides the least user friction. The content is accessible to anyone with the link and the temporary access token. Users only have access for the duration of time specified in the token, which is generated once the initiator starts the activity.

You can share a token using the [activity starting state](https://developers.google.com/workspace/meet/add-ons/guides/collaborate-in-the-add-on). The token can be redeemed for temporary content access. The temporary access token is independent of the time the content is created. This approach works for new and existing content.

The following table shows the advantages and disadvantages of using this approach:

| Advantages | Disadvantages |
| --- | --- |
| Least amount of friction for users | Risk of oversharing content |
| Allows people to join after activity started |  |
| Doesn't require knowledge of participants ahead of time |  |

## Share before activity starts

An alternative approach is to design your Meet add-on to prompt the user starting the activity to update permissions before beginning.

The following table shows the advantages and disadvantages of using this approach:

| Advantages | Disadvantages |
| --- | --- |
| Explicit sharing minimizes risks | Determining participants can be challenging |
|  | Medium amount of friction or interruptions approving access as people join |

## Share on-demand

This is a reactive approach where the activity initiator approves requests in real-time as users request access to the content. This method might cause high user friction if participants aren't correctly determined. Therefore, it's the least recommended.

The following table shows the advantages and disadvantages of using this approach:

| Advantages | Disadvantages |
| --- | --- |
| Doesn't require knowledge of participants ahead of time | Triggers high friction and interrupts the flow of the meeting |
| Explicit sharing minimizes risks | Requires a path to update the content permissions after activity has started |
