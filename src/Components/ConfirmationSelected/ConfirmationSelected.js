import React from 'react';
// import './HeaderTitle.css';

function ConfirmationSelected(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <a href="#confirmed" onClick={props.onClick}>
                    <div className="d-flex justify-content-center bd-highlight mb-3">
                        <div className="p-2 bd-highlight imagenConfirmar" 
                        style={{borderWidth:"1px", marginBottom: "5%", padding:"0px !important", margin:"0px"}}>
                            <div className="ml-6">
                                    <img src={props.src} alt="Lights" className="img-thumbnail" style={{border: "0px"}}/>
                                
                            </div>
                                <div className="ml-6" style={{textAlign:"center",overflow:"hidden",fontSize:"x-large",fontWeight: "bold",paddingTop:"1%"}}>
                                    <p className="candidato2"></p>
                                </div>

                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ConfirmationSelected;
