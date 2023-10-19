import { CanvasButton, ModuleButton } from "../Modules";
import ModuleList from "../Modules/ModuleList";

import { IoMdAlert } from "react-icons/io";

function Home() {
    return (
        <div className="flex gap-5">
            <div className="flex flex-col gap-2 ml-2 grow">
                <ModuleButton />
                <hr className="my-2" />
                <ModuleList />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <CanvasButton optStyles={"px-3 py-2 text-left"}>
                    Import Existing Content
                </CanvasButton>
                <CanvasButton optStyles={"px-3 py-2 text-left"}>
                    Import from Commons
                </CanvasButton>
                <CanvasButton optStyles={"px-3 py-2 text-left"}>
                    Choose Home Page
                </CanvasButton>
                <CanvasButton optStyles={"px-3 py-2 text-left"}>
                    View Course Stream
                </CanvasButton>
                <CanvasButton optStyles={"px-3 py-2 text-left"}>
                    New Announcement
                </CanvasButton>
                <CanvasButton optStyles={"px-3 py-2 text-left"}>
                    New Analytics
                </CanvasButton>
                <CanvasButton optStyles={"px-3 py-2 text-left"}>
                    View Course Notifications
                </CanvasButton>
                <div>
                    <div className=" font-bold text-md mt-2">To Do</div>
                    <hr className="my-2" />
                    <div className="flex gap-3 flex-col">
                        <Todo
                            name={"Grade A1 - ENV + HTML"}
                            points={100}
                            date={"Sep 18 at 11:59pm"}
                        ></Todo>
                        <Todo
                            name={"Grade A2 - JS"}
                            points={100}
                            date={"Sep 23 at 11:59pm"}
                        ></Todo>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Todo({ name, points, date }) {
    return (
        <div className="flex items-center gap-2">
            <div>
                <IoMdAlert size={20} color="rgb(212 27 44)" />
            </div>
            <div className="flex flex-col">
                <div className=" text-canvas text-base">{name}</div>
                <div className="flex text-gray-500 gap-1 text-xs">
                    <div className="">{points}</div>
                    &#x2022;
                    <div>{date}</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
