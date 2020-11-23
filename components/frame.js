import Moveable from 'react-moveable'
import {frameAtom,selectedFrameIdState} from '../store'
import {useRecoilState} from 'recoil'

export default function Frame ({id}) {
  const [layer,setLayer] = useRecoilState(frameAtom(id))
  const [selectedFrameId,setSelectedFrame]= useRecoilState(selectedFrameIdState)

  function onClick() {
    setSelectedFrame(id)
  }

  return(
     <>
        <div className={`frame-${id}`} style={{...layer.styles,
        transform:
          `translate(${layer.transform.translateX}px, ${layer.transform.translateY}px)
           rotate(${layer.transform.rotate}deg)`
        }}>Target</div>
        <Moveable
            onClick={onClick}
            target={`.frame-${id}`}
            originDraggable={true}
            originRelative={true}
            draggable={true}
            throttleDrag={0}
            startDragRotate={0}
            throttleDragRotate={0}
            zoom={1}
            origin={true}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            rotatable={true}
            throttleRotate={0}
            rotationPosition={"top"}
            onDragOriginStart={({ dragStart }) => {
                dragStart && dragStart.set(layer.transform.translate)
            }}
            onDragOrigin={({ drag, transformOrigin }) => {
                setLayer({...layer,
                transform:{...layer.transform,
                  translate: drag.beforeTranslate,
                  transformOrigin: transformOrigin
                }})
            }}
            onDragStart={({ set }) => {
                set(layer.transform.translate)
            }}
            onDrag={({ beforeTranslate }) => {
                setLayer({...layer,
                transform:{...layer.transform, 
                  translate: beforeTranslate,
                  translateX: beforeTranslate[0],
                  translateY: beforeTranslate[1],
                }}) 
                onClick()
            }}
            onRotateStart={({ set }) => {
                set(layer.transform.rotate)
            }}
            onRotate={({ beforeRotate }) => {
                setLayer({...layer,
                transform:{...layer.transform, 
                  rotate: Math.floor(beforeRotate)
                }})
            }}
        />
    </>
  )
}
