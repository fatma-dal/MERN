import React from 'react'
import style from '../css/MainContent.module.css'
import Subcontent from './Subcontent'
import Advertisement from './Advertisement'
function MainContent() {
  return (
    <div className={style.mainContent}>
      <div style={{ display: "flex" }} className={style.su}>
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </div>
  )
}

export default MainContent