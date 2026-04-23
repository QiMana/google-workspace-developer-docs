---
source: https://developers.google.com/workspace/docs/api/how-tos/named-ranges
root: workspace
fetched_at: 2026-04-23T15:27:08.196Z
---

# Work with named ranges

The Google Docs API lets you use *named ranges* to simplify some editing tasks.

When you create a named range, you identify a section of the document that you can reference later. The indexes of the named range are automatically updated as content is added to and removed from the document. This simplifies how you locate text for updating in the future, since you don't need to track the editing changes or search through the document. Instead, you can get an edit location by reading the named range and using its indexes.

For example, suppose you create a named range where a "product description" string must appear in a document:

![](https://developers.google.com/static/workspace/docs/api/images/named-range-screenshot.png)

This lets you replace the description: you just get the start and end indexes of the named range, and then update the text between those indexes with your new content.

The following example code shows how you might implement a helper function to replace contents of a named range in the first tab of the document, where the named range was previously created using the [`CreateNamedRangeRequest`](../reference/rest/v1/documents/request.md#createnamedrangerequest). To replace the named ranges from all tabs, this code can be augmented to iterate across all tabs. See [Work with Tabs](./tabs.md) for more information and sample code.

### Java

```
/** Replaces the text in existing named ranges. */
static void replaceNamedRange(Docs service, String documentId, String rangeName, String newText)
    throws IOException {
  // Fetch the document to determine the current indexes of the named ranges.
  Document document =
      service.documents().get(documentId).setIncludeTabsContent(true).execute();

  // Find the matching named ranges in the first tab of the document.
  NamedRanges namedRangeList =
      document.getTabs()[0].getDocumentTab().getNamedRanges().get(rangeName);
  if (namedRangeList == null) {
    throw new IllegalArgumentException("The named range is no longer present in the document.");
  }

  // Determine all the ranges of text to be removed, and at which indexes the replacement text
  // should be inserted.
  List<Range> allRanges = new ArrayList<>();
  Set<Integer> insertIndexes = new HashSet<>();
  for (NamedRange namedRange : namedRangeList.getNamedRanges()) {
    allRanges.addAll(namedRange.getRanges());
    insertIndexes.add(namedRange.getRanges().get(0).getStartIndex());
  }

  // Sort the list of ranges by startIndex, in descending order.
  allRanges.sort(Comparator.comparing(Range::getStartIndex).reversed());

  // Create a sequence of requests for each range.
  List<Request> requests = new ArrayList<>();
  for (Range range : allRanges) {
    // Delete all the content in the existing range.
    requests.add(
        new Request().setDeleteContentRange(new DeleteContentRangeRequest().setRange(range)));

    if (insertIndexes.contains(range.getStartIndex())) {
      // Insert the replacement text.
      requests.add(
          new Request()
              .setInsertText(
                  new InsertTextRequest()
                      .setLocation(
                          new Location()
                              .setSegmentId(range.getSegmentId())
                              .setIndex(range.getStartIndex())
                              .setTabId(range.getTabId()))
                      .setText(newText)));

      // Re-create the named range on the new text.
      requests.add(
          new Request()
              .setCreateNamedRange(
                  new CreateNamedRangeRequest()
                      .setName(rangeName)
                      .setRange(
                          new Range()
                              .setSegmentId(range.getSegmentId())
                              .setStartIndex(range.getStartIndex())
                              .setEndIndex(range.getStartIndex() + newText.length())
                              .setTabId(range.getTabId()))));
    }
  }

  // Make a batchUpdate request to apply the changes, ensuring the document hasn't changed since
  // we fetched it.
  BatchUpdateDocumentRequest batchUpdateRequest =
      new BatchUpdateDocumentRequest()
          .setRequests(requests)
          .setWriteControl(new WriteControl().setRequiredRevisionId(document.getRevisionId()));
  service.documents().batchUpdate(<var>DOCUMENT_ID</var>, batchUpdateRequest).execute();
}
```

### Python

```
def replace_named_range(service, document_id, range_name, new_text):
    """Replaces the text in existing named ranges."""

    # Determine the length of the replacement text, as UTF-16 code units.
    # https://developers.google.com/workspace/docs/api/concepts/structure#start_and_end_index
    new_text_len = len(new_text.encode('utf-16-le')) / 2

    # Fetch the document to determine the current indexes of the named ranges.
    document = (
        service.documents()
        .get(documentId=document_id, includeTabsContent=True)
        .execute()
    )

    # Find the matching named ranges in the first tab of the document.
    named_range_list = (
        document.get('tabs')[0]
        .get('documentTab')
        .get('namedRanges', {})
        .get(range_name)
    )
    if not named_range_list:
        raise Exception('The named range is no longer present in the document.')

    # Determine all the ranges of text to be removed, and at which indices the
    # replacement text should be inserted.
    all_ranges = []
    insert_at = {}
    for named_range in named_range_list.get('namedRanges'):
        ranges = named_range.get('ranges')
        all_ranges.extend(ranges)
        # Most named ranges only contain one range of text, but it's possible
        # for it to be split into multiple ranges by user edits in the document.
        # The replacement text should only be inserted at the start of the first
        # range.
        insert_at[ranges[0].get('startIndex')] = True

    # Sort the list of ranges by startIndex, in descending order.
    all_ranges.sort(key=lambda r: r.get('startIndex'), reverse=True)

    # Create a sequence of requests for each range.
    requests = []
    for r in all_ranges:
        # Delete all the content in the existing range.
        requests.append({
            'deleteContentRange': {
                'range': r
            }
        })

        segment_id = r.get('segmentId')
        start = r.get('startIndex')
        tab_id = r.get('tabId')
        if insert_at[start]:
            # Insert the replacement text.
            requests.append({
                'insertText': {
                    'location': {
                        'segmentId': segment_id,
                        'index': start,
                        'tabId': tab_id
                    },
                    'text': new_text
                }
            })
            # Re-create the named range on the new text.
            requests.append({
                'createNamedRange': {
                    'name': range_name,
                    'range': {
                        'segmentId': segment_id,
                        'startIndex': start,
                        'endIndex': start + new_text_len,
                        'tabId': tab_id
                    }
                }
            })

    # Make a batchUpdate request to apply the changes, ensuring the document
    # hasn't changed since we fetched it.
    body = {
        'requests': requests,
        'writeControl': {
            'requiredRevisionId': document.get('revisionId')
        }
    }
    service.documents().batchUpdate(documentId=<var>DOCUMENT_ID</var>, body=body).execute()
```

Note that named ranges specify a range of document content, but are not part of that content. If you extract content that includes a named range, then insert it at another location, the named range only points to the original content and not the duplicated section.
