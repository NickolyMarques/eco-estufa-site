import React,  {Component} from "react";
import estufa from './img/estufas-agricolas-image.jpg';
import estufa2 from './img/estufas-agricolas-para-morango-image.jpg';
import scrollToComponent from 'react-scroll-to-component';
import "./Carrosel.css";

class Carrosel extends Component {
    componentDidMount(){
        scrollToComponent(this.refs.carousel);
    }
    render(){
        return(
            <div id="demo" ref="carousel" className="carousel slide secao1" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    
                </ul>


                <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={estufa} alt="Los Angeles"/>
                    </div>
                        <div className="carousel-item">
                        <img src={estufa2} alt="Chicago"/>
                    </div>
                    
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        );
    }
}
export default Carrosel;