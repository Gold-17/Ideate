"use client";

import { Link2, Pencil, Trash2 } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { useApiMutation } from "@/hooks/use-api-mutation";
import ConfirmModal from "./confirm-modal";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
}

const Actions = ({
    children,side,
    sideOffset,
    id,
    title
}:ActionProps) => {
    const { mutate, pending } = useApiMutation(api.board.remove);
    const { onOpen } = useRenameModal();

    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        )
          .then(() => {
            toast.success("Link copied to clipboard.");
        })
          .catch(() => toast.error("Failed to copy link."));
    };

    const onDelete = () => {
        mutate({
            id
        })
          .then(() => toast.success("You've deleted your board."))
          .catch(() => toast.error("Failed to delete board."));
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onClick={(e) => e.stopPropagation()}
              side={side}
              sideOffset={sideOffset}
              className="w-60"
            >
                <DropdownMenuItem
                  onClick={onCopyLink}
                  className="p-3 cursor-pointer"
                >
                    <Link2 className="w-4 h-4 mr-2" />
                    Copy board link
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onOpen(id, title)}
                  className="p-3 cursor-pointer"
                >
                    <Pencil className="w-4 h-4 mr-2" />
                    Rename
                </DropdownMenuItem>
                <ConfirmModal
                  header="Delete board?"
                  description="The board with all its content will be deleted permanently."
                  onConfirm={onDelete}
                  disabled={pending}
                >
                  <Button
                    variant="ghost"
                    className="p-3 cursor-pointer w-full text-sm justify-start font-normal"
                  >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete board
                  </Button>
                </ConfirmModal>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
 
export default Actions;