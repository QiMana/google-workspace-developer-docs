---
source: https://developers.google.com/workspace/add-ons/guides/css
root: workspace
fetched_at: 2026-04-23T15:22:52.479Z
---

# CSS package for Editor add-ons

To help your [Editor add-on](../concepts/types.md#editor_add-ons) look and feel like Google Sheets, Docs, Slides, or Forms, link in the CSS package following to apply Google styling to fonts, buttons, and form elements. For a sample of the CSS package in use, see the [Docs add-on quickstart](../editors/docs/quickstart/translate.md). To use the CSS package, include the following at the top of each HTML file:

```
<link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons1.css">
```

Note that the style for form elements cannot be completely controlled in all browsers. In particular, `<select>` elements display some visual artifacts in Firefox and Internet Explorer, although they still work properly. To see what the styles look like in a given browser, load this page in that browser.

## Typography

Use Arial font for all text, in the following styles depending on use:

| Use and appearance | Markup with CSS package |
| --- | --- |
| <iframe src="https://developers.google.com/frame/workspace/add-ons/guides/css_c797ddef75c447db38d174b7e20e9d7fc49d6a3af3965e6bfa5bf2ada910b56b.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe> | ``` <h1>Titles and headers</h1> <b>Bold text</b> Normal text <a href="">Links</a> <span class="current">Current navigation selection</span> <span class="error">Form input errors</span> <span class="gray">Gray text</span> <span class="secondary">Secondary text</span> ``` |

## Buttons

You can use any of the standard types of buttons— `<button>`, `<input type="button">`, or `<input type="submit">`, as well as `<a class="button">`. Buttons that are horizontally adjacent space themselves out automatically. There are several colors available, for various uses:

<table><tbody><tr><th>Use</th><th>Appearance</th><th>Markup with CSS package</th></tr><tr><td>Primary action</td><td rowspan="4"><iframe src="https://developers.google.com/frame/workspace/add-ons/guides/css_ae80967682e97b2e7783e4612dc7565b96954d0a8c4faf1f83270526370aba85.frame"></iframe></td><td><div><pre><code><button class="action">Translate</button></code></pre></div></td></tr><tr><td>Secondary action(s)</td><td><div><pre><code><button>Close</button></code></pre></div></td></tr><tr><td>Create action</td><td><div><pre><code><button class="create">Create</button></code></pre></div></td></tr><tr><td>Share action</td><td><div><pre><code><button class="share">Share</button></code></pre></div></td></tr></tbody></table>

## Checkboxes

| Example | Markup with CSS package |
| --- | --- |
| <iframe src="https://developers.google.com/frame/workspace/add-ons/guides/css_de991a5ba45ae7d69daed2fcdd4f4195e833d071f142d2169909af24481b9a95.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe> | ``` <div>   <input type="checkbox" id="checkbox1" checked>   <label for="checkbox1">Checked</label> </div> <div>   <input type="checkbox" id="checkbox2">   <label for="checkbox2">Unchecked</label> </div> <div>   <input type="checkbox" id="checkbox3" checked disabled>   <label for="checkbox3">Checked, disabled</label> </div> <div>   <input type="checkbox" id="checkbox4" disabled>   <label for="checkbox4">Unchecked, disabled</label> </div> ``` |

## Radio buttons

| Example | Markup with CSS package |
| --- | --- |
| <iframe src="https://developers.google.com/frame/workspace/add-ons/guides/css_a6c116e15c0a997fe0f8b44856976042c0a10c849cc7ca204a9450105e4936a1.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe> | ``` <div>   <input type="radio" name="radio-a" id="radio1" checked>   <label for="radio1">Checked</label> </div> <div>   <input type="radio" name="radio-a" id="radio2">   <label for="radio2">Unchecked</label> </div> <div>   <input type="radio" name="radio-b" id="radio3"       checked disabled>   <label for="radio3">Checked, disabled</label> </div> <div>   <input type="radio" name="radio-b" id="radio4" disabled>   <label for="radio4">Unchecked, disabled</label> </div> ``` |

## Select menus

| Example | Markup with CSS package |
| --- | --- |
| <iframe src="https://developers.google.com/frame/workspace/add-ons/guides/css_217407de51ce62d0fd5f18f71287e3775fcc9c01465952b190c40c3ef30fbcf6.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe> | ``` <div class="block form-group">   <label for="select">Select</label>   <select id="select">     <option selected>Google Docs</option>     <option>Google Forms</option>     <option>Google Sheets</option>   </select> </div> <div class="block form-group">   <label for="disabled-select">Disabled select</label>   <select id="disabled-select" disabled>     <option selected>Google Docs</option>     <option>Google Forms</option>     <option>Google Sheets</option>   </select> </div> ``` |

## Text areas

| Example | Markup with CSS package |
| --- | --- |
| <iframe src="https://developers.google.com/frame/workspace/add-ons/guides/css_7df44135a078ea0fe36f008d31255505bdd8870099948ddf3fd63c0d38af41f7.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe> | ``` <div class="form-group">   <label for="sampleTextArea">Label</label>   <textarea id="sampleTextArea" rows="3"></textarea> </div> ``` |

## Text fields

| Example | Markup with CSS package |
| --- | --- |
| <iframe src="https://developers.google.com/frame/workspace/add-ons/guides/css_b2946fefc89d07d44b4c09d1341ea67d7d8e23ca3f9701ef6d7640b7981a8ba7.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe> |

```
<div class="inline form-group">
  <label for="city">City</label>
  <input type="text" id="city" style="width: 150px;">
</div>
<div class="inline form-group">
  <label for="state">State</label>
  <input type="text" id="state" style="width: 40px;">
</div>
<div class="inline form-group">
  <label for="zip-code">Zip code</label>
  <input type="text" id="zip-code" style="width: 65px;">
</div>
```

## Sidebars

Sidebars can be tricky to style because while the height is variable, many add-ons need to include a branding area that does not scroll. The following is a copy of the sidebar from the [Google Docs add-on quickstart](../samples/translate-addon-sample.md). If you drag the bottom-right corner of the text area to make the content taller than the sidebar, the content area automatically scrolls but the branding at the bottom does not.

The example uses the `sidebar` class to apply the correct padding and the `bottom` class to force the branding area to the bottom. A local class, `branding-below`, then defines the area that the main area of the sidebar should leave clear from the bottom.

| Example | Markup with CSS package |
| --- | --- |
| <iframe src="https://developers.google.com/frame/workspace/add-ons/guides/css_1d30f2d48ae8c2c12e6c0207f06a34dcbb74b4717e9a8de6ad58c6028ef82d2c.frame" allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com" allowfullscreen=""></iframe> | ``` <style> .branding-below {   bottom: 56px;   top: 0; } </style>  <div class="sidebar branding-below">   <div class="block form-group">     <label for="translated-text">       <b>Translation</b></label>     <textarea id="translated-text" rows="15">     </textarea>   </div>    <div class="block">     <input type="checkbox" id="save-prefs">     <label for="save-prefs">       Use these languages by default</label>   </div>   <div class="block">     <button class="blue">Translate</button>     <button>Insert</button>   </div> </div>  <div class="sidebar bottom">   <span class="gray">     Translate sample by Google</span> </div> ``` |
