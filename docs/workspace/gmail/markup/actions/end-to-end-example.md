---
source: https://developers.google.com/workspace/gmail/markup/actions/end-to-end-example
root: workspace
fetched_at: 2026-04-23T15:29:07.652Z
---

# End-to-end example

This article shows how to build an App Engine app in Python that sends annotated emails to users asking to confirm a mailing list subscription directly from their inbox and collects the subscriptions in the Datastore.

## Prerequisites and project setup

This guide assumes you have already installed the [App Engine SDK](https://developers.google.com/appengine) and know how to create, run, and publish App Engine projects.

First, create a directory for your project. Put all of the files for your application in this directory.

Copy the following code to a file named `app.yaml` and replace the `{{ APPID }}` placeholder with your unique App Engine app id:

```
application: {{ APPID }}
version: 1
runtime: python27
api_version: 1
threadsafe: true

handlers:
- url: /.*
  script: main.app

libraries:
- name: jinja2
  version: latest
```

Create a file named `main.py` in your App Engine project folder and copy the following code to setup the handlers for collecting and listing subscriptions, and for sending annotated emails:

```
import webapp2

from emailsender import EmailSender
from subscribe import SubscribeHandler

app = webapp2.WSGIApplication([('/', SubscribeHandler), ('/email', EmailSender)], debug=True)
```

## Adding structured data to the email

Let's start with a very simple email asking the user to confirm a mailing list subscription:

```
<html>
  <head>
    <title>Please confirm your subscription to Mailing-List XYZ?</title>
  </head>
  <body>
    <p>
      Dear John, please confirm that you wish to be subscribed to the
      mailing list XYZ
    </p>
  </body>
</html>
```

You can add structured data in one of the supported formats ([JSON-LD](../reference/formats/json-ld.md) or [Microdata](../reference/formats/microdata.md)) to the `head` of the email to define the restaurant and add a [OneClickAction](../reference/one-click-action.md). Gmail supports the `OneClickAction` and shows a specific UI to users to allow them to confirm their subscription from their inbox.

Copy the following markup into a file named `mail_template.html`:

### JSON-LD

```
<html>
  <head>
  <title>Please confirm your subscription to Mailing-List XYZ?</title>
  </head>
  <body>
    <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "EmailMessage",
      "potentialAction": {
        "@type": "ConfirmAction",
        "name": "Confirm Subscription",
        "handler": {
          "@type": "HttpActionHandler",
          "url": "{{ confirm_url }}",
          "method": "http://schema.org/HttpRequestMethod/POST",
        }
      },
      "description": "Confirm subscription to mailing list XYZ"
    }
    </script>
    <p>
      Dear John, please confirm that you wish to be subscribed to the mailing list XYZ.
    </p>
  </body>
</html>
```

### Microdata

```
<html>
  <head>
    <title>Please confirm your subscription to Mailing-List XYZ?</title>
  </head>
  <body>
    <div itemscope itemtype="http://schema.org/EmailMessage">
      <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ConfirmAction">
        <meta itemprop="name" content="Approve Expense"/>
        <div itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler">
          <link itemprop="url" href="https://myexpenses.com/approve?expenseId=abc123"/>
          <meta itemprop="url" content="{{ confirm_url }}"/>
          <link itemprop="method" href="http://schema.org/HttpRequestMethod/POST"/>
        </div>
      </div>
      <meta itemprop="description" content="Approval request for John's $10.13 expense for office supplies"/>
    </div>
    <p>
      Dear John, please confirm that you wish to be subscribed to the mailing list XYZ.
    </p>
  </body>
</html>
```

The structured data above describes a mailing list called "XYZ" and a `ConfirmAction`. The handler for the action is a `HttpActionHandler` that sends POST requests to the URL specified in the `url` property.

## Sending subscription requests to the users

Copy the following code into a file named `emailsender.py` in the App Engine project folder:

```
import jinja2
import os
import webapp2

from google.appengine.api import mail
from google.appengine.api import users

from urlparse import urlparse

class EmailSender(webapp2.RequestHandler):

  def get(self):
    # require users to be logged in to send emails
    user = users.get_current_user()
    if not user:
      self.redirect(users.create_login_url(self.request.uri))
      return

    email = user.email()

    # The confirm url corresponds to the App Engine app url
    pr = urlparse(self.request.url)
    confirm_url = '%s://%s?user=%s' % (pr.scheme, pr.netloc, user.user_id())

    # load the email template and replace the placeholder with the confirm url
    jinja_environment = jinja2.Environment(
        loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))
    template = jinja_environment.get_template('mail_template.html')
    email_body = template.render({'confirm_url': confirm_url})

    message = mail.EmailMessage(
        sender = email,
        to = email,
        subject = 'Please confirm your subscription to Mailing-List XYZ',
        html = email_body)

    try:
      message.send()
      self.response.write('OK')
    except:
      self.error(500)
```

The `EmailSender` class requires the user to be logged-in so that their email address can be retrieved. Then, it loads the email body from `mail_template.html`, replaces the `confirm_url` placeholder in it with the root url of the App Engine app (`https://APP-ID.appspot.com`), and sends the email to the currently logged-in user as themselves.

## Collecting and listing subscriptions

Copy the following code into a file named `subscribe.py` in the App Engine project folder:

```
import webapp2

from emailsender import EmailSender
from google.appengine.ext import db

class SubscribeHandler(webapp2.RequestHandler):

  def post(self):
    user_id = self.request.get('user')

    # insert the subscription into the Datastore
    subscription = Subscription(user_id=user_id)
    subscription.put()

  def get(self):
    # retrieve up to 1000 subscriptions from the Datastore
    subscriptions = Subscription.all().fetch(1000)

    if not subscriptions:
      self.response.write('No subscriptions')
      return

    count = len(subscriptions)

    for s in subscriptions:
      self.response.write('%s subscribed<br/>' % (s.user_id))

    self.response.write('<br/>')
    self.response.write('%d subscriptions.' % (count))

class Subscription(db.Model):
    user_id = db.TextProperty(required=True)
```

The SubscribeHandler `class listens to both` POST `and` GET `requests sent to the app root url (`https://APP-ID.appspot.com`).`POST `requests are used by Gmail to insert new subscriptions including the` user\_id\` parameter that corresponds to the user, as in the following example:

```
https://subscribe.appspot.com/?user_id=123abcd
```

The request handler simply checks that the required user\_id is defined and then stores the subscription in the [Datastore](https://developers.google.com/appengine/docs/python/gettingstartedpython27/usingdatastore). This results in a `HTTP 200` response code being sent back to Gmail to signal the successful request. In case the request doesn't include the required field, the request handler will return a `HTTP 400` response code, signaling the invalid request.

`GET` requests to the app root url are used to list the subscriptions that have been collected. The request handler first fetches all subscriptions from the Datastore and then prints them in the page, together with a simple counter.

## Testing the app

[Deploy your app to App Engine](https://developers.google.com/appengine/docs/python/gettingstartedpython27/uploading) and visit `https://APP-ID.appspot.com/email` (replace `APP-ID` with your App Engine app id) to send the annotated email to yourself.

![Actions in Gmail](https://developers.google.com/static/workspace/gmail/markup/images/actions-one-click-action.png)

Once you have deployed your app and inserted some subscriptions, visit your app at `https://APP-ID.appspot.com` to get a page summarizing the subscriptions
