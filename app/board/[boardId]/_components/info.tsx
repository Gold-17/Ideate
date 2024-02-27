"use client";

import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import Hint from "@/components/hint";
import { useRenameModal } from "@/store/use-rename-modal";
import Actions from "@/components/actions";

interface InfoProps {
    boardId: string;
}

const TabSeparator = () => {
    return (
        <div className="text-neutral-300 px-1.5">
            |
        </div>
    )
};

const Info = ({ boardId }: InfoProps) => {
    const { onOpen } = useRenameModal();
    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">
    });

    if (!data) {
        return <SkeletonInfo />;
    }

    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            <Hint
              label="Go to boards"
              side="bottom"
              sideOffset={10}
            >
              <Button variant="ideate">
                  <Link href="/">
                    <Image
                      src="/ideate-logo.svg"
                      alt="Ideate Logo"
                      width={63}
                      height={63}
                    />
                  </Link>
              </Button>
            </Hint>
            <TabSeparator />
            <Hint
              label="Edit title"
              side="bottom"
              sideOffset={10}
            >
            <Button
              onClick={() => onOpen(data._id, data.title)}
              variant="ideate"
              className="text-sm font-normal px-2"
            >
                {data.title}
            </Button>
            </Hint>
            <TabSeparator />
            <Actions
              id={data._id}
              title={data.title}
              side="bottom"
              sideOffset={10}
            >
                <div>
                    <Hint
                      label="Main menu"
                      side="bottom"
                      sideOffset={10}
                    >
                        <Button
                          size="icon"
                          variant="ideate"
                        >
                            <Menu className="" />
                        </Button>
                    </Hint>
                </div>
            </Actions>
        </div>
    );
}
 
export default Info;

export const SkeletonInfo = () => {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"
        />
    )
};