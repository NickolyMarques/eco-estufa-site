import { URL_API } from "./base";

export function consultarPaginaProdutos(callback){
    fetch(`${URL_API}/contarprodutos`,{
        method: 'post'
      })
    .then(resultado => resultado.json().then(callback));
}

