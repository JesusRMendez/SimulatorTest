import React from 'react';
// import './HeaderTitle.css';

function ConfirmationSelected(props) {
    function position(number){
        if (number !== ""){
            return(
                <div style={{display: "flex",justifyContent: "flex-end"}}>
                    <div class="ml-auto p-2 bd-highlight PosicionCandidato" 
                            style={{width: "9%",padding: "0 !important",height: "14% !important"}}>
                        <p class="posicion posicionConfirmar">{number}</p>
                    </div>        
                </div>
               
    
            );
        }
     
    }
    function setName(position, name, jobTitle){
        if (position !== ""){
            name = name === "" ? "CANDIDATO " : name;
            return (

                <div className="ml-6 candidate">
                    <p class="candidato" style={{marginBottom: "1%;"}}>{name} A</p>
                    <p class="candidato2">{jobTitle}</p>
                </div>
            );
        }
       
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <a href="#confirmed" onClick={props.onclick}>
                    <div className="d-flex justify-content-center bd-highlight mb-3">
                        <div className="p-2 bd-highlight imagenConfirmar" 
                        style={{borderWidth:"1px", marginBottom: "5%", padding:"0px !important", margin:"0px"}}>
                          
                            {position(props.number)}
                            <div className="ml-6">
                                    <img src={props.src} alt="Lights" className="img-thumbnail" style={{border: "0px"}}/>
                                
                            </div>
                            <div className="ml-6" style={{textAlign:"center",overflow:"hidden",fontSize:"x-large",fontWeight: "bold",paddingTop:"1%"}}>
                                <p className="candidato2"></p>
                            </div>
                            {setName(props.number, props.name, props.jobTitle)}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ConfirmationSelected;
