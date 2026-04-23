---
source: https://developers.google.com/apps-script/reference/slides/connection-site
root: apps-script
fetched_at: 2026-04-23T15:21:05.603Z
---

# Class ConnectionSite

## Page Summary

- A ConnectionSite is a point on a PageElement that can connect to a connector.
- The getIndex() method returns the unique index of a connection site among all connection sites on the same page element.
- The getPageElement() method returns the PageElement that the connection site is located on.

The connection site on a `PageElement` that can connect to a `connector`.

## Detailed documentation

### getIndex()

Returns the index of the connection site. The index is unique among all the connection sites on the same page element.

In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in the description of the "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/).

#### Return

`Integer` — The index of the connection site.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPageElement()

Returns the `PageElement` that the connection site is on.

#### Return

`PageElement` — The page element of the connection site.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
