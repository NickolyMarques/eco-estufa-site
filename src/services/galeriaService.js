import { URL_API } from "./base";

export function galeriaService(callback){
    fetch(`${URL_API}/listagaleria`,{
        method: 'post'
      })
    .then(resultado => resultado.json().then(callback));
}

export function listaImages(callback,diretorio){
    var params = {
    method: 'POST',
    body: 'diretorio='+diretorio,
    headers: new Headers( {'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})
     
    }
    fetch(`${URL_API}/imagemdirectorio`, params).then(resultado => resultado.json().then(callback));
    }

