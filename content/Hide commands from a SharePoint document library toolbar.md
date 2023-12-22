---
description: How to hide commands from a SharePoint Document Library toolbar using JSON.
tags:
  - sharepoint
---
The toolbar that appears in a document library (or list) in SharePoint Online can be customized (to an extent). We can hide, rename, change icons, and even rearrange the commands. 

Here is an example of a default library. By default, we see commands to create documents, Upload, Edit in Grid View, Sync, Add shortcuts to OneDrive, Pin to Quick Access, Export to Excel, and many more below the sub-menu. 

![[Example_SharePoint_Document_Library_with_all_default_commands_shown.png|Example SharePoint Document Library with all default commands shown]]
Here is an example of the library toolbar that has nearly everything hidden.

![[Example_SharePoint_Document_Library_with_some_default_commands_hidden.png|Example SharePoint Document Library with some default commands hidden]]
## How to apply the customizations.

To apply this formatting, select your Document Library View (by default, **All Documents**) and next select **Format current view.** Then switch to advanced mode. Replace the default JSON with your own (Example below). You can find a list of all the commands [here](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/view-commandbar-formatting#key).

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/row-formatting.schema.json",
  "commandBarProps": {
    "commands": [
      {
        "key": "editInGridView",
        "hide": true
      },
      {
        "key": "pinToQuickAccess",
        "hide": true
      },
      {
        "key": "export",
        "hide": true
      },
      {
        "key": "pinItem",
        "hide": true
      },
      {
        "key": "automate",
        "hide": true
      },
      {
        "key": "checkOut",
        "hide": true
      },
      {
        "key": "properties",
        "hide": true
      },
      {
        "key": "sync",
        "hide": true
      },
      {
        "key": "download",
        "hide": true
      },
      {
        "key": "addShortcut",
        "hide": true
      },
      {
        "key": "integrate",
        "hide": true
      }
    ]
  }
}
```

## Limitations

- This approach only manipulates the command bar in the current view. You would need to apply the same logic to every view independently. This means you can have different commands appear depending on your view.
- This approach is not a substitute for permissions. For example, if you do not want users uploading documents, give them Read Only access to the library, not just hide the Upload button. 
- Some commands appear when one or more documents are selected. Your JSON can specify if the command should be affected depending on the selection mode. Read more [here](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/view-commandbar-formatting#selectionmodes%20%22https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/view-commandbar-formatting#selectionmodes).
- Some commands, such as the Submit for Approval command, cannot be hidden.
- You are hiding these commands from everyone. If any specific users need to make changes using the toolbar, they may need to remove this formatting to be able to access the commands they need.

## Reference

[Command bar customization syntax reference | Microsoft Docs](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/view-commandbar-formatting)