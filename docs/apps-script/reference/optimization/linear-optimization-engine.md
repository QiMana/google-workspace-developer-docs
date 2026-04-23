---
source: https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine
root: apps-script
fetched_at: 2026-04-23T15:20:55.222Z
---

# Class LinearOptimizationEngine

## Page Summary

- LinearOptimizationEngine is used to model and solve linear programs by defining variables, constraints, and objectives.
- You can add variables with specified bounds and types using methods like `addVariable` and `addVariables`.
- Constraints with defined bounds can be added using `addConstraint` or `addConstraints`, and variable coefficients within these constraints are set separately.
- The objective function is defined by setting the coefficient for each variable using `setObjectiveCoefficient`.
- The optimization direction can be set to maximization or minimization using `setMaximization` or `setMinimization`.
- The `solve()` method is used to find the solution to the defined linear program.

The engine used to model and solve a linear program. The example below solves the following linear program:

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
// addConstraint(), etc Add two variables, 0 <= x <= 10 and 0 <= y <= 5
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
  Logger.log(\`Value of x: ${solution.getVariableValue('x')}\`);
  Logger.log(\`Value of y: ${solution.getVariableValue('y')}\`);
}
```

## Detailed documentation

### addConstraint(lowerBound, upperBound)

Adds a new linear constraint in the model. The upper and lower bound of the constraint are defined at creation time. Coefficients for the variables are defined via calls to `LinearOptimizationConstraint.setCoefficient(variableName, coefficient)`.

```
const engine = LinearOptimizationService.createEngine();

// Create a linear constraint with the bounds 0 and 10
const constraint = engine.addConstraint(0, 10);

// Create a variable so we can add it to the constraint
engine.addVariable('x', 0, 5);

// Set the coefficient of the variable in the constraint. The constraint is now:
// 0 <= 2 * x <= 5
constraint.setCoefficient('x', 2);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `lowerBound` | `Number` | lower bound of the constraint |
| `upperBound` | `Number` | upper bound of the constraint |

#### Return

`LinearOptimizationConstraint` — the constraint created

---

### addConstraints(lowerBounds, upperBounds, variableNames, coefficients)

Adds constraints in batch to the model.

```
const engine = LinearOptimizationService.createEngine();

// Add a boolean variable 'x' (integer >= 0 and <= 1) and a real (continuous >=
// 0 and <= 100) variable 'y'.
engine.addVariables(
    ['x', 'y'],
    [0, 0],
    [1, 100],
    [
      LinearOptimizationService.VariableType.INTEGER,
      LinearOptimizationService.VariableType.CONTINUOUS,
    ],
);

// Adds two constraints:
//   0 <= x + y <= 3
//   1 <= 10 * x - y <= 5
engine.addConstraints(
    [0.0, 1.0],
    [3.0, 5.0],
    [
      ['x', 'y'],
      ['x', 'y'],
    ],
    [
      [1, 1],
      [10, -1],
    ],
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `lowerBounds` | `Number[]` | lower bounds of the constraints |
| `upperBounds` | `Number[]` | upper bounds of the constraints |
| `variableNames` | `String[][]` | the names of variables for which the coefficients are being set |
| `coefficients` | `Number[][]` | coefficients being set |

#### Return

`LinearOptimizationEngine` — a linear optimization engine

---

### addVariable(name, lowerBound, upperBound)

Adds a new continuous variable to the model. The variable is referenced by its name. The type is set to `VariableType.CONTINUOUS`.

```
const engine = LinearOptimizationService.createEngine();
const constraint = engine.addConstraint(0, 10);

// Add a boolean variable (integer >= 0 and <= 1)
engine.addVariable('x', 0, 1, LinearOptimizationService.VariableType.INTEGER);

// Add a real (continuous) variable. Notice the lack of type specification.
engine.addVariable('y', 0, 100);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | unique name of the variable |
| `lowerBound` | `Number` | lower bound of the variable |
| `upperBound` | `Number` | upper bound of the variable |

#### Return

`LinearOptimizationEngine` — a linear optimization engine

---

### addVariable(name, lowerBound, upperBound, type)

Adds a new variable to the model. The variable is referenced by its name.

```
const engine = LinearOptimizationService.createEngine();
const constraint = engine.addConstraint(0, 10);

// Add a boolean variable (integer >= 0 and <= 1)
engine.addVariable('x', 0, 1, LinearOptimizationService.VariableType.INTEGER);

// Add a real (continuous) variable
engine.addVariable(
    'y',
    0,
    100,
    LinearOptimizationService.VariableType.CONTINUOUS,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | unique name of the variable |
| `lowerBound` | `Number` | lower bound of the variable |
| `upperBound` | `Number` | upper bound of the variable |
| `type` | `VariableType` | type of the variable, can be one of `VariableType` |

#### Return

`LinearOptimizationEngine` — a linear optimization engine

---

### addVariable(name, lowerBound, upperBound, type, objectiveCoefficient)

Adds a new variable to the model. The variable is referenced by its name.

```
const engine = LinearOptimizationService.createEngine();
const constraint = engine.addConstraint(0, 10);

// Add a boolean variable (integer >= 0 and <= 1)
engine.addVariable(
    'x',
    0,
    1,
    LinearOptimizationService.VariableType.INTEGER,
    2,
);
// The objective is now 2 * x.

// Add a real (continuous) variable
engine.addVariable(
    'y',
    0,
    100,
    LinearOptimizationService.VariableType.CONTINUOUS,
    -5,
);
// The objective is now 2 * x - 5 * y.
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | unique name of the variable |
| `lowerBound` | `Number` | lower bound of the variable |
| `upperBound` | `Number` | upper bound of the variable |
| `type` | `VariableType` | type of the variable, can be one of `VariableType` |
| `objectiveCoefficient` | `Number` | objective coefficient of the variable |

#### Return

`LinearOptimizationEngine` — a linear optimization engine

---

### addVariables(names, lowerBounds, upperBounds, types, objectiveCoefficients)

Adds variables in batch to the model. The variables are referenced by their names.

```
const engine = LinearOptimizationService.createEngine();

// Add a boolean variable 'x' (integer >= 0 and <= 1) and a real (continuous >=0
// and <= 100) variable 'y'.
engine.addVariables(
    ['x', 'y'],
    [0, 0],
    [1, 100],
    [
      LinearOptimizationService.VariableType.INTEGER,
      LinearOptimizationService.VariableType.CONTINUOUS,
    ],
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `names` | `String[]` | unique names of the variables |
| `lowerBounds` | `Number[]` | lower bounds of the variables |
| `upperBounds` | `Number[]` | upper bounds of the variables |
| `types` | `VariableType[]` | types of the variables, can be one of `VariableType` |
| `objectiveCoefficients` | `Number[]` | objective coefficients of the variables |

#### Return

`LinearOptimizationEngine` — a linear optimization engine

---

### setMaximization()

Sets the optimization direction to maximizing the linear objective function.

```
const engine = LinearOptimizationService.createEngine();

// Add a real (continuous) variable. Notice the lack of type specification.
engine.addVariable('y', 0, 100);

// Set the coefficient of 'y' in the objective.
// The objective is now 5 * y
engine.setObjectiveCoefficient('y', 5);

// We want to maximize.
engine.setMaximization();
```

#### Return

`LinearOptimizationEngine` — a linear optimization engine

---

### setMinimization()

Sets the optimization direction to minimizing the linear objective function.

```
const engine = LinearOptimizationService.createEngine();

// Add a real (continuous) variable. Notice the lack of type specification.
engine.addVariable('y', 0, 100);

// Set the coefficient of 'y' in the objective.
// The objective is now 5 * y
engine.setObjectiveCoefficient('y', 5);

// We want to minimize
engine.setMinimization();
```

#### Return

`LinearOptimizationEngine` — a linear optimization engine

---

### setObjectiveCoefficient(variableName, coefficient)

Sets the coefficient of a variable in the linear objective function.

```
const engine = LinearOptimizationService.createEngine();

// Add a real (continuous) variable. Notice the lack of type specification.
engine.addVariable('y', 0, 100);

// Set the coefficient of 'y' in the objective.
// The objective is now 5 * y
engine.setObjectiveCoefficient('y', 5);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `variableName` | `String` | name of variable for which the coefficient is being set |
| `coefficient` | `Number` | coefficient of the variable in the objective function |

#### Return

`LinearOptimizationEngine` — a linear optimization engine

---

### solve()

Solves the current linear program with the default deadline of 30 seconds. Returns the solution found.

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
Logger.log(\`Value of x: ${solution.getVariableValue('x')}\`);
```

#### Return

`LinearOptimizationSolution` — solution of the optimization

---

### solve(seconds)

Solves the current linear program. Returns the solution found. and if it is an optimal solution.

```
const engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(),
// addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
const solution = engine.solve(300);
if (!solution.isValid()) {
  throw \`No solution ${solution.getStatus()}\`;
}
Logger.log(\`Value of x: ${solution.getVariableValue('x')}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `seconds` | `Number` | deadline for solving the problem, in seconds; the maximum deadline is 300 seconds |

#### Return

`LinearOptimizationSolution` — solution of the optimization
