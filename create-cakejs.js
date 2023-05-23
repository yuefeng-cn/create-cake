#!/usr/bin/env node

'use strict';

if (process.argv.slice(2).every(function (item) {
  return !item.startsWith('--package=');
})) {
  process.argv.push('--package=egg-cakejs-boilerplate');
}

require('egg-init/bin/egg-init');
