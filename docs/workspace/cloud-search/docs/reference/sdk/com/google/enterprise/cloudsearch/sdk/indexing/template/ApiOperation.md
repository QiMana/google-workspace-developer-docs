---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/ApiOperation
root: workspace
fetched_at: 2026-04-23T15:26:49.930Z
---

# ApiOperation

Known Indirect Subclasses

Object encapsulating an API request to be executed using `IndexingService`.

For examples of the API request types, refer to the general factory class `ApiOperations` and also `RepositoryDoc` which is used for update item requests.

### Public Method Summary

| abstract List<GenericJson> | [execute](./ApiOperation.md#execute(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([IndexingService](../IndexingService.md) service)  Executes the specific API operation for the implemented class. |
| --- | --- |
| List<GenericJson> | [execute](./ApiOperation.md#execute(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService,%20java.util.Optional%3Cjava.util.function.Consumer%3Ccom.google.enterprise.cloudsearch.sdk.indexing.template.ApiOperation%3E%3E)) ([IndexingService](../IndexingService.md) service, Optional<Consumer< [ApiOperation](./ApiOperation.md) >> operationModifier)  Executes the specific API operation for the implemented class. |

## Public Methods

#### public abstract List<GenericJson> execute (IndexingService service)

Executes the specific API operation for the implemented class.

##### Parameters

| service | the `IndexingService` instance on which to perform the action |
| --- | --- |

##### Throws

| IOException | on errors during the repository data retrieval |
| --- | --- |
| InterruptedException | when execution of indexing API call is interrupted |

#### public List<GenericJson> execute (IndexingService service, Optional<Consumer<ApiOperation>> operationModifier)

Executes the specific API operation for the implemented class.

This method may change without notice in future releases.

##### Parameters

| service | the `IndexingService` instance on which to perform the action |
| --- | --- |
| operationModifier | method to be applied to the operation before calling `execute(IndexingService)` |

##### Throws

| IOException | on errors during the repository data retrieval |
| --- | --- |
| InterruptedException | when execution of indexing API call is interrupted |
