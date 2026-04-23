---
source: https://developers.google.com/workspace/gmail/design/css
root: workspace
fetched_at: 2026-04-23T15:29:06.793Z
---

# CSS Support

You can style email sent to Gmail using inline `<style>` blocks and standard CSS. Most CSS selectors, attributes, and media-queries are supported. Unsupported CSS properties and selectors may be ignored by Gmail.

See the reference guide for a complete list of [supported CSS properties and queries](#supported_css).

## CSS Selectors

You can use a subset of CSS selectors to apply styles. Gmail supports class, element, and id selectors.

### Example

```
<html>
  <head>
    <style>
      .colored {
        color: blue;
      }
      #body {
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div id='body'>
      <p>Hi Pierce,</p>
      <p class='colored'>This text is blue.</p>
      <p>Jerry</p>
    </div>
  </body>
</html>
```

## CSS Media Queries

You can use standard CSS media queries to adjust the styling of an email to suit the user's current device. Gmail supports queries against the screen width, orientation, and resolution.

### Example

```
<html>
  <head>
    <style>
      .colored {
        color: blue;
      }
      #body {
        font-size: 14px;
      }
      @media screen and (min-width: 500px) {
        .colored {
          color:red;
        }
      }
    </style>
  </head>
  <body>
    <div id='body'>
      <p>Hi Pierce,</p>
      <p class='colored'>
        This text is blue if the window width is
        below 500px and red otherwise.
      </p>
      <p>Jerry</p>
    </div>
  </body>
</html>
```

## Supported CSS properties & queries

The following CSS properties are supported in Gmail:

- azimuth
- background
- background-blend-mode
- background-clip
- background-color
- background-image
- background-origin
- background-position
- background-repeat
- background-size
- border
- border-bottom
- border-bottom-color
- border-bottom-left-radius
- border-bottom-right-radius
- border-bottom-style
- border-bottom-width
- border-collapse
- border-color
- border-left
- border-left-color
- border-left-style
- border-left-width
- border-radius
- border-right
- border-right-color
- border-right-style
- border-right-width
- border-spacing
- border-style
- border-top
- border-top-color
- border-top-left-radius
- border-top-right-radius
- border-top-style
- border-top-width
- border-width
- box-sizing
- break-after
- break-before
- break-inside
- caption-side
- clear
- color
- column-count
- column-fill
- column-gap
- column-rule
- column-rule-color
- column-rule-style
- column-rule-width
- column-span
- column-width
- columns
- direction
- display
- elevation
- empty-cells
- float
- font
- font-family
- font-feature-settings
- font-kerning
- font-size
- font-size-adjust
- font-stretch
- font-style
- font-synthesis
- font-variant
- font-variant-alternates
- font-variant-caps
- font-variant-east-asian
- font-variant-ligatures
- font-variant-numeric
- font-weight
- height
- image-orientation
- image-resolution
- ime-mode
- isolation
- layout-flow
- layout-grid
- layout-grid-char
- layout-grid-char-spacing
- layout-grid-line
- layout-grid-mode
- layout-grid-type
- letter-spacing
- line-break
- line-height
- list-style
- list-style-position
- list-style-type
- margin
- margin-bottom
- margin-left
- margin-right
- margin-top
- marker-offset
- max-height
- max-width
- min-height
- min-width
- mix-blend-mode
- object-fit
- object-position
- opacity
- outline
- outline-color
- outline-style
- outline-width
- overflow
- overflow-x
- overflow-y
- padding
- padding-bottom
- padding-left
- padding-right
- padding-top
- page-break-after
- page-break-before
- page-break-inside
- pause
- pause-after
- pause-before
- pitch
- pitch-range
- quotes
- richness
- speak
- speak-header
- speak-numeral
- speak-punctuation
- speech-rate
- stress
- table-layout
- text-align
- text-align-last
- text-autospace
- text-combine-upright
- text-decoration
- text-decoration-color
- text-decoration-line
- text-decoration-skip
- text-decoration-style
- text-emphasis
- text-emphasis-color
- text-emphasis-style
- text-indent
- text-justify
- text-kashida-space
- text-orientation
- text-overflow
- text-transform
- text-underline-position
- unicode-bidi
- vertical-align
- voice-family
- white-space
- width
- word-break
- word-spacing
- word-wrap
- writing-mode
- zoom

### Supported media queries

#### Supported types

- all
- screen

#### Supported queries

- min-width
- max-width
- min-device-width
- max-device-width
- orientation
- min-resolution
- max-resolution

#### Supported keywords

- and
- only
