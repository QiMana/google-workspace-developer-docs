---
source: https://developers.google.com/apps-script/reference/optimization/linear-optimization-solution
root: apps-script
fetched_at: 2026-04-23T15:20:53.953Z
---

# Class LinearOptimizationSolution

## Page Summary

- A `LinearOptimizationSolution` represents the solution of a linear program.
- The solution provides methods to get the objective value, the value of specific variables, the status of the solution, and to check its validity.
- An example demonstrates how to define variables, constraints, and an objective function, solve the linear program, and then retrieve the solution details using the provided methods.

The solution of a linear program. The example below solves the following linear program:

Two variables, `x` and `y`:  
`0 ≤ x ≤ 10`  
`0 ≤ y ≤ 5`

Constraints:  
`0 ≤ 2 * x + 5 * y ≤ 10`  
`0 ≤ 10 * x + 3 * y ≤ 20`

Objective:  
Maximize `x + y`

```
const engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(),
// addConstraint(), etc. Add two variables, 0 <= x <= 10 and 0 <= y <= 5
engine.addVariable('x', 0, 10);
engine.addVariable('y', 0, 5);

// Create the constraint: 0 <= 2 * x + 5 * y <= 10
let constraint = engine.addConstraint(0, 10);
constraint.setCoefficient('x', 2);
constraint.setCoefficient('y', 5);

// Create the constraint: 0 <= 10 * x + 3 * y <= 20
constraint = engine.addConstraint(0, 20);
constraint.setCoefficient('x', 10);
constraint.setCoefficient('y', 3);

// Set the objective to be x + y
engine.setObjectiveCoefficient('x', 1);
engine.setObjectiveCoefficient('y', 1);

// Engine should maximize the objective
engine.setMaximization();

// Solve the linear program
const solution = engine.solve();
if (!solution.isValid()) {
  Logger.log(\`No solution ${solution.getStatus()}\`);
} else {
  Logger.log(\`Objective  value: ${solution.getObjectiveValue()}\`);
  Logger.log(\`Value of x: ${solution.getVariableValue('x')}\`);
  Logger.log(\`Value of y: ${solution.getVariableValue('y')}\`);
}
```

## Detailed documentation

### getObjectiveValue()

Gets the value of the objective function in the current solution.

```
const engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(),
// addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
const solution = engine.solve();
Logger.log(\`ObjectiveValue: ${solution.getObjectiveValue()}\`);
```

#### Return

`Number` — the value of the objective function

---

### getStatus()

Gets the status of the solution. Before solving a problem, the status will be `NOT_SOLVED`.

```
const engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(),
// addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
const solution = engine.solve();
const status = solution.getStatus();

if (status !== LinearOptimizationService.Status.FEASIBLE &&
    status !== LinearOptimizationService.Status.OPTIMAL) {
  throw \`No solution ${status}\`;
}
Logger.log(\`Status: ${status}\`);
```

#### Return

`Status` — the status of the solver

---

### getVariableValue(variableName)

Gets the value of a variable in the solution created by the last call to `LinearOptimizationEngine.solve()`.

```
const engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(),
// addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
const solution = engine.solve();
Logger.log(\`Value of x: ${solution.getVariableValue('x')}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `variableName` | `String` | name of the variable |

#### Return

`Number` — the value of the variable in the solution

---

### isValid()

Determines whether the solution is either feasible or optimal.

```
const engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(),
// addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
const solution = engine.solve();
if (!solution.isValid()) {
  throw \`No solution ${solution.getStatus()}\`;
}
```

#### Return

`Boolean` — `true` if the solution is valid (`Status.FEASIBLE` or `Status.OPTIMAL`); `false` if not
