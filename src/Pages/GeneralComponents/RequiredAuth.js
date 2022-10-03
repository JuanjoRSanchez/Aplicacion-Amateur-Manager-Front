import { useLocation, Navigate, Outlet } from "react-router-dom"
import userAuth from "../../hooks/useAuth"

const RequiredAuth = () => {
    const { auth } = userAuth();
    const location = useLocation();

    return (
        auth?.user
        ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequiredAuth;