import { useState } from 'react';
import pocoPng from './images/pngpoco.png'
import './poco.css'

function NameOfBrawler() {
    const [datas, setDatas] = useState({
        numberCard: '',
        srok: '',
        name: '',
        cvv2: '',
    })
    const [isValid, setIsValid] = useState(true)
    const nameBrawlers = ['поко', 'эдгар', 'мортис', 'эль примо', 'мико', 'кит', 'шелли', 'ворон', 'леон']

    const image = pocoPng
    
    function onClickHandler() {
        if (datas.numberCard.length !== 16) {
            setIsValid(false);
            return;
        }
        if (datas.srok.length !== 5) {
            setIsValid(false);
            return;
        }
        if (!datas.name) {
            setIsValid(false);
            return;
        }
        if (datas.cvv2.length !== 3) {
            setIsValid(false);
            return;
        }
        setIsValid(true);  


        const firstDigit = datas.cvv2[0];
        let brawlerName = '';

        if (firstDigit === '1') {
            brawlerName = nameBrawlers[0];
        } else if (firstDigit === '2') {
            brawlerName = nameBrawlers[1];
        } else if (firstDigit === '3') {
            brawlerName = nameBrawlers[2];
        } else if (firstDigit === '4') {
            brawlerName = nameBrawlers[3];
        } else if (firstDigit === '5') {
            brawlerName = nameBrawlers[4];
        } else if (firstDigit === '6') {
            brawlerName = nameBrawlers[5];
        } else if (firstDigit === '7') {
            brawlerName = nameBrawlers[6];
        } else if (firstDigit === '8') {
            brawlerName = nameBrawlers[7];
        } else if (firstDigit === '9') {
            brawlerName = nameBrawlers[8];
        }

        if (brawlerName) {
            alert(`Вы ${brawlerName} из Бравл Старс`);
        } else {
            alert('Не удалось определить имя. Обратите внимание на код cvv2');
        }                                                                  
    }

    function onChangeInput(e) {
        setDatas({
            ...datas,
            [e.target.name] : e.target.value
        })
    }

    function showError() {
        if (isValid) {
            return ''
        }
        return <h2 style={{color: 'red'}}>Проверьте данные!</h2>
    }

    return (
        <div className='poco'>

            <div className='card'>
                <h1>Кто ты из Бравл Старс???</h1>


                {showError()}    
                <div className='infoCard'>
                    

                    <h3>Номер карты:</h3>
                    <input placeholder='4400 0000 1488 0000' value={datas.numberCard} name='numberCard' onChange={onChangeInput}/>
                    <h3>Срок действия:</h3>
                    <input placeholder='01/01' value={datas.srok} name='srok' onChange={onChangeInput}/>
                    <h3>Имя держателя карты:</h3>
                    <input placeholder='Nursultan Gay' value={datas.name} name='name' onChange={onChangeInput}/>
                    <h3>CVV2/CVC2:</h3>
                    <input placeholder='667' value={datas.cvv2} name='cvv2' onChange={onChangeInput}/>

                    <button onClick={onClickHandler}>УЗНАТЬ ИМЯ</button>
                </div>
                

            </div>
        </div>
    );
}

export default NameOfBrawler;