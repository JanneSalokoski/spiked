#!/bin/bash

cp -R src/Template src/$1
sed -i .bak s/Template/$1/g src/$1/*
rm src/$1/*.bak

