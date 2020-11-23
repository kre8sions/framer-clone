
import { useRecoilState } from "recoil";
import { selectedElementState } from "../store";

export default function Opacity() {
  const [selectedElement, setSelectedElement] = useRecoilState(
    selectedElementState
  );


  function handleKeyPress(e) {
    if(e.charCode == 13){
      if(e.target.value > 100){e.target.value = 100}
      setSelectedElement({
        ...selectedElement,
        styles:{...selectedElement.styles, opacity: e.target.value / 100}
      });
    
    }
  }

  if (!selectedElement) return null;
  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step=".01"
        value={selectedElement.styles.opacity}
        onChange={(opacity) => {
          setSelectedElement({
            ...selectedElement,
            styles:{...selectedElement.styles, opacity: opacity.target.value}
          });
          console.log({ ...selectedElement });
        }}
      ></input>
      <input
        maxLength={3}
        type="number"
        min="0"
        max="100"
        step="1"
        value={`${Math.floor(selectedElement.styles.opacity * 100)}`}
        onChange={(opacity) => {
          setSelectedElement({
            ...selectedElement,
            styles:{...selectedElement.styles, opacity: opacity.target.value / 100}
          });
        }}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
}
