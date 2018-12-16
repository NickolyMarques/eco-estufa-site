import { URL_API } from "./base";

export function consultarCarouselImagens(callback){
    fetch(`${URL_API}/listarcarousel`,{
        method: 'post'
      })
    .then(resultado => resultado.json().then(callback));
}
