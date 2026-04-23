---
source: https://developers.google.com/workspace/gmail/markup/actions/verifying-bearer-tokens
root: workspace
fetched_at: 2026-04-23T15:29:07.779Z
---

# Verify Bearer Tokens

A `Bearer Token` is set in the `Authorization` header of every In-App Action HTTP Request. For example:

```
POST /approve?expenseId=abc123 HTTP/1.1
Host: your-domain.com
Authorization: Bearer AbCdEf123456
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/1.0 (KHTML, like Gecko; Gmail Actions)

confirmed=Approved
```

The string "AbCdEf123456" in the example above is the bearer authorization token. This is a cryptographic token produced by Google. All bearer tokens sent with actions have the `azp` (authorized party) field as `gmail@system.gserviceaccount.com`, with the `audience` field specifying the sender domain as a URL of the form `https://`. For example, if the email is from `noreply@example.com`, the audience is `https://example.com`.

If using bearer tokens, verify that the request is coming from Google and is intended for the the sender domain. If the token doesn't verify, the service should respond to the request with an HTTP response code `401 (Unauthorized)`.

Bearer Tokens are part of the OAuth V2 standard and widely adopted by Google APIs.

## Verifying Bearer Tokens

Services are encouraged to use the open source Google API Client library to verify Bearer tokens:

- **Java**: [https://github.com/google/google-api-java-client](https://github.com/google/google-api-java-client)
- **Python**: [https://github.com/google/google-api-python-client](https://github.com/google/google-api-python-client)
- **.NET**: [https://github.com/google/google-api-dotnet-client](https://github.com/google/google-api-dotnet-client)

### Java

```
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.apache.ApacheHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;

public class TokenVerifier {
    // Bearer Tokens from Gmail Actions will always be issued to this authorized party.
    private static final String GMAIL_AUTHORIZED_PARTY = "gmail@system.gserviceaccount.com";

    // Intended audience of the token, based on the sender's domain
    private static final String AUDIENCE = "https://example.com";

    public static void main(String[] args) throws GeneralSecurityException, IOException {
        // Get this value from the request's Authorization HTTP header.
        // For example, for "Authorization: Bearer AbCdEf123456" use "AbCdEf123456"
        String bearerToken = "AbCdEf123456";

        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new ApacheHttpTransport(), new JacksonFactory())
                .setAudience(Collections.singletonList(AUDIENCE))
                .build();

        GoogleIdToken idToken = verifier.verify(bearerToken);
        if (idToken == null || !idToken.getPayload().getAuthorizedParty().equals(GMAIL_AUTHORIZED_PARTY)) {
            System.out.println("Invalid token");
            System.exit(-1);
        }

        // Token originates from Google and is targeted to a specific client.
        System.out.println("The token is valid");

        System.out.println("Token details:");
        System.out.println(idToken.getPayload().toPrettyString());
    }
}
```

### Python

```
import sys

from oauth2client import client

# Bearer Tokens from Gmail Actions will always be issued to this authorized party.
GMAIL_AUTHORIZED_PARTY = 'gmail@system.gserviceaccount.com'

# Intended audience of the token, based on the sender's domain
AUDIENCE = 'https://example.com'

try:
  # Get this value from the request's Authorization HTTP header.
  # For example, for "Authorization: Bearer AbCdEf123456" use "AbCdEf123456"
  bearer_token = 'AbCdEf123456'

  # Verify valid token, signed by google.com, intended for a third party.
  token = client.verify_id_token(bearer_token, AUDIENCE)
  print('Token details: %s' % token)

  if token['azp'] != GMAIL_AUTHORIZED_PARTY:
    sys.exit('Invalid authorized party')
except:
  sys.exit('Invalid token')

# Token originates from Google and is targeted to a specific client.
print('The token is valid')
```
