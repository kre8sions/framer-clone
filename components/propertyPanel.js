import ReactDOM,{ render } from 'react-dom';
import Alignment from './alignment'
import Canvas from './canvas'
export default function PropertyPanel() {
  return (
    <div className="absolute flex-col w-1/5 bg-gray-500 h-screen right-0">
      <heading className="font-bold">Alignment</heading>
      <Alignment/>
      <button onClick={Draw}>Draw rect</button>
    </div>
  )
}

const Draw = () =>{
  return ReactDOM.createPortal(<div className="frame"></div>,document.getElementById('canvas'))
}
