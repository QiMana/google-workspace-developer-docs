---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/users.sections
root: workspace
fetched_at: 2026-04-23T15:25:09.431Z
---

# REST Resource: users.sections

## Resource: Section

Represents a [section](https://support.google.com/chat/answer/16059854) in Google Chat. Sections help users organize their spaces. There are two types of sections:

1. **System Sections:** These are predefined sections managed by Google Chat. Their resource names are fixed, and they cannot be created, deleted, or have their `displayName` modified. Examples include:
	- `users/{user}/sections/default-direct-messages`
		- `users/{user}/sections/default-spaces`
		- `users/{user}/sections/default-apps`
2. **Custom Sections:** These are sections created and managed by the user. Creating a custom section using `sections.create` **requires** a `displayName`. Custom sections can be updated using `sections.patch` and deleted using `sections.delete`.

JSON representation

```
{
  "name": string,
  "displayName": string,
  "sortOrder": integer,
  "type": enum (SectionType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Identifier. Resource name of the section.</p><p>For system sections, the section ID is a constant string:</p><ul><li>DEFAULT_DIRECT_MESSAGES: <code>users/{user}/sections/default-direct-messages</code></li><li>DEFAULT_SPACES: <code>users/{user}/sections/default-spaces</code></li><li>DEFAULT_APPS: <code>users/{user}/sections/default-apps</code></li></ul><p>Format: <code>users/{user}/sections/{section}</code></p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Optional. The section's display name. Only populated for sections of type <code>CUSTOM_SECTION</code>. Supports up to 80 characters. Required when creating a <code>CUSTOM_SECTION</code>.</p></td></tr><tr><td><code>sortOrder</code></td><td><p><code>integer</code></p><p>Output only. The order of the section in relation to other sections. Sections with a lower <code>sortOrder</code> value appear before sections with a higher value.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>SectionType</code>)</code></p><p>Required. The type of the section.</p></td></tr></tbody></table>

## SectionType

Section types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SECTION_TYPE_UNSPECIFIED</code></td><td>Unspecified section type.</td></tr><tr><td><code>CUSTOM_SECTION</code></td><td>Custom section.</td></tr><tr><td><code>DEFAULT_DIRECT_MESSAGES</code></td><td>Default section containing <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype">DIRECT_MESSAGE</a> between two human users or <a href="https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype">GROUP_CHAT</a> spaces that don't belong to any custom section.</td></tr><tr><td><code>DEFAULT_SPACES</code></td><td>Default spaces that don't belong to any custom section.</td></tr><tr><td><code>DEFAULT_APPS</code></td><td>Default section containing a user's installed apps.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a section in Google Chat.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a section of type <code>CUSTOM_SECTION</code>.</td></tr><tr><td><h3>list</h3></td><td>Lists sections available to the Chat user.</td></tr><tr><td><h3>patch</h3></td><td>Updates a section.</td></tr><tr><td><h3>position</h3></td><td>Changes the sort order of a section.</td></tr></tbody></table>
