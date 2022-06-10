import * as jspb from 'google-protobuf'



export class AddTagRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddTagRequest;

  getListid(): string;
  setListid(value: string): AddTagRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagRequest.AsObject;
  static fromObject(obj: AddTagRequest.AsObject): AddTagRequest;
  static toObject(includeInstance: boolean, msg: AddTagRequest): AddTagRequest.AsObject;
  static serializeBinaryToWriter(message: AddTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagRequest;
  static deserializeBinaryFromReader(message: AddTagRequest, reader: jspb.BinaryReader): AddTagRequest;
}

export namespace AddTagRequest {
  export type AsObject = {
    name: string,
    listid: string,
  }
}

export class AddTagResponse extends jspb.Message {
  getId(): string;
  setId(value: string): AddTagResponse;

  getName(): string;
  setName(value: string): AddTagResponse;

  getListid(): string;
  setListid(value: string): AddTagResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagResponse.AsObject;
  static fromObject(obj: AddTagResponse.AsObject): AddTagResponse;
  static toObject(includeInstance: boolean, msg: AddTagResponse): AddTagResponse.AsObject;
  static serializeBinaryToWriter(message: AddTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagResponse;
  static deserializeBinaryFromReader(message: AddTagResponse, reader: jspb.BinaryReader): AddTagResponse;
}

export namespace AddTagResponse {
  export type AsObject = {
    id: string,
    name: string,
    listid: string,
  }
}

export class DelTagRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DelTagRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelTagRequest.AsObject;
  static fromObject(obj: DelTagRequest.AsObject): DelTagRequest;
  static toObject(includeInstance: boolean, msg: DelTagRequest): DelTagRequest.AsObject;
  static serializeBinaryToWriter(message: DelTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelTagRequest;
  static deserializeBinaryFromReader(message: DelTagRequest, reader: jspb.BinaryReader): DelTagRequest;
}

export namespace DelTagRequest {
  export type AsObject = {
    id: string,
  }
}

export class DelTagResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DelTagResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelTagResponse.AsObject;
  static fromObject(obj: DelTagResponse.AsObject): DelTagResponse;
  static toObject(includeInstance: boolean, msg: DelTagResponse): DelTagResponse.AsObject;
  static serializeBinaryToWriter(message: DelTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelTagResponse;
  static deserializeBinaryFromReader(message: DelTagResponse, reader: jspb.BinaryReader): DelTagResponse;
}

export namespace DelTagResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class EditTagRequest extends jspb.Message {
  getId(): string;
  setId(value: string): EditTagRequest;

  getName(): string;
  setName(value: string): EditTagRequest;

  getListid(): string;
  setListid(value: string): EditTagRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTagRequest.AsObject;
  static fromObject(obj: EditTagRequest.AsObject): EditTagRequest;
  static toObject(includeInstance: boolean, msg: EditTagRequest): EditTagRequest.AsObject;
  static serializeBinaryToWriter(message: EditTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTagRequest;
  static deserializeBinaryFromReader(message: EditTagRequest, reader: jspb.BinaryReader): EditTagRequest;
}

export namespace EditTagRequest {
  export type AsObject = {
    id: string,
    name: string,
    listid: string,
  }
}

export class EditTagResponse extends jspb.Message {
  getId(): string;
  setId(value: string): EditTagResponse;

  getName(): string;
  setName(value: string): EditTagResponse;

  getListid(): string;
  setListid(value: string): EditTagResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTagResponse.AsObject;
  static fromObject(obj: EditTagResponse.AsObject): EditTagResponse;
  static toObject(includeInstance: boolean, msg: EditTagResponse): EditTagResponse.AsObject;
  static serializeBinaryToWriter(message: EditTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTagResponse;
  static deserializeBinaryFromReader(message: EditTagResponse, reader: jspb.BinaryReader): EditTagResponse;
}

export namespace EditTagResponse {
  export type AsObject = {
    id: string,
    name: string,
    listid: string,
  }
}

export class FindTagRequest extends jspb.Message {
  getId(): string;
  setId(value: string): FindTagRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindTagRequest.AsObject;
  static fromObject(obj: FindTagRequest.AsObject): FindTagRequest;
  static toObject(includeInstance: boolean, msg: FindTagRequest): FindTagRequest.AsObject;
  static serializeBinaryToWriter(message: FindTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindTagRequest;
  static deserializeBinaryFromReader(message: FindTagRequest, reader: jspb.BinaryReader): FindTagRequest;
}

export namespace FindTagRequest {
  export type AsObject = {
    id: string,
  }
}

export class FindTagResponse extends jspb.Message {
  getId(): string;
  setId(value: string): FindTagResponse;

  getName(): string;
  setName(value: string): FindTagResponse;

  getListid(): string;
  setListid(value: string): FindTagResponse;

  getList(): List | undefined;
  setList(value?: List): FindTagResponse;
  hasList(): boolean;
  clearList(): FindTagResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindTagResponse.AsObject;
  static fromObject(obj: FindTagResponse.AsObject): FindTagResponse;
  static toObject(includeInstance: boolean, msg: FindTagResponse): FindTagResponse.AsObject;
  static serializeBinaryToWriter(message: FindTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindTagResponse;
  static deserializeBinaryFromReader(message: FindTagResponse, reader: jspb.BinaryReader): FindTagResponse;
}

export namespace FindTagResponse {
  export type AsObject = {
    id: string,
    name: string,
    listid: string,
    list?: List.AsObject,
  }
}

export class GetTagAllRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetTagAllRequest;
  hasPage(): boolean;
  clearPage(): GetTagAllRequest;

  getPagesize(): number;
  setPagesize(value: number): GetTagAllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagAllRequest.AsObject;
  static fromObject(obj: GetTagAllRequest.AsObject): GetTagAllRequest;
  static toObject(includeInstance: boolean, msg: GetTagAllRequest): GetTagAllRequest.AsObject;
  static serializeBinaryToWriter(message: GetTagAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTagAllRequest;
  static deserializeBinaryFromReader(message: GetTagAllRequest, reader: jspb.BinaryReader): GetTagAllRequest;
}

export namespace GetTagAllRequest {
  export type AsObject = {
    page?: number,
    pagesize: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 1,
  }
}

export class GetTagAllResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): GetTagAllResponse;

  getDataList(): Array<Tag>;
  setDataList(value: Array<Tag>): GetTagAllResponse;
  clearDataList(): GetTagAllResponse;
  addData(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagAllResponse.AsObject;
  static fromObject(obj: GetTagAllResponse.AsObject): GetTagAllResponse;
  static toObject(includeInstance: boolean, msg: GetTagAllResponse): GetTagAllResponse.AsObject;
  static serializeBinaryToWriter(message: GetTagAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTagAllResponse;
  static deserializeBinaryFromReader(message: GetTagAllResponse, reader: jspb.BinaryReader): GetTagAllResponse;
}

export namespace GetTagAllResponse {
  export type AsObject = {
    count: number,
    dataList: Array<Tag.AsObject>,
  }
}

export class Tag extends jspb.Message {
  getId(): string;
  setId(value: string): Tag;

  getName(): string;
  setName(value: string): Tag;

  getListid(): string;
  setListid(value: string): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static fromObject(obj: Tag.AsObject): Tag;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    id: string,
    name: string,
    listid: string,
  }
}

export class List extends jspb.Message {
  getId(): string;
  setId(value: string): List;

  getTitle(): string;
  setTitle(value: string): List;

  getContent(): string;
  setContent(value: string): List;

  getCreatedat(): string;
  setCreatedat(value: string): List;

  getUpdatedat(): string;
  setUpdatedat(value: string): List;

  getTagList(): Array<Tag>;
  setTagList(value: Array<Tag>): List;
  clearTagList(): List;
  addTag(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List.AsObject;
  static fromObject(obj: List.AsObject): List;
  static toObject(includeInstance: boolean, msg: List): List.AsObject;
  static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List;
  static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
  export type AsObject = {
    id: string,
    title: string,
    content: string,
    createdat: string,
    updatedat: string,
    tagList: Array<Tag.AsObject>,
  }
}

