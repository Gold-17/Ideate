import { Loader } from "lucide-react";

import { SkeletonInfo} from "./info";
import { SkeletonParticipants } from "./participants";
import { SkeletonToolbar } from "./toolbar";

const Loading = () => {
    return (
        <main className="flex items-center justify-center w-full h-full relative bg-neutral-100 touch-none">
            <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
            <SkeletonInfo />
            <SkeletonParticipants />
            <SkeletonToolbar />
        </main>
    );
}
 
export default Loading;