---
source: https://developers.google.com/apps-script/migration/domain
root: apps-script
fetched_at: 2026-04-23T15:18:30.850Z
---

# Migrate from Domain Service to the Admin SDK Advanced Services

## Page Summary

- The Domain service for G Suite domain administrators is deprecated and will be turned off.
- The Domain service is being replaced by the Admin SDK Directory and Admin SDK Reports advanced services.
- This page provides a migration path from the old Domain service to the new Admin SDK.
- A comparison table outlines the equivalent methods between Domain service and Admin SDK.
- The Admin SDK offers new features not present in the Domain service, such as device management and reporting.

The [Domain service](../index.md), which lets Google Workspace administrators manage users and groups, was [deprecated on May 15, 2014](https://gsuite-developers.googleblog.com/2014/05/deprecating-scriptdb-and-domain-service.html), and was turned off on [November 20, 2014](../guides/support/sunset.md). The service is replaced by the [Admin SDK Directory](../advanced/admin-sdk-directory.md) and [Admin SDK Reports](../advanced/admin-sdk-reports.md) advanced services. This page outlines the migration path from Domain service to Admin SDK.

## Method comparison

The following table provides an overview of the methods used in Domain service and their equivalent methods (if any) in Admin SDK.

<table><tbody><tr><th>Domain services method</th><th>Admin SDK method</th></tr><tr><td><code>
    
    DomainGroup.addMember(memberId)</code></td><td rowspan="2"><code>
    
    AdminDirectory.Members.insert(resource, groupKey)</code><br>In Admin SDK, a member's role in a group can be specified via <code>
    role</code>.</td></tr><tr><td><code>
    
    DomainGroup.addOwner(ownerId)</code></td></tr><tr><td><code>
    
    DomainGroup.deleteGroup()</code></td><td><code>
    AdminDirectory.Groups.remove(groupKey)</code></td></tr><tr><td><code>
    
    DomainGroup.getAllMembers()</code></td><td rowspan="2"><code>
    AdminDirectory.Members.list(groupKey, optionalArgs)</code><br>In Admin SDK, owner(s) can be listed using the optional <code>roles</code> parameter.</td></tr><tr><td><code>
    
    DomainGroup.getAllOwners()</code></td></tr><tr><td><code>
    
    DomainGroup.getDescription()</code></td><td rowspan="3"><code>
    AdminDirectory.Groups.get(groupKey)</code><br>Property: <code>description</code><br>Property: <code>
    id</code><br>Property: <code>
    name</code></td></tr><tr><td><code>
    DomainGroup.getId()</code></td></tr><tr><td><code>
    DomainGroup.getName()</code></td></tr><tr><td><code>
    
    DomainGroup.getPermissionLevel()</code></td><td>N/A</td></tr><tr><td><code>
    
    DomainGroup.removeMember(memberId)</code></td><td rowspan="2"><code>
    AdminDirectory.Members.remove(groupKey, memberKey)</code></td></tr><tr><td><code>
    
    DomainGroup.removeOwner(ownerId)</code></td></tr><tr><td><code>
    
    DomainGroup.setDescription(description)</code></td><td rowspan="2"><code>
    AdminDirectory.Groups.patch(resource, groupKey)</code><br>Property: <a href="https://developers.google.com/admin-sdk/directory/v1/reference/groups#description"><code>description</code></a><br>Property: <code>
    name</code></td></tr><tr><td><code>
    
    DomainGroup.setName(name)</code></td></tr><tr><td><code>
    
    DomainGroup.setPermissionLevel(level)</code></td><td>N/A</td></tr><tr><td><code>
    
    DomainNickname.deleteNickname()</code></td><td><code>
    AdminDirectory.Users.Aliases.remove(userKey, alias)</code></td></tr><tr><td><code>
    
    DomainNickname.getNickname()</code></td><td rowspan="2"><code>
    AdminDirectory.Users.Aliases.list(userKey, optionalArgs)</code><br>Property: <code>aliases</code><br>Property: <code>primaryEmail</code></td></tr><tr><td><code>
    
    DomainNickname.getUsername()</code></td></tr><tr><td><code>
    DomainUser.deleteUser()</code></td><td><code>
    AdminDirectory.Users.remove(userKey)</code></td></tr><tr><td><code>
    
    DomainUser.getAgreedToTerms()</code></td><td rowspan="7"><code>
    AdminDirectory.Users.get(userKey)</code><br>Property: <code>agreedToTerms</code><br>Property: <code>
    changePasswordAtNextLogin</code><br>Property: <code>primaryEmail</code><br>Property: <code>
    name.familyName</code><br>Property: <code>name.givenName</code><br>Property: <code>isAdmin</code><br>Property: <code>suspended</code></td></tr><tr><td><code>
    
    DomainUser.getChangePasswordAtNextLogin()</code></td></tr><tr><td><code>
    DomainUser.getEmail()</code></td></tr><tr><td><code>
    
    DomainUser.getFamilyName()</code></td></tr><tr><td><code>
    
    DomainUser.getGivenName()</code></td></tr><tr><td><code>
    DomainUser.getIsAdmin()</code></td></tr><tr><td><code>
    
    DomainUser.getIsSuspended()</code></td></tr><tr><td><code>
    
    DomainUser.getStorageQuota()</code></td><td><code>
    AdminReports.UserUsageReport.get(userKey, date, optionalArgs)</code><br>Account: <code>total_quota_in_mb</code></td></tr><tr><td><code>
    
    DomainUser.setChangePasswordAtNext
    Login(changePassword)</code></td><td rowspan="3"><code>
    AdminDirectory.Users.patch(resource, userKey)</code><br>Property: <code>changePasswordAtNextLogin</code><br>Property: <code>name.familyName</code><br>Property: <code>name.givenName</code></td></tr><tr><td><code>
    
    DomainUser.setFamilyName(name)</code></td></tr><tr><td><code>
    
    DomainUser.setGivenName(name)</code></td></tr><tr><td><code>
    
    DomainUser.setIsAdmin(admin)</code></td><td><code>
    AdminDirectory.Users.makeAdmin(resource, userKey)</code><br>Property: <code>isAdmin</code></td></tr><tr><td><code>
    
    DomainUser.setIsSuspended(suspended)</code></td><td rowspan="3"><code>
    AdminDirectory.Users.patch(resource, userKey)</code><br>Property: <code>suspended</code><br>Property: <code>password</code><br>Property: <code>primaryEmail</code></td></tr><tr><td><code>
    
    DomainUser.setPassword(password)</code></td></tr><tr><td><code>
    
    DomainUser.setUsername(username)</code></td></tr><tr><td><code>
    
    GroupsManager.createGroup(groupId, name, description, permissionLevel)
    </code> <code>
    
    GroupsManager.createGroup(groupId, name)</code></td><td><code>
    AdminDirectory.Groups.insert(resource)</code><br>Setting the permission level isn't supported in the Admin SDK.</td></tr><tr><td><code>
    
    GroupsManager.getAllGroups()</code><br><code>
    
    GroupsManager.getAllGroups(memberId)</code></td><td><code>
    AdminDirectory.Groups.list(optionalArgs)</code><br>Parameter: <code>userKey</code></td></tr><tr><td><code>
    
      GroupsManager.getDomain()</code><br><code>
      
      NicknameManager.getDomain()</code><br><code>
      UserManager.getDomain()</code></td><td>N/A<br>As a workaround, get a single user's email address and extract the domain.</td></tr><tr><td><code>
    
    GroupsManager.getGroup(groupId)</code></td><td><code>
    AdminDirectory.Groups.get(groupKey)</code></td></tr><tr><td><code>
    
    NicknameManager.createNickname(username, nickname)</code></td><td><code>
    AdminDirectory.Users.Aliases.insert(resource, userKey)</code></td></tr><tr><td><code>
    
    NicknameManager.getAllNicknames()</code></td><td>N/A</td></tr><tr><td><code>
    
    NicknameManager.getAllNicknames(username)</code></td><td rowspan="2"><code>
    AdminDirectory.Users.Aliases.list(userKey, optionalArgs)</code><br>You will need to loop through the results to find the nickname.</td></tr><tr><td><code>
    
    NicknameManager.getNickname(nickname)</code></td></tr><tr><td><code>
    
    UserManager.createUser(username, givenName, familyName, password)
    </code> <code>
    
    UserManager.createUser(username, givenName, familyName, password, passwordHashFunction)
    </code></td><td><code>
    
    AdminDirectory.Users.insert(resource)</code><br>Property: <code>hashFunction</code></td></tr><tr><td><code>
    
    UserManager.getAllUsers()</code></td><td><code>
    AdminDirectory.Users.list(optionalArgs)</code><br>Either the <code>
    customer</code> or the <code>
    domain</code> parameter must be provided. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>.</td></tr><tr><td><code>
    
    UserManager.getUser(user)</code><br><code>
    
    UserManager.getUser(username)</code></td><td><code>
    AdminDirectory.Users.get(userKey)</code></td></tr></tbody></table>

## New features in Admin SDK

In addition to the supported methods outlined in the preceding section, the Admin SDK advanced services provide the following new features:

| Feature | Admin SDK class or method |
| --- | --- |
| Admin notifications | `     AdminDirectory.Notifications` |
| Application-specific passwords | `     AdminDirectory.Asps` |
| Device management | `     AdminDirectory.Chromeosdevices`   `     AdminDirectory.Mobiledevices` |
| Group aliases | `     AdminDirectory.Groups.Aliases` |
| OAuth tokens | `     AdminDirectory.Tokens` |
| Org units | `     AdminDirectory.Orgunits` |
| Reporting | `     AdminReports` |
| Search for users | `     AdminDirectory.Users.list(optionalArgs)`   Parameter: `     query` |
| Un-delete users | `     AdminDirectory.Users.undelete()` |
| User data | `     AdminDirectory.Users.get(userKey)` |
| User photo | `     AdminDirectory.Users.Photos.get(userKey)` |
| Verification codes (2-factor) | `     AdminDirectory.VerificationCodes` |
