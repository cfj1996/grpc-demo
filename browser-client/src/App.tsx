import { Button, Form, Input, message, Modal, Popconfirm, Select, Space, Spin, Table } from 'antd';
import useSwr from 'swr'
import { findList, addList, deleteList, edit } from './server/list';
import { ColumnsType } from 'antd/lib/table/interface';
import { AddListRequest, EditListRequest, List } from './proto-build/list_pb';
import moment from 'moment'
import Dialog from './Dialog';
import AddList from './AddList';
import View from './View';
import { useState } from 'react';
function App() {
  const [param, setParam] = useState({
    page: 1,
    pageSize: 20
  })
  const {data, mutate, isValidating} = useSwr(['/list',param], (_, param) => findList(param))
  const columns: ColumnsType<List.AsObject> = [
    {
      title: 'id',
      dataIndex: 'id'
    },
    {
      title: '标题',
      dataIndex: 'title'
    },
    {
      title: '内容',
      dataIndex: 'content',
    },
    {
      title: '创建时间',
      dataIndex: 'createdat',
      render(text){
        return moment(text).format('YYYY-MM-DD hh:mm:ss')
      }
    },
    {
      title: '更新时间',
      dataIndex: 'updatedat',
      render(text){
        return moment(text).format('YYYY-MM-DD hh:mm:ss')
      }
    },
    {
      title: '操作',
      render(text, record){
        return <Space>
          <Button onClick={()=>view(record.id)}>查看</Button>
          <Button onClick={() => editList(record.id)}>编辑</Button>
          <Popconfirm
            title="确定要删除吗?"
            onConfirm={() => delList(record.id)}
            okText="确定"
            cancelText="取消"
          >
          <Button>删除</Button>
          </Popconfirm>
        </Space>
      }
    }
  ]
  function create(){
    Dialog.open({
      title: '创建list',
      content: <AddList />,
      onError(error){
        message.error(error.message)
      },
      async onOK(name, info){
        const vitals = info?.values as AddListRequest.AsObject
        await addList(vitals)
        mutate()
      }
    })
  }
  function view(id: string){
    Dialog.open({
      title: 'list 详情',
      content: <View id={id} />
    })
  }
  function  delList(id: string) {
    return deleteList(id).then(res => {
      mutate()
    }).catch(err => {
      message.error(err.message)
    })
  }

  function editList(id: string){
    Dialog.open({
      title: '编辑List',
      content: <AddList id={id} />,
      onError(error){
        message.error(error.message)
      },
      async onOK(name, info){
        const vitals = info?.values as EditListRequest.AsObject
        await edit(vitals)
        mutate()
      }
    })
  }

  return <div>
    <Table
      title={() => {
        return <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button type={'primary'} onClick={create}>创建</Button>
        </div>
      }}
      rowKey={'id'}
      columns={columns}
      loading={!data && isValidating}
      dataSource={data&& data.dataList}
      pagination={{
        current: param.page,
        pageSize: param.pageSize,
        total: data?.count,
        onChange(page, pageSize){
          if(pageSize!==param.pageSize){
            setParam({
              page: 1,
              pageSize
            })
          } else {
            setParam({
              page,
              pageSize
            })
          }

        }
      }}
    />
  </div>;
}

export default App;
