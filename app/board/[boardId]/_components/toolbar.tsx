import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Triangle,
  Type,
  Undo2
} from "lucide-react";

import ToolButton from "./tool-button";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

interface ToolbarProps {
    canvasState: CanvasState;
    setCanvasState: (newState: CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}

const Toolbar = ({
    canvasState,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo
}: ToolbarProps) => {
    return (
        <div className="absolute top-[55%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="flex flex-col items-center bg-white p-1.5 gap-y-1 shadow-md rounded-md">
                <ToolButton
                  label="Select"
                  onClick={() => setCanvasState({ mode: CanvasMode.None })}
                  icon={MousePointer2}
                  isActive={
                    canvasState.mode === CanvasMode.None ||
                    canvasState.mode === CanvasMode.Translating ||
                    canvasState.mode === CanvasMode.SelectionNet ||
                    canvasState.mode === CanvasMode.Pressing ||
                    canvasState.mode === CanvasMode.Resizing
                  }
                />
                <ToolButton
                  label="Text"
                  onClick={() => setCanvasState({
                    mode: CanvasMode.Inserting,
                    layerType: LayerType.Text
                  })}
                  icon={Type}
                  isActive={
                    canvasState.mode === CanvasMode.Inserting &&
                    canvasState.layerType === LayerType.Text
                  }
                />
                <ToolButton
                  label="Sticky note"
                  onClick={() => setCanvasState({
                    mode: CanvasMode.Inserting,
                    layerType: LayerType.Note
                  })}
                  icon={StickyNote}
                  isActive={
                    canvasState.mode === CanvasMode.Inserting &&
                    canvasState.layerType === LayerType.Note
                  }
                />
                <ToolButton
                  label="Rectangle"
                  onClick={() => setCanvasState({
                    mode: CanvasMode.Inserting,
                    layerType: LayerType.Rectangle
                  })}
                  icon={Square}
                  isActive={
                    canvasState.mode === CanvasMode.Inserting &&
                    canvasState.layerType === LayerType.Rectangle
                  }
                />
                <ToolButton
                  label="Ellipse"
                  onClick={() => setCanvasState({
                    mode: CanvasMode.Inserting,
                    layerType: LayerType.Ellipse
                  })}
                  icon={Circle}
                  isActive={
                    canvasState.mode === CanvasMode.Inserting &&
                    canvasState.layerType === LayerType.Ellipse
                  }
                />
                <ToolButton
                  label="Pen"
                  onClick={() => setCanvasState({
                    mode: CanvasMode.Pencil
                  })}
                  icon={Pencil}
                  isActive={
                    canvasState.mode === CanvasMode.Pencil
                  }
                />
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <ToolButton
                  label="Undo"
                  onClick={undo}
                  icon={Undo2}
                  isDisabled={!canUndo}
                />
                <ToolButton
                  label="Redo"
                  onClick={redo}
                  icon={Redo2}
                  isDisabled={!canRedo}
                />
            </div>
        </div>
    );
}
 
export default Toolbar;

export const SkeletonToolbar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 w-[52px] h-[360px] bg-white shadow-md rounded-md"
        />
    )
};