import React from "react";
import { useRecoilState } from "recoil";
import { selectedElementState } from "../store";


export default function ColorPicker() {
  const [selectedElement, setSelectedElement] = useRecoilState(
    selectedElementState
  );

  if (!selectedElement) return null;
  return (
    <div>
      <input
        type="color"
        value={selectedElement.styles.backgroundColor}
        onChange={(color) => {
          setSelectedElement({
            ...selectedElement,
            styles:{...selectedElement.styles,
              backgroundColor: color.target.value}
          });
        }}
      ></input>
    </div>
  );
}
