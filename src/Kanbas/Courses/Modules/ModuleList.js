import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="w-full gap-5 flex flex-col">
            <li className="list-group-item flex items-start w-2/3 gap-3">
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        dispatch(addModule({ ...module, course: courseId }))
                    }
                >
                    Add
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(updateModule(module))}
                >
                    Update
                </button>

                <input
                    className="form-control"
                    value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))
                    }
                />
                <textarea
                    className="form-control"
                    rows={1}
                    value={module.description}
                    onChange={(e) =>
                        dispatch(
                            setModule({
                                ...module,
                                description: e.target.value,
                            })
                        )
                    }
                />
            </li>
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <IndividualModule module={module} />
                    </li>
                ))}
        </ul>
    );
}
export default ModuleList;

function IndividualModule({ module }) {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="py-3 px-2 border-t border-l border-r border-[#c7cdd1] bg-[#f5f5f5] flex justify-between items-center ">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row items-center">
                        <PiDotsSixVerticalBold size={20} />
                        <AiFillCaretRight size={12} />
                    </div>
                    <div>{module.name}</div>
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <button
                        className="btn btn-primary"
                        onClick={() => dispatch(setModule(module))}
                    >
                        Edit
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteModule(module._id))}
                    >
                        Delete
                    </button>
                    <AiFillCheckCircle color="green" />
                    <AiOutlinePlus />
                    <AiOutlineMore />
                </div>
            </div>
            <div className="py-3 px-2 border border-[#c7cdd1] gap-3  flex  items-center ">
                {/* <HiOutlineDocumentText size={20} /> */}

                <div className="ml-4">{module.description}</div>
            </div>
        </div>
    );
}
