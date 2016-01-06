var fs = Npm.require('fs');
var env = Npm.require('node-env-file');

// var rootPath =__dirname + '/';
var rootPath =process.env.PWD + '/';

var path =rootPath + ".env";
if(fs.existsSync(path)) {
  env(path);
}

// e.g. ENV_FILE_PATH=.env2
if(process.env.ENV_FILE_PATH) {
  path =rootPath + process.env.ENV_FILE_PATH;
  if(fs.existsSync(path)) {
    env(path, {overwrite: true});
  }
}