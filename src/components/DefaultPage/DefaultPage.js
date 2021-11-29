import React from 'react'

import './defaultpage.css'

export default function DefaultPage(props) {
  return (
    <div className="default-layout">
      {props.children}
    </div>
  )
}