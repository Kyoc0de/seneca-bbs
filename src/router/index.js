//路由配置
import React from 'react'
import { Redirect } from 'react-router-dom'

//导入页面
import KYOHomePage from '@/pages/homePage'
//bbs组件
import KYOBBSAll from '@/pages/homePage/bbs-pages/all'
import KYOBBSGood from '@/pages/homePage/bbs-pages/good'
import KYOBBSQuestion from '@/pages/homePage/bbs-pages/question'
import KYOBBSResource from '@/pages/homePage/bbs-pages/resource'
import KYOBBSOther from '@/pages/homePage/bbs-pages/other'

const routes = [
  {
    path: '/',
    exact: true,
    render: ()=>(
      <Redirect to="/bbs" />
    )
  },
  {
    path: '/bbs',
    component: KYOHomePage,
    routes: [
      {
        path: '/bbs',
        exact: true,
        render: ()=>(
          <Redirect to="/bbs/all" />
        )
      },
      {
        path: '/bbs/all',
        component: KYOBBSAll
      },
      {
        path: '/bbs/good',
        component: KYOBBSGood
      },
      {
        path: '/bbs/question',
        component: KYOBBSQuestion
      },
      {
        path: '/bbs/resource',
        component: KYOBBSResource
      },
      {
        path: '/bbs/other',
        component: KYOBBSOther
      }
    ]
  }
]

export default routes