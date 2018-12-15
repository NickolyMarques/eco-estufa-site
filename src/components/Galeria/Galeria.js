import React, {Component} from 'react';
import Lightbox from 'react-images';
import {recuperaProdutos} from "../../services/recuperaProdutosService";
import Demo4 from "./Demo4";

class Galeria extends Component{

   render() {
        return(
            <div className="container" id="quemsomos">
            <div className="row">
            <div className="col with-margin-top">
                       
                       <Demo4/ >
                       {document.getElementById('demo4')}
          </div>
          </div>
          </div>

        );
    }
}

export default Galeria; 