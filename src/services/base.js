export const URL_API = "http://localhost/api/v1";
export const METHOD_CONTATO = "contato";
export const METHOD_ORCAMENTO = "contato";

export const queryString = function convertToQueryString(form){
    var queryForm="";

    for (var key in form){
        queryForm += key+'='+form[key]+"&";

    }
    return queryForm;
   }