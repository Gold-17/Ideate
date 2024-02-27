"use client";

import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { OrganizationSwitcher } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const OrgSidebar = () => {
    const searchParams = useSearchParams();
    const favorites = searchParams.get("favorites");

    return (
        <div className="hidden md:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link
              href="/"
              className="flex items-center justify-center"
            >
                <Image
                  src="/ideate-logo.svg"
                  alt="Logo"
                  width={120}
                  height={120}
                />
            </Link>
            <OrganizationSwitcher
              hidePersonal
              appearance={{
                elements: {
                    rootBox: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    },
                    organizationSwitcherTrigger: {
                        padding: "6px",
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid #E5E7EB",
                        justifyContent: "space-between",
                        backgroundColor: "white"
                    }
                }
              }}
            />
            <div className="space-y-1 w-full">
                <Button
                  asChild
                  size="lg"
                  variant={favorites ? "ghost" : "secondary"}
                  className="font-normal justify-start px-2 w-full"
                >
                    <Link href="/">
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Team boards
                    </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant={favorites ? "secondary" : "ghost"}
                  className="font-normal justify-start px-2 w-full"
                >
                    <Link href={{
                        pathname: "/",
                        query: { favorites: true }
                    }}>
                        <Star className="w-4 h-4 mr-2" />
                        Favorite boards
                    </Link>
                </Button>
            </div>
        </div>
    );
}
 
export default OrgSidebar;