import {useAddFrame, canvasStore} from '../store'
import {focused, frameAtom} from '../store'
import { useRecoilState,useRecoilValue } from "recoil"
import {useEffect} from 'react'

export default function LayerPanel() {
 
  const add = useAddFrame();
  const frames = useRecoilValue(canvasStore)
  useEffect(() => {
   console.log('updated')
  }, [frames])

  return (
    <div className="fixed flex-col w-64 bg-gray-500 h-full left-0">
      <button onClick={add} className="bg-black text-white">Draw Frame</button>
      <p>Layers</p>
        {frames.map((frame,index) => {
          return(<div key={frame.key} id={frame.key}>
            Layer{index}
          </div>)
        })}  
    </div>
  )
}
