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
                <div>
                    <div className="slider-couple">
                    <img src={pic2} onClick={slider} alt=""/>
                </div>
                 <div className="slider-couple-2">
                    <img src={pic} onClick={slider} alt=""/>
                </div>
                </div>
            </div>
            <div className="slider-text">
                <h2>Бязь-001</h2>
                <i className='fas fa-star' style={{color: 'yellow'}}></i>
                <i className='fas fa-star' style={{color: 'yellow'}}></i>
                <i className='fas fa-star' style={{color: 'yellow'}}></i>
                <i className='fas fa-star' style={{color: 'yellow'}}></i>
                <i className='far fa-star'></i>
                <br/><br/>
                <p>Цветь</p>
                <button style={{background: 'pink', width: '20px', height: '20px', borderRadius: '20px'}}></button>
                <button style={{background: 'lightgreen', width: '20px', height: '20px', borderRadius: '20px', margin: '3px'}}></button>
                <button style={{background: 'orange', width: '20px', height: '20px', borderRadius: '20px'}}></button><br/>
                    <h3 style={{display: 'inline-block'}}>$1.5</h3>
                    <button className='slider-btn-abled'>Заказать</button>
                <div className='text-a'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti dignissimos dolores excepturi exercitationem facere fugit illum incidunt ipsa laborum, maxime, minima, molestias mollitia optio pariatur quae quidem voluptatibus voluptatum!</p>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
                        <div>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;