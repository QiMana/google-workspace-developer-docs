---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v1/domains.trafficStats
root: workspace
fetched_at: 2026-04-23T15:30:01.206Z
---

# REST Resource: domains.trafficStats

## Resource: TrafficStats

Email traffic statistics pertaining to a specific date.

JSON representation

```
{
  "name": string,
  "userReportedSpamRatio": number,
  "ipReputations": [
    {
      object (IpReputation)
    }
  ],
  "domainReputation": enum (ReputationCategory),
  "spammyFeedbackLoops": [
    {
      object (FeedbackLoop)
    }
  ],
  "spfSuccessRatio": number,
  "dkimSuccessRatio": number,
  "dmarcSuccessRatio": number,
  "outboundEncryptionRatio": number,
  "inboundEncryptionRatio": number,
  "deliveryErrors": [
    {
      object (DeliveryError)
    }
  ],
  "userReportedSpamRatioLowerBound": number,
  "userReportedSpamRatioUpperBound": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource name of the traffic statistics. Traffic statistic names have the form <code>domains/{domain}/trafficStats/{date}</code>, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example: domains/mymail.mydomain.com/trafficStats/20160807</p></td></tr><tr><td><code>userReportedSpamRatio</code></td><td><p><code>number</code></p><p>The ratio of user-report spam vs. email that was sent to the inbox. This is potentially inexact -- users may want to refer to the description of the interval fields <code>userReportedSpamRatioLowerBound</code> and <code>userReportedSpamRatioUpperBound</code> for more explicit accuracy guarantees. This metric only pertains to emails authenticated by <a href="http://www.dkim.org/">DKIM</a>.</p></td></tr><tr><td><code>ipReputations[]</code></td><td><p><code>object (<code>IpReputation</code>)</code></p><p>Reputation information pertaining to the IP addresses of the email servers for the domain. There is exactly one entry for each reputation category except <code>REPUTATION_CATEGORY_UNSPECIFIED</code>.</p></td></tr><tr><td><code>domainReputation</code></td><td><p><code>enum (<code>ReputationCategory</code>)</code></p><p>Reputation of the domain.</p></td></tr><tr><td><code>spfSuccessRatio</code></td><td><p><code>number</code></p><p>The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with <a href="http://www.openspf.org/">SPF</a>. Spoofed mail is excluded.</p></td></tr><tr><td><code>dkimSuccessRatio</code></td><td><p><code>number</code></p><p>The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with <a href="http://www.dkim.org/">DKIM</a>. Spoofed mail is excluded.</p></td></tr><tr><td><code>dmarcSuccessRatio</code></td><td><p><code>number</code></p><p>The ratio of mail that passed <a href="https://dmarc.org/">DMARC</a> alignment checks vs all mail received from the domain that successfully authenticated with either of <a href="http://www.openspf.org/">SPF</a> or <a href="http://www.dkim.org/">DKIM</a>.</p></td></tr><tr><td><code>outboundEncryptionRatio</code></td><td><p><code>number</code></p><p>The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS).</p></td></tr><tr><td><code>inboundEncryptionRatio</code></td><td><p><code>number</code></p><p>The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed <a href="http://www.openspf.org/">SPF</a> or <a href="http://www.dkim.org/">DKIM</a>.</p></td></tr><tr><td><code>deliveryErrors[]</code></td><td><p><code>object (<code>DeliveryError</code>)</code></p><p>Delivery errors for the domain. This metric only pertains to traffic that passed <a href="http://www.openspf.org/">SPF</a> or <a href="http://www.dkim.org/">DKIM</a>.</p></td></tr><tr><td><code>userReportedSpamRatioLowerBound</code></td><td><p><code>number</code></p><p>The lower bound of the confidence interval for the user reported spam ratio. If this field is set, then the value of <code>userReportedSpamRatio</code> is set to the midpoint of this interval and is thus inexact. However, the true ratio is guaranteed to be in between this lower bound and the corresponding upper bound 95% of the time. This metric only pertains to emails authenticated by <a href="http://www.dkim.org/">DKIM</a>.</p></td></tr><tr><td><code>userReportedSpamRatioUpperBound</code></td><td><p><code>number</code></p><p>The upper bound of the confidence interval for the user reported spam ratio. If this field is set, then the value of <code>userReportedSpamRatio</code> is set to the midpoint of this interval and is thus inexact. However, the true ratio is guaranteed to be in between this upper bound and the corresponding lower bound 95% of the time. This metric only pertains to emails authenticated by <a href="http://www.dkim.org/">DKIM</a>.</p></td></tr></tbody></table>

## IpReputation

IP Reputation information for a set of IPs in a specific reputation category.

JSON representation

```
{
  "reputation": enum (ReputationCategory),
  "ipCount": string,
  "sampleIps": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reputation</code></td><td><p><code>enum (<code>ReputationCategory</code>)</code></p><p>The reputation category this IP reputation represents.</p></td></tr><tr><td><code>ipCount</code></td><td><p><code>string (int64 format)</code></p><p>Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed <a href="http://www.openspf.org/">SPF</a> or <a href="http://www.dkim.org/">DKIM</a>.</p></td></tr><tr><td><code>sampleIps[]</code></td><td><p><code>string</code></p><p>A sample of IPs in this reputation category.</p></td></tr></tbody></table>

## ReputationCategory

The reputation of a domain or IP. For more information see "Domain & IP Reputation Dashboards" in the Dashboards section on the [Postmaster Tools help page page](https://support.google.com/mail/answer/6227174).

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>REPUTATION_CATEGORY_UNSPECIFIED</code></td><td>The default value which should never be used explicitly. This represents the state where no reputation information is available.</td></tr><tr><td><code>HIGH</code></td><td>Has a good track record of a very low spam rate, and complies with Gmail's sender guidelines. Mail will rarely be marked by the spam filter.</td></tr><tr><td><code>MEDIUM</code></td><td>Known to send good mail, but is prone to sending a low volume of spam intermittently. Most of the email from this entity will have a fair deliverability rate, except when there is a notable increase in spam levels.</td></tr><tr><td><code>LOW</code></td><td>Known to send a considerable volume of spam regularly, and mail from this sender will likely be marked as spam.</td></tr><tr><td><code>BAD</code></td><td>History of sending an enormously high volume of spam. Mail coming from this entity will almost always be rejected at SMTP level or marked as spam.</td></tr></tbody></table>

## FeedbackLoop

JSON representation

```
{
  "id": string,
  "spamRatio": number
}
```

## DeliveryError

Metric on a particular delivery error type.

JSON representation

```
{
  "errorClass": enum (DeliveryErrorClass),
  "errorType": enum (DeliveryErrorType),
  "errorRatio": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>errorClass</code></td><td><p><code>enum (<code>DeliveryErrorClass</code>)</code></p><p>The class of delivery error.</p></td></tr><tr><td><code>errorType</code></td><td><p><code>enum (<code>DeliveryErrorType</code>)</code></p><p>The type of delivery error.</p></td></tr><tr><td><code>errorRatio</code></td><td><p><code>number</code></p><p>The ratio of messages where the error occurred vs all authenticated traffic.</p></td></tr></tbody></table>

## DeliveryErrorClass

The class of delivery error.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DELIVERY_ERROR_CLASS_UNSPECIFIED</code></td><td>The default value which should never be used explicitly.</td></tr><tr><td><code>PERMANENT_ERROR</code></td><td>Delivery of message has been rejected.</td></tr><tr><td><code>TEMPORARY_ERROR</code></td><td>Temporary failure of message delivery to the recipient.</td></tr></tbody></table>

## DeliveryErrorType

The type of delivery error.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DELIVERY_ERROR_TYPE_UNSPECIFIED</code></td><td>The default value which should never be used explicitly.</td></tr><tr><td><code>RATE_LIMIT_EXCEEDED</code></td><td>The Domain or IP is sending traffic at a suspiciously high rate, due to which temporary rate limits have been imposed. The limit will be lifted when Gmail is confident enough of the nature of the traffic.</td></tr><tr><td><code>SUSPECTED_SPAM</code></td><td>The traffic is suspected to be spam, by Gmail, for various reasons.</td></tr><tr><td><code>CONTENT_SPAMMY</code></td><td>The traffic is suspected to be spammy, specific to the content.</td></tr><tr><td><code>BAD_ATTACHMENT</code></td><td>Traffic contains attachments not supported by Gmail.</td></tr><tr><td><code>BAD_DMARC_POLICY</code></td><td>The sender domain has set up a DMARC rejection policy.</td></tr><tr><td><code>LOW_IP_REPUTATION</code></td><td>The IP reputation of the sending IP is very low.</td></tr><tr><td><code>LOW_DOMAIN_REPUTATION</code></td><td>The Domain reputation of the sending domain is very low.</td></tr><tr><td><code>IP_IN_RBL</code></td><td>The IP is listed in one or more public <a href="http://en.wikipedia.org/wiki/DNSBL">Real-time Blackhole Lists</a>. Work with the RBL to get your IP delisted.</td></tr><tr><td><code>DOMAIN_IN_RBL</code></td><td>The Domain is listed in one or more public <a href="http://en.wikipedia.org/wiki/DNSBL">Real-time Blackhole Lists</a>. Work with the RBL to get your domain delisted.</td></tr><tr><td><code>BAD_PTR_RECORD</code></td><td>The sending IP is missing a <a href="https://support.google.com/domains/answer/3251147#ptr">PTR record</a>.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Get traffic statistics for a domain on a specific date.</td></tr><tr><td><h3>list</h3></td><td>List traffic statistics for all available days.</td></tr></tbody></table>
