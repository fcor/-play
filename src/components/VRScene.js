import React from 'react'
import Iframe from './Iframe'

const VRScene = props =>
    <div className="vr-content">
      <Iframe src={props.url} width="600" height="400" />
    </div>

export default VRScene
