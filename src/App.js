import React, { Component } from 'react';
import './App.css';
import './fonts.css';

import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Carrosel from './components/Carrosel/Carrosel';
import Conteudo from './components/Conteudo/Conteudo';
import FaleConosco from './components/FaleConosco/FaleConosco';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import {Switch, Route} from "react-router-dom";
import QuemSomos from './components/QuemSomos/QuemSomos';

//produtos
import Produtos from './components/Produtos/Produtos';


import Galeria from './components/Galeria/Galeria';
import GaleriaDetalhe from './components/Galeria/GaleriaDetalhe';
import Orcamento from './components/Orcamento/Orcamento';

class App extends Component {
  render() {
    return (
      <div>
      <MenuSuperior/>
      <Switch>
      <Route exact path="/" render={props =>
        <div>
          <Carrosel/>
          <Conteudo/>
          <FaleConosco/>
          <Contato/>
        </div>
        } />
        <Route path="/quemsomos" render={props =>
        <div>
        <QuemSomos/>
        <Contato/>
        </div>
        } />
        <Route path="/produtos" render={props =>
        <div className="container produtos">
          <Produtos/>
          <Contato/>    
        </div>
        
        } />
        <Route path="/galeria" render={props =>
        <div className="container">
        <div className="row">
          <Galeria/>
          <Contato/>
          </div>    
        </div>
        } />
        <Route path="/detalhe-galeria" render={props =>
        <div className="container">
        <div className="row">
          <GaleriaDetalhe {...props}/>
          <Contato/>
          </div>    
        </div>
        } />
        <Route path="/orcamento" render={props =>
        <div>
          <Orcamento/>  
        </div>
        } />


      </Switch>
      
      <Footer/>
      </div>
    );
  }
}

export default App;

      
