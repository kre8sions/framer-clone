import { atom, atomFamily,selector } from "recoil";

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
      styles:{
        top: 100,
        left: 500,
        backgroundColor: "#ffaaaa",
        width:"200px",
        height:"200px",
        opacity:1,
        position:"absolute",
      },
      transform:{
        rotate:0,
        translate:[0,0],
        translateX:0,
        translateY:0,
        transformOrigin:"50% 50%",
      },
    }
})

export const selectedFrameIdState = atom({
  key: "selectedElementIdState",
  default: null
});

export const selectedElementState = selector({
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
