import React from "react";
import { useRecoilState } from "recoil";
import { selectedElementState, selectedFrameIdState } from "../store";


export default function CanvasPage() {
  const [selectedFrame,setSelectedFrame] = useRecoilState(selectedFrameIdState);

  function onClick(){
    setSelectedFrame(null)
    console.log(selectedFrame)
  }

  return (
    <div className="" onClick={onClick} sandbox="allow-scripts allow-same-origin" allow="accelerometer; ambient-light-sensor; autoplay; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; speaker; usb; vibrate; vr; xr-spatial-tracking">
      I am a iframe and we will use this area as a canvas.
      </div>
  )
}
