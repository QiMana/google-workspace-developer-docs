---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers
root: workspace
fetched_at: 2026-04-23T15:23:35.207Z
---

# REST Resource: customers

## Resource: Customer

JSON representation

```
{
  "id": string,
  "customerDomain": string,
  "kind": string,
  "etag": string,
  "alternateEmail": string,
  "customerCreationTime": string,
  "postalAddress": {
    object (CustomerPostalAddress)
  },
  "phoneNumber": string,
  "language": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. (Readonly)</p></td></tr><tr><td><code>customerDomain</code></td><td><p><code>string</code></p><p>The customer's primary domain name string. Do not include the <code>www</code> prefix when creating a new customer.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a customer. Value: <code>admin#directory#customer</code></p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>alternateEmail</code></td><td><p><code>string</code></p><p>The customer's secondary contact email address. This email address cannot be on the same domain as the <code>customerDomain</code></p></td></tr><tr><td><code>customerCreationTime</code></td><td><p><code>string</code></p><p>The customer's creation time (Readonly)</p></td></tr><tr><td><code>postalAddress</code></td><td><p><code>object (<code>CustomerPostalAddress</code>)</code></p><p>The customer's postal address information.</p></td></tr><tr><td><code>phoneNumber</code></td><td><p><code>string</code></p><p>The customer's contact phone number in <a href="https://en.wikipedia.org/wiki/E.164">E.164</a> format.</p></td></tr><tr><td><code>language</code></td><td><p><code>string</code></p><p>The customer's ISO 639-2 language code. See the <a href="https://developers.google.com/workspace/admin/directory/v1/languages">Language Codes</a> page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is <code>en</code>.</p></td></tr></tbody></table>

## CustomerPostalAddress

JSON representation

```
{
  "countryCode": string,
  "addressLine2": string,
  "region": string,
  "addressLine3": string,
  "locality": string,
  "postalCode": string,
  "addressLine1": string,
  "organizationName": string,
  "contactName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>countryCode</code></td><td><p><code>string</code></p><p>This is a required property. For <code>countryCode</code> information see the <a href="https://www.iso.org/iso/country_codes.htm">ISO 3166 country code elements</a>.</p></td></tr><tr><td><code>addressLine2</code></td><td><p><code>string</code></p><p>Address line 2 of the address.</p></td></tr><tr><td><code>region</code></td><td><p><code>string</code></p><p>Name of the region. An example of a region value is <code>NY</code> for the state of New York.</p></td></tr><tr><td><code>addressLine3</code></td><td><p><code>string</code></p><p>Address line 3 of the address.</p></td></tr><tr><td><code>locality</code></td><td><p><code>string</code></p><p>Name of the locality. An example of a locality value is the city of <code>San Francisco</code>.</p></td></tr><tr><td><code>postalCode</code></td><td><p><code>string</code></p><p>The postal code. A postalCode example is a postal zip code such as <code>10009</code>. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element.</p></td></tr><tr><td><code>addressLine1</code></td><td><p><code>string</code></p><p>A customer's physical address. The address can be composed of one to three lines.</p></td></tr><tr><td><code>organizationName</code></td><td><p><code>string</code></p><p>The company or company division name.</p></td></tr><tr><td><code>contactName</code></td><td><p><code>string</code></p><p>The customer contact's name.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Retrieves a customer.</td></tr><tr><td><h3>patch</h3></td><td>Patches a customer.</td></tr><tr><td><h3>update</h3></td><td>Updates a customer.</td></tr></tbody></table>
