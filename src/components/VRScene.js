import React from 'react'
// import 'aframe'

const VRScene = props =>
    <div className="vr-content">
      <iframe className="iframe"
        title="VR"
        src={props.url}
        width="600"
        height="400"
        allowFullScreen
        allowvr="yes">
      </iframe>
    </div>

export default VRScene
