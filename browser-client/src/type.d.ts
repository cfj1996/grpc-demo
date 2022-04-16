/**
 * @name: type.d.ts
 * @user: cfj
 * @date: 2022/4/16 14:48
 */
interface Window {
  __GRPCWEB_DEVTOOLS__: any;
  __DEVTOOLS_PROTO_JSON_STRING__: any;
}


interface Page{
  page?: number;
  pageSize?: number;
}

interface List{
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface  AddList {
  title: string;
  content: string;
  tags?: {name: string}[]
}

interface EditList{
  id: string;
  title: string;
  content: string;
  tags?: {name: string, id: string}[]

}

interface Tag{
  id: string
  name: string
  listId: string
}
