---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MusicPlaylist
root: workspace
fetched_at: 2026-04-23T15:29:41.997Z
---

# MusicPlaylist

Type name: [MusicPlaylist](https://developers.google.com/workspace/gmail/markup/reference/types/MusicPlaylist)

Extends [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork)

| Name | Type | Description |
| --- | --- | --- |
| numTracks | [Integer](https://developers.google.com/workspace/gmail/markup/reference/types/Integer) | The number of tracks in this album or playlist. |
| track | [ItemList](https://developers.google.com/workspace/gmail/markup/reference/types/ItemList) or [MusicRecording](https://developers.google.com/workspace/gmail/markup/reference/types/MusicRecording) | A music recording (track)—usually a single song. If an ItemList is given, the list should contain items of type MusicRecording. |
| tracks | [MusicRecording](https://developers.google.com/workspace/gmail/markup/reference/types/MusicRecording) | A music recording (track)—usually a single song. |
