import React from 'react';
import './card.css'
import pic from '../../assets/pic.png'

function Card(props) {
    return (
        <>
            <h1 className='card-title'>Похожие продукты</h1>
            <div className='page-content'>
            <div className="card">
                <div className="card-img">
                    <img src={pic} alt=""/>
                </div><br/>
                <h3 className='p-title'>Бязь-001</h3><br/>
                <div className="card-btn">
                    <button disabled className='card-btn-disabled'>$1.3/m</button>
                    <button className='card-btn-abled'>Заказать</button>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={pic} alt=""/>
                </div><br/>
                <h3 className='p-title'>Бязь-001</h3><br/>
                <div className="card-btn">
                    <button disabled className='card-btn-disabled'>$1.3/m</button>
                    <button className='card-btn-abled'>Заказать</button>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={pic} alt=""/>
                </div><br/>
                <h3 className='p-title'>Бязь-001</h3><br/>
                <div className="card-btn">
                    <button disabled className='card-btn-disabled'>$1.3/m</button>
                    <button className='card-btn-abled'>Заказать</button>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src={pic} alt=""/>
                </div><br/>
                <h3 className='p-title'>Бязь-001</h3><br/>
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