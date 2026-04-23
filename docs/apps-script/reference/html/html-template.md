---
source: https://developers.google.com/apps-script/reference/html/html-template
root: apps-script
fetched_at: 2026-04-23T15:20:38.447Z
---

# Class HtmlTemplate

## Page Summary

- HtmlTemplate is a template object used for dynamically constructing HTML.
- The `evaluate()` method evaluates the template and returns an HtmlOutput object, making any set properties available within the template's scope.
- The `getCode()` method generates a string of JavaScript code based on the template for evaluation.
- The `getCodeWithComments()` method generates JavaScript code with the original template lines as comments.
- The `getRawContent()` method returns the unprocessed content of the template.

A template object for dynamically constructing HTML. For more information, see the [guide to templates](../../guides/html/templates.md).

## Detailed documentation

### evaluate()

Evaluates this template and returns an `HtmlOutput` object. Any properties set on this `HtmlTemplate` object are in scope when evaluating. To debug errors in a template, examine the code using the `getCode()` method.

```
// A template which evaluates to whatever is bound to 'foo'.
const template = HtmlService.createTemplate('<?= foo ?>');
template.foo = 'Hello World!';
Logger.log(template.evaluate().getContent());  // logs 'Hello World!'
```

#### Return

`HtmlOutput` — An HtmlOutput object.

---

### getCode()

Generates a string of JavaScript code, based on the template file, that can be evaluated. This method produces a string of JavaScript code based on the template file. Calling ` eval(<code>)` returns a new `HtmlOutput` object with the content of the template after running all embedded server scripts. The generated code is intended to be human-readable, and so if you need to debug a template you can call ` Logger.log(<code>)` to see what was produced.

Evaluating this code implicitly binds in all variables in the current scope. In general, it's preferable to use the `evaluate()` method, which takes explicit bindings.

```
const template = HtmlService.createTemplate(
    '<b>The time is &lt;?= new Date() ?&gt;</b>',
);
Logger.log(template.getCode());
```

#### Return

`String` — A string based on the template, which can be evaluated.

---

### getCodeWithComments()

Generates a string of JavaScript code that can be evaluated, with each line of the code containing the original line from the template as a comment. This method produces a string of JavaScript code based on the template file. Calling `eval(<code>)` returns a new `HtmlOutput` object with the content of the template after running all embedded server scripts. The generated code is intended to be human-readable, and so if you need to debug a template you can call `Logger.log(<code>)` to see what was produced.

Evaluating this code implicitly binds in all variables in the current scope. In general, it's preferable to use the `evaluate()` method, which takes explicit bindings.

```
const template = HtmlService.createTemplate(
    '<b>The time is &lt;?= new Date() ?&gt;</b>',
);
Logger.log(template.getCodeWithComments());
```

#### Return

`String` — A string based on the template, which can be evaluated.

---

### getRawContent()

Returns the unprocessed content of this template.

```
const template = HtmlService.createTemplate(
    '<b>The time is &lt;?= new Date() ?&gt;</b>',
);
Logger.log(template.getRawContent());
```

#### Return

`String` — The template's raw content.
