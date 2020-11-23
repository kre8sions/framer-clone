import PropertyPanel from '../components/propertyPanel'
import Canvas from '../components/canvas'
import Frame from '../components/frame'

import {useRecoilValue,useRecoilState} from 'recoil'
import {canvasStore} from '../store'
import LayerPanel from '../components/layerPanel'

export default function IndexPage() {
  const frames = useRecoilValue(canvasStore)

  return (
    <div className="">
      <PropertyPanel/>
      <LayerPanel/>
        <p>Frames in Canvas:{`${frames.length}`}</p>
  
      <Canvas>
        {frames.map((frame,index) => {
          return(<Frame key={frame.key} id={frame.key}>
            {/* {console.log({...frame})} */}
          </Frame>)
        })}

      </Canvas>
      {/* <iframe src="/canvasPage" style={{backgroundColor: "skyblue"}}></iframe> */}
      </div>
  )
}
