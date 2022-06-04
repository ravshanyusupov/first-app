import React from 'react';
import './card.css'
import pic from '../../assets/pic.png'

function Card(props) {
    return (
        <>
            <h2 className='card-title'>Похожие продукты</h2>
            <div className='page-content'>
            <div className="card">
                <div className="card-img">
                    <img src={pic} alt=""/>
                </div>
                <p className='p-title'>Бязь-001</p>
                <div className="card-btn">
                    <button disabled className='card-btn-disabled'>$1.3/m</button>
                    <button className='card-btn-abled'>Заказать</button>
                </div>
            </div>
            <div className="card">
            <div className="card-img">
                    <img src={pic} alt=""/>
                </div>
                <p className='p-title'>Бязь-001</p>
                <div className="card-btn">
                    <button disabled className='card-btn-disabled'>$1.3/m</button>
                    <button className='card-btn-abled'>Заказать</button>
                </div>
            </div>
                <div className="card">
            <div className="card-img">
                    <img src={pic} alt=""/>
                </div>
                <p className='p-title'>Бязь-001</p>
                <div className="card-btn">
                    <button disabled className='card-btn-disabled'>$1.3/m</button>
                    <button className='card-btn-abled'>Заказать</button>
                </div>
            </div>
                <div className="card">
                    <div className="card-img">
                    <img src={pic} alt=""/>
                </div>
                <p className='p-title'>Бязь-001</p>
                <div className="card-btn">
                    <button disabled className='card-btn-disabled'>$1.3/m</button>
                    <button className='card-btn-abled'>Заказать</button>
                </div>
            </div>
            </div>
            </>
    );
}

export default Card;