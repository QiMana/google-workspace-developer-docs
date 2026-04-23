---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/profile
root: workspace
fetched_at: 2026-04-23T15:24:26.779Z
---

# Profile Audit Activity Events

This document lists the events and parameters for various types of Profile Audit activity events. You can retrieve these events by calling [Activities.list()](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list) with `applicationName=profile`.

## user initiated event

Events triggered directly by a user's action, rather than by an administrator or by automated system processes. Events of this type are returned with `type=USER_INITIATED_EVENT`.

### profile is mutated by the user

The event which indicates the user's profile is mutated by the user.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>PROFILE_MUTATE_BY_USER</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>PROFILE_FIELD_MUTATION_TYPE</code></td><td><p><code>string</code></p><p>This is the parameter which indicates the profile field mutation type. Possible values:</p><ul><li><code>Delete</code><br>The field in the user's profile is deleted.</li><li><code>Update</code><br>The field in the user's profile is added or its value is changed.</li></ul></td></tr><tr><td><code>PROFILE_FIELD_NAME</code></td><td><p><code>string</code></p><p>This is the parameter which indicates the field name in the user's profile. Possible values:</p><ul><li><code>About</code><br>The about field in user's profile.</li><li><code>Address</code><br>The address field in user's profile.</li><li><code>Birthday</code><br>The birthday field in user's profile.</li><li><code>ExternalId</code><br>The external_id field in user's profile.</li><li><code>FileAs</code><br>The file_as field in user's profile.</li><li><code>Gender</code><br>The gender field in user's profile.</li><li><code>InstantMessage</code><br>The instant message field in user's profile.</li><li><code>Language</code><br>The language field in user's profile.</li><li><code>Location</code><br>The location field in user's profile.</li><li><code>Name</code><br>The name field in user's profile.</li><li><code>NamePronunciation</code><br>The user's name pronunciation.</li><li><code>Nickname</code><br>The nickname field in user's profile.</li><li><code>Organization</code><br>The organization field in user's profile.</li><li><code>Phone</code><br>The phone field in user's profile.</li><li><code>Photo</code><br>The photo field in user's profile.</li><li><code>PortraitPhoto</code><br>The portrait photo field in user's profile.</li><li><code>PosixAccount</code><br>The posix account field in user's profile.</li><li><code>ProfileEmail</code><br>The profile email field in user's profile.</li><li><code>Pronoun</code><br>The pronoun field in user's profile.</li><li><code>Relation</code><br>The relation field in user's profile.</li><li><code>SshPublicKey</code><br>The ssh public key field in user's profile.</li><li><code>Website</code><br>The website field in user's profile.</li></ul></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>profile</b>?eventName=<b>PROFILE_MUTATE_BY_USER</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code>profile is mutated by the user</code></div></td></tr></tbody></table>
