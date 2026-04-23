---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/CheckpointHandler
root: workspace
fetched_at: 2026-04-23T15:26:48.836Z
---

# CheckpointHandler

Known Indirect Subclasses

[InMemoryCheckpointHandler](./InMemoryCheckpointHandler.md)

Wrapper object to read / write a checkpoint. An implementation is expected to throw `IOException` if reading or writing of the checkpoint fails.

### Public Method Summary

| abstract byte\[\] | [readCheckpoint](./CheckpointHandler.md#readCheckpoint(java.lang.String)) (String checkpointName)  Read current value of saved checkpoint. |
| --- | --- |
| abstract void | [saveCheckpoint](./CheckpointHandler.md#saveCheckpoint(java.lang.String,%20byte[])) (String checkpointName, byte\[\] checkpoint)  Saves checkpoint value. |

## Public Methods

#### public abstract byte\[\] readCheckpoint (String checkpointName)

Read current value of saved checkpoint.

##### Parameters

| checkpointName | the name of the checkpoint to read |
| --- | --- |

##### Returns

- current value of checkpoint. `null` if checkpoint is empty or not available

##### Throws

| IOException | if checkpoint read fails |
| --- | --- |

#### public abstract void saveCheckpoint (String checkpointName, byte\[\] checkpoint)

Saves checkpoint value.

##### Parameters

| checkpointName | the name of the checkpoint to save |
| --- | --- |
| checkpoint | value to save |

##### Throws

| IOException | if checkpoint save fails |
| --- | --- |
