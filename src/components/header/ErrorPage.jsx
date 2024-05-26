import { useRouteError } from "react-router-dom";


function ErrorPage() {
    const error = useRouteError()

    console.log(error)
    
    return (
        <div>
            <h1>{error.status}</h1>
            <h1>{error.message || 'Something goes wrong'}</h1>
            <h2>{error.data.reason}</h2>
        </div>
    );
}

export default ErrorPage;