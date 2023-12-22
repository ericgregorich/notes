---
description: How to use PowerShell to disable the consent dialog showing when a user opens Power Apps for the first time or when a new connection is added.
tags:
  - power-platform
---
How to use PowerShell to disable the consent dialog showing when a user opens Power Apps for the first time or when a new connection is added.
## Set Consent Bypass

PowerShell can disable the consent dialog when the user opens the Power App for the first time or when a new connection is added.

```shell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Force
dir . | Unblock-File
Install-Module -Name Microsoft.PowerApps.Administration.PowerShell
Install-Module -Name Microsoft.PowerApps.PowerShell -AllowClobber
Import-Module Microsoft.Online.SharePoint.Powershell -Verbose
Connect-SPOService -Url {Your SharePoint Admin Tenant URL}
Set-AdminPowerAppApisToBypassConsent -AppName {Your App ID}
```

When prompted, enter your Environment ID in the URL or the Power Platform Admin center in the selected Environment.

## Clear Consent Bypass

The following PowerShell clears the consent bypass that is set. The users will again be prompted for consent when they open the app for the first time or if a new connection is added. 

```shell
Clear-AdminPowerAppApisToBypassConsent -AppName {Your App Id}
```