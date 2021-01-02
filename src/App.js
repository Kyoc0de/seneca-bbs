import React, {memo} from 'react'

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from "./router"

import KYOAppHeader from '@/components/app-header'
import KYOAppFooter from '@/components/app-footer'

export default memo( function App(){
  return (
    <HashRouter>
      <KYOAppHeader />
      {renderRoutes(routes)}
      <KYOAppFooter />
    </HashRouter>
  )
})