---
source: https://developers.google.com/workspace/classroom/guides/manage-topics
root: workspace
fetched_at: 2026-04-23T15:25:48.937Z
---

# Manage Topics

A [`Topic`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics) is a label for grouping [`CourseWork`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork) and [`CourseWorkMaterial`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWorkMaterials) stream items within a course. A `Topic` is typically used to categorize these items by similarity, such as the week the items are assigned or their subject. Users can visually organize and filter stream items in the **Classwork** view of the Classroom UI.

Each `Topic` is identified by a unique ID assigned by the server. The `Topic` resource also contains the following:

- `name`: The display name shown in the Classroom UI
- `updateTime`: The time the `Topic` was last updated
- `courseId`: The ID of the course that the `Topic` is associated with

## Create a Topic

You can create a new `Topic` in a course using the [`topics.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/create) method, as shown in the following sample:

### Java

```
Topic topic = null;
try {
  // Create the new Topic.
  Topic content = new Topic().setName("Semester 1");
  topic = service.courses().topics().create(courseId, content).execute();
  System.out.println("Topic id: " + topic.getTopicId() + "\n" + "Course id: " + courseId);
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The courseId does not exist: %s.\n", courseId);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return topic;
```

### Python

```
topic = {
    "name": 'Example Topic'
}
response = service.courses().topics().create(
  courseId=<course ID or alias>,
  body=topic).execute()
print('Topic created: ', response['name'])
```

The `name` field is always required and must be a non-empty string. All other fields are optional.

## Retrieve Topic details

You can retrieve a specific `Topic` by ID with the [`topics.get()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/get) method, as shown in the following sample:

### Java

```
Topic topic = null;
try {
  // Get the topic.
  topic = service.courses().topics().get(courseId, topicId).execute();
  System.out.printf("Topic '%s' found.\n", topic.getName());
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The courseId or topicId does not exist: %s, %s.\n", courseId, topicId);
  }
  throw e;
} catch (Exception e) {
  throw e;
}
return topic;
```

### Python

```
response = service.courses().topics().get(
  courseId=<course ID or alias>,
  id=<topic ID>).execute()
print('{0} ({1})'.format(response['name'], response['topicId']))
```

Use the [`topics.list()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/list) method to retrieve all `Topic` s in a course, as shown in the following sample:

### Java

```
List<Topic> topics = new ArrayList<>();
String pageToken = null;

try {
  do {
    ListTopicResponse response =
        service
            .courses()
            .topics()
            .list(courseId)
            .setPageSize(100)
            .setPageToken(pageToken)
            .execute();

    /* Ensure that the response is not null before retrieving data from it to avoid errors. */
    if (response.getTopic() != null) {
      topics.addAll(response.getTopic());
      pageToken = response.getNextPageToken();
    }
  } while (pageToken != null);

  if (topics.isEmpty()) {
    System.out.println("No topics found.");
  } else {
    for (Topic topic : topics) {
      System.out.printf("%s (%s)\n", topic.getName(), topic.getTopicId());
    }
  }
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The courseId does not exist: %s.\n", courseId);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return topics;
```

### Python

```
topics = []
page_token = None
while True:
    response = service.courses().topics().list(
        pageToken=page_token,
        pageSize=30,
        courseId=<course ID or alias>).execute()
    topics.extend(response.get('topic', []))
    page_token = response.get('nextPageToken', None)
    if not page_token:
        break
if not topics:
    print('No topics found.')
else:
    print('Topics:')
    for topic in topics:
        print('{0} ({1})'.format(topic['name'], topic['topicId']))
```

## Update a Topic

You can update an existing `Topic` `name` with the [`topics.patch()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/patch) method, as shown in the following sample:

### Java

```
Topic topic = null;
try {
  // Retrieve the topic to update.
  Topic topicToUpdate = service.courses().topics().get(courseId, topicId).execute();

  // Update the name field for the topic retrieved.
  topicToUpdate.setName("Semester 2");

  /* Call the patch endpoint and set the updateMask query parameter to the field that needs to
  be updated. */
  topic =
      service
          .courses()
          .topics()
          .patch(courseId, topicId, topicToUpdate)
          .set("updateMask", "name")
          .execute();

  /* Prints the updated topic. */
  System.out.printf("Topic '%s' updated.\n", topic.getName());
} catch (GoogleJsonResponseException e) {
  // TODO(developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The courseId or topicId does not exist: %s, %s.\n", courseId, topicId);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return topic;
```

### Python

```
topic = {
  "name": "New Topic Name"
}
response = service.courses().topics().patch(
  courseId=<course ID or alias>,
  id=<topic ID>,
  updateMask="name",
  body=topic).execute()
print('{0} ({1})'.format(response['name'], response['topicId']))
```

The `Topic` `id` and `updateTime` fields are server-generated and can't be updated with the API.

## Delete a Topic

You can delete an existing `Topic` with the [`topics.delete()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/delete) method, as shown in the following sample:

### Java

```
try {
  service.courses().topics().delete(courseId, topicId).execute();
} catch (GoogleJsonResponseException e) {
  // TODO(developer) - handle error appropriately
  throw e;
} catch (Exception e) {
  throw e;
}
```
