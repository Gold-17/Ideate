"use client";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface FooterProps {
    isFavorite: boolean;
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    onClick: () => void;
    disabled: boolean;
}

const Footer = ({
    isFavorite,
    title,
    authorLabel,
    createdAtLabel,
    onClick,
    disabled
}: FooterProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };

    return (
        <div className="relative bg-white p-3">
            <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
                {title}
            </p>
            <p className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
                {authorLabel}, {createdAtLabel}
            </p>
            <button
              onClick={handleClick}
              disabled={disabled}
              className={cn(
                "opacity-100 md:opacity-0 md:group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-red-500",
                disabled && "cursor-not-allowed opacity-75"
              )}
            >
                <Star
                  className={cn(
                    "w-4 h-4",
                    isFavorite && "fill-[#ef233c] text-[#ef233c]"
                  )}
                />
            </button>
        </div>
    );
}
 
export default Footer;