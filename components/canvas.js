import { useEffect } from "react"
import Draggable from 'react-draggable';

export default function Canvas(){
  useEffect(()=>{
    console.log("I rendered")
  
  })
  return(<div 
    id="canvas"
    // onClick={e => {
    //     alert(`${e.clientX},${e.clientY}`)
    //   }}
  >
    <Draggable
        axis="both"
        handle=".frame"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        >
        <div className="frame">
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>

  </div>)
}
