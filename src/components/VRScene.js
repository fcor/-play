import React from 'react'
import Iframe from './Iframe'

const VRScene = props =>
    <div >
      <Iframe src={props.url} version={props.version} />
    </div>

export default VRScene
