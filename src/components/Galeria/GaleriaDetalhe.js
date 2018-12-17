import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import {galeriaService,listaImages} from "../../services/galeriaService";
import baguetteBox from 'baguettebox.js';
import LightboxEco from './LightboxEco';
import {Link} from 'react-router-dom';
import { HashLink as AnchoredLink } from 'react-router-hash-link'; 
import './Galeria.css';


class GaleriaDetalhe extends Component{

    constructor(props){
        super(props);
        this.state = {
            images:[],
            diretorios:''

        }
    }

    render(){
        
        return(
            <div className="container" id="quemsomos">
               <div className="row">
                    <div className="col with-margin-top">
            
                        <LightboxEco diretorio={this.props.location.state.diretorio} />
                        {document.getElementById('lightboxEco')}
                    </div>
                </div>
            </div>
        )
    }

}

export default GaleriaDetalhe;