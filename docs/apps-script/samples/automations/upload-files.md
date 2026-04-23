---
source: https://developers.google.com/apps-script/samples/automations/upload-files
root: apps-script
fetched_at: 2026-04-23T15:22:24.726Z
---

# Upload files to Google Drive from Google Forms

## Page Summary

- Simultaneously upload and organize files in Google Drive using Google Forms.
- A setup function creates a folder and trigger that fire each time someone submits the form, routing the files to the corresponding subfolder.
- The solution utilizes Google Apps Script services such as Script, Properties, Drive, and Forms to handle triggers, store properties, manage files in Drive, and process form responses.
- To use this solution, you need a Google Account, a web browser with internet access, and must set up the Google Form and the associated Apps Script project.

**Coding level**: Beginner  
**Duration**: 10 minutes  
**Project type**: Automation with an [event-driven trigger](../../guides/triggers/installable.md#event-driven_triggers)

## Objectives

After you complete this sample, you'll be able to do the following:

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

Simultaneously upload and organize files in Drive using Forms. The form includes inputs for the files to upload and for how the files should be organized.

![Google Form for uploading files to Google Drive](https://developers.google.com/static/apps-script/samples/images/upload-files-form.png)

![](https://developers.google.com/static/apps-script/samples/images/upload-files-form.png)

### How it works

A setup function creates a folder to store all uploaded files and a trigger that runs each time someone submits the form. When a user fills out the form, they choose files to upload and a subfolder to store the files in. Once the user submits the form, the script routes the files to the corresponding subfolder. If the folder doesn't exist yet, the script creates it.

### Apps Script services

This solution uses the following services:

- [Script service](../../reference/script.md) –Creates the trigger that runs each time someone submits the form.
- [Properties service](../../reference/properties.md) –Stores the ID of the trigger that the script creates during setup to prevent duplicate triggers.
- [Drive service](../../reference/drive.md) –During setup, gets the form's location in Drive and creates a folder in the same location. When a user submits the form, the Drive service routes the files to that folder, and if selected, a designated subfolder. If the subfolder doesn't exist yet, the script creates it.
- [Forms service](../../reference/forms.md) –Gets the files and folder name the user chose after they submit the form and sends it to the Drive service.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

### Create the form

1. Go to [forms.google.com](http://forms.google.com/) and click Blank .
2. Click **Untitled form** and rename the form to **Upload files to Drive**.
3. Click **Untitled question** and rename the question to **Subfolder**.
4. On the **Subfolder** question, click More \> **Description**.
5. For **Description**, enter **Select the subfolder to store your files in. If you select <None>, the files are stored in the Uploaded files folder.**
6. Add the following options to the **Subfolder** question:
	- **<none>**
		- **Project A**
		- **Project B**
		- **Project C**
7. To make the question required, click **Required**.
8. Click Add question .
9. Click **Multiple choice** and select **File upload**.
10. Click **Continue**.
11. For **Question**, enter **Files to upload**. You can choose the file types and maximum number of files you want to let people upload.
12. To make the question required, click **Required**.

### Create the Apps Script project

1. From the form, click More \> **Script editor**.
2. Click **Untitled project** and rename the project to **Upload files to Drive**.
3. To create another script file, click Add a file \> **Script**. Name the file `Setup`.
4. Replace the content of both script files with the following content:
	### Code.gs
	```
	// TODO Before you start using this sample, you must run the setUp()
	// function in the Setup.gs file.
	// Application constants
	const APP_TITLE = "Upload files to Drive from Forms";
	const APP_FOLDER_NAME = "Upload files to Drive (File responses)";
	// Identifies the subfolder form item
	const APP_SUBFOLDER_ITEM = "Subfolder";
	const APP_SUBFOLDER_NONE = "<None>";
	/**
	 * Gets the file uploads from a form response and moves files to the corresponding subfolder.
	 *
	 * @param {object} event - Form submit.
	 */
	function onFormSubmit(e) {
	  try {
	    // Gets the application root folder.
	    let destFolder = getFolder_(APP_FOLDER_NAME);
	    // Gets all form responses.
	    const itemResponses = e.response.getItemResponses();
	    // Determines the subfolder to route the file to, if any.
	    let subFolderName;
	    const dest = itemResponses.filter(
	      (itemResponse) =>
	        itemResponse.getItem().getTitle().toString() === APP_SUBFOLDER_ITEM,
	    );
	    // Gets the destination subfolder name, but ignores if APP_SUBFOLDER_NONE was selected;
	    if (dest.length > 0) {
	      if (dest[0].getResponse() !== APP_SUBFOLDER_NONE) {
	        subFolderName = dest[0].getResponse();
	      }
	    }
	    // Gets the subfolder or creates it if it doesn't exist.
	    if (subFolderName !== undefined) {
	      destFolder = getSubFolder_(destFolder, subFolderName);
	    }
	    console.log(\`Destination folder to use:
	    Name: ${destFolder.getName()}
	    ID: ${destFolder.getId()}
	    URL: ${destFolder.getUrl()}\`);
	    // Gets the file upload response as an array to allow for multiple files.
	    const fileUploads = itemResponses
	      .filter(
	        (itemResponse) =>
	          itemResponse.getItem().getType().toString() === "FILE_UPLOAD",
	      )
	      .map((itemResponse) => itemResponse.getResponse())
	      .reduce((a, b) => a.concat(b), []);
	    // Moves the files to the destination folder.
	    if (fileUploads.length > 0) {
	      for (const fileId of fileUploads) {
	        DriveApp.getFileById(fileId).moveTo(destFolder);
	        console.log(\`File Copied: ${fileId}\`);
	      }
	    }
	  } catch (err) {
	    console.log(err);
	  }
	}
	/**
	 * Returns a Drive folder under the passed in objParentFolder parent
	 * folder. Checks if folder of same name exists before creating, returning
	 * the existing folder or the newly created one if not found.
	 *
	 * @param {object} objParentFolder - Drive folder as an object.
	 * @param {string} subFolderName - Name of subfolder to create/return.
	 * @return {object} Drive folder
	 */
	function getSubFolder_(objParentFolder, subFolderName) {
	  // Iterates subfolders of parent folder to check if folder already exists.
	  const subFolders = objParentFolder.getFolders();
	  while (subFolders.hasNext()) {
	    const folder = subFolders.next();
	    // Returns the existing folder if found.
	    if (folder.getName() === subFolderName) {
	      return folder;
	    }
	  }
	  // Creates a new folder if one doesn't already exist.
	  return objParentFolder
	    .createFolder(subFolderName)
	    .setDescription(
	      \`Created by ${APP_TITLE} application to store uploaded Forms files.\`,
	    );
	}
	```
	### Setup.gs
	```
	// TODO You must run the setUp() function before you start using this sample.
	/**
	 * The setUp() function performs the following:
	 *  - Creates a Google Drive folder named by the APP_FOLDER_NAME
	 *    variable in the Code.gs file.
	 *  - Creates a trigger to handle onFormSubmit events.
	 */
	function setUp() {
	  // Ensures the root destination folder exists.
	  const appFolder = getFolder_(APP_FOLDER_NAME);
	  if (appFolder !== null) {
	    console.log(\`Application folder setup.
	    Name: ${appFolder.getName()}
	    ID: ${appFolder.getId()}
	    URL: ${appFolder.getUrl()}\`);
	  } else {
	    console.log("Could not setup application folder.");
	  }
	  // Calls the function that creates the Forms onSubmit trigger.
	  installTrigger_();
	}
	/**
	 * Returns a folder to store uploaded files in the same location
	 * in Drive where the form is located. First, it checks if the folder
	 * already exists, and creates it if it doesn't.
	 *
	 * @param {string} folderName - Name of the Drive folder.
	 * @return {object} Google Drive Folder
	 */
	function getFolder_(folderName) {
	  // Gets the Drive folder where the form is located.
	  const ssId = FormApp.getActiveForm().getId();
	  const parentFolder = DriveApp.getFileById(ssId).getParents().next();
	  // Iterates through the subfolders to check if folder already exists.
	  // The script checks for the folder name specified in the APP_FOLDER_NAME variable.
	  const subFolders = parentFolder.getFolders();
	  while (subFolders.hasNext()) {
	    const folder = subFolders.next();
	    // Returns the existing folder if found.
	    if (folder.getName() === folderName) {
	      return folder;
	    }
	  }
	  // Creates a new folder if one doesn't already exist.
	  return parentFolder
	    .createFolder(folderName)
	    .setDescription(
	      \`Created by ${APP_TITLE} application to store uploaded files.\`,
	    );
	}
	/**
	 * Installs trigger to capture onFormSubmit event when a form is submitted.
	 * Ensures that the trigger is only installed once.
	 * Called by setup().
	 */
	function installTrigger_() {
	  // Ensures existing trigger doesn't already exist.
	  const propTriggerId =
	    PropertiesService.getScriptProperties().getProperty("triggerUniqueId");
	  if (propTriggerId !== null) {
	    const triggers = ScriptApp.getProjectTriggers();
	    for (const t in triggers) {
	      if (triggers[t].getUniqueId() === propTriggerId) {
	        console.log(
	          \`Trigger with the following unique ID already exists: ${propTriggerId}\`,
	        );
	        return;
	      }
	    }
	  }
	  // Creates the trigger if one doesn't exist.
	  const triggerUniqueId = ScriptApp.newTrigger("onFormSubmit")
	    .forForm(FormApp.getActiveForm())
	    .onFormSubmit()
	    .create()
	    .getUniqueId();
	  PropertiesService.getScriptProperties().setProperty(
	    "triggerUniqueId",
	    triggerUniqueId,
	  );
	  console.log(
	    \`Trigger with the following unique ID was created: ${triggerUniqueId}\`,
	  );
	}
	/**
	 * Removes all script properties and triggers for the project.
	 * Use primarily to test setup routines.
	 */
	function removeTriggersAndScriptProperties() {
	  PropertiesService.getScriptProperties().deleteAllProperties();
	  // Removes all triggers associated with project.
	  const triggers = ScriptApp.getProjectTriggers();
	  for (const t in triggers) {
	    ScriptApp.deleteTrigger(triggers[t]);
	  }
	}
	/**
	 * Removes all form responses to reset the form.
	 */
	function deleteAllResponses() {
	  FormApp.getActiveForm().deleteAllResponses();
	}
	```

## Run the script

1. In the Apps Script editor, switch to the `Setup.gs` file.
2. In the function dropdown, select `setUp`.
3. Click **Run**.
4. When prompted, authorize the script. <<../\_snippets/oauth.md>>
5. Return to the form and click Preview ![Button to preview the Google Form](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/visibility/default/24px.svg).
6. On the form, select a subfolder and upload a file.
7. Click **Submit**.
8. Go to Drive and open the **Upload files to Drive (File responses)** folder. Your uploaded files are in the subfolder you selected on the form.

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Event-driven triggers](../../guides/triggers/installable.md#event-driven_triggers)
- [Forms service reference](../../reference/forms.md)
