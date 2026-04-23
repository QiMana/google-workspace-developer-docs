---
source: https://developers.google.com/workspace/add-ons/studio/custom-resources
root: workspace
fetched_at: 2026-04-23T15:23:18.575Z
---

# Represent complex data with a custom resource

This guide explains how to define custom resources for Google Workspace Studio.

Custom resources are custom data structures that you can define to group multiple variables together. When a step's output has a static structure, represent it with a custom resource. For example, to create a CRM lead, your output requires multiple variables:

- Email address
- Street address
- Name

To ensure the presence of all data required to create a CRM lead, output a custom resource containing an email address, street address, and name.

## Output a custom resource as a reference

By outputting a custom resource as a reference, you can return the custom resource by its ID instead of the full custom resource object. If a custom resource is large or complex, passing only the ID improves performance by reducing the data transferred between steps.

To output a custom resource as a reference, edit the step's manifest file and code.

### Edit the manifest file

In the manifest file:

1. Specify a `workflowResourceDefinitions` and assign it an `id`, a `fields[]` array, and a `providerFunction`. The `workflowResourceDefinitions` is a structure that defines data types and contents of the custom resource.
2. Within the `fields[]` array, you specify the individual fields that make up the custom resource, in this example called `field_1` and `field_2`.
3. The `providerFunction` 's value must match the name of a function in the step's code. The `providerFunction` retrieves actual custom resource content when needed.
	### JSON
	```
	{
	  "workflowResourceDefinitions": [
	    {
	      "id": "resource_id",
	      "name": "Custom Resource",
	      "fields": [
	        {
	          "selector": "field_1",
	          "name": "Field 1",
	          "dataType": {
	            "basicType": "STRING"
	          }
	        },
	        {
	          "selector": "field_2",
	          "name": "Field 2",
	          "dataType": {
	            "basicType": "STRING"
	          }
	        }
	      ],
	      "providerFunction": "onMessageResourceFunction"
	    }
	  ]
	}
	```
4. In `outputs[]`, specify an output variable that returns a dynamic set of output variables. The output variable has a `dataType` with the property `resourceType`. The value of `cardinality` must be `SINGLE`.
	### JSON
	```
	{
	  "outputs": [
	    {
	      "id": "resource_data",
	      "description": "Resource Data",
	      "cardinality": "SINGLE",
	      "dataType": {
	        "resourceType": {
	          "workflowResourceDefinitionId": "resource_id"
	        }
	      }
	    }
	  ],
	}
	```

Here's a complete manifest file that defines a custom resource:

### JSON

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "addOns": {
    "common": {
      "name": "Custom Resource (as reference)",
      "logoUrl": "https://www.gstatic.com/images/icons/material/system/1x/pets_black_48dp.png",
      "useLocaleFromApp": true
    },
    "flows": {
      "workflowElements": [
        {
          "id": "getResourceDataReference",
          "state": "ACTIVE",
          "name": "Custom Resource (as reference)",
          "description": "Output a custom resource as a reference",
          "workflowAction": {
            "outputs": [
              {
                "id": "resource_data",
                "description": "Resource Data",
                "cardinality": "SINGLE",
                "dataType": {
                  "resourceType": {
                    "workflowResourceDefinitionId": "resource_id"
                  }
                }
              }
            ],
            "onConfigFunction": "onConfigResourceFunction",
            "onExecuteFunction": "onExecuteResourceFunction"
          }
        }
      ],
      "workflowResourceDefinitions": [
        {
          "id": "resource_id",
          "name": "Custom Resource",
          "fields": [
            {
              "selector": "field_1",
              "name": "Field 1",
              "dataType": {
                "basicType": "STRING"
              }
            },
            {
              "selector": "field_2",
              "name": "Field 2",
              "dataType": {
                "basicType": "STRING"
              }
            }
          ],
          "providerFunction": "onMessageResourceFunction"
        }
      ]
    }
  }
}
```

### Edit the code

In the application code:

1. Implement the `providerFunction`, called `onMessageResourceFunction()` in this example, which retrieves custom resource content when needed. It takes the input `e` which is the step's [event object JSON payload](https://developers.google.com/workspace/add-ons/studio/event-objects), and from it sets the custom resource ID.
	### Apps Script
	```
	function onMessageResourceFunction(e) {
	  console.log("Payload in onMessageResourceFunction: " + JSON.stringify(e));
	  var resource_id = e.workflow.resourceRetrieval.resourceReference.resourceId;
	  let fieldValue_1;
	  let fieldValue_2;
	  // Using a if-condition to mock a database call.
	  if (resource_id == "sample_resource_reference_id") {
	    fieldValue_1 = AddOnsResponseService.newVariableData()
	      .addStringValue("value1");
	    fieldValue_2 = AddOnsResponseService.newVariableData()
	      .addStringValue("value2");
	  } else {
	    fieldValue_1 = AddOnsResponseService.newVariableData()
	      .addStringValue("field_1 value not found");
	    fieldValue_2 = AddOnsResponseService.newVariableData()
	      .addStringValue("field_2 value not found");
	  }
	  let resourceData = AddOnsResponseService.newResourceData()
	    .addVariableData("field_1", fieldValue_1)
	    .addVariableData("field_2", fieldValue_2)
	  let workflowAction = AddOnsResponseService.newResourceRetrievedAction()
	    .setResourceData(resourceData)
	  let hostAppAction = AddOnsResponseService.newHostAppAction()
	    .setWorkflowAction(workflowAction);
	  return AddOnsResponseService.newRenderActionBuilder()
	    .setHostAppAction(hostAppAction)
	    .build();
	}
	```
2. The provider function must return the value of the custom resource by retrieving it with an appropriate mechanism, like calling an API or reading a database.
3. To retrieve and return a custom resource by its ID, return it as `returnOutputVariablesAction`, as shown in `onExecuteResourceFunction()`.
	### Apps Script
	```
	function onExecuteResourceFunction(e) {
	  console.log("Payload in onExecuteResourceFunction: " + JSON.stringify(e));
	  let outputVariables = AddOnsResponseService.newVariableData()
	    .addResourceReference("sample_resource_reference_id");
	  let workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
	    .addVariableData("resource_data", outputVariables);
	  let hostAppAction = AddOnsResponseService.newHostAppAction()
	    .setWorkflowAction(workflowAction);
	  return AddOnsResponseService.newRenderActionBuilder()
	    .setHostAppAction(hostAppAction)
	    .build();
	}
	```

Here's a complete example:

### Apps Script

```
function onConfigResourceFunction() {
  let section = CardService.newCardSection()
    .addWidget(
      CardService.newTextParagraph()
        .setText("This is the Custom Resource Demo card")
    );

  const card = CardService.newCardBuilder()
    .addSection(section)
    .build();

  return card;
}

function onMessageResourceFunction(e) {
  console.log("Payload in onMessageResourceFunction: " + JSON.stringify(e));

  var resource_id = e.workflow.resourceRetrieval.resourceReference.resourceId;
  let fieldValue_1;
  let fieldValue_2;

  // Using a if-condition to mock a database call.
  if (resource_id == "sample_resource_reference_id") {
    fieldValue_1 = AddOnsResponseService.newVariableData()
      .addStringValue("value1");
    fieldValue_2 = AddOnsResponseService.newVariableData()
      .addStringValue("value2");
  } else {
    fieldValue_1 = AddOnsResponseService.newVariableData()
      .addStringValue("field_1 value not found");
    fieldValue_2 = AddOnsResponseService.newVariableData()
      .addStringValue("field_2 value not found");
  }

  let resourceData = AddOnsResponseService.newResourceData()
    .addVariableData("field_1", fieldValue_1)
    .addVariableData("field_2", fieldValue_2)

  let workflowAction = AddOnsResponseService.newResourceRetrievedAction()
    .setResourceData(resourceData)

  let hostAppAction = AddOnsResponseService.newHostAppAction()
    .setWorkflowAction(workflowAction);

  return AddOnsResponseService.newRenderActionBuilder()
    .setHostAppAction(hostAppAction)
    .build();
}

function onExecuteResourceFunction(e) {
  console.log("Payload in onExecuteResourceFunction: " + JSON.stringify(e));

  let outputVariables = AddOnsResponseService.newVariableData()
    .addResourceReference("sample_resource_reference_id");

  let workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
    .addVariableData("resource_data", outputVariables);

  let hostAppAction = AddOnsResponseService.newHostAppAction()
    .setWorkflowAction(workflowAction);

  return AddOnsResponseService.newRenderActionBuilder()
    .setHostAppAction(hostAppAction)
    .build();
}
```

## Related topics

- [Input variables](https://developers.google.com/workspace/add-ons/studio/input-variables)
- [Validate an input variable](https://developers.google.com/workspace/add-ons/studio/validate-inputs)
- [Output variables](https://developers.google.com/workspace/add-ons/studio/output-variables)
- [Log activity and errors](https://developers.google.com/workspace/add-ons/studio/log-activity)
- [Workspace Studio event objects](https://developers.google.com/workspace/add-ons/studio/event-objects)
