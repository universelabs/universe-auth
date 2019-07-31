<div align="center">
  <h3>Universe Authentication Server [beta]</h3>
  <p>
    Universe Auth Server is a server side Node.js authentication server.
    <br/>
    <a href="https://universe.engineering">
      <strong>universe.engineering</strong>
    </a>
  </p>
  <p>
    <a href="https://github.com/universelabs/universe-auth/issues/new?labels=&template=bug_report.md" alt="Report a Bug (universe.engineering)">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/universelabs/universe-auth/issues/new?labels=&template=feature_request.md" alt="Request feature (universe.engineering)">
      Request feature
    </a>
    &middot;
    <a href="https://medium.com/universelabs" alt="UniverseLabs – Medium">
      Medium
    </a>
    &middot;
    <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE">
      Slack
    </a>
    <br/>
    <br/>
    <a href="https://twitter.com/intent/follow?screen_name=universelabs">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/universelabs.svg?style=social&label=Follow%20%40universelabs&logo=twitter" alt="follow on Twitter" />
    </a>
    &middot;
    <a href="https://github.com/universelabs/universe-auth/stargazers">
      <img src="https://img.shields.io/github/stars/universelabs/universe-auth.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo" />
    </a>
  </p>
</div>

<br/>

## Table of contents

- [Status](#status)
- [Getting started](#getting-started)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Community](#community)
- [Maintainers](#maintainers)
- [License](#license)

## Status

[![Slack](https://img.shields.io/badge/Community-Join_the_Slack!-purple.svg?colorA=212121&colorB=3f46ad)](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE)

[![universe-auth version](https://img.shields.io/badge/dynamic/json.svg?label=Version&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Funiverse-auth%2Fmaster%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%2300BB00)](https://github.com/universelabs/universe-auth/blob/master/package.json)
[![dependencies status](https://img.shields.io/david/universelabs/universe-auth.svg?label=dependencies&colorA=%23212121)](https://david-dm.org/universelabs/universe-auth)
[![devDependencies status](https://img.shields.io/david/dev/universelabs/universe-auth.svg?label=devDependencies&colorA=%23212121)](https://david-dm.org/universelabs/universe-auth?type=dev)

## Getting started

Get started by cloning the repository to your local machine

```
$ git clone git@github.com:universelabs/universe-auth.git
```

Install [`npm`](https://www.npmjs.com/get-npm). `npm` is installed and comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/)

```
$ brew install node
```

Next, you will need a `config/dev.js` file to hold the environment variable for `universe-auth` server. First create the file by running

```
$ touch config/dev.js
```

Add the localhost address and port to the `config/dev.js`.

```
module.exports = {
  authServer: 'https://localhost:5000'
};
```

Add dependencies for the [Express.js](https://expressjs.com/) server

```
$ npm install
```

Start the authentication server

```
$ npm start
```

You should see the following server running

```
Server running on localhost:5000......
MongoDB Connected.....
```

## Contributing

Please read through our [contributing guidelines](https://github.com/universelabs/universe/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you
must include relevant unit tests. All code should conform to the [Code Guidelines](https://github.com/universelabs/universe/blob/master/CONTRIBUTING.md#code-guidelines).

## Roadmap

Universe Labs' mission is to become the largest key management network.

[› Universe Roadmap](https://github.com/universelabs/universe/blob/master/ROADMAP.md)

View the Universe Roadmap to learn more about project overview, goals, execution to date, milestones, current tech stack, and more...

## Community

Get updates on Universe's development and chat with the project maintainers and community members.

- Subscribe to the [Universe Newsletter](http://universe.engineering/subscribe)
- [Star the repo](https://github.com/universelabs/universe/stargazers)
- Follow [@universelabs](https://twitter.com/universelabs) on Twitter.
- Join the official Universe [Slack](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE).

## Maintainers

**Guy Lepage**

- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>

**Modestos Kaffes**

- <https://twitter.com/modkaffes>
- <https://github.com/modkaffes>

**Dan Trevino**

- <https://twitter.com/dantrevino>
- <https://github.com/dantrevino>

## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE).

<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>
