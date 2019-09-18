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
    currentOrder: "teamSelected"
  }
  nextView(view){
    this.setState({currentOrder: view});
  }
  generateThumbs(count, image, indexImage, candidateName, positionName){
  var thumbails = [];
    for(var i = 1; i<count; i++){
      thumbails.push(<Thumbail positionName={positionName} positionNumber={i} 
            image={indexImage === i ? image : ""} lastImage={i === count} canditateName={indexImage === i ? candidateName : ""} />)
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
  showTeamConfirmation(indexConfirmation){
    return <ConfirmationSelected src={this.state.imagesTeam[this.state.teamSelected]} 
        onclick={this.nextView.bind(this, indexConfirmation)} />
  }
  showPresident(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
              {this.generateThumbs(16, this.state.photos[0], 2, "Luis Abinader", "PRESIDENTE(A)")}
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
