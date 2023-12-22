---
tags:
  - sharepoint
  - powershell
---
How to remove a Microsoft SharePoint site redirected site URL using PowerShell.

When a Microsoft SharePoint Online site URL is changed, a redirect is automatically applied that redirects the old URL to the new URL. You may need to remove this redirect to reuse the old URL. The PowerShell below can be used to get a list of redirected sites and remove a specific site.

## Get a list of all redirected sites

```powershell
Get-SPOSite -Template REDIRECTSITE#0
```

## Remove an old site

```powershell
Remove-SPOSite -Identity https://contoso.sharepoint.com/sites/OldSiteName
```
