---
source: https://developers.google.com/workspace/gmail/markup/actions/handling-action-requests
root: workspace
fetched_at: 2026-04-23T15:29:07.456Z
---

# Handle Action Requests

As described in [Declaring Actions](https://developers.google.com/workspace/gmail/markup/actions/declaring-actions), when a user interacts with an In-App Action, Google sends an HTTP request to a URL declared in the action.

The following example adds a `ConfirmAction` button to an email about an expense report:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EmailMessage",
  "potentialAction": {
    "@type": "ConfirmAction",
    "name": "Approve Expense",
    "handler": {
      "@type": "HttpActionHandler",
      "url": "https://myexpenses.com/approve?expenseId=abc123"
    }
  },
  "description": "Approval request for John's $10.13 expense for office supplies"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EmailMessage">
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ConfirmAction">
    <meta itemprop="name" content="Approve Expense"/>
    <div itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler">
      <link itemprop="url" href="https://myexpenses.com/approve?expenseId=abc123"/>
    </div>
  </div>
  <meta itemprop="description" content="Approval request for John's $10.13 expense for office supplies"/>
</div>
```

When the user clicks on the button, an HTTP request will be issued from Google to your service, recording the confirmation. Your service receives the following HTTP request from Google:

```
POST /approve?expenseId=abc123 HTTP/1.1
Host: your-domain.com
Authorization: Bearer AbCdEf123456
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/1.0 (KHTML, like Gecko; Gmail Actions)

confirmed=Approved
```

The rest of this page describes what the service at `https://your-domain.com/approve?expenseId=abc123` needs to do to handle the action properly. This includes:

- Verifying the request
- Processing the payload
- Returning a response code

## Step 1: Verify the Request

The service at `https://your-domain.com/approve?expenseId=abc123` is encouraged to check:

- [Limited Use Access Token](https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens) - To protect against replay attacks.
- [User Agent](http://en.wikipedia.org/wiki/User_agent) - To make sure the request comes from Google.
- [Bearer Token](https://developers.google.com/workspace/gmail/markup/actions/verifying-bearer-tokens) - To guarantee the request coming from Google is intended to the service.

The User Agent for all Action requests is `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/1.0 (KHTML, like Gecko; Gmail Actions)`.

If all checks pass, the service can proceed to the next step.

## Step 2: Process the Action

The service should process the action as specified in the URL parameters as well as additional information collected from the user.

Additional information from the user resides in the request's body, and is encoded using the [x-www-form-urlecoded](https://en.wikipedia.org/wiki/Percent-encoding#The_application.2Fx-www-form-urlencoded_type) encoding. The information is set in properties whose names correspond with the properties of Action. For example, [ConfirmAction](https://developers.google.com/workspace/gmail/markup/reference/types/ConfirmAction) has the property `confirmed`.

## Step 3: Return a Response Code

Once the service processed and recorded the action successfully, it should return a response code `200 (OK)`. The following response codes can be used in error situations:

| Response Code | Treatment |
| --- | --- |
| 400 (Bad Request) | Google will fail the action. |
| 401 (Unauthorized) | Google will fail the action. |
| 404 (Not Found) | Google will fail the action. |
| 408 (Request Timeout) | Google will retry again later. |

In case of permanent failure, Google will tell the user that action has failed and that the user should follow alternative instructions inside the email.

## Further Reading

- [Securing Actions](https://developers.google.com/workspace/gmail/markup/actions/securing-actions)
