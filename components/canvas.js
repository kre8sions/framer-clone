import { useEffect } from "react"
import Draggable from 'react-draggable';
import {useRecoilValue} from 'recoil'
import {canvasStore,canvasStoreState} from '../store'
import Catalog from './catalog'
export default function Canvas(){
  const elements = useRecoilValue(canvasStore)
  useEffect(()=>{
    console.log("I rendered")
  
  })
  return(<div 
    id="canvas"
    // onClick={e => {
    //     alert(`${e.clientX},${e.clientY}`)
    //   }}
  > 
  <Catalog/>
  <p>Count:{`${elements.length}`}</p>
    {elements.map((element, index) => (
      <Draggable
        axis="both"
        handle={`.handle-${index}`}
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        >
        <div className={` frame handle-${index}`}>
          <div className="">This Frame is draggable</div>
        </div>
      </Draggable>
    ))}
    

  </div>)
}
