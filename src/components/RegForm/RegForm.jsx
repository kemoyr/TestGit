import { useState } from 'react';
import './RegForm.css'

export default function RegForm() {

    const [inputName, setinputName] = useState('');
    const [showForm, setShowForm] = useState(false); 
    const [showButton, setShowButton] = useState(true)


    const inputHandler = (e) => {
        if (e.target.value.match(/\d+/)) {
            setinputName(e.target.value.match(/\d+/)[0]);
        } else {
            setinputName('');
        }
    };

    const openFormHandler = () => {
        setShowForm(true);
        setShowButton(false)
    };

    const closeFormHandler = () => {
        setShowForm(false);
        setShowButton(true)
    };


    return (
        <div>
            {showButton && (

                <button onClick={openFormHandler} >Открыть форму регистрации</button>

            )}

            {showForm && (
                <form  className="container">
                    <input type="text" placeholder='Имя'/>
                    <input type="text" placeholder='Фамилия' />
                    <input value={inputName} type="text"  onChange={inputHandler} placeholder='Возраст'/>
                    <label>
                        Выберите ваш город:
                        <select>
                            <option value="34">Москва</option>
                            <option value="33">Питер</option>
                            <option value="32">Казань</option>
                        </select>
                    </label>
                    <button>Отправить</button>

                    <button onClick={closeFormHandler}>Отмена</button>
                </form>
            )}
        </div>
    );
}

