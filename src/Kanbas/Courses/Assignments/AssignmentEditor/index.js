import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { CanvasButton } from "../../Modules";
import {
    AiFillCheckCircle,
    AiOutlineCheckCircle,
    AiOutlineCiCircle,
    AiOutlineMore,
    AiOutlinePlus,
} from "react-icons/ai";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="flex justify-end items-center gap-3">
                <div className="flex text-[#008000] items-center gap-2 font-bold">
                    <AiFillCheckCircle color="green" size={20} />
                    Published
                </div>
                <CanvasButton optStyles={"px-1 py-2 h-full"}>
                    <AiOutlineMore size={20} />
                </CanvasButton>
            </div>
            <hr className="my-4"></hr>
            <h2>Assignment Name</h2>
            <input
                value={assignment.title}
                className="form-control mb-2 mt-2"
            />
            <hr className="my-4"></hr>
            <div className="flex justify-end gap-3">
                <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className=""
                >
                    <CanvasButton optStyles={"px-3 py-2 "}>Cancel</CanvasButton>
                </Link>
                <CanvasButton
                    onClick={handleSave}
                    optStyles={"px-3 bg-canvas text-white py-2 "}
                >
                    Save
                </CanvasButton>
            </div>
            <hr className="my-3"></hr>
        </div>
    );
}

export default AssignmentEditor;
