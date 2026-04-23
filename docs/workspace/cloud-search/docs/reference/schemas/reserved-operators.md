---
source: https://developers.google.com/workspace/cloud-search/docs/reference/schemas/reserved-operators
root: workspace
fetched_at: 2026-04-23T15:26:20.746Z
---

# Reserved and common search operators

This document lists the *reserved* and common search operators available within Google Cloud Search. *Reserved* operators have Google Cloud Search-specific use and cannot be used in your schema. *Common* operators are common to other Google Workspace apps, such as Gmail, but can be used in your schema. Be cautious when using common operators, because users who are familiar with their use in other apps might be confused by a different implementation in Cloud Search.

## Reserved operators

You cannot use any of the following operators in your schema:

| Operator | Definition |
| --- | --- |
| `source` | Find content from a particular product or data source |
| `site` | Find content from a particular site. |
| `inurl` | Find content from a particular url. |
| `contenttype` | Find particular types of content, such as documents, spreadsheets, presentations, images, folders, and attachments. |
| `mimetype` | Finds content based on the original mimetype. |
| `type` | Find particular types of content, such as documents, spreadsheets, presentations, images, folders, and attachments. |
| `owner` | Find content you own or that’s been shared with you. For content originating from third party repositories, the only valid value is `owner:me`. For Google Workspace content, you can also use owner:*identity* where *identity* can be the owner's name, username, or email address. |
| `from` | Find content from a specific person who sent or created the content. This operator is used as an alias for `owner`. |
| `before` | Find content modified before a certain date, using the format YYYY/MM/DD. |
| `after` | Find content modified on or after a certain date, using the format YYYY/MM/DD. |
| `createddatetimestampbefore` | Find content created before a certain date, using the format YYYY/MM/DD. |
| `createddatetimestampafter` | Find content created on or after a certain date, using the format YYYY/MM/DD. |
| `itemsize` | Find content with a particular size specified in bytes. |
| `itemsizelessthan` | Find content less than a particular size specified in bytes. |
| `itemsizegreaterthan` | Find content greater than or equal to a particular size specified in bytes. |
| `in` | The use of this operator has not been determined. |
| `is` | The use of this operator has not been determined. |
| `has` | The use of this operator has not been determined. |
| `to` | The use of this operator has not been determined. |

The last four operators in the table are reserved, but do not yet have a specific definition.

For information on how users use a specific operator, refer to [Narrow your search](https://support.google.com/cloudsearch/answer/6172299).

## Common operators

You may declare the following operators in your schema. To minimize user confusion, declare these operators so their usage is consistent with the definition in the following table.

| Operator | Used by | Definition |
| --- | --- | --- |
| `size` | Gmail | Find items larger than the given size in bytes. |
| `larger` | Gmail | Find items larger than the given size in bytes. Synonymous with `size`. |
| `smaller` | Gmail | Find items smaller than a given size in bytes. |
| `older_than` | Gmail | Find items older than a given date. |
| `newer_than` | Gmail | Find items newer than a given date. |
| `subject` | Gmail | Find items with a specific subject or title. |
| `label` | Gmail | Find items with a given label. |
| `list` | Gmail | Find items from a given mailing list. |
| `cc` | Gmail | Find items with the given recipient in the `cc` field. |
| `bcc` | Gmail | Find items with the given recipient in the `bcc` field |
| `deliveredto` | Gmail | Find items delivered to the given email address. |
| `category` | Gmail | Find items with a given category. |
| `title` | Drive | Matches item with a given title. |
| `app` | Drive | Search for items that can only be opened by a specific app. |
| `mailthreadid` | Gmail | Matches items with the given thread ID. |
