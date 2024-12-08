import { Navigate } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProtectedRoute = ({ component: Component }) => {
    const isAuth = useIsLoggedIn();
    
    if (!isAuth) {
        toast.error("You must be logged in to view this page");
        console.log("Not authenticated, redirecting to login");
        return <Navigate to="/login" replace />;
    }
    
    // Ensure the component is passed correctly
    if (!Component) {
        console.error("No component provided to ProtectedRoute");
        return null;
    }
    
    return <Component />;
};

export default ProtectedRoute;