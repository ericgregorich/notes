---
tags:
  - power-platform
---
If your Power Apps use an external data source, such as SQL, a secure connection will be created for each user with access to the app. This connection allows them to access the SQL database. However, once this connection is established, the user could potentially use the same connection in their apps to gain access to data that is not intended.

Secure Implicit Connections create a hidden proxy, enabling users to connect to the data source without creating a connection they can use elsewhere. This is much more secure and should be enabled immediately.