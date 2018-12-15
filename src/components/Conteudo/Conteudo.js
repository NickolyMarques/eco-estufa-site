import React, {Component} from "react";
import "./Conteudo.css";

class Conteudo extends Component{
    render(){
        return(
            <div className="container" id ="conteudoPrincipal">
            <div className="row">
                <div className="col-sm">
                   <h2 className="content-head is-center uppercase">Motivos para usar estufas</h2>
                </div>
            </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h5 className="card-title upercase text-success"><i className="fa fa-bug"></i> Controle de pragas</h5>
                            <p className="card-text">Com o cultivo protegido, as chances de prejuizo em seu plantio por conta de pragas como insetos e fungos é mínima. Garantindo melhores alimentos livres de agrotóxicos.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card bg-light">
                        <div className="card-body">
                            <h5 className="card-title upercase text-dark"><i classNamName="fa fa-leaf"></i> Produção o ano todo </h5>
                            <p className="card-text">Garanta a produção durante todo o ano com estufas climatizadas que além de proteger seu plantio, irão garantir a temperatura ideal sendo prossível produzir com qualidade idependente da época do ano.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5 className="card-title upercase text-success"><i className="fa fa-usd"></i> Economize</h5>
                                <p className="card-text">Produza mais e minimize riscos com o cultivo protegido. O investimento em qualidade refletirá em pouco tempo em maior produção e maior economia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5 className="card-title upercase text-danger"><i className="fa fa-heart"></i> Plante esta idéia</h5>
                                <p className="card-text">Com o cultivo protegido, reduzimos o número de alimentos transgênicos, com agrotóxicos e conservantes que vão às mesas das famílias. Garantindo assim, qualidade de vida as pessoas e ao nosso planeta.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}
export default Conteudo;