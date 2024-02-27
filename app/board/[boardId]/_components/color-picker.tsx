"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
    onChange: (color: Color) => void;
}

const ColorPicker = ({ onChange }: ColorPickerProps) => {
    return (
        <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
            <ColorButton
              color={{ r: 243, g: 82, b: 35 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 255, g: 249, b: 177 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 68, g: 202, b: 99 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 39, g: 142, b: 237 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 155, g: 105, b: 245 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 252, g: 142, b: 42 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 0, g: 0, b: 0 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 255, g: 255, b: 255 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 224, g: 224, b: 224 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 192, g: 192, b: 192 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 255, g: 102, b: 178 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 51, g: 255, b: 51 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 255, g: 178, b: 102 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 255, g: 0, b: 127 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 102, g: 255, b: 255 }}
              onClick={onChange}
            />
            <ColorButton
              color={{ r: 204, g: 0, b: 204 }}
              onClick={onChange}
            />
        </div>
    );
}
 
export default ColorPicker;

interface ColorButtonProps {
    color: Color;
    onClick: (color: Color) => void;
}

export const ColorButton = ({ color, onClick }: ColorButtonProps) => {
    return (
        <button
          onClick={() => onClick(color)}
          className="flex items-center justify-center w-8 h-8 hover:opacity-75 transition"
        >
            <div
              className="w-8 h-8 rounded-md border border-neutral-300"
              style={{ background: colorToCss(color) }}
            />
        </button>
    )
};