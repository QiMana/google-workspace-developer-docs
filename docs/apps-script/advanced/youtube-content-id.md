---
source: https://developers.google.com/apps-script/advanced/youtube-content-id
root: apps-script
fetched_at: 2026-04-23T15:18:06.536Z
---

# YouTube Content ID Service

## Page Summary

- The YouTube Content ID service in Apps Script allows developers to use the YouTube Content ID API to interact with YouTube's rights management system.
- This service is specifically for YouTube content partners and is not accessible to all developers.
- You can use this API to create and manage your assets, claims, and campaigns as a YouTube partner.
- This is an advanced service that requires enablement before use.

manage assets, claims, and campaigns for YouTube content partners.

The YouTube Content ID service lets you use the [YouTube Content ID API](https://developers.google.com/youtube/partner) in Google Apps Script. This API lets developers interact directly with YouTube's Content ID rights management system. As a YouTube partner, you can use the API to create and manage your assets, claims and campaigns.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/youtube/partner/docs/v1) for the public YouTube Content ID API. Like all advanced services in Apps Script, the advanced YouTube Content ID service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the [YouTube API support guide](https://developers.google.com/youtube/v3/support).

## Sample code

The following sample code uses [version 1](https://developers.google.com/youtube/partner/docs/v1) of the YouTube Content ID API.

### Claim your video

This function creates a partner-uploaded claim on your video with the specified asset and policy rules.

```
/**
 * This function creates a partner-uploaded claim on a video with the specified
 * asset and policy rules.
 * @see https://developers.google.com/youtube/partner/docs/v1/claims/insert
 */
function claimYourVideoWithMonetizePolicy() {
  // The ID of the content owner that you are acting on behalf of.
  const onBehalfOfContentOwner = "replaceWithYourContentOwnerID";
  // A YouTube video ID to claim. In this example, the video must be uploaded
  // to one of your onBehalfOfContentOwner's linked channels.
  const videoId = "replaceWithYourVideoID";
  const assetId = "replaceWithYourAssetID";
  const claimToInsert = {
    videoId: videoId,
    assetId: assetId,
    contentType: "audiovisual",
    // Set the claim policy to monetize. You can also specify a policy ID here
    // instead of policy rules.
    // For details, please refer to the YouTube Content ID API Policies
    // documentation:
    // https://developers.google.com/youtube/partner/docs/v1/policies
    policy: { rules: [{ action: "monetize" }] },
  };
  try {
    const claimInserted = YouTubeContentId.Claims.insert(claimToInsert, {
      onBehalfOfContentOwner: onBehalfOfContentOwner,
    });
    console.log("Claim created on video %s: %s", videoId, claimInserted);
  } catch (e) {
    console.log(
      "Failed to create claim on video %s, error: %s",
      videoId,
      e.message,
    );
  }
}
```

### Update asset ownership

This function updates your ownership on an existing asset.

```
/**
 * This function updates your onBehalfOfContentOwner's ownership on an existing
 * asset.
 * @see https://developers.google.com/youtube/partner/docs/v1/ownership/update
 */
function updateAssetOwnership() {
  // The ID of the content owner that you are acting on behalf of.
  const onBehalfOfContentOwner = "replaceWithYourContentOwnerID";
  // Replace values with your asset id
  const assetId = "replaceWithYourAssetID";
  // The new ownership here would replace your existing ownership on the asset.
  const myAssetOwnership = {
    general: [
      {
        ratio: 100,
        owner: onBehalfOfContentOwner,
        type: "include",
        territories: ["US", "CA"],
      },
    ],
  };
  try {
    const updatedOwnership = YouTubeContentId.Ownership.update(
      myAssetOwnership,
      assetId,
      { onBehalfOfContentOwner: onBehalfOfContentOwner },
    );
    console.log("Ownership updated on asset %s: %s", assetId, updatedOwnership);
  } catch (e) {
    console.log(
      "Ownership update failed on asset %s, error: %s",
      assetId,
      e.message,
    );
  }
}
```

### Release a claim

This function releases an existing claim you have on a video.

```
/**
 * This function releases an existing claim your onBehalfOfContentOwner has
 * on a video.
 * @see https://developers.google.com/youtube/partner/docs/v1/claims/patch
 */
function releaseClaim() {
  // The ID of the content owner that you are acting on behalf of.
  const onBehalfOfContentOwner = "replaceWithYourContentOwnerID";
  // The ID of the claim to be released.
  const claimId = "replaceWithYourClaimID";
  // To release the claim, change the resource's status to inactive.
  const claimToBeReleased = {
    status: "inactive",
  };
  try {
    const claimReleased = YouTubeContentId.Claims.patch(
      claimToBeReleased,
      claimId,
      { onBehalfOfContentOwner: onBehalfOfContentOwner },
    );
    console.log("Claim %s was released: %s", claimId, claimReleased);
  } catch (e) {
    console.log("Failed to release claim %s, error: %s", claimId, e.message);
  }
}
```
