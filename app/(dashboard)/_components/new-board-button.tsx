"use client";

import { Loader2, Plus } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useApiMutation } from "@/hooks/use-api-mutation";

interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
}

const NewBoardButton = ({orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter();
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled"
        })
          .then((id) => {
            toast.success("You've created a new board.");
            router.push(`/board/${id}`);
          })
          .catch(() => toast.error("Failed to create board."));
    };

    return (
        <button
          onClick={onClick}
          disabled={pending || disabled}
          className={cn(
            "col-span-1 aspect-[100/127] bg-[#ef233c] rounded-lg hover:bg-red-800 flex flex-col items-center justify-center py-6",
            (pending || disabled) && "opacity-75 hover:bg-red-800 cursor-not-allowed"
          )}
        >
            {pending || disabled ? <Loader2 className="w-6 h-6 text-white animate-spin" /> : (
                <>
                  <div />
                  <Plus className="w-12 h-12 text-white stroke-1" />
                  <p className="text-xs text-white font-light">
                    New board
                  </p>
                </>
            )}
        </button>
    );
}
 
export default NewBoardButton;