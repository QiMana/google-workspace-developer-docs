---
source: https://developers.google.com/workspace/drive/api/reference/mcp/tools_list/download_file_content
root: workspace
fetched_at: 2026-04-23T15:27:47.373Z
---

# MCP Tools Reference: drivemcp.googleapis.com

## Tool: download\_file\_content

Call this tool to download the content of a Drive file as raw binary data (bytes).

If the file is a Google Drive first-party mime type, the `exportMimeType` field is required and will determine the format of the downloaded file.

If the file is not found, try using other tools like `search_files` to find the file the user is requesting.

If the user wants a natural language representation of their Drive content, use the `read_file_content` tool (`read_file_content` should be smaller and easier to parse).

The following sample demonstrate how to use `curl` to invoke the `download_file_content` MCP tool.

Curl Request

```
curl --location 'https://drivemcp.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
  "method": "tools/call",
  "params": {
    "name": "download_file_content",
    "arguments": {
      // provide these details according to the tool MCP specification
    }
  },
  "jsonrpc": "2.0",
  "id": 1
}'
```

## Input Schema

Defines a request to download a file's content.

### DownloadFileRequest

JSON representation

```
{
  "fileId": string,
  "exportMimeType": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file to retrieve.</p></td></tr><tr><td><code>exportMimeType</code></td><td><p><code>string</code></p><p>Optional. For Google native files, the MIME type to export the file to, ignored otherwise. Defaults to text if not specified.</p></td></tr></tbody></table>

## Output Schema

### CallToolResponse

JSON representation

```
{
  "common": {
    object (ResponseFields)
  },
  "content": [
    {
      object (Content)
    }
  ],
  "structuredContent": {
    object
  },
  "isError": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>common</code></td><td><p><code>object (<code>ResponseFields</code>)</code></p></td></tr><tr><td><code>content[]</code></td><td><p><code>object (<code>Content</code>)</code></p></td></tr><tr><td><code>structuredContent</code></td><td><p><code>object (<code>Struct</code> format)</code></p><p>If the tool defines an output schema, this field will be populated. Clients that support structured output should ignore the content field above if this field is set.</p></td></tr><tr><td><code>isError</code></td><td><p><code>boolean</code></p><p>Optional.</p></td></tr></tbody></table>

### ResponseFields

JSON representation

```
{
  "instructions": string,
  "metadata": {
    object
  },
  "dependentRequests": {
    string: {
      object (ServerInitiatedRequest)
    },
    ...
  },
  "resumeData": {
    object
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>instructions</code></td><td><p><code>string</code></p><p>Optional. Sent only on the initial response on any RPC.</p></td></tr><tr><td><code>metadata</code></td><td><p><code>object (<code>Struct</code> format)</code></p><p>Escape hatch for arbitrary side-channel data.</p></td></tr><tr><td><code>dependentRequests</code></td><td><p><code>map (key: string, value: object (<code>ServerInitiatedRequest</code>))</code></p><p>Dependent requests. The presence of this field tells the client that the request is incomplete and that the client must try its request again with the result of these dependent requests in the dependent_responses field.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>resumeData</code></td><td><p><code>object (<code>Struct</code> format)</code></p><p>State for the client to echo back in subsequent RPCs for the same peristant request.</p></td></tr></tbody></table>

### Struct

JSON representation

```
{
  "fields": {
    string: value,
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fields</code></td><td><p><code>map (key: string, value: value (<code>Value</code> format))</code></p><p>Unordered map of dynamically typed values.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr></tbody></table>

### FieldsEntry

JSON representation

```
{
  "key": string,
  "value": value
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p></td></tr><tr><td><code>value</code></td><td><p><code>value (<code>Value</code> format)</code></p></td></tr></tbody></table>

### Value

JSON representation

```
{

  "nullValue": null,
  "numberValue": number,
  "stringValue": string,
  "boolValue": boolean,
  "structValue": {
    object
  },
  "listValue": array
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of value. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>nullValue</code></td><td><p><code>null</code></p><p>Represents a JSON <code>null</code>.</p></td></tr><tr><td><code>numberValue</code></td><td><p><code>number</code></p><p>Represents a JSON number. Must not be <code>NaN</code>, <code>Infinity</code> or <code>-Infinity</code>, since those are not supported in JSON. This also cannot represent large Int64 values, since JSON format generally does not support them in its number type.</p></td></tr><tr><td><code>stringValue</code></td><td><p><code>string</code></p><p>Represents a JSON string.</p></td></tr><tr><td><code>boolValue</code></td><td><p><code>boolean</code></p><p>Represents a JSON boolean (<code>true</code> or <code>false</code> literal in JSON).</p></td></tr><tr><td><code>structValue</code></td><td><p><code>object (<code>Struct</code> format)</code></p><p>Represents a JSON object.</p></td></tr><tr><td><code>listValue</code></td><td><p><code>array (<code>ListValue</code> format)</code></p><p>Represents a JSON array.</p></td></tr></tbody></table>

### ListValue

JSON representation

```
{
  "values": [
    value
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>value (<code>Value</code> format)</code></p><p>Repeated field of dynamically typed values.</p></td></tr></tbody></table>

### DependentRequestsEntry

JSON representation

```
{
  "key": string,
  "value": {
    object (ServerInitiatedRequest)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p></td></tr><tr><td><code>value</code></td><td><p><code>object (<code>ServerInitiatedRequest</code>)</code></p></td></tr></tbody></table>

### ServerInitiatedRequest

JSON representation

```
{
  "samplingCreateMessage": {
    object (SamplingCreateMessageRequest)
  },
  "listRootsRequest": {
    object (ListRootsRequest)
  },
  "notifyOnRootListUpdate": boolean,
  "elicitRequest": {
    object (ElicitRequest)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>samplingCreateMessage</code></td><td><p><code>object (<code>SamplingCreateMessageRequest</code>)</code></p><p>Sampling, as per <a href="https://modelcontextprotocol.io/specification/2025-03-26/client/sampling">https://modelcontextprotocol.io/specification/2025-03-26/client/sampling</a>.</p></td></tr><tr><td><code>listRootsRequest</code></td><td><p><code>object (<code>ListRootsRequest</code>)</code></p><p>Root list request, as per <a href="https://modelcontextprotocol.io/specification/2025-03-26/client/roots">https://modelcontextprotocol.io/specification/2025-03-26/client/roots</a>.</p></td></tr><tr><td><code>notifyOnRootListUpdate</code></td><td><p><code>boolean</code></p></td></tr><tr><td><code>elicitRequest</code></td><td><p><code>object (<code>ElicitRequest</code>)</code></p><p>Elicitations, as per <a href="https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation">https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation</a>.</p></td></tr></tbody></table>

### SamplingCreateMessageRequest

JSON representation

```
{
  "messages": [
    {
      object (SamplingMessage)
    }
  ],
  "modelPreferences": {
    object (ModelPreferences)
  },
  "systemPrompt": string,
  "includeContext": enum (IncludeContext),
  "temperature": number,
  "maxTokens": integer,
  "stopSequence": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messages[]</code></td><td><p><code>object (<code>SamplingMessage</code>)</code></p></td></tr><tr><td><code>modelPreferences</code></td><td><p><code>object (<code>ModelPreferences</code>)</code></p><p>Optional.</p></td></tr><tr><td><code>systemPrompt</code></td><td><p><code>string</code></p><p>Optional.</p></td></tr><tr><td><code>includeContext</code></td><td><p><code>enum (<code>IncludeContext</code>)</code></p><p>Optional.</p></td></tr><tr><td><code>temperature</code></td><td><p><code>number</code></p><p>Optional.</p></td></tr><tr><td><code>maxTokens</code></td><td><p><code>integer</code></p><p>Optional.</p></td></tr><tr><td><code>stopSequence[]</code></td><td><p><code>string</code></p><p>Optional.</p></td></tr></tbody></table>

### SamplingMessage

JSON representation

```
{
  "role": enum (Role),
  "text": {
    object (TextContent)
  },
  "image": {
    object (ImageContent)
  },
  "audio": {
    object (AudioContent)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>role</code></td><td><p><code>enum (<code>Role</code>)</code></p><p>Which role is sending the message.</p></td></tr><tr><td><code>text</code></td><td><p><code>object (<code>TextContent</code>)</code></p><p>Exactly one of these fields must be populated. (Not using "oneof", since that causes forward-compatibility problems.)</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>ImageContent</code>)</code></p></td></tr><tr><td><code>audio</code></td><td><p><code>object (<code>AudioContent</code>)</code></p></td></tr></tbody></table>

### TextContent

JSON representation

```
{
  "text": string,
  "annotations": {
    object (Annotations)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p></td></tr><tr><td><code>annotations</code></td><td><p><code>object (<code>Annotations</code>)</code></p><p>Optional.</p></td></tr></tbody></table>

### Annotations

JSON representation

```
{
  "audience": [
    enum (Role)
  ],
  "priority": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>audience[]</code></td><td><p><code>enum (<code>Role</code>)</code></p></td></tr><tr><td><code>priority</code></td><td><p><code>number</code></p><p>Must be in range [0,1].</p></td></tr></tbody></table>

### ImageContent

JSON representation

```
{
  "data": string,
  "mimeType": string,
  "annotations": {
    object (Annotations)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>data</code></td><td><p><code>string (bytes format)</code></p><p>A base64-encoded string.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p></td></tr><tr><td><code>annotations</code></td><td><p><code>object (<code>Annotations</code>)</code></p><p>Optional.</p></td></tr></tbody></table>

### AudioContent

JSON representation

```
{
  "data": string,
  "mimeType": string,
  "annotations": {
    object (Annotations)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>data</code></td><td><p><code>string (bytes format)</code></p><p>A base64-encoded string.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p></td></tr><tr><td><code>annotations</code></td><td><p><code>object (<code>Annotations</code>)</code></p><p>Optional.</p></td></tr></tbody></table>

### ModelPreferences

JSON representation

```
{
  "hints": [
    {
      object (ModelHint)
    }
  ],
  "intelligencePriority": number,
  "speedPriority": number,
  "costPriority": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>hints[]</code></td><td><p><code>object (<code>ModelHint</code>)</code></p></td></tr><tr><td><code>intelligencePriority</code></td><td><p><code>number</code></p></td></tr><tr><td><code>speedPriority</code></td><td><p><code>number</code></p></td></tr><tr><td><code>costPriority</code></td><td><p><code>number</code></p></td></tr></tbody></table>

### ModelHint

JSON representation

```
{
  "name": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Optional.</p></td></tr></tbody></table>

### ElicitRequest

JSON representation

```
{
  "message": string,
  "requestedSchema": {
    string: {
      object (PrimitiveSchemaDefinition)
    },
    ...
  },
  "requiredFields": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>message</code></td><td><p><code>string</code></p><p>Message to present to user. Required.</p></td></tr><tr><td><code>requestedSchema</code></td><td><p><code>map (key: string, value: object (<code>PrimitiveSchemaDefinition</code>))</code></p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>requiredFields[]</code></td><td><p><code>string</code></p></td></tr></tbody></table>

### RequestedSchemaEntry

JSON representation

```
{
  "key": string,
  "value": {
    object (PrimitiveSchemaDefinition)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>key</code></td><td><p><code>string</code></p></td></tr><tr><td><code>value</code></td><td><p><code>object (<code>PrimitiveSchemaDefinition</code>)</code></p></td></tr></tbody></table>

### PrimitiveSchemaDefinition

JSON representation

```
{
  "stringSchema": {
    object (StringSchema)
  },
  "numberSchema": {
    object (NumberSchema)
  },
  "booleanSchema": {
    object (BooleanSchema)
  },
  "enumSchema": {
    object (EnumSchema)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>stringSchema</code></td><td><p><code>object (<code>StringSchema</code>)</code></p><p>Exactly one of these fields will be present. (Not using "oneof", since that causes forward-compatibility problems.)</p></td></tr><tr><td><code>numberSchema</code></td><td><p><code>object (<code>NumberSchema</code>)</code></p></td></tr><tr><td><code>booleanSchema</code></td><td><p><code>object (<code>BooleanSchema</code>)</code></p></td></tr><tr><td><code>enumSchema</code></td><td><p><code>object (<code>EnumSchema</code>)</code></p></td></tr></tbody></table>

### StringSchema

JSON representation

```
{
  "title": string,
  "description": string,
  "minLength": string,
  "maxLength": string,
  "format": enum (Format)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p></td></tr><tr><td><code>minLength</code></td><td><p><code>string</code></p></td></tr><tr><td><code>maxLength</code></td><td><p><code>string</code></p></td></tr><tr><td><code>format</code></td><td><p><code>enum (<code>Format</code>)</code></p></td></tr></tbody></table>

### NumberSchema

JSON representation

```
{
  "title": string,
  "description": string,
  "minimum": string,
  "maximum": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p></td></tr><tr><td><code>minimum</code></td><td><p><code>string</code></p></td></tr><tr><td><code>maximum</code></td><td><p><code>string</code></p></td></tr></tbody></table>

### BooleanSchema

JSON representation

```
{
  "title": string,
  "description": string,
  "default": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p></td></tr><tr><td><code>default</code></td><td><p><code>boolean</code></p></td></tr></tbody></table>

### EnumSchema

JSON representation

```
{
  "title": string,
  "description": string,
  "enumList": [
    string
  ],
  "enumNames": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p></td></tr><tr><td><code>enumList[]</code></td><td><p><code>string</code></p></td></tr><tr><td><code>enumNames[]</code></td><td><p><code>string</code></p></td></tr></tbody></table>

### Content

JSON representation

```
{
  "text": {
    object (TextContent)
  },
  "image": {
    object (ImageContent)
  },
  "audio": {
    object (AudioContent)
  },
  "embeddedResource": {
    object (EmbeddedResource)
  },
  "resourceLink": {
    object (Resource)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>object (<code>TextContent</code>)</code></p><p>Unstructured result contents. At least one will be populated if the tool does not define an output schema. If the tool does define an output schema, the structured_content field will be populated instead, but one of these fields may still be populated for backward compatibility.</p><p>No more than one of these fields must be populated. (Not using "oneof", since that causes forward-compatibility problems.)</p></td></tr><tr><td><code>image</code></td><td><p><code>object (<code>ImageContent</code>)</code></p></td></tr><tr><td><code>audio</code></td><td><p><code>object (<code>AudioContent</code>)</code></p></td></tr><tr><td><code>embeddedResource</code></td><td><p><code>object (<code>EmbeddedResource</code>)</code></p></td></tr><tr><td><code>resourceLink</code></td><td><p><code>object (<code>Resource</code>)</code></p></td></tr></tbody></table>

### EmbeddedResource

JSON representation

```
{
  "contents": {
    object (ResourceContents)
  },
  "annotations": {
    object (Annotations)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contents</code></td><td><p><code>object (<code>ResourceContents</code>)</code></p></td></tr><tr><td><code>annotations</code></td><td><p><code>object (<code>Annotations</code>)</code></p><p>Optional.</p></td></tr></tbody></table>

### ResourceContents

JSON representation

```
{
  "uri": string,
  "mimeType": string,
  "text": string,
  "blob": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p></td></tr><tr><td><code>text</code></td><td><p><code>string</code></p><p>Exactly one of these fields must be populated. (Not using "oneof", since that causes forward-compatibility problems.)</p></td></tr><tr><td><code>blob</code></td><td><p><code>string (bytes format)</code></p><p>A base64-encoded string.</p></td></tr></tbody></table>

### Resource

JSON representation

```
{
  "uri": string,
  "name": string,
  "title": string,
  "description": string,
  "mimeType": string,
  "annotations": {
    object (Annotations)
  },
  "size": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>uri</code></td><td><p><code>string</code></p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Optional.</p></td></tr><tr><td><code>mimeType</code></td><td><p><code>string</code></p><p>Optional.</p></td></tr><tr><td><code>annotations</code></td><td><p><code>object (<code>Annotations</code>)</code></p><p>Optional.</p></td></tr><tr><td><code>size</code></td><td><p><code>string</code></p><p>Optional.</p></td></tr></tbody></table>

### Tool Annotations

Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
