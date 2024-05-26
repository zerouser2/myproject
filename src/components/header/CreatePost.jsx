import { useEffect, useRef, useState } from 'react';
import './container.css'
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const isFirstRender = useRef(true);
    const [posts, setPosts] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const navigate = useNavigate();

    function onClickHandler(e) {
        e.preventDefault();

        setPosts((prev) => [
        ...prev,
        {
            title: inputValue,
            body: textareaValue,
        },
        ]);

        setInputValue('');
        setTextareaValue('');

        alert('Пост успешно создан');
    }

    useEffect(() => {
        // Проверяем, первый ли это рендер, и загружаем данные из локального хранилища, если да
        if (isFirstRender.current) {
          const storedPosts = JSON.parse(localStorage.getItem('post')) || [];
          setPosts(storedPosts);
          isFirstRender.current = false;
        } else {
          // После первого рендера обновляем данные в локальном хранилище   
          localStorage.setItem('post', JSON.stringify(posts));
        }
      }, [posts]);

    

    return (
        <div className='container'> 
            <div className=' create_post'>
                <h2>Введите Название поста:</h2>
                <input placeholder="Название поста" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <h2>Введите содержимое поста:</h2>
                <textarea value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)}/>
                <button onClick={onClickHandler}>Создать</button>
            </div>
            <button onClick={() => navigate(-1)}>Назад к постам</button>
        </div>
    );
}

export default CreatePost;