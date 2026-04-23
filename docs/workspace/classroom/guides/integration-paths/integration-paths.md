---
source: https://developers.google.com/workspace/classroom/guides/integration-paths/integration-paths
root: workspace
fetched_at: 2026-04-23T15:25:45.379Z
---

# Choose an integration path

This guide introduces the options to connect your service or application with Google Classroom. Select one of these paths to make your content available to users within Classroom [stream items](https://developers.google.com/workspace/classroom/guides/key-concepts/api-structure#stream_items).

## Integration options

There are three ways to connect your learning materials to Google Classroom:

1. Embed [Classroom Share](https://developers.google.com/workspace/classroom/guides/sharebutton) buttons in your product
2. Use [`CourseWork` API](https://developers.google.com/workspace/classroom/guides/coursework-integration) to create and manage stream items with hyperlinks to your product
3. Build a [Classroom add-on](https://developers.google.com/workspace/classroom/add-ons) to to let users discover and access your content within Google Classroom

Classroom Share buttons are the least complex integration. You embed a script in your web application. The script generates a button, which users click to create Classroom stream items. However, your application can't access these stream items after creation, nor access any other Classroom data.

The `CourseWork` API and Classroom add-on paths require your web application to use Classroom API requests to directly control stream items and their contents. Your application retains access to stream items or other resources created by either path. You can also [request user permission](https://developers.google.com/workspace/classroom/guides/auth) for access to other Classroom data. However, you are responsible for hosting, testing, and maintaining all code that interacts with Google.

Classroom add-ons offer the best user experience and discoverability opportunities for your product.

## Which user journeys are supported?

Each integration path provides different user experience and access to Classroom resources. See the following matrix of user journeys to compare the three paths.

The icons in the following table indicate whether the user journey is fully supported, not supported, or **supported with caveats**. Click any to see clarifying information.

| Journey | Classroom Share buttons | CourseWork API | Classroom Add-on |
| --- | --- | --- | --- |
| Users provide OAuth consent to my application |  |  |  |
| I can view Classroom resources associated with a user, such as rosters and courses |  |  |  |
| I can create coursework that links to my content |  |  |  |
| I can modify coursework that I've created |  |  |  |
| I can modify coursework that users create |  |  |  |
| I can set grades for student submissions |  |  |  |
| I can access the attachments on student submissions |  |  |  |
| Teachers discover my content in the Classroom UI |  |  |  |

## What are the differences in developer experience?

Each integration path offers a different developer experience. See the following matrix of developer expectations to compare the three paths.

The icons in the following table indicate how well the integration options match each developer journey. Click any to see clarifying information.

| Journey | Classroom Share buttons | CourseWork API | Classroom Add-on |
| --- | --- | --- | --- |
| I can build an integration without purchasing Google products |  |  |  |
| I can customize my content's appearance in Classroom |  |  |  |
| I receive information about the user or coursework when they open my content from Classroom |  |  |  |
