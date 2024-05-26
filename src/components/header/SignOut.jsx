import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


function SignOut() {
    const location = useLocation()
    const navigate = useNavigate()
    
    function signOutAcc() {
        localStorage.removeItem('userLog')
        navigate('/', {replace: false})
    }
    
    const user = JSON.parse(localStorage.getItem('userLog'))
    let pass = ''

    for (let i = 0; i < user.pass.length; i++) {
        pass += '*'
    }

    return (
        <div>

            <h1>Ваш логин: {user.login}</h1>
            <h1>Ваш пароль: {pass}</h1>
            <button onClick={signOutAcc}>

                Выйти из аккаунта
            </button>
        </div>
    );
}

export default SignOut;