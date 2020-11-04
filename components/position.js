import { useRecoilState } from "recoil";
import { selectedElementState } from "../store";

export default function Position() {
  const [selectedElement, setSelectedElement] = useRecoilState(
    selectedElementState
  );


  // function handleKeyPress(e) {
  //   if(e.charCode == 13){
  //     setSelectedElement({
  //       ...selectedElement,
  //       transform:{ ...selectedElement.transform, translateX: e.target.value}
  //     });
    
  //   }
  // }

  if (!selectedElement) return null;
  return (
    <div className="">
      <input
        className="mr-3"
        type="number"
        maxLength={3}
        step="1"
        value={selectedElement.transform.translateX}
        onChange={(translateX) => {
          setSelectedElement({
            ...selectedElement,
            transform:{ ...selectedElement.transform, translateX: translateX.target.value}
          });
        }}
        // onKeyPress={handleKeyPress}
      ></input>
      <input
        type="number"
        maxLength={3}
        step="1"
        value={selectedElement.transform.translateY}
        onChange={(translateY) => {
          setSelectedElement({
            ...selectedElement,
            transform:{ ...selectedElement.transform, translateY: translateY.target.value}
          });
        }}
        // onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
}
