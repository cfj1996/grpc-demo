/**
 * @name: View
 * @user: cfj
 * @date: 2022/4/16 18:53
 */
import React from 'react';
import { Descriptions, Spin } from 'antd';
import useSwr from 'swr';
import { find } from './server/list';
import moment from 'moment';
import { withSuspense } from './withSuspense';

const View = function(props: { id: string }) {
  const { id } = props;
  const { data } = useSwr(['/find', id], (_, id) => find(id), {
    suspense: true
  });
  return <Descriptions title={'list详情'} column={1}>
    <Descriptions.Item label="id">{data?.id}</Descriptions.Item>
    <Descriptions.Item label="标题">{data?.title}</Descriptions.Item>
    <Descriptions.Item label="描述">{data?.content}</Descriptions.Item>
    <Descriptions.Item label={'tag'}>
      {data?.tagsList.map(tag => tag.name).join(',')}
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">{moment(data?.createdat).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
    <Descriptions.Item label="更新时间">{moment(data?.updatedat).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
  </Descriptions>;
};

export default withSuspense(View);
