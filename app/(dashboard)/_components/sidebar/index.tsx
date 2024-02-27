import List from "./list";
import NewButton from "./new-button";

const Sidebar = () => {
    return (
        <aside className="fixed z-[1] left-0 bg-[#4e151c] w-[60px] h-full flex flex-col p-3 gap-y-4">
            <List />
            <NewButton />
        </aside>
    );
}
 
export default Sidebar;