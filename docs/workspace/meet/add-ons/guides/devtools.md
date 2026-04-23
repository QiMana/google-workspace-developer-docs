---
source: https://developers.google.com/workspace/meet/add-ons/guides/devtools
root: workspace
fetched_at: 2026-04-23T15:30:12.603Z
---

# Manage developer tools for Meet add-ons

Developer tools, such as [Chrome DevTools](https://developer.chrome.com/docs/devtools) help Google Meet add-on developers debug and test an add-on in Google Meet.

## DevTools API

You can interact with the Meet add-on DevTools by navigating to the console in Meet and entering `devtools.meet.addons`. This provides you with methods that you can use.

### devtools.meet.addons.suppressHeartbeatTimeout

By default, heart-beating is enforced for an add-on. However, while debugging you may want to suppress heart-beating so that the Meet add-on doesn't keep timing out. To do this, call the DevTools method `suppressHeartbeatTimeout`:

```
devtools.meet.addons.suppressHeartbeatTimeout();
```

### devtools.meet.addons.setHeartbeatTimeout

Every page should instantiate a Meet add-on session and complete navigation within 10 seconds. If you would like to modify this timeout while testing you can set it here:

```
devtools.meet.addons.setHeartbeatTimeout(100); // Timeout in milliseconds.
```

### devtools.meet.addons.resetHeartbeatTimeout

To reset any changes made to heart-beating in the same session you can use the reset method:

```
devtools.meet.addons.resetHeartbeatTimeout();
```

### devtools.meet.addons.setDarkMode

If you want to test how your add-ons look with their dark-mode icon, you can set dark-mode for Meet with this method:

```
devtools.meet.addons.setDarkMode(true);
```

To set it back to normal in the same session, set it back to false:

```
devtools.meet.addons.setDarkMode(false);
```

## Related topics

- [Deploy a Meet add-on](./deploy-add-on.md)
- [Best practices](./best-practices.md)
- [Add-on types](../../../add-ons/concepts/types.md)
