"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import Hint from "@/components/hint";

interface UserAvatarProps {
    src?: string;
    name?: string;
    fallback?: string;
    borderColor?: string;
}

const UserAvatar = ({
    src,
    name,
    fallback,
    borderColor
}: UserAvatarProps) => {
    return (
        <Hint
          label={name || "Team mate"}
          side="bottom"
          sideOffset={18}
        >
            <Avatar
              className="w-8 h-8 border-[3px]"
              style={{ borderColor }}
            >
                <AvatarImage src={src} />
                <AvatarFallback className="text-xs font-semibold">
                    {fallback}
                </AvatarFallback>
            </Avatar>
        </Hint>
    );
}
 
export default UserAvatar;