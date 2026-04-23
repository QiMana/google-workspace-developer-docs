---
source: https://developers.google.com/apps-script/reference/slides/speaker-spotlight
root: apps-script
fetched_at: 2026-04-23T15:21:16.912Z
---

# Class SpeakerSpotlight

## Page Summary

- SpeakerSpotlight is a PageElement representing a speaker spotlight in Google Slides.
- SpeakerSpotlight provides methods to manipulate its position, size, appearance, and properties.
- Methods like `alignOnPage`, `bringForward`, `bringToFront`, `sendBackward`, and `sendToBack` control the element's layering and alignment.
- Properties like border, connection sites, description, height, width, left, top, rotation, title, mask shape type, object ID, page element type, parent group, parent page, and transform can be accessed and modified using dedicated methods.
- SpeakerSpotlight can be duplicated, removed, and selected using the `duplicate`, `remove`, and `select` methods respectively.

A `PageElement` representing a speaker spotlight.

```
const slide = SlidesApp.getActivePresentation().getSlides()[0];
const speakerSpotlight = slide.getPageElements()[0];
console.log(
    \`Page element is of type: ${
        speakerSpotlight.getPageElementType().toString()}\`,
);
```

## Detailed documentation

### alignOnPage(alignmentPosition)

Aligns the element to the specified alignment position on the page.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignmentPosition` | `AlignmentPosition` | The position to align this page element to on the page. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

---

### bringForward()

Brings the page element forward on the page by one element.

The page element must not be in a group.

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### bringToFront()

Brings the page element to the front of the page.

The page element must not be in a group.

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### duplicate()

Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.

#### Return

`PageElement` — The new duplicate of this page element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getBorder()

Returns the `Border` of the speaker spotlight.

```
const slide = SlidesApp.getActivePresentation().getSlides()[0];
// Gets the first element on the page, which in
// this example is of type speaker spotlight.
const speakerSpotlight = slide.getPageElements()[0];
// Gets the border of the speaker spotlight.
const border = speakerSpotlight.getBorder();
```

#### Return

`Border` — The border of the speaker spotlight.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getConnectionSites()

Returns the list of `ConnectionSite` s on the page element, or an empty list if the page element does not have any connection sites.

#### Return

`ConnectionSite[]` — The connection sites list, which may be empty if this element has no connection sites.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getDescription()

Returns the page element's alt text description. The description is combined with the title to display and read alt text.

#### Return

`String` — The page element's alt text description.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getHeight()

Gets the element's height in points, which is the height of the element's bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't compatible with this method, refer to the [sizing and positioning limitations](../../guides/slides/moving-elements.md#limitations).

#### Return

`Number|null` — The page element's inherent height in points, or `null` if the page element does not have a height.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getInherentHeight()

Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in conjunction with the element's transform to determine the element's final visual appearance.

#### Return

`Number|null` — The page element's inherent height in points, or `null` if the page element does not have a height.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getInherentWidth()

Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in conjunction with the element's transform to determine the element's final visual appearance.

#### Return

`Number|null` — The page element's inherent width in points, or `null` if the page element does not have a width.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getLeft()

Returns the element's horizontal position in points, measured from the upper-left corner of the page when the element has no rotation.

#### Return

`Number` — This element's horizontal position in points, from the upper-left corner of the page.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getMaskShapeType()

Returns the `ShapeType` of the mask applied to the speaker spotlight, or `null` if there is no mask.

```
const slide = SlidesApp.getActivePresentation().getSlides()[0];
// Gets the first element on the page, which in
// this example is of type speaker spotlight.
const speakerSpotlight = slide.getPageElements()[0];
// Gets the shape type of the mask on the speaker spotlight.
const maskShapeType = speakerSpotlight.getMaskShapeType();
```

#### Return

`ShapeType|null` — The shape type of the speaker spotlight mask.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getObjectId()

Returns the unique ID for this object. Object IDs used by pages and page elements share the same namespace.

#### Return

`String` — The unique ID for this object.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPageElementType()

Returns the page element's type, represented as a `PageElementType` enum.

#### Return

`PageElementType` — The page element's type.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getParentGroup()

Returns the group this page element belongs to, or `null` if the element is not in a group.

#### Return

`Group|null` — The group this page element belongs to, or `null`.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getParentPage()

Returns the page this page element is on.

#### Return

`Page` — The page this element resides on.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getRotation()

Returns the element's clockwise rotation angle around its center in degrees, where zero degrees means no rotation.

#### Return

`Number` — The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getTitle()

Returns the page element's alt text title. The title is combined with the description to display and read alt text.

#### Return

`String` — The page element's alt text title.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getTop()

Gets the element's vertical position in points, measured from the upper-left corner of the page when the element has no rotation.

#### Return

`Number` — This element's vertical position in points, from the upper-left corner of the page.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getTransform()

Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent groups. If the page element is not in a group, its absolute transform is the same as the value in this field.

#### Return

`AffineTransform` — The page element's transform.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getWidth()

Returns the element's width in points, which is the width of the element's bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't compatible with this method, refer to the [sizing and positioning limitations](../../guides/slides/moving-elements.md#limitations).

#### Return

`Number|null` — The page element's inherent width in points, or `null` if the page element does not have a width.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### preconcatenateTransform(transform)

Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform;
```

For example, to move a page elements 36 points to the left:

```
const element = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
element.preconcatenateTransform(
    SlidesApp.newAffineTransformBuilder().setTranslateX(-36.0).build(),
);
```

You can also replace the page element's transform with `setTransform(transform)`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `transform` | `AffineTransform` | The transform to preconcatenate onto this page element's transform. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### remove()

Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting placeholders are also removed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### scaleHeight(ratio)

Scales the element's height by the specified ratio. The element's height is the height of its bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't compatible with this method, refer to the [sizing and positioning limitations](../../guides/slides/moving-elements.md#limitations).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ratio` | `Number` | The ratio to scale this page element's height by. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### scaleWidth(ratio)

Scales the element's width by the specified ratio. The element's width is the width of its bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't compatible with this method, refer to the [sizing and positioning limitations](../../guides/slides/moving-elements.md#limitations).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ratio` | `Number` | The ratio to scale this page element's width by. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### select()

Selects only the `PageElement` in the active presentation and removes any previous selection. This is the same as calling `select(replace)` with `true`.

A script can only access the selection of the user who is running the script, and only if the script is [bound](../../guides/bound.md) to the presentation.

This sets the parent `Page` of the `PageElement` as the `current page selection`.

```
const slide = SlidesApp.getActivePresentation().getSlides()[0];
const pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### select(replace)

Selects the `PageElement` in the active presentation.

A script can only access the selection of the user who is running the script, and only if the script is [bound](../../guides/bound.md) to the presentation.

Pass `true` to this method to select only the `PageElement` and remove any previous selection. This also sets the parent `Page` of the `PageElement` as the `current page selection`.

Pass `false` to select multiple `PageElement` objects. The `PageElement` objects must be in the same `Page`.

The following conditions must be met while selecting a page element using a `false` parameter:

1. The parent `Page` of the `PageElement` object must be the `current page selection`.
2. There should not be multiple `Page` objects selected.

To make sure that’s the case the preferred approach is to select the parent `Page` first using `Page.selectAsCurrentPage()` and then select the page elements in that page.

```
const slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
const pageElements = slide.getPageElements();
for (let i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `replace` | `Boolean` | If `true`, the selection replaces any previous selection; otherwise the selection is added to any previous selection. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### sendBackward()

Sends the page element backward on the page by one element.

The page element must not be in a group.

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### sendToBack()

Sends the page element to the back of the page.

The page element must not be in a group.

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setDescription(description)

Sets the page element's alt text description.

The method is not supported for `Group` elements.

```
// Set the first page element's alt text description to "new alt text
// description".
const pageElement =
    SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `description` | `String` | The string to set the alt text description to. |

#### Return

`SpeakerSpotlight` — This page element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setHeight(height)

Sets the element's height in points, which is the height of the element's bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't compatible with this method, refer to the [sizing and positioning limitations](../../guides/slides/moving-elements.md#limitations).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `height` | `Number` | The new height of this page element to set, in points. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setLeft(left)

Sets the element's horizontal position in points, measured from the upper-left corner of the page when the element has no rotation.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `left` | `Number` | The new horizontal position to set, in points. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setRotation(angle)

Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't compatible with this method, refer to the [sizing and positioning limitations](../../guides/slides/moving-elements.md#limitations).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angle` | `Number` | The new clockwise rotation angle to set, in degrees. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setTitle(title)

Sets the page element's alt text title.

The method is not supported for `Group` elements.

```
// Set the first page element's alt text title to "new alt text title".
const pageElement =
    SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The string to set the alt text title to. |

#### Return

`SpeakerSpotlight` — This page element.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setTop(top)

Sets the element's vertical position in points, measured from the upper-left corner of the page when the element has no rotation.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `top` | `Number` | The new vertical position to set, in points. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setTransform(transform)

Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of that page element; it doesn't affect the transforms of the group or other page elements in the group.

For details on how transforms impact the visual appearance of page elements, see `getTransform()`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `transform` | `AffineTransform` | The transform that is set for this page element. |

#### Return

`SpeakerSpotlight` — This element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setWidth(width)

Sets the element's width in points, which is the width of the element's bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't compatible with this method, refer to the [sizing and positioning limitations](../../guides/slides/moving-elements.md#limitations).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Number` | The new width of this page element to set, in points. |

#### Return

`SpeakerSpotlight` — This page element, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
