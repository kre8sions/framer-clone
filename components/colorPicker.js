import React from "react";
import { useRecoilState, selector } from "recoil";
import { frameAtom, selectedFrameIdState } from "../store";

const selectedElementState = selector({
  key: "selectedElement",
  get: ({ get }) => {
    const id = get(selectedFrameIdState);

    if (id != null) {
      return get(frameAtom(id));
    }
  },
  set: ({ set, get }, newElementValue) => {
    const id = get(selectedFrameIdState);

    if (id != null) {
      set(frameAtom(id), newElementValue);
    }
  }
});

export default function ColorPicker() {
  const [selectedElement, setSelectedElement] = useRecoilState(
    selectedElementState
  );

  if (!selectedElement) return null;
  return (
    <div>
      <input
        type="color"
        value={selectedElement.backgroundColor}
        onChange={(color) => {
          setSelectedElement({
            ...selectedElement,
            backgroundColor: color.target.value
          });
        }}
      ></input>
    </div>
  );
}
