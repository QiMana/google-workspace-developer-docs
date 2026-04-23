---
source: https://developers.google.com/workspace/classroom/guides/onboarding/how-requests-work
root: workspace
fetched_at: 2026-04-23T15:25:49.776Z
---

# How requests work

This page describes a high-level overview of how requests work in the Google Classroom API. The goal is to aid readers who aren't already familiar with resource-oriented design or Google Workspace APIs.

For specific code samples, see the corresponding API guides, for example [Create & manage courses](../manage-courses.md) or [Create & manage coursework](../manage-coursework.md).

## Resource-oriented design

As mentioned in [API resources](../key-concepts/api-structure.md), the Classroom API follows [resource-oriented design](https://google.aip.dev/121) patterns. Most resources have methods for standard operations like creating, reading, updating, and deleting instances of the resource.

For example, it's possible to [`create()`](../../reference/rest/v1/courses/create.md), [`patch()`](../../reference/rest/v1/courses/patch.md), [`get()`](../../reference/rest/v1/courses/get.md), [`list()`](../../reference/rest/v1/courses/list.md), and [`delete()`](../../reference/rest/v1/courses/delete.md) a Classroom [`Course`](../../reference/rest/v1/courses.md) using the API.

## Create

To create a new resource, like a `Course`, call the `create()` method for the corresponding resource.

`Create()` calls always require the initial, critical details of the corresponding resource as input. For example, to create a `Course`, call the `create()` method on the `Course` resource and specify the `name` and `description` in the request, along with optional information like the `room`.

For subresources (sometimes called child resources), identifiers for the parent resource are also required. For example, when creating a [`CourseWork`](../../reference/rest/v1/courses.courseWork.md) within a `Course`, the `Course` `id` is needed to establish in which `Course` the `CourseWork` belongs.

`Create()` methods return an instance of the newly created resource in the API call response. The returned resource typically has any additional, server-generated fields, such as the resource `id` or `creationTime`.

## Patch

To modify existing resources, call the `patch()` method (which is sometimes called `update()`) on the corresponding resource. The `patch()` method is almost identical to `create()`, with two key differences; when calling the `patch()` method you must specify:

1. The `id` of the resource to modify.
2. A list of fields, called an `updateMask`, to determine which fields on the resource to update. This is optional in cases where there is a default set of fields or the fields are inferred.

`Patch()` methods return the full instance of the updated resource in the API call response, with all changes completed.

## Get and list

There are two methods for retrieving resources: `get()` and `list()`.

The `get()` method retrieves a specific resource by some identifier. For example, fetching a `Course` based on `id` or [`alias`](../../reference/rest/v1/courses.aliases.md). The `get()` call returns the full resource directly.

The `list()` method retrieves multiple resources of the same type in a single request, without the need for the individual resource identifiers. Often the `list()` operation gets all the subresources of some parent resource, for example, retrieving all the `CourseWork` within a `Course`. This is useful for minimizing requests, compared to making multiple `get()` calls, and particularly valuable when you don't know the `id` of the resources you want.

Generally, `list()` methods have some maximum amount of resources that can be returned in a single call, and lower limits can be configured by including a `pageSize` value with the call. In cases where there are more resources than the limit, the `list()` method supports *pagination*; each "page" of results that is returned provides a `pageToken`, which can be included in a subsequent `list()` call to fetch the next batch of resources.

## Delete

The `delete()` method accepts a resource identifier, like `id`, and deletes the corresponding resource. If the `delete()` is successful, an empty response is returned.

## Other operations

Not all operations possible with the Classroom API can be achieved with the aforementioned standard operations, for example, modifying the assignees of a `CourseWork` resource. In these cases, custom methods are available, like the [`modifyAssignees`](../../reference/rest/v1/courses.courseWork/modifyAssignees.md) method. The behavior of these methods are bespoke and you should consult the documentation for them individually.
