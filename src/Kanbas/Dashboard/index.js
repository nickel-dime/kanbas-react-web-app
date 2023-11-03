import { Link } from "react-router-dom";
import db from "../Database";
import { useState } from "react";
function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}) {
    return (
        <div className="ml-4 mr-4">
            <div className="mt-4">
                <div className="text-2xl">Dashboard</div>
                <hr className="mt-2" />
                <div className="ml-4 mt-3">
                    <div className="text-lg">Published Courses (24)</div>
                    <hr className="mt-2" />
                    <div className="flex gap-2 w-2/3 mt-3">
                        <input
                            value={course.name}
                            className="form-control"
                            onChange={(e) =>
                                setCourse({ ...course, name: e.target.value })
                            }
                        />

                        <input
                            value={course.number}
                            className="form-control"
                            onChange={(e) =>
                                setCourse({ ...course, number: e.target.value })
                            }
                        />

                        <input
                            value={course.startDate}
                            className="form-control"
                            type="date"
                            onChange={(e) =>
                                setCourse({
                                    ...course,
                                    startDate: e.target.value,
                                })
                            }
                        />

                        <input
                            value={course.endDate}
                            className="form-control"
                            type="date"
                            onChange={(e) =>
                                setCourse({
                                    ...course,
                                    endDate: e.target.value,
                                })
                            }
                        />

                        <button
                            className="btn btn-primary rounded-none"
                            onClick={addNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-success rounded-none"
                            onClick={updateCourse}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
            <div className="ml-4 mt-4 d-flex flex-row gap-8 flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap flex-wrap">
                {courses.map((course, idx) => (
                    <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item"
                    >
                        <DashboardComponent
                            course={course}
                            deleteCourse={deleteCourse}
                            setCourse={setCourse}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;

function DashboardComponent({ course, deleteCourse, setCourse }) {
    return (
        <div className="card w-[18rem] border">
            <div className=" bg-blue-600 h-[150px]"></div>
            <div className="card-body">
                <h5 className="card-title text-xl">{course.name}</h5>
                <p className="card-text text-lg">
                    {course.number} <br />
                    {course.startDate} - {course.endDate}
                </p>
                <div className="flex gap-2 justify-end mt-2">
                    <button
                        className="border py-1 rounded-sm border-[#c7cdd1] bg-[#f5f5f5] px-3"
                        onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                        }}
                    >
                        Edit
                    </button>

                    <button
                        className="btn btn-danger rounded-none"
                        onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
