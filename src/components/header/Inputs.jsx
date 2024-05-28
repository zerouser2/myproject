import { createContext, useContext, useEffect, useRef, useState } from "react";
import React from "react";

const myContext = createContext()

function Inputs() {
    const [form, setForm] = useState({
        gender: '',
        name: '',
        age: '',
        sleep_time: '',
        break_often: '',
        myxa: '',
        phraze: '',
        predatel: '',
        rugatel: '',
        chast_tela: '',
        red: '',
        job: '',
        etaj9: '',
        pyanka: '',
        ne_xvataet: '',
        bytovoi: '',
        chto_hochesh: '',
        name_dog: '',
        ploxoi_chel:'',
    });

    const [lastInputEntered, setLastInputEntered] = useState(false);
    const [currentElementIndex, setCurrentElementIndex] = useState(0);
    const data = [
        {
            key: 'gender',
            content: (
                <div>
                    Вы
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked={form.gender === 'male'} 
                            onChange={handleChange} 
                        />
                        Парень (мужчина)
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked={form.gender === 'female'} 
                            onChange={handleChange} 
                        />
                        Девушка (женщина)
                    </label>
                </div>
            )
        },
        {
            key: 'name',
            content: (
                <div>
                    Как твое имя?
                    <input type="text" name="name" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'age',
            content: (
                <div>
                    Сколько тебе лет? (число)

                    <input type="number" name="age" onChange={handleChange}/>
                </div>
            )
        },
        {
            key:'sleep_time',
            content: (
                <div>
                    Во сколько ты ложишься спать?(число)
                    <input type="number" name="sleep_time" onChange={handleChange}/>
                </div>
            )
        },
        {
            key:'break_often',
            content: (
                <div>
                    Что чаще всего ломается?
                    <input type="text" name="break_often" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'myxa',
            content: (
                <div>
                    Что обычно любят мухи?
                    <input name="myxa" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'phraze',
            content: (
                <div>
                    Напиши любую фразу:
                    <input name="phraze" onChange={handleChange}/>
                </div>
            )
        },
        {
            key:'predatel',
            content: (
                <div>
                    Как бы ты назвал человека, который предал тебя?
                    <input name="predatel" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'rugatel',
            content: (
                <div>
                    Какое ты знаешь ругательство? 
                    <input name="rugatel" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'chast_tela',
            content: (
                <div>
                    Любимая часть твоего тела?
                    <input name="chast_tela" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'red',
            content: (
                <div>
                    Что бывает красным?
                    <input name="red" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'job',
            content: (
                <div>
                    Профессия?
                    <input name="job" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'etaj9',
            content: (
                <div>
                    Что будет с собакой, если скинуть ее с 9 этажа?
                    <input name="etaj9" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'pyanka',
            content: (
                <div>
                    Каково обычно после большой пьянки?
                    <input name="pyanka" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'ne_xvataet',
            content: (
                <div>
                    Чего не хватает в твоем доме?
                    <input name="ne_xvataet" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'bytovoi',
            content: (
                <div>
                    Бытовой предмет
                    <input name="bytovoi" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'chto_hochesh',
            content: (
                <div>
                    Чего тебе хочется сейчас?
                    <input name="chto_hochesh" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'name_dog',
            content: (
                <div>
                    Как зовут твою собаку? Если нет, то как бы ты ее назвал?
                    <input name="name_dog" onChange={handleChange}/>
                </div>
            )
        },
        {
            key: 'ploxoi_chel',
            content: (
                <div>
                    Нехороший человек - ...
                    <input name="ploxoi_chel" onChange={handleChange}/>
                </div>
            )
        },
    ];

    const input = {
        display: 'block'
    };

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    function handleSubmitForm(e) {
        e.preventDefault();

        const isLastInputEntered = form.ploxoi_chel.trim() !== ''; // Проверяем, не пуст ли введенный текст в поле "ploxoi_chel"

            if (isLastInputEntered) {
                setLastInputEntered(true); // Устанавливаем флаг, что последний инпут был введен
            }
        setCurrentElementIndex(currentElementIndex + 1);
        
    }


    function outputDatas() {
        return data.map((d, index) => (
            index === currentElementIndex &&
            <React.Fragment key={d.key}>
                {d.content}
            </React.Fragment>
        ));
    }

    if (lastInputEntered) {
        return (
            <div style={{maxWidth: '540px',justifyContent: 'center'}}>
                <h3 style={{color: 'red'}}>Шуточное письмо деду морозу</h3>

                <h1>Здравствуй Дедушка Мороз! Меня зовут {form.name}</h1>

                <h3>
                    Мне {form.age} лет! Не много не мало, но я верю и надеюсь в то, что ты есть и сейчас читаешь мое письмо.
                    Моя мама очень злая тетя. Она не разрешает писать письмо тебе, поэтому я сижу в канаве и пишу это письмо.
                    Мама выпускает меня гулять только до {form.sleep_time}.Когда я ее не слушаюсь, она бросает в меня  {form.bytovoi} и частенько попадает мне прямо в {form.chast_tela} =( Однажды я не вытерпел я сказал ей: "{form.phraze}".
                    Мой папа работает {form.job} и приходя с работы с плохим настроением, он кричит: "{form.rugatel}" и заставляет меня чинить {form.break_often}. 
                    Но я не умею ничего ремонтировать, и поэтому у меня получается {form.myxa}. Он злится ещё сильнее, и запрещает мне играть в {} с друзьями.
                    Ещё папа придумал мне кличку, и зовёт меня не {form.name}, а {form.name_dog}! Это очень обидно.
                    В общем, дедушка мороз, если ты не {form.ploxoi_chel}, то ты поймёшь как мне {form.pyanka}. Дорогой Дедушка мороз - красный {form.red} забери меня к себе или вышли мне {form.bytovoi}. 
                    Ещё сделай так, что бы близкие мне люди любили меня и почаще давали мне денег на {form.chto_hochesh}. 
                    Любимый дед мороз, ты мой последний шанс.
                    Я надеюсь на новый год я найду под ёлочкой {form.ne_xvataet}. 
                    Дед Мороз, пойми как мне {form.pyanka}. Если ты не прочтёшь это письмо или оно не дойдёт до тебя, мне {form.etaj9}. Помни что я верю в тебя {form.predatel} !

                        Деду морозу! {form.name}
                </h3>
            </div>
        );
    } 
    return (
        <div style={input}>
            <div style={input}>
                <form onSubmit={handleSubmitForm}>
                    {outputDatas()}
                    <button type="submit">OK</button>
                </form>
            </div>
        </div>
    );
    
}


export default Inputs;
export {myContext}