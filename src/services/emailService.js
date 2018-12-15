import { URL_API, queryString } from "./base";

export function enviarEmail(callback,form,method){

    var queryForm = queryString(form);
    var params = {
        method: 'POST',
        body: queryForm,
        headers: new Headers( {'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    } 
    

   fetch(`${URL_API}/${method}`, params).then(resultado => resultado.json().then(callback));


}

