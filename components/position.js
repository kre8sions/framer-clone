import { useRecoilState } from "recoil";
import { selectedElementState } from "../store";

export default function Position() {
  const [selectedElement, setSelectedElement] = useRecoilState(
    selectedElementState
  );


  if (!selectedElement) return null;
  return (
    <div className="">
      <input
        className="mr-3"
        type="number"
        maxLength={3}
        step="1"
        value={Math.floor(selectedElement.transform.translateX)}
        onChange={(translateX) => {
          setSelectedElement({
            ...selectedElement,
            transform:{ ...selectedElement.transform, translateX: translateX.target.value}
          });
        }}
      ></input>
      <input
        type="number"
        maxLength={3}
        step="1"
        value={Math.floor(selectedElement.transform.translateY)}
        onChange={(translateY) => {
          setSelectedElement({
            ...selectedElement,
            transform:{ ...selectedElement.transform, translateY: translateY.target.value}
          });
        }}
      ></input>
    </div>
  );
}
