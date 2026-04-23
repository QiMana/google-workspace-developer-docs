---
source: https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/videos
root: workspace
fetched_at: 2026-04-23T15:31:55.638Z
---

# Videos

### Video

JSON representation

```
{
  "url": string,
  "source": enum (Source),
  "id": string,
  "videoProperties": {
    object (VideoProperties)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>url</code></td><td><p><code>string</code></p><p>An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.</p></td></tr><tr><td><code>source</code></td><td><p><code>enum (<code>Source</code>)</code></p><p>The video source.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The video source's unique identifier for this video.</p></td></tr><tr><td><code>videoProperties</code></td><td><p><code>object (<code>VideoProperties</code>)</code></p><p>The properties of the video.</p></td></tr></tbody></table>

### Source

The video sources.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SOURCE_UNSPECIFIED</code></td><td>The video source is unspecified.</td></tr><tr><td><code>YOUTUBE</code></td><td>The video source is YouTube.</td></tr><tr><td><code>DRIVE</code></td><td>The video source is Google Drive.</td></tr></tbody></table>

### VideoProperties

The properties of the `Video`.

JSON representation

```
{
  "outline": {
    object (Outline)
  },
  "autoPlay": boolean,
  "start": integer,
  "end": integer,
  "mute": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>outline</code></td><td><p><code>object (<code>Outline</code>)</code></p><p>The outline of the video. The default outline matches the defaults for new videos created in the Slides editor.</p></td></tr><tr><td><code>autoPlay</code></td><td><p><code>boolean</code></p><p>Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.</p></td></tr><tr><td><code>start</code></td><td><p><code>integer</code></p><p>The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.</p></td></tr><tr><td><code>end</code></td><td><p><code>integer</code></p><p>The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.</p></td></tr><tr><td><code>mute</code></td><td><p><code>boolean</code></p><p>Whether to mute the audio during video playback. Defaults to false.</p></td></tr></tbody></table>
