import { atom, atomFamily } from "recoil";

export const canvasStore = atom({
  key: "canvasStore",
  default: [],
});

export const zoomLevel = atom({
  key: "zoomLevel",
  default: 100,
})

export const focused = atom({
  key: "focused",
  default: 0,
})

export const frameAtom = atomFamily({
  key: 'frameState',
  default:{ 
      top: 400,
      left: 200,
      backgroundColor: "#ffaaaa",
      width:"200px",
      height:"200px"
    }
})

export const selectedFrameIdState = atom({
  key: "selectedElementIdState",
  default: null
});
