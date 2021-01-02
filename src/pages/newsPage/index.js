import React, {memo} from 'react'

import building from '../../assets/img/building.png'

import {
  NewsWrapper
}from './style'

export default memo(function KYONews(){
  return(
    <NewsWrapper className="wrap-v1 ">
      <img alt="building" src={building} ></img>
    </NewsWrapper>
  )
})