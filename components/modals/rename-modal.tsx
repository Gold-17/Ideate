"use client";

import {
    FormEventHandler,
    useEffect,
    useState
} from "react";
import { api } from "@/convex/_generated/api";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRenameModal } from "@/store/use-rename-modal";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const RenameModal = () => {
    const { mutate, pending } = useApiMutation(api.board.edit);

    const {
        isOpen,
        onClose,
        initialValues
    } = useRenameModal();

    const [title, setTitle] = useState(initialValues.title);

    useEffect(() => {
        setTitle(initialValues.title);
    }, [initialValues.title]);

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        mutate({
            id: initialValues.id,
            title
        })
          .then(() => {
            toast.success("You've edited your board.");
            onClose();
        })
          .catch(() => toast.error("Failed to edit board"));
    };

    return (
        <Dialog
          open={isOpen}
          onOpenChange={onClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit your board
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Enter a new title for this board
                </DialogDescription>
                <form
                  className="space-y-4"
                  onSubmit={onSubmit}
                >
                    <Input
                      disabled={pending}
                      required
                      maxLength={60}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Board title"
                    />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                              type="button"
                              variant="outline"
                              disabled={pending}
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                          type="submit"
                          disabled={pending}
                        >
                            {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
 
export default RenameModal;