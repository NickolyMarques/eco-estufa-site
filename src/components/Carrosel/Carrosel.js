import React,  {Component} from "react";
import estufa from './img/estufas-agricolas-image.jpg';
import estufa2 from './img/estufas-agricolas-para-morango-image.jpg';
import scrollToComponent from 'react-scroll-to-component';
import {consultarCarouselImagens} from "../../services/carouselService";
import "./Carrosel.css";

class Carrosel extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            carousel:[]
        }
    }
    componentDidMount(){
        consultarCarouselImagens(dados => this.setState(dados));
        scrollToComponent(this.refs.carousel);
    }
    createCarouselIndicators(){
        return this.state.carousel.map((item , indice) => {
            return(
                <li key={indice} data-target="#demo" data-slide-to={indice} className={indice==0?"active":"inactive"}></li>
            )
        })


    }
    createCarouselItems(){
        return this.state.carousel.map((item , indice) => {
            return(
                <div key={indice} className={indice==0?"carousel-item active":"carousel-item"}>
                        <img src={"/carousel/"+item.imagem} alt={item.descricao} title={item.titulo}/>
                </div>
            )
        })
    }


    render(){
        return(
            <div id="demo" ref="carousel" className="carousel slide secao1" data-ride="carousel">
            
                <ul className="carousel-indicators">
                    {this.createCarouselIndicators()}
                </ul>


                <div className="carousel-inner">
                     {this.createCarouselItems()}
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