import React from 'react';
import './HeaderTitle.css';

function HeaderTitle(props) {
    function showConfirmation(props){
        if (props.mode === "confirmation" || props.mode === "teamConfirmation")
        return (
                <div class="row bg-Index" style={{margin: "0px"}}>
                    <a className="col-md-3 btn btn-danger" href="#back" onClick={props.back} style={{borderRadius:"0px"}}>
                        <h3 class="BotonesFont negrita ">RETORNAR</h3></a>
                        <div className="col-md-6 divPadre">
                            <div className="divHijo">
                                <h5 className="negrita margin CentralTexto">TOQUE NUEVAMENTE EL RECUADRO PARA CONFIRMAR</h5>
                            </div>
                        </div>
                        <a className="col-md-3 btn btn-success colorblack" 
                        href="#next" style={{borderRadius:"0px"}}  onClick={props.next}>
                            <h3 id="blink" className="luz">CONTINUAR</h3>
                        </a>
                </div>

        );
    }

    function showCabeceraCentradas(props){
        if (props.mode ==="teamSelected" || props.mode === "teamConfirmation"){
            return (
                <div className="row">
                    <div className="col-md-12 centrado">
                        <h6 className="hTituloPrincipales negrita height"></h6>
                        <h2 className="hTituloPrincipales negrita">PARTIDO POLITICO</h2>
                        <h6 className="parpadea text recuadro">Toque el Recuadro de su Preferencia</h6>
                    </div>  
                </div>
                
            );
        }else{
            return (
                <div class="row">
                    <div style={{justifyContent: "flex-start", flexDirection: "row", padding: "0px", margin: "0px",width: "10%"}}>
                            <img src={props.team} className="img img-thumbnail margin-left" alt="Lights"
                                    id="imgPartido" style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div class="centrado CabezeraCentrada" style={{width: "80%"}}>
                        <h6 id="Nivel" class="hTituloNivel">Nivel: Nacional</h6>
                        <h2 class="parpadea text heid">{props.JobTitle}</h2>
                        <h6 class="parpadea text" style={{fontSize: "12px", margin: "0%"}}>TOQUE EL RECUADRO DE SU PREFERENCIA</h6>
                    </div>
                    <div class="derecha" 
                    style={{padding: "0px", margin: "0px", width: "10%", justifyContent: "flex-end", flexDirection: "row"}}>
                        <img src={"images/"+(props.mode === "confirmation" ? props.confirmation : props.mode)+".png"}  alt="cargo" style={{width: "100%", height: "100%"}}
                        className="img img-thumbnail margin-right" id="imgCargo"/>
                    </div>
                </div>

                );
        }
       
    }
    return (
        <div>
            <div className="col-md-12">    
                <div className="row  bg-Index">
                    <div className="col-md-12">
                    {showCabeceraCentradas(props)}
                       
                    </div>
                </div>
                <div className="clearfix"></div>
                {showConfirmation(props)}
            </div>
            <br/>

        </div>
        
    );
}

export default HeaderTitle;
