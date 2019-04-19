import React from 'react'
import './main.scss'

import AsideBar from '@/views/aside-bar/aside-bar'
import Discover from '@/views/discover/discover'

export default function Main () {
  return (
    <main className="main">
      <AsideBar></AsideBar>
      <Discover></Discover>
    </main>
  )
}
