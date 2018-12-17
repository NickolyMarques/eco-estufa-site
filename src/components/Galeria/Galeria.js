import React, {Component} from 'react';
import {galeriaService,listaImages} from "../../services/galeriaService";
import baguetteBox from 'baguettebox.js';
import {Link} from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import './Galeria.css';


class Galeria extends Component{

    constructor(props){
        super(props);
        this.state = {
            listaGaleria:[],
            images:[]

        }
    }
    componentDidMount(){
        galeriaService(dados => this.setState(dados));
        scrollToComponent(this.refs.galeria);
    }
    
    mountGallery(){
        return this.state.listaGaleria.map((item , indice) => {
            return(
                <div key={indice} className="col-md-6 col-lg-4 item zoom-on-hover" >
                    <Link className="lightbox" to={{ pathname: '/detalhe-galeria', state: { diretorio: item.diretorio,
                    title:item.descricao } }}>
                    
                        <img className="img-fluid image" src={item.src}/>
                        <span className="description">
                            <span className="description-heading">{item.galeria}</span>
                            <span className="description-body">{item.descricao}</span>
                        </span>
                        </Link>
                </div>
            )
        })

        

    }
    render(){

        return(
            
            <section class="gallery-block compact-gallery with-margin-top">
            <h1 ref="galeria" id="produto">Galeria Eco Estufas</h1>
                <div class="container">
                    <div className="row no-gutters">
                        {this.mountGallery()}
                        
                        
                        

                        
                    </div>
                </div>
            </section>
            
        )
    }
}
baguetteBox.run('.gallery');
baguetteBox.run('.compact-gallery',{animation:'slideIn'});
export default Galeria; 