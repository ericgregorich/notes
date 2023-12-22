---
description: The Power Apps With Function is a powerful way to divide complex formulas into smaller pieces.
tags:
  - power-platform
---
The [[Microsoft Power Apps|Power Apps]] [With function](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-with) is a powerful way to divide complex formulas into smaller pieces. It is useful when used within a ForAll, since we can’t set variables within a ForAll. Since the formula is contained, it is preferred over context variables created using UpdateContext or global variables created using Set.


> [!NOTE] Recommendation
> I recommend using the With Function over using global variables (Set function) or even local variables (UpdateContext). Overall, it’s much cleaner and more efficient.

The syntax looks like this:

```json
With(
 { 
   myValue1: //add some logic
 },
 //Do something with the myValue1result
)
```

You can also have nested With functions.

```json
With(
 { 
   myValue1: //add some logic
 },
  With(
  {
   myValue2: // do something with myValue1
  },
  //Do something with myValue2
)
```

Or even run the With function within a ForAll. You can also run ForEach within the With function itself.

```json
ForAll(galMyItems.AllItems As galSelectedItem, 
 With(
 {
   myValue1: //add some logic with galSelectedItem
 },
 //Do something with the myValue1result
 )
)
```