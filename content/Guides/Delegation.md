[[Microsoft Power Apps|Power Apps]] can connect to many data sources and use the data in various ways. However, Power Apps will not be able to return all items at once. By default, Power Apps will be able to process 500 items from a Data Source. This can be changed to at most 2000 items through the app settings.

This does not mean your limited to 2000 items though. When this limit is hit, Power Apps depends on the Data Source to do the heavy lifting rather than doing it through the app itself. This works great for many data sources, like SQL, Dataverse, and more, but some data sources do not handle it well, including Microsoft SharePoint.

> _Delegation_ is where the expressiveness of Power Apps formulas meets the need to minimize data moving over the network. In short, Power Apps will delegate the processing of data to the data source, rather than moving the data to the app for processing locally. [^1]

[^1]: [Understand delegation in a canvas app. Learn](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview)
