---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/mobiledevices
root: workspace
fetched_at: 2026-04-23T15:23:39.662Z
---

# REST Resource: mobiledevices

## Resource: MobileDevice

Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](../../../v1/guides/manage-mobile-devices.html.md).

JSON representation

```
{
  "kind": string,
  "etag": string,
  "resourceId": string,
  "deviceId": string,
  "name": [
    string
  ],
  "email": [
    string
  ],
  "model": string,
  "os": string,
  "type": string,
  "status": string,
  "hardwareId": string,
  "firstSync": string,
  "lastSync": string,
  "userAgent": string,
  "serialNumber": string,
  "imei": string,
  "meid": string,
  "wifiMacAddress": string,
  "networkOperator": string,
  "defaultLanguage": string,
  "managedAccountIsOnOwnerProfile": boolean,
  "deviceCompromisedStatus": string,
  "buildNumber": string,
  "kernelVersion": string,
  "basebandVersion": string,
  "unknownSourcesStatus": boolean,
  "developerOptionsStatus": boolean,
  "otherAccountsInfo": [
    string
  ],
  "adbStatus": boolean,
  "supportsWorkProfile": boolean,
  "manufacturer": string,
  "releaseVersion": string,
  "securityPatchLevel": string,
  "brand": string,
  "bootloaderVersion": string,
  "hardware": string,
  "encryptionStatus": string,
  "devicePasswordStatus": string,
  "privilege": string,
  "applications": [
    {
      "packageName": string,
      "displayName": string,
      "versionName": string,
      "versionCode": integer,
      "permission": [
        string
      ]
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. For Mobiledevices resources, the value is <code>admin#directory#mobiledevice</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>The unique ID the API service uses to identify the mobile device.</p></td></tr><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier.</p></td></tr><tr><td><code>name[]</code></td><td><p><code>string</code></p><p>The list of the owner's user names. If your application needs the current list of device owner names, use the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/get.html">get</a> method. For more information about retrieving mobile device user information, see the <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user">Developer's Guide</a>.</p></td></tr><tr><td><code>email[]</code></td><td><p><code>string</code></p><p>The list of the owner's email addresses. If your application needs the current list of user emails, use the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/get.html">get</a> method. For additional information, see the <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user">retrieve a user</a> method.</p></td></tr><tr><td><code>model</code></td><td><p><code>string</code></p><p>The mobile device's model name, for example Nexus S. This property can be <a href="https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html">updated</a>. For more information, see the <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile=devices#update_mobile_device">Developer's Guide</a>.</p></td></tr><tr><td><code>os</code></td><td><p><code>string</code></p><p>The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be <a href="https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html">updated</a>. For more information, see the <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices#update_mobile_device">Developer's Guide</a>.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>The type of mobile device.</p></td></tr><tr><td><code>status</code></td><td><p><code>string</code></p><p>The device's status.</p></td></tr><tr><td><code>hardwareId</code></td><td><p><code>string</code></p><p>The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.</p></td></tr><tr><td><code>firstSync</code></td><td><p><code>string</code></p><p>The date and time the device was initially synchronized with the policy settings in the Admin console. The value is in <a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601</a> date and time format. The time is the complete date plus hours, minutes, and seconds in the form <code><em>YYYY-MM-DD</em>T<em>hh:mm:ssTZD</em></code>. For example, <code>2010-04-05T17:30:04+01:00</code>.</p></td></tr><tr><td><code>lastSync</code></td><td><p><code>string</code></p><p>The date and time the device was last synchronized with the policy settings in the Admin console. The value is in <a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601</a> date and time format. The time is the complete date plus hours, minutes, and seconds in the form <code><em>YYYY-MM-DD</em>T<em>hh:mm:ssTZD</em></code>. For example, <code>2010-04-05T17:30:04+01:00</code>.</p></td></tr><tr><td><code>userAgent</code></td><td><p><code>string</code></p><p>Gives information about the device such as <code>os</code> version. This property can be <a href="https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/update.html">updated</a>. For more information, see the <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices#update_mobile_device">Developer's Guide</a>.</p></td></tr><tr><td><code>serialNumber</code></td><td><p><code>string</code></p><p>The device's serial number.</p></td></tr><tr><td><code>imei</code></td><td><p><code>string</code></p><p>The device's IMEI number.</p></td></tr><tr><td><code>meid</code></td><td><p><code>string</code></p><p>The device's MEID number.</p></td></tr><tr><td><code>wifiMacAddress</code></td><td><p><code>string</code></p><p>The device's MAC address on Wi-Fi networks.</p></td></tr><tr><td><code>networkOperator</code></td><td><p><code>string</code></p><p>Mobile Device mobile or network operator (if available) (Read-only)</p></td></tr><tr><td><code>defaultLanguage</code></td><td><p><code>string</code></p><p>The default locale used on the device.</p></td></tr><tr><td><code>deviceCompromisedStatus</code></td><td><p><code>string</code></p><p>The compromised device status.</p></td></tr><tr><td><code>buildNumber</code></td><td><p><code>string</code></p><p>The device's operating system build number.</p></td></tr><tr><td><code>kernelVersion</code></td><td><p><code>string</code></p><p>The device's kernel version.</p></td></tr><tr><td><code>basebandVersion</code></td><td><p><code>string</code></p><p>The device's baseband version.</p></td></tr><tr><td><code>unknownSourcesStatus</code></td><td><p><code>boolean</code></p><p>Unknown sources enabled or disabled on device (Read-only)</p></td></tr><tr><td><code>developerOptionsStatus</code></td><td><p><code>boolean</code></p><p>Developer options enabled or disabled on device (Read-only)</p></td></tr><tr><td><code>otherAccountsInfo[]</code></td><td><p><code>string</code></p><p>The list of accounts added on device (Read-only)</p></td></tr><tr><td><code>adbStatus</code></td><td><p><code>boolean</code></p><p>Adb (USB debugging) enabled or disabled on device (Read-only)</p></td></tr><tr><td><code>manufacturer</code></td><td><p><code>string</code></p><p>Mobile Device manufacturer (Read-only)</p></td></tr><tr><td><code>releaseVersion</code></td><td><p><code>string</code></p><p>Mobile Device release version version (Read-only)</p></td></tr><tr><td><code>securityPatchLevel</code></td><td><p><code>string (int64 format)</code></p><p>Mobile Device Security patch level (Read-only)</p></td></tr><tr><td><code>brand</code></td><td><p><code>string</code></p><p>Mobile Device Brand (Read-only)</p></td></tr><tr><td><code>bootloaderVersion</code></td><td><p><code>string</code></p><p>Mobile Device Bootloader version (Read-only)</p></td></tr><tr><td><code>hardware</code></td><td><p><code>string</code></p><p>Mobile Device Hardware (Read-only)</p></td></tr><tr><td><code>encryptionStatus</code></td><td><p><code>string</code></p><p>Mobile Device Encryption Status (Read-only)</p></td></tr><tr><td><code>devicePasswordStatus</code></td><td><p><code>string</code></p><p>DevicePasswordStatus (Read-only)</p></td></tr><tr><td><code>privilege</code></td><td><p><code>string</code></p><p>DMAgentPermission (Read-only)</p></td></tr><tr><td><code>applications[]</code></td><td><p><code>object</code></p><p>The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data.</p>When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications.</td></tr><tr><td><code>applications[].packageName</code></td><td><p><code>string</code></p><p>The application's package name. An example is <code>com.android.browser</code>.</p></td></tr><tr><td><code>applications[].displayName</code></td><td><p><code>string</code></p><p>The application's display name. An example is <code>Browser</code>.</p></td></tr><tr><td><code>applications[].versionName</code></td><td><p><code>string</code></p><p>The application's version name. An example is <code>3.2-140714</code>.</p></td></tr><tr><td><code>applications[].versionCode</code></td><td><p><code>integer</code></p><p>The application's version code. An example is <code>13</code>.</p></td></tr><tr><td><code>applications[].permission[]</code></td><td><p><code>string</code></p><p>The list of permissions of this application. These can be either a standard Android permission or one defined by the application, and are found in an application's <a href="https://developer.android.com/guide/topics/manifest/uses-permission-element.html">Android manifest</a>. Examples of a Calendar application's permissions are <code>READ_CALENDAR</code>, or <code>MANAGE_ACCOUNTS</code>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>action</h3></td><td>Takes an action that affects a mobile device.</td></tr><tr><td><h3>delete</h3></td><td>Removes a mobile device.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a mobile device's properties.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a paginated list of all user-owned mobile devices for an account.</td></tr></tbody></table>
