import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd"; 

import { headerLinks } from '@/common/local-data'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function KYOAppHeader(){

  //业务代码
  const showSelectItem = (item, index) => {
    if(index<3){
      return(
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_011 icon"></i>
        </NavLink>
      )
    }else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  //jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href='#/' className="logo sprite_01">Seneca中文社区</a>
          <div className="select-list">
            {
              headerLinks.map((item,index)=>{
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="话题" prefix={<SearchOutlined />}/>
            <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>

  )
})