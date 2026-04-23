---
source: https://developers.google.com/workspace/calendar/api/concepts/sharing
root: workspace
fetched_at: 2026-04-23T15:24:48.775Z
---

# Calendar sharing

There are two different ways to share calendar and event data with others.

Firstly, you can *share* an entire calendar, with a specified level of access. For example, you can create a team calendar, and then do things like:

- Grant all members of your team the right to add and modify events in the calendar
- Grant your boss the right to see the events on your calendar
- Grant your customers the right to only see when you are free or busy, but not the details of the events

You can also adjust the access to individual events on the shared calendar.

Alternatively, you can invite others to individual events on your calendar. Inviting someone to an event puts a copy of that event on their calendar. The copy on the attendee's calendar is visible to others according to the attendee's sharing configuration. The invitee can then accept or reject the invitation, and to some extent also modify their copy of the event — for example, change the color it has in their calendar, and add a reminder. [Learn more about inviting users to an event](https://developers.google.com/workspace/calendar/api/concepts/inviting-attendees-to-events).

## Sharing calendars

The owners of a calendar can share the calendar by giving access to other users. The sharing settings of a given calendar are represented by the [ACL collection](https://developers.google.com/workspace/calendar/v3/reference/acl) (access control list) of that calendar. Each resource in the ACL collection grants a specified *grantee* a certain access *role*, which is one of those listed in the following table:

| Role | Access privilege granted by the role |
| --- | --- |
| `none` | Provides no access. |
| `freeBusyReader` | Lets the grantee see whether the calendar is free or busy at a given time, but does not allow access to event details. Free/busy information can be retrieved using the [freeBusy.query](https://developers.google.com/workspace/calendar/v3/reference/freebusy/query) operation. |
| `reader` | Lets the grantee read events on the calendar. |
| `writer` | Lets the grantee read and write events on the calendar. This role can also see ACLs. |
| `owner` | Provides manager access to the calendar. This role has all of the permissions of the writer role with the additional ability to modify access levels of other users. |

The possible grantees are:

- another individual user
- a user group
- a domain
- public (grants access to everyone).

By default, each user has owner access to their primary calendar, and this access cannot be relinquished. Up to 6,000 ACLs can be added per calendar.

For Google Workspace users, there are also domain settings that might restrict the maximum allowed access. For example, suppose your domain has a setting that only allows free-busy calendar sharing. In this case, even if you grant writer access to the public, users outside the domain will only see the free-busy details.

## Event visibility

Once the calendar is shared, you can adjust the access to individual events on a calendar by changing the [visibility property](https://developers.google.com/workspace/calendar/v3/reference/events#visibility) of the event. This property has no meaning for non-shared calendars. The following table lists the possible values of the visibility property:

| Visibility | Meaning |
| --- | --- |
| `default` | The visibility of the event is determined by the ACLs of the calendar. Different attendees of the same event can have different ACLs and sharing. If a user with a `private` calendar sends an invite to an event using `default` visibility to another user with a publicly visible calendar, the event is fully visible on that attendee's calendar. |
| `public` | The details of this event are visible to everyone with at least `freeBusyReader` access to the calendar. |
| `private` | The details of this event are only visible to users with at least `writer` access to the calendar. |
