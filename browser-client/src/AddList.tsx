/**
 * @name: AddList
 * @user: cfj
 * @date: 2022/4/16 18:05
 */
import React, { useImperativeHandle, forwardRef, Suspense, ForwardRefExoticComponent } from 'react';
import { Button, Form, Input, Space, Spin } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import useSwr from 'swr';
import { find } from './server/list';
import { withSuspense } from './withSuspense';


const AddList = forwardRef(function(props: { id?: string }, ref) {
  const { id } = props;
  const { data } = useSwr(id?['/find', id]:null, (_, id) => find(id) , {
    suspense: true
  });
  const initialValues = id && data? {
    id: data.id,
    title: data.title,
    content: data.content,
    tagsList: data.tagsList
  }:undefined;
  const [form] = Form.useForm();
  useImperativeHandle(ref, () => ({
    submit: form.submit
  }));
  return <Form form={form} initialValues={initialValues}>
    <Form.Item name={'id'} hidden><div/></Form.Item>
    <Form.Item label={'标题'} name={'title'}>
      <Input />
    </Form.Item>
    <Form.Item label={'描述'} name={'content'}>
      <Input.TextArea />
    </Form.Item>
    <Form.List name={'tagsList'}>
      {(fields, { add, remove }) => <>
        {
          fields.map(field => {
            return <Space key={field.key} align="baseline">
              <Form.Item name={[field.name, 'id']} label={'tagName'} hidden>
                <div />
              </Form.Item>
              <Form.Item name={[field.name, 'name']} label={'tagName'}>
                <Input />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(field.name)} />
            </Space>;
          })
        }
        <Button type="dashed" icon={<PlusOutlined />} onClick={() => add()} block>Add tag</Button>
      </>}
    </Form.List>
  </Form>;
});



export default withSuspense(AddList);
