import Alignment from './alignment'

export default function PropertyPanel() {
  return (
    <div className="absolute flex-col w-1/5 bg-gray-500 h-screen right-0">
      <heading className="font-bold">Alignment</heading>
      <Alignment/>
    </div>
  )
}
