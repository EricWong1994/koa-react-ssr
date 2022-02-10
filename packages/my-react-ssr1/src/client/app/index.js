

//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import Index from '../pages/index';

console.log(222)
//渲染index 组件1
ReactDom.hydrate(<>
    {/* <div>666</div>     */}
    <Index />
     </>, document.getElementById('root'))
