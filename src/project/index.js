import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Nav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account/:id" element={<Account />} />

          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;

function Nav() {
  //   const { currentUser } = useSelector((state) => state.usersReducer);
  const currentUser = false;
  return (
    <>
      <div className="list-group">
        <Link to="/project/" className="list-group-item list-group-item-action">
          Home
        </Link>
        {!currentUser && (
          <>
            <Link
              to="/project/search"
              className="list-group-item list-group-item-action"
            >
              Search
            </Link>
            <Link
              to="/project/signin"
              className="list-group-item list-group-item-action"
            >
              SignIn
            </Link>
            <Link
              to="/project/signup"
              className="list-group-item list-group-item-action"
            >
              SignUp
            </Link>
            <Link
              to="/project/account"
              className="list-group-item list-group-item-action"
            >
              Account
            </Link>
          </>
        )}
        {currentUser && (
          <>
            {currentUser.role === "ADMIN" && (
              <Link
                to="/project/users"
                className="list-group-item list-group-item-action"
              >
                Users
              </Link>
            )}
            <Link
              to="/project/account"
              className="list-group-item list-group-item-action"
            >
              Account
            </Link>
          </>
        )}
      </div>
    </>
  );
}
