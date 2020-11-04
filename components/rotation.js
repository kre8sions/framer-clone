import { useRecoilState } from "recoil";
import { selectedElementState } from "../store";

export default function Rotation() {
  const [selectedElement, setSelectedElement] = useRecoilState(
    selectedElementState
  );


  function handleKeyPress(e) {
    if(e.charCode == 13){
      setSelectedElement({
        ...selectedElement,
        transform:{ ...selectedElement.transform, rotate: e.target.value}
      });
    
    }
  }

  if (!selectedElement) return null;
  return (
    <div>
      <input
        type="number"
        min="-360"
        max="360"
        maxLength={3}
        step="1"
        defaultValue={0}
        onChange={(rotation) => {
          setSelectedElement({
            ...selectedElement,
            transform:{ ...selectedElement.transform, rotate: rotation.target.value}
          });
          console.log(selectedElement.rotate)
        }}
       
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
}
