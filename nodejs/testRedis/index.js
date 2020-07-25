let redis = require('redis');

const client = redis.createClient();

client.on('error', function (err) {
    console.log(err)
})

client.set('key1', 'delta', redis.print);

client.get('q', redis.print);