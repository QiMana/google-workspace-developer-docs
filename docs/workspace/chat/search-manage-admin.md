---
source: https://developers.google.com/workspace/chat/search-manage-admin
root: workspace
fetched_at: 2026-04-23T15:25:35.364Z
---

# Search for and manage Google Chat spaces for your Google Workspace organization

## Page Summary

- This guide explains how Google Workspace administrators can use the Google Chat API to manage named spaces within their organization.
- Administrators can use the `search()` method to audit spaces, find and delete inactive spaces, export space lists, and find space managers.
- The guide provides code samples in Python to demonstrate how to search for spaces and delete inactive ones using the API.
- To use these features, administrators need a Google Workspace account with specific privileges and must configure their environment properly.
- The `search()` method offers various query parameters to filter results based on criteria like display name, creation date, and last activity time.

This guide explains how a Google Workspace administrator can use the [`search()` method](./api/reference/rest/v1/spaces/search.md) on a [`Space` resource](./api/reference/rest/v1/spaces.md) of the Google Chat API to manage named spaces across their organization and perform administrative tasks.

As a Google Workspace administrator, you can only use the Chat API to manage named spaces, which are defined as a [`SpaceType`](./api/reference/rest/v1/spaces.md#spacetype) of `SPACE`. Named spaces are persistent places where people send messages, share files, and collaborate. You can't use the Chat API to manage direct messages (DMs) or group chats.

The [`Space` resource](./api/reference/rest/v1/spaces.md) represents a place where people and Chat apps can send messages, share files, and collaborate. There are several types of spaces:

- Direct messages (DMs) are conversations between two users or a user and a Chat app.
- Group chats are conversations between three or more users and Chat apps.
- Named spaces are persistent places where people send messages, share files, and collaborate.

As a Google Workspace administrator, you can use the Chat API to search for and manage named spaces in your organization in the following ways:

- **Audit spaces in the organization.** Using the `search()` method, you can retrieve a list of all spaces in an organization with detailed information about each space's settings and metadata such as creation date, last activity date, number of members, status of history setting, and ability to invite external guests.
- **Find and delete inactive spaces.** Using the `search()` method, you can find spaces that haven't been used since a specified date and time and then delete them. For further details and sample code, see [Find and delete inactive spaces](#find-and-delete-inactive-spaces).
- **Export a list of spaces based on search criteria.** Using the `search()` method, you can retrieve a list of spaces that meet criteria specified in the `query` and export the results to a CSV file for analysis.
- **Find and contact space managers.** Using the `search()` method, you can retrieve a list of all spaces in an organization, then use the [`members.list()` method](./api/reference/rest/v1/spaces.members/list.md) to retrieve a list of all space members that are managers.
- **Find spaces without designated managers.** Using the `search()` method, you can retrieve a list of all spaces in an organization, then use the `members.list()` method to retrieve a list of spaces that don't have any managers.

## Prerequisites

### Python

- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).
- Set up your environment:
	- [Create a Google Cloud project](../guides/create-project.md).
		- [Configure the OAuth consent screen](../guides/configure-oauth-consent.md).
		- [Enable and configure the Google Chat API](./configure-chat-api.md) with a name, icon, and description for your Chat app.
		- Install the Python [Google API Client Library](./libraries.md#google-api-client-libraries).
		- [Create OAuth client ID credentials](./authenticate-authorize-chat-user.md#step-2:) for a desktop application. To run the sample in this guide, save the credentials as a JSON file named `credentials.json` to your local directory.
- [Choose an authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports user authentication.
- You must have **Manage Chat and Spaces conversation** [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges) for your Google Workspace organization.

## Call the Google Chat API as an administrator

To authenticate as a user with [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges), you must pass the following in your request:

- Specify an [authorization scope](./authenticate-authorize.md#asynchronous-chat-calls) that supports using user authentication with administrator privileges.
- Set the `useAdminAccess` field to `true`.

This section shows the following examples of calling the Chat API as an administrator:

- [Search for spaces](#search-for-spaces) by calling the `search()` method.
- [Find and delete inactive spaces](#find-and-delete-inactive-spaces) in your organization by calling the `search()` method to return a list of spaces that have been inactive and then calling the `delete()` method to delete them.

### Search for spaces across your organization

This example explains how Google Workspace administrators can use the `search()` method on the `Space` resource of the Chat API to search for spaces across an organization based on specified criteria.

To call the `search()` method with [user authentication](./authenticate-authorize-chat-user.md) and [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges), you must specify the following in the request:

- Specify the `chat.admin.spaces` or `chat.admin.spaces.readonly` authorization scope.
- Specify `useAdminAccess=true`.
- Specify the search [`query`](./api/reference/rest/v1/spaces/search.md#body.QUERY_PARAMETERS.query) parameters to filter the results:
	- `customer = "customers/my_customer"` - required and the only supported value is `customers/my_customer`
		- `spaceType = "SPACE"` - required and the only supported value is `SPACE`
		- Optionally, one or more additional queries to further filter your space search, such as key words in display names (`displayName`), the creation date (`createTime`), or based on space activity (`lastActiveTime`).

The following code shows an example of how to use administrator privileges to search for spaces with a display name that contains "Hello" and "World", in any combination:

### Python

1. In your working directory, create a file named `search_spaces_for_hello_world.py`.
2. Include the following code in `search_spaces_for_hello_world.py`:
	```
	from google_auth_oauthlib.flow import InstalledAppFlow
	from googleapiclient.discovery import build
	SCOPES = [
	  'https://www.googleapis.com/auth/chat.admin.spaces.readonly',
	]
	def main():
	# Authenticate with Google Workspace
	# and get user authorization.
	flow = InstalledAppFlow.from_client_secrets_file(
	    'credentials.json',
	    SCOPES,
	)
	creds = flow.run_local_server()
	# Build a service endpoint for Chat API.
	chat = build('chat', 'v1', credentials=creds)
	spaces = []
	page_token = ''
	# Search for all spaces.
	while True:
	  result = (
	      chat.spaces()
	      .search(
	          useAdminAccess=True,
	          query=(
	            'customer = "customers/my_customer"'
	            'AND spaceType = "SPACE"'
	            'AND displayName:"Hello World"'
	            )
	pageToken=page_token,
	      )
	      .execute()
	  )
	  if 'spaces' not in result:
	    print('No spaces found named Hello World.')
	    return
	  spaces.extend(result['spaces'])
	  if 'nextPageToken' in result:
	    page_token = result['nextPageToken']
	  else:
	    break
	print(str(len(spaces)) + ' spaces found:')
	# Prints the list of spaces.
	print(spaces)
	```
3. In your working directory, build and run the sample:
	```
	python3 search_spaces_for_hello_world.py
	```

### Find and delete inactive spaces

This example explains how Google Workspace administrators can use the `search()` method on the `Space` resource of the Chat API to find inactive spaces and then delete them using the `delete()` method with the `useAdminAccess` parameter.

Inactive Google Chat spaces—ones that are no longer being actively used—can take up valuable storage space and create clutter in the user interface. Using the `search()` method, administrators can find spaces that haven't been used since a specified date and time, such as two months ago. After the list of spaces is enumerated, administrators can then take action on them, such as updating or deleting them.

To search for a list of inactive spaces and then delete them with [user authentication](./authenticate-authorize-chat-user.md) and [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges), pass the following in your requests:

- To search for inactive spaces, specify the following:
	- Specify the `chat.admin.spaces` or `chat.admin.spaces.readonly` authorization scope.
		- Call the `search()` method on the `Spaces` resource.
		- Set `INACTIVE_SPACE_DEADLINE` to the date and time of the last activity that determines spaces to be returned.
		- Specify `useAdminAccess=true`.
		- Specify the search [`query`](./api/reference/rest/v1/spaces/search.md#body.QUERY_PARAMETERS.query) parameters to filter the results:
		- `customer = "customers/my_customer"` - required and the only supported value is `customers/my_customer`
				- `spaceType = "SPACE"` - required and the only supported value is `SPACE`
				- `lastActiveTime` - to filter your request to only return inactive spaces, specify the `lastActiveTime`
- To delete the inactive spaces from the search results, specify the following:
	- Specify the `chat.admin.delete` authorization scope.
		- Call the `delete()` method on the `Spaces` resource.
		- Specify `useAdminAccess=true`.

The following code shows an example of how to search for inactive spaces and delete them using administrator privileges:

### Python

1. In your working directory, create a file named `find_and_delete_inactive_spaces.py`.
2. Include the following code in `find_and_delete_inactive_spaces.py`:
	```
	from google_auth_oauthlib.flow import InstalledAppFlow
	from googleapiclient.discovery import build
	SCOPES = [
	    'https://www.googleapis.com/auth/chat.admin.spaces.readonly',
	    'https://www.googleapis.com/auth/chat.admin.delete',
	]
	# Any spaces that have not been active since this time will be deleted.
	INACTIVE_SPACE_DEADLINE = '"INACTIVE_DATE"'
	def main():
	  # Authenticate with Google Workspace
	  # and get user authorization.
	  flow = InstalledAppFlow.from_client_secrets_file(
	      'credentials.json',
	      SCOPES,
	  )
	  creds = flow.run_local_server()
	  # Build a service endpoint for Chat API.
	  chat = build('chat', 'v1', credentials=creds)
	  spaces = []
	  page_token = ''
	  # Search for all inactive spaces.
	  while True:
	    result = (
	        chat.spaces()
	        .search(
	            useAdminAccess=True,
	            query=(
	                'customer = "customers/my_customer" AND spaceType = "SPACE" AND'
	                ' lastActiveTime < '
	            )
	            + INACTIVE_SPACE_DEADLINE,
	            pageToken=page_token,
	        )
	        .execute()
	    )
	    if 'spaces' not in result:
	      print('No inactive spaces found.')
	      return
	    spaces.extend(result['spaces'])
	    if 'nextPageToken' in result:
	      page_token = result['nextPageToken']
	    else:
	      break
	  print(str(len(spaces)) + ' inactive spaces found:')
	  # Prints the list of inactive spaces.
	  print(spaces)
	  # Delete all inactive spaces.
	  for space in spaces:
	    (
	        chat.spaces()
	        .delete(
	            useAdminAccess=True,
	            name=space['name'],
	        )
	        .execute()
	    )
	    print(
	        'Deleted space: '
	        + space['displayName']
	        + ', Resource Name: '
	        + space['name']
	    )
	if __name__ == '__main__':
	  main()
	```
3. In the code, replace `INACTIVE_DATE` with a date and time in the form of YYYY-MM-DDTHH:MM:SS+HH:MM. For example, "2024-06-01T00:00:00+00:00".
4. In your working directory, build and run the sample:
	```
	python3 find_and_delete_inactive_spaces.py
	```

## Related topics

- [Delete spaces](./delete-spaces.md)
- [List members in a space](./list-members.md)
- [Manage Chat spaces as a Google Workspace administrator](./admin-overview.md)
- [`spaces.search()` method](./api/reference/rest/v1/spaces/search.md)
