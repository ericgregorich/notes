---
tags:
  - power-platform
---
We can easily search all users in the tenant by adding the Office365Users connector to our Microsoft [[Microsoft Power Apps|Power Apps]].

- Add Office365Users data connector.
- Add a ComboBox control.
- Enable searching in the ComboBox control.
- In the Items property of the ComboBox control, add the following formula.

```JSON
Office365Users.SearchUser({searchTerm:Self.SearchText, top: 20})
```

When the user searches in the Combobox, it will search all the users in Office 365 (using their Display Name by default).

We can also show additional fields in the ComboBox control, which can help find the correct user.

- Select the Fields property, and click Edit.
- Change the Layout to Double.
- Select the Primary Text and Secondary Text fields that you want to show. You can also change the SearchField here.