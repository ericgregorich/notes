---
description: An example of how to validate email address in Canvas Power Apps using the IsMatch function.

---
A common request when building Power Apps is to validate the email address of a textbox. This can be done easily using the [IsMatch](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-ismatch?ref=thepowerarchitect.com) function. The function also does all kinds of validation using regular expressions. The Match.Email property can be used to check if it’s a valid email automatically.

```js
If(
    IsMatch(
        txtValidationEmail.Text,
        Match.Email
    ),
    true // The email address is valid
    false // The email address is not valid
)
```

Here is an example of a TextInput and Icon control on the screen. The icon control shows a red error icon if the email is invalid and a green checkbox if it is valid.

![A red error icon after an invalid email address.](image-2.webp)

The text is not a valid email address and shows the red error icon.

![A green checkbox next to a valid email address.](image-1.webp)

The text is a valid email address that shows the green check icon.

In the Icons `Icon` property, add the following.

```js
If(
    IsMatch(
        txtValidationEmail.Text,
        Match.Email
    ),
    Icon.CheckBadge,
    Icon.Error
)
```

Now, in the Icon’s `Color` property, add the following.

```js
If(
    Self.Icon=Icon.Error,
    RGBA(168,0,0,1),
    RGBA(141,198,63,1)
)
```