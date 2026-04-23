---
source: https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors
root: apps-script
fetched_at: 2026-04-23T15:18:23.421Z
---

# Fix errors in your converted code

## Page Summary

- The Macro Converter automates most of the conversion process but requires manual adjustments for some APIs and other items.
- Additional Apps Script files are added to your project to define VBA constants, implement unconverted APIs, and resolve variants.
- You can fix most errors in the `unimplemented_constructs.gs` and `variant_resolution.gs` files.
- Error types include unimplemented APIs, unimplemented language constructs, partially supported APIs, manual work needed, and intentional errors.
- Each error type has a description and guidance on how to find and fix it, including code examples for common scenarios.

The Macro Converter Google Workspace add-on automates most of the conversion process, but you might need to make adjustments to some APIs and other items to finalize your code.

Use this guide to understand the Apps Script files (GS files) added to your project, interpret the different error types, and learn how to fix errors.

## Understand Apps Script files added to your project

Additional GS files are added to your Apps Script project to help:

- Define VBA constants and values that don't exist in Apps Script.
- Implement unconverted APIs.
- Resolve variants.

The following GS files are added to your Apps Script project:

- `Library.gs`
- `Unimplemented_constructs.gs`
- `Variant_resolutions.gs`

### Library.gs

In general, you don't need to modify anything in the `library.gs` file.

The `library.gs` file defines functions and constants that were used in your VBA code that don't exist in Apps Script. This helps the new Apps Script code better resemble your VBA code. Additionally, you don't need to repeat definitions every time functions or constants from the `library.gs` file are used.

### Unimplemented\_constructs.gs

The `unimplemented_constructs.gs` file addresses constructs or APIs that couldn't be converted by the Macro Converter. You likely need to modify this file to make your code work as intended.

#### Example: Window.Activate

The following is an example of an unsupported API called `Window.Activate`. The Macro Converter creates a new Apps Script function with a similar name and defines it in the `unimplemented_constructs.gs` file. Since the VBA function isn't supported, the new Apps Script function throws an exception.

The new function is added to the converted Apps Script code everywhere the original API was used in the VBA code.

If you find a workaround to recreate the behavior of the original API, you only need to update the definition of the function in the `unimplemented_constructs.gs` file. Once the function is defined there, it applies everywhere the function appears in your Apps Script project.

Here's the example in code:

**Original VBA code**

```
Window.activate()
```

**Converted Apps Script code, added in-line**

```
_api_window_activate();
```

**Function definition added to the `unimplemented_constructs.gs` file**

```
/**
 * Could not convert window.activate API. Please add relevant code in the
 * following function to implement it.
 * This API has been used at the following locations in the VBA script.
 *     module1 : line 3
 *
 * We couldn't find an equivalent API in Apps Script for this VBA API. Please
 * reconsider if this function call is critical, otherwise consider implementing
 * it in a different way.
 */
function _api_window_activate(CallingObject) {
  ThrowException("API window.activate not supported yet.");
}
```

### Variant\_resolutions.gs

The `variant_resolutions.gs` file is added to your Apps Script project if an object's type can't be determined. This can happen for multiple reasons, such as an API having multiple return types or the object is declared as a variant itself.

The Macro Converter adds a new function to this file called `__handle_resolve_<api>` that replaces the API in question and helps determine the object type.

In some cases, you might need to update the `__handle_resolve_<api>` function to manually declare the object type. See [Unsupported object type](#example_2_unsupported_object_type).

#### Example: The name method

Many object types in VBA define a `name` method. Usually, the Apps Script equivalent is `getName`, but not for every object type. Multiple alternative cases can occur:

- The object's equivalent method is called something different than `getName`.
- The object doesn't have an Apps Script API to get its name.
- There isn't an equivalent Apps Script object.

When the object type isn't determined, the Macro Converter creates a new function called `__handle_resolve_name` in the `variant_resolutions.gs` file.

Here's the example in code:

**Original VBA code**

```
a = Selection.name
```

In this case, the `name` method is called on the current selection. The selection could be a Sheet object or a Shape object. If it's a Sheet object, the translation is `getName`, but if it's a Shape object, there is no equivalent in Apps Script.

**Converted Apps Script code, added in-line**

```
a = __handle_resolve_name({}, getActiveSelection(), {});
```

The following `__handle_resolve_name` function is added to the `variant_resolution.gs` file to solve for different object types. The function checks the object type, then uses `getName` if it's supported, or throws an error if `getName` isn't supported.

**Function definition added to the `variant_resolution.gs` file**

```
function __handle_resolve_name(ExecutionContext, CallingObject, params_map) {
  var found_api_variant = false;
  var return_value;
  if (String(CallingObject) == "Sheet") {
    if (!ExecutionContext.isLhs) {
      return_value = CallingObject.getName();
      found_api_variant = true;
    }
  }
  if (CallingObject instanceof ChartInSheet) {
    if (!ExecutionContext.isLhs) {
      return_value = CallingObject.getName();
      found_api_variant = true;
    }
  }
  if (!found_api_variant) {
    ThrowException("API .name not supported yet.");
  }
  return return_value;
}
```

## Find errors

When you run into an error in the converted Apps Script code, the message specifies the type of error and its location. The format of the error message depends on which Apps Script runtime you're using.

If you're in the default V8 runtime, you'll see an error that looks like the following:

```
_api_windows_active (unimplemented_constructs:2:3)
```

This means the error is located in the `unimplemented_constructs.gs` file at line 2, character 3.

If you're in the deprecated Rhino runtime, you'll see an error that looks like the following:

```
unimplemented_constructs:2 (_api_windows_active)
```

This means the error is located in the `unimplemented_constructs.gs` file at line 2.

## Error Types

Fix most of the errors you run into in the `unimplemented_constructs.gs` and `variant_resolution.gs` files described previously.

The types of errors you might run into include:

### Unimplemented API

An *unimplemented API* is an API that the Macro Converter can't convert from VBA to Apps Script and there isn't a known workaround for the API.

Unimplemented APIs are usually added as empty functions—sometimes with empty signatures—to the `unimplemented_constructs.gs` file. If the object type couldn't be determined, the unimplemented API might be added to the `variant_resolution.gs` file, instead.

In the compatibility report you generated before the conversion, this API is labeled as *Needs more investigation*.

If you don't fix this type of API in your VBA code before you convert your file, here's how it appears in the Apps Script project:

```
/**
* Could not convert . Please add relevant code in the following
* function to implement it.
* This API has been used at the following locations in the VBA script.
*      : 
* We couldn't find an equivalent API in Apps Script for this VBA API. Please
* reconsider if this function call is critical, otherwise consider implementing
* it in a different way.
* @param param1 {}
* @param param2 {}
* ...
* @return {}
*/
function _api_<API_name>(param1, param2, ....) {
  ThrowException("API  not supported yet.");
}
```

#### Fix unimplemented API errors

Define the unimplemented API with existing Apps Script APIs or JS libraries. To do this, follow these steps:

1. Open the converted Apps Script code at the location of the error. See [Find errors](#find_errors).
2. Above the function, read the comment that was added. In some cases, the comment suggests how to implement the API in Apps Script.
3. If you can't find a way to implement the API in Apps Script, consider removing it from your code.
4. If you can't find a workaround or remove this API from your code and your macro throws this error, you can't convert this macro.

#### Examples of unimplemented API errors

Here are examples of unimplemented API scenarios and how to fix them:

- [**There's no equivalent Apps Script**](./fix-conversion-errors.md#example_1_no_equivalent_apps_script_or_unknown_api): Shows an indirect workaround for `Chart.Protect`, an API that doesn't exist in Apps Script.
- [**An unknown object type**](./fix-conversion-errors.md#example_2_unsupported_object_type): Shows how to handle an object type that's a variable, and how to implement an unsupported object type that can be recreated in Apps Script.

##### Example 1: No equivalent Apps Script or unknown API

In this example, `Chart.Protect` wasn't automatically converted because there isn't a way to protect a chart in Google Sheets.

```
/**
* Could not convert chart.protect API. Please add relevant code in the following
* function to implement it.
*
* This API has been used at the following locations in the VBA script.
*     sheet1 : line 3
* You can use the following Apps Script APIs to convert it.
*
* Comments : Auto conversion of Chart.Protect is not supported yet. If the API is
* critical for the workflow the user can implement the unimplemented handler
* method in the generated code, else comment out the throw statement.
*
* @param {Object} CallingObject represents the parent object using which the API
* has been called.
* @param {string} Password
* @param {boolean} DrawingObjects
* @param {boolean} Contents
* @param {boolean} Scenarios
* @param {boolean} UserInterfaceOnly
*
*/
function _api_chart_protect(
   CallingObject, Password, DrawingObjects, Contents, Scenarios,
   UserInterfaceOnly) {
 ThrowException('API chart.protect not supported yet.');
}
```

Even though you can’t protect a chart, you can protect the data range of the chart so that the data can’t be changed. A sample implementation of protecting the range is shown below:

```
/**
* Could not convert chart.protect API. Please add relevant code in the following
* function to implement it.
* This API has been used at the following locations in the VBA script.
*     sheet1 : line 3
*
* You can use the following Apps Script APIs to convert it.
* Comments : Auto conversion of Chart.Protect is not supported yet. If the API
* is critical for the workflow the user can implement the unimplemented handler
* method in the generated code, else comment out the throw statement.
*
* @param {Object} CallingObject represents the parent object using which the API
* has been called.
* @param {string} Password
* @param {boolean} DrawingObjects
* @param {boolean} Contents
* @param {boolean} Scenarios
* @param {boolean} UserInterfaceOnly
*/
function _api_chart_protect(
  CallingObject, Password, DrawingObjects, Contents, Scenarios, UserInterfaceOnly) {
var ranges = CallingObject.getChart().getRanges();
for (var i = 0; i < ranges.length; i++) {
  // Note that this does not lock the range for the document owner.
  ranges[i].protect();
}
}
```

##### Example 2: Unsupported object type

When the object type is unknown, the unimplemented API error is added to the `variant_resolution.gs` file. The following example expands on the VBA `name` method example. See [`variant_resolution.gs`](#variant_resolutionsgs).

In this example, you'll learn:

1. [How the `name` method is converted to a new function in the `variant_resolution.gs` file](#name).
2. [How the new function is called in the converted code](#newfunction).
3. [How to create a workaround for `CommandBar`, an unsupported object type, in Apps Script](#commandbar).

1\. Since the converted code can't determine the exact object type that `name` is called on, the Macro Converter creates a new function called `__handle_resolve_name`:

```
function __handle_resolve_name(ExecutionContext, CallingObject, params_map) {
 var found_api_variant = false;
 var return_value;
  if (String(CallingObject) == "Sheet") {
    if (!ExecutionContext.isLhs) {
      return_value = CallingObject.getName();
      found_api_variant = true;
    }
  }
  if (CallingObject instanceof ChartInSheet) {
    if (!ExecutionContext.isLhs) {
      return_value = CallingObject.getName();
      found_api_variant = true;
    }
  }
  if (!found_api_variant) {
    ThrowException('API .name not supported yet.');
  }
  return return_value;
}
```

2\. Suppose the VBA code defines a `PrintName()` function that calls the `name` API:

```
‘Defining a function that prints the name of the object in parameter
Sub PrintName(obj as Variant)
  Debug.Print obj.Name
End Sub
```

Since \`name()\` is called on an object that’s a variable, the converted code doesn’t know the object type at the time of conversion. The converted Apps Script code will call the \`\_\_handle\_resolve\_name\` function:

```
function PrintName(obj) {
  Logger.log(_handle_resolve_name(obj));
}
```

3\. Suppose your VBA code calls the `PrintName()` function on the object type `CommandBar`:

```
PrintName Application.CommandBars.item("Standard")
```

`CommandBar` isn’t supported in Apps Script and as a result, the two methods used in the VBA code above are also not supported.
- `Application.CommandBars()`: In VBA, this returns a list of all `CommandBar` objects.
- `CommandBars.item()`: In VBA, this returns a specific `CommandBar` object.
Because this object type isn’t supported in Apps Script, the converted code creates the following functions in the \`unimplemented\_constructs.gs\` file that you need to define.
- `_api_application_commandbars()`
- `_api_commandbars_item()`
The functions are called in the converted code as shown below:

```
PrintName(_api_commandbars_item(_api_application_commandbars(), "Standard")))

Here’s how the new functions are added to the unimplemented_construct.gs file:

function _api_application_commandbars(CallingObject) {
  ThrowException('API application.commandbars not supported yet.');
}
function _api_commandbars_item(CallingObject, index) {
  ThrowException('API commandbars.item not supported yet.');
}
```

To get the new functions to work, take the following steps:

3.1 Define a new object type that creates the functionalities of `CommandBars` and a new collection of `CommandBars` similar to what exists in VBA.

3.2 Add a `getName` method for the new object type.

Steps 3.1 and 3.2 are shown in the following code. Menu objects are created as a new object type that mimics the behavior of `CommandBars`.

```
// Our Implementation of CommandBar using Menu objects.

function CommandBar(name) {
  this.name = name;
  // Create a menu object to represent the commandbar.
  this.menu = SpreadsheetApp.getUi().createMenu(name);
  // Create methods for retrieving or updating the name of the object
  this.getName = function() {
    return this.name;
  };
  this.updateName = function(name) {
    this.name = name;
  };
  // ========================================================================
  // Implement other methods of CommandBar objects that are used in the script.
  // =====================================================================
  return this;
}
// Our implementation of the collection of CommandBars that exists in VBA
function CommandBars() {
  this.commandBars = [];
  this.getCommandBar = function(name) {
    for (var i = 0; i < this.commandBars.length; i++) {
      if (!this.commandBars[i].getName() == name) {
        return this.commandBars[i];
      }
    }
    // No commandBar with the name exists, create a new one and return.
    var commandBar = new CommandBar(name);
    this.commandBars.push(commandBar);
    return commandBar;
  };
  return this;
}
// Create a global object that represents CommandBars collection.
var GlobalCommandBars = new CommandBars();
```

3.3 Modify the `__handle_resolve_name` function in the `variant_resolution.gs` file to handle the new object type. Add a section to the function:

```
function __handle_resolve_name(ExecutionContext, CallingObject, params_map) {
 var found_api_variant = false;
 var return_value;
 if (String(CallingObject) == "Sheet") {
   if (!ExecutionContext.isLhs) {
     return_value = CallingObject.getName();
     found_api_variant = true;
   }
 }
 if (CallingObject instanceof ChartInSheet) {
   if (!ExecutionContext.isLhs) {
     return_value = CallingObject.getName();
     found_api_variant = true;
   }
 }
 // New section added below
 // ========================================================================
 if (CallingObject instanceof CommandBar) {
   objectExtend(params_map, {VALUETOSET: params_map.param0});
   if (ExecutionContext.isLhs) {
     // Call the setter method.
     CallingObject.updateName(params_map.VALUETOSET);
     found_api_variant = true;
   } else {
     // Getter is called, return the commandbar name,
     return_value = CallingObject.getName();
     found_api_variant = true;
   }
 }
 // ========================================================================
 // New section added above
 if (!found_api_variant) {
   ThrowException('API .name not supported yet.');
 }
 return return_value;
}
```

3.4 Define the two functions created in the `unimplemented_constructs.gs` file (`_api_application_commandbars`, `_api_commandbars_item`). This step makes sure the original calls of the function work.

```
//This is straightforward based on the implementation of a CommandBar and the
// CommandBars collection above:
function _api_application_commandbars(CallingObject) {
 return GlobalCommandBars;
}
function _api_commandbars_item(CallingObject, index) {
 return CallingObject.getCommandBar(index);
}
```

### Unimplemented language constructs

A *construct* is an element of the code language that controls execution flow or data display. For example, loops, labels, events, and gotos. For a list of all VBA constructs, see [Statements (VBA)](https://docs.microsoft.com/en-us/office/vba/language/reference/statements).

Constructs that the Macro Converter can't convert are considered *unimplemented language constructs*.

Where the Macro Converter determines that an unimplemented language construct exists, it inserts a `TODO` comment.

The following VBA constructs aren't supported:

- [AddressOf](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/addressof-operator)
- [Declare](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/declare-statement)
- [DefType](https://docs.microsoft.com/en-us/office/vba/language/concepts/getting-started/deftype-statements)
- [GoSub](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/gosubreturn-statement)
- [GoTo](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/goto-statement)
- [Implements](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/implements-statement)
- [Lset](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/lset-statement)
- [Open](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/open-statement)
- [RaiseEvent](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/raiseevent-statement)
- [Name](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/name-statement)
- [Resume](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/resume-statement)
- [Rset](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/rset-statement)
- [TypeOf](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/operators/typeof-operator)
- [Class](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/class-statement)
- [Class Modules](https://excelmacromastery.com/vba-class-modules/)

#### Fix unimplemented language construct errors

1. Update your code so that your logic doesn't rely on the unsupported language construct.
2. Open the converted Apps Script code at the location of the error. See [Find errors](#find_errors).
3. Based on the logic of the code, update it in a way that doesn't require the unsupported language construct.
4. If you can't find a way to rewrite your code without the unsupported language construct, you can't convert this macro.

#### Examples of unimplemented language construct errors

One of the most common unimplemented language constructs is a `GoTo` statement. Replace some VBA `GoTo` statements with loops. The following examples use loops instead of `GoTo` statements.

#### Example 1: Replace GoTo with While Loop

**Original VBA code**

```
Sub Test()
 a = 0
 start: Debug.Print a
 While a < 100
   a = a + 1
   If a Mod 3 == 0
     Goto start
   End If
 Wend
End Sub
```

**Equivalent Apps Script code**

```
function test() {
 var a = 0;
 start: do {
   console.log(a);
   while (a < 100) {
     a = a + 1;
     if (a % 3 == 0) {
       continue start;
     }
   }
   break start;
 } while (true);
}
```

#### Example 2: Replace GoTo with For Loop

**Original VBA code**

```
Sub Test()
 a = 0
 For i = 1 to 100
   For j = 1 to 10
     a =a a + 1
     If i + j > 50
       GoTo endLoop
     End If
   Next j
 Next i
 endLoop: MsgBox a
End Sub
```

**Equivalent Apps Script code**

```
function test() {
 var a = 0;
 endLoop: for (var i = 1; i <= 100; i++) {
    for  (var j = 0; j <=10; j++) {
      If (i + j > 50) {
        break endLoop;
      }
    }
 }
 Browser.msgBox(a);
}

   break start;
 } while (true);
}
```

### Partially supported API

For *Partially supported APIs*, some input parameters are supported in Apps Script and some aren't.

For example, the VBA API `legend_position` is used to define the legend in an Excel graph. It supports multiple types of input values, including:

- `xlLegendPositionBottom`: Puts the legend at the bottom of the chart.
- `xlLegendPositionCorner`: Puts the legend at the corner of the chart.
- `xlLegendPositionCustom`: Puts the legend at custom positions on the chart.

Apps Script has an equivalent code that supports only some of those values. The following values are not supported:

- `xlLegendPositionCorner`
- `xlLegendPositionCustom`

To flag unsupported values of partially supported APIs in your converted code, a validating condition is added to the `library.gs` file that checks for those values. For example:

```
if (position == xlLegendPositionCorner ||
     position == xlLegendPositionCustom) {
   position = _handle_legend_position_error(position);
}
```

If the validating condition finds one of the unsupported values, an error handler function, `_handle_<API_name>_error`, is created in the `unimplemented_constructs.gs` file.

The function throws a user error and won't replace the value with a supported value. For example:

```
/**
* Throw error message for unsupported legend position.
* The VBA API Legend.Position which can take values xlLegendPositionTop,
* xlLegendPositionLeft, xlLegendPositionBottom, xlLegendPositionRight,
* xlLegendPositionCorner, xlLegendPositionCustom. It is partially supported in
* Apps Scripts that supports only a subset of the values (does not support
* xlLegendPositionCorner and xlLegendPositionCustom).
* @param {string} position
*/
function _handle_legend_position_error(position) {
// Please comment the throw statement and return a supported position value
// instead.
// Values that are supported here are xlLegendPositionTop,
// xlLegendPositionLeft, xlLegendPositionBottom, xlLegendPositionRight.
throw new Error(
   'Google Sheets does not support legend position: ' + position);
}
```

#### Fix partially supported API errors

Define the `_handle_<API_name>_error` function to replace the unsupported values with an acceptable workaround for your needs.

1. Open the converted Apps Script code at the location of the error. See [Find errors](#find_errors).
2. Read the comment above the function to understand which values are supported and which aren't.
3. For the unsupported values, determine which supported values can act as a suitable replacement.
4. Update the function `_handle_<API_name>_error` to return a supported value instead.
5. If you can't find a way to replace the unsupported value, you can't convert this macro.

#### Example of a partially supported API error

The following example expands on the VBA API `legend_position` mentioned previously. See [Partially supported API](#partially_supported_api).

The following example shows original VBA code that uses an unsupported value, `xlLegendPositionCustom`.

```
Charts(1).Legend.Position = xlLegendPositionCustom
```

The Macro Converter adds the following function to the `unimplemented_constructs.gs` file:

```
/**
* Throw error message for unsupported legend position.
* The VBA API Legend.Position which can take values xlLegendPositionTop,
* xlLegendPositionLeft, xlLegendPositionBottom, xlLegendPositionRight,
* xlLegendPositionCorner, xlLegendPositionCustom. It is partially supported in
* Apps Scripts that supports only a subset of the values (does not support
* xlLegendPositionCorner and xlLegendPositionCustom).
* @param {string} position
*/
function _handle_legend_position_error(position) {
// Please comment the throw statement and return a supported position value
// instead.
// Values that are supported here are xlLegendPositionTop,
// xlLegendPositionLeft, xlLegendPositionBottom, xlLegendPositionRight.
throw new Error(
   'Google Sheets does not support legend position: ' + position);
}
```

### Manual work needed

*Manual work needed* means that the VBA API can be converted into Apps Script, but it needs a workaround.

In the compatibility report you generated before the conversion, this type of API is labeled as *Supported with workarounds*.

If you don't fix this type of API in your VBA code before you convert your file, here's how it appears in the Apps Script project:

```
/**
* Could not convert  API. Please add relevant code in the following
* function to implement it.
* This API has been used at the following locations in the VBA script.
*      : 
*
* You can use the following Apps Script APIs to convert it.
* Apps Script APIs : 
* Apps Script documentation links : 
*
* @param param1 {}
* @param param2 {}
* ...
* @return {}
*/
function _api_<API_name>(param1, param2, ....) {
 ThrowException("API  not supported yet.");
}
```

#### Fix manual work needed errors

Implement a workaround for the API to get the API to work as intended. 1. Open the converted Apps Script code at the location of the error. See [Find errors](#find_errors). 1. Read the comment above the function to understand which APIs can be used for a workaround. 1. If you can't find a suitable workaround, consider removing the API from your code. 1. If you can't find a workaround or remove this API from your code and your macro throws an error, you can't convert this macro.

#### Examples of Manual work needed errors

Here are examples of APIs that throw Manual work needed errors and how to fix them:

#### Example 1: Autocorrect.Addreplacement

In the following example, the VBA API `Autocorrect.Addreplacement` can be converted, but it needs a workaround. The Macro Converter suggests how to implement the function in the code comments.

```
/**
* Could not convert autocorrect.addreplacement API. Please add relevant code in
* the following function to implement it.
* This API has been used at the following locations in the VBA script.
*     sheet1 : line 3
* You can use the following Apps Script APIs to convert it.
* Apps Script APIs : FindReplaceRequest , onEdit
* Apps Script documentation links :
* https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onedit
* https://developers.google.com/sheets/api/eap/reference/rest/v4/spreadsheets/request?hl=en#findreplacerequest

* Comments : AutoCorrect.AddReplacement was not converted, but there is an
* equivalent option you can implement manually. Use onEdit and FindReplaceRequest
* APIs instead, see https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onedit
* and https://developers.google.com/sheets/api/eap/reference/rest/v4/spreadsheets/request?hl=en#findreplacerequest.
* For more information on API manual implementation, see
* https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors.

* @param {Object} CallingObject represents the parent object using which the API
* has been called.
* @param {string} What
* @param {string} Replacement
* @return {string}
*/

function _api_autocorrect_addreplacement(CallingObject, What, Replacement) {
  ThrowException('API autocorrect.addreplacement not supported yet.');

}
```

The following example shows the implementation of the `Autocorrect.Addreplacement` API:

```
var AUTO_CORRECTIONS = "AUTO_CORRECTIONS";
// Need to get the autocorrections set in previous sessions and use them.
var savedAutoCorrections = PropertiesService.getDocumentProperties().getProperty(AUTO_CORRECTIONS);
var autoCorrections = savedAutoCorrections ? JSON.parse(savedAutoCorrections) : {};
function onEdit(e) {
autoCorrect(e.range);
}
function autoCorrect(range) {
for (key in autoCorrections) {
// Replace each word that needs to be auto-corrected with their replacements.
range.createTextFinder(key)
.matchCase(true)
.matchEntireCell(false)
.matchFormulaText(false)
.useRegularExpression(false)
.replaceAllWith(autoCorrections[key]);
}
}
/**
* Could not convert autocorrect.addreplacement API. Please add relevant code in
* the following function to implement it.
* This API has been used at the following locations in the VBA script.
* sheet1 : line 3
*
* You can use the following Apps Script APIs to convert it.
* Apps Script APIs : createTextFinder , onEdit
* Apps Script documentation links : https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onedit ,
createTextFinder
* Comments : AutoCorrect.AddReplacement was not converted, but there is an
* equivalent option you can implement manually. Use onEdit and FindReplaceRequest
* APIs instead, see https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder#onedit
* and createTextFinder. For more information on API manual implementation, see
* https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors.
*
* @param {Object} CallingObject represents the parent object using which the API has been called.
* @param {string} What
* @param {string} Replacement
*
* @return {string}
*/

function _api_autocorrect_addreplacement(CallingObject, What, Replacement) {
autoCorrections[What] = Replacement;
// Store the updated autoCorrections in the properties so that future executions use the correction.
PropertiesService.getDocumentProperties().setProperty(AUTO_CORRECTIONS, JSON.stringify(autoCorrections));
}
```

#### Example 2: The Workbook.open method

The VBA API `workbook.open` opens a local file based on a path.

Suppose there are two files being opened by `workbook.open` in the VBA code:

- File 1: `C:\Data\abc.xlsx`
- File 2: `C:\Data\xyz.xlsx`

The following code shows how the Macro Converter replaces `Workbook.open` with Apps Script everywhere `Workbook.open` is used to open File 1:

```
var spreadSheetId =
   _handle_mso_excel_get_google_spreadsheet_id("C:\Data\abc.xlsx");
var spreadSheet = SpreadsheetApp.openById(spreadSheetId);
```

The below error is added to the `unimplemented_constructs.gs` file in the Apps Script project:

```
/**
* Method to return the spreadsheet id manually.
*
* @param {string} FileName ID of the spreadsheet to be opened.
* @return {string} return the spreadsheet id.
*/
function _handle_mso_excel_get_google_spreadsheet_id(FileName) {
 // Upload the Excel files being opened by the API to Google Drive and convert
 // them to Google Sheets.
 // Determine the spreadsheet ID of the Google Sheets file created.
 // Implement this method to return the corresponding spreadsheet ID when given
 //the original file path as parameter.
 throw new Error('Please return the spreadsheet ID corresponding to filename: ' + FileName);
 return '';
}
```

As instructed by the comments in the previous sample, you need to convert the target files to Sheets files on Drive.

The corresponding Google Spreadsheet IDs are highlighted in the following list:

- File #1: `C:\Data\abc.xlsx` becomes `https://docs.google.com/spreadsheets/d/==abc123Abc123Abc123abc==`
- File #2: `C:\Data\xyz.xlsx` becomes `https://docs.google.com/spreadsheets/d/==xyz456Xyz456xYz456xyZ==`

Then, modify the code in the Apps Script function to open the files by ID:

```
/**
* Method to return the spreadsheet id manually.
*
* @param {string} FileName ID of the spreadsheet to be opened.
* @return {string} return the spreadsheet id.
*/
function _handle_mso_excel_get_google_spreadsheet_id(FileName) {
 // Upload the Excel files being opened by the API to Google Drive and convert
 //them to Google Sheets.
 // Determine the spreadsheet ID of the Google Sheets file created.
 // Implement this method to return the corresponding spreadsheet ID when given
 //the original file path as parameter
 if (Filename.indexOf("abc.xlsx") >= 0) {
   return "abc123Abc123Abc123abc";
 } else if (Filename.indexOf("xyz.xlsx") >= 0) {
   return "xyz456Xyz456xYz456xyZ";
 }
```

### Intentional error

*Intentional errors* are added to your converted code to mimic the error behavior of your original VBA code. You don't need to modify these errors.

#### Example of an intentional error

If you try to access an element beyond the bounds of an array in VBA, the code throws an exception. In Apps Script, the code returns undefined.

To avoid unexpected results, the Macro Converter adds Apps Script code that throws an exception if you try to access elements beyond the bounds of an array.

This example is shown in the following code:

**Original VBA code**

```
Dim arr
arr = Array("apple", "orange")
MsgBox arr(5)
Will throw the following error:
Subscript out of range
```

**Converted Apps Script code (before exception error is added)**

```
var arr;
arr = ["apple", "orange"];
Browser.msgBox(arr[5]);
Will return this value and not throw an error:
undefined
```

**Apps Script code added to throw the exception error**

```
/**
* Extend the regular JS array to support VB style indexing with a get method.
* @returns{*} value at the index
*/
Array.prototype.get = function() {
 var curr_res = this;
 for (var i = 0; i < arguments.length; i++) {
   if (!Array.isArray(curr_res) || curr_res.length < arguments[i]) {
     throw new Error(‘Converted VBA Error (Intentional Error): Subscript out of range’);
   }
   curr_res = curr_res[arguments[i]];
 }
 return curr_res;
};
var arr;
arr  = ["apple", "orange"];
Browser.msgBox(arr.get(5));
```

## Related articles

- [Macro Converter add-on overview](./overview.md)
- [Determine if VBA macros are compatible](./compatibility-report.md)
- [Convert VBA macros to Apps Script](./convert-files.md)
- [Address common issues](./address-conversion-issues.md)
- [Watch Macro Converter tutorials](./tutorials.md)
- [List of compatible VBA APIs](./compatible-vba-apis.md)
