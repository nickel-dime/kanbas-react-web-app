import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaUserCircle,
    FaTachometerAlt,
    FaBook,
    FaCalendar,
    FaInbox,
    FaHistory,
    FaTv,
    FaExternalLinkAlt,
    FaQuestionCircle,
} from "react-icons/fa";

function KanbasNavigation() {
    const links = [
        { text: "Account", icon: <FaUserCircle /> },
        { text: "Dashboard", icon: <FaTachometerAlt /> },
        { text: "Courses", icon: <FaBook /> },
        { text: "Calendar", icon: <FaCalendar /> },
        { text: "Inbox", icon: <FaInbox /> },
        { text: "History", icon: <FaHistory /> },
        { text: "Studio", icon: <FaTv /> },
        { text: "Commons", icon: <FaExternalLinkAlt /> },
        { text: "Help", icon: <FaQuestionCircle /> },
    ];
    const { pathname } = useLocation();
    return (
        <div>
            <ul className="wd-kanbas-navigation bg-black h-screen">
                <img
                    alt="Northeastrn University Logo"
                    style={{ height: "85px", width: "fitContent" }}
                    src="https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png"
                />
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
        </div>
    );
}

function NavButton({ icon, text }) {
    return (
        <li className="text-center p-2 gap-2 flex flex-col items-center">
            <div>
                <i
                    style={
                        text == "Account"
                            ? { color: "white" }
                            : { color: "#d41b2c" }
                    }
                >
                    {icon}
                </i>
            </div>
            <div className="text-[14px]">{text}</div>
        </li>
    );
}

export default KanbasNavigation;
