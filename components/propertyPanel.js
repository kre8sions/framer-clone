import {useRef,useEffect} from "react"
import Alignment from './alignment'
import ColorPicker from "./colorPicker"
import Canvas from './canvas'
import {useAddFrame} from '../store'
import {focused, frameAtom} from '../store'
import { useRecoilState } from "recoil"
import Opacity from "./opacity"

export default function PropertyPanel() {
  // const [selected,setSelected] = useRecoilState(focused)
  const add = useAddFrame();
  
  return (
    <div className="fixed flex-col w-64 bg-gray-500 h-full right-0">
      <heading className="font-bold">Alignment</heading>
      <Alignment/>
      <p>Fill</p>
      <ColorPicker/>
      <p>Opacity</p>
      <Opacity/>
      <button onClick={add} className="btn-blue text-white">Draw Frame</button>
    </div>
  )
}
