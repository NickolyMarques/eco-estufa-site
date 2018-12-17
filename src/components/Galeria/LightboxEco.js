import Gallery from 'react-grid-gallery';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {listaGaleria, listaImages} from "../../services/galeriaService";
    

class LightboxEco extends Component{
    
    constructor(props){
        super(props);       
        this.state = {
            images: [],
            diretorio:"undefined"      

        };
        
    }

        setCustomTags (i) {
            return (
                i.tags.map((t) => {
                    return (<div
                            key={t.value}
                            style={customTagStyle}>
                            {t.title}
                            </div>);
                })
            );
        }
    

componentDidMount(){
    
   listaImages(dados => this.setState(dados), this.props.diretorio);
}

galleryList(){
    return this.state.images.map((item , indice) => {
         return(
             
             <div class="col-sm-6">
             <div key = {indice} class="card" >
             <img class="card-img-top" src={"/galeria/"+item.src} alt={item.tags}/>
             <div class="card-body">
               <h5 class="card-title">{item.tags}</h5>
               <p class="card-text">{item.tags}</p>
               </div>
               </div>
               </div>
               
               
            
         )
     })
 }
 
 render() {
    var images =
            this.state.images.map((i) => {
                i.customOverlay = (
                        <div style={captionStyle}>
                        <div>{i.tags}</div>
                        {i.hasOwnProperty('tags') &&
                         this.setCustomTags(i)}
                    </div>);
                return i;
            });
    return(
            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"}}>
            <Gallery
        images={images}
        enableImageSelection={true}        
        />
            </div>
    );
}
}

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};

export default LightboxEco;
 
