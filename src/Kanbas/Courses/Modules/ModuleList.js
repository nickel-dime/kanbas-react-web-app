import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {
    AiFillCaretRight,
    AiOutlinePlus,
    AiOutlineMore,
    AiFillCheckCircle,
} from "react-icons/ai";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { HiOutlineDocumentText } from "react-icons/hi";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <ul className="w-full gap-5 flex flex-col">
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <IndividualModule {...module} />
                    </li>
                ))}
        </ul>
    );
}
export default ModuleList;

function IndividualModule({ name, description }) {
    return (
        <div>
            <div className="py-3 px-2 border-t border-l border-r border-[#c7cdd1] bg-[#f5f5f5] flex justify-between items-center ">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row items-center">
                        <PiDotsSixVerticalBold size={20} />
                        <AiFillCaretRight size={12} />
                    </div>
                    <div>{name}</div>
                </div>
                <div className="flex gap-3">
                    <AiFillCheckCircle color="green" />
                    <AiOutlinePlus />
                    <AiOutlineMore />
                </div>
            </div>
            <div className="py-3 px-2 border border-[#c7cdd1] gap-3  flex  items-center ">
                {/* <HiOutlineDocumentText size={20} /> */}

                <div className="ml-4">{description}</div>
            </div>
        </div>
    );
}
