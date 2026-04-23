---
source: https://developers.google.com/apps-script/reference/spreadsheet/text-rotation
root: apps-script
fetched_at: 2026-04-23T15:22:07.123Z
---

# Class TextRotation

## Page Summary

- The `TextRotation` class allows access to text rotation settings for a cell.
- You can get the rotation angle in degrees using the `getDegrees()` method.
- The `isVertical()` method checks if the text is stacked vertically.

Access the text rotation settings for a cell.

## Detailed documentation

### getDegrees()

Gets the angle between standard text orientation and the current text orientation. For left-to-right text, positive angles are in the counterclockwise direction. If the text is set to stack vertically, this method returns `0`.

#### Return

`Integer` — The degrees between standard text rotation and the current text rotation.

---

### isVertical()

Returns `true` if the text is stacked vertically; returns `false` otherwise.

#### Return

`Boolean` — Whether or not the text is stacked vertically.
