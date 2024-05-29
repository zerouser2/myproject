import { useEffect, useRef, useState } from "react";


function Todolist() {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')
    const isFirstRender = useRef(true);

    function handleChangeInput(e) {
        let task_value = e.target.value

        setInputValue(task_value)
    }

    

    function onClickButton() {

        setTasks([...tasks, {
            id: tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1,
            content: inputValue
        }])
        

        setInputValue('')
    }

    useEffect(() => {
        // Проверяем, первый ли это рендер, и загружаем данные из локального хранилища, если да
        if (isFirstRender.current) {
          const storedPosts = JSON.parse(localStorage.getItem('tasks')) || [];
          setTasks(storedPosts);
          isFirstRender.current = false;
        } else {
          // После первого рендера обновляем данные в локальном хранилище   
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    function removeTask(id) {
        const f = tasks.filter((item) => item.id !== id)
        setTasks(f)
    }

    return (
        <div>
            <h1>To-Do List</h1>

            <div>
                <div className="tasks">
                    <h2>Количество задач: {tasks.length} (Для удаления задачи нажми на саму задачу)</h2>

                    <ul>
                        {
                            tasks.map((task, key) => (
                                <h1><li key={key} onClick={() => removeTask(task.id)}>{task.content}</li></h1>
                            ))
                        }
                    </ul>
                </div>  

                <div className="action-task">
                    <input name="name_task" type="text" value={inputValue} onChange={handleChangeInput}/>
                    <button onClick={onClickButton}>Добавить задачу</button>
                </div>
            </div>
        </div>
    );
}

export default Todolist;