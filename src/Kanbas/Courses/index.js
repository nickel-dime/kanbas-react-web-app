import db from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaBars } from "react-icons/fa";
import { CanvasButton } from "./Modules/";
import Grades from "./Grades";
import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();

  const URL = "http://localhost:4000/api/courses";

  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="flex flex-col">
      <div className="mb-2 ml-6 mt-4 mr-3 ">
        <TopBar name={course.name} pathName={pathname} />
        <hr className="mt-3" />
      </div>
      <div className="flex">
        <CourseNavigation />
        <div className="w-full mr-5 ml-5">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;

function TopBar({ name, pathName }) {
  return (
    <div className="d-flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <FaBars style={{ color: "#d41b2c" }} size={20} />
        <div className="ml-4 text-lg">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a
                  href="#"
                  style={{
                    color: "#d41b2c",
                    textDecoration: "none",
                  }}
                >
                  {name}
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {pathName.split(/[/]+/).pop().replace("%20", " ")}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <CanvasButton optStyles={"px-3"}>Student View</CanvasButton>
      </div>
    </div>
  );
}
