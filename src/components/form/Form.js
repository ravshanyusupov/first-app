import React from 'react';
import './form.css'

function Form(props) {
    return (
        <div className='main'>
            <h1 className='h1-title'>Есть какой нибудь вопросы?</h1>
            <div className='form'>
                <input type="text" className='name' placeholder='Имя'/>
                <input type="text" className='number-input' placeholder='Телефон номер'/>
                <button className='btn'>Отправить</button>
            </div>
            </div>
    );
}

export default Form;