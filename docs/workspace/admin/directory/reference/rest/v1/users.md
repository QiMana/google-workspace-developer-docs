---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/users
root: workspace
fetched_at: 2026-04-23T15:23:44.900Z
---

# REST Resource: users

## Resource: User

The Directory API allows you to create and manage your account's users, user aliases, and user Google profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](../../../v1/guides/manage-users.html.md) and the [User Aliases Developer's Guide](../../../v1/guides/manage-user-aliases.html.md).

JSON representation

```
{
  "id": string,
  "primaryEmail": string,
  "password": value,
  "hashFunction": string,
  "isAdmin": boolean,
  "isDelegatedAdmin": boolean,
  "agreedToTerms": boolean,
  "suspended": boolean,
  "changePasswordAtNextLogin": boolean,
  "ipWhitelisted": boolean,
  "name": {
    object (UserName)
  },
  "kind": string,
  "etag": string,
  "emails": value,
  "externalIds": value,
  "relations": value,
  "aliases": [
    string
  ],
  "isMailboxSetup": boolean,
  "customerId": string,
  "addresses": value,
  "organizations": value,
  "lastLoginTime": string,
  "phones": value,
  "suspensionReason": string,
  "thumbnailPhotoUrl": string,
  "languages": value,
  "posixAccounts": value,
  "creationTime": string,
  "nonEditableAliases": [
    string
  ],
  "sshPublicKeys": value,
  "notes": value,
  "websites": value,
  "locations": value,
  "includeInGlobalAddressList": boolean,
  "keywords": value,
  "deletionTime": string,
  "gender": value,
  "thumbnailPhotoEtag": string,
  "ims": value,
  "customSchemas": value,
  "isEnrolledIn2Sv": boolean,
  "isEnforcedIn2Sv": boolean,
  "archived": boolean,
  "orgUnitPath": string,
  "recoveryEmail": string,
  "recoveryPhone": string,
  "isGuestUser": boolean,
  "guestAccountInfo": {
    object (GuestAccountInfo)
    }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique ID for the user. A user <code>id</code> can be used as a user request URI's <code>userKey</code>.</p></td></tr><tr><td><code>primaryEmail</code></td><td><p><code>string</code></p><p>The user's primary email address. This property is required in a request to create a user account. The <code>primaryEmail</code> must be unique and cannot be an alias of another user.</p></td></tr><tr><td><code>password</code></td><td><p><code>value (<code>Value</code> format)</code></p><p>Stores the password for the user account. The user's password value is required when creating a user account. It's optional when updating a user and should only be provided if the user is updating their account password. The password value is never returned in the API's response body.<br><br>A password can contain any combination of ASCII characters, and must be between 8-100 characters.<br><br>We recommend sending the <code>password</code> parameter as a hexadecimal-encoded hash value and setting <code>hashFunction</code> accordingly. If <code>hashFunction</code> is specified, the password must be a valid hash key.</p></td></tr><tr><td><code>hashFunction</code></td><td><p><code>string</code></p><p>Stores the hash format of the <code>password</code> property. The following <code>hashFunction</code> values are allowed:</p><ul><li><code>MD5</code> - Accepts simple hex-encoded values.</li><li><code>SHA-1</code> - Accepts simple hex-encoded values.</li><li><code>crypt</code> - Compliant with the <a href="https://en.wikipedia.org/wiki/Crypt_%28C%29">C crypt library</a>. Supports the DES, MD5 (hash prefix <code>$1$</code>), SHA-256 (hash prefix <code>$5$</code>), and SHA-512 (hash prefix <code>$6$</code>) hash algorithms.</li></ul><p>If rounds are specified as part of the prefix, they must be 10,000 or fewer.</p></td></tr><tr><td><code>isAdmin</code></td><td><p><code>boolean</code></p><p>Output only. Indicates a user with super administrator privileges. The <code>isAdmin</code> property can only be edited in the <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#make_admin">Make a user an administrator</a> operation ( <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users/makeAdmin.html">makeAdmin</a> method). If edited in the user <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users/insert.html">insert</a> or <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users/update.html">update</a> methods, the edit is ignored by the API service.</p></td></tr><tr><td><code>isDelegatedAdmin</code></td><td><p><code>boolean</code></p><p>Output only. Indicates if the user is a delegated administrator.<br>Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service.<br>Roles and privileges for administrators are assigned using the <a href="https://support.google.com/a/answer/33325">Admin console</a>.</p></td></tr><tr><td><code>agreedToTerms</code></td><td><p><code>boolean</code></p><p>Output only. This property is <code>true</code> if the user has completed an initial login and accepted the Terms of Service agreement.</p></td></tr><tr><td><code>suspended</code></td><td><p><code>boolean</code></p><p>Indicates if user is suspended.</p></td></tr><tr><td><code>changePasswordAtNextLogin</code></td><td><p><code>boolean</code></p><p>Indicates if the user is forced to change their password at next login. This setting doesn't apply when <a href="https://support.google.com/a/answer/60224">the user signs in via a third-party identity provider</a>.</p></td></tr><tr><td><code>ipWhitelisted</code></td><td><p><code>boolean</code></p><p>If <code>true</code>, the user's IP address is subject to a deprecated IP address <a href="https://support.google.com/a/answer/60752"><code>allowlist</code></a> configuration.</p></td></tr><tr><td><code>name</code></td><td><p><code>object (<code>UserName</code>)</code></p><p>Holds the given and family names of the user, and the read-only <code>fullName</code> value. The maximum number of characters in the <code>givenName</code> and in the <code>familyName</code> values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the <a href="https://support.google.com/a/answer/9193374">administration help center</a>. Maximum allowed data size for this field is 1KB.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. The type of the API resource. For Users resources, the value is <code>admin#directory#user</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>Output only. ETag of the resource.</p></td></tr><tr><td><code>emails</code></td><td><p><code>value (<code>Value</code> format)</code></p><p>The list of the user's email addresses. The maximum allowed data size is 10KB.</p><b>Fields</b></td><td><p><code>string</code></p></td><td>The user's email address. Also serves as the email ID. This value can be the user's primary email address or an alias.</td></tr><tr><td><p><code>emails[].customType</code></p></td><td><p><code>string</code></p></td><td>If the email address <code>type</code> is <code>custom</code>, this property contains the custom value and must be set.</td></tr><tr><td><p><code>emails[].primary</code></p></td><td><p><code>boolean</code></p></td><td>Indicates if this is the user's primary email. Only one entry can be marked as primary.</td></tr><tr><td><p><code>emails[].type</code></p></td><td><p><code>string</code></p></td><td>The type of the email account. If set to <code>custom</code>, <code>customType</code> must also be set.<br><br>Acceptable values: <code>custom</code>, <code>home</code>, <code>other</code>, <code>work</code>.</td></tr></tbody></table>

`externalIds`

``value (`Value` format)``

The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size is 2KB.

**Fields**

`string`

If the external ID `type` is `custom`, this property contains the custom value and must be set.

`externalIds[].type`

`string`

The type of external ID. If set to `custom`, `customType` must also be set.  
  
Acceptable values: `account`, `custom`, `customer`, `login_id`, `network`, `organization`.

`externalIds[].value`

`string`

The value of the external ID. `relations`

``value (`Value` format)``

The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB. For more information, see [Manage user accounts](../../../v1/guides/manage-users.md#user-relationships).

**Fields**

`string`

If the relationship `type` is `custom`, this property contains the custom value and must be set.

`relations[].type`

`string`

The type of relationship. If set to `custom`, `customType` must also be set.  
  
Acceptable values:
- `admin_assistant`
- `assistant`
- `brother`
- `child`
- `custom`
- `domestic_partner`
- `dotted_line_manager`
- `exec_assistant`
- `father`
- `friend`
- `manager`
- `mother`
- `parent`
- `partner`
- `referred_by`
- `relative`
- `sister`
- `spouse`

`relations[].value`

`string`

The email address of the person the user is related to. `aliases[]`

`string`

Output only. The list of the user's alias email addresses.

`isMailboxSetup`

`boolean`

Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license.

`customerId`

`string`

Output only. The customer ID to [retrieve all account users](../../../v1/guides/manage-users.html.md#get_all_users).  
You can use the alias `my_customer` to represent your account's `customerId`.  
As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](./users/list.md) request.

`addresses`

``value (`Value` format)``

The list of the user's addresses. The maximum allowed data size is 10KB.

**Fields**

`string`

Country.

`addresses[].countryCode`

`string`

The country code. Uses the [ISO 3166-1](http://www.iso.org/iso/iso-3166-1_decoding_table) standard.

`addresses[].customType`

`string`

If the address `type` is `custom`, this property contains the custom value and must be set.

`addresses[].extendedAddress`

`string`

For extended addresses, such as an address that includes a sub-region.

`addresses[].formatted`

`string`

A full and unstructured postal address. This is not synced with the structured address fields. Includes the following attributes: street address, P.O. box, city, state/province, ZIP/postal code, country/region.

`addresses[].locality`

`string`

The town or city of the address.

`addresses[].poBox`

`string`

The post office box, if present.

`addresses[].postalCode`

`string`

The ZIP or postal code, if applicable.

`addresses[].primary`

`boolean`

If this is the user's primary address. The addresses list may contain only one primary address.

`addresses[].region`

`string`

The abbreviated province or state.

`addresses[].sourceIsStructured`

`boolean`

Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported.

`addresses[].streetAddress`

`string`

The street address, such as `1600 Amphitheatre Parkway`. Whitespace within the string is ignored; however, newlines are significant.

`addresses[].type`

`string`

The address type. If set to `custom`, `customType` must also be set.  
  
Acceptable values: `custom`, `home`, `other`, `work`. `organizations`

``value (`Value` format)``

The list of organizations the user belongs to. The maximum allowed data size is 10KB.

**Fields**

`string`

The cost center of the user's organization.

`organizations[].customType`

`string`

If the value of type is custom, this property contains the custom type.

`organizations[].department`

`string`

Specifies the department within the organization, such as `sales` or `engineering`.

`organizations[].description`

`string`

The description of the organization.

`organizations[].domain`

`string`

The domain the organization belongs to.

`organizations[].fullTimeEquivalent`

`integer`

The full-time equivalent millipercent within the organization (100000 = 100%).

`organizations[].location`

`string`

The physical location of the organization. This does not need to be a fully qualified address.

`organizations[].name`

`string`

The name of the organization.

`organizations[].primary`

`boolean`

Indicates if this is the user's primary organization. A user may only have one primary organization.

`organizations[].symbol`

`string`

Text string symbol of the organization. For example, the text symbol for Google is `GOOG`.

`organizations[].title`

`string`

The user's title within the organization. For example, `member` or `engineer`.

`organizations[].type`

`string`

The type of organization.  
  
Acceptable values: `domain_only`, `school`, `unknown`, `work`. `lastLoginTime`

`string`

Output only. The last time the user logged into the user's account. The value is in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) date and time format. The time is the complete date plus hours, minutes, and seconds in the form `YYYY-MM-DDThh:mm:ssTZD`. For example, `2010-04-05T17:30:04+01:00`.

`phones`

``value (`Value` format)``

A list of the user's phone numbers. The maximum allowed data size is 1KB.

**Fields**

`string`

If the phone number `type` is `custom`, this property contains the custom value and must be set.

`phones[].primary`

`boolean`

If `true`, this is the user's primary phone number. A user may only have one primary phone number.

`phones[].type`

`string`

The type of phone number. If set to `custom`, `customType` must also be set.  
  
Acceptable values: `assistant`, `callback`, `car`, `company_main`, `custom`, `grand_central`, `home`, `home_fax`, `isdn`, `main`, `mobile`, `other`, `other_fax`, `pager`, `radio`, `telex`, `tty_tdd`, `work`, `work_fax`, `work_mobile`, `work_pager`.

`phones[].value`

`string`

A human-readable phone number. It may be in any telephone number format. `suspensionReason`

`string`

Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`.

`thumbnailPhotoUrl`

`string`

Output only. The URL of the user's profile photo. The URL might be temporary or private.

`languages`

``value (`Value` format)``

The list of the user's languages. The maximum allowed data size is 1KB.

**Fields**

`string`

Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, `languageCode` can't be set.

`languages[].languageCode`

`string`

ISO 639 string representation of a language. See [Language Codes](../../../v1/languages.md) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause `SchemaException`. If this is set, `customLanguage` can't be set.

`languages[].preference`

`string`

Optional. If present, controls whether the specified `languageCode` is the user's preferred language. If `customLanguage` is set, this can't be set. Allowed values are `preferred` and `not_preferred`. `posixAccounts`

``value (`Value` format)``

The list of [POSIX](http://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.

**Fields**

`string`

A POSIX account field identifier.

`posixAccounts[].gecos`

`string`

The [GECOS (user information)](https://en.wikipedia.org/wiki/Gecos_field) for this account.

`posixAccounts[].gid`

`unsigned long`

The default [group ID](https://en.wikipedia.org/wiki/Group_identifier).

`posixAccounts[].homeDirectory`

`string`

The path to the home directory for this account.

`posixAccounts[].operatingSystemType`

`string`

The operating system type for this account.  
  
Acceptable values: `linux`, `unspecified`, `windows`.

`posixAccounts[].primary`

`boolean`

If this is user's primary account within the SystemId.

`posixAccounts[].shell`

`string`

The path to the login shell for this account.

`posixAccounts[].systemId`

`string`

System identifier for which account Username or Uid apply to.

`posixAccounts[].uid`

`unsigned long`

The POSIX compliant user ID.

`posixAccounts[].username`

`string`

The username of the account. `creationTime`

`string`

Output only. The time the user's account was created. The value is in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) date and time format. The time is the complete date plus hours, minutes, and seconds in the form `YYYY-MM-DDThh:mm:ssTZD`. For example, `2010-04-05T17:30:04+01:00`.

`nonEditableAliases[]`

`string`

Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain.

`sshPublicKeys`

``value (`Value` format)``

A list of SSH public keys.

**Fields**

`long`

An expiration time in microseconds since epoch.

`sshPublicKeys[].fingerprint`

`string`

A SHA-256 fingerprint of the SSH public key. (Read-only)

`sshPublicKeys[].key`

`string`

An SSH public key. `notes`

``value (`Value` format)``

Notes for the user as a nested object.

**Fields**

`string`

Content type of note, either plain text or HTML. Default is plain text.  
  
Acceptable values: `text_plain`, `text_html`.

`notes.value`

`string`

Contents of notes. `websites`

``value (`Value` format)``

The list of the user's websites.

**Fields**

`string`

If the website `type` is `custom`, this property contains the custom value and must be set.

`websites[].primary`

`boolean`

If `true`, this is the user's primary website.

`websites[].type`

`string`

The type or purpose of the website. For example, a website could be labeled as `home` or `blog`. Alternatively, an entry can have a `custom` type. If set to `custom`, `customType` must also be set.  
  
Acceptable values: `app_install_page`, `blog`, `custom`, `ftp`, `home`, `home_page`, `other`, `profile`, `reservations`, `resume`, `work`.

`websites[].value`

`string`

The URL of the website. `locations`

``value (`Value` format)``

The list of the user's locations. The maximum allowed data size is 10KB.

**Fields**

`string`

Required. Textual location. This is most useful for display purposes to concisely describe the location. For example, `Mountain View, CA` or `Near Seattle`.

`locations[].buildingId`

`string`

Building identifier.

`locations[].customType`

`string`

If the location `type` is `custom`, this property contains the custom value and must be set.

`locations[].deskCode`

`string`

Most specific textual code of individual desk location.

`locations[].floorName`

`string`

Floor name/number.

`locations[].floorSection`

`string`

Floor section. More specific location within the floor. For example, if a floor is divided into sections `A`, `B`, and `C`, this field would identify one of those values.

`locations[].type`

`string`

The location type. If set to `custom`, `customType` must also be set.  
  
Acceptable values: `custom`, `default`, `desk`. `includeInGlobalAddressList`

`boolean`

Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).

`keywords`

``value (`Value` format)``

The list of the user's keywords. The maximum allowed data size is 1KB.

**Fields**

`string`

If the keyword `type` is `custom`, this property contains the custom value and must be set.

`keywords[].type`

`string`

Each entry can have a type which indicates standard type of that entry.  
  
For example, keyword could be of type `occupation` or `outlook`. In addition to the standard type, an entry can have a `custom` type and can give it any name. If set to `custom`, `customType` must also be set.  
  
Acceptable values: `custom`, `mission`, `occupation`, `outlook`.

`keywords[].value`

`string`

Keyword. `deletionTime`

`string`

Output only. The time the user's account was deleted. The value is in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) date and time format. The time is the complete date plus hours, minutes, and seconds in the form `YYYY-MM-DDThh:mm:ssTZD`. For example `2010-04-05T17:30:04+01:00`.

`gender`

``value (`Value` format)``

A nested object containing the user's gender. Maximum allowed data size for this field is 1KB.

**Fields**

`string`

A human-readable string containing the proper way to refer to the profile owner by humans, for example "he/him/his" or "they/them/their."

`gender.customGender`

`string`

Name of a custom gender.

`gender.type`

`string`

The type of gender.  
  
Acceptable values:
- `female`
- `male`
- `other`
- `unknown`
`thumbnailPhotoEtag`

`string`

Output only. ETag of the user's photo (Read-only)

`ims`

``value (`Value` format)``

The user's Instant Messenger (IM) accounts. A user account can have multiple `ims` properties, but only one of these `ims` properties can be the primary IM contact.

**Fields**

`string`

If the protocol value is `custom_protocol`, this property holds the custom protocol's string.

`ims[].customType`

`string`

If the IM `type` is `custom`, this property contains the custom value and must be set.

`ims[].im`

`string`

The user's IM network ID.

`ims[].primary`

`boolean`

If this is the user's primary IM. Only one entry in the IM list can have a value of true.

`ims[].protocol`

`string`

An IM protocol identifies the IM network. The value can be a custom network or the standard network.  
  
Acceptable values:
- `aim`: AOL Instant Messenger protocol
- `custom_protocol`: A custom IM network protocol
- `gtalk`: Google Talk protocol
- `icq`: ICQ protocol
- `jabber`: Jabber protocol
- `msn`: MSN Messenger protocol
- `net_meeting`: Net Meeting protocol
- `qq`: QQ protocol
- `skype`: Skype protocol
- `yahoo`: Yahoo Messenger protocol

`ims[].type`

`string`

The type of IM account. If set to `custom`, `customType` must also be set.  
  
Acceptable values: `custom`, `home`, `other`, `work`. `customSchemas`

``value (`Value` format)``

Custom fields of the user. The key is a `schemaName` and its values are `'fieldName': 'field_value'`.

- `customSchemas.(key)` is a nested object.
- `customSchemas.(key).(key)` can be any value.
`isEnrolledIn2Sv`

`boolean`

Output only. Is enrolled in 2-step verification (Read-only)

`isEnforcedIn2Sv`

`boolean`

Output only. Is 2-step verification enforced (Read-only)

`archived`

`boolean`

Indicates if user is archived.

`orgUnitPath`

`string`

The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).

`recoveryEmail`

`string`

Recovery email of the user.

`recoveryPhone`

`string`

Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.

`isGuestUser`

`boolean`

Immutable. Indicates if the inserted user is a guest.

`guestAccountInfo`

``object (`GuestAccountInfo`)``

Immutable. Additional guest-related metadata fields

## UserName

JSON representation

```
{
  "fullName": string,
  "familyName": string,
  "givenName": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fullName</code></td><td><p><code>string</code></p><p>The user's full name formed by concatenating the first and last name values.</p></td></tr><tr><td><code>familyName</code></td><td><p><code>string</code></p><p>The user's last name. Required when creating a user account.</p></td></tr><tr><td><code>givenName</code></td><td><p><code>string</code></p><p>The user's first name. Required when creating a user account.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The user's display name. Limit: 256 characters.</p></td></tr></tbody></table>

## GuestAccountInfo

Account info specific to Guest users.

JSON representation

```
{
  "primaryGuestEmail": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>primaryGuestEmail</code></td><td><p><code>string</code></p><p>Immutable. The guest's external email.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>createGuest</h3></td><td>Create a guest user with access to a <a href="https://support.google.com/a/answer/16558545">subset of Workspace capabilities</a>.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a user.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a user.</td></tr><tr><td><h3>insert</h3></td><td>Creates a user.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a paginated list of either deleted users or all users in a domain.</td></tr><tr><td><h3>makeAdmin</h3></td><td>Makes a user a super administrator.</td></tr><tr><td><h3>patch</h3></td><td>Updates a user using patch semantics.</td></tr><tr><td><h3>signOut</h3></td><td>Signs a user out of all web and device sessions and reset their sign-in cookies.</td></tr><tr><td><h3>undelete</h3></td><td>Undeletes a deleted user.</td></tr><tr><td><h3>update</h3></td><td>Updates a user.</td></tr><tr><td><h3>watch</h3></td><td>Watches for changes in users list.</td></tr></tbody></table>
