import React from 'react'
// import 'aframe'

const VRScene = ({img}) =>{
  const htmlContent = `<html>
                          <head>
                            <meta aframe-injected="" name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no,user-scalable=no,minimal-ui">
                            <meta aframe-injected="" name="mobile-web-app-capable" content="yes">
                            <title>VR Scene</title>
                          </head>
                          <body>
                            <script src="https://aframe.io/releases/0.7.1/aframe.min.js"></script>
                             <a-scene>
                              <a-assets>
                                <img src=${img} id="panorama" />
                              </a-assets>
                              <a-sky src="#panorama"></a-sky>
                            </a-scene>
                          </body>
                       </html>`
  return(
    <div className="vr-content">
      <iframe className="iframe"
        title="VR"
        srcDoc={htmlContent}
        width="100%"
        height="100%"
        allowFullScreen="yes"
        allowvr="yes"
        scrolling="no">
      </iframe>
    </div>
  )
}

export default VRScene
