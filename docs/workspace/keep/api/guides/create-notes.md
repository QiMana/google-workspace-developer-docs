---
source: https://developers.google.com/workspace/keep/api/guides/create-notes
root: workspace
fetched_at: 2026-04-23T15:30:07.965Z
---

# Create notes

The Google Keep API allows you to create two types of notes: a text note and a list note. This document shows how to create each type.

## Create a text note

The following sample shows how to create a text note:

### REST

Call [notes.create](../reference/rest/v1/notes/create.md) with a [Note](../reference/rest/v1/notes.md#Note) resource. Place the [TextContent](../reference/rest/v1/notes.md#TextContent) in the [Section](../reference/rest/v1/notes.md#Section) of the note.

### Java

```
/**
 * Creates a new text note.
 *
 * @throws IOException
 * @return The newly created text note.
 */
private Note createTextNote(String title, String textContent) throws IOException {
  Section noteBody = new Section().setText(new TextContent().setText(textContent));
  Note newNote = new Note().setTitle(title).setBody(noteBody);

  return keepService.notes().create(newNote).execute();
}
```

## Create a list note

The following sample shows how to create a list note:

### REST

Call [notes.create](../reference/rest/v1/notes/list.md) with a [Note](../reference/rest/v1/notes.md#Note) resource. Place the [ListContent](../reference/rest/v1/notes.md#ListContent) in the [Section](../reference/rest/v1/notes.md#Section) of the note.

### Java

```
/**
 * Creates a new list note.
 *
 * @throws IOException
 * @return The newly created list note.
 */
private Note createListNote() throws IOException {
  // Create a checked list item.
  ListItem checkedListItem =
      new ListItem().setText(new TextContent().setText("Send meeting invites")).setChecked(true);

  // Create a list item with two children.
  ListItem uncheckedListItemWithChildren =
      new ListItem()
          .setText(new TextContent().setText("Prepare the presentation"))
          .setChecked(false)
          .setChildListItems(
              Arrays.asList(
                  new ListItem().setText(
                      new TextContent().setText("Review metrics")),
                  new ListItem().setText(
                      new TextContent().setText("Analyze sales projections")),
                  new ListItem().setText(
                      new TextContent().setText("Share with leads"))));

  // Creates an unchecked list item.
  ListItem uncheckedListItem =
      new ListItem().setText(
          new TextContent().setText("Send summary email")).setChecked(true);

  Note newNote =
      new Note()
          .setTitle("Marketing review meeting")
          .setBody(
              new Section()
                  .setList(
                      new ListContent()
                          .setListItems(
                              Arrays.asList(
                                  checkedListItem,
                                  uncheckedListItemWithChildren,
                                  uncheckedListItem))));

  return keepService.notes().create(newNote).execute();
}
```
