import React, {useState} from 'react';
import pic from '../../assets/pic.png'
import './slider.css'
import pic2 from '../../assets/pic2.png'

function Slider(props) {
    const [sliderUrl, setSliderUrl] = useState(pic)
    const slider = (e) => {
        setSliderUrl(e.target.src)
    }
    return (
        <div className='slider-top'>
            <div className="slider-img">
                <div className="slider-big">
                    <img src={sliderUrl} alt=""/>
                </div>
                <div className='slider-small'>
                    <div className="slider-couple">
                    <img src={pic2} onClick={slider} alt=""/>
                </div>
                 <div className="slider-couple-2">
                    <img src={pic} onClick={slider} alt=""/>
                </div>
                </div>
            </div>
            <div className="slider-text">
                <h2 style={{marginBottom: '8px'}}>Бязь-001</h2><br/>
                <i className='fas fa-star' style={{color: 'yellow'}}></i>
                <i className='fas fa-star' style={{color: 'yellow'}}></i>
                <i className='fas fa-star' style={{color: 'yellow'}}></i>
                <i className='fas fa-star' style={{color: 'yellow'}}></i>
                <i className='far fa-star'></i>
                <br/><br/>
                <p style={{marginBottom: '8px'}}>Цветь</p>
                <button style={{background: 'pink', width: '20px', height: '20px', borderRadius: '5px'}}></button>
                <button style={{background: 'lightgreen', width: '20px', height: '20px', borderRadius: '5px', margin: '3px'}}></button>
                <button style={{background: 'orange', width: '20px', height: '20px', borderRadius: '5px'}}></button><br/><br/>
                    <h3 style={{display: 'inline-block'}}>$1.5</h3>
                    <button className='slider-btn-abled'>Заказать</button><br/><br/>
                <div className='text-a'>
                    <p>Мясный свитер с вышитыми сердечками
                        выполнен из мягкого вязанного трикотажа.
                        Прямой крой , воротник-стойка , длинные рякава с
                            заниженной линией плеча , манжеты и эластичные низ.</p><br/><br/>
                    <div style={{display: 'flex', justifyContent: 'start'}}>
                        <div className='slider-text-title-left'>
                            <p>Рисунок</p>
                            <p>Конструктивные элементы</p>
                            <p>Длина рукава</p>
                            <p>Тип рукава</p>
                            <p>Силуэт</p>
                        </div>
                        <div className='slider-text-title-right'>
                            <p>сердце</p>
                            <p>манжеты</p>
                            <p>длинный</p>
                            <p>со сгущённой линией плеча</p>
                            <p>прямой</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    );
}

export default Slider;