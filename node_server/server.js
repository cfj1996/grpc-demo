const path = require('path');
const assert = require('assert');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const listService = require('./server/list');
const tagService = require('./server/tag');
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
const tagPackageDefinition = protoLoader.loadSync(
    path.join(__dirname, './protobuf/tag.proto'),
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
);

const listProtoDescriptor = grpc.loadPackageDefinition(listPackageDefinition);
const tagProtoDescriptor = grpc.loadPackageDefinition(tagPackageDefinition);

const list = listProtoDescriptor.list;
const tag = tagProtoDescriptor.tag;

const server = new grpc.Server();
server.addService(list.ListService.service, listService);

server.addService(tag.TagService.service, tagService);
server.bindAsync(
    '0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
      console.log('port', port);
      assert.ifError(err);
      server.start();
    });

