import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
    const courses = db.courses;
    return (
        <div className="ml-4 mr-4">
            <div className="mt-4">
                <div className="text-2xl">Dashboard</div>
                <hr className="mt-2" />
                <div className="ml-4 mt-3">
                    <div className="text-lg">Published Courses (24)</div>
                    <hr className="mt-2" />
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
                            name={course.name}
                            number={course.number}
                            startDate={course.startDate}
                            endDate={course.endDate}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;

function DashboardComponent({ name, number, startDate, endDate }) {
    return (
        <div className="card w-[18rem] border">
            <div className=" bg-blue-600 h-[150px]"></div>
            <div className="card-body">
                <h5 className="card-title text-xl">{name}</h5>
                <p className="card-text text-lg">
                    {number} <br />
                    {startDate} - {endDate}
                </p>
            </div>
        </div>
    );
}
