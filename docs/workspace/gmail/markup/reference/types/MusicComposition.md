---
source: https://developers.google.com/workspace/gmail/markup/reference/types/MusicComposition
root: workspace
fetched_at: 2026-04-23T15:29:41.822Z
---

# MusicComposition

Type name: [MusicComposition](./MusicComposition.md)

Extends [CreativeWork](./CreativeWork.md)

| Name | Type | Description |
| --- | --- | --- |
| composer | [Organization](./Organization.md) or [Person](./Person.md) | The person or organization who wrote the composition. |
| firstPerformance | [Event](./Event.md) | The date and place the work was first performed. |
| includedComposition | [MusicComposition](./MusicComposition.md) | Smaller compositions included in this work (e.g. a movement in a symphony). |
| iswcCode | [Text](./Text.md) | The International Standard Musical Work Code for the composition. |
| lyricist | [Person](./Person.md) | The person who wrote the words. |
| musicalKey | [Text](./Text.md) | The key, mode, or scale this composition uses. |
| musicArrangement | [MusicComposition](./MusicComposition.md) | An arrangement derived from the composition. |
| musicCompositionForm | [Text](./Text.md) | The type of composition (e.g. overture, sonata, symphony, etc.). |
| recordedAs | [MusicRecording](./MusicRecording.md) | An audio recording of the work. |
