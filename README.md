<p align="center">
  <br>
  <a href="/">
    <img src="/" width=72 height=72>
  </a>

  <h3 align="center">Server Authentication Boilerplate</h3>

  <p align="center">
    A server side Node.js authentication boilerplate
    <br>
    <a href="/"><strong>website</strong></a>
    <br>
    <br>
    <a href="/">Contribute</a>
    &middot;
    <a href="/">Explore</a>
  </p>
</p>

<br>

## Simple Auth Server

Simple Auth Server is a quick Node.js authentication boilerplate intended to get you up and running with a simple `npm install` command.

Note: This boilerplate is based from Stephen Grider's [Advanced React and Redux](https://www.udemy.com/react-redux-tutorial/learn/v4/overview) course.

## Getting started

Get started by cloning the repository to your local machine

```
$ git clone git@github.com:guylepage3/simple-auth-server.git
```

Start MongoDB server

```
$ mongod
```

Start the backend and client side server as well as connect to the MongoDB database via Mongoose

```
$ npm run dev
```

You should see the following server running

```
Server running on localhost:5000......
MongoDB Connected.....
```


## Mongodb Installation & Setup

Get system username by running

```
$ whoami
```

Set database and directory permissions for you by running the command

```
$ sudo chown -Rv <username> /data/db
# Enter your password
```

Or for global access, run

```
$ sudo chown -r /data/db
# Enter your password
```
