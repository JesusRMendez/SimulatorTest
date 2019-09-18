import React from 'react';
// import './HeaderTitle.css';

function BigTeam(props) {
    return (

        <div id="dobleCandidato" className="dobleCandidato">
        <div className="thumbnail">
            <a href="#team" onClick={props.onclick}>
                <img src={props.src} alt="Lights"
                className="img-thumbnail imagenCandidato"></img>
                <h5 className="candidato" 
                        style={{color: "black !important", 
                                fontWeight :"bold !important"}}>
                    {props.Name}
                </h5>

            </a>
        </div>
    </div>
    );
}

export default BigTeam;
