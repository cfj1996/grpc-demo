1. 安装docker， 运行 docker-compose.yml
2. 安装protoc对应系统的编译器 编译.proto中的message消息体输出list_pb.js, https://github.com/protocolbuffers/protobuf/releases
3. 安装grpc-web对应系统的编译器 编译.proto文件中的server,输出客户端service，ServiceClientPb.ts https://github.com/grpc/grpc-web/releases
4. 编译出消息体声明文件和客户端service文件 运行yarn run protoc:commonjs+ts 命令
5. 编译出浏览器devtools配置文件 运行yarn run protoc:devtools 命令
6. 运行browser-client 项目 yarn, yarn run start
