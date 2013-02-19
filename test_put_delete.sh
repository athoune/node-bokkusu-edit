#!/bin/sh

curl -XPUT http://localhost:3000/data/bob -d @demo/bob.json -v -H "Content-type: application/json"
curl -XDELETE http://localhost:3000/data/bob -v
