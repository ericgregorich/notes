[Quartz](https://quartz.jzhao.xyz) is a static site generator originally built for people using [[Obsidian]] as an alternative to [[Obsidian Publish]] for publishing their markdown files to the web.

## Prerequisites
Quartz requires Node v18.14 or above. I like to use [[NVM]] to manage my [[Node.js]] installations on my machine. 

## Installing Quartz
The initial installation of Quartz consists of cloning the repo, installing, and then building.[^1]
- `git clone https://github.com/jackyzha0/quartz.git`
- `cd quartz`
- `npm i`
- `npx quartz create`

## Running Quartz locally
We can run Quartz locally to see how our notes will render before publishing. [^2]

- Open your favorite terminal.
- Navigate to your Quartz directory.
- Run `npx quartz build --serve`
- View your local site in your browse at http://localhost:8080




[^1]: [Installing Quartz 4](https://quartz.jzhao.xyz/#-get-started)
[^2]: [Building your Quartz](https://quartz.jzhao.xyz/build)
