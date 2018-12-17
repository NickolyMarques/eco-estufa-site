import React, {Component} from 'react';
import LightboxEco from './LightboxEco';
import scrollToComponent from 'react-scroll-to-component';
import './Galeria.css';


class GaleriaDetalhe extends Component{

    constructor(props){
        super(props);
        this.state = {
            images:[],
            diretorios:''

        }
    }
    componentDidMount(){
        scrollToComponent(this.refs.galeriaDetalhe);
    }
    render(){
        
        return(
            
            <div className="container with-margin-top" >
            <h1 className="content-head" ref="galeriaDetalhe" id="produto">{this.props.location.state != undefined &&
                this.props.location.state.title}</h1>
               <div className="row">
                    <div className="col">
            
                        <LightboxEco diretorio={this.props.location.state != undefined && 
                            this.props.location.state.diretorio} />
                        {document.getElementById('lightboxEco')}
                    </div>
                </div>
            </div>
        )
    }

}

export default GaleriaDetalhe;