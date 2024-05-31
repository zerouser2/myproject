import { Outlet, Link, useLocation } from 'react-router-dom';
import header from './header.module.css'
import './container.css'
import React, { useState } from 'react';

function Header() {
    const [showTitle, setShowTitle] = useState(true);
    const location = useLocation();

    const shouldHideTitle = () => {
        return location.pathname !== '/';
    };

    React.useEffect(() => {
        setShowTitle(!shouldHideTitle());
    }, [location]);

    return (
        <>
            <header className={header.shapka}>
                {/* <Link to="/">Главная</Link>
                <Link to='/posts'>Посты</Link>
                <Link to='/login'>Войти</Link>
                <Link to='/register'>Зарегистрироваться</Link>
                <Link to='/params'>ПАРАМЕТРЫ</Link> */}


                {/* <Link to='/pismoxd'>Письмо Деду Морозу</Link>
                <Link to='/todolist'>Ту-ду лист</Link>
                <Link to='/weather'>Прогноз погоды</Link>
                <Link to='/store'>Магазин</Link> */}

                <Link to='/neskam'>Кто ты из бравл старс???</Link>

            </header>
            {showTitle && (
                <div>
                    <h1>Добро пожаловать на сайт!</h1>
                </div>
            )}
            <Outlet />
        </>
    );
}

export default Header;