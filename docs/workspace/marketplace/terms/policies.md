---
source: https://developers.google.com/workspace/marketplace/terms/policies
root: workspace
fetched_at: 2026-04-23T15:30:11.691Z
---

# Google Workspace Marketplace program policies

To maintain a positive experience for everyone using Workspace Marketplace all developers need to adhere to the below Google Workspace Marketplace program policies.

Violation of these policies may result in the denial of Google Workspace Marketplace access, disabling of your application, removal of your listings from the Google Workspace Marketplace, being blocklisted from uploading future listings, or deletion of your Google Account. Be sure to check back from time to time, as these policies may change.

## App Listing Policy

Google reserves the right to check for the following criteria before or after posting, as a condition for continued publication in the Google Workspace Marketplace:

- The listing itself, and the web page it links to on your site, must abide by the Google Workspace Marketplace Program policies, [Google APIs branding guidelines](https://about.google/brand-resource-center/guidance/apis/), and the [Google Workspace Marketplace Developer Agreement](https://workspace.google.com/terms/marketplace/devtos.html).
- The listing must be business-related.
- The listing must advertise an app that supports OAuth2 to allow Google Workspace users to automatically create accounts and login without requiring them to enter another username and password where feasible.
- The listing must advertise a product that is an installable app which must never prompt the end user for authorization consent after being installed by the domain administrator.
- The listing must be for a product that is an installable app which uses one or more of the core Google Workspace Services APIs to integrate with Google Workspace. Core Google Workspace Services are those which are listed at the following URL: https://workspace.google.com/terms/user\_features.html.

If Google determines that your application has not met one or more of the listing criteria above, Google will change your listing's status to 'unpublished' on your behalf and email an explanation with a request for changes to your ‘Developer email’ provided in the [Marketplace SDK](../enable-configure-sdk.md).

## Spam & Placement

Developers are important partners in maintaining a great user experience in the Google Workspace Marketplace.

### Repetitive Content

We don't allow any developer, related developer accounts, or their affiliates to submit multiple applications that provide duplicate experiences or functionality on the Workspace Marketplace. Applications should provide value to users through the creation of unique content or services.

### Keyword Spam

Keyword Spam is the practice of including misleading, irrelevant or excessive keywords in an application’s description metadata in an attempt to manipulate its ranking, resulting in a spammy, negative user experience.

We don't allow applications with misleading, improperly formatted, non-descriptive, irrelevant, excessive, or inappropriate metadata, including but not limited to the application’s name, descriptions, icons, card banner, screenshots and developer name. Developers should focus on providing a clear and well-written description that uses keywords appropriately and in context.

Some examples of Keyword Spam include:

- Listing of sites/brands/keywords without substantial added value, including leveraging popular third-party brand names.
- Lists of regional locations
- Vulgar or profane language that is inappropriate for a general audience
- Unnatural repetition of the same keyword more than 5 times
- Use of emojis, emoticons, or repeated special characters in the application’s title unless it’s a part of your brand name
- Words in ALL CAPS unless it’s a part of your brand name
- Unattributed or anonymous user testimonials in the product's description

### User Ratings, Reviews, and Installs

Developers must not attempt to manipulate the placement of any application in the Workspace Marketplace. This includes, but is not limited to, inflating product ratings, reviews, or install counts by illegitimate means, such as fraudulent or incentivized downloads, reviews and ratings.

[Learn more](https://support.google.com/a/answer/9281422#zippy=%2Crating-and-review-policies) about the ratings and reviews policy.

### Functionality

Do not publish an application with a single purpose of installing or launching another application. Applications with broken functionalities are not allowed.

### Notification Abuse

We do not allow applications that abuse, or are associated with abuse, of notifications by sending spam, ads, promotions, phishing attempts, or unwanted messages that harm the user's experience with Google Workspace products.

### Message Spam

We don't allow applications that send messages on behalf of the user without giving the user the ability to confirm the content and intended recipients.

In addition to these requirements, all public applications must comply with Marketplace review [guidelines](../about-app-review.md).

## User Data Privacy

You must be transparent in how you handle user data (e.g., information provided by a user or collected about a user or a user's use of the Product), including by disclosing the collection, use, and sharing of the data. You must limit your use of the data to the practices you disclosed. You must comply with the Google API services User Data [policy](https://developers.google.com/terms/api-services-user-data-policy#be_transparent_about_the_data_you_access_with_clear_and_prominent_privacy_disclosures).

This policy establishes the Workspace Marketplace's minimum user data privacy requirements; you or your Product must comply with applicable laws.

## Personal or Sensitive User Data

### Posting a Privacy Policy & Secure Transmission

If your Product handles personal or sensitive user data (including personally identifiable information, financial and payment information, health information, authentication information, website content and resources, form data, web browsing activity, user-provided content and personal communications), then your Product must:

- Post a privacy policy, and
- Handle the user data securely, including transmitting it via modern cryptography.

### Privacy Policy Requirements

Your privacy policy must comply with the Google API policy [requirements](https://developers.google.com/terms/api-services-user-data-policy#be_transparent_about_the_data_you_access_with_clear_and_prominent_privacy_disclosures). The privacy policy must, together with any in-Product disclosures, comprehensively disclose how your Product collects, uses and shares user data, including the types of parties with whom it's shared.

You must make the policy accessible by providing a link:

- In the designated field in the Google Marketplace SDK
- In your OAuth client configuration ([learn more](https://support.google.com/cloud/answer/9110914))

### Prominent Disclosure Requirement

If your Product handles personal or sensitive user data that is not closely related to functionality described prominently in the app listing and user interface, then prior to the collection, it must:

- Prominently disclose how the user data will be used, and
- Obtain the user's affirmative consent for such use.

### Other Requirements

- Don't publicly disclose financial or payment information.
- Don't publicly disclose authentication information.

## Limited Uses of User Data

Upon accessing personal and sensitive user data for a single purpose, your use of the user data obtained must comply with the below requirements. The requirements apply to both the raw data obtained and the data aggregated, anonymized, de-identified, or derived from the raw data. They also apply to scraped content or otherwise automatically gathered user data.

1. Limit your use of user data to providing or improving your single purpose
2. Only transfer user data to third parties
	1. If necessary to providing or improving your single purpose;
		2. to comply with applicable laws;
		3. to protect against malware, spam, phishing, or other fraud or abuse; or,
		4. as part of a merger, acquisition or sale of assets of the developer after obtaining explicit prior consent from the user.
3. Do not allow humans to read user data, unless:
	1. the user's explicit consent to read specific data for example, helping a user re-access the product or a service after having lost their password) is obtained;
		2. the data is aggregated and anonymized and used for internal operations in accordance with applicable privacy and other jurisdictional legal requirements;
		3. it's necessary for security purposes (e.g., investigating abuse); or,
		4. to comply with applicable laws.

Your use of data obtained via the Restricted Scopes must comply with the requirements from Google API Services User Data. (see Request relevant permissions [section](https://developers.google.com/terms/api-services-user-data-policy#request_relevant_permissions))

## Content Policies

Our content policies apply to your Product's content, including any ads it shows to users and any user-generated content it hosts or links to. Further, they apply to any content from your developer account that is publicly displayed in the Workspace Marketplace, including your developer name and the landing page of your listed developer website.

### Sexual Content

We don't allow applications that contain or promote sexual content, including sexually explicit material, nudity, graphic sex acts, and pornographic content. This includes driving traffic to commercial pornography sites. We don’t allow applications that promote a sexual act in exchange for compensation. We also don't allow content that promotes incest, bestiality, necrophilia, or non-consensual sexual acts. Content which contains artistic, educational, scientific, or cultural nudity - is generally allowed, but may impact the visibility of your Product.

If someone has stored or distributed a private nude, sexually explicit, or non-explicit intimate and sexual image or video of you, please [report it to us](https://support.google.com/blogger/answer/7540088).

### Vulgar language and Profanity

Do not use obscene, profane, or vulgar language.

### Child Sexual Abuse and Exploitation

Google has a zero-tolerance policy against Child sexual abuse material (CSAM). Do not create, upload, or distribute content that exploits or abuses children. This includes all child sexual abuse materials. If you find content on a Google product that may exploit a child, please [report it to us](https://support.google.com/legal/troubleshooter/1114905#ts=1115658). If you find content elsewhere on the internet, please contact [the appropriate agency in your country directly](https://support.google.com/websearch/answer/148666).

More broadly, Google prohibits the use of our products to endanger children. This includes but is not limited to predatory behavior towards children such as:

- ‘Child grooming’ (for example, befriending a child online to facilitate, either online or offline, sexual contact and/or exchanging sexual imagery with that child);
- ‘Sextortion’ (for example, threatening or blackmailing a child by using real or alleged access to a child’s intimate images);
- Sexualization of a minor (for example, imagery that depicts, encourages or promotes the sexual abuse of children or the portrayal of children in a manner that could result in the sexual exploitation of children); and
- Trafficking of a child (for example, advertising or solicitation of a child for commercial sexual exploitation).

We will remove such content and take appropriate action, which may include reporting to the National Center for Missing & Exploited Children, limiting access to product features, and disabling accounts. If you believe a child is in danger of or has been subject to abuse, exploitation, or trafficking, contact the police immediately. If you have already made a report to the police and still need help, or you have concerns a child is being or was being endangered on our products, you can [report the behavior to Google](https://support.google.com/families/contact/report_child_grooming).

### Unauthorized Images of Minors

Do not store or distribute images of minors without explicit consent from the child's parent, guardian, or legal representative. If someone has stored or distributed an image of a minor without necessary consent, please report it to [us](https://support.google.com/legal/troubleshooter/1114905).

### Violence and Gore

Do not store or distribute violent or gory content involving realistic people or animals that’s primarily intended to be shocking, sensational, or gratuitous. This includes ultra-graphic material, such as dismemberment or close-up footage of mutilated corpses. Graphic material, such as content containing significant amounts of blood, or non-graphic violence may be allowed in an educational, documentary, scientific, or artistic context, but please be mindful to provide enough information to help people understand what's going on. In some cases, content may be so violent or shocking that no amount of context will allow that content to remain on our platforms. Lastly, don't encourage others to commit specific acts of violence.

### Harassment, Threats & Bullying

Do not harass, bully, or threaten others. We also don’t allow this product to be used to engage or incite others in these activities. This includes singling someone out for malicious abuse, threatening someone with serious harm, sexualizing someone in an unwanted way, exposing private information of someone else that could be used to carry out threats, disparaging or belittling targets of violence or tragedy, inciting others to carry out these activities, or harassing someone in other ways. Keep in mind that online harassment is illegal in many places and can have serious offline consequences for both the harasser and the target. We may take appropriate action if we are notified of threats of harm or other dangerous situations, which may include reporting you to the relevant authorities.

### Hate Speech

Do not engage in hate speech. Hate speech is content that promotes or condones violence, discrimination, disparagement, or has the primary purpose of inciting hatred against an individual or group on the basis of their race or ethnic origin, religion, disability, age, nationality, veteran status, sexual orientation, gender, gender identity, or any other characteristic that is associated with systemic discrimination or marginalization.

Additionally, the visibility of your Product may be impacted if it contains generally hateful content not covered by the above definition.

### Violent Organizations and Movement

Known violent non-state organizations and movements are not permitted to use this product for any purpose. Do not distribute content that facilitates or promotes the activities of these groups, such as recruiting, coordinating online or offline activities, sharing manuals or other materials that could facilitate harm, promoting ideologies of violent non-state organizations, promoting terrorist acts, inciting violence, or celebrating attacks by violent non-state organizations. Depending upon the content, we may also take action against the user. Content related to violent non-state organizations may be allowed in an educational, documentary, scientific, or artistic context, but please be mindful to provide enough information to help people understand the context.

### Impersonation & Misrepresentation of Identity

Do not impersonate a person or organization or misrepresent yourself. Do not represent that you or your product is authorized by, endorsed by or produced by another company or organization, if that is not the case. Do not provide misleading information about a user/site’s identity, qualifications, ownership, purpose, products, services, or business.

This also includes content or accounts misrepresenting or concealing their ownership or primary purpose such as misrepresenting or intentionally concealing your country of origin or other material details about yourself when directing content about politics, social issues, or matters of public concern to users in a country other than your own. We do allow parody, satire, and the use of pseudonyms or pen names -- just avoid content that is likely to mislead your audience about your true identity.

Developers should not divert users or provide links to any other site that mimics the Workspace Marketplace or passes itself off as the Workspace Marketplace. Your Product and its user experience also must not mimic functionality or warnings from a user's operating system or browser.

Any changes to device settings must be made with the user's knowledge and consent and be easily reversible by the user.

### Deceptive practices, frauds & schemes

Do not engage in behavior that deceives, misleads, or confuses users to perpetrate a fraud or scam. This includes “get rich quick” schemes, fake government grant scams, charity scams, lottery and sweepstakes scams, selling fake accounts or pyramid schemes.

Don't misrepresent the functionality of your product or include non-obvious functionality that doesn't serve the primary purpose of the product. Descriptions of your product must directly state the functionality so that users have a clear understanding of the product they are adding. For example, products should not contain:

- Claimed functionalities that are not possible to implement or which are not directly provided by the application
- Any metadata including the Marketplace listing that misrepresents the application’s or developer's current status or ranking in the Workspace Marketplace (e.g. "Number One App")

If your product has a blank description field or is missing an icon or screenshots, it will be rejected. If any of your product's content, title, icon, description, or screenshots contains false or misleading information, we may remove it.

### Misleading Content or Behavior

Do not distribute content that deceives, misleads, or confuses users, including in the content, title, description, or screenshots. This includes:

Misleading content related to civic and democratic processes: content that is demonstrably false and could significantly undermine participation or trust in civic or democratic processes. This includes information about public voting procedures, political candidate eligibility based on age / birthplace, election results, or census participation that contradicts official government records. It also includes incorrect claims that a political figure or government official has died, been involved in an accident, or is suffering from a sudden serious illness.

Misleading content related to harmful conspiracy theories: content that promotes or lends credibility to beliefs that individuals or groups are systematically committing acts that cause widespread harm. This content is contradicted by substantial evidence and has resulted in or incites violence.

Misleading content related to harmful health practices: misleading health or medical content that promotes or encourages others to engage in practices that may lead to serious physical or emotional harm to individuals, or serious public health harm.

Misleading marketing claims: content that misleads or deceives users in order to elicit an immediate decision and deprive them of sufficient opportunity or time to make an informed choice (e.g. falsely stating that a product will only be available for a limited time). Additionally, content may not misrepresent after-sales services, make false claims regarding product capabilities (especially features related to health or safety), or create false scarcity. All claims, descriptions, and representations made on your app listing, marketing materials, and within the app itself must be truthful, accurate, and not misleading. This includes any claims about app performance, security, or data handling.

Manipulated media: media that has been technically manipulated or doctored in a way that misleads users and may pose a serious risk of egregious harm.

Misleading content may be allowed in an educational, documentary, scientific, or artistic context, but please be mindful to provide enough information to help people understand this context. In some cases, no amount of context will allow this content to remain on our platforms.

### Material Information

Your app listing must not omit material information that an average consumer needs to make an informed transactional decision. In addition, your listing must include, in a clear and prominent manner:

1. **Main Characteristics**: A detailed and accurate description of the app's core functionality, features, and purpose.
2. **Developer Identity**: The legal business name and physical business address of the developer. A dedicated, monitored business email address for user contact and support must also be provided.
3. **Pricing Details**: As outlined in the "Transparent Pricing" policy below, the total price or a clear method for calculating it must be prominently displayed.
4. **Subscription Information (where applicable)**: For any subscription-based app, the listing must clearly inform users about:
	- The contract's duration and renewal terms.
		- The existence of a statutory right to cancel within a 14-day cooling-off period (for UK consumers), and an easy, single-communication method for cancellation.
		- Any specific legal requirements for subscription reminder notices (e.g., before auto-renewal).

### Intellectual Property

Don't infringe on the intellectual property rights of others, including patent, trademark, trade secret, copyright, and other proprietary rights, and do not encourage or induce infringement of intellectual property rights. We will respond to clear notices of alleged copyright infringement. For more information or to file a DMCA request, use [this tool](http://www.google.com/support/bin/static.py?page=ts.cs&ts=1114905). Additionally, the visibility of your Product may be impacted if we believe it potentially infringes on intellectual property rights.

We also don’t allow products or services that encourage, facilitate, or enable the unauthorized access, download, or streaming of copyrighted content or media.

### Dangerous & Illegal Activities

Do not use this product to engage in illegal activities or to promote activities, goods, services, or information that cause serious and immediate harm to people or animals. Don't engage in or promote unlawful activities in your product, such as rape, illegal sex work, or the sale of prescription drugs without a prescription.

While we permit general information for educational, documentary, scientific, or artistic purposes about this content, we draw the line when the content directly facilitates harm or encourages illegal activity. We will take appropriate action if we are notified of unlawful activities, which may include reporting you to the relevant authorities.

### Regulated Goods

Do not sell, advertise, facilitate the sale of, or promote regulated goods and services, including alcohol, gambling, pharmaceuticals, unapproved supplements, tobacco, fireworks, weapons, or health/medical devices.

We don't allow content or services that facilitate online gambling, including but not limited to online casinos, sports betting, lotteries, or games of skill that offer prizes of cash or other value.

### Malware and other Malicious Content

Do not transmit malware or any content that harms or interferes with the operation of the networks, servers, end user devices, or other infrastructure. This includes the direct hosting, embedding, or transmission of malware, viruses, destructive code, or other harmful or unwanted software or similar content. This also includes content that transmits viruses, causes pop-ups, attempts to install software without the user’s consent, or otherwise impacts users with malicious code. See our [Safe Browsing Policies](https://support.google.com/webmasters/answer/3258249) for more information.

We don't allow content that harms or interferes with the operation of the networks, servers, or other infrastructure of Google or any third-parties. Spyware, malicious scripts, and phishing scams are also prohibited in the Google Workspace Marketplace.

### System Interference and Abuse

Do not abuse this product and do not harm, degrade, or negatively affect the operation of networks, devices, or other infrastructure of Google or others. This includes degrading, disabling, or negatively interfering with any aspect of the product or its services.

- We do not allow products or services that facilitate unauthorized access to content on websites, such as circumventing paywalls or login restrictions.
- We do not allow mining of cryptocurrency.
- Developers must not obfuscate code or conceal functionality of their application. This also applies to any external code or resource fetched by the app package. Minification is allowed, including the following forms:
	- Removal of whitespace, newlines, code comments, and block delimiters
		- Shortening of variable and function names
		- Collapsing files together

## Transparent Pricing

In order to avoid misleading users, we require all app pricing to be transparent, complete, and clearly displayed to the user.

- **Total Price Upfront**: Your app listing constitutes an "invitation to purchase" under applicable consumer protection law (including the UK Digital Markets, Competition and Consumers Act). Accordingly, the headline price displayed on your listing page must be the total price of the product, including all mandatory fees, taxes, and other charges that a user must pay to purchase and use the core advertised functionality of your app.
- **No Drip Pricing**: You are prohibited from using "drip pricing." This means you may not advertise a lower initial price and then progressively add mandatory fees (such as platform charges, setup fees, or unavoidable service charges) as the user proceeds through the purchasing journey. All such mandatory fees must be included in the price stated on the app listing itself.
- **Variable Pricing**: If the total price cannot be reasonably calculated in advance (e.g., usage-based pricing), your app listing must prominently and clearly state how the total price will be calculated. This explanation must enable the consumer to calculate the potential cost. If it is not possible to include all required information due to space constraints or similar reasons, you may directly link to the information provided such information is clearly stated on the following page without the need for further navigation.
- **Optional Charges**: Genuinely optional add-ons or services may be offered separately, provided it is clear to the user that these are *not mandatory for purchasing or using the app's core functionality*.

## Security Vulnerabilities

If your product is associated with a security vulnerability that could be exploited to compromise another application, service, browser, or system, we may remove your product from the Workspace Marketplace and take other measures to protect users. In such an event, you may be contacted about remediation steps required to restore the product.

## Deceptive Installation Tactics

Applications must be marketed responsibly. The set of functionalities promised by the application must be stated in the app listing clearly and in a transparent manner. The outcome of any user interaction should match the reasonable expectations that were set with the user. Applications that use or benefit from deceptive installation tactics will be removed from the Workspace Marketplace.

Deceptive installation tactics include:

- Unclear or inconspicuous disclosures on marketing collateral preceding the Workspace Marketplace app listing.
- Misleading interactive elements as part of your distribution flow. This includes misleading call-to-action buttons or forms that imply an outcome other than the installation of an application.
- Requiring unrelated user action to access advertised functionality.

## Use of Permissions

Permission requests should make sense to users, and should be limited to the critical information necessary to implement your application.

**Don't request access to information that you don't need.** Only request access to the minimal, technically feasible scope of access that is necessary to implement existing features or services in your application, and limit access to the minimum amount of data needed. Don't attempt to "future proof" your access to user data by requesting access to information that might benefit services or features that have not yet been implemented.

**Request permissions in context where possible.** Request access to user data in context (via incremental auth) whenever you can, so that users understand why you need the data.

You must comply with the [requirements](https://developers.google.com/terms/api-services-user-data-policy#request_relevant_permissions) highlighted in the Google API Services User Data Policy.

## Ads in Products

Google does not allow the serving of ads within the third party applications that integrate with the Google Workspace products.

Ads are considered part of your Product for purposes of content review and compliance with developer terms, and therefore must comply with the above content policies.

### Ads Context and Attribution

Ads must be presented in context or clearly state which product they are bundled with. Ads must also be easily removable by either adjusting the settings or uninstalling the product altogether. Ads may not simulate or impersonate system notifications or warnings.

### Ad Walls

Forcing the user to click on ads or submit personal information for advertising purposes in order to fully use an app provides a poor user experience and is prohibited.

### Interfering with Third-party Ads and Websites

Ads associated with your product may not interfere with any ads on a third-party website or application. You may show ads alongside a third-party website only if all of the following criteria are met:

- This behavior is clearly disclosed to the user.
- There is clear attribution of the ads' source wherever those ads appear.
- The ads do not interfere with any native ads or functionality of the website.
- The ads do not mimic or impersonate the native ads or content on the third-party website, and the ads adhere to the content policy on [impersonation and deceptive behavior](#impersonation_or_deceptive_behavior).

Currently, AdSense may not be used to serve ads in Products, per [AdSense policies](https://support.google.com/adsense/answer/48182).

## Accepting Payment from Users

If you collect sensitive personal information through your Product for sales, you must follow these requirements:

- You must securely collect, store and transmit all credit card and other sensitive personal information in accordance with privacy and data security laws and payment card industry rules.
- You must avoid misleading users. For example, clearly and honestly describe the products or services that you are selling and conspicuously post your terms of sale (including any refund and return policies).
- If your Product requires the user to pay to obtain basic functionality, you must make that clear in the description that the user sees when choosing whether to install it.
- You must clearly identify that you, not Google, are the seller of the products or services.

## Policy Enforcement

### Repeat abuse

Serious or repeated violations of the Marketplace Distribution Agreement or these Program Policies will result in the suspension of your developer account, and possibly related developer accounts. Additionally, you may be banned from using the Marketplace Workspace. In extreme cases, this may also result in the suspension of related Google services associated with your Google account. Repeated infringement of intellectual property rights, including copyright, will also result in account termination. For more information on Google's copyright policies, please use [this tool](http://www.google.com/support/bin/static.py?page=ts.cs&ts=1114905).

### Enforcement Circumvention

Any attempt to circumvent intended limitations or enforcement actions will result in the immediate termination of your developer account, and possibly related developer accounts.

### Notifications and Appeals

In the event that your Product is removed from the Workspace Marketplace, you will receive an email notification to that effect, with further instructions if applicable. Please verify that the associated developer account (as provided in the Marketplace SDK API) with your Product can receive emails from external parties and not get flagged as Spam to ensure that you receive all communications in a timely manner.
