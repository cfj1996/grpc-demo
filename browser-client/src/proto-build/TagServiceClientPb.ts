/**
 * @fileoverview gRPC-Web generated client stub for tag
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tag_pb from './tag_pb';


export class TagServiceClient {
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
    '/tag.TagService/add',
    grpcWeb.MethodType.UNARY,
    tag_pb.AddTagRequest,
    tag_pb.AddTagResponse,
    (request: tag_pb.AddTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.AddTagResponse.deserializeBinary
  );

  add(
    request: tag_pb.AddTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.AddTagResponse>;

  add(
    request: tag_pb.AddTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tag_pb.AddTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.AddTagResponse>;

  add(
    request: tag_pb.AddTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tag_pb.AddTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tag.TagService/add',
        request,
        metadata || {},
        this.methodDescriptoradd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tag.TagService/add',
    request,
    metadata || {},
    this.methodDescriptoradd);
  }

  methodDescriptordel = new grpcWeb.MethodDescriptor(
    '/tag.TagService/del',
    grpcWeb.MethodType.UNARY,
    tag_pb.DelTagRequest,
    tag_pb.DelTagResponse,
    (request: tag_pb.DelTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.DelTagResponse.deserializeBinary
  );

  del(
    request: tag_pb.DelTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.DelTagResponse>;

  del(
    request: tag_pb.DelTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tag_pb.DelTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.DelTagResponse>;

  del(
    request: tag_pb.DelTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tag_pb.DelTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tag.TagService/del',
        request,
        metadata || {},
        this.methodDescriptordel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tag.TagService/del',
    request,
    metadata || {},
    this.methodDescriptordel);
  }

  methodDescriptoredit = new grpcWeb.MethodDescriptor(
    '/tag.TagService/edit',
    grpcWeb.MethodType.UNARY,
    tag_pb.EditTagRequest,
    tag_pb.EditTagResponse,
    (request: tag_pb.EditTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.EditTagResponse.deserializeBinary
  );

  edit(
    request: tag_pb.EditTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.EditTagResponse>;

  edit(
    request: tag_pb.EditTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tag_pb.EditTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.EditTagResponse>;

  edit(
    request: tag_pb.EditTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tag_pb.EditTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tag.TagService/edit',
        request,
        metadata || {},
        this.methodDescriptoredit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tag.TagService/edit',
    request,
    metadata || {},
    this.methodDescriptoredit);
  }

  methodDescriptorfind = new grpcWeb.MethodDescriptor(
    '/tag.TagService/find',
    grpcWeb.MethodType.UNARY,
    tag_pb.FindTagRequest,
    tag_pb.FindTagResponse,
    (request: tag_pb.FindTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.FindTagResponse.deserializeBinary
  );

  find(
    request: tag_pb.FindTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.FindTagResponse>;

  find(
    request: tag_pb.FindTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tag_pb.FindTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.FindTagResponse>;

  find(
    request: tag_pb.FindTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tag_pb.FindTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tag.TagService/find',
        request,
        metadata || {},
        this.methodDescriptorfind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tag.TagService/find',
    request,
    metadata || {},
    this.methodDescriptorfind);
  }

  methodDescriptorgetAll = new grpcWeb.MethodDescriptor(
    '/tag.TagService/getAll',
    grpcWeb.MethodType.UNARY,
    tag_pb.GetTagAllRequest,
    tag_pb.GetTagAllResponse,
    (request: tag_pb.GetTagAllRequest) => {
      return request.serializeBinary();
    },
    tag_pb.GetTagAllResponse.deserializeBinary
  );

  getAll(
    request: tag_pb.GetTagAllRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.GetTagAllResponse>;

  getAll(
    request: tag_pb.GetTagAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tag_pb.GetTagAllResponse) => void): grpcWeb.ClientReadableStream<tag_pb.GetTagAllResponse>;

  getAll(
    request: tag_pb.GetTagAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tag_pb.GetTagAllResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tag.TagService/getAll',
        request,
        metadata || {},
        this.methodDescriptorgetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tag.TagService/getAll',
    request,
    metadata || {},
    this.methodDescriptorgetAll);
  }

}

