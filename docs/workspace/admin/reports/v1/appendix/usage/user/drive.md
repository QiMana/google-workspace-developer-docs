---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/user/drive
root: workspace
fetched_at: 2026-04-23T15:24:37.045Z
---

# Google Drive Parameters

This document lists the parameters for various types of Google Drive activity events. You can retrieve these events by calling [UserUsageReport.get()](https://developers.google.com/workspace/admin/reports/v1/reference/userUsageReport/get) with `parameters=drive:PARAMETER`.

These metrics reflect aggregated user behavior on Google Drive items in your domain.

Reporting data can be divided into numbers from an actor's or owner's point of view.
- **Actor metrics** —the person performing the action on a file.
- **Owner metrics** —the person who owns the file being acted on. Values with `owned` in their names refer to owner data.

## Visibility parameters

Parameters can provide aggregate visibility and ownership metrics for items within your domain. These parameters fall into three general forms, where \* is replaced by any of the fields listed in the [Visibility levels](#visibility-levels) table below:

num\_owned\_items\_with\_visibility\_\*\_added

those Docs or Drive items with at least one `addition` type event performed on them such as create, uploads, untrash events, or ownership transfer. This activity gets reported regardless of the final state of the item. Multiple `addition` events to the same file do not increment the count.

num\_owned\_items\_with\_visibility\_\*\_removed

those Docs or Drive items with at least one `removal` type event performed on them, such as trash, permanent delete, or ownership transfer. This activity gets reported regardless of the final state of the item.

num\_owned\_items\_with\_visibility\_\*\_delta

the net change in number of Google Docs and Drive items owned for the entire domain, segmented by user. For example, if one item gets added and another gets removed, the added and removed metrics each report 1, but the delta metric reports 0.

For event totals, only one `addition` or `removal` event per item counts toward the final value. For example, if a file is first added to Drive and then transferred to another owner, this triggers two `addition` events and one `removal` event, but the final tally for that file is one addition and one removal.

### Visibility definitions

The following table lists fields in order of visibility from lowest (private) to highest (public).

| **Field** | **Definition** |
| --- | --- |
| `private` | The file is not shared with anyone. |
| `shared_internally` | The file is shared only with users/groups within the owner's domain. |
| `anyone_in_domain_with_link` | The file is shared so that anyone in the domain with the link can access. |
| `anyone_in_domain` | The file is shared so that anyone in the domain can find and access it. |
| `shared_externally` | The file is shared so that users/groups external to the owner's domain can see it. |
| `anyone_with_link` | The file is shared so that anyone with the link can access. |
| `public` | The file is publicly accessible. |

### Metrics on multiple visibility levels or events

Calculation for visibility metrics considers only the highest—or most public—visibility state for any given file. For example, consider the following sharing settings applied to a single file. While the file has multiple visibilities states, only the `public` visibility state is reported.

| Sharing setting | Visibility state |
| --- | --- |
| Publicly visible | **`public`** |
| Shared with a few users in the domain | `shared_internally` |
| Shared with specific users outside the domain | `shared_externally` |

## Item activity parameters

Item activity parameters can provide activity metrics for items within your domain.

| Name | Type | Description |
| --- | --- | --- |
| `num_google_documents_created` | integer | The number of Google Documents created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_google_documents_edited` | integer | The number of Google Documents edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_google_documents_trashed` | integer | The number of Google Documents trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_google_documents_viewed` | integer | The number of Google Documents viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_google_drawings_created` | integer | The number of Google Drawings created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_google_drawings_edited` | integer | The number of Google Drawings edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_google_drawings_trashed` | integer | The number of Google Drawings trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_google_drawings_viewed` | integer | The number of Google Drawings viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_google_forms_created` | integer | The number of Google Forms created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_google_forms_edited` | integer | The number of Google Forms edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_google_forms_trashed` | integer | The number of Google Forms trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_google_forms_viewed` | integer | The number of Google Forms viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_google_presentations_created` | integer | The number of Google Presentations created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_google_presentations_edited` | integer | The number of Google Presentations edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_google_presentations_trashed` | integer | The number of Google Presentations trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_google_presentations_viewed` | integer | The number of Google Presentations viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_google_sites_created` | integer | The number of Google Sites created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_google_sites_edited` | integer | The number of Google Sites edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_google_sites_trashed` | integer | The number of Google Sites trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_google_sites_viewed` | integer | The number of Google Sites viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_google_spreadsheets_created` | integer | The number of Google Spreadsheets created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_google_spreadsheets_edited` | integer | The number of Google Spreadsheets edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_google_spreadsheets_trashed` | integer | The number of Google Spreadsheets trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_google_spreadsheets_viewed` | integer | The number of Google Spreadsheets viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_google_videos_created` | integer | The number of Google Videos created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_google_videos_edited` | integer | The number of Google Videos edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_google_videos_trashed` | integer | The number of Google Videos trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_google_videos_viewed` | integer | The number of Google Videos viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_items_created` | integer | The number of Google Drive items created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_items_edited` | integer | The number of Google Drive items edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_items_trashed` | integer | The number of Google Drive items trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_items_viewed` | integer | The number of Google Drive items viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_other_types_created` | integer | The number of any other Google Drive items created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_other_types_edited` | integer | The number of any other Google Drive items edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_other_types_trashed` | integer | The number of any other Google Drive items trashed by the user or domain. If an item is trashed at first, but then restored, it will still be counted in the metric. If an item is trashed multiple times, it is counted only once in the metric. |
| `num_other_types_viewed` | integer | The number of any other Google Drive items viewed by the user or domain. Multiple views of the same file are counted just once per file. |
| `num_owned_external_items_added` | integer | The number of external Google Drive items added to the organization. |
| `num_owned_external_items_delta` | integer |  |
| `num_owned_external_items_removed` | integer |  |
| `num_owned_google_documents_added` | integer | The number of Google Documents with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_google_documents_created` | integer | The number of Google Documents created on the day of this report for which the domain's user is the owner. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_google_documents_delta` | integer | The number of Google Documents within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_google_documents_edited` | integer | The number of Google Documents within the customer's account which were edited. |
| `num_owned_google_documents_removed` | integer | The number of Google Documents within the customer's account which were removed. |
| `num_owned_google_documents_trashed` | integer | The number of Google Documents within the customer's account which were trashed. |
| `num_owned_google_documents_viewed` | integer | The number of Google Documents within the customer's account which were viewed. |
| `num_owned_google_drawings_added` | integer | The number of Google Drawings with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_google_drawings_created` | integer | The number of Google Drawings created on the day of this report for which the domain's user is the owner. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_google_drawings_delta` | integer | The number of Google Drawings within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_google_drawings_edited` | integer | The number of Google Documents within the customer's account which were edited. |
| `num_owned_google_drawings_removed` | integer | The number of Google Drawings within the customer's account which were removed. |
| `num_owned_google_drawings_trashed` | integer | The number of Google Drawings within the customer's account which were trashed. |
| `num_owned_google_drawings_viewed` | integer | The number of Google Drawings within the customer's account which were viewed. |
| `num_owned_google_forms_added` | integer | The number of Google Forms with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_google_forms_created` | integer | The number of Google Forms created on the day of this report for which the domain's user is the owner. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_google_forms_delta` | integer | The number of Google Forms within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_google_forms_edited` | integer | The number of Google Documents within the customer's account which were edited. |
| `num_owned_google_forms_removed` | integer | The number of Google Forms within the customer's account which were removed. |
| `num_owned_google_forms_trashed` | integer | The number of Google Forms within the customer's account which were trashed. |
| `num_owned_google_forms_viewed` | integer | The number of Google Forms within the customer's account which were viewed. |
| `num_owned_google_presentations_added` | integer | The number of Google Presentations with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_google_presentations_created` | integer | The number of Google Presentations created on the day of this report for which the domain's user is the owner. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_google_presentations_delta` | integer | The number of Google Presentations within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_google_presentations_edited` | integer | The number of Google Presentations within the customer's account which were edited. |
| `num_owned_google_presentations_removed` | integer | The number of Google Presentations within the customer's account which were removed. |
| `num_owned_google_presentations_trashed` | integer | The number of Google Presentations within the customer's account which were trashed. |
| `num_owned_google_presentations_viewed` | integer | The number of Google Presentations within the customer's account which were viewed. |
| `num_owned_google_sites_added` | integer | The number of Google Sites with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_google_sites_created` | integer | The number of Google Sites created on the day of this report for which the domain's user is the owner. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_google_sites_delta` | integer | The number of Google Sites within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_google_sites_edited` | integer | The number of Google Sites within the customer's account which were edited. |
| `num_owned_google_sites_removed` | integer | The number of Google Sites within the customer's account which were removed. |
| `num_owned_google_sites_trashed` | integer | The number of Google Sites within the customer's account which were trashed. |
| `num_owned_google_sites_viewed` | integer | The number of Google Sites within the customer's account which were viewed. |
| `num_owned_google_spreadsheets_added` | integer | The number of Google Spreadsheets with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_google_spreadsheets_created` | integer | The number of Google Spreadsheets created on the day of this report for which the domain's user is the owner. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_google_spreadsheets_delta` | integer | The number of Google Spreadsheets within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_google_spreadsheets_edited` | integer | The number of Google Spreadsheets within the customer's account which were edited. |
| `num_owned_google_spreadsheets_removed` | integer | The number of Google Spreadsheets within the customer's account which were removed. |
| `num_owned_google_spreadsheets_trashed` | integer | The number of Google Spreadsheets within the customer's account which were trashed. |
| `num_owned_google_spreadsheets_viewed` | integer | The number of Google Spreadsheets within the customer's account which were viewed. |
| `num_owned_google_videos_added` | integer | The number of Google Videos with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_google_videos_created` | integer | The number of Google Videos created on the day of this report for which the domain's user is the owner. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_google_videos_delta` | integer | The number of Google Videos within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_google_videos_edited` | integer | The number of Google Videos within the customer's account which were edited. |
| `num_owned_google_videos_removed` | integer | The number of Google Videos within the customer's account which were removed. |
| `num_owned_google_videos_trashed` | integer | The number of Google Videos within the customer's account which were trashed. |
| `num_owned_google_videos_viewed` | integer | The number of Google Videos within the customer's account which were viewed. |
| `num_owned_internal_items_added` | integer | The number of internal Google Drive items with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_internal_items_delta` | integer |  |
| `num_owned_internal_items_removed` | integer |  |
| `num_owned_items_added` | integer | The number of Google Drive items with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_items_created` | integer | The number of Google Drive items created on the day of this report for which the domain's user is the owner. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_items_delta` | integer | The number of Google Drive items within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_items_edited` | integer | The number of Google Drive items within the customer's account which were edited. |
| `num_owned_items_removed` | integer | The number of Google Drive items within the customer's account which were removed. |
| `num_owned_items_trashed` | integer | The number of Google Drive items within the customer's account which were trashed. |
| `num_owned_items_viewed` | integer | The number of Google Drive items within the customer's account which were viewed. |
| `num_owned_items_with_visibility_anyone_in_domain_added` | integer | The number of Google Drive items configured with [a visibility of `anyone_in_domain`](#visibility-parameters_1) with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_items_with_visibility_anyone_in_domain_delta` | integer | The number of Google Drive items configured with [a visibility of `anyone_in_domain`](#visibility-parameters_1) within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_items_with_visibility_anyone_in_domain_removed` | integer | The number of Google Drive items configured with [a visibility of `anyone_in_domain`](#visibility-parameters_1) within the customer's account which were removed. |
| `num_owned_items_with_visibility_anyone_in_domain_with_link_added` | integer | The number of Google Drive items configured with [a visibility of `anyone_in_domain_with_link`](#visibility-parameters_1) with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_items_with_visibility_anyone_in_domain_with_link_delta` | integer | The number of Google Drive items configured with [a visibility of `anyone_in_domain_with_link`](#visibility-parameters_1) within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_items_with_visibility_anyone_in_domain_with_link_removed` | integer | The number of Google Drive items configured with [a visibility of `anyone_in_domain_with_link`](#visibility-parameters_1) within the customer's account which were removed. |
| `num_owned_items_with_visibility_anyone_with_link_added` | integer | The number of Google Drive items configured with [a visibility of `anyone_with_link`](#visibility-parameters_1) with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_items_with_visibility_anyone_with_link_delta` | integer | The number of Google Drive items configured with [a visibility of `anyone_with_link`](#visibility-parameters_1) within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_items_with_visibility_anyone_with_link_removed` | integer | The number of Google Drive items configured with [a visibility of `anyone_with_link`](#visibility-parameters_1) within the customer's account which were removed. |
| `num_owned_items_with_visibility_private_added` | integer | The number of Google Drive items configured with [a visibility of `private`](#visibility-parameters_1) with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_items_with_visibility_private_delta` | integer | The number of Google Drive items configured with [a visibility of `private`](#visibility-parameters_1) within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_items_with_visibility_private_removed` | integer | The number of Google Drive items configured with [a visibility of `private`](#visibility-parameters_1) within the customer's account which were removed. |
| `num_owned_items_with_visibility_public_added` | integer | The number of Google Drive items configured with [a visibility of `public`](#visibility-parameters_1) with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_items_with_visibility_public_delta` | integer | The number of Google Drive items configured with [a visibility of `public`](#visibility-parameters_1) within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_items_with_visibility_public_removed` | integer | The number of Google Drive items configured with [a visibility of `public`](#visibility-parameters_1) within the customer's account which were removed. |
| `num_owned_items_with_visibility_shared_externally_added` | integer | The number of Google Drive items configured with [a visibility of `shared_externally`](#visibility-parameters_1) with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_items_with_visibility_shared_externally_delta` | integer | The number of Google Drive items configured with [a visibility of `shared_externally`](#visibility-parameters_1) within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_items_with_visibility_shared_externally_removed` | integer | The number of Google Drive items configured with [a visibility of `shared_externally`](#visibility-parameters_1) within the customer's account which were removed. |
| `num_owned_items_with_visibility_shared_internally_added` | integer | The number of Google Drive items configured with [a visibility of `shared_internally`](#visibility-parameters_1) with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_items_with_visibility_shared_internally_delta` | integer | The number of Google Drive items configured with [a visibility of `shared_internally`](#visibility-parameters_1) within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_items_with_visibility_shared_internally_removed` | integer | The number of Google Drive items configured with [a visibility of `shared_internally`](#visibility-parameters_1) within the customer's account which were removed. |
| `num_owned_items_with_visibility_unknown_added` | integer |  |
| `num_owned_items_with_visibility_unknown_delta` | integer |  |
| `num_owned_items_with_visibility_unknown_removed` | integer |  |
| `num_owned_other_types_added` | integer | The number of any other Google Drive items with at least one "addition" type event performed on them, such as create, uploads, untrash events, or ownership transfer. This activity is reported regardless of the final state of the item. |
| `num_owned_other_types_created` | integer | The number of any other Google Drive items created by the user or domain. This does not track items that came into the customer's possession by way of untrashing, undeleting, or ownership transfer. |
| `num_owned_other_types_delta` | integer | The number of any other Google Drive items within the customer's account where ownership has changed, either to increase or decrease file ownership. |
| `num_owned_other_types_edited` | integer | The number of any other Google Drive items edited by the user or domain. Multiple edits of the same file are counted just once per file. |
| `num_owned_other_types_removed` | integer | The number of any other Google Drive items within the customer's account which were removed. |
| `num_owned_other_types_trashed` | integer | The number of any other Google Drive items within the customer's account which were trashed. |
| `num_owned_other_types_viewed` | integer | The number of any other Google Drive items within the customer's account which were viewed. |
| `timestamp_last_active_usage` | integer | Indicates the user's last active Google Drive use. |
