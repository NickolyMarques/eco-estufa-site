import React, {Component} from "react";
import {enviarEmail} from "../../services/emailService";
import scrollToComponent from 'react-scroll-to-component';
import { METHOD_CONTATO } from "../../services/base";
import "./Contato.css";

class Contato extends Component{
    constructor(props){
        super(props);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            envio:''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let formulario={};
        formulario['nome']=this.refs.nome.value;
        formulario['telefone']=this.refs.telefone.value;
        formulario['email']=this.refs.email.value;
        formulario['comentarios']=this.refs.comentarios.value;
        formulario['metodo']=METHOD_CONTATO;
        enviarEmail(dados => this.setState(dados), formulario,METHOD_CONTATO);
        this.refs.nome.value="";
        this.refs.telefone.value="";
        this.refs.comentarios.value="";
        this.refs.email.value="";
        scrollToComponent(this.refs.contatoText);
    }

    handleCloseAlert(event){
        this.setState({envio:''})

    }



    render(){

        return(
            <div className="container" id="contato">
             <div className="row">
             <div className="asdad">{this.state.erro}</div>
             <div className="col-sm">
             <h3 ref='contatoText' className="text-uppercase" id="contatoText"><i className="fa fa-envelope" ></i>Ficou com dúvidas? Gostaria de uma visita? Preencha o formulário abaixo e nós entraremos em contato !</h3>
             {  this.state.envio.indexOf('ok')>-1 &&
             
                <div className="alert alert-success alert-dismissible fade show">
                    <button type="button" className="close" data-dismiss="alert" onClick={this.handleCloseAlert}>&times;</button>
                    <strong>Successo</strong> O seu email foi enviado com sucesso.
                </div>
            }
            </div>
           </div>
            <div className="row">
                <div className="col-sm-12 col-md-6">

                 <form onSubmit={this.handleSubmit} ref='formularioContato'>
                    <div className="form-group">
                            <label for="nameComplete">Nome</label>
                            <input type="text" className="form-control" ref='nome' id="nameComplete" placeholder="Nome Completo"/>
                    </div>
                    <div className="form-group">
                            <label for="nameComplete">Telefone</label>
                            <input type="text" className="form-control" ref='telefone' id="telefone" placeholder="DDD + Número do telefone"/>
                    </div>
                     <div className="form-group">
                            <label for="inputEmail4">E-mail</label>
                            <input type="email" className="form-control" ref='email' id="inputEmail4" placeholder="E-mail"/>
                     </div>
                    <div className="form-group">
                        <label for="comment">Comentários:</label>
                        <textarea className="form-control" rows="5" ref='comentarios' id="comment"></textarea>
                    </div>
                  
                    <button type="submit" className="btn btn-default">Enviar</button>
                 </form>
                   
                </div>
                <div className="col-sm-12 col-md-6">
                <blockquote className="blockquote">
                     <p className="mb-0">Colsultoria Personalizada para seu Negócio</p>
                     <footer className="blockquote-footer">Náo sabe por onde começar?<cite title="Nós temos consultores que te podem ajudar de acordo com seu tipo de negócio.">Nós temos consultores que te podem ajudar de acordo com seu tipo de negócio.</cite></footer>
                </blockquote>

                <blockquote className="blockquote">
                     <p className="mb-0">Estufas Personalizada para seu Negócio</p>
                     <footer className="blockquote-footer">Fazemos tudo a medida: <cite title="Porque para nós seu negócio tem que ser diferenciado.">Porque para nós seu negócio tem que ser diferenciado.</cite></footer>
                </blockquote>

                <blockquote className="blockquote">
                     <p className="mb-0">Colsultoria Personalizada para seu Negócio</p>
                     <footer className="blockquote-footer">Tenha a Segurança de produzir o Ano todo?<cite title="Nao dependa do tempo, nem da sorte com as pragas">Nao dependa do tempo, nem da sorte com as pragas. Produza com qualidade sem agrotóxicos.</cite></footer>
                </blockquote>
                </div>

            </div>
    </div>
        );
    }
}
export default Contato;