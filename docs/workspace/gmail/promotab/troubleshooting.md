---
source: https://developers.google.com/workspace/gmail/promotab/troubleshooting
root: workspace
fetched_at: 2026-04-23T15:30:05.470Z
---

# Troubleshooting

## Account settings

Before you begin troubleshooting a problem, check your account-level settings. Be sure you've enabled the settings below in order to test the latest experiences in the Gmail Promotions tab. These are the default settings.

- **Images:** Always show.
- **Conversation view:** On.
- **Enable Bundling of Top Email:** On.

## Challenges with email construction

If you are having issues when building your email, the following sections may help:

### Can’t put code into the head

Depending upon how your email construction works, the system responsible for the deal/product in the body of the email is separate from what handles the HTML head (it may not know what deal to inject into the head). Feel free to insert part or all of the script tag in the body of the email, so that the part of the system handling the deal information can inject the entire script tag or the part containing the deal `<script>{"@type": "DiscountOffer", …}</script>` into the body.

### Script tags get stripped by your email service provider

Schema.org has a microdata way to annotate that may be allowed if your ESP won’t make an exception.

Instead of `<head><script>...</script></head>`, a microdata example could be anywhere in the html and look like this:

```
<div itemscope itemtype="http://schema.org/DiscountOffer">
  <meta itemprop="description" content="20% off" />
  <meta itemprop="discountCode" content="PROMO" />
  <meta itemprop="availabilityStarts" content="2018-01-01T08:00:00-07:00" />
  <meta itemprop="availabilityEnds" content="2018-04-30T23:59:59-07:00" />
</div>
<div itemscope itemtype="http://schema.org/PromotionCard">
  <meta itemprop="image" content="https://www.google.com/gmail-for-marketers/promo-tab/markup-tool/sample.png" />
</div>
```

This alternate method can also be tested in our [preview tool](./overview.md).

### Separate script tag for easier implementation

You can split the annotation to avoid sending old content or if features come from a content block. Place a portion of the script tag in the head and the rest in a block of the body.

Here is an example of placing only the alternate subject line in the head, with the badges, expiration date, and image preview of the annotation in the body of the email:

#### In the <head>

```
<script type="application/ld+json">
  [{
     "@context": "http://schema.org/",
     "@type": "EmailMessage",
     // An alternative subject line shown when deal badge or discount code is also displayed.
     "subjectLine": "Alternate Subject Line"
  }]
</script>
```

#### In the <body>

```
<script type="application/ld+json">
  [{
    "@context": "http://schema.org/",
    "@type": "DiscountOffer",
    "description": "20% Off",
    "discountCode": "PROMO",
    "availabilityStarts": "2019-01-01T08:00:00-07:00",
    "availabilityEnds": "2019-12-30T23:59:59-07:00"
  },{
     "@context": "http://schema.org/",
     "@type": "PromotionCard",
     "image": "https://www.google.com/gmail-for-marketers/promo-tab/markup-tool/sample.png"
  }]
</script>
```

## Challenges seeing or testing email

The following sections discuss common issues encountered when attempting to view or test email:

### Not seeing email bundles at all

- Make sure you are on a device with the latest version of the Gmail App. Refresh email by pulling down on the screen within the Promotions tab.
- Try restarting your device.
- Still not working? Try viewing on another device—for example, a tablet may have a different Gmail version and show the bundle differently.
- Only consumers see the email bundles. The experience does not impact Google Workspace users.

### Email not going into the Promotions tab

- Check if the email was sent from the usual subdomain marketing email are sent from. Sending from less recognized subdomains can confuse the Gmail tab classifier and prevent an email from being placed on the Promotions tab.
- Check to make sure your account has no email filters which are sending email to the primary tab.
- Send from separate sender subdomains to ensure email ends up in the correct tab. See [Bulk Senders Guidelines](https://support.google.com/mail/answer/81126) for more detail about the Gmail classifier.
- If you are using a promotabtesting@gmail.com account this is the intended behaviour for the first email. Please drag the email into the Promotions tab, and send an email from the same sender address, with a different subject line, to the testing account. You should now be able to visualize it.

### Seeing bundles, but not seeing your brand's annotated email in a bundle

- Check if the email is in the Gmail Promotions tab.
- Ensure the email has not yet been opened, and was not sent on a previous day.
- If email in a bundle is viewed on one device, then that email doesn't populate in a bundle again on another device. You must send a new test email to preview.
- We recommend creating multiple testing accounts if you want to visualize on multiple devices. One of the members of your team might open the email thus causing it not to populate in the bundle for the rest of the team.
- Make sure the annotation in the sent email’s code is correct (the expiration can cause email not to display if before the start date or expired).
- Be sure you are using the latest version of the Gmail app. Try viewing on another device—for example, a tablet may have a different version of Gmail app and show email differently.
- Refresh the Gmail app by pulling down the Gmail Promotions tab screen.
- Try restarting your device.
- You cannot use sensitive categories in the Gmail Promotions tab (for example, adult content or debt collection).

### Not seeing an image preview display when image is included in the annotation

- Check the script tag to ensure the correct URL is in your sent image.
- Refresh the Gmail app by pulling down the Gmail Promotions tab screen.
- If your image is considered to be a sensitive topic, the image may not be shown in the Gmail Promotions tab (for example, adult content or debt collection).

### Seeing bundle on one device but not another

- Make sure you are viewing from the same email account.
- If email is opened on one device first, it may change the ranking and not show in bundle in the other device.
