import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
    AiFillCaretDown,
    AiFillCaretRight,
    AiFillCheckCircle,
    AiOutlineMore,
    AiOutlinePlus,
} from "react-icons/ai";
import { PiDotsSixVerticalBold } from "react-icons/pi";

import { RiDraftLine } from "react-icons/ri";
import { CanvasButton } from "../Modules";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    return (
        <div>
            <div className="flex justify-between">
                <div className="mt-2">
                    <input
                        id="assignment-search"
                        class="form-control form-control-md"
                        placeholder="Search for Assignment"
                        type="text"
                        title="Type the name of an assignment you want to search"
                    />
                </div>
                <div className="gap-2 flex">
                    <CanvasButton optStyles={"px-3"}>
                        <div className="flex items-center gap-1">
                            <AiOutlinePlus />
                            Group
                        </div>
                    </CanvasButton>
                    <CanvasButton optStyles={"px-3 bg-canvas text-white"}>
                        <div className="flex items-center gap-1">
                            <AiOutlinePlus />
                            Assignment
                        </div>
                    </CanvasButton>
                    <CanvasButton optStyles={"px-1 h-full"}>
                        <AiOutlineMore />
                    </CanvasButton>
                </div>
            </div>
            <hr className="my-3"></hr>
            <div className="py-3 px-2 border border-[#c7cdd1] bg-[#f5f5f5] flex justify-between items-center ">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row items-center">
                        <PiDotsSixVerticalBold size={20} />
                        <AiFillCaretDown size={12} />
                    </div>
                    <div className="font-bold">ASSIGNMENTS</div>
                </div>
                <div className="flex gap-3 items-center">
                    <div className=" border rounded-2xl py-1 px-2">
                        40% of Total
                    </div>
                    <AiOutlinePlus />
                    <AiOutlineMore />
                </div>
            </div>

            <div className="">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item"
                    >
                        <AssignmentItem name={assignment.title} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

function AssignmentItem({ name }) {
    return (
        <div className="py-3 px-2 border-l-4 border-l-green-800  border-r border-b border-[#c7cdd1] gap-3  flex  items-center justify-between">
            <div className="flex flex-row gap-2">
                <div className="flex flex-row items-center gap-2">
                    <PiDotsSixVerticalBold size={20} />
                    <RiDraftLine size={15} color="green" />
                    <div className="flex flex-col gap-1 ml-2 ">
                        <div>{name}</div>
                        <div className="text-sm flex gap-3 text-gray-800">
                            <div className="text-canvas">Multiple Modules</div>
                            <div>|</div>
                            <div>
                                <b>Due </b>
                                Sep 18 at 11:59pm
                            </div>
                            <div>|</div>
                            <div>100 pts</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <AiFillCheckCircle size={20} color="green" />
                <AiOutlineMore size={20} />
            </div>
        </div>
    );
}

export default Assignments;
