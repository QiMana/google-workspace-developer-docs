---
source: https://developers.google.com/workspace/admin/reports/v1/updated-drive-metrics
root: workspace
fetched_at: 2026-04-23T15:24:39.337Z
---

# Update Your Drive and Docs metrics

Google Workspace administrators can use 94 organization-level and 70 user-level metrics for greater visibility into file sharing both inside and outside the domain, as well as details on user adoption of Google Drive, Docs, Sheets, and Slides. The new metrics reflect actual user behavior and are easier to cross-reference against Drive Audit.

## Summary of updates

In addition to adding metrics that cover more details about user sharing, we've added more metrics to cover additional behaviors:

- **Actor metrics** —the person performing the action on a file.
- **Visibility metrics** —useful for security reporting, and with an updated definition. Now, visibility metrics differentiate between someone sharing a file with an internal user or an external user. See [Visibility definition](#visibility-definition) for details.
- **Adoption metrics** —collaborators, consumers, creators, and sharers. See [Adoption metrics](#adoption-metrics) for details.
- **1-, 7-, and 30-day active** user metrics.
- **Delta metrics** —simplifies the calculation of the resulting change in visibility when a file is shared or created, as well as the number of items owned in general. Examples:
	- A file that receives additional permission changes, but which remains internally shared, counts as 1 internally shared file but 0 towards the delta for internally shared files.
		- A file shared externally and changed to privately shared creates a -1 for the shared externally delta and +1 for the privately shared delta metric.

## Owner and actor metrics

Two classes of metrics can be segmented into owner and actor perspectives:

- `num_owned_items` —item activity, grouped by **owner** within, the domain, on which activity occurs by any user, internal or external
- `num_items` —item activity, grouped by **user** within the domain, on files owned files owned by anyone, internal or external

Previously, these categories of metrics applied only to activity and ownership within the domain. Now, they apply to file activity by anyone and file ownership by anyone, whether internal or external to the domain.

### Owner metrics

The following diagram illustrates owner metrics for `num_owned_items_viewed`, which shows number of files by owner in the domain that were viewed by anyone, internal or external to the domain.

![Illustration of owner metrics for files viewed by any user](https://developers.google.com/static/workspace/admin/reports/v1/images/OwnerMetrics.png)

### Actor metrics

The following diagram illustrates actor metrics for `num_items_viewed`, which shows number of files viewed by a domain user that were owned by anyone, internal or external to the domain.

![Illustration of actor metrics for files viewed](https://developers.google.com/static/workspace/admin/reports/v1/images/ActorMetrics.png)

## Visibility definition

Previously, if a user shared a file to an individual, it would be identified as "Shared privately," regardless of whether or not the user was external or internal to the domain. Now, shared files are identified as "Shared internally" and "Shared externally." "Private" now only applies to files that are never shared.

| **Updated visibility metric** | **Previous visibility metric** |
| --- | --- |
| **visibility\_private:** Only the owner. | **visibility\_private:** The owner and also users and groups specifically granted access. |
| **visibility\_shared\_internally:** Only users/groups within the owner's domain. | <none> |
| **visibility\_anyone\_in\_domain\_with\_link:** Anyone in the domain with the link can access. | **visibility\_people\_at\_domain\_with\_link:** Any user within the domain with a direct link may access. |
| **visibility\_anyone\_in\_domain:** Anyone in the domain may find and access. public\_in\_the\_domain previously. | **visibility\_people\_at\_domain:** Any user within the domain may access. Users in the domain can also find the file using the domain search option in the Advanced Search menu, |
| **shared\_externally**: Users/groups external to the owner's domain may access. | <none> |
| **anyone\_with\_link**: Anyone with the link may access. People\_with\_link previously. | **anyone\_with\_link:** Anyone inside or outside the domain with a direct link may access. |
| **public**: May appear in search results and anyone who finds the web address of the file may access it. | **public:** May appear in search results and anyone who finds the web address of the file may access it. |

### Order of visibility

Depending on the sharing settings, a file may have multiple applicable visibilities. For example, one file could have the following:

- **shared with users inside owner's domain** — `shared_internally`
- **shared with users outside owner's domain** — `shared_externally`
- **shared publicly** — `public`

When calculating the metrics, only the highest visibility is taken into consideration, so the file in this example would be considered to be public. The ordering of visibility is the order listed in the [visibility definitions](#visibility-definition) table, going from lowest ("private") to highest ("public").

## Adoption metrics

We've created convenient aggregated metrics based on your feedback. These help you understand adoption and engagement of Drive within your domain.

num\_creators

Number of domain users who create files—includes creators creating their own files and uploading content. Does not include other addition type events like UNTRASH and ownership transfer.

num\_collaborators

Number of domain users editing or commenting/suggesting/marking to-dos on files, but only on files they don't own.

num\_consumers

Number of domain users viewing files. Does not include printing or previewing.

num\_sharers

Number of domain users who changed the sharing settings to be more collaborative than what they were before. Relevant visibility events include: changing file visibility to a more public level, or adding more users/groups even if the visibility level stays the same or even decreases (such as changing from anyone in the domain to anyone in the domain with a link). Files acted upon are counted regardless of domain ownership of the file. Ownership transfers are also included.

## Comparison of changes

Differences in metrics calculations exist in these changes, so review the notes as well as [Key issues](#key-issues) for relevant details. This section focuses on the mapping between the old and new metrics, so you can compare the changes from previous metrics that you used in your reports. For a list of all the new metrics, see [Google Drive Organization Metrics](https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/customers-drive) and [Google Drive User Metrics](https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/users-drive).

### Replaced metrics

This table shows those singleton metrics that are replaced with new metrics, with the definitions emphasizing the difference. Range is from the start of the report date to the end for all metrics.

<table><tbody><tr><th colspan="2">Changed single metrics</th></tr><tr><td><p><strong>Current</strong></p><p>num_owned_items_with_visibility_public_delta</p><p>Number of items within the user’s account where public access has changed, either to increase or decrease privacy.</p></td><td><p><strong>Deprecated</strong></p><p>num_docs_with_visibility_public</p><p>Number of items within the organization's account that can be viewed by anyone on the web on the date of the report.</p></td></tr><tr><td><p><strong>Current</strong></p><p>num_owned_items_with_visibility_anyone_with_link_delta</p><p>Number of items within the user’s account where access by anyone with the link has changed, either to increase or decrease privacy.</p></td><td><p><strong>Deprecated</strong></p><p>num_docs_with_visibility_anyone_with_link</p><p>Number of items in the organization's account for which visibility has changed to anyone having the link on the date of the report.</p></td></tr><tr><td><p><strong>Current</strong></p><p>num_owned_items_with_visibility_shared_externally_delta</p><p>Number of items within the user’s account where access has changed for users/groups external to the domain, either to increase or decrease privacy.</p></td><td><p><strong>Deprecated</strong></p><p>num_docs_shared_outside_domain<br>(Deprecated May 2016; removed May 2017)</p><p>Number of items within the user's domain account not public or visible to anyone with link, but shared explicitly either with users or groups outside the domain up to the date of the report.</p></td></tr><tr><td><p><strong>Current</strong></p><p>num_owned_items_with_visibility_anyone_in_domain_delta</p><p>Number of items within the user’s account where access by anyone in the domain has changed, either to increase or decrease privacy.</p></td><td><p><strong>Deprecated</strong></p><p>num_docs_with_visibility_people_at_domain</p><p>Number of items within the organization's account that can be viewed by anyone in the domain on the date of the report.</p></td></tr><tr><td><p><strong>Current</strong></p><p>num_owned_items_with_visibility_anyone_in_domain_with_link_delta</p><p>Number of items within the user’s account where access has changed, either to increase or decrease privacy, for anyone in the domain with the link.</p></td><td><p><strong>Deprecated</strong></p><p>num_docs_with_visibility_people_at_domain_with_link</p><p>Number of items within the organization's account that can be viewed by anyone in the domain having the document link on the date of the report.</p></td></tr><tr><td><p><strong>Current</strong></p><p>num_owned_items_delta<br>num_owned_google_drawings_delta<br>num_owned_google_forms_delta<br>num_owned_google_presentations_delta<br>num_owned_google_spreadsheets_delta<br>num_owned_google_documents_delta<br>num_owned_other_types_delta</p><p>Number of items or specific category of items within the user’s account where ownership has changed, either to increase or decrease file ownership.</p></td><td><p><strong>Deprecated</strong></p><p>num_docs<br>num_drawings<br>num_forms<br>num_presentations<br>num_spreadsheets<br>num_text_documents<br>num_uploaded_files</p><p>Number of items or specific category of items within the user's account that are not in Trash on the date of the report.</p></td></tr><tr><td><p><strong>Current</strong></p><p>num_owned_items_edited<br>num_owned_google_drawings_edited<br>num_owned_google_forms_edited<br>num_owned_google_presentations_edited<br>num_owned_google_spreadsheets_edited<br>num_owned_google_documents_edited<br>num_owned_other_types_edited</p><p>Number of items or specific category of items within the user's account that got edited on the day of the report. Multiple edits of the same file are counted just once per file.</p></td><td><p><strong>Deprecated</strong></p><p>num_docs_edited<br>num_drawings_edited<br>num_forms_edited<br>num_presentations_edited<br>num_spreadsheets_edited<br>num_text_documents_edited<br>num_uploaded_files_edited</p><p>Number of items or specific category of items within the user's account edited on the date of the report.</p></td></tr><tr><td><p><strong>Current</strong></p><p>num_owned_items_viewed<br>num_owned_google_drawings_viewed<br>num_owned_google_forms_viewed<br>num_owned_google_presentations_viewed<br>num_owned_google_spreadsheets_viewed<br>num_owned_google_documents_viewed<br>num_owned_other_types_viewed</p><p>Number of items owned by the user/customer that got viewed on the day of the report (by anyone). Multiple views of the same file are counted just once per file.</p></td><td><p><strong>Deprecated</strong></p><p>num_docs_viewed<br>num_drawings_edited<br>num_forms_edited<br>num_presentations_edited<br>num_spreadsheets_edited<br>num_text_documents_edited<br>num_uploaded_files_edited</p><p>Number of items or specific category of items within the user's account viewed on the date of the report.</p></td></tr></tbody></table>

### New calculations

The following table provides a mapping between old metrics and new metric calculations, showing how you can use calculations to obtain values with the new metrics similar to the ones available in the deprecated metrics.

<table><tbody><tr><th colspan="2">New metric calculations</th></tr><tr><td><strong>Replacement calculation</strong><p>num_owned_items_delta - num_owned_items_with_visibility_private_delta</p></td><td><p><strong>Deprecated metric</strong></p><p>num_shared_docs</p><p>Number of items <sup>*</sup> within the user's account explicitly shared with users/groups, or items that are not private on the date of the report.</p><p><b>*</b> includes text documents, drawings, forms, presentations, spreadsheets, and uploaded files</p></td></tr><tr><td><p><strong>Replacement calculation</strong></p><p>num_owned_items_with_visibility_private_delta + num_owned_items_with_visibility_shared_internally_delta + num_owned_items_with_visibility_shared_externally_delta</p></td><td><p><strong>Deprecated metric</strong></p><p>num_docs_with_visibility_private</p><p>Number of items within the organizations's account that are either explicitly shared with users/groups or are private on the date of the report.</p><p>Note that the "private" definition is now separated into files that were changed to be private and files that were changed to be explicitly shared with individuals both internally and externally to the domain.</p></td></tr><tr><td><p><strong>Replacement calculation</strong></p><p>num_owned_items_with_visibility_public_delta + num_owned_items_with_visibility_anyone_with_link_delta + num_owned_items_with_visibility_shared_externally_delta</p></td><td><p><strong>Deprecated metric</strong></p><p>num_docs_externally_visible<br>(deprecated 5.2016; removed 5.2017)</p><p>Number of items in the user's domain account visible to people outside the domain.</p></td></tr><tr><td><p><strong>Replacement calculation</strong></p><p>num_owned_items_with_visibility_anyone_in_domain_delta + num_owned_items_with_visibility_anyone_in_domain_with_link_delta + num_owned_items_with_visibility_shared_internally_delta + num_owned_items_with_visibility_private_delta</p></td><td><p><strong>Deprecated metric</strong></p><p>num_docs_internally_visible<br>(deprecated 5.2016; removed 5.2017)</p><p>Number of items in the user's account visible only to people inside the domain.</p></td></tr></tbody></table>

### Removed metrics

The following metrics have no migration path and won't be supported after April 2018. These older metrics tracked total number of files, while the new ones track the *change* in the total number of files for the reporting window.

<table><tbody><tr><th colspan="2">Sunsetted metrics</th></tr><tr><td>num_docs_not_edited_for_Nmonths</td><td>Number of Docs within the user's account not edited in last 90 days.</td></tr><tr><td>num_docs_not_viewed_for_Nmonths</td><td>Number of Docs within the user's account not viewed in last 90 days.</td></tr><tr><td>last_interaction_time</td><td>Time when the user last viewed or edited any Docs. The date is in the <a href="http://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a> format, for example 2010-10-28T10:26:35.000Z.</td></tr></tbody></table>

## Key issues to keep in mind

1. **Aggregated stats exclude calculations for shared drive files**, since they are owned by the domain, and not by individual users.
2. **Metrics are calculated for every user in the domain**, regardless of license.
3. Some metrics calculations yield different numbers:
	1. **Views and Edits**: previous calculations of view and edit metrics differ from that for current view and edit metrics. The current version matches the Drive audit logs for anything that counts as a view or an edit.
		2. **Active users**: previous calculations of active users only considered a view or an edit as an activity, while the current calculation includes all other activities on an item as well, such as edit or delete. As a result, the current metrics also count active users differently.
		3. **External visibility**: the previous calculation was incorrect. The current calculation counts a file as shared externally if the group that a file is shared with allows external users.
