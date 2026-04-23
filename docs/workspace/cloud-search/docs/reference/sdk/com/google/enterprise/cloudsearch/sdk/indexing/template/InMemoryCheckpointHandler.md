---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/InMemoryCheckpointHandler
root: workspace
fetched_at: 2026-04-23T15:26:49.521Z
---

# InMemoryCheckpointHandler

CheckpointHandler implementation to maintain in-memory checkpoint values.

### Public Constructor Summary

[InMemoryCheckpointHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/InMemoryCheckpointHandler#InMemoryCheckpointHandler\(\)) ()

Creates an instance of `InMemoryCheckpointHandler`

### Public Method Summary

| synchronized byte\[\] | [readCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/InMemoryCheckpointHandler#readCheckpoint\(java.lang.String\)) (String checkpointName)  Reads checkpoint value for given checkpoint name. |
| --- | --- |
| synchronized void | [saveCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/InMemoryCheckpointHandler#saveCheckpoint\(java.lang.String,%20byte[]\)) (String checkpointName, byte\[\] checkpoint)  Saves given checkpoint value. |

### Inherited Method Summary

From class java.lang.Object

| boolean | equals(Object arg0) |
| --- | --- |
| final Class<?> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| String | toString() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| final void | wait() |

From interface [com.google.enterprise.cloudsearch.sdk.indexing.template.CheckpointHandler](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/CheckpointHandler)

| abstract byte\[\] | [readCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/CheckpointHandler#readCheckpoint\(java.lang.String\)) (String checkpointName)  Read current value of saved checkpoint. |
| --- | --- |
| abstract void | [saveCheckpoint](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/CheckpointHandler#saveCheckpoint\(java.lang.String,%20byte[]\)) (String checkpointName, byte\[\] checkpoint)  Saves checkpoint value. |

## Public Constructors

#### public InMemoryCheckpointHandler ()

Creates an instance of `InMemoryCheckpointHandler`

## Public Methods

#### public synchronized byte\[\] readCheckpoint (String checkpointName)

Reads checkpoint value for given checkpoint name.

##### Parameters

| checkpointName | the name of the checkpoint to read |
| --- | --- |

##### Returns

- current value of checkpoint. `null` if checkpoint is empty or not available

##### Throws

| IOException |  |
| --- | --- |

#### public synchronized void saveCheckpoint (String checkpointName, byte\[\] checkpoint)

Saves given checkpoint value.

##### Parameters

| checkpointName | the name of the checkpoint to save |
| --- | --- |
| checkpoint | value to save |

##### Throws

| IOException |  |
| --- | --- |
