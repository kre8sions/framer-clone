import { useRecoilState,useRecoilValue } from "recoil";
import { canvasStore } from "./atoms";

const cloneIndex = (items, id) => ({
  clone: items.map((item) => ({ ...item })),
  index: items.findIndex((item) => item.id === id),
});

export const useAddFrame = () => {
  const[items,setItems] = useRecoilState(canvasStore)
  return () => {
    const {clone,index} = cloneIndex(items)
      setItems([...clone, {name: "frame", xPosition:0, yPosition: 0, key: items.length}])
  }
}
