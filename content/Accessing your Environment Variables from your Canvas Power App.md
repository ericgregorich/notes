---
tags:
  - power-platform
---
Environment Variables allow you to define values that can be changed between different environments. This is especially helpful when deploying a Solution between Dev, Testing, and Production environments. The Environment Variables act as a configuration for the solution that can be different in each environment. This is how we can access those variables from our canvas [[Microsoft Power Apps|Power Apps]].

## Add an Environment Variable to your Solution

* Browse to your Solution.
* Select New > More > Environment Variable.
* Fill out the Panel with your details. For this example, I'm adding a simple text Data Type.

![[image-5.png]]

## Add the variable to your Power App

* Edit your Canvas App.
* Open the Data panel and add the `Environment Variable Definitions` and the `Environment Variable Values` data sources.

![[Assets/eea5eb811feeb0af0258a1f6d2ec866f_MD5.jpeg]]

* Add a text label to your screen.
* In the Text property of your label to the following, update the Schema Name to the name of the variable you created (not the Display Name).

```json
LookUp(
 'Environment Variable Values',
 'Environment Variable Definition'.'Schema Name' = "demo_DemoTextVariable",
 Value
)
```

* Your label should now display the value you added to the Environment Variable!

![[Assets/8cbd6abc519b0420f9de7fb0120c8bdf_MD5.jpeg]]
