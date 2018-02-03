import React from 'react'
import 'aframe'

const VRScene = () =>
  <div id="myEmbeddedScene">
    <a-scene embedded>
      <a-assets>
          <img src="https://ucarecdn.com/04e4c90c-dfcb-4747-b941-cf7682a63d2a/" id="panorama" />
        </a-assets>
        <a-sky src="#panorama"></a-sky>
    </a-scene>
  </div>


export default VRScene
