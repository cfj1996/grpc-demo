/**
 * @name: list
 * @user: cfj
 * @date: 2022/4/16 14:42
 */
import {
  AddListRequest,
  LinkAddTag,
  DelListRequest,
  EditListRequest,
  EditListTag,
  FindListRequest,
  GetListAllRequest,
} from '../proto-build/list_pb';
import { ListServiceClient } from '../proto-build/ListServiceClientPb';
import { UnaryInterceptor } from 'grpc-web';
// 拦截器
const intercept1: UnaryInterceptor<any, any> = {
  intercept: function(request, invoker) {
    return invoker(request)
  }
}
const listService = new ListServiceClient('http://localhost:8080', null, {
  'unaryInterceptors': [intercept1]
});

export const addList = (data: AddListRequest.AsObject) => {
  const { title, content, tagsList } = data;
  const addRequest = new AddListRequest();
  addRequest.setTitle(title);
  addRequest.setContent(content);
  tagsList?.forEach((tag, index) => {
    const tagRequest = new LinkAddTag();
    tagRequest.setName(tag.name);
    addRequest.addTags(tagRequest, index);
  });
  console.log('addRequest', addRequest);
  return listService.add(addRequest, {
    token: '123'
  }).then(response => {
    return response.toObject();
  });
};
export const deleteList = (id: string) => {
  const delRequest = new DelListRequest();
  delRequest.setId(id);
  return listService.del(delRequest, null);
};

export const edit = (data: EditListRequest.AsObject) => {
  const { id, title, content, tagsList } = data;
  const editRequest = new EditListRequest();
  editRequest.setId(id);
  editRequest.setTitle(title);
  editRequest.setContent(content);
  const tags = tagsList?.map(tag => {
    const tagRequest = new EditListTag();
    tagRequest.setName(tag.name);
    tagRequest.setId(tag.id);
    return tagRequest;
  }) || [];
  editRequest.setTagsList(tags);
  return listService.edit(editRequest, null).then(response => response.toObject())
    .catch(error => {
      return Promise.reject(error);
    });
};

export const find = (id: string) => {
  const findRequest = new FindListRequest();
  findRequest.setId(id);
  return listService.find(findRequest, null).then(response => {
    return response.toObject();
  });
};

export const findList = (param: Page) => {
  const { page, pageSize } = param;
  const pageRequest = new GetListAllRequest();
  pageRequest.setPage(page || 1);
  pageRequest.setPagesize(pageSize || 20);
  return listService.getAll(pageRequest, {token: '123'}).then(response => response.toObject());
};
export default listService;
