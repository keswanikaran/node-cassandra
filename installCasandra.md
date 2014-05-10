If you don't already have homebrew then install it from below.
http://brew.sh/

Then it as simple as:

brew install cassandra

This doesn't install the python driver for the cqlsh command line tool. To do this first install python:

brew install python

This should have also installed pip - the python package manager - so you can then install the cql python module:

pip install cql

Now try and start cqlsh

You might get this:

Python CQL driver not installed, or not on PYTHONPATH.
You might try "easy_install cql".

One second didn't I just install the cql module?

This could be because the Python in your path is the Mac OS X version. Not the version you installed with home brew that has cql. I fixed this by adding /usr/local/bin to the start of my PATH as that is where the brew Python executable lives:

export PATH=/usr/local/bin/:$PATH

Unless you've started cassandra the next time you try cqlsh you'll get:


cqlsh
Connection error: Could not connect to localhost:9160

Now if you do a brew info on cassandra:

brew info cassandra


To have launchd start cassandra at login:
    ln -sfv /usr/local/opt/cassandra/*.plist ~/Library/LaunchAgents
Then to load cassandra now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist

Unless you are going to use cassandra a lot I wouldn't set it to load on startup as it does use a reasonable amount of memory. Instead to just start it off:

launchctl load /usr/local/opt/cassandra/homebrew.mxcl.cassandra.plist

Finally cqlsh should connect to cassandra:



cqlsh
Connected to Test Cluster at localhost:9160.
[cqlsh 3.0.2 | Cassandra 1.2.5 | CQL spec 3.0.0 | Thrift protocol 19.36.0]
Use HELP for help.
cqlsh>
