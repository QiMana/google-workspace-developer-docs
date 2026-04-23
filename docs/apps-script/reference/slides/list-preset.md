---
source: https://developers.google.com/apps-script/reference/slides/list-preset
root: apps-script
fetched_at: 2026-04-23T15:21:06.790Z
---

# Enum ListPreset

## Page Summary

- ListPreset defines preset patterns of glyphs for lists in text.
- These presets utilize various glyphs including arrows, circles, diamonds, squares, stars, letters, and numbers.
- Each ListPreset enum represents a specific pattern of glyphs used for different list nesting levels.
- To access a ListPreset enum, you need to reference its parent class, name, and property, such as `SlidesApp.ListPreset.DISC_CIRCLE_SQUARE`.

Preset patterns of glyphs for lists in text.

These presets use these glyphs:

- ARROW: An arrow, ➔, corresponding to a Unicode U+2794 code point
- ARROW3D: An arrow with 3D shading, ➢, corresponding to a Unicode U+27a2 code point
- CHECKBOX: A hollow square, ❏, corresponding to a Unicode U+274f code point
- CIRCLE: A hollow circle, ○, corresponding to a Unicode U+25cb code point
- DIAMOND: A solid diamond, ◆, corresponding to a Unicode U+25c6 code point
- \`DIAMONDX: A diamond with an 'x', ❖, corresponding to a Unicode U+2756 code point
- HOLLOWDIAMOND: A hollow diamond, ◇, corresponding to a Unicode U+25c7 code point
- DISC: A solid circle, ●, corresponding to a Unicode U+25cf code point
- SQUARE: A solid square, ■, corresponding to a Unicode U+25a0 code point
- STAR: A star, ★, corresponding to a Unicode U+2605 code point
- ALPHA: A lowercase letter, like 'a', 'b', or 'c'.
- UPPERALPHA: An uppercase letter, like 'A', 'B', or 'C'.
- DIGIT: A number, like '1', '2', or '3'.
- ZERODIGIT: A number where single digit numbers are prefixed with a zero, like '01', '02', or '03'. Numbers with more than one digit are not prefixed a zero.
- ROMAN: A lowercase roman numeral, like 'i', 'ii', or 'iii'.
- UPPERROMAN: A uppercase roman numeral, like 'I', 'II', or 'III'.
- LEFTTRIANGLE: A triangle pointing left, ◄, corresponding to a Unicode U+25c4 code point

To call an enum, you call its parent class, name, and property. For example, ` SlidesApp.ListPreset.DISC_CIRCLE_SQUARE`.
