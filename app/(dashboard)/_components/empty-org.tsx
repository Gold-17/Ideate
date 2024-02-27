"use client";

import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";

const EmptyOrg = () => {
    return (
        <div className="flex flex-col h-full items-center justify-center">
            <Image
              src="/elements.svg"
              alt="Empty"
              width={200}
              height={200}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Welcome to Ideate
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
                Create an organization to get started
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="bg-[#ef233c] hover:bg-[#d06975]"
                        >
                            Create an organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="flex items-center justify-center p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
 
export default EmptyOrg;