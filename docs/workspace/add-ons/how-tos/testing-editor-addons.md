---
source: https://developers.google.com/workspace/add-ons/how-tos/testing-editor-addons
root: workspace
fetched_at: 2026-04-23T15:22:59.155Z
---

# Test an Editor add-on

## Page Summary

- Apps Script allows developers to test editor add-ons directly within Google Docs, Sheets, Slides, or Forms to verify functionality and installation flow.
- Developers can create test deployments to specify add-on versions, authorization states, and associated documents for controlled testing environments.
- Saved test deployments can be executed repeatedly, enabling developers to iterate on their add-ons and observe changes in real-time within the test document.
- While offering valuable testing capabilities, test deployments have limitations such as not supporting installable triggers and shared property persistence across deployments using the same add-on and document.
- Test deployments provide a shareable URL for collaborative testing and may require authorization for the script, both within and outside the testing environment.

Thoroughly test add-ons before you publish them to ensure they behave as intended. Apps Script lets you test [Editor add-ons](https://developers.google.com/workspace/add-ons/concepts/types#editor_add-ons) in development on specific Google Docs Sheets Forms, or Slides files. Use testing to:

- Verify that an add-on in a standalone script functions as intended when applied to a sheet, doc, presentation, or form.
- Verify that the add-on installation flow works as intended, particularly for different initial [authorization lifecycle states](https://developers.google.com/workspace/add-ons/concepts/editor-auth-lifecycle#the_complete_lifecycle) ([installed, enabled, or both](https://developers.google.com/workspace/add-ons/concepts/editor-auth-lifecycle#installed_versus_enabled)).
- Verify that the add-on functions as intended when acting on a particular document and its contents.
- Test and compare the current and previous versions of the add-on.

## Create a test deployment

A test deployment is the combination of an add-on and a test document. After you develop a script version and want to test it as an add-on, follow these steps:

1. If you don't have one already, create a spreadsheet, document, presentation, or form to test the add-on with.
2. Open the script project containing your add-on.
3. Select **Deploy** \> **Test deployments**.
4. Next to **Select type**, select **Enable deployment types** and select **Editor add-on**.
5. Select **Create new test** or **Add test**.
6. Choose a code version or select **Latest Code**.
7. In the **Config** section, select the initial [authorization state](https://developers.google.com/workspace/add-ons/concepts/editor-auth-lifecycle#installed_versus_enabled) for the test.
8. Under **Test document**, select **No document selected**. Select the Sheets, Docs, Slides, or Forms file you want to use to test the add-on and select **Insert**.
9. Select **Save test**.

All saved test deployments appear in the **Test deployments** dialog. You can revisit the same test deployment later.

## Run a test deployment

To run a saved test deployment, follow these steps:

1. Open the script project containing your add-on.
2. Select **Deploy** \> **Test deployments**.
3. Under **Saved Tests**, select the radio button next to the saved test deployment you want to run and select **Execute**.

The test document opens in a new tab. The add-on is in the [authorization state](https://developers.google.com/workspace/add-ons/concepts/editor-auth-lifecycle#installed_versus_enabled) specified in the test deployment. Verify that the add-on functions as intended by interacting with its menu and UI elements.

To test the [granular OAuth](https://developers.google.com/apps-script/concepts/scopes#handle-granular) feature on your add-on, ensure that your project doesn't have authorizations. To invalidate any existing authorizations, use [ScriptApp.invalidateAuth](https://developers.google.com/apps-script/reference/script/script-app#invalidateauth).

### Test details

Keep the following in mind when you test Editor add-ons:

- [Installable triggers](https://developers.google.com/workspace/add-ons/concepts/editor-triggers#installable_triggers_in_add-ons) aren't supported. Functionality that depends on installable triggers isn't testable.
- When you run a test deployment set to test with the latest code, you can see changes saved to the script by refreshing the test document.
- The test document has a URL that you can share with editors of the original test document. This lets you collaborate with others during testing and development.
- If your add-on uses the [Properties service](https://developers.google.com/apps-script/reference/properties/properties-service), properties persist and remain available the next time you run the test deployment.
- Any test deployment that uses the same combination of add-on and test document has access to the same property information. For example, if you create two test deployments, the properties saved while running the first are available when you run the second and the other way around, if the deployments use the same script and test document.
- If you run a test deployment, you might be prompted for authorization. Authorizing a script during testing also authorizes the script outside of testing.
