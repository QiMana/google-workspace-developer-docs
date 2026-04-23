---
source: https://developers.google.com/workspace/admin/reseller/v1/codelab/end-to-end
root: workspace
fetched_at: 2026-04-23T15:24:44.338Z
---

# Provision a customer

This tutorial shows you how to provision a customer by using the Reseller API.

Properly provisioning a customer involves several mutually dependent steps that span across multiple APIs in the Google Workspace platform.

![The flow of APIS used to create a Google Workspace customer.](https://developers.google.com/static/workspace/admin/reseller/v1/codelab/images/end_to_end_api_calls.png)

Figure 1. High-level steps for provisioning a Google Workspace customer

The preceding diagram shows which APIs are used at each step to provision a customer:

- Use the Site Verification API to place the domain verification token.
- Use the Reseller API to create a customer.
- Use the Directory API to create the first user and make them an administrator.
- Use the Reseller API to create a subscription.
- Use the Site Verification API to verify the domain.

## Prerequisites

- A Google Reseller domain instance.
- A fully executed Google Workspace partner agreement.
- A Google Account.
- Accept the Terms of Service in the Partner Sales Console.
- [Download a client library for different languages](https://developers.google.com/api-client-library).

## Set up your environment

To complete this tutorial, set up your environment.

### Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Reseller API, Site Verification API, and Admin SDK API.
	```
	[Enable the APIS](https://console.cloud.google.com/flows/enableapi?apiid=reseller.googleapis.com,admin.googleapis.com,siteverification.googleapis.com){: class="button button-primary" target="console"}
	```
	### Create a service account
A service account is a special kind of account used by an application, rather than a person. You can use a service account to access data or perform actions by the robot account, or to access data on behalf of Google Workspace or Cloud Identity users. For more information, see [Understanding service accounts](https://cloud.google.com/iam/docs/understanding-service-accounts).

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Click **Create service account**.
3. Fill in the service account details, then click **Create and continue**.
4. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).
5. Click **Continue**.
6. Optional: Enter users or groups that can manage and perform actions with this service account. For more details, refer to [Managing service account impersonation](https://cloud.google.com/iam/docs/impersonating-service-accounts).
7. Click **Done**. Make a note of the email address for the service account.

### gcloud CLI

1. Create the service account:
	```
	gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
	  --display-name="SERVICE_ACCOUNT_NAME"
	```
2. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).

#### Create credentials for a service account

You need to obtain credentials in the form of a public/private key pair. These credentials are used by your code to authorize service account actions within your app.
1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Keys** \> **Add key** \> **Create new key**.
4. Select **JSON**, then click **Create**.
	Your new public/private key pair is generated and downloaded to your machine as a new file. Save the downloaded JSON file as `credentials.json` in your working directory. This file is the only copy of this key. For information about how to store your key securely, see [Managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
5. Click **Close**.

#### Set up domain-wide delegation for a service account

To call APIs on behalf of users in a Google Workspace organization, your service account needs to be granted domain-wide delegation of authority in the Google Workspace Admin console by a super administrator account. For more information, see [Delegating domain-wide authority to a service account](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority).
1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Show advanced settings**.
4. Under "Domain-wide delegation," find your service account's "Client ID." Click Copy to copy the client ID value to your clipboard.
5. If you have super administrator access to the relevant Google Workspace account, click **View Google Workspace Admin Console**, then sign in using a super administrator user account and continue following these steps.
	If you don't have super administrator access to the relevant Google Workspace account, contact a super administrator for that account and send them your service account's Client ID and list of OAuth Scopes so they can complete the following steps in the Admin console.
1. In the Google Admin console, go to Menu \> **Security** \> **Access and data control** \> **API controls**.
	[Go to API controls](https://admin.google.com/ac/owl)
	2. Click **Manage Domain Wide Delegation**.
	3. Click **Add new**.
	4. In the "Client ID" field, paste the client ID that you previously copied.
	5. In the "OAuth Scopes" field, enter a comma-delimited list of the scopes required by your application. This is the same set of scopes you defined when configuring the OAuth consent screen.
	6. Click **Authorize**.

## Create service objects with authenticated credentials

To get started with any Google API, you first need to set up authentication and credentials from within your application. The Google Client Libraries handle this on your behalf. All of the libraries have patterns for creating a credentials object, which you can grant access to all of the APIs and pass them into each service. An application should typically have a single set of credentials and use only one cloud project for all Google API interactions.

Use the JSON key file that you generated when you created a service account.

##### Python

```
import sys
from apiclient.discovery import build
from apiclient.http import HttpError
from oauth2client.service_account import ServiceAccountCredentials

############## REPLACE WITH YOUR OWN VALUES ####################
JSON_PRIVATE_KEY_FILE = 'path/to/json_key_file.json'
RESELLER_ADMIN_USER = 'admin@yourresellerdomain.com'
CUSTOMER_DOMAIN = 'example.com'
CUSTOMER_SITE = 'https://www.example.com'
################################################################

# Full List of scopes:
# https://developers.google.com/identity/protocols/googlescopes
OAUTH2_SCOPES = [
    'https://reseller.googleapis.com/auth/apps.order',
    'https://reseller.googleapis.com/auth/siteverification',
    'https://reseller.googleapis.com/auth/admin.directory.user',
]

credentials = ServiceAccountCredentials.from_json_keyfile_name(
    JSON_PRIVATE_KEY_FILE, OAUTH2_SCOPES).create_delegated(RESELLER_ADMIN_USER)

reseller_service = build(
    serviceName='reseller', version='v1', credentials=credentials)

directory_service = build(
    serviceName='admin', version='directory_v1', credentials=credentials)

verification_service = build(
    serviceName='siteVerification', version='v1', credentials=credentials)
```

##### Java

```
// OAuth2 and HTTP
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpResponseException;
import com.google.api.client.json.jackson2.JacksonFactory;
// Directory API
import com.google.api.services.admin.directory.Directory;
import com.google.api.services.admin.directory.DirectoryScopes;
import com.google.api.services.admin.directory.model.User;
import com.google.api.services.admin.directory.model.UserMakeAdmin;
import com.google.api.services.admin.directory.model.UserName;
// Reseller API
import com.google.api.services.reseller.Reseller;
import com.google.api.services.reseller.ResellerScopes;
import com.google.api.services.reseller.model.Address;
import com.google.api.services.reseller.model.Customer;
import com.google.api.services.reseller.model.RenewalSettings;
import com.google.api.services.reseller.model.Seats;
import com.google.api.services.reseller.model.Subscription;
// Site Verification API
import com.google.api.services.siteVerification.SiteVerification;
import com.google.api.services.siteVerification.SiteVerificationScopes;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceGettokenRequest;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceGettokenResponse;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceResource;
// Java library imports
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.List;

/**
 * This is a basic example of provisioning a Google Workspace customer.
 */
public class CodelabExample {
  // Full List of scopes:
  // https://developers.google.com/identity/protocols/googlescopes
  private static final List<String> OAUTH2_SCOPES = Arrays.asList(
    ResellerScopes.APPS_ORDER,
    SiteVerificationScopes.SITEVERIFICATION,
    DirectoryScopes.ADMIN_DIRECTORY_USER
  );

  /***************** REPLACE WITH YOUR OWN VALUES ********************************/
  public static final String JSON_PRIVATE_KEY_FILE = "path/to/json_key_file.json";
  public static final String RESELLER_ADMIN_USER = "admin@yourresellerdomain.com";
  public static final String CUSTOMER_DOMAIN = "example.com";
  public static final String CUSTOMER_SITE = "https://www.example.com/";
  /*******************************************************************************/

  public static void main(String[] args)
      throws IOException, GeneralSecurityException, FileNotFoundException {
    // Instantiate services with authenticated credentials
    GoogleCredential jsonCredentials = GoogleCredential
      .fromStream(new FileInputStream(JSON_PRIVATE_KEY_FILE));
    GoogleCredential credentials = new GoogleCredential.Builder()
      .setTransport(GoogleNetHttpTransport.newTrustedTransport())
      .setJsonFactory(JacksonFactory.getDefaultInstance())
      .setServiceAccountScopes(OAUTH2_SCOPES)
      .setServiceAccountUser(RESELLER_ADMIN_USER)
      .setServiceAccountPrivateKey(jsonCredentials.getServiceAccountPrivateKey())
      .setServiceAccountId(jsonCredentials.getServiceAccountId())
      .build();

    Reseller resellerService = new Reseller.Builder(
        credentials.getTransport(),
        credentials.getJsonFactory(),
        credentials).setApplicationName("Google Workspace Creator").build();

    Directory directoryService = new Directory.Builder(
        credentials.getTransport(),
        credentials.getJsonFactory(),
        credentials).setApplicationName("Google Workspace Creator").build();

    SiteVerification verificationService = new SiteVerification.Builder(
        credentials.getTransport(),
        credentials.getJsonFactory(),
        credentials).setApplicationName("Google Workspace Creator").build();
```

##### C#

```
// OAuth2 and HTTP
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
// Reseller API
using Google.Apis.Reseller.v1;
using Google.Apis.Reseller.v1.Data;
// Directory API
using Google.Apis.Admin.Directory.directory_v1;
using User = Google.Apis.Admin.Directory.directory_v1.Data.User;
using UserName = Google.Apis.Admin.Directory.directory_v1.Data.UserName;
using UserMakeAdmin = Google.Apis.Admin.Directory.directory_v1.Data.UserMakeAdmin;
//Site Verification API
using Google.Apis.SiteVerification.v1;
using Google.Apis.SiteVerification.v1.Data;
// System imports
using System;
using System.IO;

class CodelabExample
{
    // Full List of scopes:
    // https://developers.google.com/identity/protocols/googlescopes
    static string[] OAUTH2_SCOPES = {
        ResellerService.Scope.AppsOrder,
        DirectoryService.Scope.AdminDirectoryUser,
        SiteVerificationService.Scope.Siteverification
    };

    /***************** REPLACE WITH YOUR OWN VALUES ********************************/
    public static String JSON_PRIVATE_KEY_FILE = "path/to/json_key_file.json";
    public static String RESELLER_ADMIN_USER = "admin@yourresellerdomain.com";
    public static String CUSTOMER_DOMAIN = "example.com";
    public static String CUSTOMER_SITE = "https://www.example.com/";
    /*******************************************************************************/

    static void Main(string[] args)
    {
        GoogleCredential credential;

        using (var stream = new FileStream(JSON_PRIVATE_KEY_FILE, FileMode.Open, FileAccess.Read))
        {
            credential = GoogleCredential
                .FromStream(stream)
                .CreateScoped(OAUTH2_SCOPES)
                .CreateWithUser(RESELLER_ADMIN_USER);
        }

        var resellerService = new ResellerService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
        });

        var directoryService = new DirectoryService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
        });

        var verificationService = new SiteVerificationService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
        });
```

##### PHP

```
// https://developers.google.com/api-client-library/php/
require_once 'vendor/autoload.php';

// Full List of scopes:
// https://developers.google.com/identity/protocols/googlescopes
$OAUTH2_SCOPES = [
  Google_Service_Reseller::APPS_ORDER,
  Google_Service_SiteVerification::SITEVERIFICATION,
  Google_Service_Directory::ADMIN_DIRECTORY_USER,
];

######### REPLACE WITH YOUR OWN VALUES ###############
$JSON_PRIVATE_KEY_FILE = 'path/to/json_key_file.json';
$RESELLER_ADMIN_USER = 'admin@yourresellerdomain.com';
$CUSTOMER_DOMAIN = 'example.com';
$CUSTOMER_SITE = 'https://www.example.com/';
######################################################

$client = new Google_Client();
$client->setAuthConfig($JSON_PRIVATE_KEY_FILE);
$client->setSubject($RESELLER_ADMIN_USER);
$client->setScopes($OAUTH2_SCOPES);

$resellerService = new Google_Service_Reseller($client);
$directoryService = new Google_Service_Directory($client);
$verificationService = new Google_Service_SiteVerification($client);
```

##### Ruby

```
require 'googleauth'
require 'google/apis/reseller_v1'
require 'google/apis/site_verification_v1'
require 'google/apis/admin_directory_v1'

# Full List of scopes:
# https://developers.google.com/identity/protocols/googlescopes
OAUTH2_SCOPES = [
  'https://reseller.googleapis.com/auth/apps.order',
  'https://reseller.googleapis.com/auth/admin.directory.user',
  'https://reseller.googleapis.com/auth/siteverification',
]

####### REPLACE WITH YOUR OWN VALUES ###############
JSON_PRIVATE_KEY_FILE = 'path/to/json_key_file.json'
RESELLER_ADMIN_USER = 'admin@yourresellerdomain.com'
CUSTOMER_DOMAIN = 'example.com'
CUSTOMER_SITE = 'https://www.example.com/'
####################################################

credentials = Google::Auth::ServiceAccountCredentials.make_creds(
  json_key_io: File.open(JSON_PRIVATE_KEY_FILE),
  scope: OAUTH2_SCOPES)
credentials.sub = RESELLER_ADMIN_USER

Google::Apis::RequestOptions.default.authorization = credentials

reseller_service = Google::Apis::ResellerV1::ResellerService.new
directory_service = Google::Apis::AdminDirectoryV1::DirectoryService.new
verification_service = Google::Apis::SiteVerificationV1::SiteVerificationService.new
```

##### Node.js

```
// NOTE: This script needs googleapis 28.0.0 or later as it uses promises
const {google} = require('googleapis');

// ############## REPLACE WITH YOUR OWN VALUES ####################
const JSON_PRIVATE_KEY_FILE = 'path/to/json_key_file.json';
const RESELLER_ADMIN_USER = 'admin@yourresellerdomain.com';
const CUSTOMER_DOMAIN = 'example.com';
const CUSTOMER_SITE = 'https://www.example.com/';
// ################################################################

// Full List of scopes: https://developers.google.com/identity/protocols/googlescopes
const OAUTH2_SCOPES = [
  'https://reseller.googleapis.com/auth/apps.order',
  'https://reseller.googleapis.com/auth/siteverification',
  'https://reseller.googleapis.com/auth/admin.directory.user',
];

const authJWT = new google.auth.JWT({
  keyFile: JSON_PRIVATE_KEY_FILE,
  scopes: OAUTH2_SCOPES,
  subject: RESELLER_ADMIN_USER,
});

const resellerService = google.reseller({version: 'v1', auth: authJWT});
const directoryService = google.admin({version: 'directory_v1', auth: authJWT});
const verificationService = google.siteVerification({version: 'v1', auth: authJWT});
```

## Begin domain verification process

This step is optional, but encouraged if you have the ability to verify the customer's domain. This step is finished at the end of the tutorial when you verify the domain.

If you don't verify the customer's domain, then they will have the following restrictions:

- They only have access to the Admin console where they're guided through the [manual domain verification process](https://support.google.com/a/answer/60216).
- They might be suspended 21 days after creation.

To retrieve a site verification token, do the following:

1. To retrieve a site verification token, use the
	[Site Verification API](https://developers.google.com/site-verification).
	You can't verify if a domain has previously been validated, but you can validate sites multiple times without any issues. Depending on whether you're validating an `INET_DOMAIN` or a `SITE` type, the `verificationMethod` parameters vary. Choose one of the following:
	- For the type `INET_DOMAIN`, use one of the following `verificationMethod` parameters:
		- `DNS_TXT`
				- `DNS_CNAME`
		The following token retrieval example uses an `INET_DOMAIN` type:
		##### Python
		```
		# Retrieve the site verification token and place it according to:
		# https://developers.google.com/site-verification/v1/getting_started#tokens
		response = verification_service.webResource().getToken(
		    body={
		        'site': {
		            'type': 'INET_DOMAIN',
		            'identifier': CUSTOMER_DOMAIN
		        },
		        'verificationMethod': 'DNS_TXT'
		    }).execute()
		print(response)
		```
		##### Java
		```
		// Retrieve the site verification token and place it according to:
		// https://developers.google.com/site-verification/v1/getting_started#tokens
		SiteVerificationWebResourceGettokenRequest.Site getTokenSite =
		    new SiteVerificationWebResourceGettokenRequest.Site()
		        .setType("INET_DOMAIN")
		        .setIdentifier(CUSTOMER_DOMAIN);
		SiteVerificationWebResourceGettokenRequest request =
		    new SiteVerificationWebResourceGettokenRequest()
		        .setVerificationMethod("DNS_TXT")
		        .setSite(getTokenSite);
		SiteVerificationWebResourceGettokenResponse getTokenResponse =
		    verificationService.webResource().getToken(request).execute();
		System.out.println("Site Verification Token: " + getTokenResponse.getToken());
		```
		##### C#
		```
		// Retrieve the site verification token and place it according to:
		// https://developers.google.com/site-verification/v1/getting_started#tokens
		SiteVerificationWebResourceGettokenRequest.SiteData getTokenSite =
		    new SiteVerificationWebResourceGettokenRequest.SiteData()
		    {
		        Type = "INET_DOMAIN",
		        Identifier = CUSTOMER_DOMAIN
		    };
		SiteVerificationWebResourceGettokenRequest request =
		    new SiteVerificationWebResourceGettokenRequest()
		    {
		        VerificationMethod = "DNS_TXT",
		        Site = getTokenSite
		    };
		SiteVerificationWebResourceGettokenResponse getTokenResponse =
		    verificationService.WebResource.GetToken(request).Execute();
		Console.WriteLine("Site Verification Token: {0}", getTokenResponse.Token);
		```
		##### PHP
		```
		// Retrieve the site verification token and place it according to:
		// https://developers.google.com/site-verification/v1/getting_started#tokens
		$body =
		new Google_Service_SiteVerification_SiteVerificationWebResourceGettokenRequest([
		  'verificationMethod' => 'DNS_TXT',
		  'site' => [
		    'type' => 'INET_DOMAIN',
		    'identifier' => $CUSTOMER_DOMAIN
		  ]
		]);
		$response = $verificationService->webResource->getToken($body);
		print_r ($response);
		```
		##### Ruby
		```
		# Retrieve the site verification token and place it according to:
		# https://developers.google.com/site-verification/v1/getting_started#tokens
		request = Google::Apis::SiteVerificationV1::GetWebResourceTokenRequest.new(
		  site: {
		    type: 'INET_DOMAIN',
		    identifier: CUSTOMER_DOMAIN
		  },
		  verification_method: 'DNS_TXT'
		)
		response = verification_service.get_web_resource_token(request)
		puts response.inspect
		```
		##### Node.js
		```
		/**
		 * Retrieve the site verification token and place it according to:
		 * https://developers.google.com/site-verification/v1/getting_started#tokens
		 */
		const getTokenPromise = verificationService.webResource.getToken({
		  requestBody: {
		    site: {
		      type: 'INET_DOMAIN',
		      identifier: CUSTOMER_DOMAIN,
		    },
		    verificationMethod: 'DNS_TXT',
		  }
		}).then(({data}) => {
		  console.log(data);
		  return data;
		});
		```
		- For the type `SITE`, use one of the following `verificationMethod` parameters:
		- `FILE`
				- `META`
		The following token retrieval example uses a `SITE` type with the `FILE` verification method. When you use the `SITE` verification type, you must prefix the identifier with `http://` or `https://`.
		##### Python
		```
		# Retrieve the site verification token and place it according to:
		# https://developers.google.com/site-verification/v1/getting_started#tokens
		response = verification_service.webResource().getToken(
		    body={
		        'site': {
		            'type': 'SITE',
		            'identifier': CUSTOMER_SITE
		        },
		        'verificationMethod': 'FILE'
		    }).execute()
		print(response)
		```
		##### Java
		```
		// Retrieve the site verification token and place it according to:
		// https://developers.google.com/site-verification/v1/getting_started#tokens
		SiteVerificationWebResourceGettokenRequest.Site getTokenSite =
		    new SiteVerificationWebResourceGettokenRequest.Site()
		        .setType("SITE")
		        .setIdentifier(CUSTOMER_SITE);
		SiteVerificationWebResourceGettokenRequest request =
		    new SiteVerificationWebResourceGettokenRequest()
		        .setVerificationMethod("FILE")
		        .setSite(getTokenSite);
		SiteVerificationWebResourceGettokenResponse getTokenResponse =
		    verificationService.webResource().getToken(request).execute();
		System.out.println("Site Verification Token: " + getTokenResponse.getToken());
		```
		##### C#
		```
		// Retrieve the site verification token and place it according to:
		// https://developers.google.com/site-verification/v1/getting_started#tokens
		SiteVerificationWebResourceGettokenRequest.SiteData getTokenSite =
		    new SiteVerificationWebResourceGettokenRequest.SiteData()
		    {
		        Type = "SITE",
		        Identifier = CUSTOMER_SITE
		    };
		SiteVerificationWebResourceGettokenRequest request =
		    new SiteVerificationWebResourceGettokenRequest()
		    {
		        VerificationMethod = "FILE",
		        Site = getTokenSite
		    };
		SiteVerificationWebResourceGettokenResponse getTokenResponse =
		    verificationService.WebResource.GetToken(request).Execute();
		Console.WriteLine("Site Verification Token: {0}", getTokenResponse.Token);
		```
		##### PHP
		```
		// Retrieve the site verification token and place it according to:
		// https://developers.google.com/site-verification/v1/getting_started#tokens
		$body =
		new Google_Service_SiteVerification_SiteVerificationWebResourceGettokenRequest([
		  'verificationMethod' => 'FILE',
		  'site' => [
		    'type' => 'SITE',
		    'identifier' => $CUSTOMER_DOMAIN
		  ]
		]);
		$response = $verificationService->webResource->getToken($body);
		print_r($response);
		```
		##### Ruby
		```
		# Retrieve the site verification token and place it according to:
		# https://developers.google.com/site-verification/v1/getting_started#tokens
		request = Google::Apis::SiteVerificationV1::GetWebResourceTokenRequest.new(
		  site: {
		    type: 'SITE',
		    identifier: CUSTOMER_SITE
		  },
		  verification_method: 'FILE'
		)
		response = verification_service.get_web_resource_token(request)
		puts response.inspect
		```
		##### Node.js
		```
		/**
		 * Retrieve the site verification token and place it according to:
		 * https://developers.google.com/site-verification/v1/getting_started#tokens
		 */
		const getTokenPromise = verificationService.webResource.getToken({
		  requestBody: {
		    site: {
		      type: 'SITE',
		      identifier: CUSTOMER_SITE,
		    },
		    verificationMethod: 'FILE',
		  }
		}).then(({data}) => {
		  console.log(data);
		  return data;
		});
		```
2. [Place the site verification token in the DNS record or site](https://developers.google.com/site-verification/v1/getting_started#tokens).

## Create a customer with the Reseller API

1. Use the [Customers.Get](../../reference/rest/v1/customers/get.md) method to determine if a customer exists already in Google Workspace:
	##### Python
	```
	# Determine if customer domain already has Google Workspace
	try:
	  response = reseller_service.customers().get(
	      customerId=CUSTOMER_DOMAIN).execute()
	  print('Customer already exists if call succeeds')
	  sys.exit()
	except HttpError as error:
	  if int(error.resp['status']) == 404:
	    print('Domain available for Google Workspace creation')
	  else:
	    raise
	```
	##### Java
	```
	// Determine if customer domain already has Google Workspace
	try {
	  resellerService.customers().get(CUSTOMER_DOMAIN).execute();
	  System.out.println("Customer already exists if call succeeds");
	  System.exit(0);
	} catch (HttpResponseException e) {
	    if (e.getStatusCode() == 404) {
	      System.out.println("Domain available for Google Workspace creation");
	    } else { 
	      throw e; 
	    }
	}
	```
	##### C#
	```
	// Determine if customer domain already has Google Workspace
	try
	{
	    resellerService.Customers.Get(CUSTOMER_DOMAIN).Execute();
	    Console.WriteLine("Customer already exists if call succeeds");
	    Environment.Exit(0);
	}
	catch (Google.GoogleApiException e) {
	    if (e.Error.Code == 404)
	    {
	        Console.WriteLine("Domain available for Google Workspace creation");
	    } else throw e;
	}
	```
	##### PHP
	```
	// Determine if customer domain already has Google Workspace
	try {
	  $response = $resellerService->customers->get($CUSTOMER_DOMAIN);
	  exit('Customer already exists if call succeeds');
	} catch(Google_Service_Exception $e) {
	  if ($e->getErrors()[0]['reason'] == 'notFound'){
	    print ("Domain available for Google Workspace creation\n");
	  } else {
	    throw $e;
	  }
	}
	```
	##### Ruby
	```
	# Determine if customer domain already has Google Workspace
	begin
	  reseller_service.get_customer(CUSTOMER_DOMAIN)
	  abort('Customer already exists if call succeeds')
	rescue Google::Apis::ClientError => ex
	  if ex.status_code == 404
	    puts 'Domain available for Google Workspace creation'
	  else
	    raise ex
	  end
	end
	```
	##### Node.js
	```
	// Determine if customer domain already has Google Workspace
	const getCustomerPromise = resellerService.customers.get({
	  customerId: CUSTOMER_DOMAIN
	}).then(() => {
	  throw new Error('Customer already exists');
	}, resErr => {
	  if (resErr.code === 404) {
	    console.log('Domain available for Google Workspace creation');
	  } else {
	    throw resErr;
	  }
	});
	```
2. Depending on the response, do the following:
	- If the customer doesn't exist, the `customers.get` method returns an `HTTP 404` error code. Continue to the next step where you create a customers record in Google Workspace.
		- If the `customers.get` method returns without error, identify whether the customer is yours by checking the response body for the `alternateEmail` property. If the `alternateEmail` property is missing, you must [transfer the customer and their subscriptions](../how-tos/manage_subscriptions.md#transfer_a_subscription).
3. Create a customer record in Google Workspace. You must create a customer record before you can create subscriptions for that customer by using the following guidelines:
	- The `alternateEmail` can't be on the same domain as `customerDomain`.
		- The `postalAddress.countryCode` must be a two-character ISO country code.
	The following example shows a customer record creation:
	##### Python
	```
	# Create customer resource
	response = reseller_service.customers().insert(
	    body={
	        'customerDomain': CUSTOMER_DOMAIN,
	        'alternateEmail': 'marty.mcfly@gmail.com',
	        'postalAddress': {
	            'contactName': 'Marty McFly',
	            'organizationName': 'Acme Corp',
	            'postalCode': '10009',
	            'countryCode': 'US',
	        }
	    }).execute()
	print(response)
	```
	##### Java
	```
	// Create customer resource
	Address address = new Address()
	  .setContactName("Marty McFly")
	  .setOrganizationName("Acme Corp")
	  .setCountryCode("US")
	  .setPostalCode("10009");
	Customer customer = new Customer()
	  .setCustomerDomain(CUSTOMER_DOMAIN)
	  .setAlternateEmail("marty.mcfly@gmail.com")
	  .setPostalAddress(address);
	Customer customerResponse = resellerService.customers()
	  .insert(customer).execute();
	System.out.println("Created Customer:\n" + customerResponse);
	```
	##### C#
	```
	// Create customer resource
	Address address = new Address()
	{
	    ContactName = "Marty McFly",
	    OrganizationName = "Acme Corp",
	    CountryCode = "US",
	    PostalCode = "10009"
	};
	Customer customer = new Customer()
	{
	    CustomerDomain = CUSTOMER_DOMAIN,
	    AlternateEmail = "marty.mcfly@gmail.com",
	    PostalAddress = address
	};
	Customer customerResponse = resellerService.Customers.Insert(customer).Execute();
	Console.WriteLine("Created Customer:\n{0}", customerResponse);
	```
	##### PHP
	```
	// Create customer resource
	$customer = new Google_Service_Reseller_Customer([
	  'customerDomain' => $CUSTOMER_DOMAIN,
	  'alternateEmail' => 'marty.mcfly@gmail.com',
	  'postalAddress' => [
	    'contactName' => 'Marty McFly',
	    'organizationName' => 'Acme Corp',
	    'countryCode' => 'US',
	    'postalCode' => '10009'
	  ]
	]);
	$response = $resellerService->customers->insert($customer);
	print_r ($response);
	```
	##### Ruby
	```
	# Create customer resource
	customer = Google::Apis::ResellerV1::Customer.new(
	  customer_domain: CUSTOMER_DOMAIN,
	  alternate_email: 'marty.mcfly@gmail.com',
	  postal_address: {
	    contact_name: 'Marty McFly',
	    organization_name: 'Acme Corp',
	    country_code: 'US',
	    postal_code: '10009'})
	response = reseller_service.insert_customer(customer)
	puts response.inspect
	```
	##### Node.js
	```
	// Create customer resource
	const insertCustomerPromise = resellerService.customers.insert({
	  requestBody: {
	    customerDomain: CUSTOMER_DOMAIN,
	    alternateEmail: 'marty.mcfly@gmail.com',
	    postalAddress: {
	      contactName: 'Marty McFly',
	      organizationName: 'Acme Corp',
	      postalCode: '10009',
	      countryCode: 'US',
	    }
	  }
	}).then(({data}) => {
	  console.log(data);
	  return data;
	});
	```

## Create the first administrator user with the Admin SDK API

After provisioning a customer, you must create the first user and immediately upgrade the user to a domain super administrator so that the customer can access their new services and accept any applicable Terms of Service.

1. Create the first user and set their password. Passwords must be of adequate complexity and must contain at least eight characters. For more information, see the [`user` resource](../../../directory/reference/rest/v1/users.md).
	##### Python
	```
	# Create first admin user
	response = directory_service.users().insert(
	    body={
	        'primaryEmail': 'marty.mcfly@' + CUSTOMER_DOMAIN,
	        'name': {
	            'givenName': 'Marty',
	            'familyName': 'McFly',
	        },
	        'password': 'Timecircuit88'
	    }).execute()
	print(response)
	```
	##### Java
	```
	// Create first admin user
	String userEmail = "marty.mcfly@" + CUSTOMER_DOMAIN;
	UserName name = new UserName();
	name.setGivenName("Marty");
	name.setFamilyName("McFly");
	User user = new User();
	user.setPrimaryEmail(userEmail);
	user.setPassword("TimeCircuit88");
	user.setName(name);
	User userResponse = directoryService.users().insert(user).execute();
	System.out.println("Created User:\n" + userResponse);
	```
	##### C#
	```
	// Create first admin user
	String userEmail = "marty.mcfly@" + CUSTOMER_DOMAIN;
	UserName name = new UserName()
	{
	    GivenName = "Marty",
	    FamilyName = "McFly"
	};
	User user = new User()
	{
	    PrimaryEmail = userEmail,
	    Password = "TimeCircuit88",
	    Name = name
	};
	User userResponse = directoryService.Users.Insert(user).Execute();
	Console.WriteLine("Created User:\n{0}", userResponse);
	```
	##### PHP
	```
	// Create first admin user
	$user = new Google_Service_Directory_User([
	  'primaryEmail' => 'marty.mcfly@' . $CUSTOMER_DOMAIN,
	  'password' => 'Timecircuit88',
	  'name' => [
	    'givenName' => 'Marty',
	    'familyName' => 'McFly',
	    'fullName' => 'Marty McFly'
	  ]
	]);
	$response = $directoryService->users->insert($user);
	print_r ($response);
	```
	##### Ruby
	```
	# Create first admin user
	user = Google::Apis::AdminDirectoryV1::User.new(
	  name: {
	    given_name: 'Marty',
	    family_name: 'McFly',
	    full_name: 'Marty McFly'
	  },
	  password: 'Timecircuit88',
	  primary_email: 'marty.mcfly@' + CUSTOMER_DOMAIN,
	)
	response = directory_service.insert_user(user)
	puts response.inspect
	```
	##### Node.js
	```
	// Create first admin user
	const insertUserPromise = directoryService.users.insert({
	  requestBody: {
	    primaryEmail: \`marty.mcfly@${CUSTOMER_DOMAIN}\`,
	    name: {
	      givenName: 'Marty',
	      familyName: 'McFly',
	    },
	    password: 'Timecircuit88',
	  }
	}).then(({data}) => {
	  console.log(data);
	  return data;
	});
	```
	If the call to create the user returns an `HTTP 409`, the username might already exist as a consumer Google Account.
2. Upgrade the user to the super administrator role:
	##### Python
	```
	# Promote user to admin status
	response = directory_service.users().makeAdmin(
	    userKey='marty.mcfly@' + CUSTOMER_DOMAIN, body={
	        'status': True
	    }).execute()
	```
	##### Java
	```
	// Promote user to admin status
	UserMakeAdmin admin = new UserMakeAdmin();
	admin.setStatus(true);
	directoryService.users().makeAdmin(userEmail, admin).execute();
	System.out.println("User promoted to Admin");
	```
	##### C#
	```
	// Promote user to admin status
	UserMakeAdmin admin = new UserMakeAdmin()
	{
	    Status = true
	};
	directoryService.Users.MakeAdmin(admin, userEmail).Execute();
	Console.WriteLine("User promoted to Admin");
	```
	##### PHP
	```
	// Promote user to admin status
	$makeAdmin = new Google_Service_Directory_UserMakeAdmin([
	  'status' => true
	]);
	$directoryService->users->makeAdmin(
	  'marty.mcfly@' . $CUSTOMER_DOMAIN,
	  $makeAdmin
	);
	```
	##### Ruby
	```
	# Promote user to admin status
	admin_status = Google::Apis::AdminDirectoryV1::UserMakeAdmin.new(
	  status: true
	)
	response = directory_service.make_user_admin('marty.mcfly@' + CUSTOMER_DOMAIN, admin_status)
	```
	##### Node.js
	```
	// Promote user to admin status
	const makeAdminPromise = directoryService.users.makeAdmin({
	  userKey: \`marty.mcfly@${CUSTOMER_DOMAIN}\`,
	  requestBody: {
	    status: true
	  }
	});
	```

## Create a Google Workspace subscription for a customer

When you create a subscription for a customer, you should place an internal transaction ID or identifier for this customer in the `purchaseOrderId` field. For more information about specific arguments and values, see [Managing subscriptions](../how-tos/manage_subscriptions.md).

1. To create a subscription, use the [Subscriptions.Insert](../../reference/rest/v1/subscriptions/insert.md) call. The following example uses an `ANNUAL_YEARLY_PAY` subscription:
	##### Python
	```
	# Create subscription resource
	response = reseller_service.subscriptions().insert(
	    customerId=CUSTOMER_DOMAIN,
	    body={
	        'customerId': CUSTOMER_DOMAIN,
	        'skuId': '1010020027',
	        'plan': {
	            'planName': 'ANNUAL_MONTHLY_PAY',
	        },
	        'seats': {
	            'numberOfSeats': 5,
	        },
	        'renewalSettings': {  # only relevant for annual plans
	            'renewalType': 'RENEW_CURRENT_USERS_MONTHLY_PAY'
	        }
	    }).execute()
	print(response)
	```
	##### Java
	```
	// Create subscription resource
	Seats seats = new Seats()
	  .setNumberOfSeats(5);
	Subscription.Plan plan = new Subscription.Plan()
	  .setPlanName("ANNUAL_YEARLY_PAY");
	RenewalSettings renewalSettings = new RenewalSettings()
	  .setRenewalType("RENEW_CURRENT_USERS_MONTHLY_PAY");
	Subscription subscription = new Subscription()
	  .setCustomerId(CUSTOMER_DOMAIN)
	  .setSeats(seats)
	  .setPlan(plan)
	  .setSkuId("1010020027")
	  .setRenewalSettings(renewalSettings);
	Subscription subscriptionResponse = resellerService.subscriptions()
	  .insert(CUSTOMER_DOMAIN, subscription).execute();
	System.out.println("Created Subscription:\n" + subscriptionResponse);
	```
	##### C#
	```
	// Create subscription resource
	Seats seats = new Seats()
	{
	    NumberOfSeats = 5
	};
	Subscription.PlanData plan = new Subscription.PlanData()
	{
	    PlanName = "ANNUAL_YEARLY_PAY"
	};
	RenewalSettings renewalSettings = new RenewalSettings()
	{
	    RenewalType = "RENEW_CURRENT_USERS_MONTHLY_PAY"
	};
	Subscription subscription = new Subscription()
	{
	    CustomerId = CUSTOMER_DOMAIN,
	    Seats = seats,
	    Plan = plan,
	    SkuId = "1010020027",
	    RenewalSettings = renewalSettings
	};
	Subscription subscriptionResponse = resellerService.Subscriptions
	    .Insert(subscription, CUSTOMER_DOMAIN).Execute();
	Console.WriteLine("Created Subscription:\n" + subscriptionResponse);
	```
	##### PHP
	```
	// Create subscription resource
	$subscription = new Google_Service_Reseller_Subscription([
	  'customerId' => $CUSTOMER_DOMAIN,
	  'skuId' => '1010020027',
	  'plan' => [
	    'planName' => 'ANNUAL_MONTHLY_PAY'
	  ],
	  'seats' => [
	    'numberOfSeats' => '5'
	  ],
	  'renewalSettings' => [
	    'renewalType' => 'RENEW_CURRENT_USERS_MONTHLY_PAY'
	  ]
	]);
	$response = $resellerService->subscriptions->insert(
	  $CUSTOMER_DOMAIN,
	  $subscription
	);
	print_r ($response);
	```
	##### Ruby
	```
	# Create subscription resource
	subscription = Google::Apis::ResellerV1::Subscription.new(
	  customer_id: CUSTOMER_DOMAIN,
	  sku_id: '1010020027',
	  plan: {
	    plan_name: 'ANNUAL_MONTHLY_PAY'
	  },
	  seats: {
	    number_of_seats: 5,
	  },
	  renewal_settings: {
	    renewal_type: 'RENEW_CURRENT_USERS_MONTHLY_PAY'
	  }
	)
	response = reseller_service.insert_subscription(CUSTOMER_DOMAIN, subscription)
	puts response.inspect
	```
	##### Node.js
	```
	// Create subscription resource
	const insertSubscriptionPromise = resellerService.subscriptions.insert({
	  customerId: CUSTOMER_DOMAIN,
	  requestBody: {
	    customerId: CUSTOMER_DOMAIN,
	    skuId: '1010020027',
	    plan: {
	      planName: 'ANNUAL_MONTHLY_PAY',
	    },
	    seats: {
	      numberOfSeats: 5,
	    },
	    renewalSettings: { // only relevant for annual plans
	      renewalType: 'RENEW_CURRENT_USERS_MONTHLY_PAY',
	    }
	  }
	}).then(({data}) => {
	  console.log(data);
	  return data;
	});
	```
2. Subscriptions are in a `SUSPENDED` state until a customer administrator logs in and accepts the Terms of Service. Customer administrators are redirected to the Terms of Service on their first login when accessing any Google property (for example, Gmail or Google Drive).

## Verify the domain and designate domain owners

This step is optional but encouraged if you have the ability to verify the customer's domain. The Site Verification API `webResource.insert()` call both verifies a domain and assigns to it the owners that you specify in the `owners[]` parameter of the request body.

The following example shows how to verify an `INET_DOMAIN`:

##### Python

```
# Verify domain and designate domain owners
response = verification_service.webResource().insert(
    verificationMethod='DNS_TXT',
    body={
        'site': {
            'type': 'INET_DOMAIN',
            'identifier': CUSTOMER_DOMAIN
        },
        'owners': ['marty.mcfly@' + CUSTOMER_DOMAIN]
    }).execute()
print(response)
```

##### Java

```
// Verify domain and designate domain owners
SiteVerificationWebResourceResource.Site verifySite =
      new SiteVerificationWebResourceResource.Site()
            .setIdentifier(CUSTOMER_DOMAIN)
            .setType("INET_DOMAIN");

List<String> owners = Arrays.asList(userEmail);

SiteVerificationWebResourceResource resource =
  new SiteVerificationWebResourceResource()
        .setSite(verifySite)
        .setOwners(owners);

SiteVerificationWebResourceResource verifyResponse = 
  verificationService.webResource().insert("DNS_TXT", resource).execute();
System.out.println("Site Verification Web Resource:\n" + verifyResponse);
```

##### C#

```
// Verify domain and designate domain owners
SiteVerificationWebResourceResource.SiteData verifySite =
      new SiteVerificationWebResourceResource.SiteData()
      {
          Identifier = CUSTOMER_DOMAIN,
          Type = "INET_DOMAIN"
      };

string[] owners = { userEmail };

SiteVerificationWebResourceResource resource =
  new SiteVerificationWebResourceResource()
  {
      Site = verifySite,
      Owners = owners
  };

SiteVerificationWebResourceResource verifyResponse =
    verificationService.WebResource.Insert(resource, "DNS_TXT").Execute();
Console.WriteLine("Site Verification Web Resource:\n" + verifyResponse);
```

##### PHP

```
// Verify domain and designate domain owners
$body =
new Google_Service_SiteVerification_SiteVerificationWebResourceResource([
  'site' => [
    'type' => 'INET_DOMAIN',
    'identifier' => $CUSTOMER_DOMAIN,
  ],
  'owners' => ['marty.mcfly@' . $CUSTOMER_DOMAIN]
]);

$response = $verificationService->webResource->insert('DNS_TXT', $body);
print_r ($response);
```

##### Ruby

```
# Verify domain and designate domain owners
webResource = Google::Apis::SiteVerificationV1::SiteVerificationWebResourceResource.new(
  site: {
    type: 'INET_DOMAIN',
    identifier: CUSTOMER_DOMAIN
  },
  owners: ['marty.mcfly@' + CUSTOMER_DOMAIN]
)

response = verification_service.insert_web_resource('DNS_TXT', webResource)
puts response.inspect
```

##### Node.js

```
// Verify domain and designate domain owners
const verifyDomainPromise = verificationService.webResource.insert({
  verificationMethod: 'DNS_TXT',
  requestBody: {
    site: {
      type: 'INET_DOMAIN',
      identifier: CUSTOMER_DOMAIN,
    },
    owners: [\`marty.mcfly@${CUSTOMER_DOMAIN}\`],
  }
}).then(({data}) => {
  console.log(data);
  return data;
});
```

If successful, this call returns an `HTTP 200` code. If `webResource.insert()` can't verify the domain, it returns an `HTTP 400` -level error code. Retry the `webResource.insert()` call with a backoff delay until the domain is successfully verified.

## Put it all together

The following example shows the full code for provisioning a Google Workspace customer:

##### Python

```
"""This is a basic example of provisioning a Google Workspace customer.
"""
import sys
from apiclient.discovery import build
from apiclient.http import HttpError
from oauth2client.service_account import ServiceAccountCredentials

############## REPLACE WITH YOUR OWN VALUES ####################
JSON_PRIVATE_KEY_FILE = 'path/to/json_key_file.json'
RESELLER_ADMIN_USER = 'admin@yourresellerdomain.com'
CUSTOMER_DOMAIN = 'example.com'
CUSTOMER_SITE = 'https://www.example.com'
################################################################

# Full List of scopes:
# https://developers.google.com/identity/protocols/googlescopes
OAUTH2_SCOPES = [
    'https://reseller.googleapis.com/auth/apps.order',
    'https://reseller.googleapis.com/auth/siteverification',
    'https://reseller.googleapis.com/auth/admin.directory.user',
]

credentials = ServiceAccountCredentials.from_json_keyfile_name(
    JSON_PRIVATE_KEY_FILE, OAUTH2_SCOPES).create_delegated(RESELLER_ADMIN_USER)

reseller_service = build(
    serviceName='reseller', version='v1', credentials=credentials)

directory_service = build(
    serviceName='admin', version='directory_v1', credentials=credentials)

verification_service = build(
    serviceName='siteVerification', version='v1', credentials=credentials)

# Retrieve the site verification token and place it according to:
# https://developers.google.com/site-verification/v1/getting_started#tokens
response = verification_service.webResource().getToken(
    body={
        'site': {
            'type': 'INET_DOMAIN',
            'identifier': CUSTOMER_DOMAIN
        },
        'verificationMethod': 'DNS_TXT'
    }).execute()
print(response)

# Determine if customer domain already has Google Workspace
try:
  response = reseller_service.customers().get(
      customerId=CUSTOMER_DOMAIN).execute()
  print('Customer already exists if call succeeds')
  sys.exit()
except HttpError as error:
  if int(error.resp['status']) == 404:
    print('Domain available for Google Workspace creation')
  else:
    raise

# Create customer resource
response = reseller_service.customers().insert(
    body={
        'customerDomain': CUSTOMER_DOMAIN,
        'alternateEmail': 'marty.mcfly@gmail.com',
        'postalAddress': {
            'contactName': 'Marty McFly',
            'organizationName': 'Acme Corp',
            'postalCode': '10009',
            'countryCode': 'US',
        }
    }).execute()
print(response)

# Create first admin user
response = directory_service.users().insert(
    body={
        'primaryEmail': 'marty.mcfly@' + CUSTOMER_DOMAIN,
        'name': {
            'givenName': 'Marty',
            'familyName': 'McFly',
        },
        'password': 'Timecircuit88'
    }).execute()
print(response)

# Promote user to admin status
response = directory_service.users().makeAdmin(
    userKey='marty.mcfly@' + CUSTOMER_DOMAIN, body={
        'status': True
    }).execute()

# Create subscription resource
response = reseller_service.subscriptions().insert(
    customerId=CUSTOMER_DOMAIN,
    body={
        'customerId': CUSTOMER_DOMAIN,
        'skuId': '1010020027',
        'plan': {
            'planName': 'ANNUAL_MONTHLY_PAY',
        },
        'seats': {
            'numberOfSeats': 5,
        },
        'renewalSettings': {  # only relevant for annual plans
            'renewalType': 'RENEW_CURRENT_USERS_MONTHLY_PAY'
        }
    }).execute()
print(response)

# Verify domain and designate domain owners
response = verification_service.webResource().insert(
    verificationMethod='DNS_TXT',
    body={
        'site': {
            'type': 'INET_DOMAIN',
            'identifier': CUSTOMER_DOMAIN
        },
        'owners': ['marty.mcfly@' + CUSTOMER_DOMAIN]
    }).execute()
print(response)
```

##### Java

```
// OAuth2 and HTTP
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpResponseException;
import com.google.api.client.json.jackson2.JacksonFactory;
// Directory API
import com.google.api.services.admin.directory.Directory;
import com.google.api.services.admin.directory.DirectoryScopes;
import com.google.api.services.admin.directory.model.User;
import com.google.api.services.admin.directory.model.UserMakeAdmin;
import com.google.api.services.admin.directory.model.UserName;
// Reseller API
import com.google.api.services.reseller.Reseller;
import com.google.api.services.reseller.ResellerScopes;
import com.google.api.services.reseller.model.Address;
import com.google.api.services.reseller.model.Customer;
import com.google.api.services.reseller.model.RenewalSettings;
import com.google.api.services.reseller.model.Seats;
import com.google.api.services.reseller.model.Subscription;
// Site Verification API
import com.google.api.services.siteVerification.SiteVerification;
import com.google.api.services.siteVerification.SiteVerificationScopes;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceGettokenRequest;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceGettokenResponse;
import com.google.api.services.siteVerification.model.SiteVerificationWebResourceResource;
// Java library imports
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.List;

/**
 * This is a basic example of provisioning a Google Workspace customer.
 */
public class CodelabExample {
  // Full List of scopes:
  // https://developers.google.com/identity/protocols/googlescopes
  private static final List<String> OAUTH2_SCOPES = Arrays.asList(
    ResellerScopes.APPS_ORDER,
    SiteVerificationScopes.SITEVERIFICATION,
    DirectoryScopes.ADMIN_DIRECTORY_USER
  );

  /***************** REPLACE WITH YOUR OWN VALUES ********************************/
  public static final String JSON_PRIVATE_KEY_FILE = "path/to/json_key_file.json";
  public static final String RESELLER_ADMIN_USER = "admin@yourresellerdomain.com";
  public static final String CUSTOMER_DOMAIN = "example.com";
  public static final String CUSTOMER_SITE = "https://www.example.com/";
  /*******************************************************************************/

  public static void main(String[] args)
      throws IOException, GeneralSecurityException, FileNotFoundException {
    // Instantiate services with authenticated credentials
    GoogleCredential jsonCredentials = GoogleCredential
      .fromStream(new FileInputStream(JSON_PRIVATE_KEY_FILE));
    GoogleCredential credentials = new GoogleCredential.Builder()
      .setTransport(GoogleNetHttpTransport.newTrustedTransport())
      .setJsonFactory(JacksonFactory.getDefaultInstance())
      .setServiceAccountScopes(OAUTH2_SCOPES)
      .setServiceAccountUser(RESELLER_ADMIN_USER)
      .setServiceAccountPrivateKey(jsonCredentials.getServiceAccountPrivateKey())
      .setServiceAccountId(jsonCredentials.getServiceAccountId())
      .build();

    Reseller resellerService = new Reseller.Builder(
        credentials.getTransport(),
        credentials.getJsonFactory(),
        credentials).setApplicationName("Google Workspace Creator").build();

    Directory directoryService = new Directory.Builder(
        credentials.getTransport(),
        credentials.getJsonFactory(),
        credentials).setApplicationName("Google Workspace Creator").build();

    SiteVerification verificationService = new SiteVerification.Builder(
        credentials.getTransport(),
        credentials.getJsonFactory(),
        credentials).setApplicationName("Google Workspace Creator").build();

    // Retrieve the site verification token and place it according to:
    // https://developers.google.com/site-verification/v1/getting_started#tokens
    SiteVerificationWebResourceGettokenRequest.Site getTokenSite =
        new SiteVerificationWebResourceGettokenRequest.Site()
            .setType("INET_DOMAIN")
            .setIdentifier(CUSTOMER_DOMAIN);

    SiteVerificationWebResourceGettokenRequest request =
        new SiteVerificationWebResourceGettokenRequest()
            .setVerificationMethod("DNS_TXT")
            .setSite(getTokenSite);

    SiteVerificationWebResourceGettokenResponse getTokenResponse =
        verificationService.webResource().getToken(request).execute();
    System.out.println("Site Verification Token: " + getTokenResponse.getToken());

    // Determine if customer domain already has Google Workspace
    try {
      resellerService.customers().get(CUSTOMER_DOMAIN).execute();
      System.out.println("Customer already exists if call succeeds");
      System.exit(0);
    } catch (HttpResponseException e) {
        if (e.getStatusCode() == 404) {
          System.out.println("Domain available for Google Workspace creation");
        } else { 
          throw e; 
        }
    }

    // Create customer resource
    Address address = new Address()
      .setContactName("Marty McFly")
      .setOrganizationName("Acme Corp")
      .setCountryCode("US")
      .setPostalCode("10009");

    Customer customer = new Customer()
      .setCustomerDomain(CUSTOMER_DOMAIN)
      .setAlternateEmail("marty.mcfly@gmail.com")
      .setPostalAddress(address);

    Customer customerResponse = resellerService.customers()
      .insert(customer).execute();
    System.out.println("Created Customer:\n" + customerResponse);

    // Create first admin user
    String userEmail = "marty.mcfly@" + CUSTOMER_DOMAIN;

    UserName name = new UserName();
    name.setGivenName("Marty");
    name.setFamilyName("McFly");

    User user = new User();
    user.setPrimaryEmail(userEmail);
    user.setPassword("TimeCircuit88");
    user.setName(name);

    User userResponse = directoryService.users().insert(user).execute();
    System.out.println("Created User:\n" + userResponse);

    // Promote user to admin status
    UserMakeAdmin admin = new UserMakeAdmin();
    admin.setStatus(true);

    directoryService.users().makeAdmin(userEmail, admin).execute();
    System.out.println("User promoted to Admin");

    // Create subscription resource
    Seats seats = new Seats()
      .setNumberOfSeats(5);

    Subscription.Plan plan = new Subscription.Plan()
      .setPlanName("ANNUAL_YEARLY_PAY");

    RenewalSettings renewalSettings = new RenewalSettings()
      .setRenewalType("RENEW_CURRENT_USERS_MONTHLY_PAY");

    Subscription subscription = new Subscription()
      .setCustomerId(CUSTOMER_DOMAIN)
      .setSeats(seats)
      .setPlan(plan)
      .setSkuId("1010020027")
      .setRenewalSettings(renewalSettings);

    Subscription subscriptionResponse = resellerService.subscriptions()
      .insert(CUSTOMER_DOMAIN, subscription).execute();
    System.out.println("Created Subscription:\n" + subscriptionResponse);

    // Verify domain and designate domain owners
    SiteVerificationWebResourceResource.Site verifySite =
          new SiteVerificationWebResourceResource.Site()
                .setIdentifier(CUSTOMER_DOMAIN)
                .setType("INET_DOMAIN");

    List<String> owners = Arrays.asList(userEmail);

    SiteVerificationWebResourceResource resource =
      new SiteVerificationWebResourceResource()
            .setSite(verifySite)
            .setOwners(owners);

    SiteVerificationWebResourceResource verifyResponse = 
      verificationService.webResource().insert("DNS_TXT", resource).execute();
    System.out.println("Site Verification Web Resource:\n" + verifyResponse);
  }
}
```

##### C#

```
// OAuth2 and HTTP
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
// Reseller API
using Google.Apis.Reseller.v1;
using Google.Apis.Reseller.v1.Data;
// Directory API
using Google.Apis.Admin.Directory.directory_v1;
using User = Google.Apis.Admin.Directory.directory_v1.Data.User;
using UserName = Google.Apis.Admin.Directory.directory_v1.Data.UserName;
using UserMakeAdmin = Google.Apis.Admin.Directory.directory_v1.Data.UserMakeAdmin;
//Site Verification API
using Google.Apis.SiteVerification.v1;
using Google.Apis.SiteVerification.v1.Data;
// System imports
using System;
using System.IO;

class CodelabExample
{
    // Full List of scopes:
    // https://developers.google.com/identity/protocols/googlescopes
    static string[] OAUTH2_SCOPES = {
        ResellerService.Scope.AppsOrder,
        DirectoryService.Scope.AdminDirectoryUser,
        SiteVerificationService.Scope.Siteverification
    };

    /***************** REPLACE WITH YOUR OWN VALUES ********************************/
    public static String JSON_PRIVATE_KEY_FILE = "path/to/json_key_file.json";
    public static String RESELLER_ADMIN_USER = "admin@yourresellerdomain.com";
    public static String CUSTOMER_DOMAIN = "example.com";
    public static String CUSTOMER_SITE = "https://www.example.com/";
    /*******************************************************************************/

    static void Main(string[] args)
    {
        GoogleCredential credential;

        using (var stream = new FileStream(JSON_PRIVATE_KEY_FILE, FileMode.Open, FileAccess.Read))
        {
            credential = GoogleCredential
                .FromStream(stream)
                .CreateScoped(OAUTH2_SCOPES)
                .CreateWithUser(RESELLER_ADMIN_USER);
        }

        var resellerService = new ResellerService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
        });

        var directoryService = new DirectoryService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
        });

        var verificationService = new SiteVerificationService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credential,
        });

        // Retrieve the site verification token and place it according to:
        // https://developers.google.com/site-verification/v1/getting_started#tokens
        SiteVerificationWebResourceGettokenRequest.SiteData getTokenSite =
            new SiteVerificationWebResourceGettokenRequest.SiteData()
            {
                Type = "INET_DOMAIN",
                Identifier = CUSTOMER_DOMAIN
            };

        SiteVerificationWebResourceGettokenRequest request =
            new SiteVerificationWebResourceGettokenRequest()
            {
                VerificationMethod = "DNS_TXT",
                Site = getTokenSite
            };

        SiteVerificationWebResourceGettokenResponse getTokenResponse =
            verificationService.WebResource.GetToken(request).Execute();
        Console.WriteLine("Site Verification Token: {0}", getTokenResponse.Token);

        // Determine if customer domain already has Google Workspace
        try
        {
            resellerService.Customers.Get(CUSTOMER_DOMAIN).Execute();
            Console.WriteLine("Customer already exists if call succeeds");
            Environment.Exit(0);
        }
        catch (Google.GoogleApiException e) {
            if (e.Error.Code == 404)
            {
                Console.WriteLine("Domain available for Google Workspace creation");
            } else throw e;
        }

        // Create customer resource
        Address address = new Address()
        {
            ContactName = "Marty McFly",
            OrganizationName = "Acme Corp",
            CountryCode = "US",
            PostalCode = "10009"
        };

        Customer customer = new Customer()
        {
            CustomerDomain = CUSTOMER_DOMAIN,
            AlternateEmail = "marty.mcfly@gmail.com",
            PostalAddress = address
        };

        Customer customerResponse = resellerService.Customers.Insert(customer).Execute();
        Console.WriteLine("Created Customer:\n{0}", customerResponse);

        // Create first admin user
        String userEmail = "marty.mcfly@" + CUSTOMER_DOMAIN;

        UserName name = new UserName()
        {
            GivenName = "Marty",
            FamilyName = "McFly"
        };

        User user = new User()
        {
            PrimaryEmail = userEmail,
            Password = "TimeCircuit88",
            Name = name
        };

        User userResponse = directoryService.Users.Insert(user).Execute();
        Console.WriteLine("Created User:\n{0}", userResponse);

        // Promote user to admin status
        UserMakeAdmin admin = new UserMakeAdmin()
        {
            Status = true
        };
        directoryService.Users.MakeAdmin(admin, userEmail).Execute();
        Console.WriteLine("User promoted to Admin");

        // Create subscription resource
        Seats seats = new Seats()
        {
            NumberOfSeats = 5
        };

        Subscription.PlanData plan = new Subscription.PlanData()
        {
            PlanName = "ANNUAL_YEARLY_PAY"
        };

        RenewalSettings renewalSettings = new RenewalSettings()
        {
            RenewalType = "RENEW_CURRENT_USERS_MONTHLY_PAY"
        };

        Subscription subscription = new Subscription()
        {
            CustomerId = CUSTOMER_DOMAIN,
            Seats = seats,
            Plan = plan,
            SkuId = "1010020027",
            RenewalSettings = renewalSettings
        };

        Subscription subscriptionResponse = resellerService.Subscriptions
            .Insert(subscription, CUSTOMER_DOMAIN).Execute();
        Console.WriteLine("Created Subscription:\n" + subscriptionResponse);

        // Verify domain and designate domain owners
        SiteVerificationWebResourceResource.SiteData verifySite =
              new SiteVerificationWebResourceResource.SiteData()
              {
                  Identifier = CUSTOMER_DOMAIN,
                  Type = "INET_DOMAIN"
              };

        string[] owners = { userEmail };

        SiteVerificationWebResourceResource resource =
          new SiteVerificationWebResourceResource()
          {
              Site = verifySite,
              Owners = owners
          };

        SiteVerificationWebResourceResource verifyResponse =
            verificationService.WebResource.Insert(resource, "DNS_TXT").Execute();
        Console.WriteLine("Site Verification Web Resource:\n" + verifyResponse);
    }
}
```

##### PHP

```
// https://developers.google.com/api-client-library/php/
require_once 'vendor/autoload.php';

// Full List of scopes:
// https://developers.google.com/identity/protocols/googlescopes
$OAUTH2_SCOPES = [
  Google_Service_Reseller::APPS_ORDER,
  Google_Service_SiteVerification::SITEVERIFICATION,
  Google_Service_Directory::ADMIN_DIRECTORY_USER,
];

######### REPLACE WITH YOUR OWN VALUES ###############
$JSON_PRIVATE_KEY_FILE = 'path/to/json_key_file.json';
$RESELLER_ADMIN_USER = 'admin@yourresellerdomain.com';
$CUSTOMER_DOMAIN = 'example.com';
$CUSTOMER_SITE = 'https://www.example.com/';
######################################################

$client = new Google_Client();
$client->setAuthConfig($JSON_PRIVATE_KEY_FILE);
$client->setSubject($RESELLER_ADMIN_USER);
$client->setScopes($OAUTH2_SCOPES);

$resellerService = new Google_Service_Reseller($client);
$directoryService = new Google_Service_Directory($client);
$verificationService = new Google_Service_SiteVerification($client);

// Retrieve the site verification token and place it according to:
// https://developers.google.com/site-verification/v1/getting_started#tokens
$body =
new Google_Service_SiteVerification_SiteVerificationWebResourceGettokenRequest([
  'verificationMethod' => 'DNS_TXT',
  'site' => [
    'type' => 'INET_DOMAIN',
    'identifier' => $CUSTOMER_DOMAIN
  ]
]);
$response = $verificationService->webResource->getToken($body);
print_r ($response);

// Determine if customer domain already has Google Workspace
try {
  $response = $resellerService->customers->get($CUSTOMER_DOMAIN);
  exit('Customer already exists if call succeeds');
} catch(Google_Service_Exception $e) {
  if ($e->getErrors()[0]['reason'] == 'notFound'){
    print ("Domain available for Google Workspace creation\n");
  } else {
    throw $e;
  }
}

// Create customer resource
$customer = new Google_Service_Reseller_Customer([
  'customerDomain' => $CUSTOMER_DOMAIN,
  'alternateEmail' => 'marty.mcfly@gmail.com',
  'postalAddress' => [
    'contactName' => 'Marty McFly',
    'organizationName' => 'Acme Corp',
    'countryCode' => 'US',
    'postalCode' => '10009'
  ]
]);
$response = $resellerService->customers->insert($customer);
print_r ($response);

// Create first admin user
$user = new Google_Service_Directory_User([
  'primaryEmail' => 'marty.mcfly@' . $CUSTOMER_DOMAIN,
  'password' => 'Timecircuit88',
  'name' => [
    'givenName' => 'Marty',
    'familyName' => 'McFly',
    'fullName' => 'Marty McFly'
  ]
]);
$response = $directoryService->users->insert($user);
print_r ($response);

// Promote user to admin status
$makeAdmin = new Google_Service_Directory_UserMakeAdmin([
  'status' => true
]);
$directoryService->users->makeAdmin(
  'marty.mcfly@' . $CUSTOMER_DOMAIN,
  $makeAdmin
);

// Create subscription resource
$subscription = new Google_Service_Reseller_Subscription([
  'customerId' => $CUSTOMER_DOMAIN,
  'skuId' => '1010020027',
  'plan' => [
    'planName' => 'ANNUAL_MONTHLY_PAY'
  ],
  'seats' => [
    'numberOfSeats' => '5'
  ],
  'renewalSettings' => [
    'renewalType' => 'RENEW_CURRENT_USERS_MONTHLY_PAY'
  ]
]);
$response = $resellerService->subscriptions->insert(
  $CUSTOMER_DOMAIN,
  $subscription
);
print_r ($response);

// Verify domain and designate domain owners
$body =
new Google_Service_SiteVerification_SiteVerificationWebResourceResource([
  'site' => [
    'type' => 'INET_DOMAIN',
    'identifier' => $CUSTOMER_DOMAIN,
  ],
  'owners' => ['marty.mcfly@' . $CUSTOMER_DOMAIN]
]);

$response = $verificationService->webResource->insert('DNS_TXT', $body);
print_r ($response);
```

##### Ruby

```
require 'googleauth'
require 'google/apis/reseller_v1'
require 'google/apis/site_verification_v1'
require 'google/apis/admin_directory_v1'

# Full List of scopes:
# https://developers.google.com/identity/protocols/googlescopes
OAUTH2_SCOPES = [
  'https://reseller.googleapis.com/auth/apps.order',
  'https://reseller.googleapis.com/auth/admin.directory.user',
  'https://reseller.googleapis.com/auth/siteverification',
]

####### REPLACE WITH YOUR OWN VALUES ###############
JSON_PRIVATE_KEY_FILE = 'path/to/json_key_file.json'
RESELLER_ADMIN_USER = 'admin@yourresellerdomain.com'
CUSTOMER_DOMAIN = 'example.com'
CUSTOMER_SITE = 'https://www.example.com/'
####################################################

credentials = Google::Auth::ServiceAccountCredentials.make_creds(
  json_key_io: File.open(JSON_PRIVATE_KEY_FILE),
  scope: OAUTH2_SCOPES)
credentials.sub = RESELLER_ADMIN_USER

Google::Apis::RequestOptions.default.authorization = credentials

reseller_service = Google::Apis::ResellerV1::ResellerService.new
directory_service = Google::Apis::AdminDirectoryV1::DirectoryService.new
verification_service = Google::Apis::SiteVerificationV1::SiteVerificationService.new

# Retrieve the site verification token and place it according to:
# https://developers.google.com/site-verification/v1/getting_started#tokens
request = Google::Apis::SiteVerificationV1::GetWebResourceTokenRequest.new(
  site: {
    type: 'INET_DOMAIN',
    identifier: CUSTOMER_DOMAIN
  },
  verification_method: 'DNS_TXT'
)

response = verification_service.get_web_resource_token(request)
puts response.inspect

# Determine if customer domain already has Google Workspace
begin
  reseller_service.get_customer(CUSTOMER_DOMAIN)
  abort('Customer already exists if call succeeds')
rescue Google::Apis::ClientError => ex
  if ex.status_code == 404
    puts 'Domain available for Google Workspace creation'
  else
    raise ex
  end
end

# Create customer resource
customer = Google::Apis::ResellerV1::Customer.new(
  customer_domain: CUSTOMER_DOMAIN,
  alternate_email: 'marty.mcfly@gmail.com',
  postal_address: {
    contact_name: 'Marty McFly',
    organization_name: 'Acme Corp',
    country_code: 'US',
    postal_code: '10009'})

response = reseller_service.insert_customer(customer)
puts response.inspect

# Create first admin user
user = Google::Apis::AdminDirectoryV1::User.new(
  name: {
    given_name: 'Marty',
    family_name: 'McFly',
    full_name: 'Marty McFly'
  },
  password: 'Timecircuit88',
  primary_email: 'marty.mcfly@' + CUSTOMER_DOMAIN,
)

response = directory_service.insert_user(user)
puts response.inspect

# Promote user to admin status
admin_status = Google::Apis::AdminDirectoryV1::UserMakeAdmin.new(
  status: true
)

response = directory_service.make_user_admin('marty.mcfly@' + CUSTOMER_DOMAIN, admin_status)

# Create subscription resource
subscription = Google::Apis::ResellerV1::Subscription.new(
  customer_id: CUSTOMER_DOMAIN,
  sku_id: '1010020027',
  plan: {
    plan_name: 'ANNUAL_MONTHLY_PAY'
  },
  seats: {
    number_of_seats: 5,
  },
  renewal_settings: {
    renewal_type: 'RENEW_CURRENT_USERS_MONTHLY_PAY'
  }
)

response = reseller_service.insert_subscription(CUSTOMER_DOMAIN, subscription)
puts response.inspect

# Verify domain and designate domain owners
webResource = Google::Apis::SiteVerificationV1::SiteVerificationWebResourceResource.new(
  site: {
    type: 'INET_DOMAIN',
    identifier: CUSTOMER_DOMAIN
  },
  owners: ['marty.mcfly@' + CUSTOMER_DOMAIN]
)

response = verification_service.insert_web_resource('DNS_TXT', webResource)
puts response.inspect
```

##### Node.js

```
// NOTE: This script needs googleapis 28.0.0 or later as it uses promises
const {google} = require('googleapis');

// ############## REPLACE WITH YOUR OWN VALUES ####################
const JSON_PRIVATE_KEY_FILE = 'path/to/json_key_file.json';
const RESELLER_ADMIN_USER = 'admin@yourresellerdomain.com';
const CUSTOMER_DOMAIN = 'example.com';
const CUSTOMER_SITE = 'https://www.example.com/';
// ################################################################

// Full List of scopes: https://developers.google.com/identity/protocols/googlescopes
const OAUTH2_SCOPES = [
  'https://reseller.googleapis.com/auth/apps.order',
  'https://reseller.googleapis.com/auth/siteverification',
  'https://reseller.googleapis.com/auth/admin.directory.user',
];

const authJWT = new google.auth.JWT({
  keyFile: JSON_PRIVATE_KEY_FILE,
  scopes: OAUTH2_SCOPES,
  subject: RESELLER_ADMIN_USER,
});

const resellerService = google.reseller({version: 'v1', auth: authJWT});
const directoryService = google.admin({version: 'directory_v1', auth: authJWT});
const verificationService = google.siteVerification({version: 'v1', auth: authJWT});

// Run all the steps one after each other, and exit as soon as one of them fail
Promise.resolve()
  .then(() => {
    /**
     * Retrieve the site verification token and place it according to:
     * https://developers.google.com/site-verification/v1/getting_started#tokens
     */
    const getTokenPromise = verificationService.webResource.getToken({
      requestBody: {
        site: {
          type: 'INET_DOMAIN',
          identifier: CUSTOMER_DOMAIN,
        },
        verificationMethod: 'DNS_TXT',
      }
    }).then(({data}) => {
      console.log(data);
      return data;
    });

    return getTokenPromise;
  })
  .then(() => {
    // Determine if customer domain already has Google Workspace
    const getCustomerPromise = resellerService.customers.get({
      customerId: CUSTOMER_DOMAIN
    }).then(() => {
      throw new Error('Customer already exists');
    }, resErr => {
      if (resErr.code === 404) {
        console.log('Domain available for Google Workspace creation');
      } else {
        throw resErr;
      }
    });

    return getCustomerPromise;
  })
  .then(() => {
    // Create customer resource
    const insertCustomerPromise = resellerService.customers.insert({
      requestBody: {
        customerDomain: CUSTOMER_DOMAIN,
        alternateEmail: 'marty.mcfly@gmail.com',
        postalAddress: {
          contactName: 'Marty McFly',
          organizationName: 'Acme Corp',
          postalCode: '10009',
          countryCode: 'US',
        }
      }
    }).then(({data}) => {
      console.log(data);
      return data;
    });

    return insertCustomerPromise;
  })
  .then(() => {
    // Create first admin user
    const insertUserPromise = directoryService.users.insert({
      requestBody: {
        primaryEmail: \`marty.mcfly@${CUSTOMER_DOMAIN}\`,
        name: {
          givenName: 'Marty',
          familyName: 'McFly',
        },
        password: 'Timecircuit88',
      }
    }).then(({data}) => {
      console.log(data);
      return data;
    });

    return insertUserPromise;
  }).then(() => {
    // Promote user to admin status
    const makeAdminPromise = directoryService.users.makeAdmin({
      userKey: \`marty.mcfly@${CUSTOMER_DOMAIN}\`,
      requestBody: {
        status: true
      }
    });

    return makeAdminPromise;
  })
  .then(() => {
    // Create subscription resource
    const insertSubscriptionPromise = resellerService.subscriptions.insert({
      customerId: CUSTOMER_DOMAIN,
      requestBody: {
        customerId: CUSTOMER_DOMAIN,
        skuId: '1010020027',
        plan: {
          planName: 'ANNUAL_MONTHLY_PAY',
        },
        seats: {
          numberOfSeats: 5,
        },
        renewalSettings: { // only relevant for annual plans
          renewalType: 'RENEW_CURRENT_USERS_MONTHLY_PAY',
        }
      }
    }).then(({data}) => {
      console.log(data);
      return data;
    });

    return insertSubscriptionPromise;
  })
  .then(() => {
    // Verify domain and designate domain owners
    const verifyDomainPromise = verificationService.webResource.insert({
      verificationMethod: 'DNS_TXT',
      requestBody: {
        site: {
          type: 'INET_DOMAIN',
          identifier: CUSTOMER_DOMAIN,
        },
        owners: [\`marty.mcfly@${CUSTOMER_DOMAIN}\`],
      }
    }).then(({data}) => {
      console.log(data);
      return data;
    });

    return verifyDomainPromise;
  })
  .catch(err => {
    console.error('Error:', err.message);
    if (err.code) {
      console.log('Error code:', err.code);
    }
    if (err.errors) {
      console.log('Details:', err.errors);
    }
  });
```
