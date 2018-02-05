import React from 'react'
// import 'aframe'

const VRScene = () =>
  <div className="vr-content">
    <iframe className="iframe" title="VR"
      srcDoc='<html>
      <head>
        <title>VR Scene</title>
      </head>
      <body>
        <script src="https://aframe.io/releases/0.7.1/aframe.min.js"></script>
         <a-scene>
          <a-assets>
            <img crossOrigin="anonymous" src="https://ucarecdn.com/04e4c90c-dfcb-4747-b941-cf7682a63d2a/" id="panorama" />
          </a-assets>
          <a-sky src="#panorama"></a-sky>
        </a-scene>
      </body>
    </html>'
      width="100%" height="100%" allowFullScreen="yes" allowvr="yes" scrolling="no">


    </iframe>
  </div>
  // <div id="myEmbeddedScene">
  // </div>


export default VRScene
