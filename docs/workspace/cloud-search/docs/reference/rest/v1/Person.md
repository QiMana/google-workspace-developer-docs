---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/Person
root: workspace
fetched_at: 2026-04-23T15:26:12.263Z
---

# Person

Object to represent a person.

JSON representation

```
{
  "name": string,
  "obfuscatedId": string,
  "personNames": [
    {
      object (Name)
    }
  ],
  "emailAddresses": [
    {
      object (EmailAddress)
    }
  ],
  "phoneNumbers": [
    {
      object (PhoneNumber)
    }
  ],
  "photos": [
    {
      object (Photo)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource name of the person to provide information about. See <a href="https://developers.google.com/people/api/rest/v1/people/get"><code>People.get</code></a> from the Google People API.</p></td></tr><tr><td><code>obfuscatedId</code></td><td><p><code>string</code></p><p>Obfuscated id of a person.</p></td></tr><tr><td><code>personNames[]</code></td><td><p><code>object (<code>Name</code>)</code></p><p>The person's name</p></td></tr><tr><td><code>emailAddresses[]</code></td><td><p><code>object (<code>EmailAddress</code>)</code></p><p>The person's email addresses</p></td></tr><tr><td><code>phoneNumbers[]</code></td><td><p><code>object (<code>PhoneNumber</code>)</code></p><p>The person's phone numbers</p></td></tr><tr><td><code>photos[]</code></td><td><p><code>object (<code>Photo</code>)</code></p><p>A person's read-only photo. A picture shown next to the person's name to help others recognize the person in search results.</p></td></tr></tbody></table>

## Name

A person's name.

JSON representation

```
{
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The read-only display name formatted according to the locale specified by the viewer's account or the <code>Accept-Language</code> HTTP header.</p></td></tr></tbody></table>

## EmailAddress

A person's email address.

JSON representation

```
{
  "emailAddress": string,
  "primary": boolean,
  "type": string,
  "customType": string,
  "emailUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>The email address.</p></td></tr><tr><td><code>primary</code></td><td><p><code>boolean</code></p><p>Indicates if this is the user's primary email. Only one entry can be marked as primary.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>The type of the email account. Acceptable values are: "custom", "home", "other", "work".</p></td></tr><tr><td><code>customType</code></td><td><p><code>string</code></p><p>If the value of type is custom, this property contains the custom type string.</p></td></tr><tr><td><code>emailUrl</code></td><td><p><code>string</code></p><p>The URL to send email.</p></td></tr></tbody></table>

## PhoneNumber

A person's Phone Number

JSON representation

```
{
  "phoneNumber": string,
  "type": enum (PhoneNumber.PhoneNumberType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>phoneNumber</code></td><td><p><code>string</code></p><p>The phone number of the person.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>PhoneNumber.PhoneNumberType</code>)</code></p></td></tr></tbody></table>

## PhoneNumber.PhoneNumberType

Phone number type enum.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>OTHER</code></td><td></td></tr><tr><td><code>MOBILE</code></td><td></td></tr><tr><td><code>OFFICE</code></td><td></td></tr></tbody></table>

## Photo

A person's photo.

JSON representation

```
{
  "url": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>url</code></td><td><p><code>string</code></p><p>The URL of the photo.</p></td></tr></tbody></table>
