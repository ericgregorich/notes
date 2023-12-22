---
tags:
  - sharepoint
  - azure
---
How to create an Azure App Registration to give app permissions to selected [[sharepoint|Microsoft SharePoint]] sites.

## Create the App Registration in Azure

Creating the new App Registration following [[Steps to setup Azure AD App-only access|these instructions]]. Select SharePoint Sites.Selected when selecting the permissions.

Next, you'll use the PowerShell below to set which SharePoint sites the App Registration is allowed to access.

## Grant permissions to select sites using PowerShell

```powershell
$targetSiteUrl = ‘{sharepoint site url}’
Connect-PnPOnline $targetSiteUrl -Interactive
Grant-PnPAzureADAppSitePermission -AppId ‘{app (client) id}’ -DisplayName ‘{app display name}’ -Site $targetSiteUrl -Permissions Write
```

## Get site permission for a selected site

``` powershell
Get-PnPAzureADAppSitePermission -Site $targetSiteUrl
```

## Revoke Permission via PowerShell

``` powershell
$targetSiteUrl = '{sharepoint site url}'
Connect-PnPOnline $targetSiteUrl -Interactive
Revoke-PnPAzureADAppSitePermission -PermissionId '{permissionid}' -Site $targetSiteUrl -Force

Get-PnPAzureADAppSitePermission -Site $targetSiteUrl
