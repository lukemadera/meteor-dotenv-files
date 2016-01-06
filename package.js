Package.describe({
  name: 'lukemadera:dotenv-files',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Load environment variables from file and allow overwriting from a different file.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lukemadera/meteor-dotenv-files',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "node-env-file": "0.1.8"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'dotenv-files.js'
  ], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lukemadera:dotenv-files');
  api.addFiles('dotenv-files-tests.js');
});
