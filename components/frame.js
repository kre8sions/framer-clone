import Draggable from 'react-draggable';
import {useRecoilValue} from 'recoil'
import {canvasStore,canvasStoreState} from '../store'
  

export default function Frame () {

  return(
    <Draggable
        axis="both"
        handle={`.handle`}
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        grid={[10,10]}
        >
        <div className={` frame handle`}>
          <div>Frame</div>
          <div>{`${element}`}</div>
        </div>
      </Draggable>
  )
}
