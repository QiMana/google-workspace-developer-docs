---
source: https://developers.google.com/apps-script/advanced/tasks
root: apps-script
fetched_at: 2026-04-23T15:18:06.810Z
---

# Tasks Service

## Page Summary

- The Tasks service in Apps Script allows you to use the Google Tasks API to manage tasks in Gmail.
- This is an advanced service that needs to be enabled before use.
- Detailed information and a sample application demonstrating read and write operations are available.
- Sample code is provided for listing task lists, listing tasks within a list, and adding a new task.

the Google Tasks API.

The Tasks service lets you use the [Google Tasks API](../../workspace/tasks.md) in Google Apps Script. This API gives users the ability to manage their tasks in Gmail.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the [reference documentation](../../workspace/tasks/reference/rest.md) for the Tasks API. Like all advanced services in Apps Script, the Tasks service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [Tasks support guide](../../workspace/tasks/support.md).

## Sample application

The sample web application Simple Tasks demonstrates how to use the Tasks service for both read and write operations. You can view the full source code on our [GitHub repository](https://github.com/googleworkspace/apps-script-samples/tree/main/tasks/simpleTasks).

[![](https://developers.google.com/static/apps-script/images/simple_tasks.png)](https://github.com/googleworkspace/apps-script-samples/tree/main/tasks/simpleTasks)

## Sample code

The following sample code uses [version 1](../../workspace/tasks/reference/rest.md) of the API.

### List task lists

This sample lists the task lists in your account.

```
/**
 * Lists the titles and IDs of tasksList.
 * @see https://developers.google.com/tasks/reference/rest/v1/tasklists/list
 */
function listTaskLists() {
  try {
    // Returns all the authenticated user's task lists.
    const taskLists = Tasks.Tasklists.list();
    // If taskLists are available then print all tasklists.
    if (!taskLists.items) {
      console.log("No task lists found.");
      return;
    }
    // Print the tasklist title and tasklist id.
    for (let i = 0; i < taskLists.items.length; i++) {
      const taskList = taskLists.items[i];
      console.log(
        'Task list with title "%s" and ID "%s" was found.',
        taskList.title,
        taskList.id,
      );
    }
  } catch (err) {
    // TODO (developer) - Handle exception from Task API
    console.log("Failed with an error %s ", err.message);
  }
}
```

### List tasks

This sample lists the tasks within a given task list.

```
/**
 * Lists task items for a provided tasklist ID.
 * @param  {string} taskListId The tasklist ID.
 * @see https://developers.google.com/tasks/reference/rest/v1/tasks/list
 */
function listTasks(taskListId) {
  try {
    // List the task items of specified tasklist using taskList id.
    const tasks = Tasks.Tasks.list(taskListId);
    // If tasks are available then print all task of given tasklists.
    if (!tasks.items) {
      console.log("No tasks found.");
      return;
    }
    // Print the task title and task id of specified tasklist.
    for (let i = 0; i < tasks.items.length; i++) {
      const task = tasks.items[i];
      console.log(
        'Task with title "%s" and ID "%s" was found.',
        task.title,
        task.id,
      );
    }
  } catch (err) {
    // TODO (developer) - Handle exception from Task API
    console.log("Failed with an error %s", err.message);
  }
}
```

### Add task

This sample adds a new task to a task list.

```
/**
 * Adds a task to a tasklist.
 * @param {string} taskListId The tasklist to add to.
 * @see https://developers.google.com/tasks/reference/rest/v1/tasks/insert
 */
function addTask(taskListId) {
  // Task details with title and notes for inserting new task
  let task = {
    title: "Pick up dry cleaning",
    notes: "Remember to get this done!",
  };
  try {
    // Call insert method with taskDetails and taskListId to insert Task to specified tasklist.
    task = Tasks.Tasks.insert(task, taskListId);
    // Print the Task ID of created task.
    console.log('Task with ID "%s" was created.', task.id);
  } catch (err) {
    // TODO (developer) - Handle exception from Tasks.insert() of Task API
    console.log("Failed with an error %s", err.message);
  }
}
```
