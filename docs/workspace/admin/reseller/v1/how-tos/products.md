---
source: https://developers.google.com/workspace/admin/reseller/v1/how-tos/products
root: workspace
fetched_at: 2026-04-23T15:24:46.466Z
---

# Product & SKU IDs

The Reseller API supports the following Google products and related Stock Keeping Units (SKUs):

- Google Workspace
- Archived User
- Google Drive
- Google Vault
- Chrome Enterprise
- Cloud Identity Free Edition
- Cloud Identity Premium Edition
- Google Colab

## Google Workspace

Google Workspace offers a suite of business-grade hosted email and collaboration tools. For more information, see [benefits of Google Workspace](https://workspace.google.com/).

Notes for Reseller API management of a Google Workspace subscription:

- Cancel active Google Vault or Google Drive subscriptions before suspending the associated Google Workspace subscription.
- To transfer a customer's Google Workspace subscription and an associated Google Vault or Google Drive subscription, use the [batch](https://developers.google.com/workspace/admin/reseller/v1/batch) operation. Transferring each subscription individually results in an error.

<table><tbody><tr><th>Product ID</th><th>Product name</th><th>SKU ID</th><th>SKU name</th></tr><tr><td colspan="4"><strong>Google Workspace SKUs</strong></td></tr><tr><td><code>Google-Apps</code></td><td>Google Workspace</td><td><code>1010020027</code></td><td>Google Workspace Business Starter</td></tr><tr><td></td><td></td><td><code>1010020028</code></td><td>Google Workspace Business Standard</td></tr><tr><td></td><td></td><td><code>1010020025</code></td><td>Google Workspace Business Plus</td></tr><tr><td></td><td></td><td><code>1010060003</code></td><td>Google Workspace Enterprise Essentials</td></tr><tr><td></td><td></td><td><code>1010020029</code></td><td>Google Workspace Enterprise Starter</td></tr><tr><td></td><td></td><td><code>1010020026</code></td><td>Google Workspace Enterprise Standard</td></tr><tr><td></td><td></td><td><code>1010020020</code></td><td>Google Workspace Enterprise Plus (formerly G Suite Enterprise)</td></tr><tr><td></td><td></td><td><code>1010060001</code></td><td>Google Workspace Essentials (formerly G Suite Essentials)</td></tr><tr><td></td><td></td><td><code>1010060005</code></td><td>Google Workspace Enterprise Essentials Plus</td></tr><tr><td></td><td></td><td><code>1010020030</code></td><td>Google Workspace Frontline Starter</td></tr><tr><td></td><td></td><td><code>1010020031</code></td><td>Google Workspace Frontline Standard</td></tr><tr><td></td><td></td><td><code>1010020034</code></td><td>Google Workspace Frontline Plus</td></tr><tr><td></td><td></td><td><code>1010020035</code></td><td>Google Workspace Business Continuity</td></tr><tr><td></td><td></td><td><code>1010020036</code></td><td>Google Workspace Business Continuity Plus</td></tr><tr><td><code>101047</code></td><td>Gemini</td><td><code>1010470001</code></td><td>Gemini Enterprise (formerly Duet AI for Enterprise)</td></tr><tr><td></td><td></td><td><code>1010470002</code></td><td>Gemini Labs</td></tr><tr><td></td><td></td><td><code>1010470003</code></td><td>Gemini Business</td></tr><tr><td></td><td></td><td><code>1010470006</code></td><td>Gemini Security</td></tr><tr><td></td><td></td><td><code>1010470007</code></td><td>Gemini Meet</td></tr><tr><td></td><td></td><td><code>1010470008</code></td><td>AI Ultra Access (formerly Google AI Ultra for Business)</td></tr><tr><td></td><td></td><td><code>1010470009</code></td><td>AI Expanded Access</td></tr><tr><td colspan="4"><strong>G Suite & Legacy SKUs</strong></td></tr><tr><td><code>Google-Apps</code></td><td>Google Workspace</td><td><code>Google-Apps-Unlimited</code></td><td>G Suite Business</td></tr><tr><td></td><td></td><td><code>Google-Apps-For-Business</code></td><td>G Suite Basic</td></tr><tr><td></td><td></td><td><code>Google-Apps-Lite</code></td><td>G Suite Lite</td></tr><tr><td></td><td></td><td><code>Google-Apps-For-Postini</code></td><td>Google Apps Message Security</td></tr></tbody></table>

### Upgrades & downgrades

- For new customers, create a subscription with the [`subscriptions.insert` method](https://developers.google.com/workspace/admin/reseller/v1/reference/subscriptions/insert).
- To upgrade a subscription, use the [`subscriptions.insert` method](https://developers.google.com/workspace/admin/reseller/v1/reference/subscriptions/insert) with the `skuId` you want to upgrade to. You can't upgrade `ANNUAL_YEARLY_PAY` subscriptions directly, but you can switch to `FLEXIBLE` using the [`subscriptions.changeRenewalSettings` method](https://developers.google.com/workspace/admin/reseller/v1/reference/subscriptions/changeRenewalSettings), then adjust after the renewal event.
- To downgrade a subscription, use the [`subscriptions.insert` method](https://developers.google.com/workspace/admin/reseller/v1/reference/subscriptions/insert) with the `skuId` you want to downgrade to. You can't downgrade `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions during their term. The downgrade must be done manually on or after renewal. We recommend switching to `FLEXIBLE` using the [`subscriptions.changeRenewalSettings` method](https://developers.google.com/workspace/admin/reseller/v1/reference/subscriptions/changeRenewalSettings), then adjusting after the renewal event. For more information, see [this Help Center article](https://support.google.com/a/answer/6073179).
- You can't combine transfer and SKU switch operations. For example, if a customer uses `Google-Apps-For-Business` and wants to buy `Google-Apps-Unlimited` from you, transfer the customer first with their existing SKU, then switch to the new SKU.
- Upgrades and downgrades start a new subscription and terminate the previous one. For annual plans, a new commitment starts when you call the [`subscriptions.insert` method](https://developers.google.com/workspace/admin/reseller/v1/reference/subscriptions/insert).

#### Upgrade & downgrade matrix from G Suite SKUs to Google Workspace SKUs

This matrix summarizes acceptable upgrade and downgrade paths.

| From ↓ to → | **Business Starter** | **Business Standard** | **Business Plus** | **Enterprise Standard** | **Enterprise Plus** |
| --- | --- | --- | --- | --- | --- |
| **G Suite Basic** | Upgradeable | Upgradeable | Upgradeable | Upgradeable | Upgradeable |
| **G Suite Business** | Downgradeable | Upgradeable | Upgradeable | Upgradeable | Upgradeable |

#### Upgrade & downgrade matrix for Google Workspace SKUs

This matrix summarizes acceptable upgrade and downgrade paths.

| From ↓ to → | **Business Starter** | **Business Standard** | **Business Plus** | **Enterprise Standard** | **Enterprise Plus** |
| --- | --- | --- | --- | --- | --- |
| **Business Starter** |  | Upgradeable | Upgradeable | Upgradeable | Upgradeable |
| **Business Standard** | Downgradeable |  | Upgradeable | Upgradeable | Upgradeable |
| **Business Plus** | Downgradeable | Downgradeable |  | Upgradeable | Upgradeable |
| **Enterprise Standard** | Downgradeable <sup>*</sup> | Downgradeable <sup>*</sup> | Downgradeable <sup>*</sup> |  | Upgradeable |
| **Enterprise Plus** | Downgradeable <sup>*</sup> | Downgradeable <sup>*</sup> | Downgradeable <sup>*</sup> | Downgradeable |  |
| **Enterprise Essentials** |  |  |  | Upgradeable <sup>†</sup> | Upgradeable <sup>†</sup> |

<sup>*</sup> Downgrade from Enterprise SKUs to Business SKUs is only permitted if the customer has 300 or fewer seats (in applicable regions).

<sup>†</sup> Upgrade from Enterprise Essentials to Enterprise Standard or Enterprise Plus is only permitted if the domain is verified.

### Google Workspace Enterprise Essentials

- This subscription is only available as an `ANNUAL_MONTHLY` plan.

### Google AI Ultra for Business

Google AI Ultra for Business provides access to AI features, models, and next-generation tools for specialized tasks. Teams can use video generation, research, and coding assistance.

| Product ID | Product name | SKU ID | SKU name |
| --- | --- | --- | --- |
| `101047` | Google AI Ultra | `1010470008` | Google AI Ultra for Business |

### Archived User

Archived User lets administrators manage former employees and their data. To extract or restore multiple users using the Admin SDK APIs, use the [`Users.update` method](https://developers.google.com/workspace/admin/directory/v1/reference/users/update) to set the `archived` boolean field. For more information, see [Archive or extract a user](https://support.google.com/a/answer/9048772).

Notes for the management of Archived User subscriptions:

- These SKUs must be purchased in addition to a corresponding Google Workspace subscription.
- For example, buy "Google Workspace Enterprise Plus – Archived User" licenses for a customer with a Google Workspace Enterprise Plus subscription.

| Product ID | Product name | SKU ID | SKU name | Unarchival product ID | Unarchival SKU ID |
| --- | --- | --- | --- | --- | --- |
| `101034` | Google Workspace Archived User | `1010340004` | Google Workspace Enterprise Standard - Archived User | `Google-Apps` | `1010020026` |
|  |  | `1010340001` | Google Workspace Enterprise Plus - Archived User |  | `1010020020` |
|  |  | `1010340005` | Google Workspace Business Starter - Archived User |  | `1010020027` |
|  |  | `1010340006` | Google Workspace Business Standard - Archived User |  | `1010020028` |
|  |  | `1010340003` | Google Workspace Business Plus - Archived User |  | `1010020025` |
|  |  | `1010340002` | G Suite Business - Archived User |  | `Google-Apps-Unlimited` |

### Google Workspace Essentials

- This subscription is only available as a monthly post-pay `FLEXIBLE` plan.
- Contact your partner manager for more information about reselling Google Workspace Essentials.

### Postini SKU

- `Google-Apps-For-Postini` might coexist with a customer's Google Workspace SKU. Postini SKUs can't be purchased; they are created when a Postini account is migrated.
- When transferring a customer with a `Google-Apps-For-Postini` SKU, you must include this subscription.

### G Suite Lite SKU

- `Google-Apps-Lite` SKU can only be created by resellers working with a Google sales representative. Contact your partner manager for more information.
- When transferring a customer with a `Google-Apps-Lite` SKU, you must include this subscription.

### Google Workspace Frontline

- This SKU has specific sales criteria. Discuss with your Account Manager before selling this SKU.

### AppSheet

AppSheet is a no-code application development platform that lets developers create and customize applications.

| Product ID | Product name | SKU ID | SKU name |
| --- | --- | --- | --- |
| `101038` | AppSheet | `1010380001` | AppSheet Core |
|  |  | `1010380002` | AppSheet Enterprise Standard |
|  |  | `1010380003` | AppSheet Enterprise Plus |
| `101054` | AppSheet User Pass | `1010540001` | AppSheet User Pass |

## Google Drive

With Google Drive, users can access files, folders, and Docs from a browser or device. Files are safely stored in Drive. For more information, see the [Admin Help Center](https://support.google.com/a/answer/2490026?topic=2497992&ctx=topic).

Notes for Reseller API management of a Drive subscription:

- This subscription is for all `Google-Drive-storage` SKUs. You are charged only for assigned SKUs.
- Cancel active Drive subscriptions before suspending the Google Workspace subscription.

## Google Vault

Google Vault is a service for Google Workspace that lets you retain, archive, search, and export email for eDiscovery and compliance. It is available as an add-on for G Suite Basic and is included with G Suite Business and Google Workspace Business Plus, Enterprise Standard, and Enterprise Plus subscriptions. For more information, see the [Admin Help Center](https://support.google.com/vault/answer/2462365).

Notes for Reseller API management of a Vault subscription:

- Vault is available if you accepted the amendment to the Terms of Service in your Partner Sales Console.
- This subscription is only available as a monthly post-pay `FLEXIBLE` or 30-day free `TRIAL` plan. The customer must have an active G Suite Basic subscription. For more information, see the [Admin Help Center](https://support.google.com/vault/answer/2462365).
	- Add Vault only to an `ACTIVE` G Suite Basic subscription. Customers must accept Google Workspace terms of service before adding Vault.
		- Add Vault only to a customer with a verified domain.
- A user is allowed one Vault 30-day free trial. This is separate from a `Google-Apps-For-Business` 30-day free trial except when created during a Google Workspace 30-day free trial:
	- If the G Suite Basic subscription is in a trial, the Vault subscription is also in a trial.
		- If the G Suite Basic subscription is in a `FLEXIBLE` plan, the Vault subscription can be in a flexible or trial plan.
- You must cancel active Vault subscriptions before the G Suite Basic subscription can be suspended.
- To transfer a customer's G Suite Basic subscription and an associated Vault subscription, use the [batch](https://developers.google.com/workspace/admin/reseller/v1/how-tos/batch) operation. Transferring individually results in an error.
- The `Google-Vault-Former-Employee` SKU is for Postini customers. A user assigned this license can't have other assignments. This SKU can't be purchased; it is created when a Postini customer is migrated.
- Include the `Google-Vault-Former-Employee` SKU when transferring Postini subscriptions. This SKU doesn't allow plan changes.

| Product ID | Product name | SKU ID | SKU name |
| --- | --- | --- | --- |
| `Google-Vault` | Google Vault | `Google-Vault` | Google Vault |
|  |  | `Google-Vault-Former-Employee` | Google Vault - Former Employee |

## Chrome Enterprise

Chrome Enterprise lets administrators remotely manage devices from the cloud with over 200 policies. For more information, see [Chrome App and security features](https://www.google.com/work/chrome/management-console/).

Notes for Reseller API management of a Chrome Enterprise subscription:

- You must apply through Partner Advantage to sell this SKU.
- Chrome Enterprise doesn't require an existing Google Workspace subscription.
- This subscription is compatible with `ANNUAL_MONTHLY_PAY` or 60-day free `TRIAL` plans.
- Customers can't use Chrome Enterprise until their domain is verified.

| Product ID | Product name | SKU ID | SKU name |
| --- | --- | --- | --- |
| `Google-Chrome-Device-Management` | Chrome Enterprise | `Google-Chrome-Device-Management` | Chrome Enterprise |

## Cloud Identity Free Edition

Cloud Identity Free Edition lets administrators manage users without a Google Workspace license. Admins can create users and groups, access audit logs, and set authentication policies.

Notes for management of Cloud Identity Free Edition subscriptions:

- Licenses don't show for individual users. This is a site-wide SKU applied at the customer level. For more information, see [how licensing works in Cloud Identity Free Edition](https://support.google.com/cloudidentity/answer/7384684).
- This SKU doesn't require an existing Google Workspace subscription.
- This subscription is compatible with the `FREE` payment plan and caps `maximumNumberOfSeats` at 50.

| Product ID | Product name | SKU ID | SKU name |
| --- | --- | --- | --- |
| `101001` | Cloud Identity | `1010010001` | Cloud Identity |

## Cloud Identity Premium Edition

Cloud Identity Premium Edition lets administrators manage users without a Google Workspace license and supports all Cloud Identity Free Edition features, plus:

- Advanced Device Management (app control, password enforcement, security policies).
- Auto user provisioning.
- First-party session management.
- 99.9% uptime SLA and 24x7 support.

For more information, see [Cloud Identity Premium Edition](https://support.google.com/cloudidentity/answer/7431902).

Notes for management of Cloud Identity Premium Edition subscriptions:

- This SKU doesn't require an existing Google Workspace subscription but can co-exist with one.
- Purchase this SKU in addition to an Cloud Identity Free Edition subscription.

| Product ID | Product name | SKU ID | SKU name |
| --- | --- | --- | --- |
| `101005` | Cloud Identity Premium | `1010050001` | Cloud Identity Premium |

## Google Colab

Google Colab empowers users with machine learning and data science tools.

Colab Pro includes all the benefits of Colab Free, plus:

- 100 compute units per month.
- Faster GPUs: Upgrade to more powerful GPUs.
- More memory: Access our highest memory machines.
- Terminal: Ability to use a terminal with the connected VM.

Colab Pro+ includes all Colab Pro benefits, plus:

- An additional 400 compute units for a total of 500 per month.
- Faster GPUs: Priority access to upgrade to more powerful premium GPUs.
- Background execution: With compute units, your actively running notebook will continue running for up to 24hrs, even if you close your browser.

| Product ID | Product name | SKU ID | SKU name |
| --- | --- | --- | --- |
| `101050` | Google Colab | `1010500001` | Colab Pro |
|  |  | `1010500002` | Colab Pro+ |
