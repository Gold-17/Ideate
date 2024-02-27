import { colorToCss } from "@/lib/utils";
import { EllipseLayer, RectangleLayer } from "@/types/canvas";

interface RectangleProps {
    id: string;
    layer: EllipseLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

const Ellipse = ({
    id,
    layer,
    onPointerDown,
    selectionColor
}: RectangleProps) => {
    const { x, y, width, height, fill } = layer;

    return (
        <ellipse
          className="drop-shadow-md"
          onPointerDown={(e) => onPointerDown(e, id)}
          style={{ transform: `translate(${x}px, ${y}px)` }}
          cx={layer.width / 2}
          cy={layer.height / 2}
          rx={layer.width / 2}
          ry={layer.height / 2}
          fill={layer.fill ? colorToCss(fill) : "#000"}
          stroke={selectionColor || "transparent"}
          strokeWidth="1"
        />
    );
}
 
export default Ellipse;