---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/RetryPolicy.BackOffFactory
root: workspace
fetched_at: 2026-04-23T15:26:30.061Z
---

# RetryPolicy.BackOffFactory

## RetryPolicy.BackOffFactory

public static interface **RetryPolicy.BackOffFactory**

Known Indirect Subclasses

[RetryPolicy.DefaultBackOffFactoryImpl](./RetryPolicy.DefaultBackOffFactoryImpl.md)

Creates an instance of `BackOff`

### Public Method Summary

| abstract BackOff | [createBackOffInstance](./RetryPolicy.BackOffFactory.md#createBackOffInstance()) ()  Returns `BackOff` instance used for implementing exponential back off for failed requests. |
| --- | --- |

## Public Methods

#### public abstract BackOff createBackOffInstance ()

Returns `BackOff` instance used for implementing exponential back off for failed requests.
