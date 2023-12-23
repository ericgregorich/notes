I'm using Microsoft Power Automate to query a Dataverse table. I want to return all rows where my Choice column, named Sync Status is equal to the choice value of "New".

This is a little different than when we want to filter by text or number field types. A choice column is a bit different.

> [!NOTE] Assumption
> This scenario assumes we're using a simple Choice column where the values are created directly in the column properties, not a global Choice column.

- Edit your Dataverse choice column.
- Under Advanced, look for the Logical Name and copy it.
- Also, note the Value column for your choices. Copy the value for the choice you want to filter for. Then remove the commas.

![[Pasted image 20231222140757.png]]

- Open your List rows Dataverse action.
- In the Filter Rows property, add your query as follows `publisher_syncstatus eq 320560000`

![[Pasted image 20231222141048.png]]
When your action runs, it should now filter only the rows where the Choice column value equals new!

