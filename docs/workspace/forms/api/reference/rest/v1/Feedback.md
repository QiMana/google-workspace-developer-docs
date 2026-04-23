---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/Feedback
root: workspace
fetched_at: 2026-04-23T15:28:44.507Z
---

# Feedback

Feedback for a respondent about their response to a question.

JSON representation

```
{
  "text": string,
  "material": [
    {
      object (ExtraMaterial)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>Required. The main text of the feedback.</p></td></tr><tr><td><code>material[]</code></td><td><p><code>object (<code>ExtraMaterial</code>)</code></p><p>Additional information provided as part of the feedback, often used to point the respondent to more reading and resources.</p></td></tr></tbody></table>

## ExtraMaterial

Supplementary material to the feedback.

JSON representation

```
{

  "link": {
    object (TextLink)
  },
  "video": {
    object (VideoLink)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>content</code>. Required. The contents of the extra material. <code>content</code> can be only one of the following:</td></tr><tr><td><code>link</code></td><td><p><code>object (<code>TextLink</code>)</code></p><p>Text feedback.</p></td></tr><tr><td><code>video</code></td><td><p><code>object (<code>VideoLink</code>)</code></p><p>Video feedback.</p></td></tr></tbody></table>

## TextLink

Link for text.

JSON representation

```
{
  "uri": string,
  "displayText": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p><p>Required. The URI.</p></td></tr><tr><td><code>displayText</code></td><td><p><code>string</code></p><p>Required. Display text for the URI.</p></td></tr></tbody></table>

## VideoLink

Link to a video.

JSON representation

```
{
  "displayText": string,

  "youtubeUri": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayText</code></td><td><p><code>string</code></p><p>Required. The display text for the link.</p></td></tr><tr><td colspan="2">Union field <code>video</code>. Required. The video. <code>video</code> can be only one of the following:</td></tr><tr><td><code>youtubeUri</code></td><td><p><code>string</code></p><p>The URI of a YouTube video.</p></td></tr></tbody></table>
