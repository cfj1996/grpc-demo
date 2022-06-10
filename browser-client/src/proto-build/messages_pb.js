// source: messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.grpc.testing.GetNameRequest', null, global);
goog.exportSymbol('proto.grpc.testing.GetNameResponse', null, global);
goog.exportSymbol('proto.grpc.testing.Page', null, global);
goog.exportSymbol('proto.grpc.testing.Size', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.Page = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.testing.Page, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.testing.Page.displayName = 'proto.grpc.testing.Page';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.Size = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.testing.Size, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.testing.Size.displayName = 'proto.grpc.testing.Size';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.GetNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpc.testing.GetNameRequest.repeatedFields_, null);
};
goog.inherits(proto.grpc.testing.GetNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.testing.GetNameRequest.displayName = 'proto.grpc.testing.GetNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.GetNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.testing.GetNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.testing.GetNameResponse.displayName = 'proto.grpc.testing.GetNameResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.Page.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.Page.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.Page} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.testing.Page.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.Page}
 */
proto.grpc.testing.Page.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.Page;
  return proto.grpc.testing.Page.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.Page} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.Page}
 */
proto.grpc.testing.Page.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.Page.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.Page.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.Page} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.testing.Page.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Page as accepted by the `fromObject` method.
 * @record
 */
proto.grpc.testing.Page.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.page;

  /** @type {?|undefined} */
  this.pageSize;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.grpc.testing.Page.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.grpc.testing.Page}
 */
proto.grpc.testing.Page.fromObject = function(obj) {
  var msg = new proto.grpc.testing.Page();
  obj.page != null && jspb.Message.setField(msg, 1, obj.page);
  obj.pageSize != null && jspb.Message.setField(msg, 2, obj.pageSize);
  return msg;
};
}

/**
 * optional int32 page = 1;
 * @return {number}
 */
proto.grpc.testing.Page.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc.testing.Page} returns this
 */
proto.grpc.testing.Page.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.grpc.testing.Page.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc.testing.Page} returns this
 */
proto.grpc.testing.Page.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.Size.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.Size.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.Size} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.testing.Size.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.Size}
 */
proto.grpc.testing.Size.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.Size;
  return proto.grpc.testing.Size.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.Size} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.Size}
 */
proto.grpc.testing.Size.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.Size.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.Size.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.Size} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.testing.Size.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Size as accepted by the `fromObject` method.
 * @record
 */
proto.grpc.testing.Size.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.size;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.grpc.testing.Size.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.grpc.testing.Size}
 */
proto.grpc.testing.Size.fromObject = function(obj) {
  var msg = new proto.grpc.testing.Size();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.size != null && jspb.Message.setField(msg, 2, obj.size);
  return msg;
};
}

/**
 * optional string name = 1;
 * @return {string}
 */
proto.grpc.testing.Size.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.testing.Size} returns this
 */
proto.grpc.testing.Size.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 size = 2;
 * @return {number}
 */
proto.grpc.testing.Size.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc.testing.Size} returns this
 */
proto.grpc.testing.Size.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpc.testing.GetNameRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.GetNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.GetNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.GetNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.testing.GetNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    page: (f = msg.getPage()) && proto.grpc.testing.Page.toObject(includeInstance, f),
    sizeList: jspb.Message.toObjectList(msg.getSizeList(),
    proto.grpc.testing.Size.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.GetNameRequest}
 */
proto.grpc.testing.GetNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.GetNameRequest;
  return proto.grpc.testing.GetNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.GetNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.GetNameRequest}
 */
proto.grpc.testing.GetNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.grpc.testing.Page;
      reader.readMessage(value,proto.grpc.testing.Page.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    case 3:
      var value = new proto.grpc.testing.Size;
      reader.readMessage(value,proto.grpc.testing.Size.deserializeBinaryFromReader);
      msg.addSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.GetNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.GetNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.GetNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.testing.GetNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.grpc.testing.Page.serializeBinaryToWriter
    );
  }
  f = message.getSizeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.grpc.testing.Size.serializeBinaryToWriter
    );
  }
};


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of GetNameRequest as accepted by the `fromObject` method.
 * @record
 */
proto.grpc.testing.GetNameRequest.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.page;

  /** @type {?|undefined} */
  this.sizeList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.grpc.testing.GetNameRequest.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.grpc.testing.GetNameRequest}
 */
proto.grpc.testing.GetNameRequest.fromObject = function(obj) {
  var msg = new proto.grpc.testing.GetNameRequest();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.page && jspb.Message.setWrapperField(
      msg, 2, proto.grpc.testing.Page.fromObject(obj.page));
  obj.sizeList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.sizeList.map(
          proto.grpc.testing.Size.fromObject));
  return msg;
};
}

/**
 * optional string name = 1;
 * @return {string}
 */
proto.grpc.testing.GetNameRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.testing.GetNameRequest} returns this
 */
proto.grpc.testing.GetNameRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Page page = 2;
 * @return {?proto.grpc.testing.Page}
 */
proto.grpc.testing.GetNameRequest.prototype.getPage = function() {
  return /** @type{?proto.grpc.testing.Page} */ (
    jspb.Message.getWrapperField(this, proto.grpc.testing.Page, 2));
};


/**
 * @param {?proto.grpc.testing.Page|undefined} value
 * @return {!proto.grpc.testing.GetNameRequest} returns this
*/
proto.grpc.testing.GetNameRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grpc.testing.GetNameRequest} returns this
 */
proto.grpc.testing.GetNameRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grpc.testing.GetNameRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Size size = 3;
 * @return {!Array<!proto.grpc.testing.Size>}
 */
proto.grpc.testing.GetNameRequest.prototype.getSizeList = function() {
  return /** @type{!Array<!proto.grpc.testing.Size>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpc.testing.Size, 3));
};


/**
 * @param {!Array<!proto.grpc.testing.Size>} value
 * @return {!proto.grpc.testing.GetNameRequest} returns this
*/
proto.grpc.testing.GetNameRequest.prototype.setSizeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.grpc.testing.Size=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpc.testing.Size}
 */
proto.grpc.testing.GetNameRequest.prototype.addSize = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.grpc.testing.Size, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grpc.testing.GetNameRequest} returns this
 */
proto.grpc.testing.GetNameRequest.prototype.clearSizeList = function() {
  return this.setSizeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.GetNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.GetNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.GetNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.testing.GetNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.GetNameResponse}
 */
proto.grpc.testing.GetNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.GetNameResponse;
  return proto.grpc.testing.GetNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.GetNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.GetNameResponse}
 */
proto.grpc.testing.GetNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.GetNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.GetNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.GetNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.testing.GetNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of GetNameResponse as accepted by the `fromObject` method.
 * @record
 */
proto.grpc.testing.GetNameResponse.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.count;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.grpc.testing.GetNameResponse.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.grpc.testing.GetNameResponse}
 */
proto.grpc.testing.GetNameResponse.fromObject = function(obj) {
  var msg = new proto.grpc.testing.GetNameResponse();
  obj.count != null && jspb.Message.setField(msg, 1, obj.count);
  return msg;
};
}

/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.grpc.testing.GetNameResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc.testing.GetNameResponse} returns this
 */
proto.grpc.testing.GetNameResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.grpc.testing);
