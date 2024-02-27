"use client";

import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

const EmptyBoards = () => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    mutate({
      title: "Untitled",
      orgId: organization?.id
    })
      .then((id) => {
        toast.success("You've created a new board.");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board."));
  };
  
    return (
        <div className="flex flex-col h-full items-center justify-center">
            <Image
              src="note.svg"
              alt="No Boards"
              width={110}
              height={110}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
              <Button
                onClick={onClick}
                size="lg"
                className="bg-[#ef233c] hover:bg-[#d06975]"
                disabled={pending}
              >
                {pending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                  ) : "Create a board"}
              </Button>
            </div>
        </div>
    );
}
 
export default EmptyBoards;