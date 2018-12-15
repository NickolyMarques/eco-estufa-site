import  React, {Component} from "react";

import './Footer.css'
class Footer extends  Component{
    render(){
        return(
            <footer className="page-footer font-small pt-4">
            <div className="footer-copyright text-center py-3" id="copyright">© 2018 Copyright:
              <a href="http://markesdesign.com.br"> Markes Design</a>
            </div>
            </footer>



        );
    }

}
export default Footer;