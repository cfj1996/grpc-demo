import * as jspb from 'google-protobuf'



export class Page extends jspb.Message {
  getPage(): number;
  setPage(value: number): Page;

  getPageSize(): number;
  setPageSize(value: number): Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static fromObject(obj:Page.AsObject): Page;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class Size extends jspb.Message {
  getName(): string;
  setName(value: string): Size;

  getSize(): number;
  setSize(value: number): Size;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Size.AsObject;
  static fromObject(obj:Size.AsObject): Size;
  static toObject(includeInstance: boolean, msg: Size): Size.AsObject;
  static serializeBinaryToWriter(message: Size, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Size;
  static deserializeBinaryFromReader(message: Size, reader: jspb.BinaryReader): Size;
}

export namespace Size {
  export type AsObject = {
    name: string,
    size: number,
  }
}

export class GetNameRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetNameRequest;

  getPage(): Page | undefined;
  setPage(value?: Page): GetNameRequest;
  hasPage(): boolean;
  clearPage(): GetNameRequest;

  getSizeList(): Array<Size>;
  setSizeList(value: Array<Size>): GetNameRequest;
  clearSizeList(): GetNameRequest;
  addSize(value?: Size, index?: number): Size;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNameRequest.AsObject;
  static fromObject(obj:GetNameRequest.AsObject): GetNameRequest;
  static toObject(includeInstance: boolean, msg: GetNameRequest): GetNameRequest.AsObject;
  static serializeBinaryToWriter(message: GetNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNameRequest;
  static deserializeBinaryFromReader(message: GetNameRequest, reader: jspb.BinaryReader): GetNameRequest;
}

export namespace GetNameRequest {
  export type AsObject = {
    name: string,
    page?: Page.AsObject,
    sizeList: Array<Size.AsObject>,
  }
}

export class GetNameResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): GetNameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNameResponse.AsObject;
  static fromObject(obj:GetNameResponse.AsObject): GetNameResponse;
  static toObject(includeInstance: boolean, msg: GetNameResponse): GetNameResponse.AsObject;
  static serializeBinaryToWriter(message: GetNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNameResponse;
  static deserializeBinaryFromReader(message: GetNameResponse, reader: jspb.BinaryReader): GetNameResponse;
}

export namespace GetNameResponse {
  export type AsObject = {
    count: number,
  }
}

