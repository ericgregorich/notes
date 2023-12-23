When using [[Quartz]], the default template has a left and right sidebar on larger desktop displays. When you shrink the display size a bit, the side bars disappear and the layout reorganizes a bit to show site title and search above the content, the Graph, and Backlinks components below the content.

If we want to always use the smaller layout and never show the sidebars, we can update our template [[CSS]] to do so.

Add the following CSS to the custom.scss file in the quartz > styles directory. We're taking the CSS elements in the @media queries in the base.scss and moving them out of the @media element.

```css
@use "./base.scss";
@use "./variables.scss" as *; 

#quartz-body {
	width: $pageWidth !important;
	display: flex !important;
	flex-direction: column !important;
	margin: auto;
}

.page > #quartz-body .sidebar {
	position: initial !important;
	flex-direction: row !important;
	padding: 0 !important;
	width: initial !important;
	margin-top: 2rem !important;
}

#quartz-body .left {
	left: calc(calc(100vw - $pageWidth) / 2 - $sidePanelWidth);
	gap: 0 !important;
	align-items: center !important;
}

#quartz-body .right {
	right: calc(calc(100vw - $pageWidth) / 2 - $sidePanelWidth);
& > * {
	flex: 1 !important;
	}
}

.page-header {
	width: initial !important;
	margin-top: 2rem !important;
}
.center,footer {
	width: $pageWidth !important;
}
```