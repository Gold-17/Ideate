import Image from "next/image";

const EmptyFavorites = () => {
    return (
        <div className="flex flex-col h-full items-center justify-center">
            <Image
              src="empty-favorites.svg"
              alt="No Favorites Results"
              width={140}
              height={140}
            />
            <h2 className="text-2xl font-semibold mt-6">
                No favorite boards
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Try adding a favorite board
            </p>
        </div>
    );
}
 
export default EmptyFavorites;