If you use [[Obsidian Publish]] to host your [[Digital Garden]] and want a simple and privacy-focused analytics solution to track how people view your site, you can connect with [[Tinylytics]].

- Create a file named publish.js in your root directory.
- Add the following script to the file.
- Publish the file!

```js
var tinylyticsScript = document.createElement('script');
tinylyticsScript.defer = true;
tinylyticsScript.src = 'https://tinylytics.app/embed/YOUREMBEDCODE.js';
document.head.appendChild(tinylyticsScript);
```

