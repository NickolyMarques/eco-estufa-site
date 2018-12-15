import { URL_API } from "./base";


export function recuperaProdutos(callback,pagina){
    var params = {
        method: 'POST', 
        body: 'pagina='+pagina,
        headers: new Headers( {'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    } 
   fetch(`${URL_API}/listarproduto`, params).then(resultado => resultado.json().then(callback));
}

