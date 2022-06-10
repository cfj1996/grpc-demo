import * as jspb from 'google-protobuf'



export class AddListRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): AddListRequest;

  getContent(): string;
  setContent(value: string): AddListRequest;

  getTagsList(): Array<LinkAddTag>;
  setTagsList(value: Array<LinkAddTag>): AddListRequest;
  clearTagsList(): AddListRequest;
  addTags(value?: LinkAddTag, index?: number): LinkAddTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddListRequest.AsObject;
  static fromObject(obj: AddListRequest.AsObject): AddListRequest;
  static toObject(includeInstance: boolean, msg: AddListRequest): AddListRequest.AsObject;
  static serializeBinaryToWriter(message: AddListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddListRequest;
  static deserializeBinaryFromReader(message: AddListRequest, reader: jspb.BinaryReader): AddListRequest;
}

export namespace AddListRequest {
  export type AsObject = {
    title: string,
    content: string,
    tagsList: Array<LinkAddTag.AsObject>,
  }
}

export class LinkAddTag extends jspb.Message {
  getName(): string;
  setName(value: string): LinkAddTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkAddTag.AsObject;
  static fromObject(obj: LinkAddTag.AsObject): LinkAddTag;
  static toObject(includeInstance: boolean, msg: LinkAddTag): LinkAddTag.AsObject;
  static serializeBinaryToWriter(message: LinkAddTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkAddTag;
  static deserializeBinaryFromReader(message: LinkAddTag, reader: jspb.BinaryReader): LinkAddTag;
}

export namespace LinkAddTag {
  export type AsObject = {
    name: string,
  }
}

export class AddListResponse extends jspb.Message {
  getId(): string;
  setId(value: string): AddListResponse;

  getTitle(): string;
  setTitle(value: string): AddListResponse;

  getContent(): string;
  setContent(value: string): AddListResponse;

  getCreatedat(): string;
  setCreatedat(value: string): AddListResponse;

  getUpdatedat(): string;
  setUpdatedat(value: string): AddListResponse;

  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): AddListResponse;
  clearTagsList(): AddListResponse;
  addTags(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddListResponse.AsObject;
  static fromObject(obj: AddListResponse.AsObject): AddListResponse;
  static toObject(includeInstance: boolean, msg: AddListResponse): AddListResponse.AsObject;
  static serializeBinaryToWriter(message: AddListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddListResponse;
  static deserializeBinaryFromReader(message: AddListResponse, reader: jspb.BinaryReader): AddListResponse;
}

export namespace AddListResponse {
  export type AsObject = {
    id: string,
    title: string,
    content: string,
    createdat: string,
    updatedat: string,
    tagsList: Array<Tag.AsObject>,
  }
}

export class DelListRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DelListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelListRequest.AsObject;
  static fromObject(obj: DelListRequest.AsObject): DelListRequest;
  static toObject(includeInstance: boolean, msg: DelListRequest): DelListRequest.AsObject;
  static serializeBinaryToWriter(message: DelListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelListRequest;
  static deserializeBinaryFromReader(message: DelListRequest, reader: jspb.BinaryReader): DelListRequest;
}

export namespace DelListRequest {
  export type AsObject = {
    id: string,
  }
}

export class DelListResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DelListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelListResponse.AsObject;
  static fromObject(obj: DelListResponse.AsObject): DelListResponse;
  static toObject(includeInstance: boolean, msg: DelListResponse): DelListResponse.AsObject;
  static serializeBinaryToWriter(message: DelListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelListResponse;
  static deserializeBinaryFromReader(message: DelListResponse, reader: jspb.BinaryReader): DelListResponse;
}

export namespace DelListResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class EditListRequest extends jspb.Message {
  getId(): string;
  setId(value: string): EditListRequest;

  getTitle(): string;
  setTitle(value: string): EditListRequest;

  getContent(): string;
  setContent(value: string): EditListRequest;

  getTagsList(): Array<EditListTag>;
  setTagsList(value: Array<EditListTag>): EditListRequest;
  clearTagsList(): EditListRequest;
  addTags(value?: EditListTag, index?: number): EditListTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditListRequest.AsObject;
  static fromObject(obj: EditListRequest.AsObject): EditListRequest;
  static toObject(includeInstance: boolean, msg: EditListRequest): EditListRequest.AsObject;
  static serializeBinaryToWriter(message: EditListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditListRequest;
  static deserializeBinaryFromReader(message: EditListRequest, reader: jspb.BinaryReader): EditListRequest;
}

export namespace EditListRequest {
  export type AsObject = {
    id: string,
    title: string,
    content: string,
    tagsList: Array<EditListTag.AsObject>,
  }
}

export class EditListTag extends jspb.Message {
  getId(): string;
  setId(value: string): EditListTag;

  getName(): string;
  setName(value: string): EditListTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditListTag.AsObject;
  static fromObject(obj: EditListTag.AsObject): EditListTag;
  static toObject(includeInstance: boolean, msg: EditListTag): EditListTag.AsObject;
  static serializeBinaryToWriter(message: EditListTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditListTag;
  static deserializeBinaryFromReader(message: EditListTag, reader: jspb.BinaryReader): EditListTag;
}

export namespace EditListTag {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class EditListResponse extends jspb.Message {
  getId(): string;
  setId(value: string): EditListResponse;

  getTitle(): string;
  setTitle(value: string): EditListResponse;

  getContent(): string;
  setContent(value: string): EditListResponse;

  getCreatedat(): string;
  setCreatedat(value: string): EditListResponse;

  getUpdatedat(): string;
  setUpdatedat(value: string): EditListResponse;

  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): EditListResponse;
  clearTagsList(): EditListResponse;
  addTags(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditListResponse.AsObject;
  static fromObject(obj: EditListResponse.AsObject): EditListResponse;
  static toObject(includeInstance: boolean, msg: EditListResponse): EditListResponse.AsObject;
  static serializeBinaryToWriter(message: EditListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditListResponse;
  static deserializeBinaryFromReader(message: EditListResponse, reader: jspb.BinaryReader): EditListResponse;
}

export namespace EditListResponse {
  export type AsObject = {
    id: string,
    title: string,
    content: string,
    createdat: string,
    updatedat: string,
    tagsList: Array<Tag.AsObject>,
  }
}

export class FindListRequest extends jspb.Message {
  getId(): string;
  setId(value: string): FindListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindListRequest.AsObject;
  static fromObject(obj: FindListRequest.AsObject): FindListRequest;
  static toObject(includeInstance: boolean, msg: FindListRequest): FindListRequest.AsObject;
  static serializeBinaryToWriter(message: FindListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindListRequest;
  static deserializeBinaryFromReader(message: FindListRequest, reader: jspb.BinaryReader): FindListRequest;
}

export namespace FindListRequest {
  export type AsObject = {
    id: string,
  }
}

export class FindListResponse extends jspb.Message {
  getId(): string;
  setId(value: string): FindListResponse;

  getTitle(): string;
  setTitle(value: string): FindListResponse;

  getContent(): string;
  setContent(value: string): FindListResponse;

  getCreatedat(): string;
  setCreatedat(value: string): FindListResponse;

  getUpdatedat(): string;
  setUpdatedat(value: string): FindListResponse;

  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): FindListResponse;
  clearTagsList(): FindListResponse;
  addTags(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindListResponse.AsObject;
  static fromObject(obj: FindListResponse.AsObject): FindListResponse;
  static toObject(includeInstance: boolean, msg: FindListResponse): FindListResponse.AsObject;
  static serializeBinaryToWriter(message: FindListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindListResponse;
  static deserializeBinaryFromReader(message: FindListResponse, reader: jspb.BinaryReader): FindListResponse;
}

export namespace FindListResponse {
  export type AsObject = {
    id: string,
    title: string,
    content: string,
    createdat: string,
    updatedat: string,
    tagsList: Array<Tag.AsObject>,
  }
}

export class GetListAllRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetListAllRequest;
  hasPage(): boolean;
  clearPage(): GetListAllRequest;

  getPagesize(): number;
  setPagesize(value: number): GetListAllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListAllRequest.AsObject;
  static fromObject(obj: GetListAllRequest.AsObject): GetListAllRequest;
  static toObject(includeInstance: boolean, msg: GetListAllRequest): GetListAllRequest.AsObject;
  static serializeBinaryToWriter(message: GetListAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListAllRequest;
  static deserializeBinaryFromReader(message: GetListAllRequest, reader: jspb.BinaryReader): GetListAllRequest;
}

export namespace GetListAllRequest {
  export type AsObject = {
    page?: number,
    pagesize: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 1,
  }
}

export class GetListAllResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): GetListAllResponse;

  getDataList(): Array<List>;
  setDataList(value: Array<List>): GetListAllResponse;
  clearDataList(): GetListAllResponse;
  addData(value?: List, index?: number): List;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListAllResponse.AsObject;
  static fromObject(obj: GetListAllResponse.AsObject): GetListAllResponse;
  static toObject(includeInstance: boolean, msg: GetListAllResponse): GetListAllResponse.AsObject;
  static serializeBinaryToWriter(message: GetListAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListAllResponse;
  static deserializeBinaryFromReader(message: GetListAllResponse, reader: jspb.BinaryReader): GetListAllResponse;
}

export namespace GetListAllResponse {
  export type AsObject = {
    count: number,
    dataList: Array<List.AsObject>,
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

  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): List;
  clearTagsList(): List;
  addTags(value?: Tag, index?: number): Tag;

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
    tagsList: Array<Tag.AsObject>,
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

export class SearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchRequest;

  getPageNumber(): number;
  setPageNumber(value: number): SearchRequest;

  getResultPerPage(): number;
  setResultPerPage(value: number): SearchRequest;

  getCorpus(): SearchRequest.Corpus;
  setCorpus(value: SearchRequest.Corpus): SearchRequest;

  getName(): string;
  setName(value: string): SearchRequest;

  getSubMessage(): string;
  setSubMessage(value: string): SearchRequest;

  getMapDataMap(): jspb.Map<string, number>;
  clearMapDataMap(): SearchRequest;

  getTestOneofCase(): SearchRequest.TestOneofCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static fromObject(obj: SearchRequest.AsObject): SearchRequest;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    query: string,
    pageNumber: number,
    resultPerPage: number,
    corpus: SearchRequest.Corpus,
    name: string,
    subMessage: string,
    mapDataMap: Array<[string, number]>,
  }

  export enum Corpus { 
    UNIVERSAL = 0,
    WEB = 1,
    IMAGES = 2,
    LOCAL = 3,
    NEWS = 4,
    PRODUCTS = 5,
    VIDEO = 6,
  }

  export enum TestOneofCase { 
    TEST_ONEOF_NOT_SET = 0,
    NAME = 9,
    SUB_MESSAGE = 11,
  }
}

