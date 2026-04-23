---
source: https://developers.google.com/workspace/gmail/markup/actions/declaring-actions
root: workspace
fetched_at: 2026-04-23T15:29:08.027Z
---

# Declare Actions

An Action in schema.org represents a verb or activity that can be performed on a piece of structured data. Multiple types of [actions](https://developers.google.com/workspace/gmail/markup/actions/actions-overview) are supported and they can all be defined with similar structured data.

## Go-To Actions

If you add markup to your content with schema.org entities, you can add Go-To actions for them. For example, to make an `EmailMessage` entity have a `ViewAction` Go-To link, populate the email's `potentialAction` property, as in the following example:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EmailMessage",
  "potentialAction": {
    "@type": "ViewAction",
    "target": "https://watch-movies.com/watch?movieId=abc123",
    "name": "Watch movie"
  },
  "description": "Watch the 'Avengers' movie online"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EmailMessage">
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ViewAction">
    <link itemprop="target" href="https://watch-movies.com/watch?movieId=abc123"/>
    <meta itemprop="name" content="Watch movie"/>
  </div>
  <meta itemprop="description" content="Watch the 'Avengers' movie online"/>
</div>
```

Note that the markup above is automatically ignored by other email clients that do not support schemas in emails.

## Mobile Deep Linking

Go-To actions can also link directly to content in native mobile apps on [Android](https://developer.android.com/training/app-indexing/deep-linking.html) and [iOS](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Inter-AppCommunication/Inter-AppCommunication.html#//apple_ref/doc/uid/TP40007072-CH6-SW1). To deep link to an app, include additional `target` URLs encoded with the `android-app://` and `ios-app://` schemes as shown below:

### JSON-LD

```
"target": [
  “<web url>”,
  “android-app://<android package name>/<scheme>/<host>/<path+query>”,
  “ios-app://<App store ID>/<scheme>/<host><path+query>"
]
```

### Microdata

```
<link itemprop="target" href="<web url>"/>
<link itemprop="target" href="android-app://<android package name>/<scheme>/<host>/<path+query>”/>
<link itemprop="target" href="ios-app://<App store ID>/<scheme>/<host>/<path+query>"/>
```

Extending the previous `EmailMessage` example:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EmailMessage",
  "name": "Watch movie",
  ... information about the movie ...
  "potentialAction": {
    "@type": "ViewAction",
    "target": [
      "https://watch-movies.com/watch?movieId=abc123",
      "android-app://com.watchmovies.app/http/watch-movies.com/watch?movieId=abc123",
      "ios-app://12345/movieapp/watch-movies.com/watch?movieId=abc123"
    ]
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EmailMessage">
  <meta itemprop="name" content="Watch movie"/>
  ... information about the movie ...
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ViewAction">
    <meta itemprop="target" content="https://watch-movies.com/watch?movieId=abc123"/>
    <meta itemprop="target" content="android-app://com.watchmovies.android/http/watch-movies.com/watch?movieId=abc123"/>
    <meta itemprop="target" content="ios://12345/movieapp/watch-movies.com/watch?movieId=abc123"/>
 </div>
</div>
```

If the user doesn't have your app, the action takes the user to the web URL you provide.

## In-App Actions

In-App Actions are handled in-place, inside Gmail, without sending the user to another website. In-App Actions are declared like [Go-To Actions](#go-to_actions), but contain extra information that makes it easy for user-agents (such as Gmail) to handle the action inline.

Instead of declaring an action with a `target`, you need to declare an `HttpActionHandler` for the action with the proper configuration.

For instance, you can add a confirm button to emails requiring users to approve, confirm, and acknowledge something. Once the user clicks on the button, an HTTP request will be issued from Google to your service, recording the confirmation. `ConfirmAction` can only be interacted with once.

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

## Expiring Actions

In many cases, actions are only relevant for a limited period of time. Actions associated to entities with known dates, like travel reservations, will automatically expire. Gmail doesn't display the action after the trip has passed.

Expirations can also be explicitly added to actions. For example, an action to clip a coupon or save an offer code might only be valid for a limited time. To set the time window for when an action is displayed, set the `startTime` and `endTime` properties of the action:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EmailMessage",
  "potentialAction": {
    "@type": "ConfirmAction",
    "name": "Save coupon",
    "handler":  {
       "@type": "HttpActionHandler",
       "url": "https://my-coupons.com/approve?couponId=abc123"
    },
    "startTime": "2015-06-01T12:00:00Z",
    "endTime": "2015-06-05T12:00:00Z"
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EmailMessage">
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ConfirmAction">
    <meta itemprop="name" content="Save coupon"/>
    <div itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler">
      <link itemprop="url" href="https://my-coupons.com/approve?couponId=abc123"/>
    </div>
    <meta itemprop="startTime" content="2015-06-01T12:00:00Z" />
    <meta itemprop="endTime" content="2015-06-05T12:00:00Z" />
  </div>
</div>
```

## Further Reading

For more details about Actions, see:

- [Handling Action Requests](https://developers.google.com/workspace/gmail/markup/actions/handling-action-requests)
- [Securing Actions](https://developers.google.com/workspace/gmail/markup/actions/securing-actions)
- [Android Deep Linking](https://developer.android.com/training/app-indexing/deep-linking.html)
- [iOS Deep Linking](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Inter-AppCommunication/Inter-AppCommunication.html#//apple_ref/doc/uid/TP40007072-CH6-SW1)
