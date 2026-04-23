---
source: https://developers.google.com/workspace/cloud-search/docs/reference/widget/css
root: workspace
fetched_at: 2026-04-23T15:26:59.793Z
---

# Supported CSS classes

You can change the style of the search widget to match your application. Use the following CSS classes to customize the widget.

## Suggestions

Sample DOM structure:

```
<div class="cloudsearch_suggestion_container">
  <img src="..." class="cloudsearch_suggestion_suggested_query_icon">
  <span class="cloudsearch_suggestion_suggested_query">...</span>
</div>
```

| CSS Class | Notes |
| --- | --- |
| `cloudsearch_suggestion_overlay` |  |
| `cloudsearch_suggestion_container` |  |
| `cloudsearch_suggestion_suggested_query` |  |
| `cloudsearch_suggestion_suggested_query_icon` |  |
| `cloudsearch_suggestion_suggested_people_name` |  |
| `cloudsearch_suggestion_suggested_people_profile_image` |  |

## Results

Sample DOM structure:

```
<div class="cloudsearch_result_container">
  <span class="cloudsearch_result_icon"></span>
  <div class="cloudsearch_result_title">
    <a href="...">...</a>
  </div>
  <div class="cloudsearch_result_metadata">...</div>
  <div class="cloudsearch_result_snippet">...</div>
</div>
```

| CSS Class | Notes |
| --- | --- |
| `cloudsearch_result_container` |  |
| `cloudsearch_result_icon` |  |
| `cloudsearch_result_title` |  |
| `cloudsearch_result_snippet` |  |
| `cloudsearch_result_metadata` |  |

## Facets

Sample DOM structure:

```
<div class="cloudsearch_facet_result_container">
  <div class="cloudsearch_facet_operator_container">
    <span class="cloudsearch_facet_result_operator_name">...</span>
  </div>
  <div class="cloudsearch_facet_bucket_container">
    <input type="checkbox" value="value"
           class="cloudsearch_facet_bucket_checkbox cloudsearch_facet_bucket_clickable">
    <span class="cloudsearch_facet_bucket_value">...</span>
    <span class="cloudsearch_facet_bucket_percentage">...</span>
  </div>
</div>
```

| CSS Class | Notes |
| --- | --- |
| `cloudsearch_facet_bucket_clickable` | Indicates an element that toggles the selection of the filter |
| `cloudsearch_facet_bucket_selected` | Present on cloudsearch\_facet\_bucket\_container if a filter is selected |
| `cloudsearch_facet_bucket_container` |  |
| `cloudsearch_facet_result_container` |  |
| `cloudsearch_facet_operator_container` |  |
| `cloudsearch_facet_result_operator_name` |  |
| `cloudsearch_facet_bucket_value` |  |
| `cloudsearch_facet_bucket_percentage` |  |

## Pagination

Sample DOM structure:

```
<div class="cloudsearch_pagination_container">
  <div class="cloudsearch_pagination_center">
    <span class="cloudsearch_pagination_icon cloudsearch_pagination_icon_previous">
    </span>
    <span class="cloudsearch_pagination_text">...</span>
    <span class="cloudsearch_pagination_icon cloudsearch_pagination_icon_next">
    </span>
  </div>
</div>
```

| CSS Class | Notes |
| --- | --- |
| `cloudsearch_pagination_container` |  |
| `cloudsearch_pagination_center` |  |
| `cloudsearch_pagination_icon` |  |
| `cloudsearch_pagination_icon_first` |  |
| `cloudsearch_pagination_icon_previous` |  |
| `cloudsearch_pagination_icon_next` |  |
| `cloudsearch_pagination_text` |  |

## Result counts

```
<div class="cloudsearch_result_count_container">
  <span class="cloudsearch_result_count_text">...</span>
</div>
```

| CSS Class | Notes |
| --- | --- |
| `cloudsearch_result_count_container` |  |
| `cloudsearch_result_count_text` |  |

## Sign-in prompt

Sample DOM structure:

```
<div class="cloudsearch_sign_in_container">
  <div class="cloudsearch_sign_in_button">...</div>
  <div class="cloudsearch_sign_in_text">...</div>
</div>
```

| CSS Class | Notes |
| --- | --- |
| `cloudsearch_sign_in_container` |  |
| `cloudsearch_sign_in_button` |  |
| `cloudsearch_sign_in_text` |  |
