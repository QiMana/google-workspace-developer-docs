---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/GradeCategory
root: workspace
fetched_at: 2026-04-23T15:25:52.519Z
---

# GradeCategory

Details for a grade category in a course.

Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.

JSON representation

```
{
  "id": string,
  "name": string,
  "weight": integer,
  "defaultGradeDenominator": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>ID of the grade category.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Name of the grade category.</p></td></tr><tr><td><code>weight</code></td><td><p><code>integer</code></p><p>The weight of the category average as part of overall average. A weight of 12.34% is represented as 123400 (100% is 1,000,000). The last two digits should always be zero since we use two decimal precision. Only applicable when grade calculation type is WEIGHTED_CATEGORIES.</p></td></tr><tr><td><code>defaultGradeDenominator</code></td><td><p><code>integer</code></p><p>Default value of denominator. Only applicable when grade calculation type is TOTAL_POINTS.</p></td></tr></tbody></table>
