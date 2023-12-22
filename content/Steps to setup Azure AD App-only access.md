---
tags:
  - azure
---
Follow the following steps to create an Azure App Registration using a self-signed certificate.  

1. Create a [[Create a self-signed Certificate using PowerShell]]
2. Save the .cer and .pfx files and the information used to create the certificate.
3. Create an Azure App Registration from [Azure AD](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps)
4. Under Certificates & Secrets, upload the .cer file created earlier.
5. Under API Permissions, assign the appropriate permissions for the App.