'use strict'

const UpRingKV = require('upring-kv')
var dockerNames = require('docker-names')

const args = require('minimist')(process.argv.slice(2), {
  boolean: ['help', 'verbose'],
  default: {
    port: 0,
    points: 100,
    timeout: 200,
    verbose: false
  },
  alias: {
    port: 'p',
    points: 'P',
    timeout: 't',
    verbose: 'V'
  }
})

const db = UpRingKV({
  base: args._,
  logLevel: args.verbose ? 'debug' : 'info',
  client: true,
  hashring: {
    replicaPoints: args.points,
    joinTimeout: args.timeout
  }
})

db.upring.on('up', function () {
  setInterval(function () {
    var name = '/' + dockerNames.getRandomName()
    var value = {
      contentType: 'text/plain',
      value: 'hello ' + name
    }
    db.put(name, value, function (err) {
      db.logger.info('published %s %j', name, value)
    })
  }, 1000)
})
