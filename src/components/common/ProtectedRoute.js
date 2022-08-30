import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Admin from "../Admin/admin";

const ProtectedRoute = function ({ redirectTo }) {
  console.log(redirectTo);
  let authenticated = { auth: true };
  // return authenticated.auth ? <Outlet /> : <Navigate to={redirectTo} />;

  if (!authenticated.auth) return <Navigate to={redirectTo} />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </>
  );
};
export default ProtectedRoute;
