"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { MoreHorizontal } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

import Overlay from "./overlay";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";

import { useApiMutation } from "@/hooks/use-api-mutation";

interface BoardCardProps {
    id: string;
    title: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    createdAt: number;
    orgId: string;
    isFavorite: boolean;
}

const BoardCard = ({
    id,
    title,
    imageUrl,
    authorId,
    authorName,
    createdAt,
    orgId,
    isFavorite
}: BoardCardProps) => {
    const { userId } = useAuth();

    const authorLabel = userId === authorId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true
    });

    const {
        mutate: onFave,
        pending: pendingFave
    } = useApiMutation(api.board.favorite);
    const {
        mutate: onRemoveFave,
        pending: pendingRemoveFave
    } = useApiMutation(api.board.removeFavorite);

    const toggleFave = () => {
        if (isFavorite) {
            onRemoveFave({ id })
              .catch(() => toast.error("Failed to remove from favorites."));
        } else {
            onFave({ id, orgId })
              .catch(() => toast.error("Failed to add to favorites."));
        }
    };

    return (
        <Link
          href={`/board/${id}`}
        >
            <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-red-50">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="object-fit"
                    />
                    <Overlay />
                    <Actions
                      id={id}
                      title={title}
                      side="right"
                    >
                        <button className="absolute top-1 right-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
                            <MoreHorizontal className="text-gray-700 md:text-white opacity-100 md:opacity-75 hover:opacity-100 transition-opacity" />
                        </button>
                    </Actions>
                </div>
                <Footer
                  isFavorite={isFavorite}
                  title={title}
                  authorLabel={authorLabel}
                  createdAtLabel={createdAtLabel}
                  onClick={toggleFave}
                  disabled={pendingFave || pendingRemoveFave}
                />
            </div>
        </Link>
    );
}
 
export default BoardCard;

BoardCard.Skeleton = function SkeletonBoardCard () {
    return (
        <div className="aspect-[100/127] rounded-lg overflow-hidden">
            <Skeleton className="w-full h-full" />
        </div>
    )
};