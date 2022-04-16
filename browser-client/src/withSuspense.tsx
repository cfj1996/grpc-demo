/**
 * @name: withSuspense
 * @user: cfj
 * @date: 2022/4/16 21:10
 */
import React, { forwardRef, ForwardRefExoticComponent, Suspense } from 'react';
import { Spin } from 'antd';

export function withSuspense<T>(content: React.ComponentType<T>){
  return forwardRef((props:T, ref) => {
    return  <Suspense fallback={<Spin/>}>
      {React.createElement(content as React.ForwardRefExoticComponent<T>, {
        ...props,
        ref
      })}
    </Suspense>
  })
}
