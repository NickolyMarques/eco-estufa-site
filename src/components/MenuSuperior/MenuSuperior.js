import React, {Component} from "react";
import './MenuSuperior.css';
import {Link} from 'react-router-dom';
import { HashLink as AnchoredLink } from 'react-router-hash-link'; 

class MenuSuperior extends Component{
    render(){
        return(

        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" id="logo-eco-estufas" href="/"></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link upercase">Home <span className="sr-only">(current)</span></Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to='/quemsomos' className="nav-link upercase">Quem Somos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/produtos' className="nav-link upercase">Produtos</Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to='/galeria' className="nav-link upercase">Galeria</Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to='/orcamento' className="nav-link upercase">Orçamento</Link>
                        
                    </li>
                    <li className="nav-item">
                        <AnchoredLink to='#contato' className="nav-link upercase">Contato</AnchoredLink>
                    </li>
                </ul>
                <ul className="list-inline" id="redesSociais">
                    <li className="list-inline-item">
                        <a className="social-icon text-xs-center" target="_blank" href="https://www.youtube.com/channel/UCqCZIrwox7K9YPWAn_puG2Q">
                            <i className="fa fa-youtube-play fa-2x"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-icon text-xs-center" target="_blank" href="https://www.facebook.com/ecoestufasagricolas/">
                            <i className="fa fa-facebook-square fa-2x"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-icon text-xs-center" target="_blank" href="https://wa.me/5511996033334/?text=Gostaria%20entrar%20em%20contato">
                        <i className="fa fa-whatsapp fa-2x"></i><em>(11)</em><span> 9 9603.3334</span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-icon text-xs-center" target="_blank" href="tel:1140351499">
                            <i className="fa fa-phone fa-2x"></i><em>(11)</em><span> 4035.1499</span>
                        </a>
                    </li>
   
</ul>
            </div>    
        </nav>

        );
    }
}
export default MenuSuperior;