---
source: https://developers.google.com/workspace/tasks/overview
root: workspace
fetched_at: 2026-04-23T15:31:57.565Z
---

# Overview

The Google Tasks API lets you search, read, and update Google Tasks content and metadata. This document describes how to use a RESTful calling style and client libraries for various programming languages (currently Java, Python, and PHP) to access and edit Google Tasks data.

Sites or applications that want deeper integration with Google Tasks can use the Google Tasks API. For example, you could use the Google Tasks API to manage Google task lists in a mobile app, or you could integrate tasks into a more extensive workflow app such as [Au-to-do](http://code.google.com/p/au-to-do/).

Google Tasks is based on two basic concepts:

Task List

A list containing tasks. Users can have more than one task list to manage their tasks the way they want.

Task

A single task containing information such as the title of the task, notes, the due date, and the completed date.

## Tasks API data model

A resource is an individual data entity with a unique identifier. The Google Tasks API operates on two types of resources:

Task List Resource

Represents a task list.

Task Resource

Represents a task.

The Tasks API data model is based on groups of resources, called collections:

Task List Collection

Each user has at least one `default` Task List.

Task Collection

Consists of all the Task Resources within a specific Task List Resource.
