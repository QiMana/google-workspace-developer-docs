---
source: https://developers.google.com/workspace/gmail/reactions/examples
root: workspace
fetched_at: 2026-04-23T15:30:06.042Z
---

# Email reaction examples

Here are several samples of valid and invalid email reaction messages.

## Valid multipart/alternative

Email reactions usually have three parts:

- `text/plain`: the plain text version of the message.
- `text/vnd.google.email-reaction+json`: the reaction part.
- `text/html`: the HTML version of the message.

Here's an example:

```
From: test@google.com
Message-ID: <884457408.1.1697791227669@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: multipart/alternative;
        boundary="----=_Part_0_2012232625.1697791227635"

------=_Part_0_2012232625.1697791227635
Content-Type: text/plain; charset=us-ascii
Content-Transfer-Encoding: 7bit

Text body content
------=_Part_0_2012232625.1697791227635
Content-Type: text/vnd.google.email-reaction+json; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

{"emoji":"=F0=9F=99=83","version":1}
------=_Part_0_2012232625.1697791227635
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

<h1>HTML body content</h1>
------=_Part_0_2012232625.1697791227635--
```

## Single valid body part

Email reactions can also just have a single body part like:

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

{"emoji":"=F0=9F=99=83","version":1}
```

Note that the `Content-Transfer-Encoding` can be any standard encoding:

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json
Content-Transfer-Encoding: base64

ewogICJlbW9qaSI6ICLwn46JIiwKICAidmVyc2lvbiI6IDEKfQ==
```

For binary encodings, like `base64`, the JSON must be encoded as UTF-8.

## Valid nested multipart/alternative in multipart/related

If the reaction is to a message that had inline attachments, it's possible to generate a message with a `multipart/related` body part that contains the attachments plus a `multipart/alternative` part like the previous example.

```
From: test@google.com
Message-ID: <913190639.2.1697793303663@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: multipart/related;
        boundary="----=_Part_0_2012232625.1697793303618"

------=_Part_0_2012232625.1697793303618
Content-Type: multipart/alternative;
        boundary="----=_Part_1_984213526.1697793303621"

------=_Part_1_984213526.1697793303621
Content-Type: text/plain; charset=us-ascii
Content-Transfer-Encoding: 7bit

Text body content
------=_Part_1_984213526.1697793303621
Content-Type: text/vnd.google.email-reaction+json
Content-Transfer-Encoding: base64

ewogICJlbW9qaSI6ICLwn46JIiwKICAidmVyc2lvbiI6IDEKfQ==
------=_Part_1_984213526.1697793303621
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

<h1>HTML body content</h1>
------=_Part_1_984213526.1697793303621--

------=_Part_0_2012232625.1697793303618
Content-Type: image/png
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="1x1.png"

iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMA
QObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=
------=_Part_0_2012232625.1697793303618--
```

(Note that the `multipart/related` body part should have other fields as specified by [RFC2387](https://datatracker.ietf.org/doc/html/rfc2387) but those are irrelevant for determining whether an email reaction is valid.)

## Invalid JSON format

The following reaction is invalid because the JSON is missing the closing brace:

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

{"emoji":"=F0=9F=99=83","version":1
```

The following reaction is invalid because the JSON has a trailing comma:

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

{"emoji":"=F0=9F=99=83","version":1,}
```

## Invalid version field

The following reaction is invalid because it's missing the `version` field:

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

{"emoji":"=F0=9F=99=83"}
```

The following reaction is invalid because the `version` field isn't `1`:

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

{"emoji":"=F0=9F=99=83","version":2}
```

## Invalid emoji field

The following reaction is invalid because the `emoji` field is empty:

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

{"emoji":"","version":1}
```

The following reaction is invalid because the `emoji` field doesn't contain a valid emoji.

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

{"emoji":"A","version":1}
```

The following reaction is invalid because the ❤ emoji is missing between the two zero-width joiner (ZWJ) characters. Note that the = character at the end of the first content line represents a soft line break in the Quoted-Printable encoding.

```
From: test+no-reply@google.com
Message-ID: <940553268.0.1697791227697@mail.google.com>
Subject: subject
MIME-Version: 1.0
In-Reply-To: <2938749223.1.39847234@mail.google.com>
Content-Type: text/vnd.google.email-reaction+json; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

{"emoji":"=F0=9F=91=A9=F0=9F=8F=BC=E2=80=8D=E2=80=8D=F0=9F=91=A8=F0=9F=8F=BE",=
"version":1}
```
