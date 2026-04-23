---
source: https://developers.google.com/workspace/cse/guides/overview
root: workspace
fetched_at: 2026-04-23T15:27:03.469Z
---

# Build a custom key service for client-side encryption

## Page Summary

- Google Workspace Client-side Encryption (CSE) allows you to encrypt your organization's data with your own keys, preventing Google servers from accessing or decrypting it.
- This API enables you to manage the encryption keys via an external key service, giving you control over data access.
- CSE encrypts files in the user's browser before they are stored in Google Drive, ensuring only authorized users with access to your external key service can decrypt them.
- When a file is encrypted, Google Workspace generates a Data Encryption Key (DEK), which is then encrypted by your external key service and stored with the encrypted data.
- To get started, you can configure your external key service and learn how to encrypt and decrypt data using the provided guides.

You can use your own encryption keys to encrypt your organization's data, instead of using the encryption that Google Workspace provides. With Google Workspace Client-side Encryption (CSE), file encryption is handled in the client's browser before it's stored in Google Drive's cloud-based storage. That way, Google servers can't access your encryption keys and, therefore, can't decrypt your data. For more details, see [About client-side encryption](https://support.google.com/a/answer/10741897#zippy=%2Cbasic-setup-steps-for-cse).

This API lets you control the top-level encryption keys that protect your data with a custom external key service. After you create an external key service with this API, Google Workspace administrators can connect to it and enable CSE for their users.

## Important terminology

Below is a list of common terms used in the Google Workspace Client-side Encryption API:

*Client-side encryption (CSE)*

Encryption that's handled in the client's browser before it's stored in cloud-based storage. This protects the file from being read by the storage provider. [Learn more](https://support.google.com/a/answer/10741897#zippy=%2Chow-is-cse-different-from-end-to-end-ee-encryption)

*Key Access Control List Service (KACLS)*

Your external key service that uses this API to control access to encryption keys stored in an external system.

*Identity Provider (IdP)*

The service that authenticates users before they can encrypt files or access encrypted files.

### Encryption & decryption

*Data Encryption Key (DEK)*

The key used by Google Workspace in the browser client to encrypt the data itself.

*Key Encryption Key (KEK)*

A key from your service used to encrypt a Data Encryption Key (DEK).

### Access control

*Access Control List (ACL)*

A list of users or groups that can open or read a file.

*Authentication JSON Web Token (JWT)*

Bearer token ([JWT: RFC 7519](https://tools.ietf.org/html/rfc7519)) issued by the identity provider (IdP) to attest a user's identity.

*Authorization JSON Web Token (JWT)*

Bearer token ([JWT: RFC 7519](https://tools.ietf.org/html/rfc7519)) issued by Google to verify that the caller is authorized to encrypt or decrypt a resource.

*JSON Web Key Set (JWKS)*

A read-only endpoint URL that points to a list of public keys used to verify JSON Web Tokens (JWT).

*Perimeter*

Additional checks performed on the authentication and authorization tokens within the KACLS for access control.

## Client-side encryption process

After an administrator enables CSE for their organization, users for whom CSE is enabled can choose to create encrypted documents using the Google Workspace collaborative content creation tools, like Docs and Sheets, or encrypt files they upload to Drive, such as PDFs.

After the user encrypts a document or file:

1. Google Workspace generates a DEK in the client browser to encrypt the content.
2. Google Workspace sends the DEK and authentication tokens to your third-party KACLS for encryption, using a URL you provide to the Google Workspace organization's administrator.
3. Your KACLS uses this API to encrypt the DEK, then sends the obfuscated, encrypted DEK back to Google Workspace.
4. Google Workspace stores the obfuscated, encrypted data in the cloud. Only users with access to your KACLS are able to access the data.

For more details, see [Encrypt and decrypt files](./encrypt-and-decrypt-data.md).

## Next steps

- Learn how to [configure your service](./configure-service.md).
- Learn how to [encrypt & decrypt data](./encrypt-and-decrypt-data.md).
