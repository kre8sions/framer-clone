import { useEffect } from "react"
import Frame from './frame'
import {useRecoilValue} from 'recoil'
import {canvasStore,canvasStoreState} from '../store'
import Catalog from './catalog'
export default function Canvas(){
  const frames = useRecoilValue(canvasStore)
  useEffect(()=>{
    console.log("I rendered")
  
  })
  return(<div 
    id="canvas"
    // onClick={e => {
    //     alert(`${e.clientX},${e.clientY}`)
    //   }}
  > 
  {/* <Catalog/> */}
  <p>Frames in Canvas:{`${frames.length}`}</p>
    {frames.map(frame => {
      <Frame/>
    })}
  </div>)
}
