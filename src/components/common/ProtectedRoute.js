import { Navigate } from "react-router-dom";
const ProtectedRoute = function ({ redirectTo, children }) {
  let authenticated = { auth: true };
  return authenticated.auth ? children : <Navigate to={redirectTo} />;
};
export default ProtectedRoute;
