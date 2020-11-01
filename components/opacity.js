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

export default function Opacity() {
  const [selectedElement, setSelectedElement] = useRecoilState(
    selectedElementState
  );

  if (!selectedElement) return null;
  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step=".01"
        value={selectedElement.opacity}
        onChange={(opacity) => {
          setSelectedElement({
            ...selectedElement,
            opacity: opacity.target.value
          });
          console.log({ ...selectedElement });
        }}
      ></input>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        value={`${Math.floor(selectedElement.opacity * 100)}`}
        onChange={(opacity) => {
          setSelectedElement({
            ...selectedElement,
            opacity: opacity.target.value / 100
          });
        }}
      ></input>
    </div>
  );
}
