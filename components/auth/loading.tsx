import Image from "next/image";

const Loading = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center">
            <Image
              src="/ideate-logo.svg"
              alt="Loading"
              width={120}
              height={120}
              className="animate-bounce duration-700"
            />
        </div>
    );
}
 
export default Loading;