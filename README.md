# Scaling State

[**UpRing**][upring] provides application-level sharding, based on node.js streams. UpRing allocates some resources to a node, based on the hash of a `key`, and allows you to query the node using a request response pattern (based on JS objects) which can embed streams.

[**UpRing**][upring] simplifies the implementation and deployment of a cluster of nodes using a gossip membership protocol and a [consistent hashing](https://en.wikipedia.org/wiki/Consistent_hashing) scheme (see [swim-hashring](https://github.com/mcollina/swim-hashring)). It uses [tentacoli](https://github.com/mcollina/tentacoli) as a transport layer.

## View slides locally

First, ensure you have the following installed:

1. [Node.js](http://nodejs.org)
2. [Bower](http://bower.io): `$ npm install -g bower`
3. [Gulp](http://gulpjs.com): `$ npm install -g gulp`

Then, install dependencies and run the preview server:

```bash
$ npm install && bower install
$ gulp serve
```

[upring]: https://github.com/mcollina/upring
