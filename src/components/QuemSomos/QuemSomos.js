import React, {Component} from 'react';
import './QuemSomos.css';
import bandera from "./img/brasil_flag.png";
import eco from "./img/quemsomos-ecoestufas.jpg";
import scrollToComponent from 'react-scroll-to-component';

class QuemSomos extends Component{
    componentDidMount(){
        scrollToComponent(this.refs.quemsomos);
    }
    render(){
        return(
            <div className="container" id="quemsomos">
             <div className="row">
             <div className="col">
            <h1 ref="quemsomos" className="content-head">Quem Somos</h1>
            <p>A Eco Estufas Agrícolas Ltda nasceu em 2012, unindo a experiência de 10 anos em plasticultura com a experiência de 20 anos em tecnologia na produção industrial, sempre buscando a melhor solução em "Cultivo Protegido, Cultivo Controlado e Coberturas em Geral".</p>
            <p>Trabalhamos com materiais de excelente qualidade e com garantia comprovada, tubos e perfis metálicos galvanizados a fogo, sempre seguindo normas técnicas da ABNT(Associação Brasileiras de Normas Técnicas). Nossa equipe altamente qualificada, estará sempre pronta para elaborar projetos que atendam as necessidades de nossos clientes, buscando um atendimento personalizado desde o orçamento até o acompanhamento Pós-venda.</p>
            <p>Situada em Bragança Paulista, mais conhecida com região Bragantina e vizinha de Atibaia, uma das principais regiões produtoras de flores do país, estamos próximo a capital de São Paulo (90km), facilitando a logística de entrega para qualquer lugar do Brasil.</p>
            <p>As mudanças climáticas e o uso descontrolado dos recursos naturais estão causando mudanças drásticas no mundo atual.</p>
            <p>Nesse sentido é evidente o problema a ser objeto de profunda pesquisa, por isso estamos sempre nos atualizando em busca de verdadeiras soluções para proteger sua produção, qualquer que seja o seu cultivo ou seu produto final.</p>
            </div> 
            </div>
            <hr/>   
            <div className="row">
             <div className="col-sm-12 col-md-8">
                <blockquote class="blockquote">
                     <p class="mb-0">Missão e valores :</p>
                     <footer class="blockquote-footer">"Cultivar um mundo sustentável<cite title="Cultivar um mundo sustentável"> para nós e as futuras gerações é o nosso compromisso, com atitudes responsáveis em favor do planeta, colaborando para uma sociedade mais justa, ambientalmente equilibrada e economicamente prospera."</cite></footer>
                </blockquote>   
              </div>  
              <div className="col-sm-12 col-md-4">
              <img className="rounded mx-auto d-block" src={bandera}/>
              </div>
              </div>
              <hr/> 
              <div className="row">
                 <div className="col">
                    <img className="rounded mx-auto d-block img-fluid" src={eco}/>
                </div>
             </div>

    </div>
        );
    }
}
export default QuemSomos;