import ReactDOM,{ render } from 'react-dom';
import Alignment from './alignment'
import Canvas from './canvas'
import {useAddItem} from '../store'
export default function PropertyPanel() {

  const add = useAddItem();


  return (
    <div className="absolute flex-col w-1/5 bg-gray-500 h-screen right-0">
      <heading className="font-bold">Alignment</heading>
      <Alignment/>
      <button onClick={add}>Draw rect</button>
    </div>
  )
}
