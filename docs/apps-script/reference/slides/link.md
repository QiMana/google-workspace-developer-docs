---
source: https://developers.google.com/apps-script/reference/slides/link
root: apps-script
fetched_at: 2026-04-23T15:21:08.129Z
---

# Class Link

## Page Summary

- The `Link` object represents a hypertext link in Google Slides.
- You can determine the type of a link using the `getLinkType()` method.
- Methods like `getLinkedSlide()`, `getSlideId()`, `getSlideIndex()`, and `getSlidePosition()` are used to retrieve information about linked slides for non-URL link types.
- The `getUrl()` method is used to retrieve the URL for external web page links.
- Accessing link information may require specific authorization scopes.

A hypertext link.

## Detailed documentation

### getLinkType()

Returns the `LinkType`.

```
const shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
const link = shape.getLink();
if (link != null) {
  Logger.log(\`Shape has a link of type: ${link.getLinkType()}\`);
}
```

#### Return

`LinkType`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getLinkedSlide()

Returns the linked `Slide` for non-URL links types, if it exists. Returns `null` if the slide doesn't exist in the presentation, or if the `LinkType` is `LinkType.URL`.

```
const shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
const link = shape.getLink();
if (link != null && link.getLinkType() !== SlidesApp.LinkType.URL) {
  Logger.log(\`Shape has link to slide: ${link.getLinkedSlide()}\`);
}
```

#### Return

`Slide|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSlideId()

Returns the ID of the linked `Slide` or `null` if the `LinkType` is not `LinkType.SLIDE_ID`.

Note that the slide with the returned ID might not exist.

```
const shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
const link = shape.getLink();
if (link != null && link.getLinkType() === SlidesApp.LinkType.SLIDE_ID) {
  Logger.log(\`Shape has link to slide with ID: ${link.getSlideId()}\`);
}
```

#### Return

`String|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSlideIndex()

Returns the zero-based index of the linked `Slide` or `null` if the `LinkType` is not `LinkType.SLIDE_INDEX`.

Note that the slide at the returned index might not exist.

```
const shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
const link = shape.getLink();
if (link != null && link.getLinkType() === SlidesApp.LinkType.SLIDE_INDEX) {
  Logger.log(\`Shape has link to slide with index: ${link.getSlideIndex()}\`);
}
```

#### Return

`Integer|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSlidePosition()

Returns the `SlidePosition` of the linked `Slide` or `null` if the `LinkType` is not `LinkType.SLIDE_POSITION`.

Note that the slide with the returned relative position might not exist.

```
const shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
const link = shape.getLink();
if (link != null && link.getLinkType() === SlidesApp.LinkType.SLIDE_POSITION) {
  Logger.log(
      \`Shape has link to slide with relative position: ${
          link.getSlidePosition()}\`,
  );
}
```

#### Return

`SlidePosition|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getUrl()

Returns the URL to the external web page or `null` if the `LinkType` is not `LinkType.URL`.

```
const shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
const link = shape.getLink();
if (link != null && link.getLinkType() === SlidesApp.LinkType.URL) {
  Logger.log(\`Shape has link to URL: ${link.getUrl()}\`);
}
```

#### Return

`String|null`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
