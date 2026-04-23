---
source: https://developers.google.com/apps-script/reference/forms/page-break-item
root: apps-script
fetched_at: 2026-04-23T15:20:25.037Z
---

# Class PageBreakItem

## Page Summary

- PageBreakItem marks the start of a new page in a form and can be accessed or created from a Form object.
- You can set the navigation for a page break to jump to another specific page break or use a defined PageNavigationType.
- Methods like `duplicate()`, `getHelpText()`, `getId()`, `getIndex()`, `getPageNavigationType()`, `getTitle()`, and `getType()` are available for PageBreakItem.
- Methods like `setGoToPage()`, `setHelpText()`, and `setTitle()` allow for modification of PageBreakItem properties.

A layout item that marks the start of a page. Items can be accessed or created from a `Form`.

```
// Create a form and add three page-break items.
const form = FormApp.create('Form Name');
const pageTwo = form.addPageBreakItem().setTitle('Page Two');
const pageThree = form.addPageBreakItem().setTitle('Page Three');

// Make the first two pages navigate elsewhere upon completion.
pageTwo.setGoToPage(
    pageThree);  // At end of page one (start of page two), jump to page three
pageThree.setGoToPage(
    FormApp.PageNavigationType.RESTART);  // At end of page two, restart form
```

## Detailed documentation

### duplicate()

Creates a copy of this item and appends it to the end of the form.

#### Return

`PageBreakItem` — a duplicate of this `PageBreakItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getGoToPage()

Gets the `PageBreakItem` that the form will jump to after completing the page before this page break (that is, upon reaching this page break by normal linear progression through the form).

#### Return

`PageBreakItem` — the page break to jump to after completing the page before this page break, or `null` if none is set

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getHelpText()

Gets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Return

`String` — the item's help text or description text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getId()

Gets the item's unique identifier.

#### Return

`Integer` — the item's ID

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getIndex()

Gets the index of the item among all the items in the form.

#### Return

`Integer` — the index of the item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getTitle()

Gets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Return

`String` — the item's title or header text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getType()

Gets the item's type, represented as an `ItemType`.

#### Return

`ItemType` — the item's type

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setGoToPage(goToPageItem)

Sets the page to jump to after completing the page before this page break (that is, upon reaching this page break by normal linear progression through the form). If the previous page contained a `MultipleChoiceItem` or `ListItem` with a navigation option, that navigation overrules this navigation.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `goToPageItem` | `PageBreakItem` | the page break to jump to after completing the page before this page break |

#### Return

`PageBreakItem` — this `PageBreakItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setGoToPage(navigationType)

Sets the type of page navigation that occurs after completing the page before this page break (that is, upon reaching this page break by normal linear progression through the form). If the page contained a `MultipleChoiceItem` or `ListItem` with a navigation option, that navigation overrules this navigation.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `navigationType` | `PageNavigationType` | the navigation action to take after completing the page before this page break |

#### Return

`PageBreakItem` — this `PageBreakItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setHelpText(text)

Sets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new help text |

#### Return

`PageBreakItem` — this `PageBreakItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setTitle(title)

Sets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the new title or header text |

#### Return

`PageBreakItem` — this `PageBreakItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
