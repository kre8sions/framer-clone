import {useRef,useEffect} from "react"
import Alignment from './alignment'
import ColorPicker from "./colorPicker"
import {useAddFrame} from '../store'
import {focused, frameAtom} from '../store'
import { useRecoilState } from "recoil"
import Opacity from "./opacity"
import Rotation from "./rotation"
import Position from "./position"
export default function PropertyPanel() {
 
  const add = useAddFrame();
  
  return (
    <div className="fixed flex-col w-64 bg-gray-500 h-full right-0">
      <p>Alignment</p>
      <Alignment/>
      <p>Fill</p>
      <ColorPicker/>
      <p>Opacity</p>
      <Opacity/>
      <p>Rotation</p>
      <Rotation/>
      <p>Position</p>
      <Position/>
      <button onClick={add} className="bg-black text-white">Draw Frame</button>
    </div>
  )
}
