---
source: https://developers.google.com/apps-script/guides/html/reference/history
root: apps-script
fetched_at: 2026-04-23T15:18:20.377Z
---

# Class google.script.history (Client-side API)

## Page Summary

- `google.script.history` is an asynchronous client-side JavaScript API for interacting with browser history in IFRAME web apps.
- It is not designed for use in sidebars, dialogs, add-ons, or container-script contexts.
- The `push()` method adds a new state, URL parameters, and fragment to the browser history stack.
- The `replace()` method replaces the top event on the history stack with a new state, URL parameters, and fragment.
- The `setChangeHandler()` method sets a callback function to respond to changes in the browser history.

`google.script.history` is an asynchronous client-side JavaScript API that can interact with the browser history stack. It can only be used in the context of a web app that uses [`IFRAME`](https://developers.google.com/apps-script/reference/html/sandbox-mode#properties). It is not intended for use with sidebars and dialogs in an add-on or container-script context. For more information, see the [guide to using browser history in web apps](https://developers.google.com/apps-script/guides/web#web_apps_and_browser_history).

## Detailed documentation

### push(stateObject, params, hash)

Pushes the provided state object, URL parameters and URL fragment onto the browser history stack. The state object is a simple JavaScript Object that is defined by the developer and can contain any data relevant to the app's current state. This method is analogous to the [pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState\(\)_method) JavaScript method.

### Index.html

```
var now = new Date();
var state = {
  'timestamp': now.getTime()
};
var params = {
  'options': "none"
};
google.script.history.push(state, params, "anchor1");
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `stateObject` | `Object` | An developer-defined object to be associated with a browser history event, and which resurfaces when the state is popped. Typically used to store application state information (such as page data) for future retrieval. |
| `params` | `Object` | An object containing URL parameters to associate with this state. For example, `{foo: “bar”, fiz: “baz”}` equates to `"?foo=bar&fiz=baz"`. Alternatively, arrays can be used: `{foo: [“bar”, “cat”], fiz: “baz”}` equates to `"?foo=bar&foo=cat&fiz=baz"`. If null or undefined, the current URL parameters are not changed. If empty, the URL parameters are cleared. |
| `hash` | `String` | The string URL fragment appearing after the '#' character. If null or undefined, the current URL fragment is not changed. If empty, the URL fragment is cleared. |

---

### replace(stateObject, params, hash)

Replaces the top event on the browser history stack with the provided (developer-defined) state object, URL parameters and URL fragment. This is otherwise identical to [push()](#push\(Object,Object,String\)).

### Index.html

```
var now = new Date();
var state = {
  'timestamp': now.getTime()
};
var params = {
  'options': "none"
};
google.script.history.replace(state, params, "anchor1");
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `stateObject` | `Object` | An developer-defined object to be associated with a browser history event, and which resurfaces when the state is popped. Typically used to store application state information (such as page data) for future retrieval. |
| `params` | `Object` | An object containing URL parameters to associate with this state. For example, `{foo: “bar”, fiz: “baz”}` equates to `"?foo=bar&fiz=baz"`. Alternatively, arrays can be used: `{foo: [“bar”, “cat”], fiz: “baz”}` equates to `"?foo=bar&foo=cat&fiz=baz"`. If null or undefined, the current URL parameters are not changed. If empty, the URL parameters are cleared. |
| `hash` | `String` | The string URL fragment appearing after the '#' character. If null or undefined, the current URL fragment is not changed. If empty, the URL fragment is cleared. |

---

### setChangeHandler(function)

Sets a callback function to respond to changes in the browser history. The callback function should take only a single [event object](#eventObject) as an argument.

### Index.html

```
google.script.history.setChangeHandler(function (e) {
  console.log(e.state);
  console.log(e.location.parameters);
  console.log(e.location.hash);

  // Adjust web app UI to match popped state here...
});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `function` | `Function` | a client-side callback function to run upon a history change event, using the [event object](#eventObject) as the only argument. |

#### Event object

<table><tbody><tr><th colspan="2">Fields</th></tr><tr><td><code>e.state</code></td><td><p>The state object associated with the popped event. This object is identical to the state object that used in the corresponding <a href="#push(Object,Object,String)">push()</a> or <a href="#replace(Object,Object,String)">replace()</a> method that added the popped state to the history stack.</p><div><pre><code>{"page":2, "name":"Wilbur"}</code></pre></div></td></tr><tr><td><code>e.location</code></td><td><p>A <a href="https://developers.google.com/apps-script/guides/html/reference/url#locationObject">location object</a> associated with the popped event</p><div><pre><code>{"hash":"", "parameter":{"name": "alice", "n": "1"}, "parameters":{"name": ["alice"], "n": ["1", "2"]}}</code></pre></div></td></tr></tbody></table>
