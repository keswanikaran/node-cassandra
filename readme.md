CRUD operations using node and cassandra.

PREREQUISITES :
Following should be installed.
1. Cassandra. (Please check installCasandra.md for installing Cassandra on Mac)
2. Node to be installed

Create some data in cassandra using cqlsh.

cqlsh> DESCRIBE keyspaces;

system  system_traces

cqlsh> CREATE KEYSPACE mykeyspace WITH REPLICATION = {'class' : 'SimpleStrategy', 'replication_factor' : 2 };
cqlsh> DESCRIBE keyspaces;

system  mykeyspace  system_traces

cqlsh> USE mykeyspace
   ... CREATE TABLE users ( user_id int PRIMARY KEY, fname text, lname text );Improper USE command.
cqlsh>
cqlsh>
cqlsh> DESCRIBE keyspaces;

system  mykeyspace  system_traces

cqlsh> USE mykeyspace;
cqlsh:mykeyspace> CREATE TABLE users ( user_id int PRIMARY KEY, fname text, lname text );
cqlsh:mykeyspace> DESCRIBE TABLES;

users

cqlsh:mykeyspace> INSERT INTO users (user_id,  fname, lname)
              ...   VALUES (1745, 'john', 'smith');
cqlsh:mykeyspace> INSERT INTO users (user_id,  fname, lname)
              ...   VALUES (1744, 'john', 'doe');
cqlsh:mykeyspace> INSERT INTO users (user_id,  fname, lname)
              ...   VALUES (1746, 'john', 'smith');
cqlsh:mykeyspace> SELECT * FROM users;

 user_id | fname | lname
---------+-------+-------
    1745 |  john | smith
    1744 |  john |   doe
    1746 |  john | smith
