import getStroke from "perfect-freehand";

import { getSvgPathFromStroke } from "@/lib/utils";
import { PathLayer } from "@/types/canvas";

interface PathProps {
    x: number;
    y: number
    points: number[][];
    onPointerDown?: (e: React.PointerEvent) => void;
    fill: string;
    stroke?: string;
}

const Path = ({
    x,
    y,
    points,
    onPointerDown,
    fill,
    stroke
}: PathProps) => {
    return (
        <path
          className="drop-shadow-md"
          onPointerDown={onPointerDown}
          d={getSvgPathFromStroke(getStroke(points, {
            size: 16,
            thinning: 0.4,
            smoothing: 0.4,
            streamline: 0.4
          }))}
          style={{
            transform: `translate(${x}px, ${y}px)`
          }}
          x={0}
          y={0}
          fill={fill}
          stroke={stroke}
          strokeWidth={1}
        />
    );
}
 
export default Path;