---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MusicComposition
root: workspace
fetched_at: 2026-04-23T15:29:41.822Z
---

# MusicComposition

Type name: [MusicComposition](https://developers.google.com/workspace/gmail/markup/reference/types/MusicComposition)

Extends [CreativeWork](https://developers.google.com/workspace/gmail/markup/reference/types/CreativeWork)

| Name | Type | Description |
| --- | --- | --- |
| composer | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The person or organization who wrote the composition. |
| firstPerformance | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | The date and place the work was first performed. |
| includedComposition | [MusicComposition](https://developers.google.com/workspace/gmail/markup/reference/types/MusicComposition) | Smaller compositions included in this work (e.g. a movement in a symphony). |
| iswcCode | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The International Standard Musical Work Code for the composition. |
| lyricist | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The person who wrote the words. |
| musicalKey | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The key, mode, or scale this composition uses. |
| musicArrangement | [MusicComposition](https://developers.google.com/workspace/gmail/markup/reference/types/MusicComposition) | An arrangement derived from the composition. |
| musicCompositionForm | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The type of composition (e.g. overture, sonata, symphony, etc.). |
| recordedAs | [MusicRecording](https://developers.google.com/workspace/gmail/markup/reference/types/MusicRecording) | An audio recording of the work. |
