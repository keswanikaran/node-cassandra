var helenus = require('helenus'),
pool = new helenus.ConnectionPool({
    hosts      : ['localhost:9160'],
    keyspace   : 'testkeyspace',
//    user       : 'test',
//    password   : 'test1233',
    timeout    : 3000
    //cqlVersion : '3.0.0' // specify this if you're using Cassandra 1.1 and want to use CQL 3
});

pool.on('error', function(err){
    console.error(err.name, err.message);
});

pool.connect(function(err, keyspace){
    if(err){
        throw(err);
    } else {

        pool.cql("select fname, lname from users", function(err, results){
            if(err){Console.log('There was an error getting the data.')};
            for(var key in results){
                console.log('Welcome ' + results[key]['0'].value +' ' + results[key]['1'].value );
            }
        });
    }
});