---
source: https://developers.google.com/workspace/admin/admin-settings
root: workspace
fetched_at: 2026-04-23T15:23:20.857Z
---

# Admin Settings API overview

The Admin Settings API allows administrators of [Google Workspace](https://gsuite.google.com/) domains to retrieve and change the settings of their domains in the form of the Google Data API feeds.

These domain settings include many of the features available in the [Google Workspace Admin console](https://support.google.com/a/topic/2413312). Example uses of this API include creating a custom control panel or integrating Google Workspace domains into an existing legacy environment.

The Admin Settings API implements the [Google Data API](https://developers.google.com/gdata) protocol. The Google Data API conform to the Atom Publishing Protocol (AtomPub) publishing and editing model. The AtomPub HTTP requests use the Representational Set Transfer (RESTful) design approach to web services. For more information, see the [Google Data APIs Developer's Guide](https://developers.google.com/gdata/docs/developers-guide).

## Audience

This document is intended for developers who want to write client applications that can modify and retrieve information about Google Workspace domains. It provides examples of the basic Admin Settings API interactions using raw XML and HTTP.

This document assumes that you understand the general ideas behind the [the Google Data API protocol](https://developers.google.com/gdata/docs/2.0/basics), and that you are familiar with the Google Workspace Admin console. For more information about the Admin console, see [Use your Admin console](https://support.google.com/a/topic/2413312).

## Get Started

To begin using the Admin Settings API, first set up your account.

### Create an account

The Admin Settings API is enabled for Google Workspace accounts. Sign up for a [Google Workspace account](https://gsuite.google.com/) for testing purposes. The Admin Settings service uses [Google Accounts](https://www.google.com/accounts/Login), so if you already have an account on a Google Workspace domain, you're all set.

### About the Admin Settings API feed types

The Admin Settings API lets you manage these categories of domain settings:

[Single Sign-On settings](#manage_single_sign-on_settings)

SAML-based Single Sign-On (SSO) allows users to use the same login and password for both Google Workspace hosted services as well as other services you may be hosting within your organization. Specifically when using SSO, a hosted web application, such as Google Workspace, redirects users to your organization's identity provider to authenticate users when they sign in. For detailed information, see [Understanding SAML-based SSO for Google Workspace](https://support.google.com/a/answer/60224).

Configuring SSO involves entering the necessary information for the Google Workspace service to communicate with the identity provider that stores your users' login information, as well as setting up the links users should be sent to for logging in, logging out, and for changing their passwords. The Admin Settings API lets you update and retrieve these settings programmatically. Google uses your generated public key to verify this SSO request with your identity provider and that the private key SAML response was not modified during the network transmission.

For a short API specific summary of using the SSO settings, get your public key certificate from your identity provider, register the public key with Google, and set up your SAML-based SSO query settings. For error messages, see [Troubleshooting SSO](https://support.google.com/a/answer/2463723):

- Generate your keys -- With your identity provider, generate a set of public and private keys using either the DSA or RSA algorithms. The public key is in an X.509 formatted certificate. For more information about SAML-based Single Sign-On signing keys, see [Generating Keys and Certificates for Google Workspace Single Sign-On Service](https://support.google.com/a/answer/60224).
- Register with Google -- Use Admin Settings API's Single Sign-On settings to register your public key certificate with Google.
- Set up your SSO settings -- Use Admin Settings API's Single Sign-On settings to configure the settings used to communication with the domain's identity provider's servers.

[Gateway and routing settings](#manage_email_gateway_and_routing)

This feed lets domain administrators control routing of email for their domains.

The email routing operations allow administrators to specify the domain-level email routing settings. This is similar to the email routing functionality of the Admin console's Gmail settings. For more information, see [Email routing](https://support.google.com/a/bin/answer.py?answer=77182) and [email routing feature's dual delivery configuration](https://www.google.com/support/a/bin/answer.py?answer=77361).

### Sample of an Admin Settings API XML request and response

This document provides code examples of basic Admin Settings API requests and responses using raw XML and HTTP. This domain default language example shows the full XML and HTTP syntax for a request and response entry's body which is common to each operation:

To change domain's outbound email gateway setting, send an HTTP `PUT` to the gateway feed URL:

```
https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/email/gateway
```

The domain default language `PUT` request AtomPub `entry` XML is:

```
<atom:entry xmlns:atom='http://www.w3.org/2005/Atom'
  xmlns:apps='http://schemas.google.com/apps/2006'>
  <apps:property name='smartHost' value='smtp.out.domain.com' />
  <apps:property name='smtpMode' value='SMTP' />
</atom:entry>
```

Except for the operation-specific properties and values, the `atom:property` elements represents a single key-value pair containing information about a property that you want to retrieve or update. These are common to all Admin Settings API request bodies.

The domain default language response `entry` element returns the `smartHost` and `smtpMode` properties along with the XML syntax common to all Admin Settings API response bodies:

```
<?xml version='1.0' encoding='UTF-8'?>
<entry xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
<id>https://apps-apis.google.com/a/feeds/domain/2.0/domainName/email/gateway</id>
<updated>2008-12-17T23:59:23.887Z</updated>
<link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/domain/
  2.0/domainName/email/gateway'/>
<link rel='edit' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/domain/
  2.0/domainName/email/gateway'/>
<apps:property name='smartHost' value='smtp.out.domain.com' />
<apps:property name='smtpMode' value='SMTP' />
</entry>
```

## Manage Single Sign-On settings

The Google Workspace Single Sign-On feature (SSO) lets users log on to multiple services while only having to enter a login and password once. This password is stored by the domain's identity provider, not by Google Workspace. For more information, see the [Help Center's SSO page](https://support.google.com/a/answer/60224). The following sections demonstrate the XML format used for Single Sign-On settings.

### Retrieve Single Sign-On settings

To retrieve Single Sign-On settings, send an HTTP `GET` to the SSO general feed URL, and include an `Authorization` header as described in [Authenticating to the Admin Settings service](https://developers.google.com/workspace/admin/admin-settings/auth). And, for error messages, see [Troubleshooting SSO](https://support.google.com/a/answer/2463723):

```
https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/sso/general
```

This operation has no parameters in the request body.

A successful response returns an HTTP `200 OK` status code, along with an AtomPub feed with the domain's SSO settings.

The GET response XML returns the `samlSignonUri`, `samlLogoutUri`, `changePasswordUri`, `enableSSO`, `ssoWhitelist`, and `useDomainSpecificIssuer` properties:

```
<?xml version='1.0' encoding='UTF-8'?>
<entry xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
<apps:property name='samlSignonUri' value='http://www.example.com/sso/signon'/>
...
<apps:property name='samlLogoutUri' value='http://www.example.com/sso/logout'/>
<apps:property name='changePasswordUri' value='http://www.example.com/sso/changepassword'/>
<apps:property name='enableSSO' value='true'/>
<apps:property name='ssoWhitelist' value='CIDR formatted IP address'/>
<apps:property name='useDomainSpecificIssuer' value='false'/>
</entry>
```

The properties include:

samlSignonUri

The identity provider's URL where Google Workspace sends the SAML request for user authentication.

samlLogoutUri

The address that users will be sent to when they log out of the web application.

changePasswordUri

The address that users will be sent to when they want to change their SSO password for the web application.

enableSSO

Enables SAML-based SSO for this domain. If you have previously configured SSO settings, and you have subsequently set `enableSSO` to `enableSSO=false`, the settings you have previously entered are still saved.

ssoWhitelist

A ssoWhitelist is a network mask IP address in Classless Inter-Domain Routing (CIDR) format. The ssoWhitelist determines which users sign in using SSO and which users sign in using the Google Workspace account authentication page. If no masks are specified, all users will sign in using SSO. For more information, see [How do network masks work](https://support.google.com/a/answer/60224).

useDomainSpecificIssuer

A domain specific issuer can be used in the SAML request to the identity provider. Though not necessary for most SSO deployments, this feature is useful in large companies using a single identity provider to authenticate an entire organization with multiple subdomains. Giving the specific domain issuer determines which subdomain to associate with the request. For more information, see [How does the Issuer element in the SAML request work?](https://support.google.com/a/answer/60224)

If your request fails for some reason, a different status code is returned. For more information about the Google Data API status codes, see [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

### Update Single Sign-On settings

To update a domain's SSO settings, first retrieve the SSO settings using the [Retrieve Single Sign-On settings](#retrieve_single_sign-on_settings) operation, modify it, and then send a `PUT` request to the SSO feed URL. Be sure the `<id>` value is in your updated entry exactly matches the `<id>` of the existing entry. Include an `Authorization` header as described in [Authenticating to the Admin Settings API service](https://developers.google.com/workspace/admin/admin-settings/auth). And, for error messages, see [Troubleshooting SSO](https://support.google.com/a/answer/2463723).

When updating Single Sign-On settings, send an HTTP PUT to the SSO general feed URL:

```
https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/sso/general
```

The XML body of the `PUT` request is:

```
<atom:entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
<apps:property name='enableSSO' value='false' />
<apps:property name='samlSignonUri' value='http://www.example.com/sso/signon' />
<apps:property name='samlLogoutUri' value='http://www.example.com/sso/logout' />
<apps:property name='changePasswordUri' value='http://www.example.com/sso/changepassword' />
<apps:property name='ssoWhitelist' value='127.0.0.1/32' />
<apps:property name='useDomainSpecificIssuer' value='false'/>
</atom:entry>
```

A successful response returns an HTTP `200 OK` status code, along with an AtomPub feed with the SSO settings.

The `PUT` response XML is:

```
<?xml version='1.0' encoding='UTF-8'?>
<entry xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
...
<apps:property name='samlSignonUri' value='http://www.example.com/sso/signon'/>
<apps:property name='samlLogoutUri' value='http://www.example.com/sso/logout'/>
<apps:property name='changePasswordUri' value='http://www.example.com/sso/changepassword'/>
<apps:property name='enableSSO' value='false'/>
<apps:property name='ssoWhitelist' value='127.0.0.1/32'/>
<apps:property name='useDomainSpecificIssuer' value='false'/>
</entry>
```

If your request fails for some reason, a different status code is returned. For more information about the Google Data API status codes, see [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

Changes to Single Sign-On settings are disallowed when the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448). Requests will fail with `errorCode="1811"` and `reason="LegacyInboundSsoChangeNotAllowedWithMultiPartyApproval"`.

### Retrieve the Single Sign-On signing key

To retrieve the Single Sign-On signing key, send an HTTP `GET` to the SSO signing key feed URL, and include an `Authorization` header as described in [Authenticating to the Admin Settings service](https://developers.google.com/workspace/admin/admin-settings/auth). And, for error messages, see [Troubleshooting SSO](https://support.google.com/a/answer/2463723):

```
https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/sso/signingkey
```

This operation has no parameters in the request body.

A successful response returns an HTTP `200 OK` status code, along with an AtomPub feed with the signing key.

The `GET` response XML returns the `signingKey` property:

```
<?xml version='1.0' encoding='UTF-8'?>
<entry xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
...
<apps:property name='signingKey' value='yourBase64EncodedPublicKey'/>
</entry>
```

If your request fails for some reason, a different status code is returned. For more information about the Google Data API status codes, see [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

### Update the Single Sign-On signing key

To update a domain's SSO signing key, first retrieve the signing key using the [Retrieve Single Sign-On signing key](#retrieve_the_single_sign-on_signing_key) operation, modify it, and then send a `PUT` request to the SSO signing key feed URL. Be sure the `<id>` value is in your updated entry exactly matches the `<id>` of the existing entry. For more information about SAML-based Single Sign-On signing keys, see [Generating Keys and Certificates for Google Workspace Single Sign-On Service](https://support.google.com/a/answer/60224).

When updating Single Sign-On signing key, send an HTTP `PUT` to the SSO signing key feed URL:

```
https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/sso/signingkey
```

The `PUT` request XML is:

```
<atom:entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps="http://schemas.google.com/apps/2006">
<apps:property name='signingKey' value='yourBase64EncodedPublicKey'/>
</atom:entry>
```

Changes to Single Sign-On settings are disallowed when the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448). Requests will fail with `errorCode="1811"` and `reason="LegacyInboundSsoChangeNotAllowedWithMultiPartyApproval"`.

## Manage email gateway and routing

The outbound email gateway section shows how the Admin Settings API supports the outbound routing of mail from users in your domain. The email routing section shows how to route messages to another mail server.

### Retrieve outbound email gateway settings

To retrieve outbound email gateway settings, send an HTTP `GET` to the gateway feed URL, and include an `Authorization` header as described in [Authenticating to the Admin Settings service](https://developers.google.com/workspace/admin/admin-settings/auth):

```
https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/email/gateway
```

This operation has no parameters in the request body.

A successful response returns an HTTP 200 OK status code, along with an AtomPub feed with the email gateway status information.

The `GET` response returns the `smartHost` and `smtpMode` properties. For more information about these properties, see [Update outbound email gateway settings](#update_outbound_email_gateway_settings).

An example of a possible response is:

```
<?xml version='1.0' encoding='UTF-8'?>
<entry xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
...
<apps:property name='smartHost' value='smtpout.domain.com'/>
<apps:property name='smtpMode' value='SMTP'/>
</entry>
```

If your request fails for some reason, a different status code is returned. For more information about the Google Data API status codes, see [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

### Update outbound email gateway settings

To update a domain's outbound email gateway setting, send an HTTP `PUT` request to the gateway feed URL:

```
https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/email/gateway
```

The `PUT` request XML is:

```
<atom:entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps="http://schemas.google.com/apps/2006">
<apps:property name='smartHost' value='smtp.out.domain.com' />
<apps:property name='smtpMode' value='SMTP' />
</atom:entry>
```

The request properties are:

smartHost

Either the IP address or hostname of your SMTP server. Google Workspace routes outgoing mail to this server.

smtpMode

The default value is SMTP. Another value, SMTP\_TLS, secures a connection with TLS when delivering the message.

A successful response returns an HTTP `200 OK` status code, along with the AtomPub feed with the email gateway settings status.

If your request fails for some reason, a different status code is returned. For more information about the Google Data API status codes, see [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

### Manage email routing settings

First, create an XML request:

```
<atom:entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps="http://schemas.google.com/apps/2006">
<apps:property name='routeDestination' value='route-smtp.domain.com'/>
<apps:property name='routeRewriteTo' value='true'/>
<apps:property name='routeEnabled' value='true'/>
<apps:property name='bounceNotifications' value='true'/>
<apps:property name='accountHandling' value='can be either allAccounts | provisionedAccounts | unknownAccounts'/>
</atom:entry>
```

The request properties are:

routeDestination

This destination is the hostname or IP address of the SMTP-In mail server where the email is being routed. The hostname or IP address must resolve for Google. For more details on resolving mail host names, see [Pilot Google Workspace with email routing](https://support.google.com/a/bin/answer.py?answer=77183).

routeRewriteTo

If true, the message's SMTP envelope's `to:` field is changed to the destination hostname (user@destination's hostname), and the message is delivered to this user address on the destination mail server. If `false`, the email is delivered to the original message's `to:` email address (user@original hostname) on the destination mail server. This is similar to the Admin console's 'Change SMTP envelope' setting. For more information, see [Domain settings for email routing](https://support.google.com/a/bin/answer.py?answer=77003).

routeEnabled

If `true`, the email routing functionality is enabled. If `false`, the functionality is disabled.

bounceNotifications

If `true`, Google Workspace is enabled to send bounce notifications to the sender when a delivery fails.

accountHandling

This setting determines how different types of users in the domain are affected by email routing:
- `allAccounts` -- Deliver all email to this destination.
- `provisionedAccounts` -- Deliver mail to this destination if the user exists in Google Workspace.
- `unknownAccounts` -- Deliver mail to this destination if the user doesn't exist in Google Workspace. This is similar to the Admin console's 'Delivery email for' setting. For more information about prerequisites and how to use mail routing, see [Domain settings for email routing](https://support.google.com/a/bin/answer.py?answer=77003).

To publish this request, send an HTTP `POST` to the email routing feed URL, and include an `Authorization` header as described in [Authenticating to the Admin Settings service](https://developers.google.com/workspace/admin/admin-settings/auth):

```
https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/emailrouting
```

A successful response returns an HTTP `200 OK` status code, along with an AtomPub feed with the archive information.

If your request fails for some reason, a different status code is returned. For more information about the Google Data API status codes, see [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

## Endpoints sunset on Oct 31, 2018

We deprecated the following endpoints as part of this [announcement](https://gsuiteupdates.googleblog.com/2018/10/gdata-admin-settings-api-shutdown-update.html). They were sunset on October 31, 2018 and are no longer available.

- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/general/defaultLanguage`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/general/organizationName`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/general/currentNumberOfUsers`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/general/maximumNumberOfUsers`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/accountInformation/supportPIN`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/accountInformation/customerPIN`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/accountInformation/adminSecondaryEmail`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/accountInformation/edition`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/accountInformation/creationTime`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/accountInformation/countryCode`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/appearance/customLogo`
- `https://apps-apis.google.com/a/feeds/domain/2.0/{domainName}/verification/mx`
