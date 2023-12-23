I wanted to hide the Backlinks component from my [[Quartz]] home page. I don't need to show them there.

To accomplish this:
1. In your code editor, browse to the quartz > components > Backlinks.tsx file.
2. Add the following code, somewhere around line 9.
```js
if (fileData.slug === "index") { // Hide if on the home page
	return <></>
}
```

Here is a larger snippet from my Backlinks.tsx file, as an example.

```js
function Backlinks({ fileData, allFiles, displayClass }: QuartzComponentProps) {

const slug = simplifySlug(fileData.slug!)
const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))
  
if (fileData.slug === "index") { // Hide if on the home page
	return <></>
}
return (

```