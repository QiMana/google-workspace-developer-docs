---
source: https://developers.google.com/workspace/add-ons/studio/event-objects
root: workspace
fetched_at: 2026-04-23T15:23:16.153Z
---

# The Workspace Studio event object

This guide provides examples of the Workspace Studio event objects.

Flows sends event parameters in the common Google Workspace add-ons event object used throughout Google Workspace add-ons. To learn more about the common event object, see [Google Workspace add-ons event objects](../concepts/event-objects.md).

The flow event object includes the following objects:

- **`workflow`**: An event detailing what happens when a flow runs, is created, updated, deleted, or a custom resource is requested. Depending on what happens, it has the following objects:
	- **`actionInvocation`**: A step runs.
		- **`resourceRetrieval`**: A custom resource gets requested from a flow.

The following table outlines which event object is populated based on what a flow does:

| Event Object | WorkflowAction | WorkflowResource |
| --- | --- | --- |
| `actionInvocation` | `OnExecuteFunction()`      Called when the `OnExecuteFunction` is invoked on an Action. | n/a |
| `resourceRetrieval` | n/a | `providerFunction()`      Called when the resource is requested from the Workflow. |

## actionInvocation

For reference, here is an example event showcasing `actionInvocation`:

### JSON

```
{
    "workflow": {
        "triggerEventSource": "TRIGGER_EVENT_SOURCE_AUTOMATED",
        "actionInvocation": {
            "inputs": {
                "operation": {
                    "stringValues": [
                        "+"
                    ]
                },
                "value2": {
                    "integerValues": [
                        2
                    ]
                },
                "value1": {
                    "integerValues": [
                        2
                    ]
                }
            }
        }
    },
    "userLocale": "en",
    "hostApp": "flows",
    "clientPlatform": "web",
    "commonEventObject": {
        "timeZone": {
            "offset": -14400000,
            "id": "America/New_York"
        },
        "userLocale": "en-US",
        "hostApp": "WORKFLOW",
        "platform": "WEB"
    },
    "userCountry": "US",
    "userTimezone": {
        "id": "America/New_York",
        "offSet": "-14400000"
    }
}
```

## resourceRetrieval

Here is an example event showcasing `resourceRetrieval`:

### JSON

```
{
    "workflow": {
        "resourceRetrieval": {
            "resourceReference": {
                "resourceType": {
                    "workflowBundleId": "workflow_bundle_id",
                    "workflowResourceDefinitionId": "workflow_resource_definition_id"
                },
                "resourceId": "resource_id"
            }
        }
    },
    "userLocale": "en",
    "hostApp": "flows",
    "clientPlatform": "web",
    "commonEventObject": {
        "timeZone": {
            "offset": -14400000,
            "id": "America/New_York"
        },
        "userLocale": "en-US",
        "hostApp": "WORKFLOW",
        "platform": "WEB"
    },
    "userCountry": "US",
    "userTimezone": {
        "id": "America/New_York",
        "offSet": "-14400000"
    }
}
```
