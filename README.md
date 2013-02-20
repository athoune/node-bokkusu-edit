Bokkusu edit
============

Edit bokkusu data from the web.

Bokkusu, box in japanese, is a simple abstraction to store json values with keys.

This project provides _express_ helper to build a REST API and web frontend with
a _jsonmate_ and a _yaml_ editor.

The express app is only for demo purpose, you should require this library
and build your own app (don't forget to authenticate users).

Try it
------

    node app.js

Open http://localhost:3000

When you save something, you can see it on the db :

    cat demo/sample.json

Licence
-------

MIT © 2013 Mathieu Lecarme.
