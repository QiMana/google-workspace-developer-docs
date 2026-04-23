---
source: https://developers.google.com/apps-script/reference/optimization/status
root: apps-script
fetched_at: 2026-04-23T15:20:55.403Z
---

# Enum Status

## Page Summary

- The status of a solution indicates whether a problem has been solved and if the solution is optimal.
- Status is represented by an enum which can be accessed by calling the parent class, name, and property.
- Different status values like `OPTIMAL`, `FEASIBLE`, `INFEASIBLE`, `UNBOUNDED`, `ABNORMAL`, `MODEL_INVALID`, and `NOT_SOLVED` describe the outcome of the solution process.

Status of the solution. Before solving a problem the status will be `NOT_SOLVED`; afterwards it will take any of the other values depending if it successfully found a solution and if the solution is optimal.

To call an enum, you call its parent class, name, and property. For example, ` LinearOptimizationService.Status.OPTIMAL`.
