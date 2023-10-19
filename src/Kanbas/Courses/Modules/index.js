import ModuleList from "./ModuleList";
import {
    AiOutlineCheckCircle,
    AiFillCaretDown,
    AiOutlinePlus,
    AiOutlineMore,
} from "react-icons/ai";

function Modules() {
    return (
        <div className="flex gap-2 flex-col mt-2">
            <div className="flex justify-end">
                <ModuleButton />
            </div>
            <hr className="mt-2" />
            <div className="mt-4">
                <ModuleList />
            </div>
        </div>
    );
}

export function ModuleButton() {
    return (
        <div className="mt-2 flex gap-3">
            <CanvasButton optStyles={"px-3"}>Collapse All</CanvasButton>
            <CanvasButton optStyles={"px-3"}>View Progress</CanvasButton>
            <CanvasButton optStyles={"px-3"}>
                <div className="flex items-center gap-1">
                    <AiOutlineCheckCircle color="green" />
                    Publish All
                    <AiFillCaretDown size={12} />
                </div>
            </CanvasButton>
            <div className="flex gap-2">
                <CanvasButton optStyles={"bg-canvas text-white px-3"}>
                    <div className="flex items-center gap-1">
                        <AiOutlinePlus />
                        Module
                    </div>
                </CanvasButton>
                <CanvasButton optStyles={"px-1 h-full"}>
                    <AiOutlineMore />
                </CanvasButton>
            </div>
        </div>
    );
}

export function CanvasButton({ children, optStyles, onClick = () => {} }) {
    return (
        <button
            onClick={onClick}
            className={`border py-1 rounded-sm border-[#c7cdd1] bg-[#f5f5f5] ${optStyles}`}
        >
            {children}
        </button>
    );
}

export default Modules;
