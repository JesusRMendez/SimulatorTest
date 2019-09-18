import React from 'react';
// import './HeaderTitle.css';

function Thumbail(props) {

 
    return (
        <div className="col-md-2" id="tripleCandidato" style={{width:"33%"}}>
            <a href="#thumb" onClick={props.onclick}>
                <div className="col-xs-12" style={{border:"solid",borderWidth:"1px",marginBottom: "5%"}}>
                        <div style={{display: "flex",justifyContent: "flex-end"}}>
                            <div className="ml-auto p-2 bd-highlight PosicionCandidato" 
                                        style={{width: "16%",padding: "0 !important",height: "14% !important"}}>
                                <p className="posicion">{props.positionNumber}</p>
                            </div>
                        </div>
                    <div className="ml-6">
                            <img src={props.src} alt="Lights" className="img-thumbnail" style={{border: "0px"}} />
                    </div>
                    <div className="ml-6" style={{textAlign:"center",overflow:"hidden",fontSize: "x-small",fontWeight: "bold",paddingTop:"1%"}}>
                        <p className="candidato" style={{marginBottom: "1%"}}>
                            {props.canditateName === "" ? "CANDIDATO " + props.positionNumber : props.canditateName} A</p>
                        <p className="candidato2">{props.positionName}</p>
                    </div>

                </div>
            </a>
        </div>
    );
}

export default Thumbail;
