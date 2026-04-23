---
source: https://developers.google.com/apps-script/reference/slides/slides-app
root: apps-script
fetched_at: 2026-04-23T15:21:15.833Z
---

# Class SlidesApp

## Page Summary

- SlidesApp is used to create and open editable presentations.
- You can open a presentation using its ID or URL, or create a new one with a specified name.
- SlidesApp provides access to numerous properties defining elements and styles within presentations, such as alignment, colors, and shapes.
- Methods are available to get the active presentation, access the user interface, and build affine transformations.

Creates and opens `Presentations` that can be edited.

```
// Open a presentation by ID.
let preso = SlidesApp.openById('PRESENTATION_ID_GOES_HERE');

// Create and open a presentation.
preso = SlidesApp.create('Presentation Name');
```

## Detailed documentation

### create(name)

Creates and opens a new `Presentation`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to be given to the created presentation. |

#### Return

`Presentation` — The presentation with the given name.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations`

---

### getActivePresentation()

Returns the currently active presentation to which the script is [container-bound](https://developers.google.com/apps-script/scripts_containers), or `null` if there is no active presentation. To interact with a presentation to which the script is not container-bound, use `openById(id)` instead.

```
// Get the current presentation to which this script is bound.
const presentation = SlidesApp.getActivePresentation();
```

If the presentation is already open, the same presentation instance is returned.

#### Return

`Presentation|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getUi()

Returns an instance of the presentation's user-interface environment that allows the script to add features like menus, dialogs, and sidebars. A script can only interact with the UI for the current instance of an open presentation, and only if the script is [bound](https://developers.google.com/apps-script/scripts_containers) to the presentation. For more information, see the guides to [menus](https://developers.google.com/apps-script/guides/menus) and [dialogs and sidebars](https://developers.google.com/apps-script/guides/dialogs).

```
// Add a custom menu to the active presentation, including a separator and a
// sub-menu.
function onOpen(e) {
  SlidesApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(
          SlidesApp.getUi()
              .createMenu('My sub-menu')
              .addItem('One sub-menu item', 'mySecondFunction')
              .addItem('Another sub-menu item', 'myThirdFunction'),
          )
      .addToUi();
}
```

#### Return

`Ui`

---

### newAffineTransformBuilder()

Returns a new `AffineTransformBuilder` to build an `AffineTransform`. The builder

#### Return

`AffineTransformBuilder` — A new `AffineTransformBuilder`.

---

### openById(id)

Opens the `Presentation` with the given ID.

```
// Open a presentation by ID.
const presentation = SlidesApp.openById('docId');
```

If the presentation is already open, the same presentation instance is returned.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the presentation to open. |

#### Return

`Presentation` — The presentation with the given ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations`

---

### openByUrl(url)

Opens the `Presentation` with the given URL.

```
// Open a presentation by URL.
const presentation = SlidesApp.openByUrl(
    'https://docs.google.com/presentation/d/docId/edit',
);
```

If the presentation is already open, the same presentation instance is returned.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL of the presentation to open. |

#### Return

`Presentation` — The presentation with the given URL.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations`
