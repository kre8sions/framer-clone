import React,{useState} from "react";
import useKeyPress from "../hooks/useKeyPress"

const containerStyles = {
  width: "calc(100% + 1000px)",
  height: "calc(100% + 1000px)",
  display: "flex"
};

const Canvas = ({ children }) => {
  const [offset, setOffset] = useState({ left: 0, top: 0 });
  const [lastMousePosition, setLastMousePosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0);
  const panning = useKeyPress(" ");
  const onMouseDown = (e) => {
    setIsDragging(true);

    const { clientX, clientY } = e;

    setLastMousePosition({
      clientX,
      clientY
    });
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setLastMousePosition(null);
  };

  const onMouseMove = (e) => {
    if (!panning) return;
    if (!isDragging) return;

    const newOffset = {
      left: offset.left + (e.clientX - lastMousePosition.clientX),
      top: offset.top + (e.clientY - lastMousePosition.clientY)
    };

    setOffset(newOffset);

    const { clientX, clientY } = e;

    setLastMousePosition({
      clientX,
      clientY
    });
  };

  const onWheel = (e) => {
    if (e.deltaY < 0) {
      setZoomLevel(zoomLevel + .1);
      console.log(e.deltaY)
    } else {
      setZoomLevel(zoomLevel - .1);
    }
  };

  const innerStyle = React.useMemo(() => {
    const { left, top} = offset;
    const scale = Math.pow(1.2, zoomLevel);

    return {
      transform: `translate(${left}px, ${top}px) scale(${scale})`
    };
  }, [offset, zoomLevel]);

  return (
    <div
      id="canvas"
      style={containerStyles}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      
      onWheel={onWheel}
    >  
      <div style={innerStyle}>{children}</div>
        <span>{panning && `panning zoomLevel = ${zoomLevel}`}</span>
    </div>
  );
};


export default Canvas
