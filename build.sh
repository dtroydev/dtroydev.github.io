#!/bin/bash

js1=$(head -2 .sourcename | tail -1)
js2=$(head -4 .sourcename | tail -1)

babel $js1 -o $js2                                                                && \
javascript-obfuscator $js2 --output assets/js/e.js --config 'obfuscatorconfig.js' && \
rm $js2                                                                           && \
git commit -am 'init'                                                             && \
git squashpush
