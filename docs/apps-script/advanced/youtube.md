---
source: https://developers.google.com/apps-script/advanced/youtube
root: apps-script
fetched_at: 2026-04-23T15:18:08.548Z
---

# YouTube Service

## Page Summary

- Apps Script allows access to the YouTube Data API and YouTube Live Streaming API for managing videos, playlists, channels, and live events.
- The YouTube service in Apps Script is an advanced service that must be enabled before use and utilizes the same objects, methods, and parameters as the public API.
- Reference documentation and support pages are available for both the YouTube Data API and YouTube Live Streaming API.
- Sample code demonstrates how to search for videos by keyword, retrieve a user's uploaded videos, and subscribe to a YouTube channel.

playlists, channels, and live events with the YouTube Data API and YouTube Live Streaming API.

The YouTube service lets you use the [YouTube Data API](https://developers.google.com/youtube/v3) and [YouTube Live Streaming API](https://developers.google.com/youtube/v3/live) in Google Apps Script. This API gives users the ability to manage their videos, playlists, channels, and live events.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the following reference documentation:

- [YouTube Data API](https://developers.google.com/youtube/v3/docs)
- [YouTube Live Streaming API](https://developers.google.com/youtube/v3/live/docs)

Like all advanced services in Apps Script, the YouTube service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the corresponding support pages:

- [YouTube Data API support](https://developers.google.com/youtube/v3/support)
- [YouTube Live Streaming API support](https://developers.google.com/youtube/v3/live/support)

## Sample code

The following sample code uses [version 3](https://developers.google.com/youtube/v3/docs) of the YouTube Data API.

### Search by keyword

This function searches for videos about dogs, then logs the video IDs and title. Note that this sample limits the results to 25. To return more results, pass additional parameters as shown in the [YouTube Data API reference documentation](https://developers.google.com/youtube/v3/docs/search/list).

```
/**
 * Searches for videos about dogs, then logs the video IDs and title.
 * Note that this sample limits the results to 25. To return more
 * results, pass additional parameters as shown in the YouTube Data API docs.
 * @see https://developers.google.com/youtube/v3/docs/search/list
 */
function searchByKeyword() {
  try {
    const results = YouTube.Search.list("id,snippet", {
      q: "dogs",
      maxResults: 25,
    });
    if (results === null) {
      console.log("Unable to search videos");
      return;
    }
    for (const item of results.items) {
      console.log("[%s] Title: %s", item.id.videoId, item.snippet.title);
    }
  } catch (err) {
    // TODO (developer) - Handle exceptions from Youtube API
    console.log("Failed with an error %s", err.message);
  }
}
```

### Retrieve uploads

This function retrieves the user's uploaded videos. It does this using the following steps:

1. Fetches the user's channel
2. Fetches the user's `uploads` playlist
3. Iterates through this playlist and logs the video IDs and titles
4. If there is a next page of results, fetches it, then returns to step 3

```
/**
 * This function retrieves the user's uploaded videos by:
 * 1. Fetching the user's channel's.
 * 2. Fetching the user's "uploads" playlist.
 * 3. Iterating through this playlist and logs the video IDs and titles.
 * 4. If there is a next page of resuts, fetching it and returns to step 3.
 */
function retrieveMyUploads() {
  try {
    // @see https://developers.google.com/youtube/v3/docs/channels/list
    const results = YouTube.Channels.list("contentDetails", {
      mine: true,
    });
    if (!results || results.items.length === 0) {
      console.log("No Channels found.");
      return;
    }
    for (let i = 0; i < results.items.length; i++) {
      const item = results.items[i];
      /** Get the channel ID - it's nested in contentDetails, as described in the
       * Channel resource: https://developers.google.com/youtube/v3/docs/channels.
       */
      const playlistId = item.contentDetails.relatedPlaylists.uploads;
      let nextPageToken = null;
      do {
        // @see: https://developers.google.com/youtube/v3/docs/playlistItems/list
        const playlistResponse = YouTube.PlaylistItems.list("snippet", {
          playlistId: playlistId,
          maxResults: 25,
          pageToken: nextPageToken,
        });
        if (!playlistResponse || playlistResponse.items.length === 0) {
          console.log("No Playlist found.");
          break;
        }
        for (let j = 0; j < playlistResponse.items.length; j++) {
          const playlistItem = playlistResponse.items[j];
          console.log(
            "[%s] Title: %s",
            playlistItem.snippet.resourceId.videoId,
            playlistItem.snippet.title,
          );
        }
        nextPageToken = playlistResponse.nextPageToken;
      } while (nextPageToken);
    }
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log("Failed with err %s", err.message);
  }
}
```

### Subscribe to channel

This sample subscribes the user to the Google Developers channel on YouTube.

```
/**
 * This sample subscribes the user to the Google Developers channel on YouTube.
 * @see https://developers.google.com/youtube/v3/docs/subscriptions/insert
 */
function addSubscription() {
  // Replace this channel ID with the channel ID you want to subscribe to
  const channelId = "UC_x5XG1OV2P6uZZ5FSM9Ttw";
  const resource = {
    snippet: {
      resourceId: {
        kind: "youtube#channel",
        channelId: channelId,
      },
    },
  };

  try {
    const response = YouTube.Subscriptions.insert(resource, "snippet");
    console.log(
      "Added subscription for channel title : %s",
      response.snippet.title,
    );
  } catch (e) {
    if (e.message.match("subscriptionDuplicate")) {
      console.log(
        \`Cannot subscribe; already subscribed to channel: ${channelId}\`,
      );
    } else {
      // TODO (developer) - Handle exception
      console.log(\`Error adding subscription: ${e.message}\`);
    }
  }
}
```
