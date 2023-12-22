As a developer who relies on [[Node.js|Node.js]], we run into the issue of having different applications that need different version of Node to run. This is where NVM comes in. NVM (Node Version Manager) makes it easy to install multiple versions of Node.js on your machine and switch between them as needed.

## Installing NVM
### Mac
- Open your terminal.
- Run `brew install nvm`
### Windows
Download and install the latest release of [nvm-windows](https://github.com/coreybutler/nvm-windows).

## Using NVM
Use `nvm --help` to find all of the options available. I use the basics.

### Install a specific version
```shell
nvmm install [<version>]
```

### Show the current version
```Shell
nvm current
```
### Use a specific version
```shell
nvm use [<version>]
```