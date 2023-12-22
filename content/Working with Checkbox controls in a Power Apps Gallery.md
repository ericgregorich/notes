---
description: How to add and manipulate the Checkbox control that is added to a Power Apps Gallery. How to save the selected state, select all items, and unselect all items.
tags:
  - power-apps
---
![Example Gallery with Checkboxes](Working%20with%20Checkbox%20controls%20in%20a%20Power%20Apps%20Gallery-20231127111219445.webp)
Handling checkboxes in the [[power-apps|Power Apps]] Gallery control can be tricky and does not always work as expected. Using a collection is a simple and robust solution. For this demo, let's set up a Gallery with checkbox controls to demonstrate various ways to interact with them.

## Load the Data

Add a button and update the OnSelect property to create a data collection.

```js
ClearCollect(
    colSampleFood,
    {
        Id: GUID(),
        Title: "Pizza",
        SelectedFood: false
    },
    {
        Id: GUID(),
        Title: "Hamburgers",
        SelectedFood: false
    },
    {
        Id: GUID(),
        Title: "Hotdogs",
        SelectedFood: false
    },
    {
        Id: GUID(),
        Title: "Chicken",
        SelectedFood: false
    }
)
```

## Configure Your Gallery

Set the **Gallery.Items** property to the name of your collection.

```js
colSampleFood
```

In your Gallery template, add a checkbox control. Set the Text property to the current title (`ThisItem.Title`). Set the Default property to `ThisItem.SelectedFood`. Adjust the size and layout of your template as needed. Your Gallery should display your data when you click the `Load Collection` button.

## Add a DataTable control (Optional)

To easily view the data in my collection without digging through the data sources or the formula bar, I add a DataTable control to the screen and delete it afterward. To do this, set the Items property of the DataTable control to your collection colSampleFood and add all fields to the control. This will give you a live preview of the data in your collection. See the screenshot above to see how mine looks for this demo.

## Save your Gallery Checkbox state

Add a Save button to your screen. Set the `OnSelect` property to the formula below. When the button is clicked, we will Patch the colSampleFood collection for each item in the Gallery with the checkbox value for that record.

```js
ForAll(
    galDemo.AllItems,
    Patch(
        colSampleFood,
        ThisRecord,
        {SelectedFood: cbIsSelected.Value}
    )
)
```

If you added the **DataTable** control above, then when you click Save you should see the **SelectedFood** property update and match the selected values of your checkboxes.

## Select all checkboxes in the Gallery

A common scenario is to have a button or link on the screen that, when clicked, checks all of the checkboxes in the Gallery.

One way to do this is to immediately use the OnCheck and OnUnCheck properties of the Checkbox control and patch the current item in the collection. This usually works, but I've had issues patching the collection from within the Gallery for other field types and larger collections, so I avoid it.

I found an easy way to select all to update the collection directly using the [UpdateIf](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-update-updateif?ref=thepowerarchitect.com) function. Add the code below in the OnSelect property of your Select All button. It will update the colSampleFood collection, setting all unchecked items to checked. Since your Gallery uses the collection as its data source, it will update automatically.

```js
UpdateIf( colSampleFood, Not(SelectedFood), {SelectedFood: true} )
```

## Unselect all checkboxes in the Gallery

Unselecting all checkboxes, as you would expect, is similar to when we select them all. In the **OnSelect** property of the **Unselect All** button, add this code.

```js
UpdateIf(
    colSampleFood,
    SelectedFood,
    {SelectedFood: false}
)
```

Conclusion

In this post, we learned how to add a Checkbox control to a Gallery, save the selected state of the checkbox, select all items, and unselect all items.
