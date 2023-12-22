---
description: An overview of the Power Apps Creator Kit Command Bar. How to use it.
tags:
  - power-platform
---
![Creator Kit Command Bar](Power%20Apps%20Creator%20Kit%20Command%20Bar-20231127110729613.webp)

The [Creator Kit Command Bar](https://learn.microsoft.com/en-us/power-platform/guidance/creator-kit/commandbar?ref=thepowerarchitect.com) provides a standard toolbar for various commands to use in your app. Rather than creating custom buttons, the Command Bar provides a consistent experience with other services in the Microsoft platform.

* Add the command bar in a consistent place in your app. Typically, it is at the top of your application below your header.
* Set the Theme property to your AppThemeJson.
* Update the Accessibility Label.
## **Items**

We provide JSON in the **Items** property to populate the Command Bar.

* The **ItemKey** is the unique ID that identifies the command.
* The **ItemDisplayName** is the label that is displayed to the user.
* The **ItemIconName** is the icon's name to be displayed next to the label.
* **ItemEnabled** determines if the command is enabled or disabled.
* **ItemVisible** determines if the command is visible.

``` js
Table(
    {
        ItemKey: "new",
        ItemDisplayName: "New",
        ItemIconName: "Add",
        ItemEnabled: true,
        ItemVisible: true
    },
    {
        ItemKey: "edit",
        ItemDisplayName: "Edit",
        ItemIconName: "Edit",
        ItemEnabled: true,
        ItemVisible: true
    },
    {
        ItemKey: "delete",
        ItemDisplayName: "Delete",
        ItemIconName: "Delete",
        ItemEnabled: true,
        ItemVisible: true
    },
    {
        ItemKey: "refresh",
        ItemDisplayName: "Refresh",
        ItemIconName: "refresh",
        ItemEnabled: true,
        ItemVisible: true
    },
    {
        ItemKey: "help",
        ItemDisplayName: "Help",
        ItemIconName: "help",
        ItemEnabled: true,
        ItemVisible: true
    }
)
```

There are more advanced options available for the Command Bar. See the [documentation](https://learn.microsoft.com/en-us/power-platform/guidance/creator-kit/commandbar?ref=thepowerarchitect.com) for details.

* Change the icon color with **ItemIconColor**.
* Add section headers with **ItemHeader**.
* Add items as children of other items using **ItemParentKey**.
* Etc.
## **OnSelect**
The OnSelect event is triggered when a user clicks on any command. Add a Switch statement to the OnSelect property, letting us perform some function when the selected Command is triggered.

Replace the "false" with the action of the command. We commonly execute some simple logic. If there is more complex logic, it may be best to put that logic in a hidden Button on the screen and trigger it using Select(btnName).

``` js
Switch( Self.Selected.ItemKey,
    "new", false,
    "edit", false,
    "delete", false,
    "refresh", false,
    "help", false,
	false
)
```
