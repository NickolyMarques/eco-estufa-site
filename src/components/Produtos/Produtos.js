import React, {Component} from 'react';
import {recuperaProdutos} from "../../services/recuperaProdutosService";
import {consultarPaginaProdutos} from "../../services/produtoService";
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import scrollToComponent from 'react-scroll-to-component';
import './Produtos.css'

class Produtos extends Component{

    constructor(props){
        super(props);
        this.handlePageChange=this.handlePageChange.bind(this);
        this.state = {
            numelementos:0,
            erro:false,
            paginaAtual:1,
            produtos:[]
        }
    }

    componentDidMount(){
        consultarPaginaProdutos(dados => this.setState(dados));
        recuperaProdutos(dados => this.setState(dados),this.state.paginaAtual);
        scrollToComponent(this.refs.produto);
    }

    productList(){
       return this.state.produtos.map((item , indice) => {
            return(
                
                <div class="col-sm-6">
                <div key = {indice} className="card" >
                <img class="card-img-top" src={"/produtos/"+item.imagem} alt={item.produto}/>
                <div class="card-body">
                  <h5 class="card-title">{item.produto}</h5>
                  <p class="card-text">{item.descricao}</p>
                  </div>
                  </div>
                  </div>
                  
                  
               
            )
        })
    }
    
    createPaginationList() {
        return (<div className="col-sm-12 container pagination">
        <Pagination
          className="pagination"
          itemClass= "page-item"
          linkClass= "page-link"
          activePage={this.state.paginaAtual}
          itemsCountPerPage={5}
          totalItemsCount={this.state.numelementos}
          pageRangeDisplayed={Math.ceil(this.state.numelementos/5)}
          onChange={this.handlePageChange}
        />
      </div>);
    }

    createIntroProduct(){

        return (<div className="col-sm-12">
            <h1 ref="produto" id="produto" className="content-head">Conheça os nossos Produtos</h1>
            <div className="jumbotron produtos">
            <h3 className="content-head">Aplicações das Estufas Agrícolas (Casas de vegetação)</h3> 
            <p className="strong padding15t">Modelos:</p> 
            <ul className="list-group">
                <li className="list-group-item">Estufas Galvanizadas modelo Maxx.</li>
                <li className="list-group-item">Parte Aérea Galvanizada (inclui perfis para fixação) modelo PAG Maxx. </li>
                <li className="list-group-item">Parte Aérea Parcial (não inclui postes e perfis para fixação) modelo PAP Maxx.</li>
                <li className="list-group-item">Estufas com abertura superior (maior circulação de ar quente) modelo Vent Top.</li>
                
            </ul>
            <p className="strong padding15t">Medidas:</p> 
            <ul className="list-group">
                <li className="list-group-item">Larguras: 6,40m / 7,00m / 8,00m (geminadas sem limite).</li>
                <li className="list-group-item">Comprimento: Múltiplos de 3,00m, 4,00m e 4,50m.</li>
                <li className="list-group-item">Altura: 2,20m / 3,20m / 4,00m e 4,50m.</li>

            </ul>
            <p className="padding15t">"Todas as medidas podem sofrer alterações, de acordo com o projeto personalizado na melhor forma de anteder as necessidades do cliente”.</p> 
          </div>
          </div>);
    }
    handlePageChange(pageNumber) {
        this.setState({paginaAtual:pageNumber});
        recuperaProdutos(dados => this.setState(dados),pageNumber);
        

    }
    render(){
        return(
            <div className="row">
                {this.createIntroProduct()}
                { this.state.numelementos >0 &&
                    this.productList()
                }
                {this.state.numelementos > 0 &&
                    this.createPaginationList()
                }

                
            </div>
            
        );
    }
}
export default Produtos;