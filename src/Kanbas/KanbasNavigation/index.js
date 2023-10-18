import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaUserCircle,
    FaTachometerAlt,
    FaBook,
    FaCalendar,
} from "react-icons/fa";

function KanbasNavigation() {
    const links = [
        { text: "Account", icon: <FaUserCircle /> },
        { text: "Dashboard", icon: <FaTachometerAlt /> },
        { text: "Courses", icon: <FaBook /> },
        { text: "Calendar", icon: <FaCalendar /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation me-10">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link.text}`}
                    className={`list-group-item ${
                        pathname.includes(link) && "active"
                    }`}
                >
                    <NavButton icon={link.icon} text={link.text} />
                </Link>
            ))}
        </ul>
    );
}

function NavButton({ icon, text }) {
    return (
        <li>
            <div className="ml-10 mt-10">
                <div>{icon}</div>
                {text}
            </div>
        </li>
    );
}

export default KanbasNavigation;
