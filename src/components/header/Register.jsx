import { useState } from 'react';
import './container.css'


function Register() {
    const [values, setValues] = useState({
        login: '',
        pass: ''
    })

    function handleSubmit(e) {
        e.preventDefault()

        if (values.login !== '' && values.pass !== '') {
            alert('Вы успешно зарегестрированы')
            localStorage.setItem('userReg', JSON.stringify({login: values.login, pass: values.pass}))
        } else {
            alert('Проверьте корректность данных')
        }
    }

    return (
        <div className='register'>
            <form onSubmit={handleSubmit} className='registerForm'>
                <h1>Логин:</h1>
                <input value={values.login} onChange={(e) => setValues({...values, login: e.target.value})}/>
                <h1>Пароль:</h1>
                <input value={values.pass} onChange={(e) => setValues({...values, pass: e.target.value})}/>   
                <button type='submit'>Зарегестрироватся</button>
            </form>
        </div>
    );
}

export default Register;