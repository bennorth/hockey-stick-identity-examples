#!/bin/bash

set -e

mkdir -p docs

pandoc --css=styling.css \
       -s \
       -f markdown+smart \
       --to=html5 \
       notes.md \
       -o docs/index.html

cp styling.css twelve-days.css custom-styles.css *.js images/*.jpg docs

