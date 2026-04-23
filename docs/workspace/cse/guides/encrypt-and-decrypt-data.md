---
source: https://developers.google.com/workspace/cse/guides/encrypt-and-decrypt-data
root: workspace
fetched_at: 2026-04-23T15:27:03.401Z
---

# Encrypt & decrypt data

## Page Summary

- This guide outlines the process of encrypting and decrypting data using the Google Workspace Client-side Encryption API, leveraging a Key Access and Control List Service (KACLS).
- During encryption, the KACLS validates the user, encrypts the data encryption key (DEK) and other sensitive data, logs the operation, and returns an opaque binary object containing the encrypted DEK to Google Workspace for storage.
- For decryption, the KACLS validates the user, decrypts the DEK and associated data, verifies the resource name, performs a perimeter check, logs the operation, and returns the unwrapped DEK to Google Workspace.
- Before sharing encrypted files, ensure to allowlist any Identity Provider (IdP) services used by the intended recipients, which typically involves obtaining IdP details from their publicly available.well-known file or contacting their Google Workspace administrator.

This guide describes how encryption and decryption work using the Google Workspace Client-side Encryption API.

You must add to an allowlist any Identity Provider (IdP) services used by users sharing encrypted files. You can usually find the required IdP details in their publicly-available `.well-known` file; otherwise, contact the organization's Google Workspace administrator for their IdP details.

## Encrypt data

When a Google Workspace user requests to save or store client-side encrypted (CSE) data, Google Workspace sends a [`wrap`](https://developers.google.com/workspace/cse/reference/wrap) request to your Key Access Control List Service (KACLS) endpoint URL for encryption. In addition to optional security checks, such as perimeter and JWT claim-based checks, your KACLS must perform the following steps:

1. Validate the requesting user.
	- Validate both the [authentication token](https://developers.google.com/workspace/cse/reference/authentication-tokens) and [authorization token](https://developers.google.com/workspace/cse/reference/authorization-tokens).
		- Check that authorization and authentication tokens are for the same user by doing a case-insensitive match on the email claims.
		- When the authentication token contains the optional `google_email` claim, it must be compared against the email claim in the authorization token using a case-insensitive approach. Don't use the email claim within the authentication token for this comparison.
		- In scenarios where the authentication token lacks the optional `google_email` claim, the email claim within the authentication token should be compared with the email claim in the authorization token, using a case-insensitive method.
		- In scenarios where Google issues an authorization token for an email not associated with a Google Account, the `email_type` claim must be present. This forms a crucial part of the Guest Access feature, providing valuable information for KACLS to enforce additional security measures on external users.
		- Some examples of how a KACLS can use this information include:
				- To impose additional logging requirements.
				- To restrict the authentication token issuer to a dedicated Guest IdP.
				- To require additional claims on the authentication token.
				- If a customer has not configured Guest Access, then all requests where `email_type` is set to `google-visitor` or `customer-idp` can be rejected. Requests with an `email_type` of `google` or with an unset `email_type` should continue to be accepted.
		- When the authentication token contains the optional `delegated_to` claim, it must also contain the `resource_name` claim, and these two claims must be compared against the `delegated_to` and `resource_name` claims in the authorization token. The `delegated_to` claims should be compared using a case-insensitive approach, and the `resource_name` in the tokens should match the `resource_name` of the operation.
		- Check that the `role` claim in the authorization token is `writer` or `upgrader`.
		- Check that the `kacls_url` claim in the authorization token matches the current KACLS URL. This check allows detection of potential man-in-the-middle servers configured by insiders or rogue domain administrators.
		- Perform a perimeter check using both authentication and authorization claims.
2. Encrypt the following parts using an authenticated encryption algorithm:
	- Data Encryption Key (DEK)
		- The `resource_name` and `perimeter_id` values from the authorization token
		- Any additional sensitive data
3. Log the operation, including the user originating it, the `resource_name` and the reason passed in the request.
4. Return an opaque binary object to be stored by Google Workspace alongside the encrypted object and sent as-is in any subsequent key unwrapping operation. Or, serve a [structured error reply](https://developers.google.com/workspace/cse/reference/structured-errors).
	- The binary object should contain the only copy of the encrypted DEK, implementation specific data can be stored in it.

## Decrypt data

When a Google Workspace user requests to open client-side encrypted (CSE) data, Google Workspace sends an [`unwrap`](https://developers.google.com/workspace/cse/reference/unwrap) request to your KACLS endpoint URL for decryption. In addition to optional security checks, such as perimeter and JWT claim-based checks, your KACLS must perform the following steps:

1. Validate the requesting user.
	- Validate both the [authentication token](https://developers.google.com/workspace/cse/reference/authentication-tokens) and [authorization token](https://developers.google.com/workspace/cse/reference/authorization-tokens).
		- Check that authorization and authentication tokens are for the same user by doing a case-insensitive match on the email claims.
		- When the authentication token contains the optional `google_email` claim, it must be compared against the email claim in the authorization token using a case-insensitive approach. Don't use the email claim within the authentication token for this comparison.
		- In scenarios where the authentication token lacks the optional `google_email` claim, the email claim within the authentication token should be compared with the email claim in the authorization token, using a case-insensitive method.
		- In scenarios where Google issues an authorization token for an email not associated with a Google Account, the `email_type` claim must be present. This forms a crucial part of the Guest Access feature, providing valuable information for KACLS to enforce additional security measures on external users.
		- Some examples of how a KACLS can use this information include:
				- To impose additional logging requirements.
				- To restrict the authentication token issuer to a dedicated Guest IdP.
				- To require additional claims on the authentication token.
				- If a customer has not configured Guest Access, then all requests where `email_type` is set to `google-visitor` or `customer-idp` can be rejected. Requests with an `email_type` of `google` or with an unset `email_type` should continue to be accepted.
		- When the authentication token contains the optional `delegated_to` claim, it must also contain the `resource_name` claim, and these two claims must be compared against the `delegated_to` and `resource_name` claims in the authorization token. The `delegated_to` claims should be compared using a case-insensitive approach, and the `resource_name` in the tokens should match the `resource_name` of the operation.
		- Check that the `role` claim in the authorization token is `reader` or `writer`.
		- Check that the `kacls_url` claim in the authorization token matches the current KACLS URL. This allows detection of potential man-in-the-middle servers configured by insiders or rogue domain administrators.
2. Decrypt the following parts using an authenticated encryption algorithm:
	- Data Encryption Key (DEK)
		- The `resource_name` and `perimeter_id` values from the authorization token
		- Any additional sensitive data
3. Check that the `resource_name` in the authorization token and decrypted blob match.
4. Perform a perimeter check using both authentication and authorization claims.
5. Log the operation, including the user originating it, the `resource_name` and the reason passed in the request.
6. Return the unwrapped DEK or a [structured error reply](https://developers.google.com/workspace/cse/reference/structured-errors).
