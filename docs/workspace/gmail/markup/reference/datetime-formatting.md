---
source: https://developers.google.com/workspace/gmail/markup/reference/datetime-formatting
root: workspace
fetched_at: 2026-04-23T15:29:08.581Z
---

# DateTime Formatting

[DateTime](./types/DateTime.md) values are expected to be in the ISO 8601 format, for example '2013-02-14T13:15:03-08:00' (YYYY-MM-DDTHH:mm:ssZ).

Below are examples for generating ISO 8601 datetime strings in a few popular programing languages.

### Java

```
Date date = new Date();
DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssZ");
String dateAsISOString = df.format(date);
```

### JavaScript

```
var d = new Date();
var date = d.toISOString();
```

### PHP

```
$objDateTime = new DateTime('NOW');
$isoDate = $objDateTime->format(DateTime::ISO8601);
```

### Python

```
from datetime import date
d = date.now()
date = d.isoformat()
```

### Ruby

```
require 'time'
d = Time.now
date = d.utc.iso8601
```

### Perl

```
my $now = time();
$date = time2isoz($now);
```

### C++

```
time_t now;
time(&now);
char buf[sizeof "2011-10-08T07:07:09Z"];
strftime(buf, sizeof buf, "%FT%TZ", gmtime(&now));
```
