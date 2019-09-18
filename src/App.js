import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import TitleTeam from './Components/Headers/HeaderTitle';
import BigTeam from './Components/BigTeam/BigTeam';
import ConfirmationSelected from './Components/ConfirmationSelected/ConfirmationSelected';
import Thumbail from './Components/Thumbail/Thumbail';

const presidentPhotoIndex=2;
const regidorPhotoIndex = 18;

class App extends React.Component{
  state = {
    imagesTeam: ["images/abanico.png", "images/prm.png", "./images/ndv.png"],
    photos: ["images/abanico.png"],
    TeamName: ["Partido Abanico", "PRM", "No Deseo Votar"],
    teamSelected: 0,
    viewOrder: ["teamSelected", "teamConfirmation", "presidentSelected"],
    currentOrder: "teamSelected",
    currentConfirmationImage: "",
    currentNumber: "",
    nextViewName: "",
  }
  nextView(view){
    this.setState({currentOrder: view});
  }
  setCurrentConfirmation(currentImage, i, nextViewName){
    this.setState({currentConfirmationImage: currentImage, currentNumber: i, nextViewName: nextViewName});
    this.nextView("confirmation");
  }
  generateThumbs(count, image, indexImage, candidateName, positionName, nextViewName){
  var thumbails = [];
  var self = this;
    for(var i = 1; i<count; i++){
    let currentImage = "";
    if (i === count){
      currentImage ="images/none.PNG";
      }else if (i !== indexImage){
        currentImage ="images/candidato.PNG";
      }else{
        currentImage = image;
      }
      
      thumbails.push(<Thumbail positionName={positionName} positionNumber={i} 
            src={currentImage}
            canditateName={indexImage === i ? candidateName : ""}
            onclick={this.setCurrentConfirmation.bind(self, currentImage, i, nextViewName)} />)
    }
    return thumbails;
  }
  selectTeam(index){
    this.setState({teamSelected: index, currentOrder: "teamConfirmation"});
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
  showConfirmation(image, indexConfirmation, nextViewName){
    return <ConfirmationSelected src={image} number={indexConfirmation}
          onclick={this.nextView.bind(this, nextViewName)} />
  }
  showTeamConfirmation(indexConfirmation){
    return <ConfirmationSelected src={this.state.imagesTeam[this.state.teamSelected]} 
        onclick={this.nextView.bind(this, indexConfirmation)} number="" />
  }
  showPresident(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
              {this.generateThumbs(16, this.state.photos[0], 2, "Luis Abinader", "PRESIDENTE(A)", "diputadoView")}
          </div>
          </div>
        </div>
    );
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
            return this.showConfirmation(this.state.currentConfirmationImage,  this.state.currentNumber, this.state.nextViewName);
          
      default:
        return "";
    }
  }
  render(){
    return (
      <div> 
        <TitleTeam mode={this.state.currentOrder}/>
        <br/>
          <div class="col-md-12">
           {this.viewScreen()}
              
          </div>
        </div>
    );
  }
}

export default App;
