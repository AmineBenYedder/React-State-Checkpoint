import React from "react";
import imgg from "./profile-picture.jpeg"



 class Person extends React.Component{
    constructor(){
    super()
    this.state={
        fullName : "Mohamed ben Fouelen ben Falten",
        bio : "Mohamed, 29ans , tnajem tkoul ingénieur , nlawej ala khedma fi touskié informatique",
        profession : "Developpeur Fullstack ",
        imgSrc :imgg ,
        timer : 0    
    }
    }
    componentDidMount (){
        setInterval(()=>(this.setState({timer:this.state.timer + 1}) ),1000)
    }

render() {
    
    return(
        <div>
          <ul>
            <li> <h1>{this.state.fullName}</h1></li>
            <li><h2>{this.state.profession}</h2></li>
            <li><h3>{this.state.bio}</h3></li>
           <li><img src={this.state.imgSrc} alt="avatar" /></li>
           <p>{this.state.timer}</p>
          </ul>

        </div>
      
    )
}}
;

export default Person