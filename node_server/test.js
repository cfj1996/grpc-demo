const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const listPackageDefinition = protoLoader.loadSync(
    path.join(__dirname, './protobuf/list.proto'),
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
);
const obj = grpc.loadPackageDefinition(listPackageDefinition)
console.log('obj', listPackageDefinition);
