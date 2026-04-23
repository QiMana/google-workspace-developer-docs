---
source: https://developers.google.com/workspace/add-ons/editors/slides
root: workspace
fetched_at: 2026-04-23T15:22:44.793Z
---

# Extend Google Slides with add-ons

## Page Summary

- Google Slides is a cloud-based presentation tool with real-time collaboration and robust features for creating custom presentations.
- Slides add-ons enhance Google Slides by allowing users to build presentations, connect to external systems, and integrate with other Google Workspace apps.
- Developers can utilize Apps Script and the Slides service to programmatically read, edit, format, and visualize Google Slides presentations.
- Apps Script triggers can automate tasks within Google Slides by executing specific functions when predefined events occur, like opening a presentation.
- Google provides comprehensive documentation and guides to support developers in building and extending Google Slides functionality with add-ons.

[Google Slides](https://workspace.google.com/products/slides/) is a cloud-based presentation solution with real-time collaboration and powerful tools that let you quickly build custom slide decks.

You can extend Slides with add-ons that help users construct new presentations, establish connectivity to third-party systems, and integrate your Slides data with other Google Workspace applications (like Google Sheets).

You can see the Slides add-ons others have built on the [Google Workspace Marketplace](https://workspace.google.com/marketplace/category/works-with-slides).

## What you can do

Here are a few things you can do with add-ons that extend Slides:

- Read, edit, visualize, and format slides in Slides presentations using the built-in Apps Script [Slides service](../../../apps-script/reference/slides.md).
- Use the Apps Script [advanced Slides service](../../../apps-script/advanced/slides.md) to access the [Google Slides API](../../slides/api/guides/overview.md) directly.
- Create [custom menus](../concepts/menus.md) and define multiple [custom dialogs and sidebars](../concepts/dialogs.md) interfaces using standard HTML and CSS.
- Create add-ons [triggers](#triggers) that run specified functions when certain triggering events occur.

Slides add-ons are built using Apps Script. To learn more about how to access and manage Slides with Apps Script, see [Extending Slides](../../../apps-script/guides/slides.md).

## Presentation structure

A Slides presentation consists of pages, each of which has some number of elements such as text boxes and images.

The Apps Script [Slides service](../../../apps-script/reference/slides.md) provides several classes to represent organizational structures in Slides (such as [`Slide`](../../../apps-script/reference/slides/slide.md) and [`Shape`](../../../apps-script/reference/slides/shape.md)). You can use these classes to read and modify Slides data and behavior.

To learn more about how Slides presentations are organized, see [Structure of a presentation](../../../apps-script/guides/slides/presentations.md).

## Triggers

Apps Script [triggers](../concepts/editor-triggers.md) let a script project execute a specified function when certain conditions are met, such as when a presentation is opened or when an add-on is installed.

See [add-on triggers](../concepts/editor-triggers.md) for more information on what triggers can be used with Slides add-ons and what restrictions apply to their use.

## Further reading

The following Apps Script guides are helpful when developing Slides add-ons:

- [Extending Slides](../../../apps-script/guides/slides.md)
- [Structure of a presentation](../../../apps-script/guides/slides/presentations.md)
- [Sizing and positioning page elements](../../../apps-script/guides/slides/moving-elements.md)
- [Selecting items in a presentation](../../../apps-script/guides/slides/selecting.md)
- [Editing and styling text](../../../apps-script/guides/slides/editing-styling.md)
- [Lifecycle of an update](../../../apps-script/guides/slides/lifecycle.md)
