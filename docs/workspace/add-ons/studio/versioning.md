---
source: https://developers.google.com/workspace/add-ons/studio/versioning
root: workspace
fetched_at: 2026-04-23T15:23:20.529Z
---

# Update and manage steps with versions

When you publish a new version of your step, existing flows that include the step are not automatically updated. After publishing a step, to maintain support for previous behavior, use versions for changes.

Changes that you should use versions for include:

- Adding new required fields
- Deprecating input or output fields
- Altering data types, like string, float, or int
- Modifying the fundamental behavior of a step

To implement versioning, specify `current_version` and `min_version` in your step's manifest file.

- `current_version`: The version number of the current active deployment.
- `min_version`: The oldest supported version of the step.

The following manifest example shows how to define versions for a step:

### JSON

```
...
"flows": {
     "workflowElements": [
       {
         "id": "...",
         "state": "...",
         "name": "...",
         "description": "...",
         "version" : {
           "current_version": 3,
           "min_version" : 1
         },
...
```

During execution, you can retrieve the version number from the event object and define custom behavior for each version.

### Apps Script

```
/**
 * Executes the step and handles different versions.
 * @param {Object} event The event object.
 */
function onExecute(event) {
  // Get the version ID from the execution metadata.
  const versionId = event.workflow.executionMetadata.versionId;

  // Implement different behavior based on the version.
  if (versionId < 2) {
    // Handle earlier versions
  } else {
    // Handle current and newer versions
  }
}
```

## Related topics

- [Build a step](./build-a-step.md)
- [Workspace Studio event objects](./event-objects.md)
