# React Locale Module

This module is a small localisation library written in TypeScript that I coded for my own React projects. It makes use of little JSON files that create contexts which in turn may be used to localise either a single component at a time or the entire application through one file; it's up to the developer to choose how fine the grain is.

It also comes with a handy set of DevTools that aid in the creation of these JSON localisation files, debugging the locale engine itself, and understanding how the engine interacts with your application.

**Warning: this module is opinative with regards to stack. For now it needs, at least, styled-components to work. If you want to use the development tools, you'll also need styled-icons.**

# Installation

This module is not available on npm, as it is more of a personal project. Thus, you'll need to clone it locally in a local dependencies directory of sorts, and provide it along with your final package.

You have the choice of cloning the repository and using a release branch to immediately use the module in your own application, or building from the source code yourself. If you choose to use a release branch, do this:

```
cd path/to/your/dependencies/repository
git clone https://github.com/morezco/react-locale-module.git locale
cd locale
git checkout release/1.0.0
git pull
```

Then, to use the module in your application:

```
cd path/to/your/application
yarn add locale@file:path/to/modules/directory/locale
```

And you're golden.

If you want to read the source code, modify it or build your own version for any reason, I provide, along with the source code, a `build.sh` file that will:

- Compile the source code you just cloned into a `build` directory at the `root` of the module
- Create a `_builds` directory one level above (in your dependencies directory)
- Copy the contents of the build into `_builds/locale`, along with the `package.json` file. The resulting `_builds/locale` directory is your usable node_modules-style package. If you desire to use this file, then installation is as simple as the following command. Feel free to change `build.sh` if that's your preference.

```
cd path/to/your/modules/directory
git clone https://github.com/morezco/react-locale-module.git locale
cd locale
yarn build
```
