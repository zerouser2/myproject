import { Children, useState } from 'react';
import './container.css'


function Login({children}) {
    const [inputsValue, setInputsValue] = useState({
        login: '',
        pass: ''
    })

    function handleSubmit(e) {
        e.preventDefault()

        let storageUser = JSON.parse(localStorage.getItem('userReg'))
        
        if (inputsValue.login === storageUser.login && inputsValue.pass === inputsValue.login) {
            alert('Вы успешно вошли!')
            localStorage.setItem('userLog', JSON.stringify({login: inputsValue.login, pass: inputsValue.login}))
            setInputsValue({
                login: '',
                pass: ''
            })
        } else {
            alert('Неправильный логин или пароль')
        }
    }

    if (localStorage.getItem('userLog')) {
        return children
    } 

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className='loginForm'>
                <h1>Логин:</h1>
                <input value={inputsValue.login} onChange={(e) => setInputsValue({...inputsValue, login: e.target.value})}/>
                <h1>Пароль:</h1>
                <input value={inputsValue.pass} onChange={(e) => setInputsValue({...inputsValue, pass: e.target.value})}/>   
                <button type='submit'>Войти</button>
            </form>
        </div>
    );

}

export default Login;