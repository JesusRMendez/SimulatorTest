import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import TitleTeam from './Components/Headers/HeaderTitle';
import BigTeam from './Components/BigTeam/BigTeam';
import ConfirmationSelected from './Components/ConfirmationSelected/ConfirmationSelected';
import Thumbail from './Components/Thumbail/Thumbail';

class App extends React.Component{
  state = {
    imagesTeam: ["images/abanico.png", "images/prm.png", "./images/ndv.png"],
    photos: ["images/2.jpeg", "images/18.jpg", "luis.jpg"],
    TeamName: ["Partido Abanico", "PRM", "No Deseo Votar"],
    teamSelected: 0,
    viewOrder: ["teamSelected", "teamConfirmation", "presidentSelected"],
    currentOrder: "teamSelected",
    currentConfirmationImage: "",
    currentNumber: "",
    currentName: "",
    currentJobTitle: "",
    nextViewName: "",
    beforeViewName: "",
    selecteds: []
  }
  nextView(view){
    var jobTitle = "";
    switch(view){
      case "senador":
          jobTitle = "SENADOR(A)";
          break;
        case "diputado":
            jobTitle = "DIPUTADO(A)";
            break;
        case "regidor":
            jobTitle = "REGIDOR(A)";
            break;
        case "alcalde":
            jobTitle = "ALCALDE(SA)";
            break;
      default:
          jobTitle = this.state.currentJobTitle;
        break;
    }
    this.setState({currentOrder: view, currentJobTitle: jobTitle});
  }
  setCurrentConfirmation(currentImage, i, nextViewName, name, jobTitle){
    var selectedConfirmations = this.state.selecteds;
    selectedConfirmations.push(i);
    this.setState({currentConfirmationImage: currentImage, 
                  currentName: name,
                  currentJobTitle:jobTitle,
                    currentNumber: i, 
                    nextViewName: nextViewName, 
                    beforeViewName: this.state.currentOrder,
                    selecteds: selectedConfirmations});
                  
    this.nextView("confirmation");
  }
  generateThumbs(count, image, indexImage, candidateName, positionName, nextViewName){
    var thumbails = [];
    var self = this;
    for(var i = 1; i<=count; i++){
      let currentImage = "";
      let currentCandidateName = "";
      if (i === count){
        currentImage ="images/none.png";
      }else if (i !== indexImage){
        currentImage ="images/candidato.png";
      }else{
        currentImage = image;
        currentCandidateName = candidateName;
      }
        thumbails.push(<Thumbail positionName={positionName} positionNumber={i} 
              src={currentImage}
              canditateName={currentCandidateName}
              onclick={this.setCurrentConfirmation.bind(self, currentImage, i, nextViewName, currentCandidateName, positionName)} />)
    }
    return thumbails;
  }
  selectTeam(index){
    this.setState({teamSelected: index, currentOrder: "teamConfirmation",  
                    nextViewName: "presidentSelected", 
                    beforeViewName: "teamSelected",
                    currentJobTitle: "PRESIDENTE(A)"});
  }

  //Views
  showTeam(){
    return (
      <div class="row">
          {this.state.imagesTeam.map((item, key) =>
              <BigTeam src={item} Name={this.state.TeamName[key]} onclick={this.selectTeam.bind(this,key)}/>
              )
            }
      </div>
    )
  }
  showConfirmation(image, indexConfirmation, nextViewName, name, jobTitle, ){
    return <ConfirmationSelected src={image} 
          number={indexConfirmation}
          onclick={this.nextView.bind(this, nextViewName)} 
          name={name} jobTitle={jobTitle}/>
  }
  showTeamConfirmation(indexConfirmation){
    return <ConfirmationSelected src={this.state.imagesTeam[this.state.teamSelected]} 
        onclick={this.nextView.bind(this, indexConfirmation)} 
        number="" name="" jobTitle="" />
  }
  showPresident(){

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
              {this.generateThumbs(16, this.state.photos[2], 1, "Luis Abinader", "PRESIDENTE(A)", "senador")}
          </div>
          </div>
        </div>
    );
  }

  showSenators(){
    
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
              {this.generateThumbs(16, this.state.photos[0], 0, "", "SENADOR(A)", "diputado")}
          </div>
          </div>
        </div>
    );
  }

  showDiputados(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
              {this.generateThumbs(65, this.state.photos[0], 0, "", "DIPUTADO(A)", "alcalde")}
          </div>
          </div>
        </div>
    );
  }
  showAlcades(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
              {this.generateThumbs(16, this.state.photos[0], 2, "Manuel Jimenez", "ALCALDE(SA)", "regidor")}
          </div>
          </div>
        </div>
    );
  }
  showRegidores(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
              {this.generateThumbs(65, this.state.photos[1], 18, "Jesús Méndez", "REGIDOR(A)", "end")}
          </div>
          </div>
        </div>
    );
  }
  back(){
    var selecteds = this.state.selecteds;
    selecteds.pop();
    this.setState( {currentOrder: this.state.beforeViewName, selecteds: selecteds});
    
  }
  next(){
    this.setState( {currentOrder: this.state.nextViewName});
  }
  viewScreen(){
    console.log(this.state.currentOrder);
    switch(this.state.currentOrder){
      case "teamSelected":
        return this.showTeam();
      case "teamConfirmation":
        return this.showTeamConfirmation("presidentSelected");
      
        case "presidentSelected":
            return this.showPresident();
        case "confirmation":
            return this.showConfirmation(this.state.currentConfirmationImage, 
                               this.state.currentNumber, this.state.nextViewName, 
                               this.state.currentName,
                               this.state.currentJobTitle);
        case "senador":
          return this.showSenators();
        case "diputado":
          return this.showDiputados();
        case "regidor":
          return this.showRegidores();
        case "alcalde":
          return this.showAlcades();
      default:
        return "";
    }
  }
  render(){
    //Get all candidate codes
    fetch("https://github.com/JesusRMendez/PRMImges/blob/master/candidate.json").then(function(value){
      debugger;
    });
    return (
      <div> 
        <TitleTeam mode={this.state.currentOrder} back={this.back.bind(this)} next={this.next.bind(this)}
                JobTitle={this.state.currentJobTitle} team={this.state.imagesTeam[this.state.teamSelected]}
                confirmation={this.state.beforeViewName} />
        <br/>
          <div class="col-md-12">
           {this.viewScreen()}
              
          </div>
        </div>
    );
  }
}

export default App;
