---
description: Microsoft has provided some PowerShell that allows admins to check their Power Platform environment for invalid Power Automate Licenses before it becomes an issue.
tags:
  - power-platform
---
Microsoft has provided some PowerShell that allows admins to check their Power Platform environment for invalid Power Automate Licenses before it becomes an issue.

> Unlicensed Power Automate Flows will be turned off. Microsoft is enforcing licensing on all Power Automate flows. The flow owner will be notified if any of your flows do not meet licensing requirements. The flow will turn off if not compliant after x days. Read the [FAQ](https://learn.microsoft.com/en-us/power-platform/admin/power-automate-licensing/faqs) for licensing details.
## Open PowerShell

First, open PowerShell on your machine (search for PowerShell), then open it as an administrator.

## Browse to a location to save the output

Next, enter `CD` and then the path to where you want to export the results. For me, my path is `C:\Local\Licensing`. Click Enter to see your directory change in your PowerShell prompt.

## Install the modules

We need to install the PowerShell modules required to run our command.

Copy the following into your PowerShell terminal and click Enter.

```shell
Install-Module -Name Microsoft.PowerApps.Administration.PowerShell -Force
Install-Module -Name Microsoft.PowerApps.PowerShell -AllowClobber -Force
```

## Run Get-AdminFlowAtRiskOfSuspension

Now, we can run our command. The command will check if any Power Automate flows in this environment are at risk and download the CSV file you specify.

Please copy the following PowerShell, but change the Environment Name and, optionally, the Path before running it. I’d do this in Notepad first, then copy the results into the PowerShell terminal.

> Find your Environment Name You can find your environment by visiting the [Environments](https://admin.powerplatform.microsoft.com/environments) page in the Power Platform Admin Center. I always click into the environment and use the Environment ID provided on the summary screen.

```shell
Get-AdminFlowAtRiskOfSuspension -EnvironmentName <ENV_NAME> -ApiVersion '2016-11-01' | Export-Csv -Path suspensionList.csv -NoTypeInformation
```

When you run this command, it will open a window that asks you to authenticate to your SharePoint tenant.

After logging in, the results should be exported to a CSV file in the path you navigated earlier.

## Read your results

If your CSV file is empty, you should be good to go. **Remember to check each of your environments!**

If you have results in your CSV, unfortunately, that means you have some invalid licenses to deal with.

Your CSV file will have all the details you need to identify the flow, why it was flagged, and recommendations to resolve the licensing issue.

## How to resolve licensing issues

The best option is to read the [FAQ](https://learn.microsoft.com/en-us/power-platform/admin/power-automate-licensing/faqs) provided by Microsoft.

If your Flow is created to support your Power App, you can [Associate Your Flow](https://learn.microsoft.com/en-us/power-automate/associate-flow-to-app), with your Power App. This assumes your flow runs in the app’s context and uses the same data sources for triggers or actions. Scheduled and automated cloud flows must be linked to the app through [PowerShell](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-powershell#associate-in-context-flows-to-an-app), but others can be connected directly from the flow details page (see bottom-right corner).

[Frequently asked questions about Power Automate licensing — Power Platform | Microsoft Learn](https://learn.microsoft.com/en-us/power-platform/admin/power-automate-licensing/faqs)