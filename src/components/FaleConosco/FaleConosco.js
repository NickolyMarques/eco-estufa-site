import React, {Component} from "react";
import './FaleConosco.css';

class FaleConosco extends Component{

    render(){
        
        return(
            
            <div className="container-fluid" id="faleConosco">
            
           
                <div className="row">
                    <div className="col-sm-12 col-md-6 paddingLeft">
                    <h2 className="content-head content-head-ribbon text-white">Fale conosco!</h2>
                        <p>
                            Estamos localizados na Rua Alziro de Oliveira, nº 231, Jardim Morumbi <br/>
                            CEP: 12926-030, Bragança Pta - SP<br/>
                            
                            Tel: (11) 4035-1499 | Cel: (11) 9 9603-3334<br/>
                            <a href="mailto:contato@ecoestufas.com.br" className="text-secondary">contato@ecoestufas.com.br</a><br/>
                        </p>
                        <div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5232617835745!2d-46.53431847857124!3d-22.930948627974743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceca1774366ec9%3A0x3c1e95e4ef403d1b!2sEco+Estufas+Agricolas+Ltda.!5e0!3m2!1spt-BR!2sbr!4v1530659371595" width="600" height="310" frameborder="0"  allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                     <div className="box-fale-conosco">
                       <div className="bg_overlay">
                            <h2 className="content-bg">Atendemos em todo território nacional!</h2>
                        <p id="estufas4anos">
                            A Eco Estufas Agrícolas atende os 4 cantos do Brasil! <br/>
                            Seja nosso REPRESENTANTE em sua região, entre em contato conosco! 
                        </p>
                    </div>    
                    </div>
                    </div>

                </div>
        </div>
        );
    }

}
export default FaleConosco;