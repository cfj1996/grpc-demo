/**
 * @fileoverview gRPC-Web generated client stub for grpc.testing
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.3.1
// 	protoc              v3.21.1
// source: messages.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as messages_pb from './messages_pb';


export class TestServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetName = new grpcWeb.MethodDescriptor(
    '/grpc.testing.TestService/GetName',
    grpcWeb.MethodType.UNARY,
    messages_pb.GetNameRequest,
    messages_pb.GetNameResponse,
    (request: messages_pb.GetNameRequest) => {
      return request.serializeBinary();
    },
    messages_pb.GetNameResponse.deserializeBinary
  );

  getName(
    request: messages_pb.GetNameRequest,
    metadata: grpcWeb.Metadata | null): Promise<messages_pb.GetNameResponse>;

  getName(
    request: messages_pb.GetNameRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: messages_pb.GetNameResponse) => void): grpcWeb.ClientReadableStream<messages_pb.GetNameResponse>;

  getName(
    request: messages_pb.GetNameRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: messages_pb.GetNameResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc.testing.TestService/GetName',
        request,
        metadata || {},
        this.methodDescriptorGetName,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc.testing.TestService/GetName',
    request,
    metadata || {},
    this.methodDescriptorGetName);
  }

}

