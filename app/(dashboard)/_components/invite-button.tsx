"use client";

import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs"
                >
                    <Plus className="w-3 h-3 mr-2" />
                    Invite members
                </Button>
            </DialogTrigger>
            <DialogContent className="flex items-center justify-center p-0 bg-transparent border-none max-w-[880px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    );
}
 
export default InviteButton;