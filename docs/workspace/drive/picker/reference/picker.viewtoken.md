---
source: https://developers.google.com/workspace/drive/picker/reference/picker.viewtoken
root: workspace
fetched_at: 2026-04-23T15:28:34.976Z
---

# Enum ViewToken

## Enum ViewToken

`ViewToken` is an enumerated type used to describe the elements of a `ResponseObject.viewToken`.

## Examples

Basic usage

```
const viewToken = response.viewToken;
const viewId = viewToken[google.picker.ViewToken.VIEW_ID];
const label = viewToken[google.picker.ViewToken.LABEL];
const viewOptions = viewToken[google.picker.ViewToken.VIEW_OPTIONS];
```

## Signature

```
export enum ViewToken
```

## Members

| Name | Description |
| --- | --- |
| [`VIEW_ID`](./picker.viewtoken.view_id.md) |  |
| [`LABEL`](./picker.viewtoken.label.md) |  |
| [`VIEW_OPTIONS`](./picker.viewtoken.view_options.md) |  |
