---
source: https://developers.google.com/workspace/keep/api/guides/list-notes
root: workspace
fetched_at: 2026-04-23T15:30:07.888Z
---

# List notes

The following sample shows how to list notes:

### REST

Call [notes.list()](https://developers.google.com/workspace/keep/api/reference/rest/v1/notes/list).

### Java

```
/** Lists notes using different filtering and pagination options. */
private void listNotes() throws IOException {
  // Lists 3 notes that were created after a specified timestamp and that are
  // not trashed. Results are ordered by most recently modified first.
  ListNotesResponse response =
    keepService
      .notes()
      .list()
      .setFilter("create_time > \"2021-01-01T00:00:00Z\"")
      .setFilter("-trashed")
      .setPageSize(3)
      .execute();

  System.out.println("List notes response: " + response);

  // Lists notes using a pagination token.
  ListNotesResponse firstPageResponse =
      keepService.notes().list().setPageSize(1).execute();
  String nextPageToken = firstPageResponse.getNextPageToken();

  for (int i = 0; i < 5; i++) {
    // Uses the page token returned by the previous page's next page token.
    ListNotesResponse pagedResponse =
      keepService
          .notes()
          .list()
          .setPageSize(1)
          .setPageToken(nextPageToken)
          .execute();
    System.out.println("Listing note:" + pagedResponse);
    nextPageToken = pagedResponse.getNextPageToken();
  }
}
```
