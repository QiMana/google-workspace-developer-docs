---
source: https://developers.google.com/workspace/gmail/markup/reference/one-click-action
root: workspace
fetched_at: 2026-04-23T15:29:10.442Z
---

# One Click Actions

One-click actions allow users to perform operations directly from the inbox without having to leave Gmail. One-click actions are performed by declaring an `HttpActionHandler` with your service URL. For more details, refer to [Handling Action Requests](../actions/handling-action-requests.md).

![A Confirmation Button in Gmail](https://developers.google.com/workspace/gmail/markup/images/actions-one-click-action.png)  
One-click actions in Gmail.

## Use Cases

One Click actions currently supported in Gmail are:

- [ConfirmAction](#confirm_action)
- [SaveAction](#save_action)

## Confirm Action

You may add a one-click confirm button to emails requiring users to approve, confirm and acknowledge something. Once the user clicks on the button, an http request will be issued from Google to your service, recording the confirmation. `ConfirmAction` can only be interacted with **once**.

The following declaration adds a `ConfirmAction` button to an email about an expense report:

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

## Save Action

`SaveAction` can be used to describe interactions like saving a coupon or adding songs to the listen queue. `SaveAction` can only be interacted with **once**.

The following declaration adds a `SaveAction` button to an email about an offer:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EmailMessage",
  "potentialAction": {
    "@type": "SaveAction",
    "name": "Save Offer",
    "handler": {
      "@type": "HttpActionHandler",
      "url": "https://offers-everywhere.com/save?offerId=xyz789"
    }
  },
  "description": "$5 meal at Joe's Diner"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EmailMessage">
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/SaveAction">
    <meta itemprop="name" content="Save Offer"/>
    <div itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler">
      <link itemprop="url" href="https://offers-everywhere.com/save?offerId=xyz789"/>
    </div>
  </div>
  <meta itemprop="description" content="$5 meal at Joe's Diner"/>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

For properties available to these actions, refer to the documentation for the specific types [ConfirmAction](./types/ConfirmAction.md) and [SaveAction](./types/SaveAction.md).
