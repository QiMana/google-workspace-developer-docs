---
source: https://developers.google.com/workspace/gmail/markup/testing-your-schema
root: workspace
fetched_at: 2026-04-23T15:29:59.704Z
---

# Test Your Schemas

This page lists the tools and techniques that can be used to add structured data to your emails and validate its correctness.

## Self testing

You can easily test if your markup is working correctly end-to-end by sending emails to yourself. All emails where the sender and the recipient are the same account ignore the [registration requirements](./registering-with-google.md) and can be used for self-testing. DKIM or SPF authentication is still required for self-testing.

Once the markup is tested end-to-end with this technique and you are ready to launch your integration to production, check [Registering with Google](./registering-with-google.md) for the next steps.

## Structured Data Markup Helper

The [Structured Data Markup Helper](https://www.google.com/webmasters/markup-helper/?email=true) can show you how to mark up emails that contain any of the following data types: `Event Reservation`, `Flight Reservation`, `Lodging Reservation`, `Restaurant Reservation`.

## Email Markup Tester

The [Email Markup Tester](https://www.google.com/webmasters/markup-tester/) tool lets you test your markup and verify the structured data that is extracted from your documents.

To use the tool, paste the markup in the input text box below and click on `Validate`. The output of the tool will include the extracted structured data with all the properties for each entity, and specific error messages in case the input is invalid.
