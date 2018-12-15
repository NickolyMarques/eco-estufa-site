import React, {Component} from 'react';
import {enviarEmail} from "../../services/emailService";
import scrollToComponent from 'react-scroll-to-component';
import { METHOD_ORCAMENTO } from "../../services/base";
import './Orcamento.css';

class Orcamento extends Component{
       constructor(props){
              super(props);
              this.handleCloseAlert = this.handleCloseAlert.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
              this.state = {
                  envio:''
              }
          }

          handleSubmit(event) {
                 debugger;
              event.preventDefault();
              let formulario={};
              formulario['nome']=this.refs.nome.value;
              formulario['telefone']=this.refs.telefone.value;
              formulario['email']=this.refs.email.value;
              formulario['assunto']=this.refs.assunto.value;
              formulario['empresa']=this.refs.empresa.value;
              formulario['cidade']=this.refs.cidade.value;
              formulario['finalidade']=this.refs.finalidade.value;
              formulario['largura']=this.refs.largura.value;
              formulario['comprimento']=this.refs.comprimento.value;
              formulario['alturaLateral']=this.refs.alturaLateral.value;
              
              enviarEmail(dados => this.setState(dados), formulario,METHOD_ORCAMENTO);
              this.refs.nome.value="";
              this.refs.telefone.value="";
              this.refs.assunto.value="";
              this.refs.email.value="";
              this.refs.empresa.value="";
              this.refs.cidade.value="";
              this.refs.finalidade.value="";
              this.refs.largura.value="";
              this.refs.comprimento.value="";
              this.refs.alturaLateral.value="";
              scrollToComponent(this.refs.contatoText);
          }
          handleCloseAlert(event){
              this.setState({envio:''})
      
          }
      


      
    render(){
        return(
            <div className="container" id="orcamento">
            <div className="row">
            <div className="col-sm">
            <h3 className="text-uppercase" ref = "contatoText" id="contatoText"><i className="fa fa-envelope" ></i>Ficou com dúvidas? Gostaria de uma visita? Preencha o formulário abaixo e nós entraremos em contato !</h3>
              {  this.state.envio.indexOf('ok')> -1 &&
             
              <div className="alert alert-success alert-dismissible fade show">
                 <button type="button" className="close" data-dismiss="alert" onClick={this.handleCloseAlert}>&times;</button>
                 <strong>Successo</strong> O seu email foi enviado com sucesso.
              </div>
              }
               </div>
          </div>
          <form onSubmit={this.handleSubmit}>
           <div className="row">
               <div className="col-sm-12 col-md-6">

               
                   <div className="form-group">
                           <label htmlFor="nameComplete">* Nome</label>
                           <input type="text" ref="nome" required className="form-control" id="nameComplete" placeholder="Nome Completo"/>
                   </div>
                   <div className="form-group">
                           <label htmlFor="nameComplete">* Telefone</label>
                           <input type="text" ref="telefone" required className="form-control" id="nameComplete" placeholder="DDD + Número do telefone"/>
                   </div>
                    <div className="form-group">
                           <label htmlFor="inputEmail4">* E-mail</label>
                           <input type="email" ref="email" required className="form-control" id="inputEmail4" placeholder="E-mail"/>
                    </div>
                    <div className="form-group">
                           <label htmlFor="inputAssunto">* Assunto</label>
                           <input type="text" ref="assunto" required className="form-control" id="inputAssunto" placeholder="Assunto"/>
                    </div>
                    <div className="form-group">
                           <label htmlFor="inputEmpresa">Empresa</label>
                           <input type="text" ref="empresa" className="form-control" id="inputEmpresa" placeholder="Empresa"/>
                    </div>

                 
                   
                
                  
               </div>
               <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                           <label htmlFor="inputCidade">* Cidade</label>
                           <input type="text" ref="cidade" required className="form-control" id="inputCidade" placeholder="Cidade"/>
                    </div>
                    <div className="form-group">
                           <label htmlFor="finalidade">Finalidade</label>
                           <input type="text" ref="finalidade" className="form-control" id="finalidade" placeholder="Finalidade"/>
                   </div>
                   <div className="form-group">
                           <label htmlFor="largura">Largura</label>
                           <input type="text" ref="largura" className="form-control" id="largura" placeholder="Largura"/>
                   </div>
                    <div className="form-group">
                           <label htmlFor="comprimento">Comprimento</label>
                           <input type="text" ref="comprimento" className="form-control" id="comprimento" placeholder="Comprimento"/>
                    </div>
                    <div className="form-group">
                           <label htmlFor="alturaLateral">Altura Lateral</label>
                           <input type="text" ref="alturaLateral" className="form-control" id="alturaLateral" placeholder="Altura Lateral"/>
                    </div>
                    <button className="btn btn-default btn-lg" type="reset">Limpar</button>
                    <button type="submit" className="btn btn-default btn-lg float-right">Enviar</button>
               </div>

           </div>
           </form>
   </div>

        );
    }
}
export default Orcamento;