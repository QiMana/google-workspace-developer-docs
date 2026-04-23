---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/user/docs
root: workspace
fetched_at: 2026-04-23T15:24:37.212Z
---

# Google Docs User Metrics (deprecated)

| Google Drive/Docs | Notes |
| --- | --- |
| num\_docs | Number of Docs (text documents, drawings, forms, presentations, spreadsheets, and uploaded files) owned by the user that are not in Trash on the date of the report. |
| num\_docs\_edited | Number of Docs edited by the user on the date of the report. |
| num\_docs\_not\_edited\_for\_3months | Number of Docs owned by the user which have not been edited in last 90 days. |
| num\_docs\_not\_edited\_for\_6months | Number of Docs owned by the user which have not been edited in last 180 days. |
| num\_docs\_not\_edited\_for\_12months | Number of Docs owned by the user which have not been edited in last 360 days. |
| num\_docs\_not\_viewed\_for\_3months | Number of Docs owned by the user which have not been viewed in last 90 days. |
| num\_docs\_not\_viewed\_for\_6months | Number of Docs owned by the user which have not been viewed in last 180 days. |
| num\_docs\_not\_viewed\_for\_12months | Number of Docs owned by the user which have not been viewed in last 360 days. |
| num\_docs\_shared\_outside\_domain | (DEPRECATED) Number of Docs that are not public or visible to anyone with link, but explicitly are shared either with users or groups outside the domain up to the date of the report. |
| num\_docs\_viewed | Number of Docs viewed by the user on the date of the report. |
| num\_docs\_with\_visibility\_anyone\_with\_link | Number of Docs owned by the user which can be viewed by anyone having the link on the date of the report. |
| num\_docs\_with\_visibility\_people\_at\_domain | Number of Docs owned by the user which can be viewed by anyone in the domain on the date of the report. |
| num\_docs\_with\_visibility\_people\_at\_domain\_with\_link | Number of Docs owned by the user which can be viewed by anyone in the domain having the document link on the date of the report. |
| num\_docs\_with\_visibility\_private | Number of Docs owned by the user which are either explicitly shared with users/groups or are private on the date of the report. |
| num\_docs\_with\_visibility\_public | Number of Docs owned by the user which can be viewed by anyone on the web as on the date of the report. |
| num\_docs\_externally\_visible | (DEPRECATED) Number of Docs owned by the user visible to people outside the domain. This is the sum of `num_docs_with_visibility_public`, `num_docs_with_visibility_anyone_with_link`, and `num_docs_shared_outside_domain`. |
| num\_docs\_internally\_visible | (DEPRECATED) Number of Docs owned by the user visible only to people inside the domain. This is the sum of `num_docs_with_visibility_people_at_domain`, `num_docs_with_visibility_people_at_domain_with_link`, and `num_docs_visibility_private`. |
| num\_drawings | Number of drawings in [Google Docs format](https://developers.google.com/drive/integrate-open) owned by the user that are not in Trash on the date of the report. |
| num\_drawings\_edited | Number of drawings in [Google Docs format](https://developers.google.com/drive/integrate-open) edited by the user on the date of the report. |
| num\_drawings\_viewed | Number of drawings in [Google Docs format](https://developers.google.com/drive/integrate-open) viewed by the user on the date of the report. |
| num\_forms | Number of forms owned by the user that are not in Trash on the date of the report. |
| num\_forms\_edited | Number of forms edited by the user on the date of the report. |
| num\_forms\_viewed | Number of forms viewed by the user on the date of the report. |
| num\_presentations | Number of presentations in [Google Docs format](https://developers.google.com/drive/integrate-open) owned by the user that are not in Trash on the date of the report. |
| num\_presentations\_edited | Number of presentations in [Google Docs format](https://developers.google.com/drive/integrate-open) edited by the user on the date of the report. |
| num\_presentations\_viewed | Number of presentations in [Google Docs format](https://developers.google.com/drive/integrate-open) viewed by the user on the date of the report. |
| num\_shared\_docs | Number of Docs owned by the user which are explicitly shared with users/groups, or are not private as on the date of the report. |
| num\_spreadsheets | Number of spreadsheets in [Google Docs format](https://developers.google.com/drive/integrate-open) owned by the user that are not in Trash on the date of the report. |
| num\_spreadsheets\_edited | Number of spreadsheets in [Google Docs format](https://developers.google.com/drive/integrate-open) edited by the user on the date of the report. |
| num\_spreadsheets\_viewed | Number of spreadsheets in [Google Docs format](https://developers.google.com/drive/integrate-open) viewed by the user on the date of the report. |
| num\_text\_documents | Number of text documents in [Google Docs format](https://developers.google.com/drive/integrate-open) owned by the user that are not in Trash on the date of the report. |
| num\_text\_documents\_edited | Number of text documents in [Google Docs format](https://developers.google.com/drive/integrate-open) edited by the user on the date of the report. |
| num\_text\_documents\_viewed | Number of text documents in [Google Docs format](https://developers.google.com/drive/integrate-open) viewed by the user on the date of the report. |
| num\_uploaded\_files | Number of uploaded files in non [Google Docs format](https://developers.google.com/drive/integrate-open) owned by the user that are not in Trash on the date of the report. |
| num\_uploaded\_files\_edited | Number of uploaded files in non [Google Docs format](https://developers.google.com/drive/integrate-open) edited by the user on the date of the report. |
| num\_uploaded\_files\_viewed | Number of uploaded files in non [Google Docs format](https://developers.google.com/drive/integrate-open) viewed by the user on the date of the report. |
| last\_interaction\_time | Time when the user last viewed or edited any Docs. The date is in the [RFC 3339 format](http://www.ietf.org/rfc/rfc3339.txt), for example 2010-10-28T10:26:35.000Z. |
