I wanted to show Recent Notes on my [[Quartz]] home page, but no other page.

To accomplish this:
1. In your code editor, browse to the quartz > components > RecentNotes.tsx file.
2. Add the following code, somewhere around line 29.
```js
if (fileData.slug !== "index") { // Show only on the home page
return <></>
}
```

Here is a larger snippet from my RecentNotes.tsx file, as an example.
```js
export default ((userOpts?: Partial<Options>) => {

function RecentNotes({ allFiles, fileData, displayClass, cfg }: QuartzComponentProps) {
const opts = { ...defaultOptions(cfg), ...userOpts }

if (fileData.slug !== "index") { // Show only on the home page
return <></>
}

const pages = allFiles.filter(opts.filter).sort(opts.sort)
const remaining = Math.max(0, pages.length - opts.limit)
```