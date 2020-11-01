import Draggable from 'react-draggable';
import {useState,useRef,useEffect} from 'react'  
import {focused, canvasStore,frameAtom,selectedFrameIdState} from '../store'
import {useRecoilState, useSetRecoilState} from 'recoil'


export default function Frame ({children,index,id}) {
  const [frame] = useRecoilState(frameAtom(id))
  const setSelectedFrame = useSetRecoilState(selectedFrameIdState)

  function onClick() {
    setSelectedFrame(id);
    console.log("selectedElement", { ...frame });
  }



  return(

    <Draggable
      axis="both"
      handle={`.handle`}
      defaultPosition={{x: 0, y: 0}}
      position={null}
      scale={1}
      grid={[1,1]}
      
      >
      <div 
        className={` frame handle`}
        style={{...frame, position:"absolute"}}
        onClick={onClick}   
      >
        <div>Frame</div>
        <div>X:</div>
        <p>{children}</p>
      </div>
     </Draggable>

  )
}
