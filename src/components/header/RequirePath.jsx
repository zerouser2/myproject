import { Suspense, useEffect, useState } from "react";
import { Await, Navigate, useLoaderData, useLocation } from "react-router-dom";


function RequirePath({children}) {
    const isLoggedIn = useLoaderData(); 
    const location = useLocation()
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (!isLoggedIn) {
            const timer = setTimeout(() => {
                setRedirect(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isLoggedIn])    

    if (!isLoggedIn) {
        if (redirect) {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }

        return (
            <div>
                <h1>Вы не зарегистрированы. Вы будете перенаправлены на страницу логина через 5 секунд</h1>
            </div>  
        );
    }

    return children;
}


function pathLoader() {
    const data = localStorage.getItem('userLog');
    if (data) {
        return true
    } else {
        return false
    }
}

export default RequirePath;
export {pathLoader}