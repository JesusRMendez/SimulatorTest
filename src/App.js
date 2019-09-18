import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import TitleTeam from './Components/Headers/HeaderTitle';
import BigTeam from './Components/BigTeam/BigTeam';
import ConfirmationSelected from './Components/ConfirmationSelected/ConfirmationSelected';

const presidentPhotoIndex=2;
const regidorPhotoIndex = 18;

class App extends React.Component{
  state = {
    imagesTeam: ["images/abanico.png", "images/prm.png", "./images/ndv.png"],
    TeamName: ["Partido Abanico", "PRM", "No Deseo Votar"],
    teamSelected: 0,
    viewOrder: ["teamSelected", "teamConfirmation", "presidentSelected"],
    currentOrder: "teamSelected"
  }
  nextView(view){
    this.setState({currentOrder: view});
  }
  selectTeam(index){
    this.setState({teamSelected: index, currentOrder: "teamConfirmation"});

  }
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
  showTeamConfirmation(){
    return <ConfirmationSelected src={this.state.imagesTeam[this.state.teamSelected]} 
        onclick={this.nextView.bind(this, "presidentSelected")} />
  }
  viewScreen(){
    switch(this.state.currentOrder){
      case "teamSelected":
        return this.showTeam();
      case "teamConfirmation":
        return this.showTeamConfirmation();
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
