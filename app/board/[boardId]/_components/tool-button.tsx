"use client";

import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Hint from "@/components/hint";

interface ToolButtonProps {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isDisabled?: boolean;
    isActive?: boolean;
}

const ToolButton = ({
    label,
    icon: Icon,
    onClick,
    isDisabled,
    isActive
}: ToolButtonProps) => {
    return (
        <Hint
          label={label}
          side="right"
          sideOffset={14}
        >
            <Button
              onClick={onClick}
              size="icon"
              disabled={isDisabled}
              variant={isActive ? "ideateActive" : "ideate"}
            >
                <Icon />
            </Button>
        </Hint>
    );
}
 
export default ToolButton;