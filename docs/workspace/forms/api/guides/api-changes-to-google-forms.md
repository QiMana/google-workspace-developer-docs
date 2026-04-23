---
source: https://developers.google.com/workspace/forms/api/guides/api-changes-to-google-forms
root: workspace
fetched_at: 2026-04-23T15:28:39.626Z
---

# API Changes to Google Forms

With the introduction of the granular control options for who can respond to Forms, forms need to be published before sharing with responders. To ensure that existing scripts don't break, forms created by the API will be published by default through June 30, 2026. However, to align with the product experience in the UI, forms created by the API after June 30, 2026 will be created in an unpublished state. You must publish the forms before they can accept responses.

## What happens if you do nothing

If no action is taken, then new forms created using APIs after June 30, 2026, will be in an unpublished state by default and won't receive responses.

## What changes do you need to make

- Forms created by API after June 30, 2026, will be created in an unpublished state. Going forward, you will need to explicitly publish the forms created by API by using the [`forms.setPublishedSettings()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/setPublishSettings) method.
- To test publishing a form, first create a form in an unpublished state using the [`forms.create()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/create) method. Then publish the form with the [`forms.setPublishSettings()`](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms/setPublishSettings) method.
- You can control who responds to your form by sharing it with specific users. The [`permissions.create`](https://developers.google.com/workspace/drive/api/reference/rest/v3/permissions/create) method can be used to share the form with responders. Refer to [Share your form with more responders](https://developers.google.com/workspace/forms/api/guides/publish-form#share-form) for more details.
