import ReactDOM,{ render } from 'react-dom';
import Alignment from './alignment'
import Canvas from './canvas'
import {useAddFrame} from '../store'
export default function PropertyPanel() {

  const add = useAddFrame();


  return (
    <div className="absolute flex-col w-1/5 bg-gray-500 h-screen right-0">
      <heading className="font-bold">Alignment</heading>
      <Alignment/>
      <button onClick={add}>Draw Frame</button>
    </div>
  )
}
