const pbjs = require('protobufjs/cli/pbjs');
const fs = require('fs');
const path = require('path');
const glob =require("glob")
const list = glob.sync('node_server/protobuf/*.proto')
pbjs.main(['--target', 'json-module', '-w', 'commonjs', ...list],
    function(err, output) {
      if (err){
        throw err
      } else{
        fs.writeFileSync(path.resolve(process.cwd() , 'browser-client/src/utils/devtoolProto.js'), output)
      }
    });
