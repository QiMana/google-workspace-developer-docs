---
source: https://developers.google.com/apps-script/reference/forms
root: apps-script
fetched_at: 2026-04-23T15:20:10.466Z
---

# Forms Service

## Page Summary

- The Google Forms service allows scripts to create, access, and modify Google Forms.
- An example script demonstrates creating a form with various item types, publishing it, and sharing it.
- The documentation lists numerous classes within the Forms service, including items, responses, validation builders, and enums.
- Detailed information on properties and methods is provided for many of the listed classes, outlining their specific functionalities.

This service allows scripts to create, access, and modify Google Forms.

```
// Create a new unpublished form, then add a checkbox question, a multiple choice question,
// a page break, then a date question and a grid of questions, then publish the form and 
// with responders.
var form = FormApp.create('New Form', /* isPublished= */ false);
var item = form.addCheckboxItem();
item.setTitle('What condiments would you like on your hot dog?');
item.setChoices([
        item.createChoice('Ketchup'),
        item.createChoice('Mustard'),
        item.createChoice('Relish')
    ]);
form.addMultipleChoiceItem()
    .setTitle('Do you prefer cats or dogs?')
    .setChoiceValues(['Cats','Dogs'])
    .showOtherOption(true);
form.addPageBreakItem()
    .setTitle('Getting to know you');
form.addDateItem()
    .setTitle('When were you born?');
form.addGridItem()
    .setTitle('Rate your interests')
    .setRows(['Cars', 'Computers', 'Celebrities'])
    .setColumns(['Boring', 'So-so', 'Interesting']);

form.setPublished(true);
form.addPublishedReaders(['user@example.com', 'group@example.com']);

Logger.log('Published URL: ' + form.getPublishedUrl());
Logger.log('Editor URL: ' + form.getEditUrl());
```
