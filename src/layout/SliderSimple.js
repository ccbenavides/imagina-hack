import React from 'react';
import Slider from 'react-slick';
import mitos from '../4_mitos.png';
import futbol from '../4_futbol.png';
import espacio from '../4_espacio.png';
import {
  Link
} from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    centerMode : true,
    speed: 500,
    slidesToShow: 1,
    focusOnSelect: true,
    slidesToScroll: 1,
    draggable : true,
    
};
class SliderSimple extends React.Component {
  render(){
    return <div className="slider-can"> 
        <Slider {...settings} className="slider-total">
        <div className="slider-simple">
            <img src={mitos} alt=""/>
            <h3>Mitos y Leyendas</h3>
        </div>
        <div className="slider-simple">
            <Link to="/reto/1">
                <img src={espacio} alt=""/>
                <h3>Espacio</h3>
            </Link>
        </div>
        <div className="slider-simple">
            
                <img src={futbol} alt=""/>
            <h3>Deportes</h3>

        </div>
        
      </Slider></div>;
  }
}

export default SliderSimple;

/*
<Link to="/principal" className="principal-submit">confirmar</Link>
*/