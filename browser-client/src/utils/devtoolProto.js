/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  list: {
    nested: {
      ListService: {
        methods: {
          add: {
            requestType: "AddListRequest",
            responseType: "AddListResponse"
          },
          del: {
            requestType: "DelListRequest",
            responseType: "DelListResponse"
          },
          edit: {
            requestType: "EditListRequest",
            responseType: "EditListResponse"
          },
          find: {
            requestType: "FindListRequest",
            responseType: "FindListResponse"
          },
          getAll: {
            requestType: "GetListAllRequest",
            responseType: "GetListAllResponse"
          }
        }
      },
      AddListRequest: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          tags: {
            rule: "repeated",
            type: "LinkAddTag",
            id: 3
          }
        }
      },
      LinkAddTag: {
        fields: {
          name: {
            type: "string",
            id: 1
          }
        }
      },
      AddListResponse: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          createdAt: {
            type: "string",
            id: 4
          },
          updatedAt: {
            type: "string",
            id: 5
          },
          tags: {
            rule: "repeated",
            type: "Tag",
            id: 6
          }
        }
      },
      DelListRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      DelListResponse: {
        fields: {
          success: {
            type: "bool",
            id: 1
          }
        }
      },
      EditListRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          tags: {
            rule: "repeated",
            type: "EditListTag",
            id: 4
          }
        }
      },
      EditListTag: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      EditListResponse: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          createdAt: {
            type: "string",
            id: 4
          },
          updatedAt: {
            type: "string",
            id: 5
          },
          tags: {
            rule: "repeated",
            type: "Tag",
            id: 6
          }
        }
      },
      FindListRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      FindListResponse: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          createdAt: {
            type: "string",
            id: 4
          },
          updatedAt: {
            type: "string",
            id: 5
          },
          tags: {
            rule: "repeated",
            type: "Tag",
            id: 6
          }
        }
      },
      GetListAllRequest: {
        oneofs: {
          _page: {
            oneof: [
              "page"
            ]
          }
        },
        fields: {
          page: {
            type: "int32",
            id: 1,
            options: {
              proto3_optional: true
            }
          },
          pageSize: {
            type: "int32",
            id: 2
          }
        }
      },
      GetListAllResponse: {
        fields: {
          count: {
            type: "int32",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "List",
            id: 2
          }
        }
      },
      List: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          createdAt: {
            type: "string",
            id: 4
          },
          updatedAt: {
            type: "string",
            id: 5
          },
          tags: {
            rule: "repeated",
            type: "Tag",
            id: 6
          }
        }
      },
      Tag: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          listId: {
            type: "string",
            id: 3
          }
        }
      }
    }
  },
  tag: {
    nested: {
      TagService: {
        methods: {
          add: {
            requestType: "AddTagRequest",
            responseType: "AddTagResponse"
          },
          del: {
            requestType: "DelTagRequest",
            responseType: "DelTagResponse"
          },
          edit: {
            requestType: "EditTagRequest",
            responseType: "EditTagResponse"
          },
          find: {
            requestType: "FindTagRequest",
            responseType: "FindTagResponse"
          },
          getAll: {
            requestType: "GetTagAllRequest",
            responseType: "GetTagAllResponse"
          }
        }
      },
      AddTagRequest: {
        fields: {
          name: {
            type: "string",
            id: 2
          },
          listId: {
            type: "string",
            id: 3
          }
        }
      },
      AddTagResponse: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          listId: {
            type: "string",
            id: 3
          }
        }
      },
      DelTagRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      DelTagResponse: {
        fields: {
          success: {
            type: "bool",
            id: 1
          }
        }
      },
      EditTagRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          listId: {
            type: "string",
            id: 3
          }
        }
      },
      EditTagResponse: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          listId: {
            type: "string",
            id: 3
          }
        }
      },
      FindTagRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      FindTagResponse: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          listId: {
            type: "string",
            id: 3
          },
          list: {
            type: "List",
            id: 4
          }
        }
      },
      GetTagAllRequest: {
        oneofs: {
          _page: {
            oneof: [
              "page"
            ]
          }
        },
        fields: {
          page: {
            type: "int32",
            id: 1,
            options: {
              proto3_optional: true
            }
          },
          pageSize: {
            type: "int32",
            id: 2
          }
        }
      },
      GetTagAllResponse: {
        fields: {
          count: {
            type: "int32",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "Tag",
            id: 2
          }
        }
      },
      Tag: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          listId: {
            type: "string",
            id: 3
          }
        }
      },
      List: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          createdAt: {
            type: "string",
            id: 4
          },
          updatedAt: {
            type: "string",
            id: 5
          },
          tag: {
            rule: "repeated",
            type: "Tag",
            id: 6
          }
        }
      }
    }
  }
});

module.exports = $root;
