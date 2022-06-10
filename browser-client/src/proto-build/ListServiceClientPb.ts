/**
 * @fileoverview gRPC-Web generated client stub for list
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as list_pb from './list_pb';


export class ListServiceClient {
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

  methodDescriptoradd = new grpcWeb.MethodDescriptor(
    '/list.ListService/add',
    grpcWeb.MethodType.UNARY,
    list_pb.AddListRequest,
    list_pb.AddListResponse,
    (request: list_pb.AddListRequest) => {
      return request.serializeBinary();
    },
    list_pb.AddListResponse.deserializeBinary
  );

  add(
    request: list_pb.AddListRequest,
    metadata: grpcWeb.Metadata | null): Promise<list_pb.AddListResponse>;

  add(
    request: list_pb.AddListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: list_pb.AddListResponse) => void): grpcWeb.ClientReadableStream<list_pb.AddListResponse>;

  add(
    request: list_pb.AddListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: list_pb.AddListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/list.ListService/add',
        request,
        metadata || {},
        this.methodDescriptoradd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/list.ListService/add',
    request,
    metadata || {},
    this.methodDescriptoradd);
  }

  methodDescriptordel = new grpcWeb.MethodDescriptor(
    '/list.ListService/del',
    grpcWeb.MethodType.UNARY,
    list_pb.DelListRequest,
    list_pb.DelListResponse,
    (request: list_pb.DelListRequest) => {
      return request.serializeBinary();
    },
    list_pb.DelListResponse.deserializeBinary
  );

  del(
    request: list_pb.DelListRequest,
    metadata: grpcWeb.Metadata | null): Promise<list_pb.DelListResponse>;

  del(
    request: list_pb.DelListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: list_pb.DelListResponse) => void): grpcWeb.ClientReadableStream<list_pb.DelListResponse>;

  del(
    request: list_pb.DelListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: list_pb.DelListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/list.ListService/del',
        request,
        metadata || {},
        this.methodDescriptordel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/list.ListService/del',
    request,
    metadata || {},
    this.methodDescriptordel);
  }

  methodDescriptoredit = new grpcWeb.MethodDescriptor(
    '/list.ListService/edit',
    grpcWeb.MethodType.UNARY,
    list_pb.EditListRequest,
    list_pb.EditListResponse,
    (request: list_pb.EditListRequest) => {
      return request.serializeBinary();
    },
    list_pb.EditListResponse.deserializeBinary
  );

  edit(
    request: list_pb.EditListRequest,
    metadata: grpcWeb.Metadata | null): Promise<list_pb.EditListResponse>;

  edit(
    request: list_pb.EditListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: list_pb.EditListResponse) => void): grpcWeb.ClientReadableStream<list_pb.EditListResponse>;

  edit(
    request: list_pb.EditListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: list_pb.EditListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/list.ListService/edit',
        request,
        metadata || {},
        this.methodDescriptoredit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/list.ListService/edit',
    request,
    metadata || {},
    this.methodDescriptoredit);
  }

  methodDescriptorfind = new grpcWeb.MethodDescriptor(
    '/list.ListService/find',
    grpcWeb.MethodType.UNARY,
    list_pb.FindListRequest,
    list_pb.FindListResponse,
    (request: list_pb.FindListRequest) => {
      return request.serializeBinary();
    },
    list_pb.FindListResponse.deserializeBinary
  );

  find(
    request: list_pb.FindListRequest,
    metadata: grpcWeb.Metadata | null): Promise<list_pb.FindListResponse>;

  find(
    request: list_pb.FindListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: list_pb.FindListResponse) => void): grpcWeb.ClientReadableStream<list_pb.FindListResponse>;

  find(
    request: list_pb.FindListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: list_pb.FindListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/list.ListService/find',
        request,
        metadata || {},
        this.methodDescriptorfind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/list.ListService/find',
    request,
    metadata || {},
    this.methodDescriptorfind);
  }

  methodDescriptorgetAll = new grpcWeb.MethodDescriptor(
    '/list.ListService/getAll',
    grpcWeb.MethodType.UNARY,
    list_pb.GetListAllRequest,
    list_pb.GetListAllResponse,
    (request: list_pb.GetListAllRequest) => {
      return request.serializeBinary();
    },
    list_pb.GetListAllResponse.deserializeBinary
  );

  getAll(
    request: list_pb.GetListAllRequest,
    metadata: grpcWeb.Metadata | null): Promise<list_pb.GetListAllResponse>;

  getAll(
    request: list_pb.GetListAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: list_pb.GetListAllResponse) => void): grpcWeb.ClientReadableStream<list_pb.GetListAllResponse>;

  getAll(
    request: list_pb.GetListAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: list_pb.GetListAllResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/list.ListService/getAll',
        request,
        metadata || {},
        this.methodDescriptorgetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/list.ListService/getAll',
    request,
    metadata || {},
    this.methodDescriptorgetAll);
  }

}

