---
description: If you use Microsoft Power Automate with Microsoft SharePoint Online list or library data and need to check if a field is empty or null, you can use the `@empty` function in an expression.
tags:
  - sharepoint
  - power-platform
---
If you use [[Microsoft Power Automate|Power Automate]] with [[sharepoint|SharePoint]] Online list or library data and need to check if a field is empty or null, you can use the `@empty` function in an expression.
## Example

The following example involves setting up a new Power Automate workflow triggered when a user starts the workflow from the SharePoint list. The workflow will check if the “President” column is empty and update the “Is Empty” column with the result. 
### Create a SharePoint List

![We can check the demo list with a column for an empty value and a column to show the result.](We_can_check_the_demo_list_with_a_column_for_an_empty_value_and_a_column_to_show_the_result.webp)

- Create a new SharePoint list. This demo uses the default Title column and a choice column called **President** and a Boolean column called “Is Empty.” 
- Add some sample data. Leave the President column blank for some items.

### Create a Power Automate Flow

![An overview of our workflow.](An_overview_of_our_workflow.webp)

- Create a new Power Automate Automated Cloud Flow. Select **For a selected item** as the trigger action. Select your SharePoint site and list in this action.
- Add the **Get Item** action and configure it to retrieve the selected item from the list. This step is necessary to retrieve all the columns so we can use them in the workflow. Set the ID to the ID of the For a Selected Item trigger.
- Add the **Initialize Variable** action. We want to use the **empty()** function with our President column in the Value. The full expression is **empty(outputs(‘Get_item’)?[‘body/President/Value’])**. 

![The empty() expression in a variable.](The_empty()_expression_in_a_variable.webp)

- Add an Update Item action that is pointed to your list and set the Is Empty column. 

![Set our Is Empty column to the variable that we created.](Set_our_Is_Empty_column_to_the_variable_that_we_created.webp)

- Save the workflow.

### Test your workflow

- Now, go back to your list and select an item with an empty President value. Under the Automate menu, you should see your workflow listed (it may take a few seconds to load). Please select it and run the workflow.

![Run our Power Automate workflow after selecting an item.](Run_our_Power_Automate_workflow_after_selecting_an_item.webp)

- Refresh your list after a few seconds; the **Is Empty** column should be **checked**. 
- Try running the workflow on a row that has a President selected. The **Is Empty**should **not be checked**.

![Our Is Empty column is now checked.](Our_Is_Empty_column_is_now_checked.webp)

- Open the workflow that you ran. You can see the variable we created resulted in **True** when the column was empty and **False** when it was not empty.